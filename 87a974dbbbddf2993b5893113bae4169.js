(function (window, rapidConfig, handleFailSafe, options) {
    handleFailSafe(rapidConfig, window.document);
    var pageIsIframed = window.location !== window.parent.location;
    if (options.disableIframePv && pageIsIframed) {
        rapidConfig.pageview_on_init = false;
    }
    window.rapidConfig = rapidConfig;
})(
        window,
        {"client_only":1,"compr_type":"deflate","dwell_on":true,"keys":{"navtype":"server","st_sec":"us.aolportal","ver":"td-app-aol","pl2":"amp-bon","pt":"home","p_sec":"AOL","p_subsec":"homepage","layout":"y20stream","pct":"aolfrontpage","site":"aolfrontpage","mrkt":"us","lang":"en-US","colo":"us-west-2","_yrid":"13s2p9piipfqt","_rid":"13s2p9piipfqt","abk":""},"nol":true,"pageview_on_init":true,"perf_navigationtime":2,"test_id":"aol-aa-2","track_right_click":true,"tracked_mods_viewability":[],"viewability":true,"webworker_file":"/lib/metro/g/myy/rapidworker_1_2_0.0.2.js","spaceid":1197803361},
        function() {},
        {}
    );