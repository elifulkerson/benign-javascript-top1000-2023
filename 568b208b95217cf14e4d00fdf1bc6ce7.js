document.addEventListener('DOMContentLoaded', function () {
/**
* provides the current user's cookie consent
* in order to use it:
* 1. inline privacy/cookieConsent.js in the page you need to use it.
* please note that this library relies on window.PCM.isCountryNeedCookieBanner to be initialised
* before using (calling getValue function) it
* 2. in your js file:
*
* var privacyCookieConsent = B.require('privacyCookieConsent');
* var consent = privacyCookieConsent.getValue();
*/
B.define('privacyCookieConsent', function () {
var consentGroupIsAllowed = {
analytical: 'C0002%3A1',
marketing: 'C0004%3A1'
};
var optanonConsentCookieName = 'OptanonConsent';
var optanonBoxClosedCookieName = 'OptanonAlertBoxClosed';
var halfOfYearMillis = 180 * 24 * 60 * 60 * 1000;
function isDefined(value) {
return value && value !== "undefined";
}
function parseConsentToObject(consent) {
var result = {};
if (typeof consent === 'string') {
var parts = consent.split('&');
parts.forEach(function (part) {
var keyAndValue = part.split('=');
result[keyAndValue[0]] = keyAndValue[1];
});
}
return result;
}
function isConsentValid(consent, alertBoxClosed) {
return isDefined(consent) &&
isDefined(alertBoxClosed) &&
new Date() - new Date(alertBoxClosed) <= halfOfYearMillis;
}
function getCookie(name) {
name += "=";
var cookies = document.cookie.split(";");
for (var i = 0; i < cookies.length; i += 1) {
var cookie = cookies[i];
while (cookie.charAt(0) === " ") {
cookie = cookie.substring(1, cookie.length);
}
if (cookie.indexOf(name) === 0) {
return cookie.substring(name.length, cookie.length);
}
}
return null;
}
function doesGeolocationRequireBanner() {
// In case window.PCM is not defined, fallback to opt-out
return window.PCM ? window.PCM.isCountryNeedCookieBanner : true;
}
function getExplicitConsent() {
var consent = getCookie(optanonConsentCookieName);
var alertBoxClosed = getCookie(optanonBoxClosedCookieName);
if (isConsentValid(consent, alertBoxClosed)) {
var consentObject = parseConsentToObject(consent);
return Object
.keys(consentGroupIsAllowed)
.map(function (purpose) {
var result = {};
result[purpose] = consentObject.groups.indexOf(consentGroupIsAllowed[purpose]) > -1;
return result;
})
.reduce(
function (result, currentValue) {
return Object.assign(result, currentValue);
}, {
functional: true
}
);
}
}
function getImplicitConsent() {
var consentValue = !doesGeolocationRequireBanner();
return {
functional: true,
analytical: consentValue,
marketing: consentValue
};
}
function getValue() {
var consent = getExplicitConsent();
if (!consent) {
consent = getImplicitConsent();
}
return consent;
}
return {
getValue: getValue
};
});
//c360 javascript tracker first iteration
//sends a track request to c360 http tracker
//in order to use it:
//1. inline the c360Tracker.js in the page you need to use it
//2. in your js file:
//
// var c360Tracker = B.require('c360Tracker');
// var event = {
// action_name:"accommodation_checkout_confirmation_viewed",
// action_version :"0.2.0",
// content : { "transaction_id" : 123434},
// user : { "BKNG_user_id": 123434}
// };
// c360Tracker.track(event);
B.define('c360Tracker', function () {
var enrichedContext = {};
var EXPERIMENT_HASH_BATCHING = 'GfCDATBbLJbWRWEdTTcO';
var isExperimentBatching = B.et && B.et.track && B.et.track(EXPERIMENT_HASH_BATCHING) || 0;
var queue = [];
var queueTimeout = null;
var flushInterval = 1000;
var flushSize = 10;
var configuration = {
validateInput: false
};
var track = function (event) {
if (event == null) {
return "event object is null or empty";
} else {
var validationResult = new ValidationResult(true);
if (configuration.validateInput) {
validationResult = validateInput(event);
}
if (!validationResult.success) {
return validationResult.message;
}
if (isExperimentBatching) {
enqueue(event);
} else {
send([event]);
}
}
};
function enqueue(event) {
if (queue.length == 0) {
queueTimeout = setTimeout(flush, flushInterval);
}
queue.push(event);
if (queue.length >= flushSize) {
if (queueTimeout !== null) {
clearTimeout(queueTimeout);
}
flush();
return;
}
}
function flush() {
send(queue, true);
queue = [];
queueTimeout = null;
}
function withContextProvider(isFlush) {
var trackerVersion = '0.1.0'
if (isFlush) {
trackerVersion = '0.1.1';
}
return function (item) {
return Object.assign({}, item, {
context: enrichedContext,
tracker: {
tracker_name: 'C360JSTracker',
tracker_type: 'Client',
tracker_version: trackerVersion
}
});
}
}
function send(events, isFlush) {
var payload = {
events: events.map(withContextProvider(isFlush))
};
return $.ajax({
url: '/c360/v1/track',
type: 'POST',
dataType: 'json',
data: JSON.stringify(payload),
});
}
enrich();
var scheme =
{
"type": "object",
"properties": {
"action_name": {
"type": "string",
"description": "action name (ex. element viewed)",
},
"action_version": {
"type": "string",
"description": "action version"
},
"content": {
"type": "object",
"description": "content defined by the registered producer scheme"
}
}
};
function ValidationResult(success, message) {
this.success = success;
this.message = message;
}
function validateInput(event) {
var result = validateObject(event, scheme);
return result;
}
function validateObject(obj, scheme) {
if (scheme.properties != null) {
var propsArray = Object.getOwnPropertyNames(scheme.properties);
for (var i = 0; i < propsArray.length; i++) {
var propertyName = propsArray[i];
if (obj[propertyName] == null) {
return new ValidationResult(false, "property " + propertyName + " is not defined");
}
if (scheme.properties[propertyName].type == "object") {
var validationResult = validateObject(obj[propertyName], scheme.properties[propertyName]);
if (validationResult.success === false) {
return validationResult;
}
}
}
}
return new ValidationResult(true);
}
function enrich() {
enrichedContext = {
page: {
page_referrer: document.referrer,
page_url: window.location.href,
page_title: document.title
},
local: {
currency: B.env.b_selected_currency
},
};
//if (B.env.b_user_genius_status != null && B.env.b_user_genius_status.b_user_id != null)
// enrichedContext.userID = B.env.b_user_genius_status.b_user_id;
}
return {
track: track
};
});
})