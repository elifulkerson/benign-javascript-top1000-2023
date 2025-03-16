window.ikeaExternalScriptOptions={"onetrust":{"id":2,"apiKey":"80238e1a-3de0-4556-9817-3c9165b937f2"},"ga":{"id":2,"trackingIds":"UA-172012033-1\nG-S4EX53B760","excludeForIsoCountries":null},"sentry":{"id":2,"dsn":"https://75f51570d7fc47bc92a5565007146415@o437184.ingest.sentry.io/5399384","env":"production"},"mpulse":{"id":2,"apiKey":"QQ8SB-48FHQ-ZCVVT-UD7Q4-5VS6B"}};// See docs/onetrust.md for details

(function initOnetrust() {
  let currentCategories;

  window.OptanonWrapper = function () {
    _initCustomCookie();

    _setCurrentCategoriesOnInitial();

    _onCategoryEnableChanged((enabledCategories) =>
      _onCookieChange(enabledCategories)
    );
  };

  function _setCurrentCategoriesOnInitial() {
    if (!currentCategories) {
      currentCategories =
        window.OnetrustActiveGroups &&
        window.OnetrustActiveGroups.split(',').filter((x) => x);
    }
  }

  function _onCookieChange(enabledCategories) {
    const hasRemovedConsent = !currentCategories.every((cC) =>
      enabledCategories.includes(cC)
    );

    if (hasRemovedConsent) {
      window.location.reload();
    }
    currentCategories = enabledCategories;
  }

  function _onCategoryEnableChanged(callbackFn) {
    window.addEventListener('OneTrustGroupsUpdated', (e) => {
      callbackFn(e.detail || []);
    });
  }

  function _initCustomCookie() {
    var opts = {
      domain: '.' + window.location.hostname,
      onetrustCookieName: 'OptanonAlertBoxClosed',
      customCookieName: 'interIkeaConsent',
      customCookieVersion: 'v1.0',
    };

    var hasOnetrustCookie = !!_getCookie(opts.onetrustCookieName);
    var hasCustomCookie =
      _getCookie(opts.customCookieName) === opts.customCookieVersion;
    var shouldHideBanner = hasOnetrustCookie || hasCustomCookie;

    if (shouldHideBanner) {
      _setCookie(opts.customCookieName, opts.customCookieVersion, 365, false);
      _setCookie(opts.onetrustCookieName, '', -1, opts.domain);
      document.querySelector('html').classList.add('onetrust-box-closed');
    }
  }

  function _getCookie(cname) {
    var name = cname + '=';
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  }
  function _setCookie(cname, cvalue, exdays, domain) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = 'expires=' + d.toUTCString();
    var setDomain = domain ? 'domain=' + domain + ';' : '';
    document.cookie =
      cname + '=' + cvalue + ';' + setDomain + expires + ';path=/';
  }
})();
"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;!function(){function e(e){var t=!0,n=!1,o=null,d={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function i(e){return!!(e&&e!==document&&"HTML"!==e.nodeName&&"BODY"!==e.nodeName&&"classList"in e&&"contains"in e.classList)}function s(e){var t=e.type,n=e.tagName;return!("INPUT"!==n||!d[t]||e.readOnly)||"TEXTAREA"===n&&!e.readOnly||!!e.isContentEditable}function u(e){e.classList.contains("focus-visible")||(e.classList.add("focus-visible"),e.setAttribute("data-focus-visible-added",""))}function a(e){e.hasAttribute("data-focus-visible-added")&&(e.classList.remove("focus-visible"),e.removeAttribute("data-focus-visible-added"))}function c(n){n.metaKey||n.altKey||n.ctrlKey||(i(e.activeElement)&&u(e.activeElement),t=!0)}function r(e){t=!1}function m(e){i(e.target)&&(t||s(e.target))&&u(e.target)}function v(e){i(e.target)&&(e.target.classList.contains("focus-visible")||e.target.hasAttribute("data-focus-visible-added"))&&(n=!0,window.clearTimeout(o),o=window.setTimeout((function(){n=!1}),100),a(e.target))}function l(e){"hidden"===document.visibilityState&&(n&&(t=!0),f())}function f(){document.addEventListener("mousemove",L),document.addEventListener("mousedown",L),document.addEventListener("mouseup",L),document.addEventListener("pointermove",L),document.addEventListener("pointerdown",L),document.addEventListener("pointerup",L),document.addEventListener("touchmove",L),document.addEventListener("touchstart",L),document.addEventListener("touchend",L)}function E(){document.removeEventListener("mousemove",L),document.removeEventListener("mousedown",L),document.removeEventListener("mouseup",L),document.removeEventListener("pointermove",L),document.removeEventListener("pointerdown",L),document.removeEventListener("pointerup",L),document.removeEventListener("touchmove",L),document.removeEventListener("touchstart",L),document.removeEventListener("touchend",L)}function L(e){e.target.nodeName&&"html"===e.target.nodeName.toLowerCase()||(t=!1,E())}document.addEventListener("keydown",c,!0),document.addEventListener("mousedown",r,!0),document.addEventListener("pointerdown",r,!0),document.addEventListener("touchstart",r,!0),document.addEventListener("visibilitychange",l,!0),f(),e.addEventListener("focus",m,!0),e.addEventListener("blur",v,!0),e.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&e.host?e.host.setAttribute("data-js-focus-visible",""):e.nodeType===Node.DOCUMENT_NODE&&(document.documentElement.classList.add("js-focus-visible"),document.documentElement.setAttribute("data-js-focus-visible",""))}if("undefined"!=typeof window&&"undefined"!=typeof document){var t;window.applyFocusVisiblePolyfill=e;try{t=new CustomEvent("focus-visible-polyfill-ready")}catch(e){(t=document.createEvent("CustomEvent")).initCustomEvent("focus-visible-polyfill-ready",!1,!1,{})}window.dispatchEvent(t)}"undefined"!=typeof document&&e(document)}();
