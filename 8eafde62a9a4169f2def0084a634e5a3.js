var _hmt = _hmt || [];
    _hmt.push(['_requirePlugin', 'UrlChangeTracker', {
        shouldTrackUrlChange: function (newPath, oldPath) {
            return newPath && oldPath;
        }}
    ]);
    (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a411c4d1664dd70048ee98afe7b28f0b";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();