window.LS_Mustache_Params = {
            ...window.LS_Mustache_Params,
            gigScripts: {
        depNames: '',
        depLinks: {"jquery":"https://www2.grouponcdn.com/layout/assets/jquery-79a74aa9e6.js","hogan":"https://www1.grouponcdn.com/layout/assets/hogan-9dc5cb2370.js","underscore":"https://www1.grouponcdn.com/layout/assets/underscore-99b6e6555f.js","modernizr":"https://www1.grouponcdn.com/layout/assets/modernizr-5dbd398026.js"},
        gigNames: 'modals,truncation,tooltips',
        gigLinks: {"a11y":"https://www1.grouponcdn.com/layout/assets/gig-js-a11y-42633863b5.js","forms":"https://www2.grouponcdn.com/layout/assets/gig-js-forms-b8aee61550.js","helper":"https://www1.grouponcdn.com/layout/assets/gig-js-helper-3c7c46a533.js","modals":"https://www1.grouponcdn.com/layout/assets/gig-js-modals-0d105c8b51.js","tabs":"https://www1.grouponcdn.com/layout/assets/gig-js-tabs-19a3487400.js","tooltips":"https://www1.grouponcdn.com/layout/assets/gig-js-tooltips-717bbf7d51.js","truncation":"https://www2.grouponcdn.com/layout/assets/gig-js-truncation-cbe2cbdff4.js"},
        js: 'https://www2.grouponcdn.com/browse/assets/home_desktop-3413664674.js',
        headLoadUrl: 'https://www2.grouponcdn.com/layout/assets/head.load-eaf2092de7.js',
        polyDom4Url: 'https://www1.grouponcdn.com/layout/assets/poly-dom4-68f3ff87f0.js',
        polyPictureUrl: 'https://www1.grouponcdn.com/layout/assets/poly-picture-64b24d7e1b.js',
        polyIORicUrl: 'https://www2.grouponcdn.com/layout/assets/poly-io-ric-9566babc0c.js',
        polySafariUrl: 'https://www1.grouponcdn.com/layout/assets/poly-safari-af1e959d22.js',
        polyEdgeUrl: 'https://www2.grouponcdn.com/layout/assets/poly-edge-3e1327ffc8.js',
        desktopCoreUrl: 'https://www2.grouponcdn.com/layout/assets/desktop-core-v7.0-0703edac11.js',
        desktopPreactUrl: 'https://www2.grouponcdn.com/layout/assets/desktop-preact-85c2321f28.js',
        optimizeSuiteUrl: 'https://www2.grouponcdn.com/layout/assets/optimize-suite-v2-2bdd93d4a6.js',
        localeUrl: '/browse/js/locale.js?country=US&locale=en_US&brand=groupon&version=6c4f9ad462',
      }
          };
          (function ({
  depLinks,
  depNames,
  gigLinks,
  gigNames,
  headLoadUrl,
  js,
  localeUrl,
  desktopCoreUrl,
  desktopPreactUrl,
  polyDom4Url,
  polyPictureUrl,
  polyIORicUrl,
  polySafariUrl,
  polyEdgeUrl,
  optimizeSuiteUrl,
}) {
  const rIC = window.requestIdleCallback;
  const promiseFinally = window.Promise && window.Promise.prototype.finally;
  const cond_safari = !(
    window.fetch &&
    promiseFinally &&
    typeof Object.entries === 'function'
  );
  const cond_abort = !(window.AbortController && promiseFinally);
  const cond_ric = !(rIC && window.IntersectionObserver);
  const cond_dom4 = !(
    document.head.closest &&
    Element.prototype.replaceWith &&
    Element.prototype.before &&
    Element.prototype.after
  );

  const fn = () => {
    const files = [];

    if (cond_dom4) {
      files.push(polyDom4Url);
    }

    if (!window.HTMLPictureElement) {
      files.push(polyPictureUrl);
    }

    if (cond_ric) {
      files.push(polyIORicUrl);
    }

    if (cond_safari) {
      files.push(polySafariUrl);
    } else if (cond_abort) {
      files.push(polyEdgeUrl);
    }

    files.push(desktopCoreUrl);

    files.push(optimizeSuiteUrl);

    files.push(desktopPreactUrl);

    if (localeUrl) {
      files.push(localeUrl);
    }

    if (depNames.length) {
      depNames.split(',').forEach(i => {
        if (depLinks[i]) {
          files.push(depLinks[i]);
        }
      });
    }

    if (gigNames.length) {
      gigNames.split(',').forEach(i => {
        if (gigLinks[i]) {
          files.push(gigLinks[i]);
        }
      });
    }

    if (js.length) {
      js.split(',').forEach(file => {
        files.push(file);
      });
    }

    // eslint-disable-next-line no-undef
    head.js(files);
  };

  const s = document.createElement('script');
  s.defer = true;
  s.src = headLoadUrl;
  s.addEventListener('load', fn, false);
  document.getElementsByTagName('head')[0].appendChild(s);
})(window.LS_Mustache_Params['gigScripts']);