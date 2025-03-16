(function initGA() {
  var options = window.ikeaExternalScriptOptions || {};
  var gaOptions = options.ga || {};

  var trackingIds = gaOptions.trackingIds || '';
  var ids = trackingIds
    .split(/[\s\n,;]/gi)
    .map((x) => x.trim())
    .filter((x) => x);

  var excludeForIsoCountries = gaOptions.excludeForIsoCountries || '';
  var excludedCountries = excludeForIsoCountries
    .split(/[\s\n,;]/gi)
    .map((x) => x.trim())
    .filter((x) => x);
  var userGeolocationData = (OneTrust && OneTrust.getGeolocationData()) || {};
  var userCountry = userGeolocationData.country;
  var isExcluded = !userCountry || excludedCountries.includes(userCountry);

  if (isExcluded || ids.length === 0) {
    return;
  }

  var onetrustCategoryId;
  try {
    onetrustCategoryId = document.currentScript.dataset.otCategoryId;
  } catch (err) {
    console.error(err);
  }

  OneTrust.InsertScript(
    'https://www.googletagmanager.com/gtag/js',
    'head',
    _runAfterGaLibLoaded,
    null,
    onetrustCategoryId
  );

  function _runAfterGaLibLoaded() {
    window.dataLayer = window.dataLayer || [];

    function gtag() {
      window.dataLayer.push(arguments);
    }

    window.gtag = gtag;
    gtag('js', new Date());

    for (var id of ids) {
      gtag('config', id, {
        transport_type: 'beacon',
        anonymize_ip: true,
        // default dimensions
        site_language: 'en',
        site_platform: 'global',
      });
    }
  }
})();
