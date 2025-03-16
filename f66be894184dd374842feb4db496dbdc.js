function loadAds() {
if (!window._xadsLoaded) {
loadScript('//cdn.orangeclickmedia.com/tech/v2.lifo.gr/ocm.js');
loadScript('//securepubads.g.doubleclick.net/tag/js/gpt.js');
loadScript('//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
loadScript('/themes/custom/bootstrap_sass/js/adblock.detect.js?v=1.0.0');
loadScript('/themes/custom/bootstrap_sass/js/ads.js?v=3');
loadScript('https://apps-cdn.relevant-digital.com/static/tags/1137447286956292940.js');
loadAdman();
loadOneSignal();
if (typeof window.requestNonPersonalizedAds !== 'undefined') {
googletag.cmd.push(function () {
googletag.pubads().setRequestNonPersonalizedAds(window.requestNonPersonalizedAds);
});
}
window._xadsLoaded = true;
}
}
function loadScript(src) {
var script = document.createElement('script');
script.src = src;
document.head.appendChild(script);
}
function loadAdman() {
var script = document.createElement('script');
script.src = 'https://static.adman.gr/adman.js';
document.head.appendChild(script);
window.AdmanQueue=window.AdmanQueue||[];
AdmanQueue.push(function(){
Adman.adunit({id:475,h:'https://x.grxchange.gr',inline:true})
});
}
function loadOneSignal() {
loadScript('//cdn.onesignal.com/sdks/OneSignalSDK.js');
setTimeout(function() {
var OneSignal = window.OneSignal || [];
OneSignal.push(function() {
OneSignal.init({
appId: "5c2de52e-202f-46d2-854a-c93489c04d14",
safari_web_id: "web.onesignal.auto.3db514d6-c75f-4a27-ad99-adae19a9a814",
subdomainName: "lifo",
promptOptions: {
actionMessage: "Θέλετε να λαμβάνετε πρώτοι ενημερώσεις για ό,τι συμβαίνει από το lifo.gr;",
acceptButtonText: "ΝΑΙ",
cancelButtonText: "Όχι",
},
});
OneSignal.showSlidedownPrompt();
});
}, 2000);
}
window.addEventListener('load', function () {
var botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|Chrome-Lighthouse|bingbot)";
var re = new RegExp(botPattern, 'i');
var userAgent = navigator.userAgent;
if (!re.test(userAgent)) {
var host = window.location.hostname;
var element = document.createElement('script');
var firstScript = document.getElementsByTagName('script')[0];
var url = 'https://cmp.quantcast.com'
.concat('/choice/', 'sp3rHHuKshJjA', '/', host, '/choice.js?tag_version=V2');
var uspTries = 0;
var uspTriesLimit = 3;
element.async = true;
element.type = 'text/javascript';
element.src = url;
firstScript.parentNode.insertBefore(element, firstScript);
function makeStub() {
var TCF_LOCATOR_NAME = '__tcfapiLocator';
var queue = [];
var win = window;
var cmpFrame;
function addFrame() {
var doc = win.document;
var otherCMP = !!(win.frames[TCF_LOCATOR_NAME]);
if (!otherCMP) {
if (doc.body) {
var iframe = doc.createElement('iframe');
iframe.style.cssText = 'display:none';
iframe.name = TCF_LOCATOR_NAME;
doc.body.appendChild(iframe);
} else {
setTimeout(addFrame, 5);
}
}
return !otherCMP;
}
function tcfAPIHandler() {
var gdprApplies;
var args = arguments;
if (!args.length) {
return queue;
} else if (args[0] === 'setGdprApplies') {
if (
args.length > 3 &&
args[2] === 2 &&
typeof args[3] === 'boolean'
) {
gdprApplies = args[3];
if (typeof args[2] === 'function') {
args[2]('set', true);
}
}
} else if (args[0] === 'ping') {
var retr = {
gdprApplies: gdprApplies,
cmpLoaded: false,
cmpStatus: 'stub'
};
if (typeof args[2] === 'function') {
args[2](retr);
}
} else {
if(args[0] === 'init' && typeof args[3] === 'object') {
args[3] = { ...args[3], tag_version: 'V2' };
}
queue.push(args);
}
}
function postMessageEventHandler(event) {
var msgIsString = typeof event.data === 'string';
var json = {};
try {
if (msgIsString) {
json = JSON.parse(event.data);
} else {
json = event.data;
}
} catch (ignore) {}
var payload = json.__tcfapiCall;
if (payload) {
window.__tcfapi(
payload.command,
payload.version,
function(retValue, success) {
var returnMsg = {
__tcfapiReturn: {
returnValue: retValue,
success: success,
callId: payload.callId
}
};
if (msgIsString) {
returnMsg = JSON.stringify(returnMsg);
}
if (event && event.source && event.source.postMessage) {
event.source.postMessage(returnMsg, '*');
}
},
payload.parameter
);
}
}
while (win) {
try {
if (win.frames[TCF_LOCATOR_NAME]) {
cmpFrame = win;
break;
}
} catch (ignore) {}
if (win === window.top) {
break;
}
win = win.parent;
}
if (!cmpFrame) {
addFrame();
win.__tcfapi = tcfAPIHandler;
win.addEventListener('message', postMessageEventHandler, false);
}
};
makeStub();
var uspStubFunction = function() {
var arg = arguments;
if (typeof window.__uspapi !== uspStubFunction) {
setTimeout(function() {
if (typeof window.__uspapi !== 'undefined') {
window.__uspapi.apply(window.__uspapi, arg);
}
}, 500);
}
};
var checkIfUspIsReady = function() {
uspTries++;
if (window.__uspapi === uspStubFunction && uspTries < uspTriesLimit) {
console.warn('USP is not accessible');
} else {
clearInterval(uspInterval);
}
};
if (typeof window.__uspapi === 'undefined') {
window.__uspapi = uspStubFunction;
var uspInterval = setInterval(checkIfUspIsReady, 6000);
}
__tcfapi('addEventListener', 2, function(tcData, success) {
if (success && (tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete')) {
if (!tcData.gdprApplies) {
loadAds();
} else {
var hasPurposeOneConsent = tcData.purpose.consents['1'];
var hasGoogleConsent = false;
window.requestNonPersonalizedAds = 1;
if (hasPurposeOneConsent) {
if (tcData.vendor.consents['755'] && tcData.vendor.legitimateInterests['755']) {
if ((tcData.purpose.consents['2'] || tcData.purpose.legitimateInterests['2']) && (tcData.purpose.consents['7'] || tcData.purpose.legitimateInterests['7']) && (tcData.purpose.consents['9'] || tcData.purpose.legitimateInterests['9']) && (tcData.purpose.consents['10'] || tcData.purpose.legitimateInterests['10'])) {
hasGoogleConsent = true;
if ((tcData.purpose.consents['3'] || tcData.purpose.legitimateInterests['3']) && (tcData.purpose.consents['4'] || tcData.purpose.legitimateInterests['4'])) {
window.requestNonPersonalizedAds = 0;
}
}
}
if (hasGoogleConsent) {
loadAds();
}
}
}
}
});
}
});