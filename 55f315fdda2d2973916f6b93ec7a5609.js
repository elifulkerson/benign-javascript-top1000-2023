(function () {
var optimizely = window["optimizely"] || [];
window.sendOptimizelyEvents = function (oneTrustConsentId) {
optimizely.push({
"type": "tags",
"tags": {
"onetrust_id": oneTrustConsentId || ""
}
});
optimizely.push({"type": "sendEvents"});
}
})();