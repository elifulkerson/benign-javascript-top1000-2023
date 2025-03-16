(function() {
    if (window.Sentry) {

        Sentry.init({
            beforeSend: function (event, hint) {
                var error = hint.originalException;
                if (error && error.message && error.message.match(/Loading(.*)chunk(.*)failed/i)) {
                    return null;
                }
                return event;
            },
            dsn: 'https://60949528bc654d549521f305954d4c19@api-sentry.huya.com/42',
            release: '5_2_1', // 版本号
            environment: 'production',
            ignoreErrors: [
                'Non-Error exception captured',
                'Non-Error promise rejection captured'
            ]
        }); 
        function getCookieVal(cookieName) {
            var arrstr = document.cookie.split("; ");
            for (var i = 0; i < arrstr.length; i = i + 1) {
                var kv = arrstr[i].split("=");
                if (kv[0] == cookieName) return decodeURIComponent(kv[1]);
            }
            return "";
        }
        var yyuid = getCookieVal('udb_uid');
        yyuid && Sentry.configureScope(function(scope) {
            scope.setTag("yyuid", yyuid);
        });

        if(window.addEventListener) {
            window.addEventListener('error', function(err) {
                // 过滤非资源加载的错误
                var ERR_TYPE = {
                    "SCRIPT": 2,
                    "LINK": 3 ,
                };
                if (err.target !== window) {
                    //过滤window的异常,避免与onerror重复
                    var errNode = err.target.nodeName;
                    if (errNode && ERR_TYPE[errNode.toUpperCase()]) {
                        var uri = err.target.src || err.target.href;
                        window.console && window.console.log('资源缺失:'+ uri);
                    }
                }
            }, true);
        }
    }
})();