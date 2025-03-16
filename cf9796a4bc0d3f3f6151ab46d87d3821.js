function comscoreIntegration() {
var TIMEOUT_DELAY = 2000;
var COMSCORE_ID = "10055482";
function callComscore(ucfrValue) {
window._comscore = window._comscore || [];
var comscorePayload = {
c1: "2",
c2: COMSCORE_ID,
};
if(ucfrValue) {
comscorePayload.cs_ucfr = ucfrValue;
}
window._comscore.push(comscorePayload);
injectComscore();
}
function callComscoreForVideo(ucfrValue) {
window._comscore = window._comscore || [];
const seconds = 600;
const comscorePayload = {
c2: COMSCORE_ID,
c5: jwplayer().getDuration() > seconds ? "03" : "02",
};
if(ucfrValue) {
comscorePayload.cs_ucfr = ucfrValue;
}
if (!window.COMSCORE) {
window._comscore.push(comscorePayload);
} else {
window.COMSCORE.beacon(comscorePayload)
}
}
function injectComscore() {
let s = document.createElement('script'), el = document.getElementsByTagName("script")[0];
s.async = true;
const URLbeginning = document.location.protocol === "https:" ? "https://sb" : "http://b";
if (window.__tcfapi) {
s.src = URLbeginning + '.scorecardresearch.com/cs/' + COMSCORE_ID + '/beacon.js';
} else {
s.src = URLbeginning + '.scorecardresearch.com/beacon.js';
}
el.parentNode.insertBefore(s, el);
}
if (window.__tcfapi) {
var timeout = window.setTimeout(function() {
callComscore();
}, TIMEOUT_DELAY);
window.__tcfapi('addEventListener', 2, function(res) {
window.__tcfapi('removeEventListener', 2, function() {}, res.listenerId);
const validStatus = ['tcloaded', 'useractioncomplete'];
if (validStatus.includes(res.eventStatus) && res.gdprApplies) {
window.clearTimeout(timeout);
callComscore(res.vendor?.consents?.[77] ? 1 : 0);
}
});
} else {
callComscore();
}
window.reliablePageLoad.then(function () {
window.document.addEventListener('jwplayerInstanceLoaded', function () {
jwplayer().once('beforePlay', function () {
callComscoreForVideo();
});
});
});
}
comscoreIntegration();