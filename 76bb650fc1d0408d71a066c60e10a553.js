var bj_config = {
            cache_error_list: [],
            didMountEndTime: -1,
            firstScreenEndtime: -1,
            config : {
                namespace: 'custom',
                appname:  'indexPC',
                level: 4,
                bid:  "083948917c3348d0af70c365798e78f3",
                router: "/pc/www.ifeng.com",
                perf_filter_list:  ["/inice","/fa.min.js"],
                perf_timeout: 0,
                pref_count: 1
            }
        };
        var BJ_REPORT = {
                report: function(msg, isReportNow, type) {
                    bj_config.cache_error_list.push(["report", arguments]);
                },
                push: function(err) {
                    bj_config.cache_error_list.push(["push", arguments]);
                },
                firstScreen: function(err) {
                    bj_config.didMountEndTime = (new Date()-0);
                    setTimeout(function(){
                        bj_config.firstScreenEndtime = (new Date()-0);
                    })
                }
            };
            window.onerror = function() {
                bj_config.cache_error_list.push(["handleError", arguments]);
            };
    
         (function(global){var _onthrow=function(errObj){if(global.BJ_REPORT&&global.BJ_REPORT&&global.BJ_REPORT.push){global.BJ_REPORT.push(errObj)}};var tryJs={};global.tryJs=function(throwCb){throwCb&&(_onthrow=throwCb);return tryJs};var timeoutkey;var cat=function(foo,args){return function(){try{return foo.apply(this,args||arguments)}catch(error){try{error.message=error.message+foo.toString()}catch(err){}_onthrow(error);if(error.stack&&console&&console.error){console.error("[BJ-REPORT]",error.stack)}if(!timeoutkey){var orgOnerror=global.onerror;global.onerror=function(){};timeoutkey=setTimeout(function(){global.onerror=orgOnerror;timeoutkey=null},50)}throw error}}};var catTimeout=function(foo){return function(cb,timeout){if(typeof cb==="string"){try{cb=new Function(cb)}catch(err){throw err}}var args=[].slice.call(arguments,2);cb=cat(cb,args.length&&args);return foo(cb,timeout)}};tryJs.spySystem=function(){global.setTimeout=catTimeout(global.setTimeout);global.setInterval=catTimeout(global.setInterval);return tryJs};tryJs.spyAll=function(){tryJs.spySystem();return tryJs}})(window);if(window&&window.tryJs){window.tryJs().spyAll()};