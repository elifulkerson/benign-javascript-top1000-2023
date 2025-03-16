(function () {
                try {
                    var ua = navigator.userAgent.toLowerCase();

                    // Skip in case it's not apple device.
                    var isMacOS = ua.match(/(mac\sos\sx)\s?([\w\s.]*)/i) !== null;
                    if (!isMacOS) {
                        return;
                    }

                    // Skip in case it's not Safari or Safari version is lower that 13.
                    var match = ua.match(/version\/([\w.]+).+?(mobile\s?safari|safari)/i);
                    if (!match || match[2] !== 'safari' || parseInt(match[1].split('.')[0], 10) < 13) {
                        return;
                    }

                    // Redirect in case it's a mobile device.
                    if (typeof window.ontouchstart !== 'undefined') {
                        var path = window.location.pathname + window.location.search;
                        document.location.href = '/redirect-to-mobile?path=' + encodeURIComponent(path);
                    }
                }
                catch (e) {
                }
            })();
            var x = new XMLHttpRequest;
            x.onreadystatechange = function () {
                200 <= x.status && 300 > x.status && 4 === x.readyState && document.body.appendChild(x.responseXML.documentElement)
            };
            x.open("GET", "https://staticx2.dditscdn.com/jsm2/site/livejasmin/icomoon/symbol-defs.f03ab.svg");
            x.send("");