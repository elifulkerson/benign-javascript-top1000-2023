/** Snippet for the parent page to properly resize the iframe and pass context */

// create dummy page context for analytics / targeting
// you can omit / clean data any sensitive data from these values
var context = {
  window: {
    location: {
      hash: window.location.hash,
      host: window.location.host,
      hostname: window.location.hostname,
      href: window.location.href,
      origin: window.location.origin,
      pathname: window.location.pathname,
      port: window.location.port,
      protocol: window.location.protocol,
      search: window.location.search,
    },
    navigator: {
      language: window.navigator.language,
      browserLanguage: window.navigator.browserLanguage,
      userAgent: window.navigator.userAgent,
    },
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
  },
  document: {
    title: document.title,
    referrer: document.referrer,
  },
};

// Don't send PII to GA. Properly format the fields
function stringifyAndSantizeDriftFields(payload) {
  let output = {};

  for (const prop in payload) {
    // Ids are safe to send to GA. Other properties may have PII
    if (prop.endsWith('Id')) {
      output[prop] = payload[prop];
    }
  }

  return JSON.stringify(output);
}

window.addEventListener("message", function (event) {
  if (event.origin !== 'https://static-site-drift-snippet.s3.amazonaws.com') {
    return;
  }

  const iframe = document.getElementById("drift-iframe");
  if (iframe === null) return;
  if (!(iframe && iframe.contentWindow) && event.source === iframe.contentWindow) {
    return;
  }

  // on startup - pass created context into iframe
  const message = event.data;
  if (message.type === "driftIframeReady") {
    if (window.AsanaStorage && window.AsanaStorage.getCookie) {
      let gaCookie = window.AsanaStorage.getCookie("_ga");
      if (gaCookie !== null) context.gaClientId = gaCookie.match(/GA.\..\.(.*)/i)[1];
      context.isLoggedIn = window.AsanaStorage.getCookie("is_logged_in") === "true";
    }
    iframe.contentWindow.postMessage({ type: "driftSetContext", data: context }, "*");
  } else if (message.type === "driftIframeResize") {
    // on widget size change - apply new size / positioning to iframe
    const styles = message.data.styles;
    for (var key in styles) {
      if (!styles.hasOwnProperty(key)) {
        continue;
      }
      iframe.style.setProperty(key, styles[key]);
    }
  } else if (message.type === "driftGenericGAEvent") {
    window.dataLayer.push({
      'event': 'driftInteraction',
      'eventCategory': 'Drift Widget',
      'eventAction': message.eventName,
      'eventLabel': stringifyAndSantizeDriftFields(message.payload),
    });
  }
});
