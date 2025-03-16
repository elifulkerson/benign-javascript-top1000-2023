(function(w, d) {
        w.idpVerifyPrefix = 'https://verify.nature.com';
        w.ra21Host = 'https://wayf.springernature.com';
        var moduleSupport = (function() {
            return 'noModule' in d.createElement('script');
        })();

        var polyfillsUrl = function() {
            var features = {
                'IntersectionObserver': window.IntersectionObserver,
                'Promise': window.Promise,
                'URLSearchParams': window.URLSearchParams,
                'Symbol.iterator': window.Symbol && Symbol.iterator,
                'Array.from': Array.from,
                'Array.prototype.includes': Array.prototype.includes,
                'Array.prototype.find': Array.prototype.find,
                'Array.prototype.forEach': Array.prototype.forEach,
                'NodeList.prototype.forEach': NodeList.prototype.forEach,
                'Element.prototype.closest': Element.prototype.closest,
                'Element.prototype.prepend': Element.prototype.prepend,
                'Element.prototype.remove': Element.prototype.remove,
                'Object.assign': Object.assign
            };
            var req = [];
            for (var feature in features) {
                if (Object.prototype.hasOwnProperty.call(features, feature) && !features[feature]) {
                    req.push(feature);
                }
            }
            if (req.length) {
                return 'https://polyfill.io/v3/polyfill.min.js?features=' + req.join('%2C') + '&flags=always';
            }
            return null;
        };

        if (w.config.mustardcut === true) {
            w.loader = {
                index: 0,
                registered: [],
                scripts: [
                    {src: polyfillsUrl(), test: 'polyfills-js', noinit: true},
                     
                        {src: '/static/js/journal-homepage-es6-bundle-b9f893066c.js', test: 'journal-homepage-js', module: true},
                        {src: '/static/js/journal-homepage-es5-bundle-a288b582e2.js', test: 'journal-homepage-js', nomodule: true}
                    
                ].filter(function (s) {
                    if (s.src === null) return false;
                    if (moduleSupport && s.nomodule) return false;
                    return !(!moduleSupport && s.module);
                }),

                register: function (value) {
                    this.registered.push(value);
                },

                ready: function () {
                    if (this.registered.length === this.scripts.length) {
                        this.registered.forEach(function (fn) {
                            if (typeof fn === 'function') {
                                setTimeout(fn, 0); 
                            }
                        });
                        this.ready = function () {};
                    }
                },

                insert: function (s) {
                    var t = d.getElementById('js-position' + this.index);
                    if (t && t.insertAdjacentElement) {
                        t.insertAdjacentElement('afterend', s);
                    } else {
                        d.head.appendChild(s);
                    }
                    ++this.index;
                },

                createScript: function (script, beforeLoad) {
                    var s = d.createElement('script');
                    s.id = 'js-position' + (this.index + 1);
                    s.setAttribute('data-test', script.test);
                    if (beforeLoad) {
                        s.defer = 'defer';
                        s.onload = function () {
                            if (script.noinit) {
                                loader.register(true);
                            }
                            if (d.readyState === 'interactive' || d.readyState === 'complete') {
                                loader.ready();
                            }
                        };
                    } else {
                        s.async = 'async';
                    }
                    s.src = script.src;
                    return s;
                },

                init: function () {
                    this.scripts.forEach(function (s) {
                        loader.insert(loader.createScript(s, true));
                    });

                    d.addEventListener('DOMContentLoaded', function () {
                        loader.ready();
                        
                            var conditionalScripts = [
                                {match: 'math,span.mathjax-tex', src: '/static/js/math-es6-bundle-d616f8e4f9.js', test: 'math-js', module: true},
                                {match: 'math,span.mathjax-tex', src: '/static/js/math-es5-bundle-66109c5184.js', test: 'math-js', nomodule: true}
                            ];
                        

                        if (conditionalScripts) {
                            conditionalScripts.filter(function (script) {
                                return !!document.querySelector(script.match) && !((moduleSupport && script.nomodule) || (!moduleSupport && script.module));
                            }).forEach(function (script) {
                                loader.insert(loader.createScript(script));
                            });
                        }
                    }, false);
                }
            };
            loader.init();
        }
    })(window, document);