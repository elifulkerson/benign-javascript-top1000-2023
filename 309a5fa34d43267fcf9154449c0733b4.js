window.optimizely = window.optimizely || [];
var getCookie = function (name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
};
var consentStateCookie = getCookie("xeConsentState");
var isConsentedToPerformance = false;
if (consentStateCookie) {
  isConsentedToPerformance = JSON.parse(decodeURIComponent(consentStateCookie)).performance;
} else {
  // ! This relies heavily on in-eu.js, which puts something in window scope
  isConsentedToPerformance = window.inEU !== undefined ? !window.inEU : false;
}
window.optimizely.push({
  type: "optOut",
  isOptOut: !isConsentedToPerformance,
});