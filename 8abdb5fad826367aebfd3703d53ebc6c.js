! function(a, n, e) {
    function t(a) {
        var n;
        return a(function(a) { n = n ? n(a) : a }),
            function(a) { n = n ? a(n) : a } }

    function o(a, n, e) {
        var t = document.getElementById("j-ald-" + a);
        return t ? n(t) : (e = e || 0, setTimeout(function() { o(a, n, e + 1) }, Math.pow(2, Math.min(e, 12))), void 0) }

    function r(a, t) {
        for (var o = e, r = a.data.callback || "ald_data_" + a.data.param.appId, i = r; i.indexOf(".") > 0;) {
            var d = i.substring(0, i.indexOf("."));
            o = o[d] || (o[d] = {}), i = i.substring(i.indexOf(".") + 1) }
        o[i] = t;
        var c = ["callback=" + r, "t=" + +new Date];
        n.each(a.data.param, function(a, n) { c.push(n + "=" + encodeURIComponent(a)) }), document.referrer && c.push("refer=" + encodeURIComponent(document.referrer)), n.getScript((a.data.url || "//ald.taobao.com/recommend.htm?") + c.join("&"), { error: o[i] }) }
    if (a.enable !== !1) {
        var i = a.panel.name;
        document.write('<div id="j-ald-' + i + '"></div>'), a.data.preload = t(function(e) {! function(n) { a.data.paramAsync ? a.data.paramAsync(n) : n() }(function(t) { n.mix(a.data.param, t), (a.data.load || r)(a, function(a) { e && e(a || {}) }) }) });
        var d = setTimeout(function() {
            var n = 16;
            Math.floor(Math.random() * n) > 0 || ((new Image).src = "//gm.mmstat.com/ued.1.1.2?type=9&type=9&id=jstracker&v=0.01&islogin=0&file=&msg=" + encodeURIComponent("[u//ald.taobao.com/track/error/][c" + a.view.name + "][r" + n + "]App init timeout") + "&line=" + n + "&t=" + +new Date) }, 4096);
        n.use("mui/ald/view/" + a.view.name, function(n, e) { o(i, function(n) { a.panel.node = n, e.render(a), clearTimeout(d) }) }) } }(window.tmall_ald_cfg, KISSY, window);