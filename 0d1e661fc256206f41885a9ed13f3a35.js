/**
     * -------------------------
     * HEAD.JS SCRIPT
     * -------------------------
     */
    var strES6Tester = 'class ಠ_ಠ extends Array {constructor(j = "a", ...c) {const q = (({u: e}) => {return { [`s${c}`]: Symbol(j) };})({});super(j, q, ...c);}}' +
        'new Promise((f) => {const a = function* (){return "\\u{20BB7}".match(/./u)[0].length === 2 || true;};for (let vre of a()) {' +
        'const [uw, as, he, re] = [new Set(), new WeakSet(), new Map(), new WeakMap()];break;}f(new Proxy({}, {get: (han, h) => h in han ? han[h] ' +
        ': "42".repeat(0o10)}));}).then(bi => new ಠ_ಠ(bi.rd));';
    page_params.global.isES6Supported = true;

    try {
        eval(strES6Tester);
    } catch(e) {
        page_params.global.isES6Supported = false;
    }

    jsFileList.core_Js = [
        page_params.jqueryVersion
    ];
    
    jsFileList.site_Js = [];
    ;
    
    jsFileList.page_Js = [
                                "https://di.rdtcdn.com/www-static/cdn_files/redtube/js/generated/pc/default-redtube.js?v=61faf6fac9c8ca4be984b5b105d43708c78c76aa",
                                "https://di.rdtcdn.com/www-static/cdn_files/redtube/js/generated/pc/default-redtube_logged_out.js?v=61faf6fac9c8ca4be984b5b105d43708c78c76aa",
                                "https://di.rdtcdn.com/www-static/cdn_files/redtube/js/generated/pc/video-index.js?v=61faf6fac9c8ca4be984b5b105d43708c78c76aa",
                            ];

    if(!page_params.global.isES6Supported) {
        var jsStringIndex;
        jsFileList.page_Js.forEach(function (jsFilePath, index) {
            jsStringIndex = jsFilePath.indexOf("generated/");
            jsFileList.page_Js[index] = jsFilePath.slice(0, jsStringIndex) + "es5/" + jsFilePath.slice(jsStringIndex);
        });
    }

    var Load_scripts=function(){"use strict";var e=this;e.init=function(t){e.params=t;e.params.finalFileList=[];e.myFileList()},e.myFileList=function(){var t=e.getKeys(e.params.jsFileList),n=0,r=t.length;for(;n<r;n++){e.getFileList(e.params.jsFileList[t[n]])}e.params.head.ready(function(){e.runHeadJs()})},e.getFileList=function(t){var n=0,r=t.length;for(;n<r;n++){e.params.finalFileList.push(t[n])}},e.runHeadJs=function(){var t=0,n=e.params.finalFileList.length;if(page_params.loadOnce){e.params.head.load(e.params.finalFileList);}else{for(;t<n;t++){e.params.head.load(e.params.finalFileList[t]);}}},e.getKeys=function(e){var t=[],n;for(n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t}},myHead_JS=new Load_scripts;

    var isHeadJsActive = 0;
    var runMyHeadJs = function (jsFileList, head) {
        if (isHeadJsActive == 0) {
            myHead_JS.init({
                jsFileList: jsFileList, //json object with file list
                head: head //head.js plugin object
            });
            isHeadJsActive = 1;
        }
    };
    
    var forceHeadJs = function (jsFileList, head) {
        setTimeout(function () {
            runMyHeadJs(jsFileList, head);
        }, 3000)
    };
    
    forceHeadJs(jsFileList, head, isHeadJsActive);

    if (page_params.isOldIE === true ||
        typeof window.performance === 'undefined' ||
        page_params.global.platform == 'tablet' ||
        /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)) {
                runMyHeadJs(jsFileList, head);

    } else {
        var mgPerformanceCallbacks = [
            function(domainLookup, connectTime, ttfb, redirectTime, domInteractive, domComplete, domContentLoadedEventEnd, loadEventEnd){
                            runMyHeadJs(jsFileList, head);
            }
        ];

        (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://cdn1d-static-shared.phncdn.com/head/load-1.0.3.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        })();

        (function() {
            var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
            po.src = 'https://cdn1d-static-shared.phncdn.com/timings-1.0.0.js';
            var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
        })();
    }