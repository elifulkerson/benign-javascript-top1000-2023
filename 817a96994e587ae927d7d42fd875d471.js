window.addEventListener('CookieConsentChange', (event) => {
  if (typeof BlzCookieConsent !== 'undefined' && BlzCookieConsent.initialized && BlzCookieConsent.isPerformanceStorageAllowed() && !window.document.querySelector('script[data-optimizely]')) {
    var script = document.createElement('script');
    script.src = `https://cdn.optimizely.com/js/9013706011.js`;
    script.setAttribute('data-optimizely', '');
    document.head.appendChild(script);
  }
});