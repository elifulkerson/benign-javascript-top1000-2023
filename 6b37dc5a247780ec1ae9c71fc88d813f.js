var GA_LOCAL_STORAGE_KEY = 'ga:clientId';

function canUseLocalStorage() {
  var t = "t";
  try {
    localStorage.setItem(t, t);
    localStorage.removeItem(t);
    return true;
  } catch (e) {
    return false;
  }
}

function retrieveClientId() {
  return localStorage.getItem(GA_LOCAL_STORAGE_KEY);
}

function storeClientId(clientId) {
  return localStorage.setItem(GA_LOCAL_STORAGE_KEY, clientId);
}

function trackingCookieSet() {
  return !!document.cookie.match(/_ga=/);
}

function linkerParamPresent() {
  return !!window.location.search.match(/_ga=/);
}

function clientIdNotPresent() {
  return !(trackingCookieSet() || linkerParamPresent());
}

window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;

var accountId = 'UA-11834194-7';

var options = {
  allowLinker: true,
  siteSpeedSampleRate: 40,
  clientDomain: "auto",
};

if (canUseLocalStorage()) {
  if (clientIdNotPresent()) {
    options.clientId = retrieveClientId();
  }

  window.ga('create', accountId, options);

  window.ga(function(tracker) {
    var clientId = tracker.get('clientId');
    storeClientId(clientId);
    window.ga('set', 'dimension18', clientId);
  });
} else {
  window.ga('create', accountId, options);
}
window.ga('require', 'GTM-5VPWWP');
window.ga('require', 'linker');
window.ga('require', 'ec');
window.ga('require', 'displayfeatures');
window.ga('require', 'linkid');
window.ga('set', 'dimension19', 'Market Storefront');