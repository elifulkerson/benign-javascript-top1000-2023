(function (e, o, n, i) {
    if (!e) {
        e = e || {}, window.permutive = e, e.q = [];
        var t = function () {
            return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (e) {
                return (e ^ (window.crypto || window.msCrypto).getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
            })
        };
        e.config = i || {}, e.config.apiKey = o, e.config.workspaceId = n, e.config.environment = e.config.environment || "production", (window.crypto || window.msCrypto) && (e.config.viewId = t());
        for (var g = ["addon", "identify", "track", "trigger", "query", "segment", "segments", "ready", "on", "once", "user", "consent"], r = 0; r < g.length; r++) {
            var w = g[r];
            e[w] = function (o) {
                return function () {
                    var n = Array.prototype.slice.call(arguments, 0);
                    e.q.push({functionName: o, arguments: n})
                };
            }(w);
        }
    }
})(window.permutive, "12730e07-f09d-4a69-93da-99b43983b663", "e1cef1f0-495f-4973-ba1c-880786e73a66", {"consentRequired": true});