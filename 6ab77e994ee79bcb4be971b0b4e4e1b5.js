window.addEventListener('load', function () {
var botPattern = "(googlebot\/|bot|Googlebot-Mobile|Googlebot-Image|Google favicon|Mediapartners-Google|Chrome-Lighthouse|bingbot)";
var re = new RegExp(botPattern, 'i');
var userAgent = navigator.userAgent;
if (!re.test(userAgent)) {
__tcfapi("addEventListener", 2, (function (e, t) {
if (t && ("useractioncomplete" === e.eventStatus || "tcloaded" === e.eventStatus)) {
if (!e.purpose.consents[1]) return;
loadScript('https://pghub.io/js/pandg-sdk.js');
var n = e.gdprApplies ? 1 : 0;
var metadata = {
gdpr: n,
gdpr_consent: e.tcString,
ccpa: null,
bp_id: "dyodeka",
};
var config = {
name: "P&G",
pixelUrl: "https://pandg.tapad.com/tag"
};
setTimeout(function () {
var tagger = Tapad.init(metadata, config);
var data = {
category: adsCategory,
};
tagger.sync(data);
}, 2 * 1000);
}
}));
}
});