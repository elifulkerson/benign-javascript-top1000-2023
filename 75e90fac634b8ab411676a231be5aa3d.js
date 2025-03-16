var DUMPSTER_LIBRARY_VERSION = "1.4.19";

// //<!-- Google Tag Manager -->
// (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
// })(window,document,'script','dataLayer','GTM-PKR8SN4');
// // <!-- End Google Tag Manager -->

try {
  if (localStorage.getItem("cly_force_cleanup")) {
    localStorage.removeItem("cly_force_cleanup"); /* ionut_p */
  }
} catch (e) {
  console.log("unable to run count.ly cleanup", e);
}

var createRingBuffer = function (length) {
  /* https://stackoverflow.com/a/4774081 */
  var pointer = 0,
    buffer = [];
  return {
    push: function (item) {
      buffer[pointer] = item;
      pointer = (pointer + 1) % length;
      return item;
    },
    find: function (matcher, removeIfFound) {
      for (let i = 0; i < buffer.length; i++) {
        var crt = buffer[i];
        if (crt && matcher(crt)) {
          if (removeIfFound) {
            buffer[i] = {};
          }
          return crt;
        }
      }
    },
    copy: function () {
      return buffer.slice();
    },
  };
};

function observe_shit(pattern, maxDelay, maxCnt) {
  var buff = createRingBuffer(100);
  // var observer = new PerformanceObserver(list => {
  //     list.getEntries().filter(entry => entry.name.match(pattern))
  //         .forEach(e => {
  //             //console.log('ON_FRAGMENT_LOADED2 new perf entry', e, e.name);
  //             buff.push(e);
  //         });
  // });
  // observer.observe({ entryTypes: ['resource'] })

  var parseHeaders = function (str) {
    if (!str || !str.trim) {
      return {};
    }
    var arr = str.trim().split(/[\r\n]+/);
    var headerMap = {};
    arr.forEach(function (line) {
      var parts = line.split(": ");
      var header = parts.shift();
      var value = parts.join(": ");
      headerMap[header] = value;
    });
    return headerMap;
  };
  var debounce = function (func, delay, maxSize) {
    var timeout;
    var argsBuff = [];

    return function () {
      const context = this;
      argsBuff = argsBuff.concat(Array.from(arguments));

      function flushData() {
        func.apply(context, [argsBuff]);
        argsBuff = [];
      }

      let later = function () {
        timeout = null;
        flushData();
      };

      clearTimeout(timeout);

      let callNow = argsBuff.length >= maxSize;
      if (callNow) {
        flushData();
      } else {
        timeout = setTimeout(later, delay || 250);
      }
    };
  };
  var flushMetrics = function (args) {
    if (args && args.length) {
      var xhr = new XMLHttpRequest();
      // xhr.open("POST", 'https://dumpster.cam4.com/perf', true)
      xhr.open("POST", "https://logger007.cam4.com/perf", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.send(JSON.stringify(args));
    }
  };

  var debouncedFlushMetrics = debounce(
    flushMetrics,
    maxDelay || 10000,
    maxCnt || 20
  );
  var lastTargetDuration = 0;
  var lastFragmentHeaderInfo = {
    url: "",
    headers: {},
  };
  var trackFragmentLoadedEvent = function (data) {
    var xhr = data.networkDetails;
    var frag = data.frag;
    if (!xhr || !frag) {
      return;
    }
    var responseHeaders = parseHeaders(xhr.getAllResponseHeaders());
    delete responseHeaders["cache-control"];
    delete responseHeaders["content-length"];
    delete responseHeaders["content-type"];
    delete responseHeaders["date"];
    lastFragmentHeaderInfo = {
      url: frag._url,
      headers: responseHeaders,
    };
  };

  function recordHLSEvent(data) {
    if (!data) {
      console.log("Unable to record event: no data provided");
      return;
    }

    setTimeout(function () {
      $.ajax({
        url: "https://logger007.cam4.com/log/hls",
        type: "POST",
        dataType: "json",
        contentType: "text/plain",
        timeout: 2000,
        data: JSON.stringify(data),
        error: function (err) {
          console.log("unable to record event", err, data);
        },
      });
    }, 0);
  }
  var trackPlayerEvent = function (data) {
    if (!data) {
      return;
    }
    console.log("trackPlayerEvent", data);
    var payload = {
      sessionUuid: ConnectionLogger.getSessionUuid(),
      event: data.name,
      details: data.name,
      error: (data.error || "") + "",
      errorDetails: {
        // TODO fix the backend and remove this
        details: data.name,
        error: (data.error || "") + "",
      },
    };
    if (typeof Cam4User !== "undefined") {
      payload.user = Cam4User.userName;
      payload.room = Cam4User.performerName;
    }
    // recordHLSEvent(payload)
  };
  var lastHlsEventURL = "";
  var trackHlsEvent = function (data) {
    if (!data) {
      return;
    }
    lastHlsEventURL = data.url || lastHlsEventURL;
    var hostname = "";
    try {
      hostname = new URL(lastHlsEventURL).hostname;
    } catch (ignored) {}

    console.log("trackHlsEvent", data);
    if (data.event === "hlsError") {
      var payload = {
        sessionUuid: ConnectionLogger.getSessionUuid(),
        event: data.event,
        edgeServer: hostname,
        details: data.details,
        fatal: data.fatal,
        type: data.type,
        errorDetails: {
          // TODO fix the backend and remove this
          details: data.details,
          fatal: data.fatal,
          type: data.type,
        },
      };
      if (typeof Cam4User !== "undefined") {
        payload.user = Cam4User.userName;
        payload.room = Cam4User.performerName;
      }
      recordHLSEvent(payload);
    }
  };

  var trackHlsEventV2 = function (data) {
    // console.log("trackHlsEventV2", data);
    // if (data.event === 'hlsManifestParsed') {
    //     videoIsAvailable = true;
    // }
  };

  var trackFragmentBufferedEvent = function (data) {
    var frag = data.frag;
    var stats = data.stats;
    if (!frag || !stats || frag.bitrateTest) {
      return;
    }
    var responseHeaders;
    if (lastFragmentHeaderInfo.url === frag._url) {
      responseHeaders = lastFragmentHeaderInfo.headers;
    } else {
      responseHeaders = {};
    }
    setTimeout(function () {
      // trequest ->  tfirst -> tparsed -> tbuffered -> tload
      var data = {};
      data.name = frag._url;
      data.ttfb = stats.tfirst - stats.trequest;
      data.load = stats.tload - stats.tfirst;
      data.parsing = stats.tparsed - stats.tload;
      data.buffer = stats.tbuffered - stats.tparsed;
      data.duration = stats.tbuffered - stats.tfirst;
      data.chunkDuration = frag.duration;
      data.targetChunkDuration = lastTargetDuration;
      data.bwEstimate = stats.bwEstimate; // bps
      if (stats.tbuffered - stats.trequest !== 0) {
        data.bw = Math.round(
          ((8 * stats.total) / (stats.tbuffered - stats.trequest)) * 1000
        ); // bps
      }
      data.size = stats.total;
      data.sn = frag.sn;
      data.headers = responseHeaders;
      if (typeof ConnectionLogger !== "undefined") {
        data.sessionUuid = ConnectionLogger.getSessionUuid();
      }
      if (typeof Cam4User !== "undefined") {
        data.username = Cam4User.userName;
        data.performerName = Cam4User.performerName;
      }
      debouncedFlushMetrics(data);
    }, 0);
  };
  var trackLevelLoadedEvent = function (data) {
    var details = data.details || {};
    lastTargetDuration = details.targetduration;
    var stats = data.stats;
    var xhr = data.networkDetails;
    if (!details || !stats) {
      return;
    }
    var responseHeaders = parseHeaders(xhr.getAllResponseHeaders());
    delete responseHeaders["cache-control"];
    delete responseHeaders["content-length"];
    delete responseHeaders["content-type"];
    delete responseHeaders["date"];
    setTimeout(function () {
      var data = {};
      data.name = details.url;
      data.duration = stats.tload - stats.trequest;
      data.chunkDuration = stats.chunkDuration;
      data.targetChunkDuration = lastTargetDuration;
      data.bwEstimate = stats.bwEstimate;
      data.size = stats.loaded;
      data.ttfb = stats.tfirst - stats.trequest;
      data.headers = responseHeaders;
      if (typeof ConnectionLogger !== "undefined") {
        data.sessionUuid = ConnectionLogger.getSessionUuid();
      }
      if (typeof Cam4User !== "undefined") {
        data.username = Cam4User.userName;
        data.performerName = Cam4User.performerName;
      }
      debouncedFlushMetrics(data);
    }, 0);
  };

  function registerOnLoadedEvent() {
    if (
      typeof Cam4Event !== "undefined" &&
      typeof Cam4Event.hlsPlayer !== "undefined"
    ) {
      Cam4Event.addEventListener(
        Cam4Event.hlsPlayer.PLAYER_EVENT,
        trackPlayerEvent,
        "dumpster_callback__ON_PLAYER_EVENT"
      );
      Cam4Event.addEventListener(
        Cam4Event.hlsPlayer.HLS_EVENT,
        trackHlsEvent,
        "dumpster_callback__trackHlsEvent"
      );
      Cam4Event.addEventListener(
        Cam4Event.hlsPlayer.ON_FRAG_BUFFERED,
        trackFragmentBufferedEvent,
        "dumpster_callback__ON_FRAGMENT_BUFFERED"
      );
      Cam4Event.addEventListener(
        Cam4Event.hlsPlayer.ON_FRAGMENT_LOADED,
        trackFragmentLoadedEvent,
        "dumpster_callback__ON_FRAGMENT_LOADED"
      );
      Cam4Event.addEventListener(
        Cam4Event.hlsPlayer.ON_LEVEL_LOADED,
        trackLevelLoadedEvent,
        "dumpster_callback__ON_LEVEL_LOADED"
      );
      Cam4Event.addEventListener(
        Cam4Event.hlsPlayer.HLS_EVENT_V2,
        trackHlsEventV2,
        "dumpster_callback__trackHlsEventV2"
      );
      console.log(
        "Cam4Event[ON_FRAGMENT_LOADED | ON_LEVEL_LOADED] listener registered"
      );
    } else {
      registerOnLoadedEvent.attempt = (registerOnLoadedEvent.attempt || 0) + 1;
      if (registerOnLoadedEvent.attempt > 10) {
        console.log("Cam4Event not available, giving up");
      } else {
        console.log(
          "Cam4Event not yet available, postponing listener registration (" +
            registerOnLoadedEvent.attempt +
            " attempt)"
        );
        setTimeout(registerOnLoadedEvent, 3000);
      }
    }
  }

  registerOnLoadedEvent();
}

// if (Math.random() < 0.5) {
// observe_shit('https://cam4-hls.xcdnpro.com/');
observe_shit("(\\.ts)|(\\.m3u)", 30000, 60);
// }

var accessLevelLabel = function (accessLevel) {
  if (accessLevel >= 50) {
    return "ADMIN";
  } else if (accessLevel >= 48) {
    return "COACH";
  } else if (accessLevel >= 47) {
    return "USER_MODERATOR";
  } else if (accessLevel >= 45) {
    return "SPECIAL_PERFORMER";
  } else if (accessLevel >= 40) {
    return "PERFORMER";
  } else if (accessLevel >= 33) {
    return "GOLD_PROMO";
  } else if (accessLevel >= 31) {
    return "GOLD_FREE";
  } else if (accessLevel >= 30) {
    return "GOLD";
  } else if (accessLevel >= 10) {
    return "BASIC";
  } else if (accessLevel >= 5) {
    return "GUEST_BILLING";
  }
  return "GUEST";
};

// send data to backend APIs
function recordAnalyticsEvent(event, onSuccess, onError) {
  if (!event) {
    console.log("Unable to record analytics event: no data provided");
    return;
  }
  let payload = JSON.stringify(event);
  setTimeout(function () {
    $.ajax({
      url: "https://logger007.cam4.com/analytics/events/generic",
      type: "POST",
      dataType: "json",
      contentType: "text/plain",
      timeout: 30000,
      data: payload,
      error: function (err) {
        console.log("unable to record analytics event", err, event);
        onError && onError(err);
      },
      success: function (data) {
        console.log("recorded analytics event", event);
        onSuccess && onSuccess();
      },
    });
  }, 0);
}

// define CustomEvent is necessary
(function () {
  if (typeof window.CustomEvent === "function") return false;

  function CustomEvent(event, params) {
    params = params || { bubbles: false, cancelable: false, detail: null };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }
  window.CustomEvent = CustomEvent;
})();

// define listener for Cam4Analytics to store the events in local storage
(function listenForCam4Events() {
  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  function pushEvent(event) {
    if (!sessionStorage || !sessionStorage.getItem || !sessionStorage.setItem) {
      console.log("no local storage available");
      return;
    }
    var relativeTime =
      window.performance && window.performance.now && window.performance.now();
    var hasFocus = document.hasFocus
      ? document.hasFocus()
        ? "yes"
        : "no"
      : "n/a";
    var visibilityState = document.visibilityState
      ? document.visibilityState
      : "n/a";

    // var kiirooRoom = "N/A"; reused for directory rec eng tests
    var online = "N/A";
    var privateRoom = "N/A";
    var rez = "N/A";
    var streamSource = "N/A";
    // uuid: "e3c728d0-5dd2-4eb8-97ab-08327db3ad95" ???
    var streamUUID = "N/A";
    var bType = "N/A";
    var newShowsState = "N/A";

    if (
      typeof Chat !== "undefined" &&
      Chat.getRoomState &&
      Chat.getRoomState()
    ) {
      // kiirooRoom = Chat.getRoomState().kiirooRoom;
      online = Chat.getRoomState().online;
      privateRoom = Chat.getRoomState().privateRoom;
      rez = Chat.getRoomState().rez;
      streamSource = Chat.getRoomState().streamSource;
      // uuid: "e3c728d0-5dd2-4eb8-97ab-08327db3ad95" ???
      streamUUID = Chat.getRoomState().streamUUID;
      newShowsState = Chat.getRoomState().newShowsState;
    }
    // Chat.getRoomState()
    // kiirooRoom: "true"
    // online: true
    // privateRoom: false
    // rez: "1280:720"
    // streamSource: "external_encoder"
    // uuid: "e3c728d0-5dd2-4eb8-97ab-08327db3ad95" ???
    // streamUUID: "testroom-317-e24338ff-9c0a-45ac-8506-d53547ad1edc"
    // bType: "solo"

    try {
      event.details = event.details || {};
      event.details.id = uuidv4();
      event.details.hasFocus = hasFocus;
      event.details.visibilityState = visibilityState;
      event.details.relativeTime = relativeTime || 0;
      event.details.libVersion = DUMPSTER_LIBRARY_VERSION;
      event.details.referrer = document.referrer || "";

      // event.details.kiirooRoom = kiirooRoom || '';
      event.details.online = online || "";
      event.details.privateRoom = privateRoom || "";
      event.details.rez = rez || "";
      event.details.streamSource = streamSource || "";
      event.details.streamUUID = streamUUID || "";
      event.details.bType = bType || "";
      event.details.newShowsState = newShowsState || "";

      if (!event.details.now) {
        event.details.now = +new Date();
      }
      var events = JSON.parse(sessionStorage.getItem("Cam4Events") || "[]");
      if (events.length > 300) {
        events = events.slice(-300);
      }
      events.push(event);
      sessionStorage.setItem("Cam4Events", JSON.stringify(events));

      // countly
      function isWhitelistedForCountly(event) {
        if (!event || !event.segmentation || !event.segmentation.Event) {
          return false;
        }
        var key =
          "track" + event.key + "" + event.segmentation.Event.replace(" ", "");
        if (
          typeof Countly !== "undefined" &&
          typeof Countly.get_remote_config !== "undefined"
        ) {
          return (Countly.get_remote_config() || {})[key] === true;
        }
        return false;
      }
      var isEventWhitelisted = isWhitelistedForCountly(event);
      if (isEventWhitelisted) {
        if (typeof Countly !== "undefined") {
          console.log("countly event", event);
          delete event.details;
          Countly.add_event(event);
        } else {
          console.log("Countly is not available");
        }
      } else {
        // console.log('ignoring countly event', event);
      }
    } catch (e) {
      console.log("unable to track cam4analytics event", e);
    }
  }
  try {
    window.addEventListener &&
      window.addEventListener("Cam4Analytics", function (e) {
        pushEvent(e.detail);
      });
  } catch (e) {
    console.log("failed to attach listener", e);
  }
})();
(function watchRecCams() {
  var camClick = function (room, pageNo, idx, recCam, recEng, recSrc) {
    console.log("onClick  cam", room, pageNo, idx, recCam, recEng, recSrc);
    let eventData = {
      key: "Discovery",
      count: 1,
      segmentation: {
        Event: "Click Cam",
        "Recommendation Engine": recEng,
        "Directory Location": idx + 1,
        "Directory Page": "Page " + (pageNo + 1),
        Recommended: recCam ? "Yes" : "NO",
      },
      details: {
        room: (room + "").toLowerCase(),
        timestamp: +new Date(),
        accessLevel:
          typeof Cam4User !== "undefined"
            ? accessLevelLabel(Cam4User.accessLevel)
            : "N/A",
        username:
          typeof Cam4User !== "undefined"
            ? (Cam4User.userName || "").toLowerCase()
            : "N/A",
        sessionUuid:
          typeof ConnectionLogger !== "undefined"
            ? ConnectionLogger.getSessionUuid()
            : "N/A",
        recSrc: recSrc,
        abt: {
          underCamSVQP:
            typeof underCamSVQP !== "undefined" && underCamSVQP === true,
        },
        eventCategory: "Profile",
      },
    };

    watchEventQueueDisabled = true; // wait for the next page load
    var event = new CustomEvent("Cam4Analytics", {
      detail: eventData,
    });
    window.dispatchEvent(event);
    return true;
  };

  let clearId = function (id) {
    return id
      .replace("similar-cam-during-show-preview-", "")
      .replace("similar-cam-during-show-", "")
      .replace("similar-cam-after-show-preview-", "")
      .replace("similar-cam-after-show-", "");
  };

  var watchEventQueueDisabled = false;
  var wasCamRecommended = false;
  var recommendationEngineUsed;
  var recommendationEngineSource;
  var recommendationEnginePage;
  var recommendationEngineLocation;
  var recommendationEngineHasReco;
  var abt = {};
  var videoIsAvailable = false;
  if (typeof Cam4Event !== "undefined" && Cam4Event.VIEWER_STREAM_LOADED) {
    var trackViewerStreamLoaded = function () {
      videoIsAvailable = true;
    };
    Cam4Event.addEventListener(
      Cam4Event.VIEWER_STREAM_LOADED,
      trackViewerStreamLoaded,
      "dumpster_callback__trackViewerStreamLoaded"
    );
  }
  if (
    typeof Cam4Event !== "undefined" &&
    Cam4Event.hlsPlayer &&
    Cam4Event.hlsPlayer.PLAYER_EVENT
  ) {
    var trackViewerStreamGone = function (event) {
      if (event && event.name === "internalDisconnect") {
        videoIsAvailable = false;
      }
    };
    Cam4Event.addEventListener(
      Cam4Event.hlsPlayer.PLAYER_EVENT,
      trackViewerStreamGone,
      "dumpster_callback__trackViewerStreamGone"
    );
  }
  // set initial state
  if (typeof Cam4User !== "undefined" && Cam4User.performerName) {
    try {
      var events = JSON.parse(sessionStorage.getItem("Cam4Events") || "[]");
      var event = events.filter(function (crt) {
        return (
          crt.details &&
          crt.segmentation &&
          crt.segmentation.Event === "Click Cam" &&
          Cam4User.performerName.toLowerCase() === crt.details.room
        );
      })[0];
      if (event) {
        abt = (event.details || {}).abt || {};
        wasCamRecommended =
          event.segmentation.Recommended === "Yes" || abt.underCamSVQP;
        recommendationEngineUsed = event.segmentation["Recommendation Engine"];
        recommendationEnginePage = event.segmentation["Directory Page"];
        recommendationEngineLocation = event.segmentation["Directory Location"];
        recommendationEngineHasReco = (event.details || {}).kiirooRoom;
        recommendationEngineSource = (event.details || {}).recSrc;
      }
    } catch (e) {
      console.log("unable to set analytics initial state", e);
    }
  }

  setInterval(function () {
    $(
      "#relatedCamsSlider .relatedCamsWrapper .thumbnail-content a.profile-preview:not(.c4aIgnore)"
    ).each(function (idx, e) {
      try {
        var room = clearId(e.id);
        // console.log("attaching event for ", idx, room);
        $(e)
          .click(function (elem) {
            var recSrc;
            var isRec;
            if (elem && elem.target && elem.target.parentElement) {
              recSrc = elem.target.parentElement.getAttribute("data-rec-src");
              isRec =
                elem.target.parentElement.getAttribute("data-rec-eng") ===
                "true";
            }
            camClick(room, 0, idx, isRec, "During Broadcast", recSrc);
          })
          .addClass("c4aIgnore");
      } catch (e) {
        console.log("unable to attach cam4analytics handler", e);
      }
    });
    $(
      "#relatedCamsSlider .relatedCamsWrapper .thumbnail-content a.profile-thumb-wrapper:not(.c4aIgnore)"
    ).each(function (idx, e) {
      try {
        var room = clearId(e.id);
        // console.log("attaching event for ", idx, room);
        $(e)
          .click(function (elem) {
            var recSrc;
            var isRec;
            if (elem && elem.target && elem.target.parentElement) {
              recSrc = elem.target.parentElement.getAttribute("data-rec-src");
              isRec =
                elem.target.parentElement.getAttribute("data-rec-eng") ===
                "true";
            }
            camClick(room, 0, idx, isRec, "During Broadcast", recSrc);
          })
          .addClass("c4aIgnore");
      } catch (e) {
        console.log("unable to attach cam4analytics handler", e);
      }
    });
    $(
      "#profileRelatedVideosGrid .relatedCamsWrapper .thumbnail-content a.profile-thumb-wrapper:not(.c4aIgnore)"
    ).each(function (idx, e) {
      try {
        var room = clearId(e.id);
        // console.log("attaching event for ", idx, room);
        $(e)
          .click(function (elem) {
            var recSrc;
            var isRec;
            if (elem && elem.target && elem.target.parentElement) {
              recSrc = elem.target.parentElement.getAttribute("data-rec-src");
              isRec =
                elem.target.parentElement.getAttribute("data-rec-eng") ===
                "true";
            }
            camClick(room, 0, idx, isRec, "After Broadcast", recSrc);
          })
          .addClass("c4aIgnore");
      } catch (e) {
        console.log("unable to attach cam4analytics handler", e);
      }
    });
    $(
      "#profileRelatedVideosGrid .relatedCamsWrapper .thumbnail-content a.profile-preview:not(.c4aIgnore)"
    ).each(function (idx, e) {
      try {
        var room = clearId(e.id);
        // console.log("attaching event for ", idx, room);
        $(e)
          .click(function (elem) {
            var recSrc;
            var isRec;
            if (elem && elem.target && elem.target.parentElement) {
              recSrc = elem.target.parentElement.getAttribute("data-rec-src");
              isRec =
                elem.target.parentElement.getAttribute("data-rec-eng") ===
                "true";
            }
            camClick(room, 0, idx, isRec, "After Broadcast", recSrc);
          })
          .addClass("c4aIgnore");
      } catch (e) {
        console.log("unable to attach cam4analytics handler", e);
      }
    });
    // JsReceiver.roomWentOffline()
  }, 2000);

  var watch5MinTimer = setTimeout(function () {
    var room =
      typeof Cam4User !== "undefined" &&
      Cam4User.performerName &&
      Cam4User.performerName.toLowerCase();
    console.log("watch5Min", room, wasCamRecommended, recommendationEngineUsed);
    let eventData = {
      key: "Discovery",
      count: 1,
      segmentation: {
        Event: "Watch Broadcast 5 Minutes",
        "Recommendation Engine": recommendationEngineUsed || "none",
        Recommended: wasCamRecommended ? "Yes" : "No",
        "Directory Location": recommendationEngineUsed
          ? recommendationEngineLocation || ""
          : "",
        "Directory Page": recommendationEngineUsed
          ? recommendationEnginePage
          : "",
      },
      details: {
        room: room || "N/A",
        timestamp: +new Date(),
        accessLevel:
          typeof Cam4User !== "undefined"
            ? accessLevelLabel(Cam4User.accessLevel)
            : "N/A",
        username:
          typeof Cam4User !== "undefined"
            ? (Cam4User.userName || "").toLowerCase()
            : "N/A",
        sessionUuid:
          typeof ConnectionLogger !== "undefined"
            ? ConnectionLogger.getSessionUuid()
            : "N/A",
        eventCategory: "Profile",
        kiirooRoom: recommendationEngineHasReco || "N/A",
      },
    };

    var event = new CustomEvent("Cam4Analytics", {
      detail: eventData,
    });
    window.dispatchEvent(event);
  }, 5 * 60 * 1000);

  var watchDelayS = 3;
  var watchFnc = function () {
    var room =
      typeof Cam4User !== "undefined" &&
      Cam4User.performerName &&
      Cam4User.performerName.toLowerCase();
    console.log(
      "watch event",
      room,
      wasCamRecommended,
      recommendationEngineUsed
    );
    let elapsed = Math.round(performance.now() / 1000);
    let p = $("#Cam4HLSPlayer")[0] || {};
    let videoResolution = p ? p.videoWidth + "x" + p.videoHeight : "N/A";
    let viewportSize = p ? p.clientWidth + "x" + p.clientHeight : "N/A";
    let eventData = {
      key: "Watch",
      count: 1,
      segmentation: {
        Event: "Watch Broadcast",
        "Recommendation Engine": recommendationEngineUsed || "none",
        Recommended: wasCamRecommended ? "Yes" : "No",
        "Directory Location": recommendationEngineUsed
          ? recommendationEngineLocation || ""
          : "",
        "Directory Page": recommendationEngineUsed
          ? recommendationEnginePage
          : "",
      },
      details: {
        room: room || "N/A",
        timestamp: +new Date(),
        eventAction: videoResolution,
        eventValue: viewportSize,
        eventValueNum: elapsed,
        eventLabel: videoIsAvailable ? "videoAvailable" : "videoUnavailable",
        accessLevel:
          typeof Cam4User !== "undefined"
            ? accessLevelLabel(Cam4User.accessLevel)
            : "N/A",
        username:
          typeof Cam4User !== "undefined"
            ? (Cam4User.userName || "").toLowerCase()
            : "N/A",
        sessionUuid:
          typeof ConnectionLogger !== "undefined"
            ? ConnectionLogger.getSessionUuid()
            : "N/A",
        eventCategory: "Profile",
        kiirooRoom: recommendationEngineHasReco || "N/A",
      },
    };

    var event = new CustomEvent("Cam4Analytics", {
      detail: eventData,
    });
    window.dispatchEvent(event);
    if (watchDelayS < 60) {
      watchDelayS = watchDelayS * 2; //3->96
    } else if (watchDelayS > 10800) {
      // >3h
      watchDelayS = watchDelayS + 900;
    } else if (watchDelayS > 3600) {
      // >1h
      watchDelayS = watchDelayS + 300;
    }
    setTimeout(watchFnc, watchDelayS * 1000);
  };
  setTimeout(watchFnc, watchDelayS * 1000);

  var trackPageFn = function () {
    var room =
      typeof Cam4User !== "undefined" &&
      Cam4User.performerName &&
      Cam4User.performerName.toLowerCase();
    console.log("page view", room, wasCamRecommended, recommendationEngineUsed);
    let eventData = {
      key: "Visit",
      count: 1,
      segmentation: {
        Event: "View page",
        "Recommendation Engine": recommendationEngineUsed || "none",
        Recommended: wasCamRecommended ? "Yes" : "No",
        "Directory Location": recommendationEngineUsed
          ? recommendationEngineLocation || ""
          : "",
        "Directory Page": recommendationEngineUsed
          ? recommendationEnginePage
          : "",
      },
      details: {
        room: room || "N/A",
        timestamp: +new Date(),
        eventValue: window.location.href,
        accessLevel:
          typeof Cam4User !== "undefined"
            ? accessLevelLabel(Cam4User.accessLevel)
            : "N/A",
        username:
          typeof Cam4User !== "undefined"
            ? (Cam4User.userName || "").toLowerCase()
            : "N/A",
        sessionUuid:
          typeof ConnectionLogger !== "undefined"
            ? ConnectionLogger.getSessionUuid()
            : "N/A",
        eventCategory: "Profile",
        eventLabel: window.innerWidth + "x" + window.innerHeight,
        kiirooRoom: recommendationEngineHasReco || "N/A",
      },
    };

    var event = new CustomEvent("Cam4Analytics", {
      detail: eventData,
    });
    window.dispatchEvent(event);
  };
  setTimeout(trackPageFn, 1000);

  var internetAvailable = true;
  if (window.addEventListener) {
    window.addEventListener("offline", function () {
      internetAvailable = false;
    });
    window.addEventListener("online", function () {
      internetAvailable = true;
    });
  }

  function watchEventQueue() {
    if (watchEventQueueDisabled) {
      console.log("watchEventQueueDisabled");
      return;
    }
    if (!internetAvailable) {
      console.log("watchEventQueue - the user is offline");
      return;
    }
    var events = JSON.parse(sessionStorage.getItem("Cam4Events") || "[]");
    if (!events.length) {
      return;
    }
    sessionStorage.setItem("Cam4Events", JSON.stringify([])); // fire and forget, no retries
    recordAnalyticsEvent(
      events,
      function () {
        // setTimeout(watchEventQueue, 10000);
        // var latestEvents = JSON.parse(sessionStorage.getItem('Cam4Events') || '[]');
        // let wasSent = function(e) {
        //     return events.find(function(crt) {
        //         return crt.details.id === e.details.id;
        //     })
        // }
        events.forEach(function (e) {
          // notify AB tests
          var eventSync = new CustomEvent("Cam4AnalyticsSync", {
            detail: e,
          });
          window.dispatchEvent(eventSync);
        });
        // var remainingEvents = latestEvents.filter(function(crt) { return !wasSent(crt) });
        // sessionStorage.setItem('Cam4Events', JSON.stringify(remainingEvents));
      },
      function () {
        // setTimeout(watchEventQueue, 30000);
      }
    );
  }
  setInterval(watchEventQueue, 20000);

  // countly - temporary solution to have user details
  if (typeof Cam4User !== "undefined") {
    var countlyUserConfigAttempt = 0;
    var countlyUserConfigTimer = setInterval(function () {
      countlyUserConfigAttempt++;
      if (typeof Countly !== "undefined") {
        clearTimeout(countlyUserConfigTimer);
        Countly.q.push([
          "user_details",
          {
            username: Cam4User.userName,
            custom: {
              "Access Level": accessLevelLabel(Cam4User.accessLevel),
            },
          },
        ]);
      } else {
        if (countlyUserConfigAttempt > 10) {
          clearTimeout(countlyUserConfigTimer);
        }
      }
    }, 500);
  }

  function trackDataLayer() {
    var idx = 0;
    setInterval(function () {
      if (typeof dataLayer !== "undefined") {
        while (dataLayer.length > idx) {
          var rec = dataLayer[idx];
          // console.log('rec', rec)
          if (rec && rec.event) {
            var room =
              typeof Cam4User !== "undefined" &&
              Cam4User.performerName &&
              Cam4User.performerName.toLowerCase();
            console.log("analytics event", rec);
            let eventData = {
              key:
                "Generic:" +
                (rec.event || "N/A") +
                ":" +
                (rec.eventCategory || "N/A"),
              count: 1,
              segmentation: {
                Event: rec.event,
                "Recommendation Engine": recommendationEngineUsed || "none",
                Recommended: wasCamRecommended ? "Yes" : "No",
                "Directory Location": recommendationEngineUsed
                  ? recommendationEngineLocation || ""
                  : "",
                "Directory Page": recommendationEngineUsed
                  ? recommendationEnginePage
                  : "",
              },
              details: {
                room: room || "N/A",
                timestamp: +new Date(),
                accessLevel:
                  typeof Cam4User !== "undefined"
                    ? accessLevelLabel(Cam4User.accessLevel)
                    : "N/A",
                username:
                  typeof Cam4User !== "undefined"
                    ? (Cam4User.userName || "").toLowerCase()
                    : "N/A",
                sessionUuid:
                  typeof ConnectionLogger !== "undefined"
                    ? ConnectionLogger.getSessionUuid()
                    : "N/A",
                event: rec.event || "N/A",
                eventCategory: rec.eventCategory || "N/A",
                eventAction: rec.eventAction,
                eventLabel: rec.eventLabel,
                eventValue: rec.eventValue,
                recSrc: recommendationEngineSource || "none",
                kiirooRoom: recommendationEngineHasReco || "N/A",
              },
            };
            if (rec.event === "gtm.click" || rec.event === "gtm.linkClick") {
              var tagName = (rec["gtm.element"] || {}).tagName || "";
              eventData.details.gtm = {
                // element - skip - dom element
                elementClasses: rec["gtm.elementClasses"],
                elementId: rec["gtm.elementId"],
                elementTarget: rec["gtm.elementTarget"],
                elementTagName: tagName + "",
                elementUrl: rec["gtm.elementUrl"],
                uniqueEventId: rec["gtm.uniqueEventId"],
              };
            }

            var event = new CustomEvent("Cam4Analytics", {
              detail: eventData,
            });
            window.dispatchEvent(event);
          }
          idx++;
        }
      }
    }, 300);
  }
  trackDataLayer();

  if (window.addEventListener) {
    var networkStatusChanged = function (status) {
      return function () {
        console.log("networkStatusChanged", status);
        var room =
          (typeof Cam4User !== "undefined" &&
            Cam4User.performerName &&
            Cam4User.performerName.toLowerCase()) ||
          "N/A";
        let eventData = {
          key: "Status:Network:" + status,
          count: 1,
          segmentation: {
            Event: "Network changed",
            Status: status,
          },
          details: {
            room: room || "N/A",
            timestamp: +new Date(),
            accessLevel:
              typeof Cam4User !== "undefined"
                ? accessLevelLabel(Cam4User.accessLevel)
                : "N/A",
            username:
              typeof Cam4User !== "undefined"
                ? (Cam4User.userName || "").toLowerCase()
                : "N/A",
            sessionUuid:
              typeof ConnectionLogger !== "undefined"
                ? ConnectionLogger.getSessionUuid()
                : "N/A",
            eventCategory: "Network",
            eventValue: status,
          },
        };
        var event = new CustomEvent("Cam4Analytics", {
          detail: eventData,
        });
        window.dispatchEvent(event);
      };
    };
    window.addEventListener("offline", networkStatusChanged("offline"));
    window.addEventListener("online", networkStatusChanged("online"));
  }

  function trackGoal(goalId, amount) {
    var current_vwo_experiment = 148;
    if (
      typeof _vwo_exp === "undefined" ||
      typeof _vis_opt_readCookie === "undefined"
    ) {
      return;
    }
    if (!_vwo_exp[current_vwo_experiment]) {
      return;
    }
    var current_vwo_variation = _vis_opt_readCookie(
      "_vis_opt_exp_" + current_vwo_experiment + "_combi"
    );

    // combination_chosen: "2"
    // combination_selected: "2"
    if (!current_vwo_variation) {
      return;
    }
    var vwo_img_url =
      "https://dev.visualwebsiteoptimizer.com/c.gif?" +
      "experiment_id=" +
      current_vwo_experiment +
      "&ACCOUNT_ID=287192" +
      "&GOAL_ID=" +
      goalId +
      "&COMBINATION=" +
      current_vwo_variation +
      "&r=" +
      (amount || 1) +
      "&rn=" +
      Math.random();
    // console.log(vwo_img_url)
    var img = new Image();
    img.src = vwo_img_url;
  }

  function abt148() {
    window._vis_opt_queue = window._vis_opt_queue || [];
    // see watchEventQueue
    window.addEventListener &&
      window.addEventListener("Cam4AnalyticsSync", function (e) {
        // var underCamSVQP = (abt || {}).underCamSVQP;
        if (recommendationEngineSource === "REv1") {
          // console.log("abt148 ignore REv1"); // outside the scope for now
          return;
        }
        if (!wasCamRecommended) {
          // console.log("abt148 ignore - was not recommended"); // outside the scope for now
          return;
        }
        if (!recommendationEngineUsed || recommendationEngineUsed === "none") {
          // console.log("abt148 ignore - no rec eng"); // outside the scope for now
          return;
        }
        let ev = e.detail;
        let seg = ev.segmentation || {};
        let details = ev.details || {};
        console.log("abt148: ", ev);
        if (
          ev.key === "Discovery" &&
          seg.Event === "Click Cam" &&
          seg["Recommendation Engine"] === "During Broadcast"
        ) {
          // window._vis_opt_queue.push(function() {_vis_opt_register_conversion(1,148);});
          console.log("abt148 track", ev.key, seg.Event);
          trackGoal(1);
        }

        if (
          ev.key === "Generic:watchBroadcast300Seconds:N/A" &&
          seg.Event === "watchBroadcast300Seconds"
        ) {
          // window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(216);});
          console.log("abt148 track", ev.key, seg.Event);
          trackGoal(216);
        }
        if (
          ev.key === "Generic:socialEvents:favorite" &&
          seg.Event === "socialEvents" &&
          details.eventAction === "addFavorite"
        ) {
          // window._vis_opt_queue.push(function() {_vis_opt_register_conversion(2,148);});
          console.log("abt148 track", ev.key, seg.Event);
          trackGoal(2);
        }
        if (
          ev.key === "Generic:socialEvents:friend" &&
          seg.Event === "socialEvents"
        ) {
          //
        }
        if (ev.key === "Generic:SendTip:tipping" && seg.Event === "SendTip") {
          // window._vis_opt_queue.push(function() {_vis_opt_goal_conversion(208);});
          console.log("abt148 track", ev.key, seg.Event);
          trackGoal(208);
        }
      });
  }

  abt148();

  var trackWebRTCEvents = function () {
    function createWebRTCListener(name) {
      return function (event) {
        var room =
          typeof Cam4User !== "undefined" &&
          Cam4User.performerName &&
          Cam4User.performerName.toLowerCase();
        let username =
          typeof Cam4User !== "undefined"
            ? (Cam4User.userName || "").toLowerCase()
            : "N/A";
        let eventData = {
          key: "Streaming:" + name,
          count: 1,
          segmentation: {
            Event: name,
            "Recommendation Engine": "none",
            Recommended: "No",
          },
          details: {
            room: room || "N/A",
            timestamp: +new Date(),
            accessLevel:
              typeof Cam4User !== "undefined"
                ? accessLevelLabel(Cam4User.accessLevel)
                : "N/A",
            username: username,
            sessionUuid:
              typeof ConnectionLogger !== "undefined"
                ? ConnectionLogger.getSessionUuid()
                : "N/A",
            event: "name",
            eventCategory: "streaming",
            eventAction: "adaptive",
            eventLabel: "",
            eventValue: JSON.stringify(event.detail),
            recSrc: "none",
          },
        };
        setTimeout(function () {
          var newEvent = new CustomEvent("Cam4Analytics", {
            detail: eventData,
          });
          window.dispatchEvent(newEvent);
        }, 10);
      };
    }
    // 'kyoWebrtcStats', 'kyolibPacketLoss'
    [
      "kyoLibAdaptiveResolutionUp",
      "kyoLibAdaptiveResolutionDown",
      "kyoLibAdaptiveFpsDown",
      "kyoLibAdaptiveFpsUp",
      "kyolibStartBitrate",
    ].forEach((e) => {
      window.addEventListener &&
        window.addEventListener(e, createWebRTCListener(e));
    });
    // new ABR
    [
      "kyoLibLoweringMechanismCurrentRoundTripTime",
      "kyoLibLoweringMechanismPacketsLost",
      "kyoLibRecoveryMechanism",
      "kyoLibABRInfo",
    ].forEach((e) => {
      window.addEventListener &&
        window.addEventListener(e, createWebRTCListener(e));
    });

    [
      "kyo-webrtc-wssOnClose",
      "kyo-webrtc-starting-connecting",
      "kyo-webrtc-connectionStateChangeCallback",
      "kyo-webrtc-disconnected",
      "kyo-webrtc-connected",
      "kyo-webrtc-disconnect-starting",
      "kyo-webrtc-reconnect-triggered",
    ].forEach((e) => {
      window.addEventListener &&
        window.addEventListener(e, createWebRTCListener(e));
    });

    [
      "preshow-start-broadcast-btn-disabled-changed",
      "preshow-start-broadcast-btn-visibility-changed",
      "preshow-start-boradcast-clicked",
      "preshow-start-broadcast-clicked",
      "preshow-page-loaded",
      "preshow-tabChanged",
      "preshow-aspect-ratio-changed",
      "preshow-resolution-changed",
      "preshow-camera-cahnged",
      "preshow-mic-changed",
    ].forEach((e) => {
      window.addEventListener &&
        window.addEventListener(e, createWebRTCListener(e));
    });
    // description
    // streamConnectionChangedStateTo
    // peerConnectionCloseWillBeCalled
    // constraints
    // streamDetails
    // wconnection
    // iceConnectionState
    // streamConnectionState
    // wowzaWssCloseWillBeCalled
    //
  };

  trackWebRTCEvents();

  typeof Cam4Event !== "undefined" &&
    Cam4Event.CHAT_ANALYTICS &&
    Cam4Event.addEventListener(
      Cam4Event.CHAT_ANALYTICS,
      function (event) {
        var room =
          typeof Cam4User !== "undefined" &&
          Cam4User.performerName &&
          Cam4User.performerName.toLowerCase();
        let username =
          typeof Cam4User !== "undefined"
            ? (Cam4User.userName || "").toLowerCase()
            : "N/A";
        let data = event || {};
        let type = data.type || "" || "";
        let eventData = {
          key: "Chat",
          count: 1,
          segmentation: {
            Event: type,
            "Recommendation Engine": recommendationEngineUsed || "none",
            Recommended: wasCamRecommended ? "Yes" : "No",
            "Directory Location": recommendationEngineUsed
              ? recommendationEngineLocation || ""
              : "",
            "Directory Page": recommendationEngineUsed
              ? recommendationEnginePage
              : "",
          },
          details: {
            room: room || "N/A",
            timestamp: +new Date(),
            accessLevel:
              typeof Cam4User !== "undefined"
                ? accessLevelLabel(Cam4User.accessLevel)
                : "N/A",
            username: username,
            sessionUuid:
              typeof ConnectionLogger !== "undefined"
                ? ConnectionLogger.getSessionUuid()
                : "N/A",
            event: data.type || "" || "",
            eventCategory: "chat",
            eventAction: "",
            eventLabel: "",
            eventValue: (data.to || "") + "",
            recSrc: "none",
            kiirooRoom: recommendationEngineHasReco || "N/A",
          },
        };
        setTimeout(function () {
          var newEvent = new CustomEvent("Cam4Analytics", {
            detail: eventData,
          });
          window.dispatchEvent(newEvent);
        }, 0);
      },
      "dumpster_callback__chat_analytics"
    );
  typeof Cam4Event !== "undefined" &&
    Cam4Event.broadcastSettings &&
    Cam4Event.broadcastSettings.GOT_CAMERAS &&
    Cam4Event.addEventListener(
      Cam4Event.broadcastSettings.GOT_CAMERAS,
      function (event) {
        var room =
          typeof Cam4User !== "undefined" &&
          Cam4User.performerName &&
          Cam4User.performerName.toLowerCase();
        let username =
          typeof Cam4User !== "undefined"
            ? (Cam4User.userName || "").toLowerCase()
            : "N/A";
        let eventData = {
          key: "Broadcast Settings",
          count: 1,
          segmentation: {
            Event: "camera",
            "Recommendation Engine": recommendationEngineUsed || "none",
            Recommended: wasCamRecommended ? "Yes" : "No",
            "Directory Location": recommendationEngineUsed
              ? recommendationEngineLocation || ""
              : "",
            "Directory Page": recommendationEngineUsed
              ? recommendationEnginePage
              : "",
          },
          details: {
            room: room || "N/A",
            timestamp: +new Date(),
            accessLevel:
              typeof Cam4User !== "undefined"
                ? accessLevelLabel(Cam4User.accessLevel)
                : "N/A",
            username: username,
            sessionUuid:
              typeof ConnectionLogger !== "undefined"
                ? ConnectionLogger.getSessionUuid()
                : "N/A",
            event: "Broadcast Settings",
            eventCategory: "broadcasting",
            eventAction: "camera_listing",
            eventLabel: "",
            eventValue: JSON.stringify(event),
            recSrc: "none",
            kiirooRoom: recommendationEngineHasReco || "N/A",
          },
        };
        setTimeout(function () {
          var newEvent = new CustomEvent("Cam4Analytics", {
            detail: eventData,
          });
          window.dispatchEvent(newEvent);
        }, 0);
      },
      "dumpster_callback__broadcastSettings_cameras"
    );
  //    Cam4Event.dispatch(Cam4Event.broadcastSettings.GOT_MICROPHONES, data); TODO

  typeof Cam4Event !== "undefined" &&
    Cam4Event.broadcastSettings &&
    Cam4Event.broadcastSettings.SET_CAMERA &&
    Cam4Event.addEventListener(
      Cam4Event.broadcastSettings.SET_CAMERA,
      function (event) {
        var room =
          typeof Cam4User !== "undefined" &&
          Cam4User.performerName &&
          Cam4User.performerName.toLowerCase();
        let username =
          typeof Cam4User !== "undefined"
            ? (Cam4User.userName || "").toLowerCase()
            : "N/A";
        let eventData = {
          key: "Broadcast Settings",
          count: 1,
          segmentation: {
            Event: "camera",
            "Recommendation Engine": recommendationEngineUsed || "none",
            Recommended: wasCamRecommended ? "Yes" : "No",
            "Directory Location": recommendationEngineUsed
              ? recommendationEngineLocation || ""
              : "",
            "Directory Page": recommendationEngineUsed
              ? recommendationEnginePage
              : "",
          },
          details: {
            room: room || "N/A",
            timestamp: +new Date(),
            accessLevel:
              typeof Cam4User !== "undefined"
                ? accessLevelLabel(Cam4User.accessLevel)
                : "N/A",
            username: username,
            sessionUuid:
              typeof ConnectionLogger !== "undefined"
                ? ConnectionLogger.getSessionUuid()
                : "N/A",
            event: "Broadcast Settings",
            eventCategory: "broadcasting",
            eventAction: "camera_selection",
            eventLabel: "",
            eventValue: JSON.stringify(event),
            recSrc: "none",
            kiirooRoom: recommendationEngineHasReco || "N/A",
          },
        };
        setTimeout(function () {
          var newEvent = new CustomEvent("Cam4Analytics", {
            detail: eventData,
          });
          window.dispatchEvent(newEvent);
        }, 0);
      },
      "dumpster_callback__broadcastSettings_camera_select"
    );

  function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c === "x" ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
  const c4aUser = (function () {
    return {
      get: function () {
        try {
          return (JSON.parse(localStorage.getItem("c4aUser")) || {}).value;
        } catch (e) {
          //console.log('failed to obtain c4aUser', e);
          return undefined;
        }
      },
      set: function () {
        try {
          let c4aUserData = localStorage && localStorage.getItem("c4aUser");
          if (!c4aUserData) {
            let _now = +new Date();
            c4aUserData = {
              value: uuidv4() + "-" + _now,
              createdAt: _now,
            };
            localStorage &&
              localStorage.setItem("c4aUser", JSON.stringify(c4aUserData));
          }
        } catch (e) {
          console.log("failed to set c4aUser", e);
          return undefined;
        }
      },
      remove: function () {
        try {
          return localStorage && localStorage.removeItem("c4aUser");
        } catch (e) {
          console.log("failed to remove c4aUser", e);
        }
      },
    };
  })();
  c4aUser.set();

  function augmentEvent(src) {
    let event = {};
    var relativeTime =
      window.performance && window.performance.now && window.performance.now();
    var msFromLastNavigation = 0;
    var sessionUuid = uuidv4();
    event.room = (Cam4User.userName + "").toLowerCase();
    event.username = (Cam4User.userName + "").toLowerCase();
    event.c4aUser = c4aUser.get();
    event.sessionUuid = sessionUuid;
    event.performerOnline = true;
    event.loggedIn = "yes";
    event.userRelativeTime = relativeTime || 0;
    event.msFromLastNavigation = msFromLastNavigation || 0;
    event.userTimestamp = +new Date();
    return Object.assign(event, src);
  }

  function broadcastEvent(data) {
    let augmentedEvent = augmentEvent(data);
    var blob = JSON.stringify([augmentedEvent]);
    var beaconSent = navigator.sendBeacon(
      "https://logger007.cam4.com/v2/analytics/ui",
      blob
    );
    if (!beaconSent) {
      console.log("beacon sent:", beaconSent);
    }
  }

  const RequestTimeout = (time) => {
    let controller = new AbortController();
    setTimeout(() => controller.abort("TIMEOUT"), time * 1000);
    return controller;
  };
  let signal = RequestTimeout(10).signal;
  fetch("https://cam4.firebaseio.com/?q=" + +new Date(), {
    redirect: "manual",
    signal: signal,
  })
    .then(() => {
      broadcastEvent({
        eventCategory: "Monitoring",
        event: "FirebaseOK",
        eventValueString: "",
        eventLabel: "",
      });
    })
    .catch((err) => {
      let event = "FirebaseError";
      if (signal.reason === "TIMEOUT") {
        event = "FirebaseTimeout";
      }
      broadcastEvent({
        eventCategory: "Monitoring",
        event: event,
        eventValueString: err.name,
        eventLabel: err.message,
      });
    });
  window.addEventListener &&
    window.addEventListener("Cam4InternalEvents", function (e) {
      var ev = e.detail;
      if (!ev) {
        return;
      }
      var details = ev.details || {};
      if (ev.name === "ui:generic:javascript:error") {
        if (ev.details && ev.details.length) {
          let _args = Array.from(ev.details);
          let err = _args && _args[0];
          if (
            err.message &&
            (err.message + "").indexOf(
              "The play() request was interrupted by a call to pause()"
            ) < 0 &&
            (err.message + "").indexOf(
              "The play method is not allowed by the user agent or the platform"
            ) < 0 &&
            (err.message + "").indexOf(
              "play() failed because the user didn't interact with the document first"
            ) < 0 &&
            (err.message + "").indexOf(
              "The play() request was interrupted by a new load request"
            ) < 0
          ) {
            broadcastEvent({
              eventCategory: "JSDebug",
              event: "ConsoleError",
              eventValueString: err.message + "",
              eventLabel: err.stack + "n/a",
            });
          }
        } else if (ev.details && ev.details.msg) {
          broadcastEvent({
            eventCategory: "JSDebug",
            event: "JSError",
            eventValueString: ev.details.msg + "",
            eventLabel:
              ev.details.stack +
              "\n" +
              ev.details.line +
              "\n" +
              ev.details.file,
          });
        }
      }
    });
})();
// Cam4Event.dispatch(Cam4Event.USER_WENT_OFFLINE, {
//             ts: ts,
//             diff: Math.abs(_loadTime - ts),
//             username: username,
//             roomname: roomname,
//             sessionId: sessionId
//         })
// Cam4Event.dispatch(Cam4Event.USER_BACK_ONLINE, {
//             ts: ts,
//             diff: Math.abs(_loadTime - ts),
//             username: username,
//             roomname: roomname,
//             sessionId: sessionId
//         })

// window.addEventListener('offline', Cam4Analytics.onOffline);

// window.addEventListener('online', Cam4Analytics.onOnline);
