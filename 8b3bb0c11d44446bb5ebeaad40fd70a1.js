M.state.advert.place = {};
	(function(k, l, p, G) {
		function H(a) {
			return a ? l.getElementById(a) : null
		}

		function n(a) {
			return "undefined" !== typeof a
		}

		function R(a, d) {
			v(d, function(b, c) {
				a.setAttribute(b, c)
			})
		}

		function y(a, d) {
			var b = l.createElement(a);
			R(b, d);
			return b
		}

		function v(a, d) {
			if ("[object Object]" === {}.toString.call(a))
				for (var b in a) a.hasOwnProperty(b) && d(b, a[b]);
			else if (Array.isArray(a) && a.length) {
				b = 0;
				for (var c = a.length; b < c; b++) d(b, a[b])
			}
		}

		function z(a) {
			return "function" === typeof a || a instanceof Function
		}

		function I(a) {
			a = z(a) ? a : function() {};
			return function() {
				return a.apply(this, arguments)
			}
		}

		function J(a, d, b) {
			var c = p[a].params,
				e = p[a].attrs;
			c.startTime = (new Date).getTime();
			c.status = "preloading";
			c.name = a;
			S ? (d && "timeout" !== c.status && (c.status = b ? "failed" : "loaded", A(c, e)), setTimeout(function() {
				"preloading" === c.status && (c.status = "timeout", A(c, e))
			}, 3500)) : A(c, e)
		}

		function A(a, d) {
			a.defered ? T(function() {
				B(a, d)
			}) : a.loaded ? U(function() {
				B(a, d)
			}) : B(a, d)
		}

		function B(a, d) {
			if (!a.inserted) {
				a.inserted = !0;
				var b = y("script", d),
					c = b.readyState;
				b.async = !0;
				c ? b.onreadystatechange =
					function(e) {
						if ("loaded" === c || "complete" === c) b.onreadystatechange = null, I(a.onload)(), K(a, d)
					} : t(b, "load", function() {
						I(a.onload)();
						K(a, d)
					});
				t(b, "error", function(e) {
					a.error = e;
					p[a.name].result = a
				});
                if (L.parentNode) {
                	L.parentNode.insertBefore(b, L)
                }
			}
		}

		function K(a, d) {
			0 === d.src.indexOf("//") && (d.src = l.location.protocol + d.src);
			p[a.name].result = a
		}

		function N() {
			var a = Ya.headerBidding.getBidsReceived();
			M.state.HB.Bids = a;
			V(a);
		}

		function V(a) {
			v(a, function(d, b) {
				var c = b.containerId,
					e = b.errorCode,
					h = b.adapterName,
					g = M.state.advert.place;
				g[c] = g[c] || {};
				g[c].hbBidsReceived = g[c].hbBidsReceived || {};
				g[c].hbBidsReceived.max = 0;
				"cost" in b ? (g[c].hbBidsReceived[h] = parseInt(b.cost.cpm), g[c].hbBidsReceived.max = Math.max(g[c].hbBidsReceived.max, b.cost.cpm)) : n(e) ? 1 === e ? g[c].hbBidsReceived[h] = 0 : O(c, h, e) : O(c, h, "999")
			})
		}

		function O(a, d, b) {
			M.state.HB.Errors.push({
				monetizator: d,
				place: a,
				code: b
			})
		}
		M.state.ts = { hb: {} };
		M.state.HB = M.state.HB || { Bids: [], Errors: [] };
		M.state.libs = p;
		var w = y("link"),
			C = !0,
			L = l.scripts[0] || l.getElementsByTagName("script")[0],
			S = w.relList && z(w.relList.supports) && w.relList.supports("preload") && "as" in w,
			DE = l.documentElement;
		k.yaContextCb = k.yaContextCb || [];
		var looksLikeBot = (function (w, d, n) {
			try {
				var ua = n.userAgent,
					p = n.permissions,
					q = p.query,
					is = {
				        Nightmare: !!w.__nightmare,
				        Selenium: 'webdriver' in w || '_Selenium_IDE_Recorder' in w || 'callSelenium' in w || '_selenium' in w || '__webdriver_script_fn' in d || '__driver_evaluate' in d || '__webdriver_evaluate' in d || '__selenium_evaluate' in d || '__fxdriver_evaluate' in d || '__driver_unwrapped' in d || '__webdriver_unwrapped' in d || '__selenium_unwrapped' in d || '__fxdriver_unwrapped' in d || '__webdriver_script_func' in d || DE.getAttribute('selenium') !== null || DE.getAttribute('webdriver') !== null || DE.getAttribute('driver') !== null,
				        Sequentum: w.external && w.external.toString && w.external.toString().indexOf('Sequentum') > -1,
				        Phantom: (function () {
				        	if (/PhantomJS/.test(ua)) {
								return !0
							}
							if ('callPhantom' in w || '_phantom' in w || 'phantom' in w) {
								return !0
							}
							return !1
				        })(),
				        HeadlessChrome: (function () {
				        	function checkUserAgent () {

								return /HeadlessChrome/.test(ua)
							}

							function isWebdriverPresent () {

								return ('webdriver' in n) && !!n.webdriver
							}

							function isWindowChromeMissing () {

								return /Chrome/.test(ua) && !w.chrome
							}

							function isPermissionsAPIOverriden () {
								try {
									if (q.toString() !== 'function query() { [native code] }') {
										return true
									}

									if (q.toString.toString() !== 'function toString() { [native code] }') {
										return true
									}
									
									if (q.toString.hasOwnProperty('[[Handler]]') && q.toString.hasOwnProperty('[[Target]]') && q.toString.hasOwnProperty('[[IsRevoked]]') ) {
										return true
									}
									
									if (p.hasOwnProperty('query')) {
										return true
									}
								} catch (e) {}
								return false;
							}

							function hasNavigatorLanguages () {
								
								return n.languages === ''
							}

							function testIFrame () {
								try {
									var iframe = d.createElement('iframe');
									
									iframe.srcdoc = 'page intentionally left blank';

									d.body.appendChild(iframe);

									var descriptors = Object.getOwnPropertyDescriptors(HTMLIFrameElement.prototype);
									
									if (descriptors.contentWindow.get.toString() !== 'function get contentWindow() { [native code] }') {
										return true
									}

									if (iframe.contentWindow === w) {
										return true
									}
								} catch (e) {}
								return false;
							}

							function testToString () {
								let gotYou = 0;
								const spooky = /./;
								spooky.toString = function() {
									gotYou++;
									return 'spooky';
								};
								console.debug(spooky);
								return gotYou > 1;
							}

							return checkUserAgent() || isWebdriverPresent() || isWindowChromeMissing() || isPermissionsAPIOverriden() || hasNavigatorLanguages() || testIFrame() || testToString()
				        })(),
				        Bot: (function () {
				        	if (/Bot|bot/.test(ua)) {
								return !0
							}
							return !1
				        })()
					};
				return is.HeadlessChrome || is.Phantom || is.Selenium || is.Sequentum || is.Nightmare || is.Bot;
			} catch (e) {
				return !1
			}
		})(k, l, navigator);
		var D = function(a) {
			if (a in k && k[a]) {
				return a
			}
		}("performance"),
		E = function() {
			return E = D && z(k[D].now) ? function() {
				return k[D].now() | 0
			} : function() {
				return +new Date - M.state.app.timestamps.local
			}
		}(),
		F = function() {
			var a = !1;
			try {
				var d = Object.defineProperty({}, "passive", {
					get: function() {
						a = !0
					}
				});
				k.addEventListener("test", null, d)
			} catch (b) {}
			return a
		}(),
		q = function(a, d, b, c) {
			return q = F ? function(e, h, g, f) {
				f = f || {};
				f.capture = f.capture || !1;
				e.addEventListener(h, g, f)
			} : function(e, h, g) {
				e.addEventListener(h, g, !1)
			}
		}(),
		P = function(a, d, b, c) {
			return P = F ? function(e, h, g, f) {
				f = f || {};
				f.capture = f.capture || !1;
				e.removeEventListener(h, g, f)
			} : function(e, h, g) {
				e.removeEventListener(h, g, !1)
			}
		}(),
		t = function(a, d, b, c) {
			return t = F ? function(e, h, g, f) {
				f = f || {};
				f.capture = f.capture || !1;
				f.once = !0;
				q(e, h, g, f)
			} : function(e, h, g) {
				q(e, name, function x(m) {
					P(e, h, x, !1);
					g(m)
				}, !1)
			}
		}(),
		T = function() {
			function a() {
				if (!b) {
					b = !0;
					for (var e = 0; e < c.length; e++) c[e].fn.call(k, c[e].ctx);
					c = []
				}
			}
			var d = !1,
				b = !1,
				c = [];
			return function(e, h) {
				b ? setTimeout(function() {
					e(h)
				}, 1) : (c.push({
					fn: e,
					ctx: h
				}), l.readyState && "loading" !== l.readyState && setTimeout(a, 1), d || (d = !0, q(l, "readystatechange", function() {
					l.readyState && "interactive" === l.readyState && a()
				}), t(l, "DOMContentLoaded", a)))
			}
		}(),
		U = function() {
			function a() {
				if (!b) {
					b = !0;
					for (var e = 0; e < c.length; e++) c[e].fn.call(k, c[e].ctx);
					c = []
				}
			}
			var d = !1,
				b = !1,
				c = [];
			return function(e, h) {
				b ? setTimeout(function() {
						e(h)
					},
					1) : (c.push({
					fn: e,
					ctx: h
				}), l.readyState && "complete" === l.readyState && setTimeout(a, 1), d || (d = !0, q(l, "readystatechange", function() {
					l.readyState && "complete" === l.readyState && a()
				}), t(k, "load", a)))
			}
		}();
		M.fn.load = J;
        var localTimeParams = (function(){
            var dd = new Date();
            return {
                pt: 'b',
                pd: dd.getDate(),
                pw: dd.getDay(),
                pv: dd.getHours()
            }
        })();
		M.fn.callAd = function (id, method, mainParams, botParams) {
			k.yaContextCb.push(function () {
				if (!looksLikeBot) {
					Ya.adfoxCode[method]({
						ownerId: 235076,
						containerId: id,
						params: {...mainParams, ...localTimeParams, ...M.state.advert.puids}
					})
				} else {
					if (typeof botParams !== 'undefined') {
						Ya.adfoxCode[method]({
							ownerId: 235076,
							containerId: id,
							params: {...botParams, ...M.state.advert.puids}
						})
					}
				}
		    })
		};
		G.callbacks = {
			onBidsReceived: function() {
                if (C) {
                	M.state.ts.hb.adfox = E()
                }
                N();
			}
		};
		k.YaHeaderBiddingSettings = G;
		v(p, function(a, d) {
			J(a)
		})
	})(window, document, {
		hb: {
			params: {},
			attrs: {
				src: 'https://yandex.ru/ads/system/header-bidding.js'
			}
		},
		loader: {
			params: {},
			attrs: {
				src: 'https://yandex.ru/ads/system/context.js'
			}
		}
	}, {
		timeout: 1500,
		biddersMap: {
			myTarget: 772529
		},
		adUnits: [{
          	code: "media-top",
          	bids: [
            ],
          	sizes: [[970, 250]],
        }, {
			code: "media-right",
			bids: [ {
				bidder: "mytarget",
				params: {
					placementId: "1117383"
				}
			}],
			sizes: [
				[300, 600]
			]
		}, {
			code: "media-middle",
			bids: [{
				bidder: "mytarget",
				params: {
					placementId: "711608"
				}
			}],
			sizes: [
				[660, 240]
			]
		}, {
			code: "media-bottom",
			bids: [{
				bidder: "mytarget",
				params: {
					placementId: "219147"
				}
			}],
			sizes: [
				[240, 400]
			]
		}]
	});