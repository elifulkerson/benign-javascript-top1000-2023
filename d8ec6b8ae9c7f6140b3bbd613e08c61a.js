window.quantcastVersion = 2;
        window.quantcastEnabled = true;
        var __wd = ["https://www.researchgate.net/", "https://c5.rgstatic.net/", "https://quantcast.mgr.consensu.org", "https://static.quantcast.mgr.consensu.org", "https://cmp.quantcast.com"];
        (function(d, l) {
            function m() {
                if (!d.quantcastEnabled) return !1;
                var b;
                if (b = /^(.*;)?\s*disable_quantcast\s*=/.test(l.cookie)) b = /^(.*;)?\s*disable_quantcast\s*=(\s*[^;]*)/.exec(l.cookie), b = "1" === (b && b[2] || "");
                return b ? !1 : !0
            }

            function g(b, e) {
                return e.some(function(c) {
                    return 0 === b.indexOf(c)
                })
            }
            var n = !1,
                h = [],
                p = [],
                k = ["appendChild", "insertBefore", "replaceChild"];
            if (m())
                for (var f = 0; f < k.length; f++) Element.prototype[k[f]] = function(b) {
                    var e = Element.prototype[b];
                    return function() {
                        var c;
                        if (c = 0 < arguments.length) {
                            c =
                                arguments;
                            var a;
                            if (a = 0 < c.length && c[0].tagName && -1 !== ["script", "iframe", "link", "style"].indexOf(c[0].tagName.toLowerCase())) a = c[0], a.src || a.href ? (a = a.src || a.href, g(a, d.__wd) && -1 === a.indexOf("/delivery/manager.js") ? a = !0 : (a = g(a, p), a = n && !a)) : a = !0, a = !a;
                            a ? (h.push({
                                s: this,
                                m: b,
                                a: c
                            }), c = !0) : c = !1
                        }
                        if (!c) return e.apply(this, arguments)
                    }
                }(k[f]);
            d.loadDeferredObjects = function(b) {
                b = b || [];
                n = !0;
                p = b;
                var e = [];
                h.forEach(function(c) {
                    var a = c.a[0];
                    g(a.src || a.href, b) ? e.push(c) : Element.prototype[c.m].apply(c.s, c.a)
                });
                h = e
            };
            d.canAskForCookieConsent = m;
            d.__headerTagQueue = [];
            d.headerTagLoaded = function(b) {
                d.__headerTagQueue.push(b)
            }
        })(window, document);