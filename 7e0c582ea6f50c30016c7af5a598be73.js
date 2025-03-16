function getUuid() {
  return "yxyx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
var mp3_id = getUuid();
var mp4_id = getUuid();
$(document).delegate("#download,.download-mp3-mb", "click", function () {
  location.href = coreUrlPrefix + $(this).data(window[`${format}_id`]);
});
$(document).ready(function () {
  var format = "mp3",
    n = $("#theme").attr("href");
  switch (n) {
    case "d":
      n = "l";
      break;
    case "l":
      n = "d";
      break;
    default:
      n = "l";
  }
  if (!window.ismobile) {
    $("#withApp").hide();
    $("#bookmark").show();
    $("#more_format").hide();
  }
  if (
    navigator.standalone ||
    window.matchMedia("(display-mode: standalone)").matches
  ) {
    ym(85320316, "reachGoal", "pwa-use");
  }
  if (window.ismobile) {
    if (document.getElementById("download-button")) {
      document
        .getElementById("download-button")
        .addEventListener("click", function () {
          ym(85320316, "reachGoal", "download_app_button_click");
          ym(85320316, "reachGoal", "app_icon_mb");
        });
    }
    $("#telegram").click(function () {
      ym(85320316, "reachGoal", "telegram");
    });
    $("#instagram").click(function () {
      ym(85320316, "reachGoal", "instagram");
    });
  }

  if (window.appUrl) {
    if (document.getElementById("download-button")) {
      document.getElementById("download-button").href = window.appUrl;
    }
    if (document.getElementById("withApp")) {
      document.getElementById("withApp").href = window.appUrl;
      document.getElementById("off-line").href = window.appUrl;
    }
  }
  if (window.YTMP3country === 'US' && !window.ismobile) {
    if (/(mac os|Macintosh)/i.test(navigator.userAgent)) {
      ym(85320316,'reachGoal','videoproc-mac')
      window.appWebUrl = "https://videoproc.com/download/Desktop-all-in-one-downloader.dmg";
    } else {
      window.appWebUrl = "https://videoproc.com/download/Desktop-all-in-one-downloader.exe"
      ym(85320316,'reachGoal','videoproc-win')
    }
  }

  function showError(msg) {
    $("#converter_wrapper")
      .before(
        window.ismobile
          ? `<div id="error"><p>An error occurred (
          ${
            msg.includes("url")
              ? /tiktok/.test(location.href)
                ? "please input tiktok url"
                : "please input youtube url"
              : "the video is restricted"
          }
          )</p><p> ❤️ Recommend you to download music by APP (${
            msg.includes("url")
              ? "support key words searches"
              : "rich music search resources"
          }, completely safe and free)</p><p style="display: flex;justify-content:flex-end;align-items:baseline;"><a class="download" href="${
              window.appUrl
            }">👉Download APP</a><a class="refresh" href="">Convert Next</a></p></div>`
          : `<div id="error"><p>An error occurred (
            ${
              /tiktok/.test(location.href)
                ? "you should input tiktok url, ex:https://www.tiktok.com/@affelstan/video/..."
                : msg
            }
            ).</p><p>Please try to convert another video by click <a class="refresh" href="">here</a>.</p></div>`
      )
      .hide();
    $("#error").show();
    window.adBannerAds(true);
    if (window.ismobile) {
      $("#error .download").click(function () {
        ym(85320316, "reachGoal", "error-download-app");
      });
      $("#error .refresh").click(function () {
        ym(85320316, "reachGoal", "error_convert_next");
      });
    }
  }
  let hasShowAds = false;
  function showAds() {
    if (window.ismobile) $(".follow-btns").show();
    if (hasShowAds) return;
    hasShowAds = true;
    try {
      var btnL = document.createElement("div");
      btnL.className = "ad-btn-left";
      btnL.innerText = "DOWNLOAD NOW";
      var btnR = document.createElement("div");
      btnR.className = "ad-btn-right";
      btnR.innerText = "PLAY NOW";
      var info = document.createElement("div");
      info.className = "ad-info";
      info.innerText = "Advertising";
      btnL.addEventListener("click", function () {
        if (window.ismobile) {
          ym(85320316, "reachGoal", "download_now_mb");
        } else {
          ym(85320316, "reachGoal", "download_now_pc");
        }
      });
      btnR.addEventListener("click", function () {
        if (window.ismobile) {
          ym(85320316, "reachGoal", "play_now_mb");
        } else {
          ym(85320316, "reachGoal", "play_now_pc");
        }
      });
      $("#a-320-50").attr("class", "a-320-50-show");
      $("#a-320-50").append(btnL).append(btnR).append(info).show();
    } catch (e) {}
    if (!window.ismobile) {
      var script2 = document.createElement("script");
      script2.type = "text/javascript";
      script2.async = "async";
      script2.dataset["cfasync"] = "false";
      script2.src = "//upgulpinon.com/1?z=5340833";
      document.body.append(script2);
    }
    if (window.ismobile && !window.hasAd) {
      window.atOptions = {
        key: "d9ee967ccfa30ddbb9c2669a0ddba637",
        format: "iframe",
        height: 90,
        width: 728,
        params: {},
      };

      var script = document.createElement("script");
      script.type = "text/javascript";
      script.src =
        "//melodramaticlaughingbrandy.com/d9ee967ccfa30ddbb9c2669a0ddba637/invoke.js";
      // =======
      var ad = document.createElement("div");
      ad.appendChild(script);
      ad.style.width = "100%";
      ad.style.overflow = "hidden";
      document.getElementById("a-320-50").after(ad);
      ad.appendChild(script);
      window.adBannerAds(false);
      // ========rollerads push =========
      (function () {
        const url = new URL(window.location.href);
        const clickID = url.searchParams.get("click_id");
        const sourceID = url.searchParams.get("source_id");

        const s = document.createElement("script");
        s.dataset.cfasync = "false";
        s.src = "https://push-sdk.com/f/sdk.js?z=832739";
        s.onload = (opts) => {
          opts.zoneID = 832739;
          opts.extClickID = clickID;
          opts.subID1 = sourceID;
          opts.actions.onPermissionGranted = () => {};
          opts.actions.onPermissionDenied = () => {};
          opts.actions.onAlreadySubscribed = () => {};
          opts.actions.onError = () => {};
        };
        document.head.appendChild(s);
      })();
    }
    if (!window.ismobile && !window.hasAd) {
      window.adBannerAds(false);
    }
    window.hasAd = true;
  }
  $(document).delegate("#banner", "click", function () {
    if (window.ismobile) {
      ym(85320316, "reachGoal", "banner-click-mb");
    } else {
      ym(85320316, "reachGoal", "banner-click");
    }
    if ($("#banner img").attr('src').includes('banner')) {
      ym(85320316,'reachGoal','videopro-click');
    }
  });

  $("#a-320-50").click(function () {
    window.trace.buttons("fake button");
  });
  $(".social_share").click(function () {
    ym(85320316, "reachGoal", "share-click");
  });

  function refreshDownloadUrl() {
    // change mp3 / mp4
    var button =
      $(".parsed a:nth-child(1)").length > 0
        ? $(".parsed a:nth-child(1)")
        : $("#buttons a:nth-child(1)");
    button.text("Download " + format);
    button.forEach((b) => {
      const $b = $(b);
      $b.attr("href", "javascript:void(0)");
    });
  }

  function showButtons(r) {
    $("#progress").hide();
    if (ismobile) {
      $("#buttons a:nth-child(1)").data("mp3", r.mp3.slice(0, -100));
      $("#buttons a:nth-child(1)").data("mp4", r.mp4);
      $("#buttons a:nth-child(1)").data(mp3_id, r.mp3);
      $("#buttons a:nth-child(1)").data(mp4_id, r.mp4);
      if (Array.isArray(r.mp3)) {
        $("#buttons a:nth-child(1)").data(
          "mp3",
          r.mp3[0].mp3_url.slice(0, -100)
        );
        $("#buttons a:nth-child(1)").data(mp3_id, r.mp3[0].mp3_url);
      }
      $("#download_pc").hide();
      refreshDownloadUrl();
      $(".table-download").click(function () {
        window.trace.buttons("various quality");
        // mobile varous
        let fetchUrl = "";
        if (Array.isArray(r.mp3)) {
          if ($(this).data("type").toString() === "1") {
            fetchUrl = r.mp3[0].mp3_url;
            ym(85320316, "reachGoal", "mb-mp3-320kps");
          } else if ($(this).data("type").toString() === "2") {
            let index = 1;
            if (r.mp3.length === 1) index = 0;
            fetchUrl = r.mp3[index].mp3_url;
            ym(85320316, "reachGoal", "mb-mp3-192kps");
          } else if ($(this).data("type").toString() === "3") {
            let index = 2 % r.mp3.length;
            if (r.mp3.length === 3) index = 2;
            fetchUrl = r.mp3[index].mp3_url;
            ym(85320316, "reachGoal", "mb-mp3-128kps");
          } else if ($(this).data("type").toString() === "4") {
            const index = r.mp3.length - 1;
            fetchUrl = r.mp3[index].mp3_url;
            ym(85320316, "reachGoal", "mb-mp3-64kps");
          }
        } else {
          fetchUrl = r.mp3;
        }
        location.href = coreUrlPrefix + fetchUrl;
      });
    } else {
      $("#mp3").hide();
      $("#mp4").hide();
      $("#download").hide();
      $("#download_pc").data(mp3_id, r.mp3);
      $("#download_pc").data(mp4_id, r.mp4);
      if (Array.isArray(r.mp3)) {
        $("#download_pc").data(mp3_id, r.mp3[0].mp3_url);
      }
      $(document).delegate("#download_list div", "click", function () {
        window.trace.buttons("various quality");
        ym(
          85320316,
          "reachGoal",
          `list_${$(this).text().toLowerCase().split(" ").join("_")}`
        );
        if (/mp3/i.test($(this).text())) {
          let fetchUrl = "";
          if (Array.isArray(r.mp3)) {
            if ($(this).text().includes("320")) {
              fetchUrl = r.mp3[0].mp3_url;
              ym(85320316, "reachGoal", "pc-mp3-320kps");
            } else if ($(this).text().includes("192")) {
              let index = 1;
              if (r.mp3.length === 1) index = 0;
              fetchUrl = r.mp3[index].mp3_url;
              ym(85320316, "reachGoal", "pc-mp3-192kps");
            } else if ($(this).text().includes("128")) {
              let index = 2 % r.mp3.length;
              if (r.mp3.length === 3) index = 2;
              fetchUrl = r.mp3[index].mp3_url;
              ym(85320316, "reachGoal", "pc-mp3-128kps");
            } else if ($(this).text().includes("64")) {
              const index = r.mp3.length - 1;
              fetchUrl = r.mp3[index].mp3_url;
              ym(85320316, "reachGoal", "pc-mp3-64kps");
            }
          } else {
            fetchUrl = r.mp3;
          }
          location.href = coreUrlPrefix + fetchUrl;
        } else {
          location.href = coreUrlPrefix + r.mp4;
        }
      });
    }
    $("#download_list").hide();
    $("#buttons").show();
  }

  $("#download_pc").click(() => {
    ym(85320316, "reachGoal", "download button pc");
    $("#download_list").toggle();
    ym(85320316, "reachGoal", "new_download");
    window.trace.download();
  });
  $("#more_format").click(() => {
    window.trace.buttons("more format");
    $("#formats-download").show();
    ym(85320316, "reachGoal", "more-format");
  });
  function showTTButtons(r) {
    $("#progress").hide();
    $("#download-mp3").attr(
      "href",
      coreUrlPrefix + "/ttscraper" + r.music_download_path
    );
    $("#download-mp4").attr(
      "href",
      coreUrlPrefix + "/ttscraper" + r.video_download_path
    );
    $("#buttons").show();
    $("#play_btn").data("url", r.wm_video_url);
  }
  if (source_url) parseYtUrl(source_url);

  function parseYtUrl(t, isdownload) {
    $(".first-page-banner").remove();
    window.trace.convert();
    let time_5 = setTimeout(() => {
      window.trace.convertPending();
    }, 5000);
    if (/YVnTGDRXctA|bwzg38-Qnf8|LL0Njfd4oCk|Rfhsz62EHXs/i.test(t)) {
      $("#advise2")
        .text("The URL is either not valid or not supported by our converter")
        .css("color", "red");
      return;
    }
    if (!isdownload) {
      if (window.isAndroid) {
        if (window.isWebview) {
          window.open("https://hk.jebatconamed.com/iky1kXQuVidisOmd7/64073");
          ym(85320316, "reachGoal", "webview ad");
        }
        window.location.href = window.appUrl;
      }
      if (!window.ismobile) {
        const ts = localStorage.getItem("webapk");
        if (ts) {
          const tTime = new Date(Number(ts));
          const nTime = new Date();
          if (
            tTime.getDay() !== nTime.getDay() ||
            tTime.getFullYear() !== nTime.getFullYear() ||
            tTime.getMonth() !== nTime.getMonth()
          ) {
            window.location.href = window.appWebUrl;
            localStorage.setItem("webapk", Date.now());
          }
        } else {
          window.location.href = window.appWebUrl;
          localStorage.setItem("webapk", Date.now());
        }
      }
    }
    // 临时保存搜索URL
    window.searchUrl = encodeURIComponent(t);
    if (window.ismobile) {
      ym(85320316, "reachGoal", "convert_mb");
    } else {
      ym(85320316, "reachGoal", "convert_pc");
    }
    const country = window.YTMP3country;
    if (!isdownload) {
      $("#advise2").hide();
      $(".a-inner").remove();
      $("form").hide();
      $("#progress").show();
      ym(85320316, "reachGoal", "source_direct");
    } else {
      ym(85320316, "reachGoal", "source_search");
    }
    $("#off-line").show();
    showAds();
    if (isdownload) {
      requestNewp(
        t,
        country,
        function (r) {
          $download = $(".parsing .download");
          $download.removeClass("download");
          if (ismobile)
            $download
              .addClass("download-mp3-mb")
              .after("<a>320K-Mp3 with APP</a>");
          $(".parsing").append("<a>Dropbox</a><a>Convert next</a>");
          if (ismobile) {
            $download.data(mp3_id, r.mp3);
            $download.data(mp4_id, r.mp4);
            if (Array.isArray(r.mp3)) {
              $download.data(mp3_id, r.mp3[0].mp3_url);
            }
          } else {
            let dataMp3 = r.mp3 || "";
            if (Array.isArray(r.mp3)) {
              dataMp3 = r.mp3[0].mp3_url;
            }
            $(".parsing").append(
              `<div class="search-downloadlist" data-mp3="${dataMp3}" data-mp4="${
                r.mp4 || ""
              }"><div>MP3</div><div>MP4 360p</div><div>MP4 480p</div><div>MP4 720p</div><div>MP4 1080p</div></div>`
            );
          }
          $(".parsing").removeClass("parsing").addClass("parsed");
          $(".lds-hourglass").removeClass("lds-hourglass").text("Download");
          if (ismobile) {
            refreshDownloadUrl();
          }
        },
        function () {
          clearTimeout(time_5);
        }
      );
      return;
    }
    if (/douyin.com|tiktok.com/i.test(t)) {
      $.ajax({
        type: "POST",
        url: coreUrlPrefix + "/ttscraper/parse",
        data: {
          url: t,
        },
        dataType: "json",
        success: function (r) {
          if (r.status === 1) {
            const res = r.data;
            window.searchUrl = encodeURIComponent(res.original_url);
            $("#advise").text(res.video_title);
            showTTButtons(res);
          } else if (r.status === 0) {
            showError(`message: ${r.message}`);
          }
        },
        error: function (r) {
          if (r.message) {
            showError(`message: ${r.message}`);
          } else {
            showError("code: 0-0");
          }
        },
      });
    } else if (/youtu|youtube/i.test(t)) {
      requestNewp(t, country || "HK", null, function () {
        clearTimeout(time_5);
      });
    } else if (
      /https?:\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(t)
    ) {
      // A. URL错误（link输入错误）
      ym(85320316, "reachGoal", "error-A");
      showError("url error");
    } else {
      searchKeywords(t.trim());
    }
  }

  window.format = "mp3";

  $("#formats a").click(function () {
    switch ($(this).attr("id")) {
      case "mp3":
        window.format = "mp3";
        if (window.ismobile) $("#download").show();
        $("#withApp").hide();
        switch (((format = "mp3"), n)) {
          case "d":
            $("#mp3").css("background-color", "#243961"),
              $("#mp4").css("background-color", "#121d31");
            break;
          case "l":
            $("#mp3").css("background-color", "#007cbe"),
              $("#mp4").css("background-color", "#0087cf");
        }
        if (window.ismobile) {
          ym(85320316, "reachGoal", "mp3_mb");
        } else {
          ym(85320316, "reachGoal", "mp3_pc");
        }
        $("#more_format").show();
        break;
      case "mp4":
        window.format = "mp4";
        if (window.ismobile) $("#download").hide();
        $("#withApp").show();
        switch (((format = "mp4"), n)) {
          case "d":
            $("#mp4").css("background-color", "#243961"),
              $("#mp3").css("background-color", "#121d31");
            break;
          case "l":
            $("#mp4").css("background-color", "#007cbe"),
              $("#mp3").css("background-color", "#0087cf");
        }
        if (window.ismobile) {
          ym(85320316, "reachGoal", "mp4_mb");
        } else {
          ym(85320316, "reachGoal", "mp4_pc");
        }
        $("#more_format").hide();
        $("#formats-download").hide();
        break;
      case "off-line":
        ym(85320316, "reachGoal", "play_offline");
        window.open("https://www.mp3juice.zone");
        return;
      default:
        return;
    }
    refreshDownloadUrl();
    return false;
  });
  function searchKeywords(target) {
    $.get(coreUrlPrefix + "/report/event", {
      event: "search",
      webSite: "ytmp3",
    });
    $.ajax({
      type: "POST",
      url: `${coreUrlPrefix}/ytsearch`,
      data: JSON.stringify({
        key_word: target,
      }),
      dataType: "json",
      success: function (data) {
        $("#progress").hide();
        $("#suggestions").hide();
        $("form").show();
        $("#mp3").show();
        $("#mp4").show();
        if (!data.result || data.result.length === 0) {
          // E 关键词搜索没结果
          ym(85320316, "reachGoal", "error-E");
          return;
        }
        // 搜索结果
        const resultWrapper = $('<div id="search-result"></div>');
        resultWrapper.append(
          data.result
            .map(function (i) {
              return `<div class="search-item">
          <div class="name">${i.title}</div>
          <div class="properties">Source: YouTube • Time: ${i.duration} • </div>
          <div class="options">
            <a class="download" data-value="${i.url}">Download</a>
            <a class="player" data-value="${i.id}">Play</a>
          </div>
          </div>`;
            })
            .join("")
        );
        $("#a-320-50").after(resultWrapper);
      },
    });
  }
  function requestNewp(t, country, callback, callback2) {
    $.get(coreUrlPrefix + "/report/event", {
      event: "parse",
      webSite: "ytmp3",
    });
    $.ajax({
      type: "POST",
      url: coreUrlPrefix + "/newp",
      data: {
        u: t,
        c: country,
      },
      dataType: "json",
      success: function (r) {
        if (r.status === 1) {
          const res = r.data;
          window.searchUrlId = res.id;
          if (callback) {
            callback(res);
          } else {
            $("#advise").text(res.title);
            if (window.ismobile) $("#advise3").show();
            showButtons(res);
          }
          window.trace.convertSuccess();
        } else if (r.status === 0) {
          showError(`message: ${r.message}`);
          ym(85320316, "reachGoal", "result-error");
          window.trace.convertFail();
          $.get(coreUrlPrefix + "/report/event", {
            event: "convertFailed",
            webSite: "ytmp3",
          });
          if (
            [
              "empty input youtube url or country",
              "url is expire, please remake url",
              "you should input youtube url, ex:https://www.youtube.com/watch?v=id",
            ].includes(r.message)
          ) {
            // A. URL错误（link输入错误）
            ym(85320316, "reachGoal", "error-A");
          }
          gtag("event", "convert_error", {
            message: r.message,
          });
        }
      },
      error: function (xhr) {
        const r = JSON.parse(xhr.response);
        window.trace.convertFail();
        $.get(coreUrlPrefix + "/report/event", {
          event: "convertFailed",
          webSite: "ytmp3",
        });
        // D. 网络错误
        window.xhr = xhr;
        if (r.status === 0) {
          if (r.message === "The video cannot exceed 90 minutes") {
            // F. 视频超过90min
            ym(85320316, "reachGoal", "error-F");
          } else if (r.message) {
            // C. URL解析失败
            ym(85320316, "reachGoal", "error-C");
          } else {
            ym(85320316, "reachGoal", "error-D");
          }
        } else {
          ym(85320316, "reachGoal", "error-D");
        }
        if (r.message) {
          showError(`message: ${r.message}`);
          ym(85320316, "reachGoal", "result-error");
          gtag("event", "convert_error", {
            message: r.message,
          });
        } else {
          gtag("event", "convert_error", {
            message: "Network disconnection",
          });
          showError("code: 0-0");
        }
      },
      complete: function () {
        if (callback2) {
          callback2();
        }
      },
    });
  }
  $(document).delegate(".search-downloadlist div", " click", function () {
    window.open("https://thaudray.com/4/5458359");
    ym(
      85320316,
      "reachGoal",
      `search_list_${$(this).text().toLowerCase().split(" ").join("_")}`
    );
    if ($(this).text().includes("MP3")) {
      location.href = coreUrlPrefix + $(this).parent().data("mp3");
    } else if ($(this).text().includes("MP4")) {
      location.href = coreUrlPrefix + $(this).parent().data("mp4");
    }
  });
  const handleAClick = function () {
    switch ($(this).text()) {
      case "Download mp3":
        if (window.ismobile) {
          ym(85320316, "reachGoal", "mp3_download_mb");
        } else {
          ym(85320316, "reachGoal", "mp3_download_pc");
        }
        ym(85320316, "reachGoal", "real-download");
        window.trace.download();
        ym(85320316, "reachGoal", "Download MP3");
        $.ajax({ url: coreUrlPrefix + "/dl2/countuserid" });
        $.get(coreUrlPrefix + "/report/event", {
          event: "download",
          webSite: "ytmp3",
        });
        break;
      case "Download mp4":
        if (window.ismobile) {
          ym(85320316, "reachGoal", "mp4_download_mb");
        } else {
          ym(85320316, "reachGoal", "mp4_download_pc");
        }
        ym(85320316, "reachGoal", "real-download");
        window.trace.download();
        window.open("https://almstda.tv/4/6435625");
        $.ajax({ url: coreUrlPrefix + "/dl2/countuserid" });
        $.get(coreUrlPrefix + "/report/event", {
          event: "download",
          webSite: "ytmp3",
        });
        break;
      case "Play":
        if (!document.querySelector("#player")) {
          $("#formats").after(`
            <div id="player">
              <iframe src="" title="" width="100%" height="420" scrolling="no" allow="autoplay"></iframe>
            </div>
          `);
        } else {
          $("#player").show();
        }
        if (/douyin.com|tiktok.com/.test(window.searchUrl)) {
          document.querySelector("#player iframe").src =
            $("#play_btn").data("url");
          return;
        }
        const id = window.searchUrlId;
        document.querySelector("#player iframe").src =
          "https://www.youtube.com/embed/" + id;
        $("#play_btn").text("Stop");
        if (!window.ismobile) {
          ym(85320316, "reachGoal", "Play");
        }
        ym(85320316, "reachGoal", "play_click");
        break;
      case "Stop":
        $("#player").hide();
        document.querySelector("#player iframe").src = "";
        $("#play_btn").text("Play");
        ym(85320316, "reachGoal", "stop_click");
        break;
      case "Dropbox":
        ym(85320316, "reachGoal", "dropbox");
        Dropbox.save(
          coreUrlPrefix + $(this).parent().find("[data-mp3]").data(mp3_id),
          $.trim(
            $(this).parent().parent().find(".name").text() ||
              $(this).parent().parent().find("#advise").text()
          ) + ".mp3",
          {
            success: function () {
              $(this).text("Saved");
            },
            error: function (t) {
              $(this).text("Error");
            },
          }
        );
        return;
      case "320K-Mp3 with APP":
        ym(85320316, "reachGoal", "320k-mp3");
        window.open("https://almstda.tv/4/6435625");
        return;
      case "Download MP4 with APP":
        ym(85320316, "reachGoal", "1080p-mp4");
        ym(85320316, "reachGoal", "Download MP4 with APP");
        return;
      case "Convert next":
        ym(85320316, "reachGoal", "convert next");
        window.setTimeout(function () {
          window.location.href = "/";
        }, 500);
      default:
        return true;
    }
  };
  $(document).delegate(".parsed a", "click", handleAClick);
  $("#buttons a").click(handleAClick);

  $("form #input").on("paste", function (e) {
    var clipboardData = e.clipboardData || window.clipboardData;
    var pastedData = clipboardData.getData("Text");
    $("#search-result").remove();
    parseYtUrl(pastedData);
  });
  $("#submit").click(() => {
    if (!$("#input").val()) {
      ym(85320316, "reachGoal", "convert-null");
    }
  });
  let keyupTimmer = null;
  $("form #input").keyup(function (e) {
    clearTimeout(keyupTimmer);
    keyupTimmer = setTimeout(function () {
      const value = e.target.value;
      if (
        value.length > 0 &&
        !value.includes("youtube.com/") &&
        !value.includes("youtu.be/")
      ) {
        $("#suggestions").show();
        $.ajax({
          dataType: "jsonp",
          url: `https://suggestqueries.google.com/complete/search?client=youtube&ds=yt&q=${value.trim()}`,
          success: (data) => {
            $("#suggestions").empty();
            const htmlStr = data[1]
              .map((r) => `<div class="sug-item">${r[0]}</div>`)
              .join("");
            $("#suggestions").append(htmlStr);
          },
        });
      } else {
        $("#suggestions").hide();
        $("#suggestions").empty();
      }
    }, 500);
  });
  $("#suggestions").delegate(".sug-item", "click", function () {
    const target = $(this).text();
    $("form #input").val(target);
    $("#suggestions").hide();
    $("#suggestions").empty();
    ym(85320316, "reachGoal", "keyword-search");
    $("#progress").show();
    $("form").hide();
    searchKeywords(target);
  });
  $("body").delegate(".download", "click", function () {
    $(this).parent().addClass("parsing");
    $(this).addClass("lds-hourglass").text("initialize");
    $("#converter_wrapper").show();
    $("#error").hide();
    parseYtUrl($(this).data("value"), true);
  });
  $("body").delegate(".player", "click", function () {
    let p = null;
    if (document.querySelector("#player")) {
      p = $("#player").prev().find(".player");
      document.querySelector("#player").remove();
    }
    if ($(this).text() === "Play") {
      $(this).parent().parent().after(`
        <div id="player">
          <iframe src="https://www.youtube.com/embed/${$(this).data(
            "value"
          )}" title="" width="100%" height="420" scrolling="no" allow="autoplay"></iframe>
        </div>
      `);
      if (p) p.text("Play");
      $(this).text("Stop");
    } else {
      $(this).text("Play");
    }
  });
  if (document.getElementById("input")) {
    document.getElementById("input").addEventListener("click", function () {
      if (window.ismobile) {
        ym(85320316, "reachGoal", "input_click_mb");
      } else {
        ym(85320316, "reachGoal", "input_click_pc");
      }
    });
  }
  $("form").submit(function () {
    $("#search-result").remove();
    var v = $("#input").val();
    parseYtUrl(v);
    ym(85320316, "reachGoal", "convert click");
    return false;
  });
  if (window.ismobile) {
    document.getElementById("nav-source").addEventListener(
      "mouseenter",
      function () {
        ym(85320316, "reachGoal", "nav_dropdown_show");
      },
      false
    );
  } else {
    document.getElementById("nav-dropdown").addEventListener(
      "mouseenter",
      function () {
        ym(85320316, "reachGoal", "nav_dropdown_show");
      },
      false
    );
  }
  document.getElementById("top-youtubers").addEventListener(
    "click",
    function () {
      ym(85320316, "reachGoal", "top_youtubers_click");
    },
    false
  );
});
