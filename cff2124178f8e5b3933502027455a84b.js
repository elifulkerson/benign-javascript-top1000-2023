(function prepareExternalScripts(l, d, u, o, a, r, c) {
  l.__loadGTM = function () {
    var e = d.getElementsByTagName(u)[0],
        t = (l[o] = l[o] || [], l[o].push({
      "gtm.start": new Date().getTime(),
      event: "gtm.js"
    }), d.createElement(u)),
        n = "dataLayer" != o ? "&l=" + o : "";
    t.async = !0, t.src = "https://www.googletagmanager.com/gtm.js?id=" + a + n, e.parentNode.insertBefore(t, e);
  }, l.__loadXtremePushLibrary = function (e) {
    try {
      var t = d.getElementsByTagName(u)[0],
          n = (l.XtremePushObject = r, l[r] = function () {
        (l[r].q = l[r].q || []).push(arguments);
      }, d.createElement(u));
      n.src = "https://livescore.webpu.sh/" + c + "/sdk.js", n.async = !0, n.onload = e, t.parentNode.insertBefore(n, t);
    } catch (e) {
      console.log("Could not run the XtremePushObject script: ", e);
    }
  }, l.__loadPrebid = function (t) {
    var n = !1;

    try {
      l.PWT = {}, setTimeout(function () {
        !n && t && t(), n = !0;
      }, 500), l.PWT.jsLoaded = function () {
        !n && t && t(), n = !0;
      };
      var e,
          o = 1024 < l.innerWidth,
          a = d.getElementsByTagName(u)[0],
          r = d.createElement(u),
          c = window.location.href,
          s = "//ads.pubmatic.com/AdServer/js/pwt/163386/" + (o ? "10601" : "10671"),
          i = "";
      0 < c.indexOf("pwtv=") && 2 <= (e = /pwtv=(.*?)(&|$)/g.exec(c)).length && 0 < e[1].length && (i = "/" + e[1]), r.async = !0, r.type = "text/javascript", r.src = s + i + "/pwt.js", r.onerror = function () {
        console.log("Could not load the Pubmatic script"), !n && t && t(), n = !0;
      }, a.parentNode.insertBefore(r, a);
    } catch (e) {
      console.log("Could not run the Pubmatic script: ", e), !n && t && t(), n = !0;
    }
  }, l.__loadGPT = function (e) {
    try {
      var t = d.getElementsByTagName(u)[0],
          n = d.createElement(u);
      n.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js", n.async = !0, n.onload = function () {
        l.ls.common.isGptScriptLoaded = !0, document.dispatchEvent(new CustomEvent(e));
      }, t.parentNode.insertBefore(n, t);
    } catch (e) {
      console.log("Could not run the GPT script: ", e);
    }
  }, l.__loadAdsScripts = function (e, t) {
    function n() {
      l.__loadGPT(e);
    }

    t ? l.__loadPrebid(n) : n();
  };
})(window, document, 'script', 'dataLayer', 'GTM-MGW6C35', 'xtremepush', 'asRjAtD0D_B1IoCPpIUrMJ0YCmb75d_E');