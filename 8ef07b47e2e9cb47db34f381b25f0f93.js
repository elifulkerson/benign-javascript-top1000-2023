var rakeLog = (function(rakeLog){
        var empty = function() {};

        rakeLog.refresh = empty;
        rakeLog.pageView = empty;
        rakeLog.sendRakeLog = empty;
        rakeLog.setEnableLog = empty;
        rakeLog.scrollHandler = empty;
        rakeLog.getShuttle = function() {
            if (LogClientSentinelShuttle) {
                return new LogClientSentinelShuttle();
            }
            return {};
        };

        return rakeLog;
    }(window.rakeLog || {}));

    var rakeLogPageInfo = {"PageInfo":{"page_id":"/main/home"},"DataMerge":false,"AppSessionId":"","AppSessionIdXsite":"","DeviceId":"","_$RAKE_ENV":"LIVE","_$RAKE_TOKEN":"871e1b1427359b4f70af57f1b03b1b89becc23d8","_$RAKE_TOKEN_NPI":"19df1ef211ac21741c82322a9ffe739b4f5a1519","Switch":{"ImpMW":true,"ImpPC":true,"LogDisable":false,"LogDisablePageshow":false}};
    var RakeLoadScript = function() {
        if (true) {
            var path = '//c.011st.com/js/rake/rakeLog-pc-1.1.0.js';
            var heads = document.getElementsByTagName('head');

            if (heads.length > 0) {
                var script = document.createElement('script');
                script.src = path;
                script.charset = 'euc-kr';
                heads[0].appendChild(script);
            }
        }
    };