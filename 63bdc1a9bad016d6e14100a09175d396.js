!function (e) {
      var t = {};
      function n(r) {
        if (t[r])
          return t[r].exports;
        var o = t[r] = {
          "i": r,
          "l": !1,
          "exports": {}
        };
        return e[r].call(o.exports, o, o.exports, n),
          o.l = !0,
          o.exports
      }
      n.m = e,
        n.c = t,
        n.d = function (e, t, r) {
          n.o(e, t) || Object.defineProperty(e, t, {
            "configurable": !1,
            "enumerable": !0,
            "get": r
          })
        }
        ,
        n.n = function (e) {
          var t = e && e.__esModule ? function () {
            return e["default"]
          }
            : function () {
              return e
            }
            ;
          return n.d(t, "a", t),
            t
        }
        ,
        n.o = function (e, t) {
          return Object.prototype.hasOwnProperty.call(e, t)
        }
        ,
        n.p = "",
        n(n.s = 10)
    }([function (e, t, n) {
      "use strict";
      var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
      }
        : function (e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        , o = {
          "timeOrigin": window.performance ? parseInt(Date.now() - performance.now()) : Date.now()
        }
        , i = {}
        , a = null
        , s = !1
        , c = "NORMAL";
      function u(e) {
        return "string" == typeof e ? e.split(".").splice(0, 3).map(function (e) {
          return "" + "000".substr(0, 3 - e.length) + e
        }).join(".") : ""
      }
      function l(e) {
        return "function" == typeof e
      }
      function f() {
        return -1 != location.href.indexOf("jt_debug")
      }
      var d = null;
      function p(e) {
        if (null !== d)
          return d;
        e = e || navigator.userAgent,
          d = [];
        var t = /(Android|iPhone;|iPad;)/.exec(e);
        return t && t.length >= 2 ? (d.push("Android" === t[1] ? "Android" : "iOS"),
          (t = /AliApp\((.*?)\/([\d\.]*?)\)/.exec(e)) && t.length >= 3 && (d = d.concat(t.slice(1, 3)),
            (t = /WindVane\/([\d\.]+)/.exec(e)) && t.length >= 2 && d.push(t[1]))) : d.push("Other"),
          d
      }
      function m() {
        if (a)
          return a;
        var e = p();
        if (e && e[2]) {
          var t = window.lib;
          return a = t && t.windvane && l(t.windvane.call)
        }
        return a = !1
      }
      function g() { }
      var v = [["Android", "TB", "10.10.10"]]
        , h = [["Android", "TB", "10.16.10"], ["iOS", "TB", "10.16.10"]];
      function y(e) {
        var t = p()
          , n = null;
        for (var r in e)
          if ("" !== (n = e[r]))
            if (r < 2) {
              if (!t[r] || t[r] !== n)
                return !1
            } else if (!t[r] || u(t[r]) < u(n))
              return !1;
        return !0
      }
      function w(e, t, n, r, o) {
        if (m() && e && t) {
          var i = window.lib.windvane.call(e, t, n || {}, function (e) {
            l(r) && r(e && "string" == typeof e ? JSON.parse(e) : e)
          }, o || g);
          i && i["catch"] && i["catch"](g)
        }
      }
      var b = ["PRELOAD", "NORMAL", "INTERACT"];
      e.exports = {
        "nope": g,
        "ipv6": function () {
          return !!window.__IPV6__
        },
        "pushTlog": function (e, t) {
          arguments.length > 2 && arguments[2] !== undefined && arguments[2]
        },
        "closeTlog": function (e) {
          if (e) {
            var t = function () {
              e.stageID ? w("WVFalco", "finishStage", e) : e.phaseID && w("WVFalco", "finishPhase", e)
            };
            e.property ? w("WVFalco", "addProperties", e, t) : t()
          }
        },
        "reportTlog": function (e, t) {
          var n = e.tlogLayer
            , r = n === undefined ? null : n
            , o = e.code
            , i = o === undefined ? null : o
            , a = e.phaseID;
          if (!(r && i && m() && v.some(y)))
            return l(t) && t(null);
          var s = null
            , c = null;
          for (var u in "phase" == r ? (s = "startPhase",
            c = {
              "phaseName": i,
              "property": {}
            }) : (s = "startStage",
              c = {
                "stageName": i,
                "phaseID": a,
                "property": {}
              }),
            e)
            -1 == ["tlogLayer", "code", "phaseID"].indexOf(u) && (c.property[u] = e[u]);
          w("WVFalco", s, c, t, function (e) {
            f() && console.warn(e),
              l(t) && t()
          })
        },
        "reportWVTLog": function (e, t, n) {
          if (e && "object" === (void 0 === e ? "undefined" : r(e)) && e.event && m() && h.some(y)) {
            var o = function (t) {
              f() && console.error("上报tlog失败:", e),
                l(n) && n(t)
            }
              , i = lib.windvane.call("WVNativeLog", "write", e, function (n) {
                f() && console.log("上报tlog成功:", e),
                  l(t) && t(n)
              }, o);
            i && i["catch"] && i["catch"](o)
          } else
            f() && (!e && console.error("jstracker上报tlog需要传入参数"),
              !(e instanceof Object) && console.error("jstracker上报tlog, 传入参数需要为Object"),
              !e.event && console.error("jstracker上报tlog, code字段为必填字段"),
              !m() && console.error("tlog上报无Windvane环境"),
              !h.some(y) && console.error("手淘版本较低无法上传tlog,仅支持10.16.10以上版本"))
        },
        "isWindvane": m,
        "getAliAppVers": p,
        "isMatchApp": y,
        "callWindvane": w,
        "getMode": function () {
          return c
        },
        "setMode": function (e) {
          if (e = (e || "normal").toUpperCase(),
            c !== e && -1 !== b.indexOf(e)) {
            var t = c;
            c = e,
              this.boradcast("_change_mode", {
                "nextMode": c,
                "preMode": t
              })
          }
        },
        "event": {
          "WATCH": "jstracker:watch"
        },
        "get": function (e) {
          return o[e]
        },
        "set": function (e, t) {
          o[e] = t
        },
        "subscribe": function (e, t, n) {
          if (e) {
            if (!l(t))
              throw new Error("event handler must be a function.");
            i[e] || (i[e] = []),
              i[e].push({
                "hander": t,
                "scope": n
              })
          }
        },
        "boradcast": function (e, t) {
          var n = i[e]
            , r = 0;
          if (undefined !== n) {
            var o = [].slice.call(arguments, 0);
            o = o.length > 2 ? o.splice(2, o.length - 1) : [],
              o = [t].concat(o),
              r = n.length;
            for (var a = 0; a < r; a++) {
              var s = n[a];
              s && s.hander && s.hander.apply(s.scope, o)
            }
          }
        },
        "trigger": function (e) {
          "interactive" === e && this.set(e, this.now())
        },
        "merge": function () {
          for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
            t[n] = arguments[n];
          return t.reduce(function (e, t) {
            return function (e, t) {
              var n = {};
              for (var r in e)
                n[r] = e[r];
              for (var o in t)
                n[o] = t[o];
              return n
            }(e, t)
          })
        },
        "stringify": function (e) {
          var t = []
            , n = void 0;
          for (var r in e)
            "reverse1" !== r ? t.push(r + "=" + encodeURIComponent(e[r])) : n = r + "=" + encodeURIComponent(e[r]);
          var o = t.join("&");
          return !n || o.length + n.length > 2083 ? o : o + "&" + n
        },
        "now": function () {
          return window.performance && window.performance.now ? window.performance.now() : Date && l(Date.now) ? Date.now() : (new Date).getTime()
        },
        "onload": function (e) {
          e && (/complete/.test(document.readyState) && document.body ? setTimeout(e, 0) : document.addEventListener ? window.addEventListener("load", e, !1) : window.attachEvent("onload", e))
        },
        "makeRand": function () {
          return window.performance && window.performance.now ? parseInt(window.performance.now()) : o.timeOrigin ? o.timeOrigin - Date.now() : -1
        },
        "sample": function (e) {
          return !!this.debug() || Math.random() * e < 1
        },
        "debug": f,
        "isMobile": function () {
          return !!/Android|webOS|iPhone/i.test(navigator.userAgent)
        },
        "isMacOsLike": function () {
          return !!/Mac OS X/i.test(navigator.userAgent)
        },
        "isFunction": l,
        "supportBeacon": function () {
          return !!navigator.sendBeacon
        },
        "unload": function (e) {
          var t = this;
          if (!i["_page_unload"]) {
            var n = function () {
              s || (t.boradcast("_page_unload", {}),
                s = !0)
            };
            window.addEventListener("beforeunload", n),
              document.addEventListener("WV.Event.Unload", n),
              document.addEventListener("WV.Event.Key.Back", n)
          }
          this.subscribe("_page_unload", e)
        },
        "isUC": function () {
          return window.ucweb && window.ucweb.window
        },
        "isPHA": function () {
          return !!/PHA\//.test(navigator.userAgent) && ("object" === ("undefined" == typeof pha ? "undefined" : r(pha)) && "object" === r(pha.performance) && l(pha.performance.report))
        },
        "getSDKVersion": function () {
          return window && !window.process && (window.process = {}),
            "5.6.32"
        },
        "getReferrer": function () {
          return document && document.referrer && "string" == typeof document.referrer ? document.referrer.split("?")[0] : ""
        },
        "getMetaContentByName": function (e) {
          if (document && document.querySelector) {
            var t = document.querySelector('meta[name="' + e + '"]');
            if (t)
              return t.getAttribute("content")
          }
          return ""
        },
        "getElementPath": function (e) {
          return _(S(e))
        }
      };
      var S = function (e) {
        for (var t = []; e;) {
          var n = e.nodeName.toLowerCase()
            , r = e.id ? "#" + e.id : ""
            , o = "";
          e.className && "string" == typeof e.className && (o = "." + e.className.replace(/\s+/g, ".").replace(/[:*+?^${}()|[\]\\]/gi, "\\$&")),
            t.unshift({
              "element": e,
              "selector": n + r + o
            }),
            e = e.parentNode !== document && e.parentNode
        }
        return t
      }
        , _ = function (e) {
          var t = [];
          return e.forEach(function (e) {
            t.push(e.selector)
          }),
            t.join(" > ")
        }
    }
      , function (e, t, n) {
        "use strict";
        var r = n(0)
          , o = n(17);
        e.exports = {
          "push": function (e, t) {
            var n = "jsFeImage_" + r.makeRand()
              , i = window[n] = new Image;
            i.referrerPolicy = "no-referrer-when-downgrade";
            var a = o(t);
            i.src = a + e,
              i.onload = i.onerror = function () {
                window[n] = null
              }
          },
          "post": function (e, t) {
            if (r.supportBeacon()) {
              var n = o(t);
              navigator.sendBeacon(n, JSON.stringify({
                "gmkey": "OTHER",
                "gokey": encodeURIComponent(e)
              }))
            }
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var r, o = n(0), i = !1, a = "";
        function s() {
          o.callWindvane("WVNetwork", "getNetworkType", {}, function (e) {
            i = !0,
              a = e && e.type
          })
        }
        s(),
          (r = navigator.connection || navigator.mozConnection || navigator.webkitConnection) && r.rtt && o.set("rtt", r.rtt),
          r && r.downlink && o.set("downlink", r.downlink),
          a = r && r.effectiveType,
          o.onload(function () {
            !i && s()
          }),
          e.exports = function () {
            return a
          }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0)
          , o = !1
          , i = "";
        function a() {
          r.isMacOsLike() && r.callWindvane("WVNativeDetector", "getModelInfo", {}, function (e) {
            o = !0,
              i = e && e.platform ? e.platform : ""
          })
        }
        a(),
          r.onload(function () {
            !o && a()
          }),
          e.exports = function () {
            return i
          }
      }
      , function (e, t, n) {
        "use strict";
        var r = 10;
        var o = 0
          , i = null;
        function a() {
          var e = null
            , t = null;
          try {
            var n = Date.now();
            if (n - o < 50)
              return i;
            if (o = n,
              !document.elementFromPoint)
              return i = "";
            var a = document.documentElement
              , s = a.clientWidth
              , c = a.clientHeight
              , u = window
              , l = u.scrollX
              , f = l === undefined ? 0 : l
              , d = u.scrollY
              , p = d === undefined ? 0 : d
              , m = .5 * (e = Math.floor(s / r))
              , g = document.body || document.documentElement
              , v = function (e) {
                return window.getComputedStyle ? "fixed" === window.getComputedStyle(e).position : "fixed" === e.style.position
              }
              , h = function (t, n) {
                for (var r = t - f % e + m, o = n - p % e + m, i = document.elementFromPoint(r, o), a = 0; i && i !== g;) {
                  if (a += 1,
                    v(i))
                    return 30 + a;
                  i = i.parentElement
                }
                return a
              };
            t = [];
            for (var y = Math.floor(c / e), w = Math.floor(s / e), b = 0, S = 0; S <= y;) {
              for (t[S] = []; b < w;)
                t[S][b] = h(b * e, S * e),
                  b++;
              S++,
                b = 0
            }
            var _ = function (e) {
              var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3
                , n = e.length
                , r = e[0].length
                , o = Math.ceil(r / t)
                , i = Math.ceil(n / t)
                , a = Math.pow(t, 2) / 100;
              function s(o, i) {
                var s = o * t
                  , c = s + t
                  , u = i * t
                  , l = u + t;
                c > r && (c = r,
                  s = r - t),
                  l > n && (l = n,
                    u = n - t);
                var f = 0;
                for (i = u; i < l; i++)
                  for (o = s; o < c; o++)
                    f += e[i][o];
                return Math.round(f / a)
              }
              for (var c = [], u = 0; u < i; u++) {
                c[u] = [];
                for (var l = 0; l < o; l++)
                  c[u][l] = s(l, u)
              }
              return c
            }(t, 2).map(function (e) {
              var t = !0
                , n = null
                , r = e.map(function (e, r) {
                  var o, i = Math.min(e, 4095).toString(16);
                  return 0 === r ? n = i : t = n === i && t,
                    "" + "000".substr(0, 3 - (o = i).length) + o
                });
              return t ? r[0] : r.join("")
            }).join(",");
            return i = f + "," + p + ";" + e + ";" + w + "," + y + ";" + _
          } catch (T) {
            return ""
          }
        }
        function s() {
          var e = 0;
          try {
            for (var t = document.scripts, n = 0, r = t.length; n < r; n++) {
              var o = t[n].getAttribute("src");
              o && -1 !== o.indexOf(".js") && e++
            }
          } catch (i) { }
          return e
        }
        e.exports = {
          "uiContourMap": a,
          "getPageOverview": function (e) {
            try {
              return JSON.stringify({
                "nodeLen": e || document.all.length,
                "imgLen": document.images.length,
                "iframeLen": document.getElementsByTagName("iframe").length,
                "height": document.documentElement.scrollHeight,
                "script": s(),
                "cmap": a()
              })
            } catch (t) {
              return ""
            }
          },
          "getScripts": s
        }
      }
      , function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          var t = !1;
          return e = parseFloat(e, 10),
            isNaN(e) ? (window.console && console.warn && console.warn("JSTracker2 sampling is invalid, please set a integer!"),
              t) : (e > 0 && e < 1 && (e = Math.round(1 / e)),
              {
                "flag": t = Math.random() * e < 1,
                "sampling": e
              })
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0)
          , o = []
          , i = {}
          , a = {}
          , s = [];
        e.exports = {
          "mark": function (e, t) {
            this.insertOrUpdate(e, t, !0)
          },
          "insertOrUpdate": function (e, t, n) {
            var a = parseInt(t)
              , s = isNaN(a) ? parseInt(r.now()) : a
              , c = this.getIndexByName(e);
            -1 == c ? (o.push({
              "n": e,
              "st": s,
              "t": "mark"
            }),
              i[e] = s,
              "fsp_canvas" === e && r.boradcast("_fsp_canvas", s)) : !0 === n && o[c] && (i[e] = o[c].st = s)
          },
          "getIndexByName": function (e) {
            for (var t = 0; t < o.length; t++)
              if (o[t].n === e)
                return t;
            return -1
          },
          "getMarkByName": function (e) {
            var t = null;
            return o.forEach(function (n) {
              n.n === e && (t = n)
            }),
              t
          },
          "measure": function (e, t, n) {
            if (t) {
              var i = this.getMarkByName(t)
                , c = this.getMarkByName(n);
              if (i) {
                c = c || {
                  "startTime": r.now()
                };
                var u = parseInt(c.st - i.st);
                o.push({
                  "n": e,
                  "st": parseInt(r.now()),
                  "t": "measure"
                }),
                  a[e] = u,
                  s.push({
                    "n": e,
                    "st": parseInt(r.now()),
                    "duration": u,
                    "sn": t,
                    "en": n
                  })
              }
            }
          },
          "getEntries": function () {
            return o
          },
          "toJSON": function () {
            return {
              "mark": i,
              "measure": a,
              "measureEntries": s
            }
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        !function () {
          var t = -1 != location.href.indexOf("jt_debug=fsp")
            , n = function () { }
            , r = t ? console.log.bind(console.log, "jt_sfsp: ") : n
            , o = "data-jstracker-nofsp"
            , i = ["mousedown", "touchstart"];
          if ("undefined" != typeof window && "undefined" != typeof performance && "undefined" != typeof MutationObserver && "undefined" != typeof screen) {
            var a = {
              "SCRIPT": 1,
              "LINK": 1,
              "HEAD": 1,
              "MATE": 1,
              "TITLE": 1,
              "STYLE": 1,
              "BR": 1,
              "SVG": 2,
              "IMG": 2,
              "CANVAS": 2,
              "VIDEO": 2
            }
              , s = screen
              , c = s.width
              , u = s.height
              , l = document.documentElement
              , f = l.clientWidth
              , d = l.clientHeight
              , p = Math.round(Math.max(.02 * Math.min(c, u), 12))
              , m = Math.round(.05 * u)
              , g = Math.min(d, u)
              , v = Math.min(f, c)
              , h = g * v
              , y = 3e4
              , w = 3e3
              , b = []
              , S = null
              , _ = !1
              , T = null
              , k = null
              , x = null
              , E = !1
              , O = 0
              , M = {
                "version": "20221221",
                "listeners": [],
                "lazy": function () {
                  S || P()
                },
                "on": function (e) {
                  -1 === this.listeners.indexOf(e) && this.listeners.push(e)
                },
                "un": function (e) {
                  if (e) {
                    var t = this.listeners.indexOf(e);
                    this.listeners.splice(t, 1)
                  }
                },
                "forceStop": function () {
                  B({
                    "type": "force"
                  })
                },
                "_fn": function (e) {
                  var t = void 0;
                  for (var n in this.listeners)
                    (t = this.listeners[n]) && t(e);
                  this.listeners = []
                },
                "getFrames": function () {
                  return b
                },
                "getIgnoreNodes": function () {
                  return T
                },
                "install": function () {
                  P()
                },
                "getXPATH": Y
              }
              , I = !1;
            window._JT_FSP ? (M.listeners = window._JT_FSP.listeners,
              M.forceStop = window._JT_FSP.forceStop,
              _ = !0) : (window._JT_FSP = M,
                I = !0);
            var A = new MutationObserver(function (e) {
              if (_)
                return;
              q(e, function (e) {
                var t = e.target
                  , n = e.addedNodes
                  , r = t.nodeName;
                if (1 !== a[r] && !U(T, function (e) {
                  return e && e.contains && e.contains(t)
                })) {
                  if (b.length > 0 && "HTML" !== r && "BODY" !== r) {
                    var o = t.getBoundingClientRect()
                      , i = o.top
                      , s = o.left
                      , c = o.bottom
                      , u = o.right;
                    if (c < m || i > g - m || u < m || s > v - m)
                      return
                  }
                  q(n, function (e) {
                    try {
                      if (!e.parentElement)
                        return;
                      var t = e;
                      if (function (e) {
                        return 3 === e.nodeType && !/^[\r\n\s]*$/.test(e.wholeText)
                      }(e) && 1 === e.parentElement.childNodes.length && (t = e.parentElement),
                        1 !== t.nodeType && 9 !== t.nodeType)
                        return;
                      if (1 === a[t.nodeName])
                        return;
                      !U(C, function (e) {
                        return e.contains(t)
                      }) && C.push(t)
                    } catch (n) { }
                  })
                }
              }),
                C.length > 0 && null === j && (j = setTimeout(function () {
                  L(C),
                    C = [],
                    j = null
                }, 1e3 / 60))
            }
            )
              , j = null
              , C = [];
            t && (M.findViewRectInFirstScreen = J,
              M.createScreenBox = F,
              M.findMeaningfulDom = W),
              e.exports = M
          } else
            e.exports = {
              "on": n,
              "un": n,
              "forceStop": n,
              "install": n
            };
          function P() {
            if (I && !S && !_) {
              T = [],
                x = function () {
                  var e = null
                    , r = null;
                  if (!t)
                    return n;
                  var o = function a() {
                    _ || (r = requestAnimationFrame(a),
                      e && (e.innerHTML = "" + Date.now()))
                  }
                    , i = function () {
                      if (!r) {
                        e = document.createElement("div");
                        var t = {
                          "position": "fixed",
                          "bottom": "6px",
                          "right": "6px",
                          "color": "#fff",
                          "padding": "0 4px",
                          "backgroundColor": "rgba(0, 0, 0, 0.6)",
                          "zIndex": 99999990,
                          "textAlign": "center",
                          "fontSize": "12px"
                        };
                        for (var n in t)
                          e.style[n] = t[n];
                        document.body.appendChild(e),
                          requestAnimationFrame(o)
                      }
                    };
                  document.body ? i() : window.addEventListener("DOMContentLoaded", i);
                  return function (t) {
                    if (e) {
                      var n = Date.now();
                      if (t) {
                        cancelAnimationFrame(r);
                        var o = Date.now() - performance.now() + t;
                        n = Math.round(o),
                          e.style.color = "#0ff"
                      }
                      e.innerHTML = n + " | " + Math.round(t || performance.now())
                    }
                  }
                }();
              var e = document.firstElementChild;
              if (document.body)
                document.querySelectorAll("BODY > *").length > 0 && (q(document.querySelectorAll("[" + o + "]"), function (e) {
                  T.push(e),
                    E = !0
                }),
                  L(document.querySelectorAll("BODY IMG")));
              x(),
                A.observe(e, {
                  "childList": !0,
                  "subtree": !0
                });
              var r = function () {
                i.forEach(function (t) {
                  return e.addEventListener(t, B, !0)
                })
              };
              "loading" !== document.readyState ? r() : document.addEventListener("DOMContentLoaded", r),
                S = setTimeout(function () {
                  B({
                    "type": "timeout"
                  })
                }, y)
            }
          }
          function N(e, t) {
            if (!_) {
              x(),
                t = t || V();
              var n = e.top
                , r = e.left
                , o = e.bottom
                , i = e.right
                , a = Math.abs(o - n)
                , s = Math.abs(i - r);
              e.lastTime = Math.max(t, e.lastTime),
                e.v = Math.floor(a * s / h * 1e4) / 1e4,
                k && clearTimeout(k),
                k = setTimeout(function () {
                  B({
                    "type": "idle"
                  })
                }, w);
              var c = b.length;
              if (!(c < 4))
                for (var u = 0, l = 0, f = 0, d = {}, m = 0; m < c; m++) {
                  var g = b[m];
                  if (g.g = g.g || m + 1,
                    !(g.bottom - g.top < p || g.right - g.left < p)) {
                    if (u += Math.min(g.v, 1),
                      g.v >= f && (f = g.v,
                        l = m),
                      u > 4) {
                      B({
                        "type": "sum_area",
                        "p": l
                      });
                      break
                    }
                    for (var v = 0; v < m; v++) {
                      var y = b[v];
                      if (!(y.bottom - y.top < p || y.right - y.left < p))
                        if (D(g, y, p)) {
                          var S = g.g = y.g;
                          d[S] = (d[S] || 0) + 1,
                            d[S] >= 3 && B({
                              "type": "tail",
                              "p": S - 1
                            });
                          break
                        }
                    }
                  }
                }
            }
          }
          function L(e) {
            try {
              var t = J(e)
                , n = t.meaningfulList
                , o = t.box
                , i = t.cost;
              if (!o || !o.count)
                return;
              b.push(o),
                O += i,
                r("makeFrames cost:" + i + "ms; frames count: " + b.length, o),
                o.wait = 0,
                o.imgSeq = [],
                q(n, function (e) {
                  var t = e.nodeName;
                  if ("IMG" === t) {
                    o.wait += 1;
                    var n = e.complete ? 1 : 0
                      , i = e.src;
                    e.addEventListener("load", function t() {
                      if (_)
                        e.removeEventListener("load", t, !0);
                      else {
                        if (n > 0) {
                          if (e.src === i)
                            return;
                          r("img change src", i, e.src, V())
                        }
                        ++n > 2 && o.startTime > 1e3 || function t(e, n) {
                          n && n.then && n["catch"] ? n.then(function () {
                            t(e)
                          })["catch"](function () {
                            t(e)
                          }) : window.requestAnimationFrame ? requestAnimationFrame(e) : setTimeout(e, 0)
                        }(function () {
                          var t = e.getBoundingClientRect()
                            , n = t.top
                            , r = t.left
                            , i = t.bottom
                            , a = t.right
                            , s = t.width
                            , c = t.height;
                          s < p || c < p || i < m || n > g - m || a < m || r > v - m || (o.left = Math.min(r, o.left),
                            o.top = Math.min(n, o.top),
                            o.bottom = Math.max(o.bottom, n + c),
                            o.right = Math.max(o.right, r + s),
                            o.imgSeq.push({
                              "node": e,
                              "time": V()
                            }),
                            N(o))
                        }, null)
                      }
                    }, !0)
                  } else
                    "VIDEO" === t && e.poster && o.bgImg.push(e.poster)
                }),
                N(o)
            } catch (a) { }
          }
          function R(e, t, n) {
            var o = function () {
              var e = performance.getEntriesByType && performance.getEntriesByType("navigation")[0] || null;
              if (e)
                return e;
              var t = performance.timing;
              return {
                "loadEventStart": t.loadEventStart - t.navigationStart,
                "domContentLoadedEventStart": t.domContentLoadedEventStart - t.navigationStart
              }
            }().loadEventStart;
            if (!0 !== n && o <= 0)
              !function (e) {
                var t = null
                  , n = 0
                  , r = function o() {
                    t && clearTimeout(t),
                      window.removeEventListener("load", o),
                      0 == n++ && e()
                  };
                t = setTimeout(r, y - V()),
                  window.addEventListener("load", r)
              }(function () {
                return R(e, t, !0)
              });
            else {
              var i = {}
                , a = -1
                , s = -1
                , c = 0
                , u = null;
              q(performance.getEntries(), function (e) {
                var t = e.entryType
                  , n = e.name
                  , r = e.startTime
                  , o = e.duration;
                if ("paint" == t)
                  switch (n) {
                    case "first-contentful-paint":
                      a = r;
                      break;
                    case "first-paint":
                      s = r
                  }
                else
                  /\.css$/i.test(n) ? c = Math.max(r + o, c) : i[$(n)] = r + o
              });
              var l = {}
                , f = 0;
              if (e && e.length > 0 && q(e, function (e) {
                e = $(e),
                  i[e] && (r("check img from resourceTiming: ", e, i[e]),
                    l[e] = i[e],
                    f = Math.max(l[e], f))
              }),
                o > 0) {
                var d = []
                  , m = document.body && document.body.querySelectorAll("*[style]")
                  , g = function (e, t, n) {
                    if ((t = $(t)) && !/^data:/i.test(t)) {
                      var a = i[t];
                      if (!(a > o)) {
                        var s = F(e, n);
                        if (s) {
                          var l = s.width
                            , f = s.height;
                          0 == s.isCutoff && l > p && f > p ? c < a && (c = a,
                            u = e) : r("small size img", e)
                        }
                      }
                    }
                  };
                m && m.length > 0 && q(m, function (e) {
                  var t = /url\(['"]?(.*?)['"]?\)/i.exec(e.style && e.style.backgroundImage || "");
                  t = t && t[1],
                    g(e, t, d)
                }),
                  q(document.images, function (e) {
                    return g(e, e.src, d)
                  })
              }
              t({
                "ssrTime": Math.max(c, a, s),
                "fcp": a,
                "fp": s,
                "ssrLastImg": u,
                "checkResult": l,
                "checkResultMaxValue": f
              })
            }
          }
          function B(e) {
            if (!_) {
              var n = e.type
                , o = e.p
                , a = 0
                , s = V();
              try {
                var c = performance.getEntriesByName("first-contentful-paint")[0];
                if (c && c.startTime && (a = c.startTime),
                  -1 != i.indexOf(n) && (0 === a || V() - a < 200))
                  return void r("no fcp, ignore mousedown", s)
              } catch (y) { }
              S && clearTimeout(S),
                k && clearTimeout(k),
                _ = !0,
                A && (A.disconnect(),
                  A.takeRecords(),
                  A = null);
              var u = null
                , l = [];
              switch (n) {
                case "tail":
                case "sum_area":
                  u = h(b.slice(0, o));
                  break;
                default:
                  var f = h(b)
                    , d = f.length;
                  if (d >= 2) {
                    d--;
                    var m = 0;
                    do {
                      if (!D(f[d], f[d - 1], p))
                        break;
                      m++
                    } while (--d > 0);
                    m > 0 && (0 === d && r("Full Screen Reflash x 2."),
                      f = f.slice(0, d || 1))
                  }
                  u = f
              }
              var g = 0
                , v = null;
              u.length ? q(u, function (e) {
                e.lastTime > g && (g = e.lastTime,
                  v = e)
              }) : g = a,
                R(l, function (e) {
                  try {
                    var o = e.ssrTime
                      , a = e.fcp
                      , s = e.fp
                      , c = e.ssrLastImg
                      , l = e.checkResult
                      , f = e.checkResultMaxValue;
                    f > g && (g = f);
                    var d = Date.now() - performance.now() + g;
                    r("stopHandleBy " + n + ", sfsp: " + g + ", checkImg: " + f + ", ssrTime: " + o + ", fcp: " + a + ", fp: " + s + ", ssrLastImg: ", c, u, l);
                    var p = v || {}
                      , m = p.domSize
                      , h = p.imgSeq
                      , y = "";
                    try {
                      h && h.length > 0 && (y = Y(h[h.length - 1].node))
                    } catch (_) { }
                    var w = {
                      "endType": -1 != i.indexOf(n) ? i[0] : n,
                      "timestamp": d,
                      "cost": g,
                      "domSize": m,
                      "validFrames": u,
                      "ssrTime": o,
                      "ssrLastImg": c,
                      "bgImgRecord": l,
                      "bgImgMaxTime": f,
                      "fcp": a,
                      "fp": s,
                      "haveIgnoreAttr": E,
                      "lastImg": y,
                      "execCost": O,
                      "version": M.version
                    };
                    if (window.dispatchEvent && window.CustomEvent) {
                      var S = new CustomEvent("jstracker.fsp", {
                        "detail": w
                      });
                      window.dispatchEvent(S)
                    }
                    try {
                      M._fn(w)
                    } catch (_) { }
                    x(g),
                      t || (b.length = 0,
                        T && (T.length = 0,
                          T = null))
                  } catch (_) { }
                }, "force" === n)
            }
            function h(e) {
              var t = [];
              if (e.length <= 1) {
                var n = ((t = e.slice(0))[0] || {}).bgImg;
                n && q(n, function (e) {
                  return l.push(e)
                })
              } else
                q(e, function (e) {
                  var n = e.v
                    , r = e.bgImg;
                  n < .02 || (r && q(r, function (e) {
                    return l.push(e)
                  }),
                    t.push(e))
                });
              return t
            }
          }
          function J(e) {
            var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : []
              , n = V()
              , r = {
                "startTime": n,
                "lastTime": n,
                "left": Number.MAX_SAFE_INTEGER,
                "top": Number.MAX_SAFE_INTEGER,
                "right": 0,
                "bottom": 0,
                "count": 0,
                "searchNodes": 0,
                "bgImg": [],
                "domSize": document.all ? document.all.length : document.getElementsByTagName("*").length
              }
              , o = r.meaningfulList = []
              , i = function (e) {
                r.searchNodes++;
                var n = F(e, t);
                return n ? (function (e, t) {
                  if (e) {
                    var n = e.top
                      , i = e.left
                      , a = e.width
                      , s = e.height
                      , c = e.backgroundImage;
                    r.left = Math.min(i, r.left),
                      r.top = Math.min(n, r.top),
                      r.bottom = Math.max(r.bottom, n + s),
                      r.right = Math.max(r.right, i + a),
                      o.push(t),
                      r.count++,
                      c && r.bgImg.push(c)
                  }
                }(n, e),
                  !0) : n
              };
            return q(e, function (e) {
              (a[e.nodeName] || 3) < 2 || 0 !== i(e) && q(W(e, []), i)
            }),
            {
              "meaningfulList": o,
              "cacheObj": t,
              "box": r,
              "cost": V() - n
            }
          }
          function F(e, t) {
            var n = null;
            if (t || (t = []),
              n = z(t, e)) {
              if (n.result)
                return n.result
            } else {
              if (n = H(e),
                t.push(n),
                n.ignore)
                return T.push(e),
                  n.result = 0;
              if (U(T, function (t) {
                return t && t.contains && t.contains(e)
              }))
                return n.result = 0
            }
            var r = n
              , o = r.backgroundImage
              , i = o === undefined ? null : o
              , a = r.pBox
              , s = a.top
              , l = a.left
              , f = a.bottom
              , d = a.right
              , h = a.width
              , y = a.height
              , w = !1
              , b = !0;
            if ("IMG" !== e.nodeName || !0 === e.complete || 0 !== h && 0 !== y) {
              if (h < p || y < p)
                return n.result = !1;
              if (f < m || s > u - m || d < m || l > c - m)
                return n.result = 0
            } else
              b = !1;
            for (var S = e.parentElement, _ = null, k = document.scrollingElement || document.documentElement; S;) {
              if ((_ = z(t, S)) || ((_ = H(S)).ignore && T.push(S),
                t.push(_)),
                _.ignore)
                return n.result = 0;
              var x = _
                , E = x.scrollTop
                , O = x.scrollLeft
                , M = x.scrollHeight
                , I = x.scrollWidth
                , A = x.clientHeight
                , j = x.clientWidth
                , C = x.overflowX
                , P = x.overflowY;
              if (M > A && (S === k || "visible" !== P) || I > j && (S === k || "visible" !== C)) {
                s += E,
                  f += E,
                  l += O,
                  d += O;
                var N = _.box ? _.box : S.getBoundingClientRect();
                if (_.box = _.box || N,
                  s - N.bottom > 4 || l - N.right > 4 || N.top - f > 4 || N.left - d > 4)
                  return n.result = !1
              }
              S = S.parentElement,
                _ = null
            }
            return w = w || s >= g || l >= v,
              n.result = (!b || !(f < m || s > g - m || d < m || l > v - m)) && {
                "top": s,
                "left": l,
                "width": h,
                "height": y,
                "isCutoff": w,
                "backgroundImage": i
              }
          }
          function D(e, t) {
            var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 8
              , r = Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2))
              , o = Math.sqrt(Math.pow(e.bottom - t.bottom, 2) + Math.pow(e.right - t.right, 2));
            return r < 2 * n && o < 2 * n
          }
          function W(e, t) {
            t = t || [];
            var n = e.firstChild;
            if (n) {
              do {
                switch (n.nodeType) {
                  case 1:
                    if (1 === (a[n.nodeName] || 0))
                      break;
                    if ("IMG" === n.nodeName || "VIDEO" === n.nodeName) {
                      t.push(n);
                      break
                    }
                    if (0 === n.childElementCount) {
                      t.push(n);
                      break
                    }
                    W(n, t);
                    break;
                  case 3:
                    /^[\r\n\s]*$/.test(n.wholeText) || t.push(e)
                }
              } while (n = n.nextSibling)
            }
            return t
          }
          function z(e, t) {
            for (var n = e.length - 1; n >= 0; n--) {
              var r = e[n];
              if (r.key === t)
                return r
            }
            return null
          }
          function H(e) {
            var t = {
              "key": e,
              "pBox": e.getBoundingClientRect(),
              "scrollTop": e.scrollTop,
              "scrollLeft": e.scrollLeft,
              "scrollHeight": e.scrollHeight,
              "scrollWidth": e.scrollWidth,
              "clientHeight": e.clientHeight,
              "clientWidth": e.clientWidth,
              "isNew": !0
            };
            if ("BODY" !== e.tagName) {
              if (window.getComputedStyle) {
                var n = window.getComputedStyle(e, null);
                t.display = n.display,
                  t.position = n.position,
                  t.overflow = n.overflow,
                  t.overflowX = n.overflowX,
                  t.overflowY = n.overflowY,
                  t.transform = n.transform;
                var r = /url\(['"]?(.*?)['"]?\)/i
                  , i = n.backgroundImage;
                r.test(i) && (i = i.replace(r, "$1"),
                  /^data:/i.test(i) || (t.backgroundImage = i)),
                  ("fixed" === n.position || b.length > 0 && ("none" === n.display || "0" === n.opacity || "hidden" === n.visibility)) && (t.ignore = !0)
              }
              e.hasAttribute(o) && (t.ignore = !0,
                E = !0)
            }
            return t
          }
          function V() {
            return performance.now()
          }
          function q(e, t) {
            if (t && e)
              for (var n = e.length || 0, r = 0; r < n; r++)
                t(e[r], r)
          }
          function U(e, t) {
            if (t && e) {
              for (var n = e.length || 0, r = 0; r < n; r++)
                if (t(e[r], r))
                  return !0;
              return !1
            }
          }
          function $(e) {
            return e ? e.replace(/^https?:\/\//i, "//") : e
          }
          function Y(e) {
            var t = []
              , n = function (e) {
                return e.className ? e.tagName + '[@class="' + e.className + '"]' : e.tagName
              }
              , r = function (e) {
                for (var r = n(e), o = 1, i = e; i = i.previousElementSibling;)
                  n(i) === r && o++;
                t.push(r + "[" + o + "]")
              }
              , o = e;
            do {
              r(o)
            } while ("BODY" !== o.tagName && (o = o.parentElement));
            return t.push("/"),
              t.reverse().join("/")
          }
        }()
      }
      , function (e, t, n) {
        "use strict";
        var r = "?"
          , o = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
          , i = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
          , a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i
          , s = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
          , c = /\((\S*)(?::(\d+))(?::(\d+))\)/;
        e.exports = function () {
          function e(n, o) {
            for (var i = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, a = [], s = {}, c = !1, u = void 0, l = void 0, f = e.caller; f && !c; f = f.caller)
              if (f !== t) {
                if (l = {
                  "url": null,
                  "func": r,
                  "line": null,
                  "col": null
                },
                  f.name ? l.func = f.name : (u = i.exec(f.toString())) && (l.func = u[1]),
                  "undefined" == typeof l.func)
                  try {
                    l.func = u.input.substring(0, u.input.indexOf("{"))
                  } catch (p) { }
                s["" + f] ? c = !0 : s["" + f] = !0,
                  a.push(l)
              }
            o && a.splice(0, o);
            var d = {
              "name": n.name,
              "message": n.message,
              "stack": a
            };
            return function (e, t, n, o) {
              var i = {
                "url": t,
                "line": n
              };
              if (i.url && i.line) {
                if (e.incomplete = !1,
                  i.func || (i.func = r),
                  e.stack.length > 0 && e.stack[0].url === i.url) {
                  if (e.stack[0].line === i.line)
                    return !1;
                  if (!e.stack[0].line && e.stack[0].func === i.func)
                    return e.stack[0].line = i.line,
                      !1
                }
                return e.stack.unshift(i),
                  e.partial = !0,
                  !0
              }
              e.incomplete = !0
            }(d, n.sourceURL || n.fileName, n.line || n.lineNumber, n.message || n.description),
              d
          }
          function t(t, n) {
            var u = null;
            n = null == n ? 0 : +n;
            try {
              if (u = function (e) {
                if ("undefined" != typeof e.stack && e.stack) {
                  for (var t = 0, n = e.stack.split("\n"), u = [], l = void 0, f = void 0, d = void 0, p = (/^(.*) is undefined$/.exec(e.message),
                    0), m = n.length; p < m; ++p) {
                    if (f = o.exec(n[p])) {
                      var g = f[2] && 0 === f[2].indexOf("native");
                      f[2] && 0 === f[2].indexOf("eval") && (l = c.exec(f[2])) && (f[2] = l[1],
                        f[3] = l[2],
                        f[4] = l[3]),
                        d = {
                          "url": g ? null : f[2],
                          "func": f[1] || r,
                          "args": g ? [f[2]] : [],
                          "line": f[3] ? +f[3] : null,
                          "col": f[4] ? +f[4] : null
                        }
                    } else if (f = i.exec(n[p]))
                      d = {
                        "url": f[2],
                        "func": f[1] || r,
                        "args": [],
                        "line": +f[3],
                        "col": f[4] ? +f[4] : null
                      };
                    else {
                      if (!(f = a.exec(n[p])))
                        continue;
                      f[3] && f[3].indexOf(" > eval") > -1 && (l = s.exec(f[3])) ? (f[3] = l[1],
                        f[4] = l[2],
                        f[5] = null) : 0 !== p || f[5] || "undefined" == typeof e.columnNumber || (u[0].col = e.columnNumber + 1),
                        d = {
                          "url": f[3],
                          "func": f[1] || r,
                          "args": f[2] ? f[2].split(",") : [],
                          "line": f[4] ? +f[4] : null,
                          "col": f[5] ? +f[5] : null
                        }
                    }
                    !d.func && d.line && (d.func = r),
                      (t += (d.url || "").length + (d.func || "").length) < 1024 && u.push(d)
                  }
                  return u.length ? {
                    "name": e.name,
                    "message": e.message,
                    "stack": u,
                    "reverse1": e && e.stack
                  } : null
                }
              }(t))
                return u
            } catch (l) { }
            try {
              if (u = e(t, n + 1))
                return u
            } catch (l) { }
            return {
              "name": t.name,
              "message": t.message
            }
          }
          return t
        }()
      }
      , function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
          : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ;
        function o(e) {
          return !("object" !== (void 0 === e ? "undefined" : r(e)) || null === e || e instanceof Boolean || e instanceof Date || e instanceof Number || e instanceof RegExp || e instanceof String)
        }
        function i(e) {
          try {
            JSON.stringify(e)
          } catch (t) {
            e = "__Circular_Reference_Object__"
          }
          return e
        }
        e.exports = function a(e) {
          return e instanceof Array ? e.map(a).join(",") : o(e) ? JSON.stringify(function t(e, n) {
            var r = {};
            try {
              var i = Object.getOwnPropertyNames(e) || [];
              if (["name", "message", "code", "stack", "filename", "colno", "lineno"].forEach(function (t) {
                e[t] !== undefined && -1 === i.indexOf(t) && i.push(t)
              }),
                !(i && i.length > 0))
                return "__Empty_Object__";
              i.forEach(function (i) {
                var a = n && n(e[i]);
                o(a) ? r[i] = t(a, n) : r[i] = a
              })
            } catch (a) { }
            return r
          }(e, i)) : "" + e
        }
      }
      , function (e, t, n) {
        "use strict";
        n(11)()
      }
      , function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
          : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          , o = n(12)
          , i = n(13)
          , a = n(26)
          , s = n(0)
          , c = n(34)
          , u = n(9)
          , l = n(35)
          , f = n(36);
        s.sample(10) && s.isMobile() && c.install(),
          e.exports = function (e) {
            try {
              if (!window)
                return null;
              if (window.JSTracker2 && (window.JSTracker2.version || window.JSTracker2._config))
                return window.JSTracker2;
              var t = [];
              window.JSTracker2 && window.JSTracker2.length > 0 && (t = window.JSTracker2);
              var n = {};
              window.g_config && window.g_config.jstracker2 && (n = window.g_config.jstracker2),
                e && "object" === (void 0 === e ? "undefined" : r(e)) && (n = s.merge(n, e));
              var c = new i(n);
              window.JSTracker2 = c,
                l.init(c);
              for (var d = 0; d < t.length; d++)
                window.JSTracker2.push(t[d]);
              a.call(window.JSTracker2),
                f.install(c),
                window.addEventListener && window.addEventListener("unhandledrejection", function (e) {
                  e && e.reason && window.JSTracker2.push({
                    "message": "unhandledrejection:" + u(e.reason),
                    "type": "error",
                    "sampling": 1
                  })
                });
              var p = window.onerror;
              return window.onerror = function () {
                try {
                  p && p.apply(window, arguments);
                  var e = o.apply(window, arguments);
                  window.JSTracker2.push(e)
                } catch (t) { }
              }
                ,
                c
            } catch (m) {
              window && window.JSTracker2 && window.JSTracker2._debug && console.log(m)
            }
          }
      }
      , function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
          : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          , o = n(8);
        e.exports = function (e, t, n, i, a) {
          if ("Script error." == e)
            return {
              "msg": e,
              "file": "",
              "line": 0,
              "col": 0,
              "stack": null,
              "sampling": 1
            };
          a = JSON.stringify(o(a));
          var s = e;
          try {
            "object" === (void 0 === e ? "undefined" : r(e)) && e.message && (s = e.message,
              t = e.filename,
              n = e.lineno,
              i = e.colno)
          } catch (c) { }
          return {
            "msg": s,
            "file": t,
            "line": n,
            "col": i,
            "stack": a,
            "type": "error",
            "sampling": 1
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
          : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          , o = n(14)
          , i = n(0)
          , a = n(20)
          , s = n(6)
          , c = n(5);
        function u(e) {
          var t = i.merge(a, {
            "sampling": 100,
            "maxLogCount": 20,
            "noPostAtIOS": !1,
            "v": i.getSDKVersion()
          });
          this._debug = i.debug(),
            this._pushed_num = 0,
            this._config = i.merge(t, e),
            this.version = i.getSDKVersion(),
            this._filters = null,
            this._anaSampling = this._config.anaSampling,
            i.setMode(this._config.mode)
        }
        u.prototype.getConfig = function (e) {
          return this._config[e]
        }
          ,
          u.prototype.config = function (e) {
            e && e.sampling && (this._config.sampling = e.sampling)
          }
          ,
          u.prototype.setMode = function (e) {
            this.setConfig({
              "mode": e
            }),
              i.setMode(e)
          }
          ,
          u.prototype.getMode = i.getMode.bind(i),
          u.prototype.push = o,
          u.prototype.log = function (e, t) {
            e && t && this.push({
              "message": e,
              "type": t
            })
          }
          ,
          u.prototype.set = function (e, t) {
            e && i.set(e, t)
          }
          ,
          u.prototype.trigger = function (e) {
            e && i.trigger(e)
          }
          ,
          u.prototype.performanceMark = function (e, t, n) { }
          ,
          u.prototype.markPerformance = function (e, t) {
            s.mark(e, t)
          }
          ,
          u.prototype.updatePerformanceMark = function (e, t) {
            s.insertOrUpdate(e, t, !0)
          }
          ,
          u.prototype.measurePerformance = function (e, t, n) {
            s.measure(e, t, n)
          }
          ,
          u.prototype.watch = function (e) {
            i.set(i.event.WATCH, !0),
              i.subscribe(i.event.WATCH, e)
          }
          ,
          u.prototype.enableFSP = function (e) {
            return !(!this._enableFSP || "function" != typeof this._enableFSP) && this._enableFSP()
          }
          ,
          u.prototype.setConfig = function (e) {
            this._config && e.constructor === Object && (this._config = i.merge(this._config, e))
          }
          ,
          u.prototype.pureReportCustom = function (e) {
            if (e && e.code && e.message) {
              var t = i.merge({}, e);
              t.type = "manual",
                t.sampling = t.sampling || .01,
                this.push(t)
            } else
              this._debug && (!e && console.error("reportCustom：需要传入参数"),
                !(e instanceof Object) && console.error("reportCustom：传入参数需要为Object"),
                !e.code && console.error("reportCustom：code字段为必填字段"),
                !e.message && console.error("reportCustom：message字段为必填字段"))
          }
          ;
        var l = null;
        u.prototype.pureReportAnalysis = function (e) {
          if (e && e.code) {
            if (null === l && (this._anaSampling = this._config.anaSampling || this._anaSampling || 4,
              l = this._debug || c(this._anaSampling).flag),
              l) {
              var t = i.merge({}, e);
              t.type = "task",
                this.seqLog(t)
            }
          } else
            this._debug && (!e && console.error("reportAnalysis：需要传入参数"),
              !(e instanceof Object) && console.error("reportAnalysis：传入参数需要为Object"),
              !e.code && console.error("reportAnalysis：code字段为必填字段"))
        }
          ,
          u.prototype.pureReportTlog = function (e, t) {
            if (e && e.code)
              if (e.tlogLayer && "phase" !== e.tlogLayer && "stage" !== e.tlogLayer)
                this._debug && console.error("jstracker上报tlog, tlogLayer字段取值只能为phase或stage");
              else if (!e.tlogLayer || "stage" !== e.tlogLayer || e.phaseID) {
                if (!t || "function" == typeof t) {
                  var n = i.merge({}, e);
                  return n.tlogLayer = n.tlogLayer || "phase",
                    i.reportTlog(n, t)
                }
                this._debug && console.error("回调callback类型应为函数！")
              } else
                this._debug && console.error("jstracker上报tlog, tlogLayer为stage的情况下，phaseID字段必填！");
            else
              this._debug && (!e && console.error("jstracker上报tlog需要传入参数"),
                !(e instanceof Object) && console.error("jstracker上报tlog, 传入参数需要为Object"),
                !e.code && console.error("jstracker上报tlog, code字段为必填字段"))
          }
          ,
          u.prototype.reportBussiness = function (e, t, n) {
            if (!e || "object" !== (void 0 === e ? "undefined" : r(e)) || "[object Array]" !== Object.prototype.toString.call(e) || e.length < 1)
              this._debug && console.error("上报业务埋点，必须指明上报模式，mode参数缺失！");
            else
              for (var o = {
                "custom": this.pureReportCustom.bind(this),
                "analysis": this.pureReportAnalysis.bind(this),
                "tlog": this.pureReportTlog.bind(this)
              }, i = 0; i < e.length; i++) {
                var a = e[i];
                o[a] && ("tlog" === a ? o[a](t, n) : o[a](t))
              }
          }
          ,
          u.prototype.reportCustom = function (e, t) {
            try {
              var n = i.merge({}, e)
                , o = ["custom"];
              return n.mode && "object" === r(n.mode) && "[object Array]" === Object.prototype.toString.call(n.mode) && n.mode.length > 0 && (o = n.mode,
                delete n.mode),
                this.reportBussiness(o, n, t)
            } catch (a) {
              console.error(a)
            }
          }
          ,
          u.prototype.reportAnalysis = function (e, t) {
            try {
              var n = i.merge({}, e)
                , o = ["analysis"];
              return n.mode && "object" === r(n.mode) && "[object Array]" === Object.prototype.toString.call(n.mode) && n.mode.length > 0 && (o = n.mode,
                delete n.mode),
                this.reportBussiness(o, n, t)
            } catch (a) {
              console.error(a)
            }
          }
          ,
          u.prototype.closeTlog = function (e) {
            try {
              i.closeTlog(e)
            } catch (t) {
              console.error(t)
            }
          }
          ,
          u.prototype.reportError = function (e) {
            e && e.message ? (e.type = "error",
              e.sampling = e.sampling || this._config.sampling || 1,
              this.push(e)) : this._debug && (!e && console.error("reportError：需要传入参数"),
                !(e instanceof Object) && console.error("reportError：传入参数需要为Object"),
                !e.message && console.error("reportError：message字段为必填字段"))
          }
          ,
          u.prototype.reportPerf = function (e) {
            e && e.message ? (e.type = "perf",
              e.sampling = e.sampling || this._config.p_sampling || .1,
              this.push(e)) : this._debug && (!e && console.error("reportPerf：需要传入参数"),
                !(e instanceof Object) && console.error("reportPerf：传入参数需要为Object"),
                !e.message && console.error("reportPerf：message字段为必填字段"))
          }
          ,
          u.prototype.reportMtop = function (e) {
            e && e.api && e.message && e.hasOwnProperty("success") ? (e.type = "mtop_perf",
              e.sampling = e.sampling || .01,
              this.push(e)) : this._debug && (!e && console.error("reportMtop：需要传入参数"),
                !(e instanceof Object) && console.error("reportMtop：传入参数需要为Object"),
                !e.api && console.error("reportMtop：code字段为必填字段"),
                !e.message && console.error("reportMtop：message字段为必填字段"),
                !e.hasOwnProperty("success") && console.error("reportMtop：success字段为必填字段"))
          }
          ,
          u.prototype.setJsErrorFilters = function (e) {
            "function" == typeof e && (this._filters = [e]),
              e instanceof Array && (this._filters = e)
          }
          ,
          u.prototype.putTlog = function (e, t, n) {
            return i.pushTlog(t || "tlog-only", e, n || "log")
          }
          ,
          u.prototype.reportTLog = function (e, t, n) {
            if (e && e.code && (!e.message || "object" === r(e.message) || "string" == typeof e.message)) {
              var o = {
                "uuid": this._config.uniqId || "",
                "nick": this._config.nick || ""
              }
                , a = {
                  "event": e.code,
                  "level": e.level || "Info",
                  "id": e.stageId || "",
                  "parentId": e.parentId || "",
                  "errorCode": e.errorCode || "",
                  "errorMsg": e.errorMsg || "",
                  "ext": {
                    "pureMessage": e.message || "",
                    "extMessage": o
                  }
                };
              return i.reportWVTLog(a, t, n)
            }
            this._debug && (!e && console.error("jstracker上报tlog需要传入参数"),
              !(e instanceof Object) && console.error("jstracker上报tlog, 传入参数需要为Object"),
              !e.code && console.error("jstracker上报tlog, code字段为必填字段"),
              e.message && "object" !== r(e.message) && "string" != typeof e.message && console.error("Tlog日志方法：message字段类型错误，需要object或string类型"))
          }
          ,
          e.exports = u
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0)
          , o = n(15)
          , i = n(16)
          , a = n(1)
          , s = n(2)
          , c = n(3)
          , u = n(18)
          , l = n(4)
          , f = n(19)
          , d = n(5)
          , p = (n(9),
            l.getPageOverview)
          , m = ["api_perf", "manual"];
        var g = !1;
        window.addEventListener("beforeunload", function () {
          g = !0
        }),
          e.exports = function (e, t) {
            try {
              if (!e || "PRELOAD" === r.getMode())
                return;
              for (var n in e && e.constructor === Object || (e = i(e)),
                e = r.merge(this._config, e, {
                  "network": s(),
                  "deviceModel": c(),
                  "utdid": u(),
                  "logSeq": r.makeRand(),
                  "origin_url": window.location && location.href
                }),
                this._filters && "error" === e.type && (e = o(this._filters, e)),
                e)
                "" !== e[n] && null !== e[n] && e[n] !== undefined || delete e[n];
              var l = e
                , v = l.maxLogCount
                , h = v === undefined ? 20 : v
                , y = l.type
                , w = d(e.sampling)
                , b = w.flag
                , S = w.sampling;
              e.sampling = S;
              var _ = null
                , T = this
                , k = function () {
                  try {
                    if (T._pushed_num < h && ((o = e) && "__PV" === o.msg && "pv" === o.type || T._debug || b)) {
                      T._pushed_num++,
                        "pv" == e.type || e.overview || (e.overview = p()),
                        _ = r.stringify(e),
                        T._debug && window.console && window.console.log(e),
                        r.get(r.event.WATCH) && r.boradcast(r.event.WATCH, e);
                      var n = e.noPostAtIOS && r.isMacOsLike();
                      if (r.supportBeacon() && !n)
                        a.post(_);
                      else if (!t || n) {
                        _.length > 8192 && (e.msg = f(e.msg),
                          e.message = f(e.message),
                          e.stack = f(e.stack),
                          _ = r.stringify(e)),
                          a.push(_)
                      }
                    }
                  } catch (i) { } finally {
                    -1 != m.indexOf(y) && r.pushTlog(y, _ || r.stringify(e))
                  }
                  var o
                };
              g ? k() : setTimeout(k, 10)
            } catch (x) { }
          }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = function (e, t) {
          return function (e, t) {
            if (e && e.length)
              for (var n = 0; n < e.length; n++) {
                var o = e[n];
                if (o && "function" == typeof o) {
                  var i = void 0;
                  try {
                    t.message = t.message ? t.message : t.msg,
                      i = o(t)
                  } catch (a) {
                    r.debug() && console.error(a)
                  }
                  if (i)
                    return i
                }
              }
          }(e, r.merge({}, t)) ? r.merge(t, {
            "type": "manual",
            "code": "bypass-error-validator-check-true"
          }) : t
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(8);
        e.exports = function (e) {
          var t = r(e)
            , n = t && t.stack && t.stack[0] || {};
          return {
            "msg": e.message,
            "file": e.url,
            "line": n.line,
            "col": n.col,
            "stack": JSON.stringify(t)
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        e.exports = function () {
          var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "/jstracker.3?"
            , t = "//gm.mmstat.com";
          return window.JSTracker2 && window.JSTracker2._config.server && (t = window.JSTracker2._config.server),
            t + e
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0)
          , o = !1
          , i = "";
        function a() {
          r.isMatchApp(["", "TB"]) && r.callWindvane("TBDeviceInfo", "getUtdid", {}, function (e) {
            o = !0,
              i = e && e.utdid ? e.utdid : ""
          })
        }
        a(),
          r.onload(function () {
            !o && a()
          }),
          e.exports = function () {
            return i
          }
      }
      , function (e, t, n) {
        "use strict";
        e.exports = function (e) {
          return e ? function (e) {
            var t = /https?:\/\/((([0-9a-zA-Z._#?@-]+\/)+[0-9a-zA-Z._#?@-]*),?)+/g
              , n = e.match(t);
            if (!n || n.length < 2)
              return e;
            var r = n.reduce(function (e, t) {
              return e[t] ? e[t]++ : e[t] = 1,
                e
            }, {})
              , o = []
              , i = "";
            return e = e.replace(t, function (e) {
              if (r[e] > 1) {
                var t = o.indexOf(e);
                return -1 === t && (t = o.length,
                  o.push(e),
                  i += "; $" + t + ": " + e),
                  "$" + t
              }
              return e
            }),
              e += i
          }(e) : e
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0)
          , o = n(21)
          , i = n(22)
          , a = n(23)
          , s = n(24)
          , c = n(25)
          , u = function () {
            for (var e = "j" + (new Date).valueOf().toString(32); e.length < 32;)
              e += Math.random().toString(32).substr(2);
            return e.substr(0, 32)
          }();
        r.set("uniqId", u),
          r.pushTlog("uniqId", u, "property"),
          e.exports = {
            "nick": a,
            "screen": s,
            "ua": navigator.userAgent,
            "orientation": c,
            "ucbid": r.getMetaContentByName("wpk-bid"),
            "grey": i.grey,
            "releaseVersion": i.releaseVersion,
            "releaseAppId": i.releaseAppId,
            "headlessType": o,
            "_version_": r.getSDKVersion(),
            "referrer": r.getReferrer(),
            "rtt": r.get("rtt"),
            "_v_type_": "overwrite",
            "downlink": r.get("downlink"),
            "uniqId": u,
            "timeOrigin": r.get("timeOrigin")
          }
      }
      , function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
          : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ;
        e.exports = "function" == typeof window.callPhantom || "object" === r(window._phantom) ? "phantomjs_phantom-mark" : window.navigator && "object" === r(window.navigator) ? !0 === window.navigator.webdriver || !0 === window.navigator.hasOwnProperty("webdriver") ? "headless-chrome_webdriver" : window.navigator.userAgent && "string" == typeof window.navigator.userAgent ? -1 !== window.navigator.userAgent.indexOf("HeadlessChrome") ? "headless-chrome_ua" : -1 !== window.navigator.userAgent.indexOf("PhantomJS") ? "phantomjs_ua" : "" : "unknown_no-ua" : "unknown_no-navi"
      }
      , function (e, t, n) {
        "use strict";
        var r, o, i, a = n(0);
        function s(e) {
          var t = {
            "grey": "",
            "releaseVersion": "",
            "releaseAppId": ""
          };
          if (!e)
            return t;
          var n = e.split(",");
          if (1 === n.length && n[0] && -1 === n[0].indexOf("="))
            return t.grey = n[0],
              t;
          for (var r = {
            "grey": "grey",
            "version": "releaseVersion",
            "app-id": "releaseAppId"
          }, o = 0, i = n.length; o < i; o++) {
            var a = n[o].split("=");
            a[0] && a[1] && r[a[0]] && (t[r[a[0]]] = a[1])
          }
          return t
        }
        e.exports = (r = a.getMetaContentByName("def-grey"),
          o = s(a.getMetaContentByName("release-info")),
          i = s(r),
          a.merge(o, {
            "grey": i.grey
          }))
      }
      , function (e, t, n) {
        "use strict";
        var r = null;
        try {
          var o = i("dnk") || i("_nk_") || i("_w_tb_nick") || i("lgc");
          o && (r = o)
        } catch (a) { }
        function i(e) {
          var t = document.cookie.match("(?:^|;)\\s*" + e + "=([^;]*)");
          return t && t[1] ? decodeURIComponent(t[1]) : ""
        }
        e.exports = r
      }
      , function (e, t, n) {
        "use strict";
        e.exports = screen.width + "x" + screen.height
      }
      , function (e, t, n) {
        "use strict";
        e.exports = 90 == window.orientation || -90 == window.orientation ? "landscape" : 0 == window.orientation || 180 == window.orientation ? "portrait" : ""
      }
      , function (e, t, n) {
        "use strict";
        var r = n(27)
          , o = n(0)
          , i = n(7)
          , a = n(29)
          , s = n(6)
          , c = n(5)
          , u = n(4)
          , l = n(30)
          , f = n(31)
          , d = n(32)
          , p = n(33);
        if (window.PerformanceObserver)
          try {
            var m = window.PerformanceObserver.supportedEntryTypes
              , g = m === undefined ? [] : m;
            -1 != g.indexOf("layout-shift") && l.install(),
              -1 != g.indexOf("largest-contentful-paint") && f.install(),
              -1 != g.indexOf("first-input") && d.install(),
              -1 != g.indexOf("longtask") && p.install()
          } catch (h) { }
        var v = u.getPageOverview;
        e.exports = function () {
          var e = this
            , t = e._config.p_sampling || 10
            , n = !0
            , u = !0
            , m = null
            , g = o.get("timeOrigin")
            , h = c(t)
            , y = h.flag
            , w = h.sampling;
          e._config.p_sampling && (e._config.p_sampling = w),
            "PRELOAD" === o.getMode() ? (n = !1,
              o.subscribe("_change_mode", function (e) {
                "NORMAL" === e.nextMode && setTimeout(function () {
                  T()
                }, 3e3)
              })) : !1 === e._config.sfsp_enable && (n = !1,
                e._enableFSP = function () {
                  return !!u && (n = !0,
                    clearTimeout(m),
                    _())
                }
                ,
                o.onload(function () {
                  m = setTimeout(function () {
                    T()
                  }, 3e3)
                }));
          var b = null
            , S = !1;
          function _() {
            if (!n)
              return !1;
            i.install(),
              o.set("sfspEnable", !0),
              o.set("sfsp_type", 0);
            var t = function (t) {
              var n = t.timestamp
                , r = t.cost
                , i = t.domSize
                , a = t.ssrTime
                , c = t.endType
                , u = t.haveIgnoreAttr
                , l = t.lastImg;
              "mousedown" == c && o.set("sfsp_type", 2),
                o.set("fsp", r),
                o.set("nodeSize", i),
                e.markPerformance("fsp_ssr", a),
                o.callWindvane("WVPerformance", "onStage", {
                  "stage": {
                    "H5_JST_displayedTime": n
                  }
                });
              var f = e._config
                , d = f.uniqId
                , p = f.collection_url
                , m = f.pid
                , v = {
                  "H5_JST_UNIQID": d
                };
              p && (v.H5_JST_COLLECTION_URL = p),
                m && (v.H5_JST_PID = m),
                o.callWindvane("WVPerformance", "onProperty", {
                  "property": v
                });
              var h = {
                "timestamp": n,
                "timeCost": r,
                "domSize": i,
                "haveIgnoreAttr": u,
                "lastImg": l
              };
              if (o.isPHA() && (e._debug || y)) {
                var w = setTimeout(function () {
                  T(h)
                }, 500);
                pha.performance.report({
                  "navigationStartTimestamp": g,
                  "fspTimestamp": n
                }, function (e) {
                  clearTimeout(w),
                    o.set("pha0", e.startTimestamp - g);
                  try {
                    for (var t in e)
                      "ret" != t && s.mark(t, e[t])
                  } catch (n) { }
                  T(h)
                })
              } else
                T(h)
            };
            return i.on(function (e) {
              if (e.from = e.from || "SDK",
                "INTERACT" !== o.getMode())
                t(e);
              else {
                b = e;
                var n = s.getMarkByName("fsp_canvas");
                (function r(e, n) {
                  if (n && n > 0)
                    return n > e.cost && (o.set("sfsp_type", 3),
                      e.cost = Math.max(n, e.cost),
                      e.timestamp = g + e.cost),
                      void t(e);
                  var i = setTimeout(function () {
                    return t(e)
                  }, 2e4);
                  o.subscribe("_fsp_canvas", function (t) {
                    clearTimeout(i),
                      r(e, t)
                  })
                }
                )(e, n && n.st)
              }
            }),
              !0
          }
          function T(t, n) {
            try {
              if (!e._debug && !y || !u)
                return;
              u = !1;
              var i = l.get()
                , s = f.get()
                , c = d.get()
                , m = p.get();
              i.value && e.markPerformance("cls", i.value),
                s.value && e.markPerformance("lcp", parseInt(s.value)),
                c.value && e.markPerformance("fid", c.value),
                m.value && e.markPerformance("tbt", m.value);
              var h = r.call(e)
                , w = 0;
              if (t) {
                var b = t.timestamp
                  , S = t.timeCost
                  , _ = t.haveIgnoreAttr
                  , T = t.lastImg;
                w = t.domSize;
                var k = a.parseIndex({
                  "navigationStart": g,
                  "loadEventStart": performance.timing.loadEventStart,
                  "jt_sfsp_timestamp": b,
                  "jt_sfsp_cost": S,
                  "jt_log_timestamp": Date.now()
                });
                h.profileIndex = JSON.stringify(k),
                  h.sfspLastImg = T,
                  _ && (h.haveIgnoreAttr = "Y"),
                  h.__cls__ = JSON.stringify(i),
                  h.__lcp__ = JSON.stringify(s),
                  h.__fid__ = JSON.stringify(c),
                  h.__tbt__ = JSON.stringify(m),
                  l.stop(),
                  f.stop(),
                  d.stop(),
                  p.stop(),
                  null !== b && null !== S && (x = b,
                    o.isWindvane() && /AliApp\(ET\//.test(navigator.userAgent) && o.callWindvane("EtaoLog", "print_monitor_pageload", {
                      "url": window.location.href,
                      "firstScreenPaint": x
                    }))
              }
              h.reserve1 = v(w),
                window.JSTracker2.push(h, n),
                o.sample(4) && a.sendResourceTiming(t)
            } catch (E) { }
            var x
          }
          o.unload(function () {
            S || !1 === u || (S = !0,
              n ? "INTERACT" === o.getMode() && b ? T(b, !0) : (o.set("sfsp_type", 1),
                i.forceStop(!0)) : T(!1, !0))
          }),
            _()
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(28)
          , o = n(0)
          , i = n(6);
        e.exports = function () {
          var e = {}
            , t = window;
          if (t.performance) {
            var n = t.performance.timing;
            e.dns = n.domainLookupEnd - n.domainLookupStart,
              e.con = n.connectEnd - n.connectStart,
              e.req = n.responseStart - n.requestStart,
              e.res = n.responseEnd - n.responseStart,
              e.dcl = n.domContentLoadedEventEnd - n.domLoading,
              e.onload = n.loadEventStart - n.domLoading,
              e.ntype = window.performance.navigation.type
          }
          e.msg = "__PV",
            e.type = "pv";
          try {
            var a = r.call(this);
            e.stack = o.stringify(a),
              e.__usertiming__ = JSON.stringify(i.toJSON())
          } catch (s) { }
          return e
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0);
        function o() {
          var e = {};
          if (r.isFunction(performance.getEntriesByType)) {
            var t = performance.getEntriesByType("paint");
            if (t)
              for (var n = 0, o = t.length; n < o; n++) {
                var i = t[n];
                "first-paint" === i.name ? e.firstPaint = i.startTime : "first-contentful-paint" === i.name && (e.fcp = parseInt(i.startTime))
              }
          } else if (window.chrome && window.chrome.loadTimes) {
            var a = 1e3 * window.chrome.loadTimes().firstPaintTime;
            e.firstPaint = a - 1e3 * window.chrome.loadTimes().startLoadTime
          } else if ("number" == typeof window.performance.timing.msFirstPaint) {
            var s = window.performance.timing.msFirstPaint;
            e.firstPaint = s - window.performance.timing.navigationStart
          }
          return e.firstPaint && (e.firstPaint = parseInt(e.firstPaint)),
            e
        }
        function i() {
          try {
            if (r.isFunction(performance.getEntriesByType)) {
              var e = window.performance.getEntriesByType("navigation")[0];
              return {
                "size": parseInt(e.decodedBodySize / 1024),
                "ratio": (e.encodedBodySize / e.decodedBodySize).toFixed(2),
                "speed": (e.encodedBodySize / (e.responseEnd - e.responseStart) / 1024).toFixed(2)
              }
            }
          } catch (t) {
            return {}
          }
        }
        e.exports = function () {
          var e = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance
            , t = {};
          if (e) {
            var n = e.timing;
            if (n) {
              t = r.merge(t, o());
              var a = {
                "load": ["loadEventStart", "navigationStart"],
                "domReady": ["domComplete", "responseEnd"],
                "readyStart": ["fetchStart", "navigationStart"],
                "redirect": ["redirectEnd", "redirectStart"],
                "appcache": ["domainLookupStart", "fetchStart"],
                "unloadEvent": ["unloadEventEnd", "unloadEventStart"],
                "lookupDomain": ["domainLookupEnd", "domainLookupStart"],
                "connect": ["connectEnd", "connectStart"],
                "request": ["responseEnd", "requestStart"],
                "initDomTree": ["domInteractive", "responseEnd"],
                "loadEvent": ["loadEventEnd", "loadEventStart"],
                "domContentLoaded": ["domContentLoadedEventStart", "navigationStart"],
                "ttfb": ["responseStart", "navigationStart"],
                "tti": ["domInteractive", "fetchStart"]
              };
              for (var s in a) {
                var c = n[a[s][0]]
                  , u = n[a[s][1]];
                if (u && c) {
                  var l = c - u;
                  l >= 0 && l < 6e5 && (t[s] = parseInt(l))
                }
              }
              t = r.merge(t, function () {
                var e = {};
                if (window.performance && window.performance.memory)
                  try {
                    var t = parseInt(window.performance.memory.usedJSHeapSize)
                      , n = parseInt(window.performance.memory.totalJSHeapSize);
                    t && (e.jsHeapUsed = (t / 1024 / 1024).toFixed(2),
                      n && (e.jsHeapUsedRate = (t / n).toFixed(4)))
                  } catch (r) { }
                return e
              }()),
                r.get("interactive") && (t.interactive = r.get("interactive")),
                r.get("fsp") && (t.sfsp = r.get("fsp"),
                  t.sfspEndType = r.get("sfsp_type")),
                r.get("pha0") && (t.pha0 = r.get("pha0"))
            }
          }
          return t = r.merge(t, i()),
            window.__IPV6__ && (t.ipv = 6),
            t
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
          return typeof e
        }
          : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }
          ;
        function o(e) {
          if (Array.isArray(e)) {
            for (var t = 0, n = Array(e.length); t < e.length; t++)
              n[t] = e[t];
            return n
          }
          return Array.from(e)
        }
        var i = n(1)
          , a = n(0)
          , s = n(2)
          , c = n(3);
        e.exports = {
          "install": function () { },
          "sendResourceTiming": function (e) {
            if (window.PerformanceResourceTiming && a.isFunction(performance.getEntries))
              try {
                var t = encodeURIComponent(function (e) {
                  for (var t = {}, n = [], o = {}, i = [], a = [], s = e.length, c = null, u = 0; u < s; u++) {
                    c = e[u];
                    var l = []
                      , f = ""
                      , d = null
                      , p = null
                      , m = null;
                    for (var g in c)
                      switch ((f = t[g]) == undefined && (f = t[g] = n.length.toString(16),
                        n.push(g)),
                      void 0 === (d = c[g]) ? "undefined" : r(d)) {
                        case "function":
                          break;
                        case "boolean":
                          l.push(f + ",B," + (d ? 1 : 0));
                          break;
                        case "object":
                          try {
                            l.push(f + ",O," + JSON.stringify(d))
                          } catch (v) {
                            console.log("entries stringify failed.", v, d)
                          }
                          break;
                        case "number":
                          0 != c[g] ? (m = parseInt(d) == d ? d : d.toFixed(2),
                            (p = o[m]) == undefined && (p = o[m] = i.length.toString(16),
                              i.push(m)),
                            l.push(f + "," + p)) : l.push("" + f);
                          break;
                        case "string":
                        default:
                          l.push(f + ",S," + d)
                      }
                    a.push(l.join("\n"))
                  }
                  return n.join("\n") + "\r\r" + i.join("\n") + "\r\r" + a.join("\r")
                }(performance.getEntries()));
                if (t.length > 56e3)
                  return;
                var n = e || {}
                  , o = n.timeCost
                  , u = a.merge({}, window.JSTracker2 ? window.JSTracker2._config : {}, {
                    "network": s(),
                    "deviceModel": c(),
                    "logSeq": a.makeRand(),
                    "origin_url": location && encodeURIComponent(location.href),
                    "sfsp": o
                  });
                u = a.stringify(u),
                  i.post(u + "&entries=" + t + "&name=performance&type=resource-timing&sampling=50&performance=" + encodeURI(JSON.stringify(performance.timing)) + "&msg=compress1")
              } catch (l) { }
          },
          "parseIndex": function (e) {
            var t = null
              , n = {
                "speedCount": [],
                "speedMax": 0,
                "speedAvg": 0,
                "resourceCount": 0,
                "imgCount": 0,
                "slowResourceCount": 0,
                "totalTransferSize": 0,
                "baseResourceTransferSize": 0,
                "baseResourceCount": 0,
                "idleTime": 0,
                "rateParallelUse": 0
              };
            if (!a.isFunction(performance.getEntries))
              return n;
            t = performance.getEntries();
            var r = function (e, t) {
              var n = t.navigationStart
                , r = t.loadEventStart - n
                , o = t.jt_sfsp_timestamp - n
                , i = t.jt_log_timestamp - n
                , a = [[], [], [], []];
              function s(e, t) {
                return !(e < 0) && (1 === t ? e < r : 2 === t ? e < o : e < i)
              }
              return e.forEach(function (e) {
                if (-1 !== ["resource", "navigation"].indexOf(e.entryType)) {
                  a[0].push(e),
                    e.speed = e.duration ? (e.transferSize || 0) / e.duration * 1e3 / 1024 : 0;
                  for (var t = 1; t <= 3; t++)
                    if (s(e.fetchStart, t)) {
                      for (var n = t; n <= 3; n++)
                        a[n].push(e);
                      break
                    }
                }
              }),
              {
                "isStage": s,
                "allResource": function () {
                  return a[0]
                },
                "stage1": function () {
                  return a[1]
                },
                "stage2": function () {
                  return a[2]
                },
                "stage3": function () {
                  return a[3]
                }
              }
            }(t, e);
            r.stage1().map(function (e) {
              e.transferSize && (n.baseResourceTransferSize += e.transferSize / 1024)
            }),
              n.baseResourceCount = r.stage1().length;
            var i = 0
              , s = []
              , c = 0
              , u = r.stage2().map(function (e) {
                switch (n.resourceCount++,
                e.initiatorType) {
                  case "css":
                    if (!/\.webp$/.test(e.name))
                      break;
                  case "img":
                    n.imgCount++
                }
                return e.speed && (n.speedCount.push(e.speed),
                  i += e.speed),
                  e.duration > 0 && (c += e.duration,
                    s.push(e.duration)),
                  n.speedMax = Math.max(e.speed, n.speedMax),
                  n.totalTransferSize += (e.transferSize || 0) / 1024,
                  [e.fetchStart, e.responseEnd]
              });
            n.speedAvg = i / n.speedCount.length,
              n.durationAvg = c / s.length;
            var l = 0
              , f = s.length;
            s.forEach(function (e) {
              l += Math.pow(e - n.durationAvg, 2) * (1 / f)
            }),
              l = Math.sqrt(l),
              n.std = l,
              n.slowResource = s.filter(function (e) {
                return e > n.durationAvg + 2 * l
              }),
              n.slowResourceCount = n.slowResource.length;
            var d = [].concat.apply([], u).sort(function (e, t) {
              return e - t
            }).filter(function (e, t, n) {
              return t > 0 || e !== n[t - 1]
            }).reduce(function (e, t, n, r) {
              return 0 === n ? e : (e.push([r[n - 1], t, 0]),
                e)
            }, []);
            return u.reduce(function (e, t) {
              if (d.forEach(function (e) {
                t[0] <= e[0] && e[1] <= t[1] && e[2]++
              }),
                0 === e.length)
                return e.push([].concat(o(t))),
                  e;
              var r = e[e.length - 1];
              return t[0] <= r[1] ? r[1] = Math.max(r[1], t[0]) : (e.push([].concat(o(t))),
                n.idleTime += t[0] - r[1]),
                e
            }, []),
              n.rateParallelUse = d.filter(function (e) {
                return e[2] >= 3
              }).reduce(function (e, t) {
                return e + (t[1] - t[0])
              }, 0) / e.jt_sfsp_cost * 100,
              delete n.speedCount,
              delete n.slowResource,
              delete n.std,
              n
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0)
          , o = 0
          , i = []
          , a = {
            "value": 0,
            "total": 0
          }
          , s = null;
        e.exports = {
          "install": function () {
            if (window.PerformanceObserver) {
              s = new PerformanceObserver(function (e) {
                try {
                  var t = !0
                    , n = !1
                    , s = undefined;
                  try {
                    for (var c, u = e.getEntries()[Symbol.iterator](); !(t = (c = u.next()).done); t = !0) {
                      var l = c.value;
                      if (!l.hadRecentInput) {
                        a.total += l.value;
                        var f = i[0]
                          , d = i[i.length - 1];
                        o && l.startTime - d.startTime < 1e3 && l.startTime - f.startTime < 5e3 ? (o += l.value,
                          i.push(l)) : (o = l.value,
                            i = [l]),
                          a.value || (a.value = o),
                          o > a.value && function () {
                            a.value = o;
                            var e = {
                              "sources": [],
                              "value": l.value,
                              "startTime": l.startTime,
                              "entryType": "layout-shift",
                              "hadRecentInput": !1
                            };
                            l.sources && l.sources.forEach(function (t) {
                              var n = {
                                "currentRect": t.currentRect,
                                "previousRect": t.previousRect
                              };
                              n.nodePath = r.getElementPath(t.node),
                                e.sources.push(n)
                            }),
                              a.entries = e
                          }()
                      }
                    }
                  } catch (p) {
                    n = !0,
                      s = p
                  } finally {
                    try {
                      !t && u["return"] && u["return"]()
                    } finally {
                      if (n)
                        throw s
                    }
                  }
                } catch (m) { }
              }
              );
              try {
                s.observe({
                  "type": "layout-shift",
                  "buffered": !0
                })
              } catch (e) { }
            }
          },
          "get": function () {
            return a
          },
          "stop": function () {
            s && s.disconnect()
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = {
          "value": 0,
          "entries": [],
          "entry": null
        }
          , o = null;
        e.exports = {
          "install": function () {
            window.PerformanceObserver && (o = new PerformanceObserver(function (e) {
              var t = e.getEntries()
                , n = t[t.length - 1];
              r.value = n.renderTime || n.loadTime;
              var o = n.toJSON();
              r.entry = {
                "duration": o.duration,
                "size": o.size,
                "startTime": o.startTime,
                "renderTime": o.renderTime,
                "loadTime": o.loadTime,
                "url": o.url || ""
              }
            }
            )).observe({
              "type": "largest-contentful-paint",
              "buffered": !0
            })
          },
          "get": function () {
            return r
          },
          "stop": function () {
            o && o.disconnect()
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = {}
          , o = null;
        e.exports = {
          "install": function () {
            function e(e) {
              var t = e.processingStart - e.startTime;
              r.value = t
            }
            window.PerformanceObserver && (o = new PerformanceObserver(function (t) {
              t.getEntries().forEach(e)
            }
            )).observe({
              "type": "first-input",
              "buffered": !0
            })
          },
          "get": function () {
            return r
          },
          "stop": function () {
            o && o.disconnect()
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = {
          "value": 0
        }
          , o = null;
        e.exports = {
          "install": function () {
            window.PerformanceLongTaskTiming && window.PerformanceObserver && (o = new window.PerformanceObserver(function (e) {
              for (var t = e.getEntries(), n = 0; n < t.length; n++) {
                var o = t[n];
                o.duration > 50 && (r.value += o.duration - 50)
              }
            }
            )).observe({
              "entryTypes": ["longtask"],
              "buffered": !0
            })
          },
          "get": function () {
            return r
          },
          "stop": function () {
            o && o.disconnect()
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(1)
          , o = n(0)
          , i = n(2)
          , a = !1;
        e.exports = {
          "install": function () {
            if (o.isUC())
              try {
                window.ucweb.window.addEventListener("BacktracePaintReady", function () {
                  try {
                    if (a)
                      return;
                    a = !0;
                    var e = window.ucweb.window.performance
                      , t = {
                        "msg": "__UC"
                      };
                    if (e && e.t2 > 0) {
                      t.t0 = e.t0,
                        t.t1 = e.t1,
                        t.t2 = e.t2;
                      var n = "";
                      n += "t2=" + e.t2,
                        t.stack = n;
                      var s = o.stringify(t)
                        , c = o.merge({}, window.JSTracker2 ? window.JSTracker2._config : {}, {
                          "network": i(),
                          "logSeq": o.makeRand(),
                          "origin_url": location && encodeURIComponent(location.href)
                        });
                      delete c.sampling,
                        delete c.p_sampling,
                        c = o.stringify(c),
                        r.post(c + "&" + s + "&name=performance&type=uc-perf&sampling=10")
                    }
                  } catch (u) { }
                }, !1)
              } catch (e) { }
          }
        }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(1)
          , o = n(0)
          , i = n(4)
          , a = n(2)
          , s = n(3)
          , c = 5e3
          , u = 30
          , l = 56e3
          , f = "/jstracker.business.datax"
          , d = []
          , p = null
          , m = null;
        var g = null;
        function v() {
          if (null,
            0 != d.length) {
            var e, t = window.location && location.href, n = function (e) {
              if (!m)
                return null;
              if (g)
                return g;
              var t = m
                , n = t.uniqId
                , r = t.timeOrigin
                , i = t._version_
                , c = t.collection_url
                , u = {}
                , l = {
                  "uniqId": n,
                  "timeOrigin": r,
                  "_version_": i,
                  "origin_url": e,
                  "pid": t.pid
                };
              for (var f in c && (l.collection_url = c),
                m.network = a(),
                m.deviceModel = s(),
                m)
                f in l || -1 !== ["", null, undefined].indexOf(m[f]) || (u[f] = m[f]);
              return l.env = o.stringify(u),
                o.stringify(l)
            }(t), h = i.uiContourMap();
            if (n) {
              for (var y = [], w = 0; d.length > 0 && y.length <= u;) {
                var b = d[0];
                b.batchNum = y.length + 1,
                  b.origin_url === t && delete b.origin_url,
                  b.pid === m.pid && delete b.pid;
                var S = o.stringify(b);
                if (w + S.length > l)
                  break;
                w += S.length,
                  d.shift(),
                  y.push(S)
              }
              var _ = [n, "cmap=" + h + "&batchSize=" + y.length, "body=" + encodeURIComponent(y.join(";"))].join("&");
              e = _,
                r.post(e, f)
            }
            p = d.length > 0 ? setTimeout(v, c) : null
          } else
            p = null
        }
        o.unload(function () {
          v()
        }),
          o.isWindvane() && document.addEventListener("WV.Event.APP.Background", v),
          e.exports = {
            "init": function (e) {
              e.seqLog || (e.seqLog = function (t) {
                null !== p && (clearTimeout(p),
                  p = null),
                  p = setTimeout(v, c),
                  m = e._config,
                  "string" == typeof t && (t = {
                    "msg": t
                  }),
                  t.logSeq = o.makeRand(),
                  t.pid = m.pid,
                  t.origin_url = window.location && location.href,
                  d.push(t),
                  d.length > u && v()
              }
              )
            }
          }
      }
      , function (e, t, n) {
        "use strict";
        var r = n(0);
        e.exports = {
          "install": function (e) {
            var t = e.getConfig("whiteScreen") || {}
              , n = t.startTime || 1e4
              , o = t.rootElementId
              , i = t.enable === undefined || !!t.enable
              , a = t.sampling || 1
              , s = !1 !== t.checkWhenUnload
              , c = t.uploadInnerHtml;
            if (i) {
              var u = r.now()
                , l = !1
                , f = function (t) {
                  if (document && document.getElementById && !(t && "complete" !== document.readyState || l)) {
                    l = !0;
                    var n = o ? document.getElementById(o) : document.body || {};
                    if (n) {
                      var i = function (e) {
                        try {
                          return !!e.innerText
                        } catch (t) { }
                      }(n)
                        , s = function () {
                          if (window.performance && r.isFunction(performance.getEntriesByType)) {
                            var e = performance.getEntriesByName("first-contentful-paint");
                            return 0 !== e.length
                          }
                        }()
                        , u = function (e) {
                          try {
                            var t = e.getElementsByTagName && e.getElementsByTagName("img") || []
                              , n = !1
                              , r = void 0
                              , o = t.length;
                            for (r = 0; r < o; r++) {
                              var i = t[r];
                              if (i.naturalHeight && i.height) {
                                n = !0;
                                break
                              }
                            }
                            return n
                          } catch (a) { }
                        }(n);
                      if (!i) {
                        var f = {
                          "code": "jstracker_white_screen",
                          "message": "textRendered: " + i,
                          "sampling": a,
                          "d1": "fcp: " + s,
                          "d2": "img: " + u,
                          "c1": !!t,
                          "checkTime": r.now()
                        };
                        if (c) {
                          var d = document && document.body && document.body.innerHTML;
                          d && d.substring && (d = d.substring(0, 2e4)),
                            f.html = d
                        }
                        e.pureReportCustom(f)
                      }
                    } else
                      e.pureReportCustom({
                        "code": "jstracker_white_screen",
                        "message": "没有查找到id为：" + o + " 的节点！",
                        "sampling": a,
                        "d1": "fcp: not-exec",
                        "d2": "img: not-exec"
                      })
                  }
                }
                , d = setTimeout(f, u < n ? n - u : 0);
              s && r.unload(function () {
                clearTimeout(d),
                  f(!0)
              })
            }
          }
        }
      }
    ]);