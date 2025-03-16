!function (n, t, c, e, u) {
      function r (n) { try { f = n(u) } catch (n) { return h = n, void i(p, n) } i(s, f) } function i (n, t) {
        for (var c = 0; c < n.length; c++)d(n[c], t);
      } function o (n, t) { return n && (f ? d(n, f) : s.push(n)), t && (h ? d(t, h) : p.push(t)), l } function a (n) { return o(!1, n) } function d (t, c) {
        n.setTimeout(function () { t(c) }, 0)
      } var f, h, s = [], p = [], l = { then: o, catch: a, _setup: r }; n[e] = l; var v = t.createElement("script");
      v.src = c, v.async = !0, v.id = "_uasdk", v.rel = e, t.head.appendChild(v)
    }(window, document, 'https://web-sdk.urbanairship.com/notify/v1/ua-sdk.min.js',
      'UA',
      {
        appKey: 'vfB_rNe6QmqG3FM6u3fQ_w',
        token: 'MTp2ZkJfck5lNlFtcUczRk02dTNmUV93OjF4amNnZWVGZFpKeHd3R1hSSzF6N2xaZkw5clQ1ME4tQWpHUFpDRGU2Ujg',

        // Safari Web Push only
        websitePushId: 'web.com.cnet.safari',

        // Open Web Push Protocol only.
        vapidPublicKey: 'BLjW5aAAExzAsGPWMgbTHPM+L7ShRKV5kbcp7aCqB0VCql/4QhAKiEHVZaTMX1wDmp5OdFcnFVAJrR5rK1x173g=',

        // This  has a default of '/push-worker.js'. It should live at the root of
        // your domain. It only needs to be specified if your worker lives at a
        // different path. (NOTE: It doesn't actually work at the root level)

        // This path should be built by buildHook
        workerUrl: '/bundles/cnetjs/js/libs/ua-push-worker.js',
      })