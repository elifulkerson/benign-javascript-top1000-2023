const pendoData = {"visitor":{"pageName":"sd:home:hpx","pageType":"np-hp","pageProduct":"sd","pageLanguage":"en","pageEnvironment":"prod","accessType":"ae:GUEST","countryCode":"US"},"account":{"id":"ae:228598","name":"ae:ScienceDirect Guests"},"events":{}};;
    pendoData.events = {
      ready: function () {
        pendo.addAltText();
      },
    };
    function runPendo(data, options) {
  const {
    firstDelay,
    maxRetries,
    urlPrefix,
    urlSuffix,
    apiKey
  } = options;
  (function (apiKey) {
    (function (p, e, n, d, o) {
      var v, w, x, y, z;
      o = p[d] = p[d] || {};
      o._q = [];
      v = ['initialize', 'identify', 'updateOptions', 'pageLoad'];
      for (w = 0, x = v.length; w < x; ++w) (function (m) {
        o[m] = o[m] || function () {
          o._q[m === v[0] ? 'unshift' : 'push']([m].concat([].slice.call(arguments, 0)));
        };
      })(v[w]);
      y = e.createElement(n);
      y.async = !0;
      y.src = urlPrefix + apiKey + urlSuffix;
      z = e.getElementsByTagName(n)[0];
      z.parentNode.insertBefore(y, z);
    })(window, document, 'script', 'pendo');
    pendo.addAltText = function () {
      var target = document.querySelector('body');
      var observer = new MutationObserver(function (mutations) {
        mutations.forEach(function (mutation) {
          if (mutation?.addedNodes?.length) {
            if (mutation.addedNodes[0]?.className?.includes("_pendo-badge")) {
              const badge = mutation.addedNodes[0];
              const altText = badge?.attributes['aria-label'].value ? badge?.attributes['aria-label'].value : 'Feedback';
              const pendoBadgeImage = pendo.dom(`#${badge?.attributes?.id.value} img`);
              if (pendoBadgeImage.length) {
                pendoBadgeImage[0]?.setAttribute('alt', altText);
              }
            }
          }
        });
      });
      var config = {
        attributeFilter: ['data-layout'],
        attributes: true,
        childList: true,
        characterData: true,
        subtree: false
      };
      observer.observe(target, config);
    };
  })(apiKey);
  (function watchAndSetPendo(nextDelay, retryAttempt) {
    if (typeof pageDataTracker === 'object' && typeof pageDataTracker.getVisitorId === 'function' && pageDataTracker.getVisitorId()) {
      data.visitor.id = pageDataTracker.getVisitorId();
      console.debug(`initializing pendo`);
      pendo.initialize(data);
    } else {
      if (retryAttempt > 0) {
        return setTimeout(function () {
          watchAndSetPendo(nextDelay * 2, retryAttempt - 1);
        }, nextDelay);
      }
      pendo.initialize(data);
      console.debug(`gave up ... pendo initialized`);
    }
  })(firstDelay, maxRetries);
}
    runPendo(pendoData, {
      firstDelay: 300,
      maxRetries: 4,
      urlPrefix: 'https://cdn.pendo.io/agent/static/',
      urlSuffix: '/pendo.js',
      apiKey: 'd6c1d995-bc7e-4e53-77f1-2ea4ecbb9565',
    });