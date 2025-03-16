/*
*
*/


var livePlayerVer = "2023.10.13.01";
var livePlayerObjs = {};
livePlayerObjs.liveRetryTimeout = 25;
livePlayerObjs.fingerprintJsIsStarted = false;

var isFlashPlayer = true;
var is0HomepagePlayer = false;
var isLowDelayLivePlayer = true;

var liveConvivaClient = null;
var liveConvivaPlayerStateManager = null;
var isUseConvivaMonitor = false;
var isConvivaApiLoaded = false;
var systemFactory = null;

//2021.08.17关闭ws统计
var isUseWsMonitor = false;
var isWsApiLoaded = false;

var isUseAliMonitor = true;
var isAliApiLoaded = false;
var isLiveControlsLoaded = false;
var currentLiveTimeData = null;
var isLiveIosSafariDrm = false;
//var Module;


var CNTVH5PlayerModule,liveAudio,moduleInitialized=false;


var html5VideoData = "";

var html5LiveYumList = null;
//旧版移动端h5播放器控制https参数
var isPlayerHttpsMode = true;


var isLiveBarrageJsLoaded = false;
var isLiveEnableP2p = false;


var isMobleUseBrowserUi = false;
if(isIPad()) {
    //isMobleUseBrowserUi = true;
}

function createLivePlayer(paras) {
    var container = document.getElementById(paras.divId);

    if(location.href.indexOf("https://")!==-1) {
        paras.isHttps = "true";
        livePlayerObjs.isHttps = "true";
    }


    if(paras.isHttps === "true") {
        livePlayerObjs.isHttps = "true";
    }


    if(paras.playerType === "live_panda") {
        paras.playerType = "live";
        if(isIPad()) {
            paras.playerType = "hw";
        }
        paras.ui = "ipanda";
    }

    paras.w += "";
    paras.h += "";

    if(!isTimeshift(paras)) {
        if(livePlayerObjs[paras.divId] && typeof livePlayerObjs[paras.divId].video!=="undefined" && livePlayerObjs[paras.divId].video) {
            clearInterval(livePlayerObjs[paras.divId].video.playedTimer);
        }

        livePlayerObjs[paras.divId] = {};
        livePlayerObjs[paras.divId] = paras;
    } else{

        paras.st += "";
        paras.st = transformDateToStamp(paras.st);
        if(!livePlayerObjs[paras.divId]) {
            livePlayerObjs[paras.divId] = {};
        }
        if(livePlayerObjs[paras.divId].vdn) {
            paras.vdn = livePlayerObjs[paras.divId].vdn;

        }

        if(livePlayerObjs[paras.divId].enablevip) {
            paras.enablevip = livePlayerObjs[paras.divId].enablevip;
        }

        if(livePlayerObjs[paras.divId].isVip) {
            paras.isVip = livePlayerObjs[paras.divId].isVip;
        }

        if(livePlayerObjs[paras.divId].islogin) {
            paras.islogin = livePlayerObjs[paras.divId].islogin;
        }
    }


    if(isIPad() && paras.playerType==="liveback" && !paras.st) {
        paras.playerType = "live";
    }


    if(paras.w.indexOf("%")>0) {
        container.style.width = paras.w;
    } else{
        container.style.width = paras.w + "px";
    }

    if(paras.h.indexOf("%")>0) {
        container.style.height = paras.h;
    } else{
        container.style.height = paras.h + "px";
    }

    //语言包
    if(paras.language !== "en") {
        paras.language = "default"
    }
    liveLanguageMsg.language = paras.language;
    liveLanguageMsg.ui = liveLanguageMsg[paras.language].ui;
    liveLanguageMsg.errorMsg = liveLanguageMsg[paras.language].errorMsg;


    if(!isDrmLegalDomainUrl()) {
        showLivePlayerMsg(paras, "对不起，由于版权原因，视频无法播放");
        return;
    }

    //220204,提示信息
    if(isIPad() && !isIosDrmPlayer(paras) && showNoDrmMsg(paras)) {
        return;
    }

    /*必须输入频道*/
    if(!paras.t) {
        showLivePlayerMsg(paras, "该视频不存在，请观看其他视频");
        return;
    }

    //获取cookie并传递指纹信息
    var Fingerprint = "";
    if(!getCookie_vdn("Fingerprint") && !livePlayerObjs.fingerprintJsIsStarted){
        //获取设备指纹信息
        getLivefingerprint2();
    } else{
        Fingerprint = getCookie_vdn("Fingerprint");
    }

    livePlayerObjs.fingerprintJsIsStarted = true;


    /*if((paras.playerType==="hw"||paras.playerType==="live"&&!isIPad()||paras.playerType==="liveback") && isWasmSupported() && (isLiveHlsJsSupported() && !/(iphone|ipad)/i.test(navigator.userAgent)) && navigator.userAgent.indexOf("rv:11")===-1&&navigator.userAgent.indexOf("MSIE")===-1) {*/
    if(isIPad() || isLiveHlsJsSupported() && isWasmSupported() && navigator.userAgent.indexOf("rv:11")===-1 && navigator.userAgent.indexOf("MSIE")===-1) {


        if(!html5LiveYumList) {
            html5LiveYumList = {yuv:"", yuvDOM:""};
        }

        if(livePlayerObjs[paras.divId]) {
            clearInterval(livePlayerObjs[paras.divId].liveTimer);
            clearInterval(livePlayerObjs[paras.divId].timeScopeTimer);
        }


        //若vdn重试超过4次，就给提示信息
        if(paras.vdnRetryNum && paras.vdnRetryNum>4) {
            showLivePlayerErrorMsg(paras);
            return;
        }

        if(isTimeshift(paras) && !livePlayerObjs[paras.divId].getVipResolution && typeof createLiveHls !== "undefined" && !paras.vdnRetryNum) {
            if(!livePlayerObjs[paras.divId].adCallsIsPlayed) {
                //paras.st = "";
                return;
            }

            //当天时移
            if(livePlayerObjs[paras.divId].start && paras.st>=livePlayerObjs[paras.divId].start && paras.st<(livePlayerObjs[paras.divId].start+24*3600)) {
                var controls = document.getElementById("control_bar"+"_"+paras.divId);
                if(controls) {

                    var timeshiftbtn = document.getElementById("timeshiftbtn_" + paras.divId);
                    if(timeshiftbtn) {
                        var isOn = timeshiftbtn.getAttribute("isOn");
                        if(isOn === "false") {
                            LiveTimeshiftSwitch.prototype.textBtnByClick(paras);
                        }
                    }

                    LiveControlsBar.prototype.controlBarShowOrHide('show', paras.divId, false);



                }


                LiveTimeshiftSwitch.prototype.playTimeshiftFromPos(paras, paras.st);
            } else{
                livePlayerObjs[paras.divId].endTime = paras.st;
                clearInterval(livePlayerObjs[paras.divId].liveTimer);
                createLiveHls(paras);
            }

            return;
        }

        livePlayerObjs[paras.divId].getVipResolution = false;

        if(paras.playerType==="liveback" && paras.st && paras.et) {
            paras.st += "";
            paras.start = transformDateToStamp(paras.st);
            paras.et += "";
            paras.end = transformDateToStamp(paras.et);

        }



        if(livePlayerObjs[paras.divId] && (livePlayerObjs[paras.divId].video && livePlayerObjs[paras.divId].video.hls || livePlayerObjs[paras.divId].adCallsVideo)) {
            destroyH5LiveHls(paras);

        }

        if(livePlayerObjs[paras.divId] && livePlayerObjs[paras.divId].video) {
            clearInterval(livePlayerObjs[paras.divId].video.playedTimer);
        }


        if(typeof goldlog!="undefined" && goldlog["h5player_"+paras.divId] && typeof goldlog["h5player_"+paras.divId].heartbeatStarted!=="undefined") {
            goldlog["h5player_"+paras.divId].heartbeatStarted = false;
        }

        if(paras.playerType==="small" || paras.playerType === "live_homepage") {
            paras.isMuted = true;
            if(document.getElementById("player_sound_btn_"+paras.divId) && document.getElementById("player_sound_btn_"+paras.divId).getAttribute("isMute") === "false") {
                paras.isMuted = false;
            }

        }


        if(document.getElementById("h5player_"+paras.divId)) {
            removeH5LivePlayerEvents(paras.divId);
            if(isCanvasSupported(paras.divId)) {
                try{
                    document.getElementById("h5player_"+paras.divId).pause();
                    document.body.removeChild(document.getElementById("h5player_"+paras.divId));
                } catch (e) {
                    container.removeChild(document.getElementById("h5player_"+paras.divId));
                }

                clearInterval(livePlayerObjs[paras.divId].canvasDrawTimer);
            } else{
                container.removeChild(document.getElementById("h5player_"+paras.divId));
            }

            clearInterval(livePlayerObjs[paras.divId].canvasDrawTimer);

        }




        container.innerHTML = "";


        livePlayerObjs[paras.divId] = {};
        livePlayerObjs[paras.divId] = paras;

        livePlayerObjs[paras.divId].video = {};
        livePlayerObjs[paras.divId].adCallsVideo = {};

        //如果是flv流
        if((paras.playerType==="live"||paras.playerType==="hw") && (paras.others==="flv"||typeof paras.others==="string" && paras.others.indexOf(".flv")>0) && isLowDelayLivePlayer) {
            livePlayerObjs[paras.divId].streamType = "flv";
        }

        if(liveConvivaClient && liveConvivaClient.cleanupSession && livePlayerObjs[paras.divId].convivaSessionKey!==undefined) {

            liveConvivaClient.cleanupSession(livePlayerObjs[paras.divId].convivaSessionKey);
        }

        livePlayerObjs[paras.divId].convivaSessionKey = undefined;

        //设置播放器的背景图片
        var bgImg = "cctv_html5player_bg_16X9.png";
        if(paras.h/paras.w > 1) {
            bgImg = "cctv_html5player_bg_9X16.png";
        }


        livePlayerObjs[paras.divId].isLive = true;
        livePlayerObjs[paras.divId].isOldH5player = false;



        var container = document.getElementById(paras.divId);
        container.style.zIndex = "2";
        container.style.overflow = "hidden";
        var convivaJsApi1 = "http://js.player.cntv.cn/creator/conviva-core-sdk.min.js";
        var convivaJsApi2 = "http://js.player.cntv.cn/creator/conviva-html5native-impl2.js";
        var wsApiUrl = "http://js.player.cntv.cn/creator/player_data_collector.js";
        var aliApiUrl = "http://js.player.cntv.cn/creator/html5player_analysis_lib.js";
        var workerUrl = "http://js.player.cntv.cn/creator/h5.worker?v=220805";
        var containerBgImg = "https://player.cntv.cn/html5Player/images/" + bgImg;




        //前贴广告
        livePlayerObjs[paras.divId].adCalls = "";

        if(typeof live_Ad_Calls === "string" && live_Ad_Calls.length>2) {
            livePlayerObjs[paras.divId].adCalls = decodeURIComponent(live_Ad_Calls);

            if(livePlayerObjs[paras.divId].adCalls.indexOf("?") > 0) {
                livePlayerObjs[paras.divId].adCalls += "&cb=parseLiveAdCallsDataFromApi";
            } else{
                livePlayerObjs[paras.divId].adCalls += "?cb=parseLiveAdCallsDataFromApi";
            }

            if(livePlayerObjs[paras.divId].adCalls.indexOf("op=7")===-1) {
                livePlayerObjs[paras.divId].adCalls = livePlayerObjs[paras.divId].adCalls.replace(/(op=[0-9]*)/, "op=7");
            }

            //如果是移动端，且有前贴广告，就非自动播放
            if(isIPad()) {
                if(paras.vdnRetryNum!==undefined && paras.vdnRetryNum-0<1) {
                    paras.isAutoPlay = "false";
                }

                //解决华为自带浏览器和三星UC浏览器广告不能播放问题
                if((/(huawei)/i.test(navigator.userAgent)||/(ucbrowser)/i.test(navigator.userAgent)&&/(sm-)/i.test(navigator.userAgent)) && !isNewH5LivePlayer(paras)) {
                    paras.isAutoPlay = "true";
                }
            }




        }


        //暂停广告
        livePlayerObjs[paras.divId].adPause = "";
        if(typeof live_Ad_Pause === "string" && live_Ad_Pause.length>2) {
            livePlayerObjs[paras.divId].adPause = decodeURIComponent(live_Ad_Pause);

            if(livePlayerObjs[paras.divId].adPause.indexOf("?") > 0) {
                livePlayerObjs[paras.divId].adPause += "";
            } else{
                livePlayerObjs[paras.divId].adPause += "";
            }


            if(livePlayerObjs[paras.divId].adPause.indexOf("op=7")===-1) {
                livePlayerObjs[paras.divId].adPause = livePlayerObjs[paras.divId].adPause.replace(/(op=[0-9]*)/, "op=7");
            }



        }


        //banner广告
        livePlayerObjs[paras.divId].adBanner = "";
        if(typeof live_Ad_Banner === "string" && live_Ad_Banner.length>2) {
            livePlayerObjs[paras.divId].adBanner = decodeURIComponent(live_Ad_Banner);

            if(livePlayerObjs[paras.divId].adBanner.indexOf("?") > 0) {
                livePlayerObjs[paras.divId].adBanner += "&cb=parseLiveAdBannerDataFromApi";
            } else{
                livePlayerObjs[paras.divId].adBanner += "?cb=parseLiveAdBannerDataFromApi";
            }

            if(livePlayerObjs[paras.divId].adBanner.indexOf("op=7")===-1) {
                livePlayerObjs[paras.divId].adBanner = livePlayerObjs[paras.divId].adBanner.replace(/(op=[0-9]*)/, "op=7");
            }
        }



        if(paras.isHttps === "true") {
            containerBgImg = containerBgImg.replace("http://", "https://");

            //livePlayerObjs[paras.divId].adCalls = "https://galaxy.bjcathay.com/s?z=cathay&c=1289,1290,1291,1292&op=7&cb=parseLiveAdCallsDataFromApi";
            if(livePlayerObjs[paras.divId].adCalls) {
                livePlayerObjs[paras.divId].adCalls = livePlayerObjs[paras.divId].adCalls.replace("http://", "https://");
            }

            if(livePlayerObjs[paras.divId].adPause) {
                livePlayerObjs[paras.divId].adPause = livePlayerObjs[paras.divId].adPause.replace("http://", "https://");
            }

            if(livePlayerObjs[paras.divId].adBanner) {
                livePlayerObjs[paras.divId].adBanner = livePlayerObjs[paras.divId].adBanner.replace("http://", "https://");
            }

            convivaJsApi1 = "https://js.player.cntv.cn/creator/conviva-core-sdk.min.js";
            convivaJsApi2 = "https://js.player.cntv.cn/creator/conviva-html5native-impl2.js";
            wsApiUrl = "https://js.player.cntv.cn/creator/player_data_collector.js";
            aliApiUrl = "https://js.player.cntv.cn/creator/html5player_analysis_lib.js";
            workerUrl = "https://js.player.cntv.cn/creator/h5.worker?v=220805";
        }




        //5.1声道音效
        if(paras.audioType === "5.1") {
            workerUrl = "//js.player.cntv.cn/creator/h5_audio.worker";
        }

        if(isIPad()) {
            container.style.backgroundImage = "url('" + containerBgImg + "')";
            container.style.backgroundSize = "100% 100%";
            container.style.backgroundRepeat = "no-repeat";
            container.style.backgroundPosition = "0px 0px";
            container.style.margin = "0 auto";
        } else{
            container.style.backgroundColor = "#000";
        }


        //container.style.position = "relative";

        //liveback模式下无广告，测试用；广告播放后，就不再继续播广告
        if(paras.playerType === "liveback" || livePlayerObjs[paras.divId].adCallsIsPlayed) {
            livePlayerObjs[paras.divId].adCalls = "";
        }



        //对借口文档的新字段进行初始化；
        var vdn_tsp =new Date().getTime().toString().slice(0,10);
        var vdn_vnFlash = "1537";										//澶缃戦〉FlashV1.0--No1
        var staticCheck_Flash = "B4B51E8523157ED8D17ADB76041BCD09";
        var vdn_vnHtml5 = "2049";										//澶缃戦〉Html5V1.0--No1
        var staticCheck_Html5 = "47899B86370B879139C08EA3B5E88267";
        var vdn_vc = "";
        var vdn_uid = "";
        var vdn_wlan = "";
        var Fingerprint = "";//定义设备指纹信息的key值

        if(!getCookie_vdn("Fingerprint") && !livePlayerObjs.fingerprintJsIsStarted){
            //获取设备指纹信息
            getLivefingerprint2();
        } else{
            vdn_uid = getCookie_vdn("Fingerprint");
        }


        var _doc = document.getElementsByTagName("head")[0];
        var jsLoader = createElementByType("script","hdsJsLoader","absolute","0px","0px","0px","0px");
        var vdnUrl = "http://";

        if(paras.isHttps === "true") {
            vdnUrl = "https://";
        }

        /*启用备用vdn*/
        if(paras.isBackupVdn) {
            vdnUrl += "vdn.live.cntv.cn/api2/liveHtml5.do";
        } else{
            vdnUrl += "vdn.live.cntv.cn/api2/liveHtml5.do";
        }
        vdnUrl += "?channel=pw://cctv_p2p_hd" + paras.t;

        livePlayerObjs[paras.divId].isDrm = true;

        vdnUrl += "&channel_id=" + paras.t + "&video_player=1";
        if(isIPad()) {
            vdnUrl += "&im=1";
            //清流的vdn请求
            if(!isNewH5LivePlayer(paras) && !isIosDrmPlayer(paras)) {
                livePlayerObjs[paras.divId].isDrm = false;
                vdnUrl = vdnUrl.replace("?channel=pw", "?channel=pa");
            }
            vdn_vc = setH5Str((vdn_tsp+vdn_vnHtml5+staticCheck_Html5+vdn_uid)).toLocaleUpperCase();
            vdnUrl += "&client=html5"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnHtml5 + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
        } else {
            vdnUrl += "&im=0";
            vdnUrl = vdnUrl.replace("?channel=pw", "?channel=pc");
            vdn_vc = setH5Str((vdn_tsp+vdn_vnFlash+staticCheck_Flash+vdn_uid)).toLocaleUpperCase()
            vdnUrl += "&client=flash"+"&tsp="+vdn_tsp + "&vn="+ vdn_vnFlash + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
        }


        livePlayerObjs[paras.divId].isErrorDone = false;

        if(livePlayerObjs[paras.divId].vdnTimer !== undefined) {
            clearTimeout(livePlayerObjs[paras.divId].vdnTimer);
        }


        //兼容页面定义的vdn变量冲突问题
        if(paras.vdn && !paras.vdn.vdnUrl) {
            paras.vdnParasFromPage = paras.vdn;
        }

        if(paras.vdnParasFromPage) {
            //ajax方式请求
            vdnUrl = vdnUrl.replace("liveHtml5.do?", "live.do?");
        }

        //加载conviva api并初始化
        livePlayerObjs[paras.divId].vdn = {};
        livePlayerObjs[paras.divId].vdn.vdnUrl = vdnUrl;

        if(!(paras.posterImg && paras.posterImg.length>3 || paras.isAutoPlay==="false")) {
            if(paras.others && (paras.others.indexOf(".m3u8")>0 || paras.others.indexOf(".ts")>0)) {
                livePlayerObjs[paras.divId].video.url = paras.others;
                livePlayerObjs[paras.divId].vdn.public = "1";
                parseLiveDataFromVdn(paras, true)
            } else{
                //jsonp方式请求
                if(livePlayerObjs[paras.divId].vdn.vdnUrl.indexOf("liveHtml5.do?") > 0) {
                    loadLiveScript(vdnUrl, parseLiveDataFromVdn, paras, parseLiveDataFromVdnWhenError, 10000);
                } else{
                    //ajax方式请求
                    doLoadLiveDataByAjax(vdnUrl, "", parseLiveDataFromVdn, paras, parseLiveDataFromVdnWhenError, 10000);
                }
            }

        }


        if(isLiveHlsJsSupported()) {
            if(!livePlayerObjs.isLoadWorker) {
                livePlayerObjs.isLoadWorker = true;
                //loadLiveScript(workerUrl, null, null);

                LazyLoad.js(workerUrl, function(){

                    if(typeof CNTVModule !== "undefined") {

                        CNTVH5PlayerModule = CNTVModule();
                        window.CNTVH5PlayerModule = CNTVH5PlayerModule;
                        CNTVH5PlayerModule.onRuntimeInitialized = function () {
                            moduleInitialized = true;
                        }
                    }


                });

            }

        }

        /*p2p*/
        /*var notUrl = location.href.indexOf("news.cctv.com/special") === -1*/;
        if(paras.p2p!=="false" && (paras.p2p==="true" || paras.t==="cctv1" || paras.t==="cctv13" || paras.t==="cctv2" || paras.t==="cctv3" || paras.t==="cctv4" || paras.t==="cctvamerica" || paras.t==="cctveurope" || paras.t==="cctv5" || paras.t==="cctv6" || paras.t==="cctv7" || paras.t==="cctv8" || paras.t==="cctvjilu" || paras.t==="cctv10" || paras.t==="cctv11" || paras.t==="cctv12" || paras.t==="cctvchild" || paras.t==="cctv15" || paras.t==="cctv16" || paras.t==="cctv17" || paras.t==="cctv5plus") && (isWasmSupported() && isLiveHlsJsSupported()||isIosDrmPlayer(paras)) && livePlayerObjs[paras.divId].streamType!=="flv") {
            isLiveEnableP2p = true;
            livePlayerObjs[paras.divId].isP2p = true;
        } else{
            livePlayerObjs[paras.divId].isP2p = false;
        }

        if(isLiveEnableP2p) {
            var p2pJsUrl = "http://js.player.cntv.cn/creator/hlsp2p.js";

            if(paras.isHttps === "true") {
                p2pJsUrl = p2pJsUrl.replace("http://", "https://");
            }

            if(!livePlayerObjs[paras.divId].isLoadP2pJs) {
                livePlayerObjs[paras.divId].isLoadP2pJs = true;

                var _doc = document.getElementsByTagName("head")[0];
                var jsLoader= document.createElement('script');
                jsLoader.type = 'text/javascript';
                jsLoader.setAttribute("crossorigin", "anonymous");

                jsLoader.src = p2pJsUrl;
                _doc.appendChild(jsLoader);

            }

        }


        if(isUseConvivaMonitor) {

            if(!isConvivaApiLoaded) {

                LazyLoad.js(convivaJsApi1, function(){
                    LazyLoad.js(convivaJsApi2, function(){

                        if(typeof Conviva !== "undefined" && typeof Conviva.Impl !== "undefined") {
                            isConvivaApiLoaded = true;
                            initLiveConviva(paras);
                        }

                    });
                });
            } else if(isConvivaApiLoaded){
                initLiveConviva(paras);
            } else{
                var checkConvivaCount = 0;
                livePlayerObjs.loadConvivaTimer = setInterval(function () {
                    checkConvivaCount++;
                    if(checkConvivaCount > 50) {
                        clearInterval(livePlayerObjs.loadConvivaTimer);
                    }
                    if(isConvivaApiLoaded) {
                        clearInterval(livePlayerObjs.loadConvivaTimer);
                        initLiveConviva(paras);
                    }
                }, 200);
            }

        }


        var isWsApiLoaded = false;



        if(!isWsApiLoaded && isUseWsMonitor) {
            isWsApiLoaded = true;
            LazyLoad.js(wsApiUrl, function(){
                livePlayerObjs.wsJsLoaded = true;
            });
        }


        livePlayerObjs.aliJsLoaded = false;

        if(!isAliApiLoaded && isUseAliMonitor) {
            isAliApiLoaded = true;
            LazyLoad.js(aliApiUrl, function(){
                livePlayerObjs.aliJsLoaded = true;
            });
        }



        try{
            var containerObj = document.getElementById(paras.divId);
            //20200506,如果不是fixed定位，强制relative定位
            if(!containerObj.style || typeof containerObj.style!=="object" || containerObj.style.position!=="fixed") {
                containerObj.style.position = "relative";
            }


            var originalStyle = containerObj.style.cssText;

            if(!originalStyle || originalStyle.length<4) {
                originalStyle = "none";
            }

            if(containerObj) {
                containerObj.setAttribute("originalStyle", originalStyle);
            }

        } catch (e) {

        }



        if(paras.posterImg && paras.posterImg.length>3 || paras.isAutoPlay==="false") {

            showLivePlayerPosterImg(paras);
            return;
        }

        createLiveVideoLoadingImg(paras);



    }
    /*else if(paras.playerType==="hw" && isIPad()) {
        var appUrl = "http://app.cctv.com/appkhdxz/ydb/index.shtml";
        if(paras.isHttps === "true") {
            appUrl = "https://app.cctv.com/appkhdxz/ydb/index.shtml";
        }
        var showMsg = "对不起，不支持您的设备<br />请速下&nbsp;<a style='font-weight:bold;font-size:16px;border:0;color:#cc0000'  href='" + appUrl + "'>央视影音客户端</a>&nbsp;畅享海量直播节目";
        showLivePlayerMsg(paras, showMsg);
        return;
    }
    */
    else if(!isIPad()) {
        var showMsg = "";
        //如果是低延时、计费或某些域名且用flash播放器播，就提示用户换播放器
        if((navigator.userAgent.indexOf("rv:11")===-1 && navigator.userAgent.indexOf("MSIE")===-1) || paras.vdn && paras.vdn.vtoken || (paras.others==="flv"||typeof paras.others==="string" && paras.others.indexOf(".flv")>0) || location.href.indexOf("olympicchannelchina.cn")!==-1 || location.href.indexOf("ipanda.cn")!==-1 || location.href.indexOf("csmpte.com")!==-1 || (paras.playerType==="live_homepage"||paras.playerType==="small")&&location.href.indexOf("cctv.cn")!==-1) {
            showMsg = "<p>您当前的浏览器不支持付费视频播放</p>" + "<p>请更换浏览器或设备</p>" + "<p>(若为360、QQ或搜狗浏览器，须使用极速模式)</p>";
            if((navigator.userAgent.indexOf("rv:11")===-1 && navigator.userAgent.indexOf("MSIE")===-1) || (paras.others==="flv"||typeof paras.others==="string" && paras.others.indexOf(".flv")>0) || location.href.indexOf("olympicchannelchina.cn")!==-1 || location.href.indexOf("ipanda.cn")!==-1 || location.href.indexOf("csmpte.com")!==-1 || location.href.indexOf("cctv.cn")!==-1) {
                showMsg = showMsg.replace("付费", "");
                //不支持H5的非IE浏览器，提示升级浏览器版本
                if(navigator.userAgent.indexOf("rv:11")===-1 && navigator.userAgent.indexOf("MSIE")===-1) {
                    if(/(wechat)/i.test(navigator.userAgent)) {
                        showMsg = showMsg.replace("请更换浏览器或设备", "请使用外部浏览器观看");
                    } else{
                        showMsg = showMsg.replace("请更换浏览器或设备", "请升级浏览器或更换设备");
                    }

                }
            }
            showLivePlayerMsg(paras, showMsg);
            return;
        }

        if(isPCWeixinBrowser()) {
            showLivePlayerMsg(paras, "暂不支持PC微信客户端，请复制该页面链接并换用浏览器观看！");
            return;
        }

        /*220920,ie内核浏览器就给提示*/
        var showMsg = "<p>您当前的浏览器不支持视频播放</p>" + "<p>请更换浏览器或设备</p>" + "<p>(若为360、QQ或搜狗浏览器，须使用极速模式)</p>";
        showLivePlayerMsg(paras, showMsg);
        return;


        getFlashVer();

        if(!isFlashPlayer && !isIPad())    {
            showLiveInstallFlashPlayerMsg(paras.divId, paras.w, paras.h);
            return;
        }



        var version = livePlayerVer;

        if(typeof goldlog === "undefined") {
            doLoadLiveAliAnalyticsJs(paras);
        }


        var playerurl = "https://player.cntv.cn/standard/live_HLSDRM20181022.swf";


        if(paras.playerType == "0shouye") {
            playerurl = "http://player.cntv.cn/standard/smallDRMplayer.swf";
        }

        if(paras.playerType == "small") {
            playerurl = "http://player.cntv.cn/standard/smallDRMplayer20790807.swf";
        }

        if(paras.playerType == "live_homepage") {
            playerurl = "http://player.cntv.cn/standard/live_smallWindow210120.swf";
        }

        if(paras.playerType==="hw" || paras.playerType==="small2") {
            playerurl = "http://player.cntv.cn/standard/hwDRMplayer20190917.swf";
        }

        if(paras.playerType == "live") {

            if(paras.st && paras.st-1000000000>0) {

                if(document.getElementById("flashplayer_"+paras.divId)) {
                    document.getElementById("flashplayer_"+paras.divId).PageCallFlash({"IsLive":"false","ShiftTime":paras.st});
                    paras.st = "";
                    return;
                } else{
                    //一进页面就自动播回看
                    livePlayerObjs.flashLiveback = {};
                    livePlayerObjs.flashLiveback.flashId = "flashplayer_"+paras.divId;
                    livePlayerObjs.flashLiveback.start = paras.st;
                    paras.st = "";
                }


            }
            //playerurl = "http://player.cntv.cn/standard/live_HLSDRM20190815.swf";
            playerurl = "http://player.cntv.cn/standard/live_HLSDRM20191015.swf";


        }

        if(paras.ui === "ipanda") {
            playerurl = "http://player.cntv.cn/standard/ipandaLive_210120.swf";
        }

        var _hdsPauseAdplayerPath="http://player.cntv.cn/adplayer/cntvPauseAdPlayer.swf";
        var _hdsAdplayerPath = "http://player.cntv.cn/adplayer/cntvAdPlayer20150521.swf";
        var _hdsCornerAdplayerPath = "http://player.cntv.cn/adplayer/cntvCornerADPlayer.swf";

        if(paras.isHttps === "true") {
            playerurl = playerurl.replace("http://", "https://");
            _hdsPauseAdplayerPath="https://player.cntv.cn/adplayer/cntvPauseAdPlayer.swf";
            _hdsAdplayerPath = "https://player.cntv.cn/adplayer/cntvAdPlayer20150521.swf";
            _hdsCornerAdplayerPath = "https://player.cntv.cn/adplayer/cntvCornerADPlayer.swf";
        }



        var hdsFo = null;
        if(IsMaxthon())
        {
            //hdsFo = new SWFObject(playerurl + "?v=18"+version+"&a="+Math.random(), "flashplayer_" + paras.divId, "100%", "100%", "10.0.0.0", "#000000");
            hdsFo = new SWFObject(playerurl + "?v=18"+version, "flashplayer_" + paras.divId, "100%", "100%", "10.0.0.0", "#000000");
        }else
        {
            hdsFo = new SWFObject(playerurl + "?v=18"+version, "flashplayer_" + paras.divId, "100%", "100%", "10.0.0.0", "#000000");
        }


        if(typeof(hds_bitaRates)!="undefined" && typeof(hds_bitaRates)=="string")
        {
            hdsFo.addVariable("bitaRates", paras.br);

        }


        if(paras.playerType == "0shouye") {
            if(paras.w/paras.h < 1.5) {
                hdsFo.addVariable("playErrorImg", "https://player.cntv.cn/images/ipad/h5_0shouye_error4x3.png");
            } else{
                hdsFo.addVariable("playErrorImg", "https://player.cntv.cn/images/ipad/h5_0shouye_error16x9.png");
            }

            hdsFo.addVariable("playErrorJumpUrl", "http://tv.cctv.com/");
        }


        if(paras.ui === "ipanda") {
            hdsFo.addVariable("hasChannelList", paras.hasChannelList);
            hdsFo.addVariable("showChannelList", paras.showChannelList);
            hdsFo.addVariable("hasBarrage", paras.hasBarrage);
            hdsFo.addVariable("barrageitemID", paras.barrageitemID);
        }


        hdsFo.addVariable("id", "flashplayer_" + paras.divId);

        hdsFo.addVariable("ChannelID", paras.t);
        hdsFo.addVariable("videoTVChannel", paras.t);
        hdsFo.addVariable("isAutoPlay", paras.isAutoPlay);
        hdsFo.addVariable("br", paras.br);
        hdsFo.addVariable("posterImg", paras.posterImg);
        hdsFo.addVariable("isLive4k", paras.isLive4k);
        hdsFo.addVariable("https", paras.isHttps);
        hdsFo.addVariable("isHttps", paras.isHttps);
        hdsFo.addVariable("isLeftBottom", paras.isLeftBottom);
        hdsFo.addVariable("ruleVisible", paras.ruleVisible);



        if(paras.t.indexOf("pe://cctv_p2p_hd")!==-1) {
            hdsFo.addVariable("P2PChannelID", paras.t);
            hdsFo.addVariable("tai", paras.t+"_4M");
        } else{
            hdsFo.addVariable("P2PChannelID", "pc://cctv_p2p_hd" + paras.t);
            hdsFo.addVariable("tai", paras.t);
        }


        hdsFo.addVariable("VideoName", paras.t);
        hdsFo.addVariable("channelID", paras.t);


        if(typeof(live_Ad_Calls) != "undefined")
        {

            hdsFo.addVariable("adCalls", live_Ad_Calls);
            //hdsFo.addVariable("adCalls", encodeURIComponent(live_Ad_Calls));

            hdsFo.addVariable("adplayerPath",_hdsAdplayerPath);
        }
        else
        {
            if(typeof(_hdsAdCall) != "undefined")
            {
                hdsFo.addVariable("adCall", _hdsAdCall);
                hdsFo.addVariable("adplayerPath",_hdsAdplayerPath);
            }

        }



        if(typeof(live_Ad_Pause) != "undefined")
        {
            hdsFo.addVariable("adPause", live_Ad_Pause);
            hdsFo.addVariable("pauseAdplayerPath",_hdsPauseAdplayerPath);
        }
        else
        {
            if(typeof(_hdsAdPause) != "undefined")
            {
                hdsFo.addVariable("adPause",_hdsAdPause );
                hdsFo.addVariable("pauseAdplayerPath",_hdsPauseAdplayerPath);
            }
        }

        if(typeof(live_Ad_Corner) != "undefined")
        {
            hdsFo.addVariable("adCorner", live_Ad_Corner);
            hdsFo.addVariable("cornerAdplayerPath",_hdsCornerAdplayerPath);
        }
        if(typeof(live_Ad_Banner) != "undefined")
        {
            hdsFo.addVariable("adBanner", live_Ad_Banner);
        }
        if(typeof(live_Ad_Wenzi) != "undefined")
        {
            hdsFo.addVariable("adText", live_Ad_Wenzi);
        }

        hdsFo.addVariable("BannerWidth", 600);
        hdsFo.addVariable("BannerInterval", 20);
        hdsFo.addVariable("playBackType","common");
        if(paras.ruleVisible === "false"){
            hdsFo.addVariable("ruleVisible","false");
        } else {
            hdsFo.addVariable("ruleVisible","true");
        }

        if(paras.webFullScreenOn === "false"){
            hdsFo.addVariable("windeowFullBtnVisible","false");
        } else {
            hdsFo.addVariable("windeowFullBtnVisible","true");

        }


        if(paras.playerType==="hw") {
            hdsFo.addVariable("ruleVisible", "false");
            hdsFo.addVariable("windeowFullBtnVisible", "false");
            hdsFo.addVariable("briteBtnVisible", "false");
        }

        if(paras.playerType==="small2") {
            hdsFo.addVariable("briteBtnVisible", "true");

        }

        if(location.href.indexOf(".pandaplace.nl/pandacam")===-1&&location.href.indexOf("ipanda.com.de/monitor")===-1&&location.href.indexOf("en.ipanda.com/live")===-1 && location.href.indexOf("live.ipanda.com/webapp")===-1  && location.href.indexOf("live.ipanda.com/ipandade_iframe")===-1 && location.href.indexOf("live.ipanda.com/pandaplace")===-1)
        {
            hdsFo.addVariable("languageXml","");
            if(paras.t==="cctv5" || paras.t==="cctv5plus"){

                if(paras.t.indexOf("pe://cctv_p2p_hd")!==-1) {
                    hdsFo.addVariable("bitaRates", "4096");
                    if(paras.isHttps === "true") {
                        hdsFo.addVariable("configURL","https://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_1080P.xml");
                    } else{
                        hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_1080P.xml");
                    }

                } else{
                    //hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_HD.xml");

                    if(paras.isHttps === "true") {
                        hdsFo.addVariable("configURL","https://player.cntv.cn/flashplayer/config/WebDRMPlayerConfig.xml");
                    } else{
                        hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebDRMPlayerConfig.xml");
                    }


                }
            } else{

                if(paras.isHttps === "true") {
                    hdsFo.addVariable("configURL","https://player.cntv.cn/flashplayer/config/WebDRMPlayerConfig.xml");
                } else{
                    hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebDRMPlayerConfig.xml");
                }
            }

            /*
             if(ChannelID==="cctv1"){
             hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig1080p.xml");
             }
             */

        }
        else
        {

            if(paras.isHttps === "true") {
                hdsFo.addVariable("languageXml","https://player.cntv.cn/xml/english/hdsLanguage.xml");
                hdsFo.addVariable("configURL","https://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig-English.xml");

            } else{
                hdsFo.addVariable("languageXml","http://player.cntv.cn/xml/english/hdsLanguage.xml");
                hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig-English.xml");

            }
        }

        if(location.href.indexOf("en.ipanda.com") !== -1) {

            if(paras.isHttps === "true") {
                hdsFo.addVariable("configURL","https://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_panda.xml");

            } else{
                hdsFo.addVariable("configURL","http://player.cntv.cn/flashplayer/config/WebHDSPlayerConfig_panda.xml");
            }
        }
        hdsFo.addVariable("referrer", document.referrer);
        //获取cookie并传递指纹信息
        if(!getCookie_vdn("Fingerprint")){
            //获取设备指纹信息
            getLivefingerprint2();
        } else{
            Fingerprint = getCookie_vdn("Fingerprint");
        }
        //把指纹信息传给播放器
        hdsFo.addVariable("fingerprint",Fingerprint);

        if(typeof(channelAbled) !== "undefined") {
            hdsFo.addVariable("channelAbled", channelAbled);
        }

        if(typeof(hdsSelectChannel) !== "undefined") {
            hdsFo.addVariable("selectChannel", hdsSelectChannel);
        }

        if(typeof(isHdsAbroad) !== "undefined") {
            hdsFo.addVariable("isabroad", isHdsAbroad);
        }



        hdsFo.addParam("wmode", paras.wmode);


        hdsFo.addParam("quality", "high");
        hdsFo.addParam("menu","false");
        hdsFo.addParam("allowFullScreen", "true");
        hdsFo.addParam("allowScriptAccess","always");




        hdsFo.write(paras.divId);
        if(paras.wmode==="true" || location.href.indexOf("tv.cntv.cn/live")!==-1 || location.href.indexOf("tv.cctv.com/live")!==-1){
            try{
                document.getElementById(divID).style.backgroundColor = "#000";
            } catch(e){
            }
        }


        //播放器容器的原始样式
        try{
            var contanerObj = document.getElementById(paras.divId);
            var originalStyle = contanerObj.style.cssText;
            if(!originalStyle || originalStyle.length<4) {
                originalStyle = "none";
            }

            document.getElementById("flashplayer_" + paras.divId).setAttribute("originalStyle", originalStyle);
        } catch (e) {

        }




    } else {
        if(paras.playerType === "small") {
            is0HomepagePlayer = true;
        }

        if(paras.isHttps === "false") {
            isPlayerHttpsMode = false;
        }

        if(paras.posterImg && paras.posterImg.length>3) {
            paras.isAutoPlay = "false";
        }

        if(!livePlayerObjs[paras.divId]) {
            livePlayerObjs[paras.divId] = {};
        }
        livePlayerObjs[paras.divId].isOldH5player = true;

        var jsUrl = "http://js.player.cntv.cn/creator/live_common.js";

        if(paras.isHttps === "true") {
            jsUrl = "https://js.player.cntv.cn/creator/live_common.js";
        }




        if(!livePlayerObjs.isLoadLiveJs) {
            livePlayerObjs.isLoadLiveJs = true;
            //loadLiveScript(jsUrl, createOldLivePlayer, paras);

            LazyLoad.js(jsUrl, function(){
                createOldLivePlayer(paras);
            });
        } else{
            if(typeof createFlashLivePlayer !== "undefined") {
                clearInterval(livePlayerObjs[paras.divId].loadLiveTimer);
                createOldLivePlayer(paras);
            } else{
                var checkCount = 0;
                livePlayerObjs[paras.divId].loadLiveTimer = setInterval(function () {
                    checkCount++;
                    if(checkCount > 50) {
                        clearInterval(livePlayerObjs[paras.divId].loadLiveTimer);
                    }
                    if(typeof createFlashLivePlayer !== "undefined") {
                        clearInterval(livePlayerObjs[paras.divId].loadLiveTimer);
                        createOldLivePlayer(paras);
                    }
                }, 200);
            }

        }



    }
}

//ios版本是否支持mse
function isLiveIosSupportedMse() {
    var isSupported = true;
    if(/(iphone|ipad)/i.test(navigator.userAgent)) {
        ver = "";
        var ua = navigator.userAgent.toLowerCase();
        var indexPos = ua.indexOf("os ");
        if(indexPos > 0) {
            var ver = ua.substring(indexPos + 3);
            ver = parseInt(ver);
        }
        if(ver && ver-12<0) {
            isSupported = false;
        }
    }

    return isSupported;
}



/*获取ios版本号*/
function getLiveIosVersion() {
    var ver = 11;
    var verArr = null;

    if(navigator.appVersion) {
        verArr = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
        if(verArr) {
            ver = parseInt(verArr[1], 10);
            if(verArr[2]) {
                ver = ver + "." + verArr[2];
            }
        }

    }

    return ver;
}

function isIosDrmPlayer(paras) {
    var drmFlag = false;
    var allowedBrowser = (/safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent)) && (!/qqbrowser/i.test(navigator.userAgent));
    var allowedOs = (/(iphone|ipad)/i.test(navigator.userAgent)) && /(https:\/\/)/i.test(location.href);

    var msgChannelList = ["cctv2","cctv3","cctv4","cctv5","cctv5plus","cctv6","cctv7","cctv8","cctvjilu","cctv10","cctv11","cctv12","cctvchild","cctv15","cctv17","cctveurope","cctvamerica","cctv16"];


    var allowedChannels = msgChannelList.indexOf(paras.t) !== -1;
    drmFlag = allowedOs && allowedBrowser && allowedChannels;

    var iosVer = drmFlag ? getLiveIosVersion() : 0;

    drmFlag = iosVer-0 >= 12;

    if(drmFlag) {
        livePlayerObjs.isIosDrm = true;
    }
    if(livePlayerObjs.isIosDrm) {
        drmFlag = true;
    }

    if(allowedBrowser && allowedOs && (paras.t==="cctv1"||paras.t==="cctv13") && isLiveIosSafariDrm) {
        drmFlag = true;
    }

    return drmFlag;
}

function isLiveSdrmPlayer(paras) {
    var notAllowedBrowser = /(qqbrowser)/i.test(navigator.userAgent) && !(/(micromessenger)/i.test(navigator.userAgent)) || /(baidu)/i.test(navigator.userAgent) || /(sogoumobile)/i.test(navigator.userAgent) || /(UCBrowser)/i.test(navigator.userAgent);
    return false && /(iphone|ipad)/i.test(navigator.userAgent) && isLiveIosSupportedMse() && (paras.t==="cctv1"||paras.t==="cctv2"||paras.t==="cctv3"||paras.t==="cctv4"||paras.t==="cctv6"||paras.t==="cctv7"||paras.t==="cctv8"||paras.t==="cctv13") && !notAllowedBrowser;
}

//判断是否是PC微信客户端
function isPCWeixinBrowser() {
    return !isIPad() && /(qqbrowser)/i.test(navigator.userAgent) && /(micromessenger)/i.test(navigator.userAgent);
}


function isNewH5LivePlayer(paras) {
    var h5DomainUrl = true;

    /*如果移动端是playerType是live且满足一定条件，强制转为hw*/
    if(isIPad() && (paras.playerType==="live" || paras.playerType==="live_homepage")) {
        paras.playerType = "hw";
    }

    return (paras.playerType==="hw" ||paras.playerType==="small" || paras.playerType==="live_homepage" || paras.playerType==="live"&&!isIPad()&&h5DomainUrl||paras.playerType==="liveback") && isWasmSupported() && (isLiveHlsJsSupported() && !/(iphone|ipad)/i.test(navigator.userAgent) || isLiveSdrmPlayer(paras)) && navigator.userAgent.indexOf("rv:11")===-1&&navigator.userAgent.indexOf("MSIE")===-1;

}

function createOldLivePlayer(paras) {
    createFlashLivePlayer(paras.divId, paras.w, paras.h, paras.t);
}

function useBrowserPlayerControls(divId) {
    isMobleUseBrowserUi = true;

    //解决在有播放按钮情况下播放，播放按钮没有去掉问题
    var controlsBar = document.getElementById("control_bar_"+divId);
    if(controlsBar) {
        document.getElementById(divId).removeChild(controlsBar);
    }
    var player = document.getElementById("h5player_"+divId);
    if(player) {
        player.controls = true;
    }
}

function createLivebackPlayer(paras) {
    isLiveEnableP2p = false;
    livePlayerObjs[paras.divId].playerType = paras.playerType;
    paras.livebackVdnRetryNum = 0;

    if(!livePlayerObjs[paras.divId].video || !livePlayerObjs[paras.divId].video.url) {
        return;
    }
    //用浏览器自带ui控制条
    if(isIosDrmPlayer(paras)) {
        useBrowserPlayerControls(paras.divId);
    }



    var nowTime = 0;
    if(location.href.indexOf("https://")!==-1) {
        paras.isHttps = "true";
        livePlayerObjs.isHttps = "true";
    }



    //220204,提示信息
    if(isIPad() && !isIosDrmPlayer(paras) && showNoDrmMsg(paras)) {
        return;
    }

    //如果正在播前贴广告，就不创建回看播放器
    if(document.getElementById("adcalls_bar_" + paras.divId)) {
        return;
    }

    try{
        removeLiveErrorMsg(paras);

        if(document.getElementById("poster_"+paras.divId)) {
            removeLivePlayerPosterImg(paras);
        }

    } catch (e) {
        
    }

    if(livePlayerObjs && livePlayerObjs[paras.divId]) {
        clearInterval(livePlayerObjs[paras.divId].titleUpdateTimer);
        clearInterval(livePlayerObjs[paras.divId].loadingErrorTimer);
        clearInterval(livePlayerObjs[paras.divId].timeScopeTimer);
    }

    if(!(livePlayerObjs[paras.divId] && livePlayerObjs[paras.divId].video && livePlayerObjs[paras.divId].video.url && livePlayerObjs[paras.divId].video.url.length>3)) {
        return false;
    }


    var start = paras.start + "";
    var end = paras.end + "";


    if(start.length!== 10 && end.length!==10) {
        var startYear = start.substr(0, 4);
        var startMouth = start.substr(4, 2);
        var startDay = start.substr(6, 2);
        var startHour = start.substr(8, 2);
        var startMinute = start.substr(10, 2);
        var startSecond = "00";
        if(start.length === 14) {
            startSecond = start.substr(12, 2);
        }
        var startTimeStr = startYear + "-" + startMouth + "-" + startDay + " " + startHour + ":" + startMinute + ":" + startSecond;
        start = datetimeToUnix(startTimeStr);


        var endYear = end.substr(0, 4);
        var endMouth = end.substr(4, 2);
        var endDay = end.substr(6, 2);
        var endHour = end.substr(8, 2);
        var endMinute = end.substr(10, 2);
        var endSecond = "00";
        if(start.length === 14) {
            endSecond = start.substr(12, 2);
        }
        var endTimeStr = endYear + "-" + endMouth + "-" + endDay + " " + endHour + ":" + endMinute + ":" + endSecond;
        end = datetimeToUnix(endTimeStr);
    }


    //回看只允许7天以内的
    var isLiveBackHlsCreated = false;
    if(livePlayerObjs[paras.divId].flv5) {
        LazyLoad.js(livePlayerObjs[paras.divId].flv5, function(){
            isLiveBackHlsCreated = true;

            var isTimeAllowed = true;
            if(typeof currentLiveTimeData !=="undefined") {

                if(currentLiveTimeData && currentLiveTimeData.GT && currentLiveTimeData.GT>1000000000) {
                    nowTime = currentLiveTimeData.GT/1000;
                    if(nowTime-7*24*3600-start>0) {
                        isTimeAllowed = false;
                        destroyLivePlayer(paras.divId);
                        showLivePlayerMsg(paras, "该视频无法播放，请选择观看其他精彩视频");

                        if(!liveConvivaClient || !liveConvivaPlayerStateManager) {

                            initLiveConviva(paras);
                        }


                        setLiveConvivaMetadata(paras, "LIVEBACK_BEYOND_SCOPE");

                        setLiveWsMetadata(paras, "LIVEBACK_BEYOND_SCOPE");
                    }

                }


            }

            if(isTimeAllowed) {
                nowTime = Date.parse(new Date())/1000;
                if(nowTime-7*24*3600-start>0) {
                    isTimeAllowed = false;

                    destroyLivePlayer(paras.divId);
                    showLivePlayerMsg(paras, "由于播出安排变更，暂不支持播放该时段内容");

                    if(!liveConvivaClient || !liveConvivaPlayerStateManager) {

                        initLiveConviva(paras);
                    }


                    setLiveConvivaMetadata(paras, "LIVEBACK_BEYOND_SCOPE");

                    setLiveWsMetadata(paras, "LIVEBACK_BEYOND_SCOPE");
                }
            }

            if(isTimeAllowed) {
                startLoadLivebackPlayer(paras, start, end);
            }

        });
    } else{
        isLiveBackHlsCreated = true;
        startLoadLivebackPlayer(paras, start, end);
    }

    setTimeout(function () {
        if(!isLiveBackHlsCreated) {
            isLiveBackHlsCreated = true;
            startLoadLivebackPlayer(paras, start, end);
        }
    }, 6000);

}

function startLoadLivebackPlayer(paras, start, end) {

    livePlayerObjs[paras.divId].start = start;
    livePlayerObjs[paras.divId].end = end;

    livePlayerObjs[paras.divId].pointerStart = 0;
    livePlayerObjs[paras.divId].video.duration = end - start;


    var videoUrl = livePlayerObjs[paras.divId].video.url;
    if(!videoUrl || videoUrl.length<6) {
        return;
    }
    var startIndex = videoUrl.indexOf("?begintimeabs=");
    if(startIndex === -1) {
        startIndex = videoUrl.indexOf("&begintimeabs=");
    }

    if(startIndex > 0) {
        livePlayerObjs[paras.divId].video.url = videoUrl.substring(0, startIndex+1) + "begintimeabs="+start*1000+"&endtimeabs="+end*1000;
    } else{
        if(videoUrl.indexOf("?") > 0) {
            livePlayerObjs[paras.divId].video.url += "&begintimeabs="+start*1000+"&endtimeabs="+end*1000;
        } else{
            livePlayerObjs[paras.divId].video.url += "?begintimeabs="+start*1000+"&endtimeabs="+end*1000;
        }
    }

    livePlayerObjs[paras.divId].video.originalUrl = livePlayerObjs[paras.divId].video.url;

    //检查版权
    //对接口文档的新字段进行初始化；
    var vdn_tsp =new Date().getTime().toString().slice(0,10);
    var vdn_vn = "2049";
    var vdn_vc = "";
    var staticCheck = "47899B86370B879139C08EA3B5E88267";
    var vdn_uid = "";
    var vdn_wlan = "";
    //获取cookie
    if(typeof(getCookie_vdn)=="function"){
        if(!getCookie_vdn("Fingerprint")){
            //获取设备指纹信息
            if(typeof(getLivefingerprint2)=="function" && typeof(getLivefingerprint2)!="undefined" && !livePlayerObjs.isFingerprintJsLoading){
                getLivefingerprint2();
            }
        } else{
            vdn_uid = getCookie_vdn("Fingerprint");
        }
    }
    //md5加密  动态校验码
    var vdn_vc = setH5Str((vdn_tsp+vdn_vn+staticCheck+vdn_uid)).toUpperCase();


    var vdnUrl = "";
    if(paras.isHttps === "true") {
        vdnUrl = "https://";
    } else{
        vdnUrl = "http://";
    }

    if(paras.isLivebackBackupVdn) {
        vdnUrl += "vdn.live.cntv.cn/api2/liveTimeshiftHtml5.do";
    } else{
        vdnUrl += "vdn.live.cntv.cn/api2/liveTimeshiftHtml5.do";
    }
    vdnUrl += "?channel=pa://cctv_p2p_hd" + paras.t + "&client=html5&starttime=" + (start-0+10);
    vdnUrl += "&channel_id=" + paras.t + "&video_player=1";

    if(!isIPad()) {
        vdnUrl += "&im=0";
        vdnUrl.replace("&client=html5", "&client=flash");
    } else{
        vdnUrl += "&im=1";
    }

    //添加新字段
    vdnUrl += "&iflv=0&tsp="+vdn_tsp + "&vn="+ vdn_vn + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
    //vdnUrl += "&jsonp=liveAdCallsData";
    livePlayerObjs[paras.divId].isErrorDone = false;

    if(livePlayerObjs[paras.divId].vdnTimer !== undefined) {
        clearTimeout(livePlayerObjs[paras.divId].vdnTimer);
    }

    paras.timeScopeStart = start-0;


    paras.livebackVdnRetryNum++;
    loadLiveScript(vdnUrl, checkLivebackCopyright, paras, checkLivebackCopyrightWhenError, 10000);

    clearInterval(livePlayerObjs[paras.divId].canvasDrawTimer);

    if(liveConvivaClient && liveConvivaClient.cleanupSession && livePlayerObjs[paras.divId].convivaSessionKey!==undefined && (!Array.isArray(livePlayerObjs.adCallsAPI) || livePlayerObjs.adCallsAPI.length<1)) {
        liveConvivaClient.cleanupSession(livePlayerObjs[paras.divId].convivaSessionKey);
        livePlayerObjs[paras.divId].convivaSessionKey = undefined;
    }

    if(typeof LiveTileShow !== "undefined") {
        LiveTileShow.prototype.checkLoadingError(paras);
    }
}

function checkLivebackCopyrightWhenError(paras) {

    if(livePlayerObjs[paras.divId].isErrorDone) {
        return;
    }

    livePlayerObjs[paras.divId].isErrorDone = true;
    if(paras.t === "cctv1") {
        var obj = {};
        obj.ack = "yes";
        obj.status = "1"
        obj.public = "1";

        html5VideoData = JSON.stringify(obj);

        checkLivebackCopyright(paras);
    } else {
        /*20230713用备份域名重新处理*/
        if(paras.livebackVdnRetryNum-2 > 0) {
            showLivePlayerErrorMsg(paras);
        } else{
            paras.isLivebackBackupVdn = true;
            startLoadLivebackPlayer(paras, livePlayerObjs[paras.divId].start, livePlayerObjs[paras.divId].end)
        }


    }
}

function checkLivebackCopyright(paras) {
    livePlayerObjs[paras.divId].isErrorDone = true;
    if(livePlayerObjs[paras.divId].vdnTimer !== undefined) {
        clearTimeout(livePlayerObjs[paras.divId].vdnTimer);
    }

    var controlsBar = null;

    var obj = null;
    var publicMsg = "1";

    var errObj = null;
    var errStr = "";
    var canPlay = "";

    try{
        var obj = eval('(' + html5VideoData + ')');

        canPlay = obj.play;
        /*优先从vdn获取提示信息*/
        if(canPlay!== undefined && canPlay==="0") {
            publicMsg = "0";
            errStr = getLiveVdnTipMsg(obj.tip_msg);
        } else{
            publicMsg = "1";
        }
        /*优先从vdn获取提示信息结束*/

        if(canPlay === undefined) {
            errObj = liveCheckVdnReturnMsg(obj);
            if(typeof errObj==="object" && errObj) {
                errStr = errObj.msg;
                if(errStr) {
                    publicMsg = "0";
                    if(errStr.indexOf("听")>0) {
                        errStr = liveStatusMsg.public_0_default;
                    }
                }
            } else{
                errStr = "";
            }
        }

    } catch(e){
        errStr = "";
        publicMsg = "error";
    }

    if(publicMsg === "error") {
        livePlayerObjs[paras.divId].isErrorDone = false;
        checkLivebackCopyrightWhenError(paras)
        return;
    }

    //创建新的conviva session



    if(typeof errStr==="string" && errStr.length>1) {

        controlsBar = document.getElementById("control_bar_"+paras.divId);

        if(controlsBar) {
            document.getElementById(paras.divId).removeChild(controlsBar);
        }

        showLivePlayerMsg(paras, errStr);

        if(isUseConvivaMonitor) {
            createFlvHtml5ConvivaEvent(paras);
        }


    } else{
        livePlayerObjs[paras.divId].adCallsIsPlayed = false;

        //livePlayerObjs[paras.divId].video.url = "https://cctvcnch5c.v.wscdns.com/live/cctv1_2/index.m3u8?contentid=2820180516001&start=1567864620&end=1567864740";

        livePlayerObjs[paras.divId].isLive = false;

        if(document.getElementById("error_msg_"+paras.divId)) {
            document.getElementById(paras.divId).removeChild(document.getElementById("error_msg_"+paras.divId));
        }


        if(document.getElementById("h5player_"+paras.divId)) {
            if(isCanvasSupported(paras.divId)) {
                document.getElementById("h5player_"+paras.divId).style.display = "none";

                if(document.getElementById("h5canvas_"+paras.divId)) {
                    document.getElementById("h5canvas_"+paras.divId).style.display = "block";
                }
            } else{
                document.getElementById("h5player_"+paras.divId).style.display = "block";
            }

        }




        if(isLiveEs6Supported() && !isMobleUseBrowserUi) {
            controlsBar = document.getElementById("control_bar_"+paras.divId);

            if(!controlsBar && !isMobleUseBrowserUi) {
                //20200608,回看有版权控制时，不显示控制条

                var controls = new LiveControlsBar(paras);
            }

            if(isNewH5LivePlayer(paras) && !document.getElementById("player_progress_"+paras.divId)) {
                new LiveProgressBar(paras.divId);
                new LivePlayTimeShow(paras.divId, 75);
            } else{
                if(document.getElementById("player_progress_played_"+paras.divId)) {
                    document.getElementById("player_progress_played_"+paras.divId).style.width = "0%";
                    document.getElementById("player_progress_cached_"+paras.divId).style.width = "0%";
                    document.getElementById("player_progress_pointer_"+paras.divId).style.left = "-12px";
                }

                if(document.getElementById("played_time_timer_"+paras.divId)) {
                    document.getElementById("played_time_timer_"+paras.divId).innerHTML = "00:00";
                }
                if(document.getElementById("played_time_total_"+paras.divId)) {
                    document.getElementById("played_time_total_"+paras.divId).innerHTML = LivePlayTimeShow.prototype.formatTimeToStr(livePlayerObjs[paras.divId].video.duration)
                }

                LivePlayTimeShow.prototype.setPlayedTime(paras.divId, 0);
            }
        }



        if(paras.isAutoPlay==="true" && document.getElementById("h5player_"+paras.divId)) {
            document.getElementById("h5player_"+paras.divId).autoplay = true;
        }

        createH5LivePlayerElement(paras.divId);


        if(!isLiveEs6Supported()) {
            var player = document.getElementById("h5player_" + paras.divId);
            if(player) {
                if(isUseAliMonitor) {

                    if(typeof goldlog!="undefined" && goldlog["h5player_"+paras.divId] && typeof goldlog["h5player_"+paras.divId].heartbeatStarted!=="undefined") {
                        goldlog["h5player_"+paras.divId].heartbeatStarted = true;

                        if(!livePlayerObjs[paras.divId].aliInited) {
                            setCntvLiveMetadata(paras, "init");
                        }

                        setCntvLiveMetadata(paras);

                    } else{

                        setTimeout(function () {
                            setCntvLiveMetadata(paras);
                        }, 300);


                    }

                    livePlayerObjs[paras.divId].aliInited = false;
                }

                if(livePlayerObjs[paras.divId].video.url.indexOf("cdrm") > 0) {
                    showLivePlayerMsg(paras, "您当前的浏览器不支持播放，请升级浏览器或更换设备");
                } else{
                    player.controls = true;
                    player.src = livePlayerObjs[paras.divId].video.url;
                }

            }
        } else{
            createLiveHls(paras);

            if(typeof LiveTileShow !== "undefined") {
                LiveTileShow.prototype.checkLoadingError(paras);
            }
        }




        if(isUseAliMonitor) {
            if(typeof goldlog!="undefined" && goldlog["h5player_"+paras.divId] && typeof goldlog["h5player_"+paras.divId].heartbeatStarted!=="undefined") {
                goldlog["h5player_"+paras.divId].heartbeatStarted = true;
            }
        }


        /*根据播放过程中，根据版权时间范围再次检测版权*/
        if(paras.timeScopeStart && paras.timeScopeStart-1500000000) {
            paras.isLivebackNewDay = false; /*是否请求新一天的时间段版权接口*/
            var nowDate = new Date(paras.timeScopeStart*1000);
            var epgMonth = nowDate.getMonth() + 1 + "";
            if(epgMonth.length < 2) {
                epgMonth = "0" + epgMonth;
            }
            var epgDay = nowDate.getDate() + "";
            if(epgDay.length < 2) {
                epgDay = "0" + epgDay;
            }

            var fullYear = nowDate.getFullYear();


            livePlayerObjs[paras.divId].timeScope = null;
            var timeScopeDate = fullYear + "/" + epgMonth + "/" + epgDay;
            getTimescopeCopyrightData(paras, timeScopeDate);

            livePlayerObjs[paras.divId].timeScopeTimer = setInterval(function () {
                var player = document.getElementById("h5player_" + paras.divId);
                var errorMsg = document.getElementById("error_msg_"+paras.divId);
                if(errorMsg && errorMsg.style.display!=="none") {
                    clearInterval(livePlayerObjs[paras.divId].timeScopeTimer);
                } else{

                    var playedTime = 0;

                    if(player) {

                        playedTime = Math.ceil(player.currentTime);
                        var thisTimeStamp = paras.timeScopeStart+playedTime;

                        /*检查是否跨天，如果跨天，则把第二天的时机段加入*/
                        var thisDate = new Date(thisTimeStamp*1000);
                        var thisEpgDay = thisDate.getDate() + "";
                        if(thisEpgDay.length < 2) {
                            thisEpgDay = "0" + thisEpgDay;
                        }

                        if(thisEpgDay!==epgDay && !paras.isLivebackNewDay) {
                            paras.isLivebackNewDay = true;
                            epgDay = thisEpgDay;
                            epgMonth = thisDate.getMonth() + 1 + "";
                            if(epgMonth.length < 2) {
                                epgMonth = "0" + epgMonth;
                            }

                            if(epgDay.length < 2) {
                                epgDay = "0" + epgDay;
                            }

                            fullYear = thisDate.getFullYear();
                            timeScopeDate = fullYear + "/" + epgMonth + "/" + epgDay;

                            getTimescopeCopyrightData(paras, timeScopeDate);

                        }

                        LiveTimeshiftBar.prototype.checkCopyright(paras, thisTimeStamp);
                    }

                }
            }, 1000);
        }


    }




}

function getTimescopeCopyrightData(paras, timeScopeDate) {
    var timeScopeUrl = "http://cbox.cntv.cn/epg/ctlist/" + timeScopeDate + "/" + paras.t + ".json";
    if(paras.isHttps === "true") {
        timeScopeUrl = timeScopeUrl.replace("http://", "https://");
    }
    doLoadLiveDataByAjax(timeScopeUrl, "", LiveTimeshiftBar.prototype.getCopyrightDataByTimeScope, paras, null, 0, null, null, "timeScope");

}

function getHtml5VideoData() {

}

function datetimeToUnix(datetime) {
    var tmp_datetime = datetime.replace(/:/g, '-');
    tmp_datetime = tmp_datetime.replace(/ /g, '-');
    var arr = tmp_datetime.split("-");
    var now = new Date(Date.UTC(arr[0], arr[1] - 1, arr[2], arr[3] - 8, arr[4], arr[5]));
    return parseInt(now.getTime() / 1000);
}

function getStartLevel(levels, defaultStream) {
    var defaultBitrate = 0;
    var len = levels.length;
    var min = 6000000;
    var startLevel = 1;
    switch (defaultStream) {
        case "lowChapters":
            defaultBitrate = 200000;
            break;
        case "chapters":
            defaultBitrate = 450000;
            break;
        case "chapters2":
            defaultBitrate = 850000;
            break;
        case "chapters3":
            defaultBitrate = 1200000;
            break;
        case "chapters4":
            defaultBitrate = 2000000;
            break;
        case "chapters5":
            defaultBitrate = 4000000;
            break;
        case "chapters6":
            defaultBitrate = 6000000;
            break;
    }

    for(var i=0; i<len; i++) {
        if(Math.abs(levels[i].bitrate - defaultBitrate) < min) {
            min = Math.abs(levels[i].bitrate - defaultBitrate);
            startLevel = i;
        }
    }
    return startLevel;
}

function destroyH5LiveFlv(paras) {
    try{
        livePlayerObjs[paras.divId].flvPlayer.pause();
        livePlayerObjs[paras.divId].flvPlayer.unload();
        livePlayerObjs[paras.divId].flvPlayer.detachMediaElement();
        livePlayerObjs[paras.divId].flvPlayer.destroy();
        livePlayerObjs[paras.divId].flvPlayer = null;

    } catch (e) {
    }

}

function destroyH5LiveHls(paras, isCopyrightCheck) {


    if(livePlayerObjs[paras.divId]) {
        /*重新请求，清空cdncip和cdnsip*/
        livePlayerObjs[paras.divId].cdncip = "";
        livePlayerObjs[paras.divId].cdnsip = "";
        livePlayerObjs[paras.divId].updateTime = 0;

        livePlayerObjs[paras.divId].isPausedBecauseMuted = false;
    }

    if(livePlayerObjs[paras.divId].adCallsVideo && livePlayerObjs[paras.divId].adCallsVideo.hls) {
        livePlayerObjs[paras.divId].adCallsVideo.hls.destroy();
        livePlayerObjs[paras.divId].adCallsVideo.hls.detachMedia();

        livePlayerObjs[paras.divId].adCallsVideo.hls = null;


    }

    if(livePlayerObjs[paras.divId].video && livePlayerObjs[paras.divId].video.hls && livePlayerObjs[paras.divId].video.hls.destroy) {
        livePlayerObjs[paras.divId].video.hls.destroy();
        livePlayerObjs[paras.divId].video.hls.detachMedia();
        livePlayerObjs[paras.divId].video.hls = null;

    }

    //销毁flv播放器
    if(livePlayerObjs[paras.divId].flvPlayer) {
        destroyH5LiveFlv(paras)
    }

    //clearInterval(livePlayerObjs[paras.divId].liveTimer);


    if(liveConvivaClient && liveConvivaClient.cleanupSession && livePlayerObjs[paras.divId].convivaSessionKey!==undefined && (!Array.isArray(livePlayerObjs.adCallsAPI) || livePlayerObjs.adCallsAPI.length<1)) {

        liveConvivaClient.cleanupSession(livePlayerObjs[paras.divId].convivaSessionKey);
        livePlayerObjs[paras.divId].convivaSessionKey = undefined;

    }


    if(isUseWsMonitor) {
        if(typeof dataCollector !== "undefined") {
            dataCollector.destroySession(paras.divId);
        }
    }


    if(isUseAliMonitor) {
        if(typeof goldlog!="undefined" && goldlog["h5player_"+paras.divId] && typeof goldlog["h5player_"+paras.divId].heartbeatStarted!=="undefined") {
            goldlog["h5player_"+paras.divId].heartbeatStarted = false;
        }
    }


    clearTimeout(livePlayerObjs[paras.divId].checkCopyrightTimer);
    livePlayerObjs[paras.divId].checkCopyrightTimer = null;

    var adPauseContainer = document.getElementById("adpause_"+paras.divId);
    if(adPauseContainer && Array.isArray(livePlayerObjs.adPauseAPI) && livePlayerObjs.adPauseAPI.length>0) {
        LiveAdPause.prototype.adPauseShowOrHide(paras, "hide");
    }


    var adBannerContainer = document.getElementById("adbanner_"+paras.divId);
    if(adBannerContainer && Array.isArray(livePlayerObjs.adBannerAPI) && livePlayerObjs.adBannerAPI.length>0) {
        LiveAdBanner.prototype.adBannerShowOrHide(paras, "hide");
    }

    if(livePlayerObjs && livePlayerObjs[paras.divId] && !isCopyrightCheck) {
        clearInterval(livePlayerObjs[paras.divId].titleUpdateTimer);
        clearInterval(livePlayerObjs[paras.divId].loadingErrorTimer);
    }




    if(livePlayerObjs && livePlayerObjs[paras.divId]) {
        livePlayerObjs[paras.divId].loadingTime = 0;

        clearInterval(livePlayerObjs[paras.divId].checkP2pSdkLoaded);
    }

    if(typeof destroyLiveIosP2pSDK !== "undefined") {
        destroyLiveIosP2pSDK();
    }

}


function destroyLivePlayer(divId) {
    var canvas = document.getElementById("h5canvas_"+divId);
    var video = document.getElementById("h5player_"+divId);

    if(canvas) {
        document.getElementById(divId).removeChild(canvas);
        clearInterval(livePlayerObjs[divId].canvasDrawTimer);
    }
    if(video) {

        try{
            document.body.removeChild(video);
        } catch (e) {
            document.getElementById(divId).removeChild(video);

        }

    }



    if(livePlayerObjs[divId] && !livePlayerObjs[divId].isOldH5player) {
        destroyH5LiveHls({divId: divId});
    }


    if(document.getElementById(divId)) {
        document.getElementById(divId).innerHTML = "";
    }


    if(liveConvivaClient && liveConvivaClient.cleanupSession && livePlayerObjs[divId].convivaSessionKey!==undefined && (!Array.isArray(livePlayerObjs.adCallsAPI) || livePlayerObjs.adCallsAPI.length<1)) {
        try {
            liveConvivaClient.cleanupSession(livePlayerObjs[divId].convivaSessionKey);
            livePlayerObjs[divId].convivaSessionKey = undefined;
        } catch (e) {

        }

    }


    if(typeof goldlog!="undefined" && goldlog["h5player_"+divId] && typeof goldlog["h5player_"+divId].heartbeatStarted!=="undefined") {
        goldlog["h5player_"+divId].heartbeatStarted = false;
        goldlog["h5player_"+divId].isBindedEvents = false;
    }



    //hds直播清除session
    if(typeof(convivaClient)!=="undefined" && typeof(convivaSessionKey)!=="undefined" && convivaClient) {

        convivaClient.cleanupSession(convivaSessionKey);
    }

    //flv直播清除session
    if(typeof(flvConvivaClient)!=="undefined" && typeof(flvSessionKey)!=="undefined" && flvConvivaClient) {
        flvConvivaClient.cleanupSession(flvSessionKey);
    }




}



function playLiveVideo(paras) {

    if(document.getElementById("adcalls_bar_" + paras.divId)) {
        document.getElementById(paras.divId).removeChild(document.getElementById("adcalls_bar_" + paras.divId));
    }

    //广告播放结束后，就不再播广告，除非刷新页面
    if(livePlayerObjs[paras.divId].adCallsIsPlayed) {
        return;
    }

    livePlayerObjs[paras.divId].adCallsIsPlayed = true;
    clearInterval(livePlayerObjs[paras.divId].adCallsRemainingTimer);
    clearInterval(livePlayerObjs[paras.divId].adCallsErrorTimer);
    clearInterval(livePlayerObjs[paras.divId].adCallsErrorTotalTimer);
    clearInterval(livePlayerObjs[paras.divId].adCallsCanPlayTimer);

    destroyH5LiveHls(paras);

    try{
        if(typeof goldlog!="undefined" && goldlog["h5player_"+paras.divId] && typeof goldlog["h5player_"+paras.divId].heartbeatStarted!=="undefined") {
            goldlog["h5player_"+paras.divId].heartbeatStarted = false;
            goldlog["h5player_"+paras.divId].isBindedEvents = false;
        }

    } catch (e) {
        
    }

    if(document.getElementById("loading_"+paras.divId)) {
        document.getElementById("loading_"+paras.divId).style.display = "block";
    }

    var isLiveHlsCreated = false;

    if(livePlayerObjs[paras.divId].flv5) {
        LazyLoad.js(livePlayerObjs[paras.divId].flv5, function(){
            isLiveHlsCreated = true;
            createLiveHls(paras);
        });
    } else{
        isLiveHlsCreated = true;
        createLiveHls(paras);
    }

    setTimeout(function () {
        if(!isLiveHlsCreated) {
            isLiveHlsCreated = true;
            createLiveHls(paras);
        }
    }, 6000);



    if(isUseConvivaMonitor && livePlayerObjs[paras.divId].convivaSessionCreated && Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length>0) {

        liveConvivaClient.adEnd(livePlayerObjs[paras.divId].convivaSessionKey);

    }




    //adBanner
    livePlayerObjs[paras.divId].adBannerIsShow = false;
    if(!livePlayerObjs[paras.divId].adBannerGetting && !livePlayerObjs[paras.divId].adBannerPlayed && livePlayerObjs[paras.divId].adBanner && livePlayerObjs[paras.divId].adBanner.length>3 && livePlayerObjs[paras.divId].vdn.public==="1") {
        setTimeout(function () {

            livePlayerObjs[paras.divId].adBannerGetting = true;

            loadLiveScript(livePlayerObjs[paras.divId].adBanner, parseLiveAdBannerDataFromApi, paras, parseLiveAdBannerDataFromApiWhenError, 100);

            if(livePlayerObjs[paras.divId].adBannerGetting) {
                parseLiveAdBannerDataFromApi(paras);
            }

        }, 60*1000);

    }





}


function createLiveVideoLoadingImg(paras) {
    if(isMobleUseBrowserUi) {
        return;
    }

    var htmls = "";
    var loadingImg = "https://player.cntv.cn/html5Player/images/cctv_html5player_loading.gif";


    if(location.href.indexOf("fromapp=cctvnews")>0) {
        loadingImg = "https://player.cntv.cn/html5Player/images/20190905/cctvnews_loading.gif";
    }


    if(typeof calledByApp !== "undefined") {
        if(calledByApp === "cctvnews") {
            loadingImg = "https://player.cntv.cn/html5Player/images/20190905/cctvnews_loading.gif";
        }

    }


    htmls = '<div id="loading_' + paras.divId + '" style="position:absolute;top:42%;margin:0 auto;text-align:center;width:100%;height:42px;cursor:pointer;z-index:20;display:none;">';
    htmls += '<img src="' + loadingImg +'" style="width:120px;height:42px;display:inline-block;">';
    htmls += '</div>';

    document.getElementById(paras.divId).insertAdjacentHTML("afterBegin", htmls);
}


function getLiveAdCallsData(data) {

    if(typeof data === "object" && data.divId && !livePlayerObjs.adcallsVdnIsGeted) {

        livePlayerObjs.adCallsPlayingNum += 1;
        getLiveAdCallsDataFromVdn(data, livePlayerObjs.adCallsPlayingNum);
    }

}

function getLiveAdCallsDataFromVdn(data, adNum) {

    if(!Array.isArray(livePlayerObjs.adCallsAPI) || livePlayerObjs.adCallsPlayingNum-livePlayerObjs.adCallsAPI.length>=0 || data.divId && livePlayerObjs[data.divId].adCallsIsPlayed) {
        var video = document.getElementById("h5player_" + data.divId);
        if(video) {
            //如果广告静音，则正片不让静音
            video.muted = false;
        }

        playLiveVideo(data);
        return;
    }

    livePlayerObjs.adcallsVdnIsGeted = false;

    var adSdks = null;
    if(livePlayerObjs.adCallsAPI[adNum]) {
        adSdks = livePlayerObjs.adCallsAPI[adNum].sdks
    }

    if(adSdks && Array.isArray(adSdks)) {
        if(adSdks.length < 1 || (typeof getAdDataFromOutside==="undefined")) {
            getLiveAdCallsData(data);
        } else{
            parseLiveAdCallsDataFromVdn(data);

            /*发送曝光信息给广告后台*/
            var adImpression = livePlayerObjs.adCallsAPI[adNum].impression;
            if(adImpression) {
                var impressionLen = adImpression.length;
                var impressionUrl = "";
                for(var imNum=0; imNum<impressionLen; imNum++) {
                    impressionUrl = adImpression[imNum];
                    if(impressionUrl) {
                        getApiByImage(impressionUrl);
                    }

                }
            }
        }
        return;
    }


    

    if(!livePlayerObjs.adCallsAPI[adNum] || !livePlayerObjs.adCallsAPI[adNum].guid) {
        getLiveAdCallsData(data);
        return;
    }


    //对接口文档的新字段进行初始化；
    var vdn_tsp =new Date().getTime().toString().slice(0,10);
    var vdn_vn = "2049";
    var vdn_vc = "";
    var staticCheck = "47899B86370B879139C08EA3B5E88267";
    var vdn_uid = "";
    var vdn_wlan = "";



    //获取cookie
    if(typeof(getCookie_vdn)=="function"){
        if(!getCookie_vdn("Fingerprint")){
            //获取设备指纹信息
            if(typeof(getLivefingerprint2)=="function" && typeof(getLivefingerprint2)!="undefined" && !livePlayerObjs.isFingerprintJsLoading){
                getLivefingerprint2();
            }
        } else{
            vdn_uid = getCookie_vdn("Fingerprint");
        }
    }
    //md5加密  动态校验码
    var vdn_vc = setH5Str((vdn_tsp+vdn_vn+staticCheck+vdn_uid)).toUpperCase();


    var vdnUrl = "http://vdn.apps.cntv.cn/api/getIpadInfoAd.do?pid=" + livePlayerObjs.adCallsAPI[adNum].guid + "&tai=ipad&client=html5";

    if(livePlayerObjs.isHttps === "true") {
        vdnUrl = "https://vdn.apps.cntv.cn/api/getIpadInfoAd.do?pid=" + livePlayerObjs.adCallsAPI[adNum].guid + "&tai=ipad&client=html5";
    }


    if(isIPad()) {
        vdnUrl += "&im=1";
    } else{
        vdnUrl += "&im=0";
    }

    //添加新字段
    vdnUrl += "&tsp="+vdn_tsp + "&vn="+ vdn_vn + "&vc="+vdn_vc + "&uid="+vdn_uid + "&wlan="+vdn_wlan;
    vdnUrl += "&jsonp=liveAdCallsData";

    loadLiveScript(vdnUrl, parseLiveAdCallsDataFromVdn, data, getLiveAdCallsData, 12000);

    livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].loadTime = 0;
    livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].cdnCode = "";
    if(isUseAliMonitor) {
        sendLiveAliAdCallsRequestData(data, "play.1.40");
    }



    //请求前贴广告接口
    if(typeof livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure==="string" && livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure.indexOf("http")!==-1) {
        var exposureUrl = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure;
        //解决不同联曝光地址相同时，火狐浏览器只发送一次问题。
        //exposureUrl += exposureUrl.indexOf("?")>0 ? "&" : "?";
        //exposureUrl +=  "exposure_num=" + livePlayerObjs.adCallsPlayingNum;
        getApiByImage(exposureUrl);
    }


    if(typeof livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure1==="string" && livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure1.indexOf("http")!==-1) {
        var exposureUrl = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].eventExposure1;
        //exposureUrl += exposureUrl.indexOf("?")>0 ? "&" : "?";
        //exposureUrl +=  "exposure1_num=" + livePlayerObjs.adCallsPlayingNum;
        getApiByImage(exposureUrl);
    }


    if(typeof livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startcount==="string" && livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startcount.indexOf("http")!==-1) {
        var exposureUrl = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startcount;
        //exposureUrl += exposureUrl.indexOf("?")>0 ? "&" : "?";
        //exposureUrl +=  "startcoun_num=" + livePlayerObjs.adCallsPlayingNum;
        getApiByImage(exposureUrl);
    }

}

function returnAdcallsDataFromOutsideWhenError(adType, errorMsg, cbErrorData) {
    var num = livePlayerObjs.outsideAdcallsNum;
    if(livePlayerObjs.adCallsAPI[num]) {
        livePlayerObjs.adCallsAPI[num].sdks = null;
        livePlayerObjs.adCallsAPI[num].guid = "";
        livePlayerObjs.adCallsAPI[num].url = "";
        livePlayerObjs.adCallsAPI[num].duration = 0;
        livePlayerObjs.adCallsAPI[num].clickUrl = "";
    }
    parseLiveAdCallsDataFromApi(cbErrorData);
}

function returnAdcallsDataFromOutside(adType, data, cbData) {
    var adCallsData = eval('(' + data + ')');
    var num = livePlayerObjs.outsideAdcallsNum;

    if(!adCallsData || !adCallsData.url) {
        if(livePlayerObjs.adCallsAPI[num]) {
            livePlayerObjs.adCallsAPI[num].sdks = null;
            livePlayerObjs.adCallsAPI[num].guid = "";
            livePlayerObjs.adCallsAPI[num].url = "";
            livePlayerObjs.adCallsAPI[num].duration = 0;
            livePlayerObjs.adCallsAPI[num].clickUrl = "";
            livePlayerObjs.adCallsAPI[num].monitor = null;
            livePlayerObjs.adCallsAPI[num].impression = null;
        }
    } else{
        if(livePlayerObjs.adCallsAPI[num]) {
            livePlayerObjs.adCallsAPI[num].guid = "";
            livePlayerObjs.adCallsAPI[num].url = adCallsData.url;
            livePlayerObjs.adCallsAPI[num].duration = (adCallsData.duration-0>0) ? (adCallsData.duration-0) : 15;
            livePlayerObjs.adCallsAPI[num].clickUrl = adCallsData.clickUrl ? adCallsData.clickUrl : "";
            livePlayerObjs.adCallsAPI[num].eventExposure = adCallsData.eventExposure;
            livePlayerObjs.adCallsAPI[num].eventExposure1 = adCallsData.eventExposure1;
            livePlayerObjs.adCallsAPI[num].startcount = adCallsData.startcount;
            livePlayerObjs.adCallsAPI[num].monitorTime = adCallsData.monitorTime;
            livePlayerObjs.adCallsAPI[num].middlecount = adCallsData.middlecount;
            livePlayerObjs.adCallsAPI[num].monitor = adCallsData.monitor;
            livePlayerObjs.adCallsAPI[num].impression = adCallsData.impression;
        }
    }

    parseLiveAdCallsDataFromApi(cbData);

}

/*发送广告的点击信息给广告后台*/
function sendLiveMonitorMsg (data) {
    var adMonitor = data;
    if(adMonitor) {
        var isMacSafari = /macintosh|mac os x/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent);
        var isFirefox = /firefox/i.test(navigator.userAgent);
        var specialBrowsers = isMacSafari || isFirefox;
        var monitorLen = adMonitor.length;
        var monitorUrl = "";
        for(var imNum=0; imNum<monitorLen; imNum++) {
            monitorUrl = adMonitor[imNum];
            if(monitorUrl) {
                if(specialBrowsers) {
                    var clickTm = Date.now();
                    if(monitorUrl.indexOf("?") > 0) {
                        monitorUrl += "&clickTm=" + clickTm;
                    } else{
                        monitorUrl += "?clickTm=" + clickTm;
                    }
                }
                getApiByImage(monitorUrl);
            }

        }
    }

}


function getApiByImage(url) {
    var img = new Image();
    img.style.display = "none";
    img.src = url;
}

function parseLiveAdCallsDataFromVdn(paras) {

    var title = "";
    var videoUrl = "";
    var defaultStream = "";
    var duration = 15;
    var cdnCode = "";
    var obj = null;

    livePlayerObjs.adcallsVdnIsGeted = true;

    try{
        var obj = null;
        var adSdks = null;
        if(livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum]) {
            adSdks = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].sdks;
        }



        if(adSdks) {
            obj = {};
            obj["public"] = 1;
            videoUrl = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].url;
            title = "";
            defaultStream = "";
            cdnCode = "";
        } else{
            obj = eval('(' + liveAdCallsData + ')');
            videoUrl = obj["hls_url"];
            title = obj["title"] ? obj["title"] : "";
            defaultStream = obj["default_stream"];
            cdnCode = obj["hls_cdn_info"]["cdn_code"];
        }

    } catch(e){
        title = "error";
    }



    if(title==="error" || videoUrl.length<3 || obj["public"]!=1 || (livePlayerObjs.adCallsPlayingNum-livePlayerObjs.adCallsAPI.length>=0)) {

        livePlayerObjs.adCallsPlayingNum += 1;
        getLiveAdCallsDataFromVdn(paras, livePlayerObjs.adCallsPlayingNum);
    } else {

        livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].title = title;
        livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].hlsUrl = videoUrl;
        livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].defaultStream = defaultStream;
        //livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].duration = duration;
        livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].cdnCode = cdnCode;

        playLiveAdCalls(paras);


        //如果两倍该片广告时间没播完，就直接播下一条。
        var adNum = livePlayerObjs.adCallsPlayingNum;
        if(livePlayerObjs.adCallsAPI[adNum].duration) {
            var nowAdDuration = parseInt(livePlayerObjs.adCallsAPI[adNum].duration);

            if(nowAdDuration > 0) {
                if(nowAdDuration<5) {
                    nowAdDuration = 5;
                } else if(nowAdDuration<20){
                    nowAdDuration = parseInt(nowAdDuration*0.9);
                } else{
                    nowAdDuration = parseInt(nowAdDuration*0.8);
                }

                //为了关闭广告的处理，把timeout改为interval
                clearInterval(livePlayerObjs[paras.divId].adCallsErrorTimer);
                var checkTimer = 0;
                var doChecked = false;
                livePlayerObjs[paras.divId].adCallsErrorTimer = setInterval(function () {
                    if(!livePlayerObjs[paras.divId].isClosingAdcalls) {
                        checkTimer++;
                    }

                    if(checkTimer-nowAdDuration*2 >= 0) {
                        clearInterval(livePlayerObjs[paras.divId].adCallsErrorTimer);
                    }
                    if(!doChecked&&adNum==livePlayerObjs.adCallsPlayingNum&&!livePlayerObjs[paras.divId].isHidden&&checkTimer===nowAdDuration*2*1000&&!livePlayerObjs[paras.divId].isClosingAdcalls) {
                        doChecked = true;
                        playNextLiveAdCalls(paras);
                    }

                }, 1000);
            }

        }


    }



}

function parseLiveAdCallsDataFromApi(data) {

    if(data && !data.divId) {
        var len = 0;
        if(Array.isArray(data)) {
            len = data.length;
        }

        livePlayerObjs.adCallsAPI = [];
        livePlayerObjs.outsideAdcalls = [];
        for(var i=0; i<len; i++){

            if(data[i].guid || data[i].sdks && Array.isArray(data[i].sdks)) {
                livePlayerObjs.adCallsAPI[i] = {};
                livePlayerObjs.adCallsAPI[i].guid = data[i].guid;
                livePlayerObjs.adCallsAPI[i].duration = (data[i].duration-0>0) ? (data[i].duration-0) : 15;
                livePlayerObjs.adCallsAPI[i].clickUrl = data[i].clickUrl ? data[i].clickUrl : "";
                livePlayerObjs.adCallsAPI[i].eventExposure = data[i].eventExposure;
                livePlayerObjs.adCallsAPI[i].eventExposure1 = data[i].eventExposure1;
                livePlayerObjs.adCallsAPI[i].startcount = data[i].startcount;
                livePlayerObjs.adCallsAPI[i].monitorTime = data[i].monitorTime;
                livePlayerObjs.adCallsAPI[i].middlecount = data[i].middlecount;
                livePlayerObjs.adCallsAPI[i].monitor = data[i].monitor;
                livePlayerObjs.adCallsAPI[i].impression = data[i].impression;

                if(data[i].sdks && Array.isArray(data[i].sdks)) {
                    livePlayerObjs.outsideAdcalls.push(i)
                    livePlayerObjs.adCallsAPI[i].sdks = data[i].sdks;
                }


            }


        }

        if(Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length<1) {
            livePlayerObjs.adCallsAPI = "";
        }



    } else if(Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length>0){

        setLiveConvivaMetadata(data);
        setLiveWsMetadata(data);

        if(Array.isArray(livePlayerObjs.outsideAdcalls) && livePlayerObjs.outsideAdcalls.length>0) {

            livePlayerObjs.outsideAdcallsGetEnd = false;
            livePlayerObjs.outsideAdcallsNum = livePlayerObjs.outsideAdcalls.pop();
            var adSdks = null;
            if(livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum]) {
                adSdks = livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].sdks;
            }
            if(adSdks && Array.isArray(adSdks)) {
                if(adSdks.length < 1 || (typeof getAdDataFromOutside==="undefined")) {

                    if(livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum]) {
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].sdks = null;
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].guid = "";
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].url = "";
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].duration = 0;
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].clickUrl = "";

                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].monitor = null;
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].impression = null;
                    }
                    parseLiveAdCallsDataFromApi(data);
                } else{
                    getAdDataFromOutside("calls", adSdks, returnAdcallsDataFromOutside, data, returnAdcallsDataFromOutsideWhenError, data);
                }

            }

            /*请求不到接口时的超时处理*/
            livePlayerObjs.getOutsideAdcallsTimer = setTimeout(function () {
                if(!livePlayerObjs.outsideAdcallsGetEnd) {
                    if(livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum]) {
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].sdks = null;
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].guid = "";
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].url = "";
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].duration = 0;
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].clickUrl = "";

                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].monitor = null;
                        livePlayerObjs.adCallsAPI[livePlayerObjs.outsideAdcallsNum].impression = null;
                    }
                    parseLiveAdCallsDataFromApi(data);
                }

            }, 10000);

            return;
        }




        livePlayerObjs.outsideAdcallsGetEnd = true;
        livePlayerObjs.adCallsPlayingNum = 0;
        getLiveAdCallsDataFromVdn(data, livePlayerObjs.adCallsPlayingNum);

        if(livePlayerObjs.getOutsideAdcallsTimer !== undefined) {
            clearTimeout(livePlayerObjs.getOutsideAdcallsTimer);
        }

        //获取公告总时长
        livePlayerObjs.adCallsAPI.totalLength = 0;
        for(var j=0; j<livePlayerObjs.adCallsAPI.length; j++) {
            if(livePlayerObjs.adCallsAPI[j] && livePlayerObjs.adCallsAPI[j].duration>0) {
                livePlayerObjs.adCallsAPI.totalLength += (livePlayerObjs.adCallsAPI[j].duration-0);
            }

        }

        //如果在广告预期的2倍时间内广告没播完，就直接播视频
        if(livePlayerObjs.adCallsAPI.totalLength-0 > 0) {

            //为了关闭广告的处理，把timeout改为interval。为了兼容关闭广告功能，把timeout定时改为interval
            clearInterval(livePlayerObjs[data.divId].adCallsErrorTotalTimer);
            var checkTimer = 0;
            var doChecked = false;
            livePlayerObjs[data.divId].adCallsErrorTotalTimer = setInterval(function () {
                if(!livePlayerObjs[data.divId].isClosingAdcalls) {
                    checkTimer++;
                }

                if(checkTimer-livePlayerObjs.adCallsAPI.totalLength*2 >= 0) {
                    clearInterval(livePlayerObjs[data.divId].adCallsErrorTotalTimer);
                }
                if(!doChecked&&!livePlayerObjs[data.divId].adCallsIsPlayed && !livePlayerObjs[data.divId].isClosingAdcalls && (checkTimer-livePlayerObjs.adCallsAPI.totalLength*2===0)) {
                    doChecked = true;
                    livePlayerObjs.adCallsAPI = "";
                    livePlayerObjs.adCalls = "";
                    playLiveVideo(data);
                }

            }, 1000);
        }

    } else{
        livePlayerObjs.adCallsAPI = "";
        playLiveVideo(data);
    }
}

function parseLiveAdCallsDataFromApiWhenError(paras) {
    /*230724,添加adCallsAPI===""解决有广告参数时重复创建回看问题*/
    if(livePlayerObjs.adCallsAPI && Array.isArray(livePlayerObjs.adCallsAPI) && livePlayerObjs.adCallsAPI.length>0 || livePlayerObjs.adCallsAPI==="") {
        return;
    }

    playLiveVideo(paras);


}


function playNextLiveAdCalls(paras, ev) {
    var e = ev ? ev : window.event;

    //兼容一进视频还没播就抛出error事件
    if(!livePlayerObjs[paras.divId].adCallsIsPlayed) {
        if(document.getElementById("h5player_" + paras.divId).currentTime<3 && e && e.type==="ended") {

            return;
        }


        if(isUseAliMonitor) {
            sendLiveAliAdCallsRequestData(paras, "play.1.43");
        }

        livePlayerObjs.adCallsPlayingNum += 1;
        getLiveAdCallsDataFromVdn(paras, livePlayerObjs.adCallsPlayingNum);



    }

}

function playLiveAdCalls(paras) {


    destroyH5LiveHls(paras);




    if(isLiveHlsJsSupported()) {
        //worker初始化成功，才能播放广告
        if(moduleInitialized) {
            createAdCallsLiveHls(paras);
        } else{

            clearInterval(livePlayerObjs[paras.divId].adCallsCanPlayTimer);
            var checkTimer = 0;
            var doChecked = false;
            livePlayerObjs[paras.divId].adCallsCanPlayTimer = setInterval(function () {
                checkTimer += 100;
                if(!doChecked && (checkTimer-6000 >= 0 || moduleInitialized)) {
                    doChecked = true;
                    clearInterval(livePlayerObjs[paras.divId].adCallsCanPlayTimer);
                    createAdCallsLiveHls(paras);
                }

            }, 100);

        }

    } else{
        createAdCallsLiveHls(paras);
    }



    livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startLoad = Date.parse(new Date());

    if(livePlayerObjs.adCallsPlayingNum===0 && isUseConvivaMonitor) {
        if(livePlayerObjs[paras.divId].convivaSessionCreated) {

            liveConvivaClient.adStart(livePlayerObjs[paras.divId].convivaSessionKey, Conviva.Client.AdStream.SEPARATE, Conviva.Client.AdPlayer.SEPARATE, Conviva.Client.AdPosition.PREROLL);

        } else{
            setTimeout(function () {
                if(livePlayerObjs[paras.divId].convivaSessionCreated) {
                    liveConvivaClient.adStart(livePlayerObjs[paras.divId].convivaSessionKey, Conviva.Client.AdStream.SEPARATE, Conviva.Client.AdPlayer.SEPARATE, Conviva.Client.AdPosition.PREROLL);
                }
            }, 400);
        }

    }

    livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].loadTime = 0;
    if(isUseAliMonitor) {
        sendLiveAliAdCallsRequestData(paras, "play.1.41");
    }


}

//adPause
function returnAdPauseDataFromOutsideWhenError(adType, errorMsg, cbErrorData) {

}

function returnAdPauseDataFromOutside(adType, data, cbData) {
    var adPauseData = eval('(' + data + ')');
    if(!adPauseData || !adPauseData.url) {
        returnAdPauseDataFromOutsideWhenError("pause", "empty", cbData);
    } else{
        var num = livePlayerObjs[cbData.divId].adPauseNum;

        if(livePlayerObjs.adPauseAPI[num]) {
            livePlayerObjs.adPauseAPI[num].url = adPauseData.url;
            livePlayerObjs.adPauseAPI[num].clickUrl = adPauseData.clickUrl ? adPauseData.clickUrl : "";
            livePlayerObjs.adPauseAPI[num].eventExposure = adPauseData.eventExposure;
            livePlayerObjs.adPauseAPI[num].eventExposure1 = adPauseData.eventExposure1;
            livePlayerObjs.adPauseAPI[num].monitor = adPauseData.monitor;
            livePlayerObjs.adPauseAPI[num].impression = adPauseData.impression;
            livePlayerObjs.adPauseAPI[num].sdks = null;

            LiveAdPause.prototype.parseLiveAdPauseDataFromApi(cbData);

            /*发送曝光信息给广告后台*/
            var adImpression = adPauseData.impression;
            if(adImpression) {
                var impressionLen = adImpression.length;
                var impressionUrl = "";
                for(var imNum=0; imNum<impressionLen; imNum++) {
                    impressionUrl = adImpression[imNum];
                    if(impressionUrl) {
                        getApiByImage(impressionUrl);
                    }

                }
            }
        }


    }

}


//adBanner
function parseLiveAdBannerDataFromApi(data) {
    if(data && !data.divId) {
        var len = 0;
        if(Array.isArray(data)) {
            len = data.length;
        }


        livePlayerObjs.adBannerAPI = [];
        for(var i=0; i<len; i++){

            if(data[i].url && (data[i].url.indexOf(".mp4")>0||data[i].url.indexOf(".m3u8")>0)) {
                continue;
            }

            if(data[i].url || data[i].sdks && Array.isArray(data[i].sdks)) {
                livePlayerObjs.adBannerAPI[i] = {};
                livePlayerObjs.adBannerAPI[i].url = data[i].url;
                livePlayerObjs.adBannerAPI[i].clickUrl = data[i].clickUrl ? data[i].clickUrl : "";

                livePlayerObjs.adBannerAPI[i].eventExposure = data[i].eventExposure;
                livePlayerObjs.adBannerAPI[i].eventExposure1 = data[i].eventExposure1;

                livePlayerObjs.adBannerAPI[i].monitor = data[i].monitor;
                livePlayerObjs.adBannerAPI[i].impression = data[i].impression;

                if(data[i].sdks && Array.isArray(data[i].sdks)) {
                    livePlayerObjs.adBannerAPI[i].sdks = data[i].sdks;
                }

            }


        }

        if(Array.isArray(livePlayerObjs.adBannerAPI) && livePlayerObjs.adBannerAPI.length<1) {
            livePlayerObjs.adBannerAPI = "";
        }
    } else if(Array.isArray(livePlayerObjs.adBannerAPI) && livePlayerObjs.adBannerAPI.length>0) {
        var num = livePlayerObjs[data.divId].adBannerNum ? livePlayerObjs[data.divId].adBannerNum : 0;

        var adSdks = null;
        if(livePlayerObjs.adBannerAPI[num]) {
            adSdks = livePlayerObjs.adBannerAPI[num].sdks;
        }
        if(adSdks && Array.isArray(adSdks)) {
            livePlayerObjs.adBannerAPI[num].sdks = null;
            if(adSdks.length < 1 || (typeof getAdDataFromOutside==="undefined")) {
                returnAdBannerDataFromOutsideWhenError("banner", "empty", data);
            } else{
                getAdDataFromOutside("banner", adSdks, returnAdBannerDataFromOutside, data, returnAdBannerDataFromOutsideWhenError, data);
            }
            return;
        }

        livePlayerObjs[data.divId].adBannerIsShow = true;
        var adBannerContainer = document.getElementById("adbanner_"+data.divId);
        if(!adBannerContainer) {
            new LiveAdBanner(data);
        } else{
            LiveAdBanner.prototype.adBannerShowOrHide(data, "show");
        }


    } else{
        livePlayerObjs.adBannerAPI = "";
        livePlayerObjs[data.divId].adBannerIsShow = false;

        //第一次显示失败后，两分钟后再请求显示一次
        if(!livePlayerObjs[data.divId].adBannerPlayed) {

            setTimeout(function () {
                if(!livePlayerObjs[data.divId].adBannerPlayed) {
                    livePlayerObjs[data.divId].adBannerPlayed = true;

                    livePlayerObjs[data.divId].adBannerGetting = true;

                    loadLiveScript(livePlayerObjs[data.divId].adBanner, parseLiveAdBannerDataFromApi, data, parseLiveAdBannerDataFromApiWhenError, 100);

                    if(livePlayerObjs[data.divId].adBannerGetting) {
                        parseLiveAdBannerDataFromApi(data);
                    }
                }


            }, 2*60*1000);

        }
    }
}


function parseLiveAdBannerDataFromApiWhenError(paras) {
    livePlayerObjs.adBannerAPI = "";
    livePlayerObjs[paras.divId].adBannerIsShow = false;



    //第一次显示失败后，两分钟后再请求显示一次
    if(!livePlayerObjs[paras.divId].adBannerPlayed) {

        setTimeout(function () {
            if(!livePlayerObjs[paras.divId].adBannerPlayed) {
                livePlayerObjs[paras.divId].adBannerPlayed = true;
                livePlayerObjs[paras.divId].adBannerGetting = true;

                loadLiveScript(livePlayerObjs[paras.divId].adBanner, parseLiveAdBannerDataFromApi, paras, parseLiveAdBannerDataFromApiWhenError, 100);

                if(livePlayerObjs[paras.divId].adBannerGetting) {
                    parseLiveAdBannerDataFromApi(paras);
                }
            }


        }, 2*60*1000);

    }

}

//adPause
function returnAdBannerDataFromOutsideWhenError(adType, errorMsg, cbErrorData) {

}

function returnAdBannerDataFromOutside(adType, data, cbData) {
    var adBannerData = eval('(' + data + ')');

    if(!adBannerData || !adBannerData.url || !adBannerData.clickUrl) {
        returnAdBannerDataFromOutsideWhenError("banner", "empty", cbData);
    } else{
        var num = livePlayerObjs[cbData.divId].adBannerNum ? livePlayerObjs[cbData.divId].adBannerNum : 0;
        if(livePlayerObjs.adBannerAPI[num]) {
            livePlayerObjs.adBannerAPI[num].url = adBannerData.url;
            livePlayerObjs.adBannerAPI[num].clickUrl = adBannerData.clickUrl ? adBannerData.clickUrl : "";
            livePlayerObjs.adBannerAPI[num].eventExposure = adBannerData.eventExposure;
            livePlayerObjs.adBannerAPI[num].eventExposure1 = adBannerData.eventExposure1;
            livePlayerObjs.adBannerAPI[num].monitor = adBannerData.monitor;
            livePlayerObjs.adBannerAPI[num].impression = adBannerData.impression;
            livePlayerObjs.adBannerAPI[num].sdks = null;
            parseLiveAdBannerDataFromApi(cbData);

            /*发送曝光信息给广告后台*/
            var adImpression = adBannerData.impression;
            if(adImpression) {
                var impressionLen = adImpression.length;
                var impressionUrl = "";
                for(var imNum=0; imNum<impressionLen; imNum++) {
                    impressionUrl = adImpression[imNum];
                    if(impressionUrl) {
                        getApiByImage(impressionUrl);
                    }

                }
            }
        }


    }

}



function initLiveH5Player(paras) {

    livePlayerObjs[paras.divId].video.playing = false;
    livePlayerObjs[paras.divId].adCallsIsPlayed = false;

    if(paras.isVip === "true") {
        paras.islogin = "true";
    }


    if(paras.playerType === "hw") {
        var errorMsgDiv = document.getElementById("error_msg_"+paras.divId);
        if(errorMsgDiv && errorMsgDiv.style.display!=="none" && errorMsgDiv.innerHTML.indexOf("听")===-1) {
            return;
        }
    }


    var video = document.getElementById("h5player_" + paras.divId);
    var video = document.getElementById("h5player_" + paras.divId);


    if(livePlayerObjs[paras.divId].adCalls && livePlayerObjs[paras.divId].adCalls.length>3 && livePlayerObjs[paras.divId].vdn.public==="1") {

        livePlayerObjs.adCallsPlayingNum = 0;
        video.addEventListener("ended", playNextLiveAdCalls.bind(null, paras), false);

        video.addEventListener("play", liveAdCallsStartPlay.bind(null, paras), false);

        loadLiveScript(livePlayerObjs[paras.divId].adCalls, parseLiveAdCallsDataFromApi, paras, parseLiveAdCallsDataFromApiWhenError, 100, 12000);



    } else{

        if(paras.playerType==="liveback" && (paras.st && paras.et || paras.start && paras.end)) {
            createLivebackPlayer(paras);

            paras.st = "";
            paras.et = "";
        } else{
            playLiveVideo(paras);
        }

        if(!isIPad() && paras.hasBarrage === "true" && !isLiveBarrageJsLoaded && paras.barrageitemID && paras.barrageApp) {
            var barrageJs = "//js.player.cntv.cn/creator/html5player_barrage.js";


            var bRows = 3;
            if(typeof barrageRows!== "undefined") {
                bRows = barrageRows;
            }

            var bSpeed = 1;
            if(typeof barrageSpeed!== "undefined") {
                bSpeed = barrageSpeed - 0;
            }

            LazyLoad.js(barrageJs, function(){
                isLiveBarrageJsLoaded = true;
                if(typeof Html5PlayerBarrage !== "undefined") {
                    var itemID = paras.barrageitemID;
                    var app = paras.barrageApp;
                    var barrs = {
                        itemid: itemID,  //频道或guid
                        app: app, //应用code
                        numOfRows: bRows, //显示多少行弹幕
                        speed: bSpeed //弹幕倍速，以默认若干倍的速度，比如2,0.5等
                    };
                    new Html5PlayerBarrage(paras.divId, barrs);
                }
            });
        }


    }


}


function getRandom(){
    var time = new Date();
    return time.getTime();
}


function liveCheckVdnReturnMsg(obj, isAudio) {
    var msg = "";
    var hasHlsAddr = true;
    var hlsType = "video";



    if(obj.ack==="no") {
        hasHlsAddr = false;
        msg = liveStatusMsg["ack_no_and_status_" + obj.status];
        if(!msg) {
            msg = liveStatusMsg["ack_no"];
        }

    } else if(obj.status === "0") {
        msg = liveStatusMsg["status_0"];
        hasHlsAddr = false;
    } else if(obj.public === "0") {
        if(obj.video_protect && obj.audio_protect) {
            msg = liveStatusMsg["video_protect_"+obj.video_protect+"_and_audio_protect_"+obj.audio_protect];
            if(obj.public==="0" && obj.audio_protect==="3") {
                if(obj.hls_url && obj.hls_url.hls6 || isAudio) {
                    hlsType = "audio";
                } else{
                    msg = "";
                    hlsType = "video";
                }

            }
        }

        if(!msg) {
            msg = liveStatusMsg["public_0_default"];
        }
    } else{
        msg = "";
    }

    return {
        msg: msg,
        hasHlsAddr: hasHlsAddr,
        hlsType: hlsType
    };

}

function parseLiveDataFromVdnWhenError(paras, errStr) {

    if(livePlayerObjs[paras.divId].isErrorDone) {
        return;
    }

    livePlayerObjs[paras.divId].isErrorDone = true;

    if(typeof livePlayerObjs[paras.divId].video.url !=="string" || livePlayerObjs[paras.divId].video.url.length<10) {

        livePlayerObjs[paras.divId].video.url = "";
        createH5LivePlayerElement(paras.divId);

        if(!paras.vdnRetryNum &&(!errStr || errStr==="timeout")) {
            var errorMsg = "VDN_REQUEST_FAILED";
            if(errStr === "timeout") {
                errorMsg = "VDN_REQUEST_TIMEOUT";
            }

            if(isUseConvivaMonitor) {
                setLiveConvivaMetadata(paras, errorMsg);
            }

            setLiveWsMetadata(paras, errorMsg);

            setCntvLiveMetadata(paras, "690003", errorMsg);

        }


        if(paras.t !== "cctv1") {

            /*启用备用vdn*/
            if(!paras.vdnRetryNum || paras.vdnRetryNum-1<1) {
                paras.isBackupVdn = true;

                var loadingGif = document.getElementById("loading_"+paras.divId);
                if(loadingGif) {
                    loadingGif.style.display = "block";
                }
                setTimeout(function () {
                    paras.isAutoPlay = "true";
                    paras.posterImg = "";
                    createLivePlayer(paras);
                    if(paras.vdnRetryNum === undefined) {
                        paras.vdnRetryNum = 0;
                    }
                    paras.vdnRetryNum++;
                }, 3000);


            } else{
                showLivePlayerErrorMsg(paras);
            }

        }


    }

    if(paras.t === "cctv1") {

        var randowmNum = Math.floor(Math.random()*100);
        var videoUrl = "";
        var cdrmVideoUrl = "";
        var nomalVideoUrl = "";
        var cdnName = "";

        if(randowmNum<33) {
            cdrmVideoUrl = "http://ldncctvwbcdali.v.myalicdn.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8";
            nomalVideoUrl = "http://ldncctvwbndali.v.myalicdn.com/ldncctvwbnd/ldcctv1_2/index.m3u8";
            cdnName = "LIVE-HLS-CDN-ALI";
        } else if(randowmNum>=33 && randowmNum<65) {
            cdrmVideoUrl = "http://ldncctvwbcdtxy.liveplay.myqcloud.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8";
            nomalVideoUrl = "http://ldncctvwbndtxy.liveplay.myqcloud.com/ldncctvwbnd/ldcctv1_2/index.m3u8";
            cdnName = "LIVE-HLS-CDN-TXY";
        } else if(randowmNum>=65 && randowmNum<80) {
            cdrmVideoUrl = "http://ldncctvwbcdbd.a.bdydns.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8";
            nomalVideoUrl = "http://ldncctvwbndbd.a.bdydns.com/ldncctvwbnd/ldcctv1_2/index.m3u8";
            cdnName = "LIVE-HLS-CDN-BD";
        } else if(randowmNum>=80 && randowmNum<89) {
            cdrmVideoUrl = "http://ldncctvwbcdhwy.cntv.myhwcdn.cn/ldncctvwbcd/cdrmldcctv1_1/index.m3u8";
            nomalVideoUrl = "http://ldncctvwbndhwy.cntv.myhwcdn.cn/ldncctvwbnd/ldcctv1_2/index.m3u8";
            cdnName = "LIVE-HLS-CDN-HW";
        } else if(randowmNum>=89 && randowmNum<99) {
            cdrmVideoUrl = "http://ldncctvwbcdks.v.kcdnvip.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8";
            nomalVideoUrl = "http://ldncctvwbndks.v.kcdnvip.com/ldncctvwbnd/ldcctv1_2/index.m3u8";
            cdnName = "LIVE-HLS-CDN-KS";
        } else {
            cdrmVideoUrl = "http://ldncctvwbcdcnc.v.wscdns.com/ldncctvwbcd/cdrmldcctv1_1/index.m3u8";
            nomalVideoUrl = "http://ldncctvwbndcnc.v.wscdns.com/ldncctvwbnd/ldcctv1_2/index.m3u8";
            cdnName = "LIVE-HLS-CDN-CNC2";
        }

        if(isIPad()) {
            cdrmVideoUrl += "?b=200-1600";
        } else{
            cdrmVideoUrl += "?b=200-2100";
        }

        if(isLiveHlsJsSupported() && isWasmSupported() || isIosDrmPlayer(paras)) {
            videoUrl = cdrmVideoUrl;
        } else{
            videoUrl = nomalVideoUrl;
        }

        if(paras.isHttps === "true") {
            videoUrl = videoUrl.replace("http://", "https://");
        }

        var obj = {};
        obj.ack = "yes";
        obj.public = "1";
        obj.default_stream = "";
        obj.client_sid = "";
        obj.hls_url = {};
        obj.hls_url.hls2 = videoUrl;
        obj.hls_cdn_info = {};
        obj.hls_cdn_info.cdn_code = cdnName;
        obj.lc = {};
        obj.lc.ip = "";
        obj.lc.country_code = "";
        obj.lc.provice_code = "";
        obj.lc.city_code = "";
        obj.lc.isp_code = "";


        html5VideoData = JSON.stringify(obj);

        parseLiveDataFromVdn(paras);


    }
}


function parseLiveDataFromVdn(paras, isDirectVideoUrl, vData) {

    var obj = {};
    var videoUrl = "";
    var errStr = "";
    var errObj = null;
    var canPlay = "";
    var videoData = null;
    if(livePlayerObjs[paras.divId].vdnTimer !== undefined) {
        clearTimeout(livePlayerObjs[paras.divId].vdnTimer);
    }

    livePlayerObjs[paras.divId].isErrorDone = true;

    var playerUrl = "http://js.player.cntv.cn/creator/liveplayer_controls.js";
    if(paras.isHttps === "true") {
        playerUrl = "https://js.player.cntv.cn/creator/liveplayer_controls.js";
    }







    if(!isDirectVideoUrl) {

        try{

            videoData = vData ? vData : html5VideoData;


            obj = eval('(' + videoData + ')');



            canPlay = obj.play;
            /*优先从vdn获取提示信息*/
            if(canPlay!== undefined && canPlay==="0") {
                obj.public = "0";
                errStr = getLiveVdnTipMsg(obj.tip_msg);
                if(obj.audio_protect==="3" && obj.hls_url && obj.hls_url.hls6) {
                    errStr += "<span style='display:none;'>听</span>";
                    livePlayerObjs[paras.divId].video.audioUrl = obj.hls_url.hls6;
                }
            } else{
                if(canPlay !== undefined) {
                    obj.public = "1";
                }
            }
            /*优先从vdn获取提示信息结束*/

            if(obj.ack === "no") {
                setLiveConvivaMetadata(paras, "VDN_RESPONSE_EMPTY");

                setLiveWsMetadata(paras, "VDN_RESPONSE_EMPTY");

                if(typeof goldlog!="undefined" && goldlog["h5player_"+paras.divId] && typeof goldlog["h5player_"+paras.divId].heartbeatStarted!=="undefined") {
                    goldlog["h5player_"+paras.divId].heartbeatStarted = false;
                }

                setCntvLiveMetadata(paras, "690003", "VDN_RESPONSE_EMPTY");


            } else {


                livePlayerObjs[paras.divId].vdn.public = obj.public;

                livePlayerObjs[paras.divId].vdn.cdnName = obj.hls_cdn_info.cdn_code;

                livePlayerObjs[paras.divId].vdn.sid = obj.client_sid;
                livePlayerObjs[paras.divId].vdn.vdnIP = obj.lc.ip;
                livePlayerObjs[paras.divId].vdn.vdnCountryCode = obj.lc.country_code;
                livePlayerObjs[paras.divId].vdn.vdnProvinceCode = obj.lc.provice_code;
                livePlayerObjs[paras.divId].vdn.vdnCityCode = obj.lc.city_code;
                livePlayerObjs[paras.divId].vdn.vdnISPCode = obj.lc.isp_code;



                if(isLiveSdrmPlayer(paras)) {

                    if(obj.flv_url && obj.flv_url.flv1) {
                        videoUrl = obj.flv_url.flv1;
                    } else{
                        videoUrl = obj.hls_url.hls2;
                    }

                } else{
                    if(obj.manifest && obj.manifest.hls_nd) {
                        videoUrl = obj.manifest.hls_nd;
                    } else{
                        /*旧版vdn直播地址20230629*/
                        videoUrl = obj.hls_url.hls2;
                    }

                }

                livePlayerObjs[paras.divId].video.url = videoUrl;

                /*获取备份播放地址*/
                livePlayerObjs[paras.divId].video.backupUrl = "";
                if(obj.backup && obj.backup.hls_nd) {
                    livePlayerObjs[paras.divId].video.backupUrl = obj.backup.hls_nd;
                }


                if(obj.hls_url.hls6) {
                    if(obj.manifest && obj.manifest.hls_audio) {
                        livePlayerObjs[paras.divId].video.defaultAudioUrl = obj.manifest.hls_audio;
                    } else{
                        /*旧版vdn直播地址20230629*/
                        livePlayerObjs[paras.divId].video.defaultAudioUrl = obj.hls_url.hls6;
                    }

                }

                //针对flv的支持
                if(livePlayerObjs[paras.divId].streamType==="flv") {
                    livePlayerObjs[paras.divId].flvListLenWhenNoLogin = 0;
                    livePlayerObjs[paras.divId].flvList = [];
                    var resolution = "360";
                    if(typeof paras.others==="string" && paras.others.indexOf(".flv")>0) {
                        var bitRate = 1350000;
                        if(paras.others.indexOf("resolution=2560") > 0) {
                            bitRate = 6000000;
                            resolution = "4K";
                        } else if(paras.others.indexOf("resolution=1080") > 0) {
                            bitRate = 3600000;
                            resolution = "1080";
                        } else if(paras.others.indexOf("resolution=720") > 0) {
                            bitRate = 1800000;
                            resolution = "720";
                        } else if(paras.others.indexOf("resolution=540") > 0) {
                            bitRate = 1350000;
                            resolution = "540";

                        } else if(paras.others.indexOf("resolution=480") > 0) {
                            bitRate = 900000;
                            resolution = "480";
                        } else{
                            bitRate = bitRate = 600000;
                            resolution = "360";
                        }
                        if(resolution==="360" || resolution==="480" || resolution==="540") {
                            livePlayerObjs[paras.divId].flvListLenWhenNoLogin = 1;
                        }
                        livePlayerObjs[paras.divId].flvList = [{bitrate:bitRate, resolution:resolution, url:paras.others}];
                        livePlayerObjs[paras.divId].vdn.flvCdnName = "unknown";
                    } else{


                        if(obj.flv_url && obj.flv_url.flv1 && obj.flv_url.flv1.indexOf(".flv")>0) {
                            livePlayerObjs[paras.divId].flvList.unshift({bitrate:3600000, resolution:"1080", url:obj.flv_url.flv1});
                        }

                        if(obj.flv_url && obj.flv_url.flv2 && obj.flv_url.flv2.indexOf(".flv")>0) {
                            livePlayerObjs[paras.divId].flvList.unshift({bitrate:1800000, resolution:"720", url:obj.flv_url.flv2});
                        }

                        if(obj.flv_url && obj.flv_url.flv3 && obj.flv_url.flv3.indexOf(".flv")>0) {
                            livePlayerObjs[paras.divId].flvListLenWhenNoLogin = 1;
                            livePlayerObjs[paras.divId].flvList.unshift({bitrate:1350000, resolution:"540", url:obj.flv_url.flv3});
                        }
                        if(obj.flv_url && obj.flv_url.flv4 && obj.flv_url.flv4.indexOf(".flv")>0) {
                            if(livePlayerObjs[paras.divId].flvListLenWhenNoLogin) {
                                livePlayerObjs[paras.divId].flvListLenWhenNoLogin += 1;
                            }
                            livePlayerObjs[paras.divId].flvList.unshift({bitrate:900000, resolution:"480", url:obj.flv_url.flv4});
                        }

                        if(livePlayerObjs[paras.divId].flvList.length>0 && obj.flv_cdn_info && obj.flv_cdn_info.cdn_code) {
                            livePlayerObjs[paras.divId].vdn.flvCdnName = obj.flv_cdn_info.cdn_code;
                        }
                    }

                    if(livePlayerObjs[paras.divId].flvList.length < 1) {
                        livePlayerObjs[paras.divId].flvList = [];
                        livePlayerObjs[paras.divId].streamType = "hls";
                        livePlayerObjs[paras.divId].others = paras.others = "";
                    }
                }



                if(obj.public === "0" && !isTimeshift(paras) && paras.playerType!=="liveback" && canPlay===undefined) {
                    errStr = "由于播出安排变更，暂不支持播放该时段内容";
                    if(isUseConvivaMonitor) {
                        createFlvHtml5ConvivaEvent(paras);
                    }



                    if(typeof LiveControlsBar === "undefined" && !livePlayerObjs.isLoadLiveJs) {
                        livePlayerObjs.isLoadLiveJs = true;
                        LazyLoad.js(playerUrl, function(){

                            createH5LivePlayerElement(paras.divId);

                        });
                    } else{
                        createH5LivePlayerElement(paras.divId);
                    }



                }



                if(obj["default_stream"]) {
                    livePlayerObjs[paras.divId].video.defaultStream = obj["default_stream"];
                }


                //livePlayerObjs[paras.divId].video.url = "http://39.96.9.37/cdrmlive/cdrm_cctv15_1800_dw/index.m3u8";

                currentLiveTimeData = null;

                if(obj.flv_url && obj.flv_url.flv5) {
                    livePlayerObjs[paras.divId].flv5 = obj.flv_url.flv5;

                }


            }

        } catch(e){
            errStr = "retry";
            obj = {};

            setLiveConvivaMetadata(paras, "VDN_PARSE_ERROR");

            setLiveWsMetadata(paras, "VDN_PARSE_ERROR");

            setCntvLiveMetadata(paras, "690003", "VDN_PARSE_ERROR");

            if(typeof goldlog!="undefined" && goldlog["h5player_"+paras.divId] && typeof goldlog["h5player_"+paras.divId].heartbeatStarted!=="undefined") {
                goldlog["h5player_"+paras.divId].heartbeatStarted = false;
            }

        }


        if(errStr!=="retry" && typeof obj === "object" && obj && paras.playerType!=="liveback" && canPlay===undefined) {
            errObj = liveCheckVdnReturnMsg(obj);

            if(typeof errObj==="object" && errObj) {
                errStr = errObj.msg;
                if(errObj.hlsType==="audio" && obj.hls_url && obj.hls_url.hls6) {
                    livePlayerObjs[paras.divId].video.audioUrl = obj.hls_url.hls6;
                }


            }

        }


        if(typeof errStr==="string" && errStr.length>1) {
            if(errStr==="retry" && paras.t==="cctv1") {
                livePlayerObjs[paras.divId].isErrorDone = false;
                parseLiveDataFromVdnWhenError(paras, errStr);
            } else{

                if(errStr === "retry") {
                    showLivePlayerErrorMsg(paras);
                } else{

                    showLivePlayerMsg(paras, errStr);

                    //20200908添加，去掉loading
                    setTimeout(function () {
                        try{
                            var loadingImg = document.getElementById("loading_" + paras.divId);
                            if(loadingImg && document.getElementById(paras.divId)) {
                                loadingImg.style.display = "none";
                            }
                        } catch (e) {
                        }

                    }, 1200);
                }
            }

            if(livePlayerObjs[paras.divId] && livePlayerObjs[paras.divId].video && !livePlayerObjs[paras.divId].video.audioUrl && !livePlayerObjs[paras.divId].video.url) {

                return;
            }

            //return;
        }

    }




    createH5LivePlayerElement(paras.divId);

    if(!isLiveEs6Supported()) {
        var player = document.getElementById("h5player_" + paras.divId);
        if(player) {
            if(isUseAliMonitor) {

                if(typeof goldlog!="undefined" && goldlog["h5player_"+paras.divId] && typeof goldlog["h5player_"+paras.divId].heartbeatStarted!=="undefined") {
                    goldlog["h5player_"+paras.divId].heartbeatStarted = true;

                    if(!livePlayerObjs[paras.divId].aliInited) {
                        setCntvLiveMetadata(paras, "init");
                    }

                    setCntvLiveMetadata(paras);

                } else{

                    setTimeout(function () {
                        setCntvLiveMetadata(paras);
                    }, 300);


                }

                livePlayerObjs[paras.divId].aliInited = false;
            }

            if(livePlayerObjs[paras.divId].video.url.indexOf("cdrm") > 0) {
                showLivePlayerMsg(paras, "您当前的浏览器不支持播放，请升级浏览器或更换设备");
            } else{
                player.controls = true;
                player.src = livePlayerObjs[paras.divId].video.url;
            }
        }
    } else {
        if(!livePlayerObjs.isLoadLiveJs) {
            livePlayerObjs.isLoadLiveJs = true;
            loadLiveScript(playerUrl, initLiveH5Player, paras);

        } else{
            if(typeof LiveControlsBar !== "undefined") {
                clearInterval(livePlayerObjs[paras.divId].loadLiveTimer);
                initLiveH5Player(paras);
            } else{
                var checkCount = 0;
                livePlayerObjs[paras.divId].loadLiveTimer = setInterval(function () {
                    checkCount++;
                    if(checkCount > 50) {
                        clearInterval(livePlayerObjs[paras.divId].loadLiveTimer);
                    }
                    if(typeof LiveControlsBar !== "undefined") {
                        clearInterval(livePlayerObjs[paras.divId].loadLiveTimer);
                        initLiveH5Player(paras);
                    }
                }, 200);
            }

        }
    }




    if(isUseAliMonitor) {
        livePlayerObjs[paras.divId].aliInited = true;
        setCntvLiveMetadata(paras, "init");

    }



}



function createH5LivePlayerElement(divId) {
    var container = document.getElementById(divId);

    if(document.getElementById("h5player_"+divId) || !container) {
        return;
    }
    var player = document.createElement("video");

    if(isMobleUseBrowserUi) {
        player.controls = true;
    } else{
        player.controls = false;
    }
    //player.setAttribute("class", "videoNoTimeline videoNoTimeline1 videoNoTimeline2");

    player.muted = false;
    player.volume = 0.5;
    player.autoplay = true;


    player.setAttribute("webkit-playsinline", "webkit-playsinline");
    player.setAttribute("playsinline", "");
    player.setAttribute("controlslist", "nodownload");

    player.setAttribute("x-webkit-airplay", "allow");


    //player.setAttribute("x5-video-player-type", "h5");

    //player.setAttribute("x5-video-orientation", "portrait");
    //player.setAttribute("x5-video-player-fullscreen", "true");

    //百度的同层播放，解决安卓百度app默认静音播并且底部有黑条问题
    if(isIPad() && /(baidu)/i.test(navigator.userAgent)) {
        player.setAttribute("t7-video-player-type", "inline");
    }


    player.setAttribute("x5-playsinline", "");
    player.preload = true;

    player.setAttribute("id", "h5player_" + divId);


    player.style.width = "100%";
    player.style.height = "100%";
    player.style.left = "0px";
    player.style.top = "0px";
    player.style.backgroundColor = "#000";


    var errorMsgDiv = document.getElementById("error_msg_"+divId);

    //是否用canvas
    /*if(!isIPad() || !isNewH5LivePlayer(livePlayerObjs[divId]) || isLiveSdrmPlayer(livePlayerObjs[divId]))*/
    /*220829，所有浏览器都不用canvas*/
    if(true) {
        if(errorMsgDiv && errorMsgDiv.style.display!=="none") {
            player.style.display = "none";
        } else{
            player.style.display = "block";
        }
        container.appendChild(player);


        /*兼容微信用纯video时，多数时候没有第一帧图片问题*/
        if(isIPad()) {
            var isAndroidWeixin = /(Android)/i.test(navigator.userAgent) && /(micromessenger)/i.test(navigator.userAgent);

            if(isAndroidWeixin && !livePlayerObjs[divId].hasPosterImg) {
                player.style.display = "none";
                var canvas = document.getElementById("h5canvas_"+divId);
                if(!canvas) {
                    canvas = document.createElement("canvas");
                    canvas.id = "h5canvas_" + divId;
                    canvas.style.width = "100%";
                    canvas.style.height = "100%";
                    canvas.style.display = "block";
                    canvas.width = container.clientWidth*window.devicePixelRatio;
                    canvas.height = container.clientHeight*window.devicePixelRatio;
                    document.getElementById(divId).appendChild(canvas);
                } else{
                    canvas.style.display = "block";
                }
            }



        }


    } else{

        var container = document.getElementById(divId);
        if(!document.getElementById("h5canvas_"+divId)) {
            var canvas = document.createElement("canvas");
            canvas.id = "h5canvas_" + divId;

            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.display = "none";
            canvas.width = container.clientWidth*window.devicePixelRatio;
            canvas.height = container.clientHeight*window.devicePixelRatio;
            document.getElementById(divId).appendChild(canvas);

        }
        var canvas = document.getElementById("h5canvas_"+divId);
        if(isCanvasSupported(divId)) {

            if(errorMsgDiv && errorMsgDiv.style.display!=="none") {
                canvas.style.display = "none";
            } else{
                canvas.style.display = "block";
            }

            player.style.display = "none";
            document.body.appendChild(player);


        } else{
            container.removeChild(canvas);
            if(errorMsgDiv && errorMsgDiv.style.display!=="none") {
                player.style.display = "none";
            } else{

                player.style.display = "block";
            }
            container.appendChild(player);
        }

    }


    if(!isMobleUseBrowserUi) {
        initH5LivePlayerEvents(divId);
    }


}



function initH5LivePlayerEvents(divId) {
    var player = document.getElementById("h5player_" + divId);
    var live_events = ["play", "playing", "canplay", "canplaythrough", "durationchange", "emptied", "abort", "ended", "pause", "seeked", "seeking", "stalled", "waiting", "error", "timeupdate", "contextmenu"];

    //mac+safari兼容用
    livePlayerObjs[divId].updateTime = 0;

    /*
    events.forEach(function (v) {
        player.addEventListener(v, function (evt) {
            if(document.getElementById("play_or_pause_play_"+divId)) {
                LivePlayOrPauseBtn.prototype.playOrPauseMouseout(divId);
            }
        }, false);
    });
    */

    live_events.forEach(function (v) {
        liveAddListener(player,v,captureLive);
    });



    //解决微信点电源键后返回破板问题
    window.addEventListener('blur', function(){
        var obj = document.getElementById("player_pagefullscreen_"+divId);

        if((navigator.userAgent.toLowerCase().indexOf("micromessenger")>0||navigator.userAgent.toLowerCase().indexOf("huaweibrowser")>0||navigator.userAgent.toLowerCase().indexOf("weibo")>0) && obj) {

            if(obj.getAttribute("isPageFullscreen")==="true" && isCanvasSupported(divId)) {
                obj.setAttribute("isPageFullscreen", "true");
                LiveMobileFullscreenBtn.prototype.pageFullscreenClick(divId, "yes");
            }

        }
    }, false);


    document.addEventListener('visibilitychange', function() {
        var isHidden = document.hidden;
        var player = document.getElementById("h5player_" + divId);
        var isMacSafari = /macintosh|mac os x/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent);


        if(isHidden) {
            if(player) {

                livePlayerObjs[divId].isHidden = true;

                if(!isIPad()) {
                    //如果正在播前贴广告
                    if(document.getElementById("adcalls_bar_" + divId)) {
                        return;
                    }

                    if(isMacSafari) {
                       return;
                    }

                    /*如果静音，且浏览器不在前台播放，则暂停播放，节省带宽并解决chrome和safari等浏览器返回前台后loading现象*/
                    if(player.muted && livePlayerObjs[divId].video.playing) {
                        livePlayerObjs[divId].isPausedBecauseMuted = true;
                        player.pause();
                    } else{
                        livePlayerObjs[divId].isPausedBecauseMuted = false;
                    }

                } else {
                    player.pause();

                    //如果正在播前贴广告
                    if(document.getElementById("adcalls_bar_" + divId)) {
                        return;
                    }


                    livePlayerObjs[divId].LiveCanplaythroughTime = Date.parse(new Date())/1000;

                    if(isCanvasSupported(divId)) {
                        clearInterval(livePlayerObjs[divId].canvasDrawTimer);
                    }


                    if(liveConvivaClient && liveConvivaClient.cleanupSession && livePlayerObjs[divId].convivaSessionKey!==undefined && (!Array.isArray(livePlayerObjs.adCallsAPI) || livePlayerObjs.adCallsAPI.length<1)) {
                        try {
                            liveConvivaClient.cleanupSession(livePlayerObjs[divId].convivaSessionKey);
                            livePlayerObjs[divId].convivaSessionKey = undefined;
                        } catch (e) {

                        }

                    }


                    if(typeof goldlog!="undefined" && goldlog["h5player_"+divId] && typeof goldlog["h5player_"+divId].heartbeatStarted!=="undefined") {
                        goldlog["h5player_"+divId].heartbeatStarted = false;
                    }


                    if(livePlayerObjs[divId].isLive && livePlayerObjs && livePlayerObjs[divId]) {
                        clearInterval(livePlayerObjs[divId].titleUpdateTimer);
                        clearInterval(livePlayerObjs[divId].loadingErrorTimer);
                    }
                }



            }
        } else{


            if(player) {
                livePlayerObjs[divId].isHidden = false;
                var errorDiv = document.getElementById("error_msg_"+divId);
                if(errorDiv) {
                    if(document.getElementById("loading_"+divId)) {
                        document.getElementById("loading_"+divId).style.display = "none";
                    }

                    return;
                }


                if(!isIPad()) {
                    if(isMacSafari) {
                        return;
                    }

                    if(livePlayerObjs[divId].isPausedBecauseMuted && player.muted) {
                        LivePlayOrPauseBtn.prototype.playOrPause(divId);
                    }
                    livePlayerObjs[divId].isPausedBecauseMuted = false;

                    return;
                }


                //如果正在播前贴广告
                if(document.getElementById("adcalls_bar_" + divId)) {
                    player.play();
                    return;
                }



                //苹果从后台起来后，退出全屏
                if(/(iphone|ipad)/i.test(navigator.userAgent) && /(safari)/i.test(navigator.userAgent)) {
                    var fullObj = document.getElementById("player_pagefullscreen_"+divId);
                    if(fullObj && fullObj.getAttribute("isPageFullscreen") === "true") {
                        fullObj.setAttribute("isPageFullscreen", "true");
                        LiveMobileFullscreenBtn.prototype.pageFullscreenClick(divId, "yes");
                    }
                }


                if(livePlayerObjs[divId].isLive && livePlayerObjs[divId].end && livePlayerObjs[divId].end-0>0) {
                    livePlayerObjs[divId].end = parseInt(livePlayerObjs[divId].end) + Date.parse(new Date())/1000-livePlayerObjs[divId].LiveCanplaythroughTime;
                }


                if(livePlayerObjs[divId].isLive && livePlayerObjs[divId].LiveCanplaythroughTime && (Date.parse(new Date())/1000-livePlayerObjs[divId].LiveCanplaythroughTime>livePlayerObjs.liveRetryTimeout)) {


                    if(!errorDiv || errorDiv.style.display === "none") {
                        if(document.getElementById("loading_"+divId)) {
                            document.getElementById("loading_"+divId).style.display = "block";
                        }

                        createLiveHls(livePlayerObjs[divId]);
                    }

                    livePlayerObjs[divId].LiveCanplaythroughTime = Date.parse(new Date())/1000;


                } else{
                    if(isUseConvivaMonitor) {

                        //如果正在播前贴广告，就不创建回看播放器
                        if(!(livePlayerObjs[divId].adCalls && livePlayerObjs[divId].adCalls.length>3 && livePlayerObjs[divId].vdn.public==="1")) {
                            setLiveConvivaMetadata(livePlayerObjs[divId]);
                            setLiveWsMetadata(livePlayerObjs[divId]);
                        }


                    }

                    if(typeof goldlog!="undefined" && goldlog["h5player_"+divId] && typeof goldlog["h5player_"+divId].heartbeatStarted!=="undefined") {
                        goldlog["h5player_"+divId].heartbeatStarted = true;
                    }



                    player.play();


                    if(/(weibo)/i.test(navigator.userAgent)) {
                        if(isCanvasSupported(divId) && typeof canvasLive!=="undefined") {

                            canvasLive(divId);
                        }
                    } else{
                        setTimeout(function () {
                            //解决ios从全屏返回后的样式错乱问题，以及不自动播放问题
                            if(/(iphone|ipad)/i.test(navigator.userAgent)) {
                                var currentT = 0;
                                if(!livePlayerObjs[divId].isLive) {
                                    currentT = player.currentTime;
                                }
                                player.load();
                                player.play();
                                if(!livePlayerObjs[divId].isLive && livePlayerObjs[divId].playedPos && livePlayerObjs[divId].playedPos-0>0) {
                                    setTimeout(function () {
                                        player.currentTime = livePlayerObjs[divId].playedPos;
                                    }, 800);

                                }
                                //createLiveHls(livePlayerObjs[divId]);
                            } else {
                                /*220922，如果是非canvas，就返回*/
                                if(!isCanvasSupported(divId)) {
                                    return;
                                }


                                var _player_width = document.body.clientWidth|| window.innerWidth;
                                var _player_height = document.documentElement.clientHeight|| window.innerHeight;
                                _player_width = parseInt(_player_width);
                                _player_height = parseInt(_player_height);
                                if(_player_width/_player_height<1) {
                                    if(Math.abs(livePlayerObjs[divId].w - _player_width) < 50) {
                                        _player_width = livePlayerObjs[divId].w;
                                    }
                                    _player_height = _player_width*livePlayerObjs[divId].h/livePlayerObjs[divId].w;

                                } else{
                                    if(Math.abs(livePlayerObjs[divId].h - _player_height) < 50) {
                                        _player_height = livePlayerObjs[divId].w;
                                    }
                                    _player_width = _player_height*livePlayerObjs[divId].w/livePlayerObjs[divId].h;

                                }

                                document.getElementById(divId).style.width = _player_width + "px";
                                document.getElementById(divId).style.height = _player_height + "px";

                                if(isCanvasSupported(divId) && typeof canvasLive!=="undefined") {
                                    canvasLive(divId);
                                }
                            }

                        }, 350);

                    }

                    if(livePlayerObjs[divId].isLive) {
                        LiveTileShow.prototype.updateTitleAndCheckCopyright(livePlayerObjs[divId]);
                        LiveTileShow.prototype.checkLoadingError(livePlayerObjs[divId]);
                    }


                }

            }
        }
    }, false);


    if(isIPad()) {


        var thisDivId = divId;

        //屏幕旋转时候的处理
        window.addEventListener("resize", function() {
            //如果是清流播放器，则由页面控制旋转时播放器尺寸，避免跟页面操作冲突。
            if(!isNewH5LivePlayer(livePlayerObjs[thisDivId])) {
                return;
            }




            if(livePlayerObjs[thisDivId] && livePlayerObjs[thisDivId].rotation==="false") {

                var fullObj = document.getElementById("player_pagefullscreen_"+thisDivId);

                if(fullObj && fullObj.getAttribute("isPageFullscreen") === "true") {
                    fullObj.setAttribute("isPageFullscreen", "true");
                    LiveMobileFullscreenBtn.prototype.pageFullscreenClick(thisDivId, "yes");
                }

                return;
            }


            if (window.orientation === 180 || window.orientation === 0) {
                //console.log("竖屏");
                var canvases = document.getElementsByTagName("canvas");
                var videos = document.getElementsByTagName("video");
                var len = videos ? videos.length : 0;
                var canvas = null;
                var container = null;
                var divId = "";
                var fullTag = null;
                var isPageFullscreen = "false";

                for(var i=0; i<videos.length; i++) {
                    if(videos[i].getAttribute("id").indexOf("h5player_")!==-1) {
                        divId = videos[i].getAttribute("id").replace("h5player_", "");
                        var obj = document.getElementById("player_pagefullscreen_"+divId);
                        if(obj) {
                            obj.setAttribute("isByClick", "true");

                            setTimeout(function () {
                                obj.setAttribute("isByClick", "false");
                            }, 500);
                        }

                    }
                }



                setTimeout(function () {

                    var _player_width = document.body.clientWidth|| window.innerWidth;
                    var _player_height = document.documentElement.clientHeight|| window.innerHeight;
                    _player_width = parseInt(_player_width);
                    _player_height = parseInt(_player_height);
                    if(_player_width/_player_height<1) {
                        if(typeof playerOriginalWidth!=="undefined" && playerOriginalWidth) {
                            _player_width = _player_width*playerOriginalWidth;
                        }
                        _player_height = _player_width*livePlayerObjs[divId].h/livePlayerObjs[divId].w;
                    } else{
                        //屏幕宽跟长之比小于播放器比例时，比如4:3的pad
                        if(_player_width/_player_height+0.1<livePlayerObjs[divId].w/livePlayerObjs[divId].h) {
                            var bodyWidth = 0;
                            container = document.getElementById(divId);
                            if(livePlayerObjs[divId].maxW && livePlayerObjs[divId].maxW-20>0) {
                                bodyWidth = parseInt(livePlayerObjs[divId].maxW);
                            } else if(container && container.parentNode && container.parentNode.offsetWidth) {
                                bodyWidth = container.parentNode.offsetWidth;
                                bodyWidth = parseInt(bodyWidth);
                            } else{
                                bodyWidth = parseInt(document.body.offsetWidth);
                            }
                            if(bodyWidth && bodyWidth>20 && bodyWidth<_player_width) {
                                _player_width = bodyWidth;
                            }
                            _player_height = _player_width*livePlayerObjs[divId].h/livePlayerObjs[divId].w;
                        } else{
                            _player_width = _player_height*livePlayerObjs[divId].w/livePlayerObjs[divId].h;
                        }

                    }



                    for(var i=0; i<len; i++) {

                        if(videos[i].getAttribute("id").indexOf("h5player_")!==-1) {
                            canvas = canvases[i];
                            divId = videos[i].getAttribute("id").replace("h5player_", "");

                            var controlsBar = document.getElementById("control_bar_"+divId);


                            //canvas.width = _player_width*window.devicePixelRatio;
                            //canvas.height = _player_height*window.devicePixelRatio;
                            fullTag = document.getElementById("player_pagefullscreen_"+divId);
                            if(fullTag) {
                                isPageFullscreen = fullTag.getAttribute("isPageFullscreen");
                            }

                            container = document.getElementById(divId);

                            //2021.09.28，解决竖屏播放，然后横屏时返回直播，播放器尺寸跟竖屏时一样问题
                            livePlayerObjs[divId].w = _player_width;
                            livePlayerObjs[divId].h = _player_height;

                            if(isPageFullscreen === "true") {
                                if(canvas) {
                                    LiveMobileFullscreenBtn.prototype.pageFullsreenToCanvas(canvas, divId);
                                }

                                //调整控制条位置，防止被底部导航栏挡住
                                if((document.body.clientWidth|| window.innerWidth)/(document.documentElement.clientHeight|| window.innerHeight) < 1) {
                                    controlsBar.style.bottom = "80px";

                                } else{
                                    controlsBar.style.bottom = "0px";
                                }




                            } else{
                                container.style.width = _player_width + "px";
                                container.style.height = _player_height + "px";

                                if(canvas) {
                                    LiveMobileFullscreenBtn.prototype.pageFullsreenToCanvas(canvas, divId, "nofull");
                                }
                                controlsBar.style.bottom = "0px";

                            }
                        }

                    }
                }, 380);



            }
            if (window.orientation === 90 || window.orientation === -90 ){
                //console.log("横屏");

                var canvases = document.getElementsByTagName("canvas");
                var videos = document.getElementsByTagName("video");
                var len = videos ? videos.length : 0;
                var canvas = null;
                var container = null;
                var divId = "";
                var fullTag = null;
                var isPageFullscreen = "false";

                for(var i=0; i<videos.length; i++) {
                    if(videos[i].getAttribute("id").indexOf("h5player_")!==-1) {
                        divId = videos[i].getAttribute("id").replace("h5player_", "");
                        var obj = document.getElementById("player_pagefullscreen_"+divId);
                        if(obj) {
                            obj.setAttribute("isByClick", "true");
                            setTimeout(function () {
                                obj.setAttribute("isByClick", "false");
                            }, 500);
                        }

                    }
                }


                setTimeout(function () {

                    var _player_width = document.body.clientWidth|| window.innerWidth;
                    var _player_height = document.documentElement.clientHeight|| window.innerHeight;


                    _player_width = parseInt(_player_width);
                    _player_height = parseInt(_player_height);
                    if(_player_width/_player_height<1) {
                        if(typeof playerOriginalWidth!=="undefined" && playerOriginalWidth) {
                            _player_width = _player_width*playerOriginalWidth;
                        }
                        _player_height = _player_width*livePlayerObjs[divId].h/livePlayerObjs[divId].w;
                    } else{
                        //屏幕宽跟长之比小于播放器比例时，比如4:3的pad
                        if(_player_width/_player_height+0.1<livePlayerObjs[divId].w/livePlayerObjs[divId].h) {
                            var bodyWidth = 0;
                            container = document.getElementById(divId);
                            if(livePlayerObjs[divId].maxW && livePlayerObjs[divId].maxW-20>0) {
                                bodyWidth = parseInt(livePlayerObjs[divId].maxW);
                            } else if(container && container.parentNode && container.parentNode.offsetWidth) {
                                bodyWidth = container.parentNode.offsetWidth;
                                bodyWidth = parseInt(bodyWidth);
                            } else{
                                bodyWidth = parseInt(document.body.offsetWidth);
                            }
                            if(bodyWidth && bodyWidth>20 && bodyWidth<_player_width) {
                                _player_width = bodyWidth;
                            }
                            _player_height = _player_width*livePlayerObjs[divId].h/livePlayerObjs[divId].w;
                        } else{
                            _player_width = _player_height*livePlayerObjs[divId].w/livePlayerObjs[divId].h;
                        }
                    }

                    for(var i=0; i<len; i++) {

                        if(videos[i].getAttribute("id").indexOf("h5player_")!==-1) {
                            canvas = canvases[i];
                            divId = videos[i].getAttribute("id").replace("h5player_", "");
                            var controlsBar = document.getElementById("control_bar_"+divId);

                            //canvas.width = _player_width*window.devicePixelRatio;
                            //canvas.height = _player_height*window.devicePixelRatio;


                            fullTag = document.getElementById("player_pagefullscreen_"+divId);
                            if(fullTag) {
                                isPageFullscreen = fullTag.getAttribute("isPageFullscreen");
                            }

                            //2021.09.28，解决竖屏播放，然后横屏时返回直播，播放器尺寸跟竖屏时一样问题
                            livePlayerObjs[divId].w = _player_width;
                            livePlayerObjs[divId].h = _player_height;

                            if(isPageFullscreen === "true") {

                                if(canvas) {
                                    LiveMobileFullscreenBtn.prototype.pageFullsreenToCanvas(canvas, divId);
                                }

                                //调整控制条位置，防止被底部导航栏挡住
                                if((document.body.clientWidth|| window.innerWidth)/(document.documentElement.clientHeight|| window.innerHeight) < 1) {
                                    controlsBar.style.bottom = "80px";
                                } else{
                                    controlsBar.style.bottom = "0px";
                                }

                            } else{
                                container = document.getElementById(divId);
                                container.style.width = _player_width + "px";
                                container.style.height = _player_height + "px";

                                if(canvas) {
                                    LiveMobileFullscreenBtn.prototype.pageFullsreenToCanvas(canvas, divId, "nofull");
                                }

                                controlsBar.style.bottom = "0px";

                            }



                        }

                    }
                }, 380);

            }
        }, false);
    }

}


function removeH5LivePlayerEvents(divId) {
    var player = document.getElementById("h5player_" + divId);
    var live_events = ["play", "playing", "canplay", "canplaythrough", "durationchange", "emptied", "abort", "ended", "pause", "seeked", "seeking", "stalled", "waiting", "error", "timeupdate", "contextmenu"];

    live_events.forEach(function (v) {
        player.removeEventListener(v, captureLive, false);
    });
}




function captureLive(event) {
    if(event.target && event.target.id) {
        var divId = event.target.id.replace("h5player_", "");


        if(event.type=="canplaythrough") {
            livePlayerObjs[divId].LiveCanplaythroughTime = Date.parse(new Date())/1000;

            if(document.getElementById("loading_"+divId)) {
                document.getElementById("loading_"+divId).style.display = "none";
            }

            if(document.getElementById("h5canvas_"+divId)) {
                canvasLive(divId);
            }

            if(livePlayerObjs[divId].startCreatHls && !isIPad()) {
                setTimeout(function () {
                    if(document.getElementById("h5player_"+divId)) {
                        document.getElementById("h5player_"+divId).style.visibility = "visible";
                    }

                }, 330);

            }
            livePlayerObjs[divId].startCreatHls = false;

        }


        if(/macintosh|mac os x/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && event.type=="timeupdate") {
            livePlayerObjs[divId].updateTime++;
        }

        //20191203,删掉了timeupdate下的navigator.userAgent.toLowerCase().indexOf("edge")>0
        if(event.type=="play" || event.type=="playing"  || (event.type == "timeupdate" && (/(iphone|ipad)/i.test(navigator.userAgent) || livePlayerObjs[divId].updateTime>3&&/macintosh|mac os x/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent)))) {

            livePlayerObjs[divId].video.playing = true;
            livePlayerObjs[divId].isNoError = true;

            if(typeof LivePlayOrPauseBtn !== "undefined") {

                if(/(iphone|ipad)/i.test(navigator.userAgent)) {
                    useBrowserPlayerControls(divId);
                } else{
                    LivePlayOrPauseBtn.prototype.switchPlayOrPauseBtn(divId, "play");
                }


            }

            if(document.getElementById("loading_"+divId)) {
                document.getElementById("loading_"+divId).style.display = "none";
            }


        }



        //stalled兼容mac+safari
        if(event.type=="waiting" || event.type == "pause" || event.type=="ended" || event.type == "error" || event.type == "stalled"&&/macintosh|mac os x/i.test(navigator.userAgent) && /safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) ) {

            livePlayerObjs[divId].video.playing = false;


            if(typeof LivePlayOrPauseBtn !== "undefined") {
                if(event.type !== "stalled") {
                    LivePlayOrPauseBtn.prototype.switchPlayOrPauseBtn(divId, "pause");
                }
            }

            if(event.type=="waiting" || event.type=="seeking" && navigator.userAgent.toLowerCase().indexOf("micromessenger")>0) {
                if(document.getElementById("loading_"+divId)) {
                    document.getElementById("loading_"+divId).style.display = "block";
                    //解决部分设备直播和时移第一个画面闪一下问题
                    if(livePlayerObjs[divId].startCreatHls && !isIPad()) {
                        document.getElementById("h5player_"+divId).style.visibility = "hidden";
                    }
                }
            }



            if(event.type=="ended" && document.getElementById("player_progress_cached_"+divId)) {
                document.getElementById("player_progress_cached_"+divId).style.width = "0%";
            }



            if(event.type == "ended") {
                livePlayerObjs[divId].isEnd = true;
                if(liveConvivaClient && liveConvivaClient.cleanupSession && livePlayerObjs[divId].convivaSessionKey!==undefined && (!Array.isArray(livePlayerObjs.adCallsAPI) || livePlayerObjs.adCallsAPI.length<1)) {

                    liveConvivaClient.cleanupSession(livePlayerObjs[divId].convivaSessionKey);
                    livePlayerObjs[divId].convivaSessionKey = undefined;

                }

                if(typeof goldlog!="undefined" && goldlog["h5player_"+divId] && typeof goldlog["h5player_"+divId].heartbeatStarted!=="undefined") {
                    goldlog["h5player_"+divId].heartbeatStarted = false;
                }

                if(livePlayerObjs[divId].playerType==="liveback" && !isNewH5LivePlayer(livePlayerObjs[divId])) {

                    /*兼容断网后，清流回看无法捕获错误问题*/
                    var currentTime = event.target.currentTime;
                    var totalTime = 0;

                    if(livePlayerObjs[divId].video && livePlayerObjs[divId].video.duration) {
                        totalTime = livePlayerObjs[divId].video.duration - 0;
                    }

                    if(totalTime>1 && currentTime-1>0 && currentTime+2<totalTime) {
                        showLivePlayerErrorMsg(livePlayerObjs[divId]);
                    }
                }

            }


        }


        if(event.type=="durationchange" && isIPad() && livePlayerObjs[divId].video.duration) {
            var player = document.getElementById("h5player_"+divId);
            if(player) {
                if(player.duration>0 && Math.abs(1-player.duration/livePlayerObjs[divId].video.duration)<0.1 && Math.ceil(player.duration)!=Math.ceil(livePlayerObjs[divId].video.duration)) {
                    livePlayerObjs[divId].video.duration = player.duration;
                    if(document.getElementById("played_time_total_"+divId)) {
                        document.getElementById("played_time_total_"+divId).innerHTML = LivePlayTimeShow.prototype.formatTimeToStr(livePlayerObjs[divId].video.duration)
                    }
                }
            }
        }


        if(event.type=="play" && document.querySelectorAll) {
            var videoTagList = document.querySelectorAll("video,audio");
            var len = videoTagList.length;
            if(len - 1 >0) {
                for(var num=0; num<len; num++) {
                    if("h5player_" + divId === videoTagList[num].id) {
                        if(isCanvasSupported(divId) && typeof canvasLive!=="undefined") {
                            canvasLive(divId);
                        }
                        continue;
                    } else{
                        videoTagList[num].pause();
                    }
                }
            }


        }



    }

    //鼠标右键
    if(event && event.type === "contextmenu") {
        event.preventDefault?(event.preventDefault()):(event.returnValue = false);

        var contextmenuTag = document.getElementById('contextmenu_' + divId);
        if(contextmenuTag) {
            LiveContextmenu.prototype.showOrHideContextmenu(livePlayerObjs[divId], "show", event);
        }
    }



}



function liveAddListener(obj,type,handler) {

    if(obj.attachEvent) {

        obj.attachEvent('on'+type,handler);
    } else if(obj.addEventListener) {

        obj.addEventListener(type,handler,false);
    }
}

//ajax方式请求
function doLoadLiveDataByAjax(url, urlParas, cb, cbParas, cbError, timeout, ajaxType, isAsync, from) {

    // 异步对象
    var ajax = new XMLHttpRequest();
    var responseData = null;

    ajaxType = ajaxType ? ajaxType : "get";
    isAsync = isAsync ? isAsync : true;

    //单点计费传参
    if(!from && cbParas.vdnParasFromPage && cbParas.vdnParasFromPage.vtoken) {
        urlParas += "&vtokenpos=1"
    }



    // get 跟post  需要分别写不同的代码
    if (ajaxType==='get') {
        // get请求
        if (urlParas) {
            // 如果有值
            if(url.indexOf("?") === -1) {
                url += '?';
            }
            url += urlParas;
        }else{

        }
        // 设置 方法 以及 url
        ajax.open(ajaxType, url, isAsync);

        //单点计费传参
        if(!from && cbParas.vdnParasFromPage && cbParas.vdnParasFromPage.vtoken) {
            ajax.setRequestHeader("vtoken", cbParas.vdnParasFromPage.vtoken);
        }


        // send即可
        ajax.send();
    } else{
        // post请求
        // post请求 url 是不需要改变
        ajax.open(ajaxType, url, isAsync);

        // 需要设置请求报文
        ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");

        // 判断urlParas send发送数据
        if (urlParas) {
            // 如果有值 从send发送
            ajax.send(urlParas);
        }else{
            // 木有值 直接发送即可
            ajax.send();
        }
    }



    // 注册事件
    ajax.onreadystatechange = function () {

        // 在事件中 获取数据 并修改界面显示
        if (ajax.readyState==4 && ajax.status==200) {
            // console.log(ajax.responseText);

            // 将 数据 让 外面可以使用
            // return ajax.responseText;

            // 当 onreadystatechange 调用时 说明 数据回来了
            // ajax.responseText;

            // 如果说 外面可以传入一个 function 作为参数 success
            responseData = ajax.responseText;

            if(responseData) {
                cb(cbParas, "", responseData);
            } else{
                cbError(cbParas);
            }

        }
    }

    //故障处理
    ajax.onerror = function (e) {
        if(cbError) {
            cbError(cbParas);
        }

    }

    if(cbError && timeout && timeout>0) {
        setTimeout(function () {
            if(cbError && cbError.name==="parseLiveDataFromVdnWhenError") {
                cbError(cbParas, "timeout");
            } else{
                cbError(cbParas);
            }

        }, timeout);
    }


}



function loadLiveScript(src, cb, paras, errorCb, timeout, errorTimerout) {
    var _doc = document.getElementsByTagName("head")[0];
    var jsLoader= document.createElement('script');
    jsLoader.type= 'text/javascript';



    jsLoader.onload = function() {

        if(typeof cb === "function") {
            if(timeout && timeout<1000) {
                setTimeout(function () {
                    cb(paras);
                }, timeout);
            } else{
                cb(paras);
            }

        }
    };

    jsLoader.onerror = function(e) {

        if(typeof errorCb === "function") {
            errorCb(paras);
        }
    };
    jsLoader.src = src;
    _doc.appendChild(jsLoader);

    if(errorCb && (timeout && timeout>=1000 || errorTimerout&&errorTimerout>=1000)) {
        var tout = timeout>=1000 ? timeout : errorTimerout;
        if(errorCb && (errorCb.name === "parseLiveDataFromVdnWhenError" || errorCb.name === "checkLivebackCopyrightWhenError")) {
            livePlayerObjs[paras.divId].vdnTimer = setTimeout(function () {
                errorCb(paras, "timeout");
            }, tout);
        } else{
            setTimeout(function () {
                errorCb(paras);
            }, tout);
        }

    }


}



function liveChangeWindowToNormal(playerId) {

    var containerId = playerId.replace("flashplayer_", "");
    var containerObj = document.getElementById(containerId);
    var obj = document.getElementById(playerId);
    var originalStyle = "";

    if(!containerObj || !obj) {
        return "false";
    }


    if(obj.getAttribute("originalStyle") && obj.getAttribute("originalStyle").length>3) {
        originalStyle = obj.getAttribute("originalStyle");
    } else{
        originalStyle = containerObj.getAttribute("style");
        obj.setAttribute("originalStyle", originalStyle);
    }

    containerObj.style.cssText = originalStyle;

    //containerObjWidth = parseInt(containerObj.offsetWidth);
    //containerObj.style.width = containerObjWidth + "px";

    obj.setAttribute("isPageFullsreen", "false");
    document.body.style.overflow = "visible";

    if(typeof tellPageWhenNomalScreen !== "undefined") {
        tellPageWhenNomalScreen(containerId);
    }

    return "true";
}


function liveChangeWindowToWebFullSceen(playerId) {

    var containerId = playerId.replace("flashplayer_", "");

    var containerObj = document.getElementById(containerId);
    var obj = document.getElementById(playerId);
    var originalStyle = "";

    if(!containerObj || !obj) {
        return "false";
    }

    if(obj.getAttribute("originalStyle") && obj.getAttribute("originalStyle").length>3) {

        originalStyle = obj.getAttribute("originalStyle");
        containerObj.style.cssText = "";
    } else{
        originalStyle = containerObj.getAttribute("style");
        obj.setAttribute("originalStyle", originalStyle);
    }

    containerObj.style.position = "fixed";
    containerObj.style.zIndex = "999";
    containerObj.style.top = "0px";
    containerObj.style.left = "0px";
    containerObj.style.bottom = "0px";
    containerObj.style.width = "100%";
    containerObj.style.height = "auto";
    containerObj.style.maxHeight = "100%";

    obj.setAttribute("isPageFullsreen", "true");
    document.body.style.overflow = "hidden";

    if(typeof tellPageWhenFullScreen !== "undefined") {
        tellPageWhenFullScreen(containerId);
    }

    return "true";
}


/*
conviva start
 */

function initLiveConviva(paras) {
    if(typeof Conviva === "undefined") {
        return;
    }

    var systemSettings = new Conviva.SystemSettings();

    var systemInterface = new Conviva.SystemInterface(
        new Conviva.Impl.Html5Time(),
        new Conviva.Impl.Html5Timer(),
        new Conviva.Impl.Html5Http(),
        new Conviva.Impl.Html5Storage(),
        new Conviva.Impl.Html5Metadata(),
        new Conviva.Impl.Html5Logging()
    );
    systemFactory = new Conviva.SystemFactory(systemInterface, systemSettings);

    //Customer integration CUSTOMER_KEY
    var CUSTOMER_KEY = "03798c7108aa9ad57f419fa2a1c7e155f38a6343";
    var clientSettings = new Conviva.ClientSettings(CUSTOMER_KEY);
    clientSettings.gatewayUrl = "https://cws-cctv.conviva.com";
    liveConvivaClient = new Conviva.Client(clientSettings, systemFactory);
    liveConvivaPlayerStateManager = liveConvivaClient.getPlayerStateManager();
}


function createFlvHtml5ConvivaEvent(paras) {
    var voice = "no";
    var eventAttributes = {
        "assetName": paras.t,
        "device": "[WEB.HTML5].[HTML5].[" + livePlayerVer + "]",
        "client": "[" + livePlayerObjs[paras.divId].vdn.vdnISPCode + "].[" + livePlayerObjs[paras.divId].vdn.vdnCityCode + "].[" + livePlayerObjs[paras.divId].vdn.vdnProvinceCode + "].[" + livePlayerObjs[paras.divId].vdn.vdnCountryCode + "].[" + livePlayerObjs[paras.divId].vdn.vdnIP + "]",
        "voice": voice
    };
    var checkTimer = setInterval(function (){
        if(liveConvivaClient && typeof(Conviva)!="undefined") {
            clearInterval(checkTimer);
            liveConvivaClient.sendCustomEvent(Conviva.Client.NO_SESSION_KEY, "NO_COPYRIGHT_EVENT", eventAttributes);
        }
    }, 50);

}



function createLiveConvivaSession(paras, errorMsg) {
    if(liveConvivaClient && liveConvivaPlayerStateManager) {

        if(liveConvivaClient && liveConvivaClient.cleanupSession && livePlayerObjs[paras.divId].convivaSessionKey!==undefined && (!Array.isArray(livePlayerObjs.adCallsAPI) || livePlayerObjs.adCallsAPI.length<1)) {

            try {

                liveConvivaClient.cleanupSession(livePlayerObjs[paras.divId].convivaSessionKey);
                livePlayerObjs[paras.divId].convivaSessionKey = undefined;

            } catch (e) {

            }

        }

        //Create metadata
        var contentMetadata = new Conviva.ContentMetadata();



        if(!livePlayerObjs[paras.divId].video.url) {
            contentMetadata.streamUrl = livePlayerObjs[paras.divId].vdn.vdnUrl;
        }

        contentMetadata.streamType = Conviva.ContentMetadata.StreamType.LIVE;

        var tags = {};


        if(errorMsg==="VDN_REQUEST_FAILED" || errorMsg==="VDN_REQUEST_TIMEOUT") {
            contentMetadata.defaultResource = "";
            contentMetadata.streamUrl = livePlayerObjs[paras.divId].vdn.vdnUrl;
            tags.cdnCode = "";
        } else {
            contentMetadata.defaultResource = livePlayerObjs[paras.divId].vdn.cdnName;
            contentMetadata.streamUrl = livePlayerObjs[paras.divId].video.url;

            if(livePlayerObjs[paras.divId].streamType === "flv") {
                contentMetadata.streamUrl = livePlayerObjs[paras.divId].streamUrl ? livePlayerObjs[paras.divId].streamUrl : "";
            }

            tags.cdnCode = livePlayerObjs[paras.divId].vdn.cdnName;
        }

        contentMetadata.assetName = paras.t;


        if(isIPad()) {
            liveConvivaPlayerStateManager.setBitrateKbps(900);
            contentMetadata.defaultBitrateKbps = Math.floor(900); // in Kbps
            tags.playAMR = "F";
        } else{
            liveConvivaPlayerStateManager.setBitrateKbps(1780);
            contentMetadata.defaultBitrateKbps = Math.floor(1780); // in Kbps
            tags.playAMR = "T";
        }

        var errorMsgDiv = document.getElementById("error_msg_"+paras.divId);
        if(livePlayerObjs[paras.divId].video&&livePlayerObjs[paras.divId].video.audioUrl&&errorMsgDiv&&errorMsgDiv.innerHTML.indexOf("听")>0) {
            tags.streamProtocol = "hls6";
            contentMetadata.applicationName = "HTML5_LIVE_AUDIO_PLAYER";
            if(livePlayerObjs[paras.divId].isDrm===false) {
                contentMetadata.applicationName = "CNTV_HTML5_AUDIO_PLAYER";
            }
            contentMetadata.streamUrl = livePlayerObjs[paras.divId].video.audioUrl;
        } else{

            tags.streamProtocol = "HLS";
            if(livePlayerObjs[paras.divId].streamType === "flv") {
                tags.streamProtocol = "FLV";
            }

            if(paras.playerType === "liveback") {
                contentMetadata.applicationName = "HTML5_LIVEBACK_DRM_PLAYER";
                if(livePlayerObjs[paras.divId].isDrm === false) {
                    contentMetadata.applicationName = "CNTV_HTML5_LIVEBACKPLAYER";
                }
            } else if(livePlayerObjs[paras.divId] && livePlayerObjs[paras.divId].video && livePlayerObjs[paras.divId].video.url  && livePlayerObjs[paras.divId].video.url.indexOf("begintimeabs=")>0) {
                contentMetadata.applicationName = "HTML5_LIVESHIFT_DRM_PLAYER";
                if(livePlayerObjs[paras.divId].isDrm===false) {
                    contentMetadata.applicationName = "HTML5_LIVESHIFT_PLAYER";
                }
            } else{
                contentMetadata.applicationName = "HTML5_CDN_LIVE_DRM_PLAYER";
                if(livePlayerObjs[paras.divId].isDrm===false) {
                    contentMetadata.applicationName = "CNTV_HTML5_PLAYER";
                }
            }

        }






        if(typeof(userid) != "undefined" && typeof(userid) == "string") {
            contentMetadata.viewerId = userid;
        } else{
            contentMetadata.viewerId = getCookie_vdn("Fingerprint") ? getCookie_vdn("Fingerprint"):"";
        }




        if(isIPad()) {
            tags.playScene = "HTML5.PHD";
        } else{
            tags.playScene = "HTML5.PC";
        }

        tags.appName = "WEB.HTML5";

        tags.channel = paras.t;
        tags.contentId = paras.t;

        var urlSplit = location.href.split("/");
        if(urlSplit.length > 1) {
            tags.site = urlSplit[2];
        }



        tags.playerVersion = livePlayerVer;
        tags.referURL = location.href.substr(0, 127);
        tags.videoProfileType = "VDN";
        if(isLiveEnableP2p && livePlayerObjs[paras.divId].isP2p) {
            tags.P2PStyle = "T";
        } else{
            tags.P2PStyle = "F";
        }


        tags.streamMBR = "1";
        tags.streamReload = "F";



        tags.cdncip = "0";
        tags.cdnsip = "0";
        tags.crbPath = "";




        if(/(iphone|ipad)/i.test(navigator.userAgent)) {
            tags.convivaPrefix = "HTML5.IOS";
        } else if(/(Android)/i.test(navigator.userAgent)) {
            tags.convivaPrefix = "HTML5.AND";
        } else if(/windows|win32/i.test(navigator.userAgent)) {
            tags.convivaPrefix = "HTML5.WIN";
        } else if(/macintosh|mac os x/i.test(navigator.userAgent)) {
            tags.convivaPrefix = "HTML5.MAC";
        } else {
            tags.convivaPrefix = "";
        }



        tags.vdnSID = livePlayerObjs[paras.divId].vdn.sid;
        tags.vdnIP = livePlayerObjs[paras.divId].vdn.vdnIP;
        tags.vdnCountryCode = livePlayerObjs[paras.divId].vdn.vdnCountryCode;
        tags.vdnProvinceCode = livePlayerObjs[paras.divId].vdn.vdnProvinceCode;
        tags.vdnCityCode = livePlayerObjs[paras.divId].vdn.vdnCityCode;
        tags.vdnISPCode = livePlayerObjs[paras.divId].vdn.vdnISPCode;

        if(!livePlayerObjs[paras.divId].adCallsIsPlayed) {
            tags.hasAds = "T";
        } else{
            tags.hasAds = "F";
        }

        tags.playerAlterName = "live_html5";
        tags.playerType = paras.playerType;
        if(isLiveHlsJsSupported()) {
            tags.playerFrame = "video";
        } else{
            tags.playerFrame = "canvas";
        }

        contentMetadata.custom = tags;

        var videoElement = document.getElementById("h5player_" + paras.divId) || document.getElementById("h5player_error_" + paras.divId);

        // Create a Conviva monitoring session.



        livePlayerObjs[paras.divId].convivaSessionKey = liveConvivaClient.createSession(contentMetadata);
        livePlayerObjs[paras.divId].convivaSessionCreated = true;






        //vdn请求失败后的报错
        if(!livePlayerObjs[paras.divId].video.url || errorMsg) {

            liveConvivaClient.reportError(
                livePlayerObjs[paras.divId].convivaSessionKey,
                errorMsg?errorMsg:"VDN_REQUEST_FAILED",
                Conviva.Client.ErrorSeverity.FATAL
            );



            liveConvivaClient.cleanupSession(livePlayerObjs[paras.divId].convivaSessionKey);
            livePlayerObjs[paras.divId].convivaSessionKey = undefined;
            return;
        } else {
            // var html5PlayerInterface = new Html5PlayerInterface(liveConvivaPlayerStateManager, videoElement);
            var html5PlayerInterface = new Conviva.Impl.Html5PlayerInterface(liveConvivaPlayerStateManager, videoElement, systemFactory);

        }


        // sessionKey was obtained as shown above
        liveConvivaClient.attachPlayer(livePlayerObjs[paras.divId].convivaSessionKey, liveConvivaPlayerStateManager);

        videoElement.addEventListener('error', function() {
            if(livePlayerObjs[paras.divId].adCallsIsPlayed) {
                cleanupSession();
            }

        });

        videoElement.addEventListener('ended', function() {
            if(livePlayerObjs[paras.divId].adCallsIsPlayed && document.getElementById("control_bar_"+paras.divId)) {
                //cleanupSession();
            }
        });

        window.addEventListener('beforeunload', function(){
            cleanupSession();

        });

        function cleanupSession() {
            liveConvivaClient.cleanupSession(livePlayerObjs[paras.divId].convivaSessionKey);
            livePlayerObjs[paras.divId].convivaSessionKey = undefined;
        }




    }

}

function setLiveConvivaMetadata(paras, errorMsg) {
    livePlayerObjs[paras.divId].convivaIsChecked = false;

    if(livePlayerObjs.convivaJsLoaded && document.getElementById("h5player_"+paras.divId)) {
        createLiveConvivaSession(paras, errorMsg);
    } else {
        var checkTimeout = 0;



        var checkSessionTimer = setInterval(function() {
            checkTimeout++;
            var player = document.getElementById("h5player_"+paras.divId) || document.getElementById("h5player_error_"+paras.divId);

            if(liveConvivaClient && liveConvivaPlayerStateManager && checkTimeout<32 && player && !livePlayerObjs[paras.divId].convivaIsChecked) {
                livePlayerObjs[paras.divId].convivaIsChecked = true;
                clearInterval(checkSessionTimer);
                createLiveConvivaSession(paras, errorMsg);


            }

            if (checkTimeout > 30) {
                clearInterval(checkSessionTimer);
            }

            if(!player) {
                var playerError = document.createElement("video");
                playerError.style.display = "none";
                playerError.setAttribute("id", "h5player_error_" + paras.divId);
                document.getElementById(paras.divId).appendChild(playerError);
            }

        }, 300);



    }



}


/*
conviva end
 */


/*
ws start
 */
function createLiveWsSession(paras, errorMsg) {
    var playerId = "h5player_" + paras.divId;
    if(!document.getElementById(playerId) && !errorMsg) {
        return;
    }

    var playerInfo = "HTML5_CDN_LIVE_DRM_PLAYER";
    if(livePlayerObjs[paras.divId].isDrm===false) {
        appName = "CNTV_HTML5_PLAYER";
    }

    if(livePlayerObjs[paras.divId] && livePlayerObjs[paras.divId].video && livePlayerObjs[paras.divId].video.url) {
        if(livePlayerObjs[paras.divId].video.url.indexOf("begintimeabs=")>0) {
            playerInfo = "HTML5_LIVESHIFT_DRM_PLAYER";

            if(livePlayerObjs[paras.divId].isDrm===false) {
                appName = "HTML5_LIVESHIFT_PLAYER";
            }
        }
        if(livePlayerObjs[paras.divId].video.url.indexOf("begintimeabs=")>0 && livePlayerObjs[paras.divId].video.url.indexOf("endtimeabs=")>0) {
            playerInfo = "HTML5_LIVEBACK_DRM_PLAYER";

            if(livePlayerObjs[paras.divId].isDrm===false) {
                appName = "CNTV_HTML5_LIVEBACKPLAYER";
            }
        }

    }

    playerInfo += ("/" + livePlayerVer);

    var P2PStyle = "F";
    if(isLiveEnableP2p && livePlayerObjs[paras.divId].isP2p) {
        P2PStyle = "T";
    }

    var streamUrl = "";
    var streamProtocol = "";
    if(livePlayerObjs[paras.divId].streamType === "flv") {
        streamUrl = livePlayerObjs[paras.divId].streamUrl ? livePlayerObjs[paras.divId].streamUrl : "";
        streamProtocol = "FLV";
    } else{
        streamUrl = livePlayerObjs[paras.divId].video.url;
        streamProtocol = "HLS";
    }


    var videoData = {
        platform: "H5",
        playerInfo: playerInfo,
        appVer: livePlayerVer,
        channel: paras.t,
        streamType: livePlayerObjs[paras.divId].isLive?"live":"playback",
        streamUrl: streamUrl,
        streamProtocol: streamProtocol,
        cdn: livePlayerObjs[paras.divId].vdn.cdnName,
        ispCode: livePlayerObjs[paras.divId].vdn.vdnISPCode,
        P2PStyle: P2PStyle
    };

    if(typeof dataCollector !== "undefined") {

        setTimeout(function () {
            if(errorMsg) {
                dataCollector.reportErrorEvents(playerId, videoData, errorMsg);
            } else{
                dataCollector.createSession(playerId, videoData);
            }
        }, 20);


    }
}


function setLiveWsMetadata(paras, errorMsg) {

    if(!isUseWsMonitor) {
        return;
    }

    livePlayerObjs[paras.divId].wsIsChecked = false;

    if(livePlayerObjs.wsJsLoaded && (document.getElementById("h5player_"+paras.divId) || errorMsg)) {
        createLiveWsSession(paras, errorMsg);
    } else {
        var checkTimeout = 0;

        var checkSessionTimer = setInterval(function() {
            checkTimeout++;
            var player = document.getElementById("h5player_"+paras.divId) || document.getElementById("h5player_error_"+paras.divId);

            if(checkTimeout<32 && player && !livePlayerObjs[paras.divId].wsIsChecked) {
                livePlayerObjs[paras.divId].wsIsChecked = true;
                clearInterval(checkSessionTimer);
                createLiveWsSession(paras, errorMsg);


            }

            if (checkTimeout > 30) {
                clearInterval(checkSessionTimer);
            }

            if(!player) {
                var playerError = document.createElement("video");
                playerError.style.display = "none";
                playerError.setAttribute("id", "h5player_error_" + paras.divId);
                document.getElementById(paras.divId).appendChild(playerError);
            }

        }, 300);



    }



}
/*
ws collect end
 */


/*
data collect start
 */

function liveAdCallsStartPlay(paras) {
    if(!livePlayerObjs[paras.divId].adCallsIsPlayed) {

        if(!livePlayerObjs.adCallsAPI || !livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum]) {
            return;
        }
        if(!livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].endLoad && livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startLoad) {
            livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].endLoad = Date.parse(new Date());
            livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].loadTime = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].endLoad - livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].startLoad;

            if(isUseAliMonitor) {
                sendLiveAliAdCallsRequestData(paras, "play.1.42");
            }
        }

    }
}



function sendLiveAdCallsDataByAliApi(paras, type) {

    var para = "";
    var playerId = "h5player_" + paras.divId;
    var loadStart = 0;

    var videoData = {
        type: "LIVE",
        ad_url: livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].hlsUrl,
        ad_v_id: livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].guid,
        ad_sum: livePlayerObjs.adCallsAPI.length,
        ad_num: livePlayerObjs.adCallsPlayingNum+1,
        ad_len: livePlayerObjs.adCallsAPI.length*15,
        v_id: paras.t,
        channel: paras.t,
        playerversion: livePlayerVer,
        bit: "900",
        streamProtocol: "HLS",
        referURL: encodeURIComponent(location.href.substr(0, 127)),
        cdnCode: livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].cdnCode,
        videoProfile: "vdn"

    };

    if(goldlog[playerId] && goldlog[playerId].createTime) {
        loadStart = goldlog[playerId].createTime;

    } else{
        loadStart = Date.parse(new Date())/1000;
        goldlog[playerId] = {};
        goldlog[playerId].createTime = loadStart;
    }

    videoData.createTime = loadStart;
    videoData.loadTime = livePlayerObjs.adCallsAPI[livePlayerObjs.adCallsPlayingNum].loadTime;


    if(document.referrer) {
        videoData.referer = encodeURIComponent(document.referrer.substr(0, 127));
    }

    var paraKeys = Object.keys(videoData);

    paraKeys.forEach(function(item) {
        para += "&" + item + "=" + videoData[item];

    });

    var playScene = "";
    if(isIPad()) {
        playScene = "HTML5.PHD";
    } else{
        playScene = "HTML5.PC";
    }


    goldlog.record("/"+type,"","playScene="+playScene+para,"");

}

function sendLiveAliAdCallsRequestData(paras, type) {

    if(typeof goldlog !== "undefined" && document.getElementById("h5player_"+paras.divId)) {
        sendLiveAdCallsDataByAliApi(paras, type);
        return;
    }

    var checkTimeout = 0;
    var checkTimer = setInterval(function () {
        checkTimeout++;

        if(checkTimeout > 50){
            clearInterval(checkTimer);
            return;
        }

        if(typeof goldlog !== "undefined" && document.getElementById("h5player_"+paras.divId)) {
            clearInterval(checkTimer);
            sendLiveAdCallsDataByAliApi(paras, type);
        }
    }, 150);
}

function setCntvLiveMetadata(paras, msgType, errorMsg) {

    var videoId = "h5player_" + paras.divId;
    var videoData = null;
    var urlSplit = "";
    var appName = "HTML5_CDN_LIVE_DRM_PLAYER";
    if(livePlayerObjs[paras.divId].isDrm===false) {
        appName = "CNTV_HTML5_PLAYER";
    }
    if(livePlayerObjs[paras.divId] && livePlayerObjs[paras.divId].video && livePlayerObjs[paras.divId].video.url) {
        if(livePlayerObjs[paras.divId].video.url.indexOf("begintimeabs=")>0) {
            appName = "HTML5_LIVESHIFT_DRM_PLAYER";

            if(livePlayerObjs[paras.divId].isDrm===false) {
                appName = "HTML5_LIVESHIFT_PLAYER";
            }
        }
        if(livePlayerObjs[paras.divId].video.url.indexOf("begintimeabs=")>0 && livePlayerObjs[paras.divId].video.url.indexOf("endtimeabs=")>0) {
            appName = "HTML5_LIVEBACK_DRM_PLAYER";

            if(livePlayerObjs[paras.divId].isDrm===false) {
                appName = "CNTV_HTML5_LIVEBACKPLAYER";
            }
        }

    }

    var playScene = "";
    if(isIPad()) {
        playScene = "HTML5.PHD";
    } else{
        playScene = "HTML5.PC";
    }

    var P2PStyle = "F";
    if(isLiveEnableP2p && livePlayerObjs[paras.divId].isP2p) {
        P2PStyle = "T";
    }

    var streamUrl = "";
    var streamProtocol = "";
    var cdnName = livePlayerObjs[paras.divId].vdn.cdnName;
    var cdncip = "";
    var cdnsip = "";
    if(livePlayerObjs[paras.divId].cdncip) {
        cdncip = livePlayerObjs[paras.divId].cdncip;
    }
    if(livePlayerObjs[paras.divId].cdnsip) {
        cdnsip = livePlayerObjs[paras.divId].cdnsip;
    }

    if(livePlayerObjs[paras.divId].isLive && (paras.others==="flv"||typeof paras.others==="string" && paras.others.indexOf(".flv")>0)) {
        streamUrl = livePlayerObjs[paras.divId].streamUrl ? livePlayerObjs[paras.divId].streamUrl : "";
        streamProtocol = "FLV";
        if(livePlayerObjs[paras.divId].vdn.flvCdnName) {
            cdnName = livePlayerObjs[paras.divId].vdn.flvCdnName;
        } else{
            cdnName = "unknown";
        }

    } else{
        streamUrl = livePlayerObjs[paras.divId].video.url;
        streamProtocol = "HLS";
    }
    streamUrl = encodeURIComponent(streamUrl);

    var playMsgType = "1.24";
    if(errorMsg==="VDN_REQUEST_FAILED" || errorMsg==="VDN_PARSE_ERROR" || errorMsg==="VDN_REQUEST_TIMEOUT") {
        playMsgType = "1.4";
    }


    if(msgType=="690003") {
        videoData = {
            playScene: playScene,
            type: "LIVE",
            column: paras.t,
            v_id: paras.t,
            channel: paras.t,
            column: paras.t,
            ver: livePlayerVer,
            applicationName: appName,
            playerName: appName,
            streamType: livePlayerObjs[paras.divId].isLive?"live":"liveback",
            assetName: paras.t,
            streamUrl: "",
            playAMR: "F",
            streamMBR: "1",
            bit: "900",
            streamProtocol: streamProtocol,
            videoProfile: "vdn",
            P2PStyle: P2PStyle,
            error_code: msgType,
            error_info: errorMsg
        };

        urlSplit = location.href.split("/");
        if(urlSplit.length > 1 && typeof(goldlog) != "undefined" && typeof(goldlog.initSession) != "undefined") {
            videoData.site = encodeURIComponent(urlSplit[2]);
        }


    } else{

        videoData = {
            playScene: playScene,
            column: paras.t,
            v_id: paras.t,
            channel: paras.t,
            ver: livePlayerVer,
            applicationName: appName,
            playerName: appName,
            streamType: livePlayerObjs[paras.divId].isLive?"live":"liveback",
            assetName: paras.t,
            streamUrl: streamUrl,
            playAMR: "F",
            streamMBR: "1",
            bit: "900",
            streamProtocol: streamProtocol,
            cdnCode: cdnName,
            videoProfile: "vdn",
            vdnSID: livePlayerObjs[paras.divId].vdn.sid,
            vdnIP: livePlayerObjs[paras.divId].vdn.vdnIP,
            vdnCountryCode: livePlayerObjs[paras.divId].vdn.vdnCountryCode,
            vdnProvinceCode: livePlayerObjs[paras.divId].vdn.vdnProvinceCode,
            vdnCityCode: livePlayerObjs[paras.divId].vdn.vdnCityCode,
            vdnISPCode: livePlayerObjs[paras.divId].vdn.vdnISPCode,
            cdncip:cdncip,
            cdnsip:cdnsip,
            public: livePlayerObjs[paras.divId].vdn.public,
            P2PStyle: P2PStyle

        };


        var urlSplit = location.href.split("/");
        if(urlSplit.length > 1) {
            videoData.site = encodeURIComponent(urlSplit[2]);
        }


    }



    if(typeof(goldlog) != "undefined" && typeof(goldlog.startSession) != "undefined") {
        if(msgType == "init") {
            goldlog.initSession(videoId, videoData);
        } else if(msgType=="690003") {
            var createTime = "";
            if(goldlog[videoId] && goldlog[videoId].createTime) {
                createTime = goldlog[videoId].createTime;
            } else{
                createTime = Date.parse(new Date())/1000;
            }

            var paraKeys = Object.keys(videoData);
            var para = "";

            paraKeys.forEach(function(item) {
                switch(item) {
                    case "ver":
                        para += "&playerversion=" + videoData[item];
                        break;
                    case "vdnSID":
                        para += "&client_sid=" + videoData[item];
                        break;
                    case "vdnIP":
                        para += "&lc_ip=" + videoData[item];
                        break;
                    case "vdnCountryCode":
                        para += "&lc_coun=" + videoData[item];
                        break;
                    case "vdnProvinceCode":
                        para += "&lc_prov=" + videoData[item];
                        break;
                    case "vdnCityCode":
                        para += "&lc_city=" + videoData[item];
                        break;
                    case "vdnISPCode":
                        para += "&lc_isp=" + videoData[item];
                        break;
                    default:
                        para += "&" + item + "=" + videoData[item];

                }

            });
            para += "&createTime=" + createTime;

            para += "&curURL=" +  encodeURIComponent(location.href.substr(0, 127));

            if(document.referrer) {
                para += "&referURL=" + encodeURIComponent(document.referrer.substr(0, 127));
            } else{
                para += "&referURL=";
            }
            goldlog.record("/play." + playMsgType,"","&type=H5&playtime=0&loadtime=0" + para,"");
        } else{
            goldlog.startSession(videoId, videoData, 20);
        }

    } else{
        var checkTimeout = 0;
        var checkSessionTimer = setInterval(function (){
            checkTimeout++;

            if(checkTimeout > 50){
                clearInterval(checkSessionTimer);
                return;
            }

            if(typeof(goldlog) != "undefined" && typeof(goldlog.startSession) != "undefined") {
                clearInterval(checkSessionTimer);

                if(msgType=="init") {
                    goldlog.initSession(videoId, videoData);
                } else if(msgType=="690003") {
                    var createTime = "";
                    if(goldlog[videoId] && goldlog[videoId].createTime) {
                        createTime = goldlog[videoId].createTime;
                    } else{
                        createTime = Date.parse(new Date())/1000;
                    }

                    var paraKeys = Object.keys(videoData);
                    var para = "";

                    paraKeys.forEach(function(item) {
                        switch(item) {
                            case "ver":
                                para += "&playerversion=" + videoData[item];
                                break;
                            case "vdnSID":
                                para += "&client_sid=" + videoData[item];
                                break;
                            case "vdnIP":
                                para += "&lc_ip=" + videoData[item];
                                break;
                            case "vdnCountryCode":
                                para += "&lc_coun=" + videoData[item];
                                break;
                            case "vdnProvinceCode":
                                para += "&lc_prov=" + videoData[item];
                                break;
                            case "vdnCityCode":
                                para += "&lc_city=" + videoData[item];
                                break;
                            case "vdnISPCode":
                                para += "&lc_isp=" + videoData[item];
                                break;
                            default:
                                para += "&" + item + "=" + videoData[item];

                        }

                    });
                    para += "&createTime=" + createTime;

                    para += "&curURL=" +  encodeURIComponent(location.href.substr(0, 127));

                    if(document.referrer) {
                        para += "&referURL=" + encodeURIComponent(document.referrer.substr(0, 127));
                    } else{
                        para += "&referURL=";
                    }
                    goldlog.record("/play." + playMsgType,"","&type=H5&playtime=0&loadtime=0" + para,"");
                } else{
                    goldlog.startSession(videoId, videoData, 20);
                }

            }
        }, 200);
    }


}

/*
data collect end
 */



function doLoadLiveAliAnalyticsJs(paras) {

    var jsLoader = createElementByType("script","convivaJs237","absolute","0px","0px","0px","0px");
    if(paras.isHttps==="true") {

        jsLoader.src = "https://js.data.cctv.com/__aplus_plugin_cctv.js,aplus_plugin_aplus_u.js";
    } else{
        jsLoader.src = "http://js.data.cctv.com/__aplus_plugin_cctv.js,aplus_plugin_aplus_u.js";
    }


    var _doc = document.getElementsByTagName('head')[0];
    _doc.appendChild(jsLoader);
}


function isTimeshift(paras) {
    return paras.playerType==="live" && paras.st && paras.st-1000000000>0;
}

function isLiveEs6Supported() {
    /*检查是否支持ES6*/
    var checkEs7Arr = [];
    if(isIPad() && checkEs7Arr && !(checkEs7Arr.includes)) {
        return false;
    } else{
        return true;
    }
}

function isLiveHlsJsSupported() {
    var mediaSource = window.MediaSource || window.WebKitMediaSource;
    if (!mediaSource) {
        return false;
    }

    if(/(iphone|ipad)/i.test(navigator.userAgent)) {
        return false;
    }



    // var isSafari = /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent);
    // if(isSafari){
    //     return false;
    // }
    var sourceBuffer = SourceBuffer || window.WebKitSourceBuffer;
    var isTypeSupported = mediaSource && typeof mediaSource.isTypeSupported === 'function' && mediaSource.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"'); // if SourceBuffer is exposed ensure its API is valid
    // safari and old version of Chrome doe not expose SourceBuffer globally so checking SourceBuffer.prototype is impossible
    var sourceBufferValidAPI = !sourceBuffer || sourceBuffer.prototype && typeof sourceBuffer.prototype.appendBuffer === 'function' && typeof sourceBuffer.prototype.remove === 'function';
    return !!isTypeSupported && !!sourceBufferValidAPI;
}


function isWasmSupported() {
    try {
        if (typeof WebAssembly === "object"
            && typeof WebAssembly.instantiate === "function") {
            var module = new WebAssembly.Module(Uint8Array.of(0x0, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00));
            if (module instanceof WebAssembly.Module) {
                return new WebAssembly.Instance(module) instanceof WebAssembly.Instance;
            }

        }
    } catch (e) {
    }
    return false;
}

//flash播放器创建成功后，flash调用方法
function flashIsCreated(){

    if(livePlayerObjs.flashLiveback && livePlayerObjs.flashLiveback.flashId && livePlayerObjs.flashLiveback.start) {
        document.getElementById(livePlayerObjs.flashLiveback.flashId).PageCallFlash({"IsLive":"false","ShiftTime":livePlayerObjs.flashLiveback.start});
    }


}


function getFlashVer(){
    var fls = flashChecker();
    var s = "";
    if(fls.f && (fls.v>=33)) {
        isFlashPlayer = true;
    } else {
        isFlashPlayer = false;
    }
}


function flashChecker(){
    var hasFlash = 0;
    var flashVersion = 0;
    var isIE = /*@cc_on!@*/0;

    if(isIE) {
        try{
            var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
            if(swf) {
                hasFlash = 1;
                VSwf = swf.GetVariable("$version");
                flashVersion = parseInt(VSwf.split(' ')[1].split(",")[0]);
            }
        }catch(e) {

        }
    }else{
        if(navigator.plugins && navigator.plugins.length > 0) {
            try{
                var swf=navigator.plugins["Shockwave Flash"];
                if(swf) {
                    hasFlash = 1;
                    var words = swf.description.split(" ");
                    for(var i = 0; i < words.length; ++i) {
                        if(isNaN(parseInt(words[i]))) {
                            continue;
                        }

                        flashVersion = parseInt(words[i]);

                        if(!isIPad() && getChromeVersion()>=55 && flashVersion>=23 && swf.filename==="internal-not-yet-present"){
                            flashVersion = 22;
                        }
                    }
                }
            }catch(e){
            }
        }
    }
    return {
        f:hasFlash,
        v:flashVersion
    };
}


function showLivePlayerPosterImg(paras) {
    var htmls = "";
    htmls = '<div id="poster_' + paras.divId + '" style="position:absolute;top:0px;left:0px;margin:0 auto;text-align:center;width:100%;height:100%;cursor:pointer;z-index:20;">';
    if(paras.posterImg && paras.posterImg.length>3) {
        htmls += '<img src="' + paras.posterImg + '" style="width:100%;height:100%;object-fit:contain;">';
    }
    htmls += '</div>';
    document.getElementById(paras.divId).insertAdjacentHTML("afterBegin", htmls);

    var playBtn = "//player.cntv.cn/html5Player/images/20190905/play.png";
    if(paras.ui === "ipanda") {
        playBtn = "//player.cntv.cn/html5Player/images/ipanda20201204/play.png";
    }

    var btnStyle = "bottom:18px;left:18px;width:48px;";
    var btnImgStyle = "width:48px;height:48px;padding:0px;";
    if(paras.isLeftBottom === "false") {
        btnStyle = "top:50%;margin:-24px auto 0;text-align:center;width:100%;";

        if(isIPad()) {
            btnImgStyle = "width:30px;height:30px;padding:9px;";
        }
    } else{
        if(isIPad()) {
            btnStyle = "bottom:0px;left:9px;width:48px;";
            btnImgStyle = "width:30px;height:30px;padding:9px;";
        }
    }



    htmls = '<div id="poster_playbtn_' + paras.divId + '" style="position:absolute;' + btnStyle + 'height:48px;cursor:pointer;z-index:23;">';
    htmls += '<img src="' + playBtn + '" style="' + btnImgStyle + '">';
    htmls += '</div>';

    document.getElementById(paras.divId).insertAdjacentHTML("afterBegin", htmls);


    document.getElementById("poster_playbtn_"+paras.divId).addEventListener("click", function (ev) {
        removeLivePlayerPosterImg(paras);

    }, false);


    document.getElementById(paras.divId).addEventListener('click', function (ev) {
        removeLivePlayerPosterImg(paras);
        
    }, false);
}


function removeLivePlayerPosterImg(paras) {

    var container = document.getElementById(paras.divId);
    var playBtn = document.getElementById("poster_playbtn_"+paras.divId);
    var posterObj = document.getElementById("poster_"+paras.divId);
    if(!playBtn && !posterObj) {
        return;
    }

    if(document.getElementById("html5Player-" + paras.divId)) {
        return;
    }

    if(isIPad()) {
        livePlayerObjs[paras.divId].hasPosterImg = true;
    }


    if(playBtn) {
        container.removeChild(playBtn);
    }

    if(posterObj) {
        container.removeChild(document.getElementById("poster_"+paras.divId));
    }
    paras.posterImg = "";

    if(/(iphone|ipad)/i.test(navigator.userAgent)) {
        livePlayerObjs.isSdrmAutoPlay = "true";
    }

    if(!isNewH5LivePlayer(livePlayerObjs[paras.divId])) {
        paras.isAutoPlay = "true";
    }


    if(paras.others && (paras.others.indexOf(".m3u8")>0 || paras.others.indexOf(".ts")>0)) {
        livePlayerObjs[paras.divId].video.url = paras.others;
        livePlayerObjs[paras.divId].vdn.public = "1";
        parseLiveDataFromVdn(paras, true)
    } else{
        if(livePlayerObjs[paras.divId].vdn.vdnUrl.indexOf("liveHtml5.do?") > 0) {
            loadLiveScript(livePlayerObjs[paras.divId].vdn.vdnUrl, parseLiveDataFromVdn, paras, parseLiveDataFromVdnWhenError, 10000);
        } else{
            doLoadLiveDataByAjax(livePlayerObjs[paras.divId].vdn.vdnUrl, "", parseLiveDataFromVdn, paras, parseLiveDataFromVdnWhenError, 10000);
        }
    }

    createLiveVideoLoadingImg(paras);


}

function showNoDrmMsg(paras, isLive) {
    var isShow = false;
    if(!isLiveHlsJsSupported() || !isWasmSupported()) {
        var msgChannelListA = ["cctv3","cctv5","cctv5plus","cctv6","cctv8","cctv16"];
        var msgChannelListB = ["cctv2","cctv4","cctv7","cctvjilu","cctv10","cctv11","cctv12","cctvchild","cctv15","cctv17","cctveurope","cctvamerica"];

        if(msgChannelListA.indexOf(paras.t) !== -1) {
            isShow = true;
            showLivePlayerMsg(paras, "本时段节目请使用电脑端观看");
        } else if(msgChannelListB.indexOf(paras.t) !== -1) {
            isShow = true;
            showLivePlayerMsg(paras, "本时段节目请使用电脑端或央视影音客户端观看");
        } else{
            isShow = false;
        }

        //解决偶发的有提示语时，有播放按钮问题
        if(isShow) {
            var controlsBar = document.getElementById("control_bar_" + paras.divId);
            if(controlsBar) {
                controlsBar.style.display = "none";
            }
        }

    }

    return isShow;
}

function getLiveVdnTipMsg(msg) {
    var tipMsg = msg;
    if(tipMsg) {
        tipMsg += "";
        if(tipMsg.length > 0) {
            tipMsg = tipMsg.replace(/(   )/g, '<br />');
        }
    } else{
        tipMsg = liveStatusMsg.public_0_default;
    }
    return tipMsg;
}

function showLivePlayerErrorMsg(paras) {

    var retryErrorMsg = '网络开小差了，';

    if(!isIPad() && document.getElementById(paras.divId)) {
        document.getElementById(paras.divId).innerHTML = "";
    }
    retryErrorMsg += '请稍后再试';

    showLivePlayerMsg(paras, retryErrorMsg);
}

function showLivePlayerMsg(paras, errorMsg, isCopyrightcheck) {

    destroyH5LiveHls(paras, isCopyrightcheck);

    //重新设置大数据1.4故障上报开关
    if(livePlayerObjs[paras.divId]) {
        livePlayerObjs[paras.divId].errorIsReported = false;
    }


    var container = document.getElementById(paras.divId);
    if(document.getElementById("h5player_"+paras.divId)) {
        document.getElementById("h5player_"+paras.divId).pause();
        document.getElementById("h5player_"+paras.divId).style.display = "none";
    }

    if(document.getElementById("h5canvas_"+paras.divId)) {
        document.getElementById("h5canvas_"+paras.divId).style.display = "none";
    }


    if(isIPad() && document.getElementById("control_bar_"+paras.divId)) {

        document.getElementById("control_bar_"+paras.divId).style.display = "none";
    }

    if(errorMsg && errorMsg.indexOf("刷新")>0) {
        container.innerHTML = "";
    }


    //2021欧洲杯，cctv5和cctv5+给专门提示
    if(errorMsg && errorMsg.indexOf("sorry")!==-1) {
        errorMsg = errorMsg.replace("sorry", "");
        if(paras.t==="cctv5" || paras.t==="cctv5plus") {
            errorMsg = "因版权原因，暂时不提供该时段节目";
            if(isIPad()) {
                errorMsg += "<br />";
            } else{
                errorMsg += "，";
            }

            errorMsg += "请选择央视频观看网络直播";

        }
    }


    var msgDiv = document.getElementById("error_msg_"+paras.divId);
    if(!msgDiv) {
        msgDiv = createElementByType("div", "error_msg_"+paras.divId, "absolute", "100%", "100%", "0", "0");
        var fontSize = "16";
        var lineHight = "28";
        var msgTop = "55%";
        if(isIPad()) {
            fontSize = "14";
            lineHight = "20";
            msgTop = "50%";
        }
        msgDiv.style.cssText = "position:absolute;width:100%;top:" + msgTop + ";color:#FFF;font-size:" + fontSize + "px;line-height:" + lineHight + "px;word-break:break-all;font-family:PingFangSC-Regular,Helvetica,Arial,Microsoft Yahei,sans-serif;margin:0 auto;text-align:center;";
        container.appendChild(msgDiv);
    }
    msgDiv.innerHTML = errorMsg;

    showLivePlayerBg(paras.divId);


    if(document.getElementById("loading_"+paras.divId)) {
        document.getElementById("loading_"+paras.divId).style.display = "none";
    }

    var playBtn = document.getElementById("play_or_pause_play_"+paras.divId);
    if(playBtn) {
        LivePlayOrPauseBtn.prototype.switchPlayOrPauseBtn(paras.divId, "pause");
    }


    if(livePlayerObjs[paras.divId] && livePlayerObjs[paras.divId].video) {
        clearInterval(livePlayerObjs[paras.divId].video.playedTimer);
        livePlayerObjs[paras.divId].loadingTime = 0;
    }

    if(isIPad()) {

        /*有版权限制时，且全屏时，则退出全屏*/
        var player = document.getElementById("h5player_" + paras.divId);
        if(errorMsg.indexOf("听")===-1) {

            var fullObj = document.getElementById("player_pagefullscreen_"+paras.divId);
            if(fullObj && fullObj.getAttribute("isPageFullscreen") === "true") {
                fullObj.setAttribute("isPageFullscreen", "true");
                LiveMobileFullscreenBtn.prototype.pageFullscreenClick(paras.divId, "yes");
            } else{
                if(container.contains && container.contains(player)) {
                    /*避免安卓+uc，版权限制时继续播放问题*/

                    if(/(ucbrowser)/i.test(navigator.userAgent) && /(Android)/i.test(navigator.userAgent)) {
                        player.src = "";
                    }


                    if(/(iphone|ipad)/i.test(navigator.userAgent)) {
                        /*避免苹果的画中画模式时，版权限制时继续播放问题*/
                        if(document.exitPictureInPicture) {
                            document.exitPictureInPicture();
                        }
                        /*有提示语时，退出全屏*/
                        container.removeChild(player);
                    }

                } else{
                    if(typeof LiveFullscreenBtn !== "undefined") {
                        LiveFullscreenBtn.prototype.exitFullscreen();
                    }
                }
            }
            var controlsBar = document.getElementById("control_bar_"+paras.divId);
            if(controlsBar) {
                container.removeChild(controlsBar);
            }
        }

    }


}


function removeLiveErrorMsg(paras, isReturnToLive) {
    var container = document.getElementById(paras.divId);
    var errorDiv = document.getElementById("error_msg_"+paras.divId);
    if(errorDiv) {
        container.removeChild(errorDiv);

        //设置播放器的背景图片
        if(isIPad()) {
            var bgImg = "cctv_html5player_bg_16X9.png";
            if(paras.h/paras.w > 1) {
                bgImg = "cctv_html5player_bg_9X16.png";
            }
            if(paras.isHttps === "true") {
                container.style.backgroundImage = "url('https://player.cntv.cn/html5Player/images/" + bgImg + "')";
            } else{
                container.style.backgroundImage = "url('http://player.cntv.cn/html5Player/images/" + bgImg + "')";
            }
        } else{
            container.style.backgroundImage = "";
            container.style.backgroundColor = "#000";
        }


        var player = document.getElementById("h5player_"+paras.divId);
        if(!isIPad()) {
            player.style.display = "block";
        }

        if(document.getElementById("h5canvas_"+paras.divId)) {
            document.getElementById("h5canvas_"+paras.divId).style.display = "block";
        }

        if(document.getElementById("timeshift_bar_" + paras.divId) && !isReturnToLive) {

            createLiveHls(paras);

            var playedTime = 2;
            if(livePlayerObjs[paras.divId].startStamp) {
                playedTime = livePlayerObjs[paras.divId].startStamp;
            }

            var fromStart = 2;
            if(livePlayerObjs[paras.divId].startStamp && livePlayerObjs[paras.divId].startStamp-0>0) {
                fromStart = livePlayerObjs[paras.divId].startStamp;
            }

            LiveTimeshiftBar.prototype.liveTimeUpdate(paras, playedTime);
        }

        if(paras.playerType==="small" || paras.playerType==="hw") {
            createLiveHls(paras);
        }

    }



    var logoImg = document.getElementById("logo_" + paras.divId);
    if(logoImg && document.getElementById(paras.divId)) {
        logoImg.style.display = "none";
        document.getElementById(paras.divId).removeChild(logoImg);
    }


}

function showLivePlayerBg(divId) {
    var container = document.getElementById(divId);
    //显示背景
    //container.style.backgroundImage = "url('//t.live.cntv.cn/cntvwebplay/cntvplayer/images/plug-in_bg.gif')";
    container.style.backgroundImage = "url('//player.cntv.cn/html5Player/images/20190905/cctv_bg.png')";
    container.style.backgroundRepeat = "no-repeat";
    container.style.backgroundPosition = "0px 0px";
    container.style.backgroundSize = "100% 100%";




    if(!document.getElementById("logo_" + divId)) {
        //显示logo
        var htmls = "";
        var logoImg = "//player.cntv.cn/html5Player/images/20190905/cctv_logo.png";

        //通过页面参数设置logo图片
        if(livePlayerObjs[divId].logoImg && livePlayerObjs[divId].logoImg.length>5) {
            logoImg = livePlayerObjs[divId].logoImg;
            logoImg = logoImg.replace("http://", "//");
        }

        if(location.href.indexOf("fromapp=cctvnews")>0) {
            logoImg = "//player.cntv.cn/html5Player/images/20190905/cctv_logo.png";
        }


        if(typeof calledByApp !== "undefined") {
            if(calledByApp === "cctvnews") {
                logoImg = "//player.cntv.cn/html5Player/images/20190905/cctv_logo.png";
            }

        }

        htmls = '<div id="logo_' + divId + '" style="position:absolute;top:20%;margin:0 auto;text-align:center;width:100%;height:15%;cursor:pointer;z-index:20;">';
        htmls += '<img src="' + logoImg +'" style="width:auto;height:100%;display:inline-block;">';
        htmls += '</div>';

        //container.innerHTML += htmls;
        try{
            container.insertAdjacentHTML("afterBegin", htmls);
        } catch (e) {
        }

    }

}

function  showLiveInstallFlashPlayerMsg(playerId, w, h) {

    var msg = "请点此安装最新flash";
    var str = "<div class=\"flash_install\"><a style='color:#cccccc;font-size:16px;text-decoration:underline;' href=\"https://www.flash.cn\" onfocus=\"this.blur()\"><img style=\"display:inline-block\" src=\"//player.cntv.cn/flashplayer/logo/get_adobe_flash_player.png\"/><p style='margin-top:8px;color:#cccccc'>" + msg + "</p></a></div>";

    if(playerId=== "vplayer" && document.getElementById("myFlash") && !document.getElementById("vplayer"))
    {
        playerId = "myFlash";
    }
    var result_box = document.getElementById(playerId);

    var bg =  document.createElement("img");
    bg.position = "absolute";


    showLivePlayerBg(playerId);

    var bgWidth = w;
    var bgHeight = h;
    bg.width = bgWidth;
    bg.height = bgHeight;
    result_box.style.lineHeight = "20px";
    result_box.appendChild(bg);

    var errorPanel = document.createElement("div");
    errorPanel.style.position = "relative";
    errorPanel.style.margin = "0 auto";
    errorPanel.style.left = "0";
    errorPanel.style.width = w + "px";
    errorPanel.style.textAlign = "center";
    errorPanel.style.top = -parseInt(2*bg.height/5) + "px";
    errorPanel.style.color = "#dddddd";
    errorPanel.style.fontSize = "16px";
    errorPanel.style.fontWeight = "bold";
    errorPanel.innerHTML = str;
    errorPanel.align = "center";
    result_box.appendChild(errorPanel);

    return;
}


function showLivePlayerSmallWindow(divId, r, b, w, h) {
    var container = document.getElementById(divId);
    var player = document.getElementById("h5player_" + divId);
    if(!container || !player) {
        return;
    }


    if(!document.getElementById("control_bar_"+divId)) {
        return;
    }

    if(livePlayerObjs[divId] && !livePlayerObjs[divId].isShowSmallWindow) {
        return;
    }

    //如果画中画使用中，就禁止小窗
    /*
    var picInPicText = document.getElementById("pic_in_pic_text_"+divId);
    if(picInPicText && picInPicText.getAttribute("isOn")==="true") {
        return;
    }
    */

    r = r ? r : 20;
    b = b ? b : 20;
    w = w ? w : 428;
    h = parseInt(w*livePlayerObjs[divId].h/livePlayerObjs[divId].w);

    container.style.position = "fixed";
    container.style.right = r + "px";
    container.style.bottom = b + "px";
    container.style.width = w + "px";
    container.style.height = h + "px";
    container.style.margin = "0";


    var constrolBar = document.getElementById("control_bar_"+divId);
    var childNodes = constrolBar.children;
    var len = childNodes.length;
    for(var i=0; i<len; i++) {
        childNodes[i].style.display = "none";
    }


    var timeshiftTimeText = document.getElementById("timeshift_time_"+divId);
    if(timeshiftTimeText) {
        timeshiftTimeText.style.display = "none";
    }


    var playOrPauseBtn = document.getElementById("play_or_plause_"+divId);
    if(playOrPauseBtn) {
        playOrPauseBtn.style.display = "block";
    }

    if(document.getElementById("close_player_"+divId)) {
        document.getElementById("close_player_"+divId).style.display = "block";
    } else{
        var closeBtnBottom = b + h - 30;
        var closeBtnRight = r + 10;
        var isShow = "block";
        var resizeEle = document.querySelector(".dragLayer");
        if(resizeEle) {
            isShow = "none";
        }
        var htmls = '<div id="close_player_' + divId + '" style="position:fixed;bottom:' + closeBtnBottom+ 'px;right:' + closeBtnRight + 'px;margin:2px;text-align:center;width:16;height:16;cursor:pointer;z-index:20;">';
        htmls += '<img src="//player.cntv.cn/html5Player/images/20190905/close_player.png" style="width:12px;height:12px;display:' + isShow +';">';
        htmls += '</div>';

        document.getElementById(divId).insertAdjacentHTML("afterBegin", htmls);
    }




    document.getElementById("close_player_"+divId).addEventListener("click", function (ev) {
        hideLivePlayerSmallWindow(divId);
    }, false);

    var adBannerContainer = document.getElementById(divId);

    if(adBannerContainer) {
        LiveAdBanner.prototype.adBannerShowOrHide(livePlayerObjs[divId], "hide");
    }

    return true;

}


function hideLivePlayerSmallWindow(divId) {

    var container = document.getElementById(divId);
    var containerWidth = container.offsetWidth;

    if(!container || !document.getElementById("control_bar_"+divId) || containerWidth-600>0) {
        return;
    }

    var obj = document.getElementById("player_fullscreen_"+divId);
    if(obj && obj.getAttribute("isFullscreen") === "true") {
        return;
    }

    var originalStyle = container.getAttribute("originalStyle");
    if(document.getElementById("close_player_"+divId)) {
        container.removeChild(document.getElementById("close_player_"+divId));
    }
    container.style.cssText = originalStyle;


    var constrolBar = document.getElementById("control_bar_"+divId);
    var showTags = ["play_or_plause_"+divId, "played_time_"+divId, "player_speed_"+divId, "player_resolution_"+divId, "player_set_"+divId];
    showTags.push("play_next_"+divId);
    showTags.push("player_sound_btn_"+divId);
    showTags.push("player_pagefullscreen_"+divId);
    showTags.push("player_fullscreen_"+divId);
    showTags.push("player_progress_"+divId);
    showTags.push("player_progress_total_"+divId);
    showTags.push("player_progress_played_"+divId);
    showTags.push("player_progress_cached_"+divId);

    showTags.push("timeshift_bar_"+divId);
    showTags.push("timeshift_pointer_"+divId);

    showTags.push("timeshiftbtn_"+divId);

    showTags.push("audio_"+divId);

    if(!livePlayerObjs[divId].isLive) {
        showTags.push("timeshift_time_"+divId);
        showTags.push("return_to_live_"+divId);
    }


    if(constrolBar) {
        constrolBar.style.display = "none";

        var picInPicBtn = document.getElementById("pic_in_pic_"+divId);
        if(picInPicBtn) {
            picInPicBtn.style.display = "none";
        }



        var childNodes = constrolBar.children;
        var len = childNodes.length;
        for(var i=0; i<len; i++) {
            if(showTags.includes(childNodes[i].id)) {
                childNodes[i].style.display = "block";
            }

        }
    }


    return true;


}

function isDrmLegalDomainUrl() {

    var str = "";
    var isInWhiteList = false;

    try {
        //正则获取二级域名
        var _reg = /https?:\/\/(?:[^/]+\.)?([^./]+\.\w*.(?:cn|com|org))(?:$|\/)/;
        //获取根域名
        // var _reg = /https?:\/\/(?:[^/]+\.)?([^./]+\w*.(?:cn|com|org))(?:$|\/)/;
        var _url = window.location.href||self.location.href||document.URL||document.location;
        _url = _url.toString().toLocaleLowerCase();
        str = _reg.exec(_url);
        if(!str){
            var urlArr0 = _url.split("/");
            if(urlArr0 && urlArr0.length>1) {
                str = urlArr0[2];
            } else{
                return false;
            }


        } else {
            str = str[1];
        }


        var whiteList = ["7G179P79P7A47A17G179P7A9", "7G179P79P7A47A17G179P7AA7AG", "7G179P7A97A47A17G179P7A9", "7AJ7AJ7AJ7G17927AY79W7A979H79W7G179P7AA7AG", "79R7A97G17927AY79W7A979H79W7G179P7AA7AG", "7A17G17A97AY79P7G179E7AA7A17G179P7A9", "7AJ7AJ7AJ7G179H7AA79P7A079P79T7927A979W7G179P7A9", "7AJ7AJ7AJ7G179P7A979H7937927A77AG7G179P7AA7AG", "7AJ7AJ7AJ7G17AK7AG7A47A17G179P7A9", "7AJ7AJ7AJ7G179P79T7A979P7AY79W7G17AA7AQ79E", "7AJ7AJ7AJ7G17A979P7AY79W7G079P7A779W7AU7AU79279P7G179P7AA7AG", "7AG7G17A979P7AY79W7G079P7A779W7AU7AU79279P7G179P7AA7AG", "79P7A779W7AU7AU79279P7G179P79T7A979P7AY79W7G17AA7AQ79E", "7G17G57GL7GM7GS7G57G179P7A9", "7AJ7AJ7AJ7G179P7AY7AY79P79P7G179E7AA7A17G179P7A9", "7AJ7AJ7AJ7G179E7AA7A17G179P7A9", "79W79H7AG7927A97G179P7AY7AA7AQ7A479W7A77G179P7A97A47A17927A97A479R7AQ7A979W7A77G179P7A9", "7G179E7AA7A17G179P7A9", "7G17927AY79W7A979H79W7G179P7AA7AG"];

        whiteList.push("7G17AA7A77A57AG7AY79279P79P79T79W7A97A979R7A779P79T7927A979W7G179P7A9");
        whiteList.push("7G17927AY79W7A979H79W7G179P7A9");
        whiteList.push("7G179P7AU7AG7AY7A479R7G179P7AA7AG");





        var key = "7G9AY8QU401JK5LMVBFSCX6DNWOPHR3ET2IZ";
        var l = key.length;
        var a = key.split("");
        var s = "",b, b1, b2, b3;
        for (var i = 0; i <str.length; i ++) {
            b = str.charCodeAt(i);
            b1 = b % l;
            b = (b - b1) / l;
            b2 = b % l;
            b = (b - b2) / l;
            b3 = b % l;
            s += a[b3] + a[b2] + a[b1];
        }

        for(i=0;i<whiteList.length;i++){
            if(s.indexOf(whiteList[i])>=0){
                isInWhiteList = true;
                break;
            }
        }

        if(window.top && window.self && window.top!=window.self) {
            isInWhiteList = false;
        }
    } catch (e) {

    }

    return isInWhiteList;
}

function isIPad() {
    return /(iphone|ipad)/i.test(navigator.userAgent) || /(Android)/i.test(navigator.userAgent);
}

function isCanvasSupported(divId) {
    var isSupported = false;
    var canvas = document.getElementById("h5canvas_"+divId);
    if(canvas && canvas.getContext && isIPad()) {
        isSupported = true;
    }

    var ua = navigator.userAgent.toLowerCase();

    //以下浏览器，用canvas可能会黑屏，这些浏览器不用canvas
    if(ua.indexOf("oppobrowser")>0 || ua.indexOf("firefox")>0 || ua.indexOf("liebao")>0 || ua.indexOf("oneplus")>0) {
        isSupported = false;
    }
    return isSupported;
}

function transformDateToStamp(d) {
    d += "";
    if(d.length===10) {
        return d;
    }
    var startYear = d.substr(0, 4);
    var startMouth = d.substr(4, 2);
    var startDay = d.substr(6, 2);
    var startHour = d.substr(8, 2);
    var startMinute = d.substr(10, 2);
    var startSecond = "00";
    if(d.length === 14) {
        startSecond = d.substr(12, 2);
    }
    var startTimeStr = startYear + "-" + startMouth + "-" + startDay + " " + startHour + ":" + startMinute + ":" + startSecond;
    return datetimeToUnix(startTimeStr);
}


function createElementByType(type,_id,position,_w,_h,_l,_t) {
    var el = document.createElement(type);
    el.setAttribute("id",_id);
    el.style.position = position;
    el.style.width = _w;
    el.style.height = _h;
    el.style.left = _l;
    el.style.top = _t;
    return el;
}


function IsMaxthon() {
    try{
        window.external.max_invoke("GetHotKey");
        return true;
    }catch(ex){
        return false;
    }
}


//动态加载指纹js文件fingerprint2.js
function getLivefingerprint2(){

    var _doc = document.getElementsByTagName("head")[0];
    var jsLoader = createElementByType("script","jsFingerLoader","absolute","0px","0px","0px","0px");
    if(livePlayerObjs.isHttps === "true") {
        jsLoader.src = "https://js.player.cntv.cn/creator/fingerprint2.js";
    } else{
        jsLoader.src = "http://js.player.cntv.cn/creator/fingerprint2.js";
    }

    _doc.appendChild(jsLoader);
    if(typeof jsLoader.onload != "undefined"){

        jsLoader.onload = function() {
            getFingerprint();
        };
    }

    if(typeof jsLoader.onreadystatechange != "undefined"){
        jsLoader.onreadystatechange = function(){
            if (jsLoader.readyState == 'loaded' || jsLoader.readyState == 'complete'){
                getFingerprint();
            }
        };
    }
}


//设置cookie    2017年7月28日16:11:42
function setCookie_vdn(key,value,day){
    if(day){
        var d = new Date();
        d.setTime(d.getTime() + day*24*60*60*1000);
        document.cookie=key + "=" + value + ";expires=" + d.toGMTString();
    }else{
        document.cookie=key + "=" + value;
    }

    try{
        if(window.localStorage) {
            localStorage.setItem(key, value);
        }
    } catch (e) {

    }

}
//删除cookie方法
function removeCookie_vdn(key) {
    setCookie_vdn(key,"",-1);
}
//获取cookie方法
function getCookie_vdn( key ) {

    var v = "";
    //判断是否含有cookie ，有cookie 就获取出来
    if( document.cookie ){
        var str = document.cookie;//获取cookie信息   键1=值1; 键2=值1; 键3=值3;
        var arr = str.split("; ");//将cookie文件按照 ;   拆成数组
        for(var i = 0 ; i <arr.length ; i++){
            var  item = arr[i].split("=");// 将数组中的每一个字符串通过=拆成一个小数组 [键1,值1]
            //判断小数组中 根据已知的键  下标为 [0] 为已知键，找到对应的值
            if(item[0] == key){
                v = item[1].toString();//将key对应的值返回此处返回的为字符串 将return JSON.parse(item[1])
                break;
            }
        }

    }
    v += "";

    try{
        if((!v ||v.length<20) && window.localStorage) {
            v = localStorage[key] ? localStorage[key] : "";
        }
    } catch (e) {
        v = "";
    }

    //如果没有cookie ，返回一个空数组
    return v;
}
//定义指纹信息在cookie中的key值
function getFingerprint() {
    var fp = new Fingerprint2();
    fp.get(function(result) {
        setCookie_vdn("Fingerprint",result.toUpperCase(),7);
    });
}


function thisMovie(movieName) {
    if (navigator.appName.indexOf("Microsoft") != -1) {
        return window[movieName];
    } else {
        return document[movieName];
    }
}


var clientInfo={os:null,browser:null,broserVersion:null,osVersion:null};
(function() {

    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent)
                || this.searchVersion(navigator.appVersion)
                || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i=0;i<data.length;i++)	{
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                }
                else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index+this.versionSearchString.length+1));
        },
        dataBrowser: [
            {
                string: navigator.userAgent,
                subString: "Chrome",
                identity: "Chrome"
            },
            { 	string: navigator.userAgent,
                subString: "OmniWeb",
                versionSearch: "OmniWeb/",
                identity: "OmniWeb"
            },
            {
                string: navigator.vendor,
                subString: "Apple",
                identity: "Safari",
                versionSearch: "Version"
            },
            {
                prop: window.opera,
                identity: "Opera"
            },
            {
                string: navigator.vendor,
                subString: "iCab",
                identity: "iCab"
            },
            {
                string: navigator.vendor,
                subString: "KDE",
                identity: "Konqueror"
            },
            {
                string: navigator.userAgent,
                subString: "Firefox",
                identity: "Firefox"
            },
            {
                string: navigator.vendor,
                subString: "Camino",
                identity: "Camino"
            },
            {		// for newer Netscapes (6+)
                string: navigator.userAgent,
                subString: "Netscape",
                identity: "Netscape"
            },
            {
                string: navigator.userAgent,
                subString: "MSIE",
                identity: "Explorer",
                versionSearch: "MSIE"
            },
            {
                string: navigator.userAgent,
                subString: "Gecko",
                identity: "Mozilla",
                versionSearch: "rv"
            },
            { 		// for older Netscapes (4-)
                string: navigator.userAgent,
                subString: "Mozilla",
                identity: "Netscape",
                versionSearch: "Mozilla"
            }
        ],
        dataOS : [
            {
                string: navigator.platform,
                subString: "Win",
                identity: "Windows"
            },
            {
                string: navigator.platform,
                subString: "Mac",
                identity: "Mac"
            },
            {
                string: navigator.userAgent,
                subString: "iPhone",
                identity: "iPhone/iPod"
            },
            {
                string: navigator.userAgent,
                subString: "iPad",
                identity: "iPad"
            },
            {
                string: navigator.platform,
                subString: "Linux",
                identity: "Linux"
            }
        ]
    };
    BrowserDetect.init();
    clientInfo.os = BrowserDetect.OS;
    clientInfo.browser = BrowserDetect.browser;
    clientInfo.broserVersion  = BrowserDetect.version;
})();

var liveStatusMsg = {
    "ack_no_and_status_002": "该视频已下架，请观看其他视频",
    "ack_no_and_status_003": "该视频已下架，请观看其他视频",
    "ack_no_and_status_004": "该视频不存在",
    "ack_no_and_status_005": "该视频审核中，请选择观看其他精彩视频",
    "ack_no_and_status_006": "收费视频未定价",
    "ack_no_and_status_007": "收费视频无观看权限",
    "ack_no": "网络开小差了，请稍后再试",
    "status_0": "由于播出安排变更，暂不支持播放该时段内容",
    "public_0_default": "由于播出安排变更，暂不支持播放该时段内容",
    "video_protect_0_and_audio_protect_0": "暂不支持播放该视频内容",
    "video_protect_0_and_audio_protect_3": "本时段节目因版权原因，暂时无法播放；<br />请点击播放按钮收听此节目",
    "video_protect_1_and_audio_protect_0": isIPad() ? "本时段节目请使用电脑端观看" : "您所在的地区，暂不支持播放该视频",
    "video_protect_1_and_audio_protect_3": isIPad() ? "暂不支持播放该视频内容；<br />请点击播放按钮收听此节目；<br />或移至电脑端观看效果更佳" : "暂不支持播放该视频内容；<br />请点击播放按钮收听此节目",
    "video_protect_2_and_audio_protect_0": isIPad() ? "本时段节目请使用电脑端观看" : "本时段节目因版权原因，暂时无法播放",
    "video_protect_2_and_audio_protect_3": isIPad() ? "暂不支持播放该视频内容；<br />请点击播放按钮收听此节目" : "暂不支持播放该视频内容；<br />请点击播放按钮收听此节目；<br />或移至移动端观看",
    "video_protect_3_and_audio_protect_0": isIPad() ? "您所在的地区，暂不支持播放该视频" : "本时段节目因版权原因，暂时无法播放，请至央视网移动端观看",
    "video_protect_3_and_audio_protect_3": isIPad() ? "暂不支持播放该视频内容；<br />请点击播放按钮收听此节目" : "暂不支持播放该视频内容；<br />请点击播放按钮收听此节目"
};

var liveLanguageMsg = {
    "en": {
        "ui": {
            "fullscreen": "Fullscreen",
            "exitFullscreen": "Exit fullscreen",
            "noneFullscreen": "This browser does not support fullscreen",
            "webpageFullscreen": "Webpage Fullscreen",
            "exitWebpageFullscreen": "Exit webpage Fullscreen",
            "originalSound": "Audio",
            "ImmersiveSound": "Immersive",
            "loudspeakerBox": "Speaker",
            "earphone": "Earphone",
            "live": "Live",
            "4K": "4K",
            "p1080": "1080P",
            "p720": "SD",
            "p540": "HD",
            "p480": "STD",
            "p360": "LD",
            "auto": "Auto",
            "today": "Today",
            "Monday": "Mon.",
            "Tuesday": "Tue.",
            "Wednesday": "Wed.",
            "Thursday": "Thur.",
            "Friday": "Fri.",
            "Saturday": "Sat.",
            "Sunday": "Sun.",
            "month": ".",
            "day": "",
            "timeshift": "Time shift",
            "returnToLive": "Return to live",
            "picInPic": "Picture in picture",
            "picInPicUsing": "Picture in picture in use",
            "switchChannels": "Channels",
            "ver": "Ver"
        }
    },
    "default": {
        "ui": {
            "fullscreen": "全屏",
            "exitFullscreen": "退出全屏",
            "noneFullscreen": "该浏览器不支持全屏",
            "webpageFullscreen": "网页全屏",
            "exitWebpageFullscreen": "退出网页全屏",
            "originalSound": "原声",
            "ImmersiveSound": "沉浸",
            "loudspeakerBox": "音箱",
            "earphone": "耳机",
            "live": "正在直播",
            "4K": "4K",
            "p1080": "蓝光",
            "p720": "超清",
            "p540": "高清",
            "p480": "标清",
            "p360": "流畅",
            "auto": "自动",
            "today": "今日",
            "Monday": "周一",
            "Tuesday": "周二",
            "Wednesday": "周三",
            "Thursday": "周四",
            "Friday": "周五",
            "Saturday": "周六",
            "Sunday": "周日",
            "month": "月",
            "day": "日",
            "timeshift": "时移",
            "returnToLive": "返回直播",
            "picInPic": "画中画",
            "picInPicUsing": "画中画使用中",
            "switchChannels": "换台",
            "ver": "版本"
        }
    },
    "ui": {
    },
    "errorMsg": {
    },
    "language": {
    }
};




!function(a){"use strict";function b(a,b){var c=(65535&a)+(65535&b),d=(a>>16)+(b>>16)+(c>>16);return d<<16|65535&c}function c(a,b){return a<<b|a>>>32-b}function d(a,d,e,f,g,h){return b(c(b(b(d,a),b(f,h)),g),e)}function e(a,b,c,e,f,g,h){return d(b&c|~b&e,a,b,f,g,h)}function f(a,b,c,e,f,g,h){return d(b&e|c&~e,a,b,f,g,h)}function g(a,b,c,e,f,g,h){return d(b^c^e,a,b,f,g,h)}function h(a,b,c,e,f,g,h){return d(c^(b|~e),a,b,f,g,h)}function i(a,c){a[c>>5]|=128<<c%32,a[(c+64>>>9<<4)+14]=c;var d,i,j,k,l,m=1732584193,n=-271733879,o=-1732584194,p=271733878;for(d=0;d<a.length;d+=16)i=m,j=n,k=o,l=p,m=e(m,n,o,p,a[d],7,-680876936),p=e(p,m,n,o,a[d+1],12,-389564586),o=e(o,p,m,n,a[d+2],17,606105819),n=e(n,o,p,m,a[d+3],22,-1044525330),m=e(m,n,o,p,a[d+4],7,-176418897),p=e(p,m,n,o,a[d+5],12,1200080426),o=e(o,p,m,n,a[d+6],17,-1473231341),n=e(n,o,p,m,a[d+7],22,-45705983),m=e(m,n,o,p,a[d+8],7,1770035416),p=e(p,m,n,o,a[d+9],12,-1958414417),o=e(o,p,m,n,a[d+10],17,-42063),n=e(n,o,p,m,a[d+11],22,-1990404162),m=e(m,n,o,p,a[d+12],7,1804603682),p=e(p,m,n,o,a[d+13],12,-40341101),o=e(o,p,m,n,a[d+14],17,-1502002290),n=e(n,o,p,m,a[d+15],22,1236535329),m=f(m,n,o,p,a[d+1],5,-165796510),p=f(p,m,n,o,a[d+6],9,-1069501632),o=f(o,p,m,n,a[d+11],14,643717713),n=f(n,o,p,m,a[d],20,-373897302),m=f(m,n,o,p,a[d+5],5,-701558691),p=f(p,m,n,o,a[d+10],9,38016083),o=f(o,p,m,n,a[d+15],14,-660478335),n=f(n,o,p,m,a[d+4],20,-405537848),m=f(m,n,o,p,a[d+9],5,568446438),p=f(p,m,n,o,a[d+14],9,-1019803690),o=f(o,p,m,n,a[d+3],14,-187363961),n=f(n,o,p,m,a[d+8],20,1163531501),m=f(m,n,o,p,a[d+13],5,-1444681467),p=f(p,m,n,o,a[d+2],9,-51403784),o=f(o,p,m,n,a[d+7],14,1735328473),n=f(n,o,p,m,a[d+12],20,-1926607734),m=g(m,n,o,p,a[d+5],4,-378558),p=g(p,m,n,o,a[d+8],11,-2022574463),o=g(o,p,m,n,a[d+11],16,1839030562),n=g(n,o,p,m,a[d+14],23,-35309556),m=g(m,n,o,p,a[d+1],4,-1530992060),p=g(p,m,n,o,a[d+4],11,1272893353),o=g(o,p,m,n,a[d+7],16,-155497632),n=g(n,o,p,m,a[d+10],23,-1094730640),m=g(m,n,o,p,a[d+13],4,681279174),p=g(p,m,n,o,a[d],11,-358537222),o=g(o,p,m,n,a[d+3],16,-722521979),n=g(n,o,p,m,a[d+6],23,76029189),m=g(m,n,o,p,a[d+9],4,-640364487),p=g(p,m,n,o,a[d+12],11,-421815835),o=g(o,p,m,n,a[d+15],16,530742520),n=g(n,o,p,m,a[d+2],23,-995338651),m=h(m,n,o,p,a[d],6,-198630844),p=h(p,m,n,o,a[d+7],10,1126891415),o=h(o,p,m,n,a[d+14],15,-1416354905),n=h(n,o,p,m,a[d+5],21,-57434055),m=h(m,n,o,p,a[d+12],6,1700485571),p=h(p,m,n,o,a[d+3],10,-1894986606),o=h(o,p,m,n,a[d+10],15,-1051523),n=h(n,o,p,m,a[d+1],21,-2054922799),m=h(m,n,o,p,a[d+8],6,1873313359),p=h(p,m,n,o,a[d+15],10,-30611744),o=h(o,p,m,n,a[d+6],15,-1560198380),n=h(n,o,p,m,a[d+13],21,1309151649),m=h(m,n,o,p,a[d+4],6,-145523070),p=h(p,m,n,o,a[d+11],10,-1120210379),o=h(o,p,m,n,a[d+2],15,718787259),n=h(n,o,p,m,a[d+9],21,-343485551),m=b(m,i),n=b(n,j),o=b(o,k),p=b(p,l);return[m,n,o,p]}function j(a){var b,c="";for(b=0;b<32*a.length;b+=8)c+=String.fromCharCode(a[b>>5]>>>b%32&255);return c}function k(a){var b,c=[];for(c[(a.length>>2)-1]=void 0,b=0;b<c.length;b+=1)c[b]=0;for(b=0;b<8*a.length;b+=8)c[b>>5]|=(255&a.charCodeAt(b/8))<<b%32;return c}function l(a){return j(i(k(a),8*a.length))}function m(a,b){var c,d,e=k(a),f=[],g=[];for(f[15]=g[15]=void 0,e.length>16&&(e=i(e,8*a.length)),c=0;16>c;c+=1)f[c]=909522486^e[c],g[c]=1549556828^e[c];return d=i(f.concat(k(b)),512+8*b.length),j(i(g.concat(d),640))}function n(a){var b,c,d="0123456789abcdef",e="";for(c=0;c<a.length;c+=1)b=a.charCodeAt(c),e+=d.charAt(b>>>4&15)+d.charAt(15&b);return e}function o(a){return unescape(encodeURIComponent(a))}function p(a){return l(o(a))}function q(a){return n(p(a))}function r(a,b){return m(o(a),o(b))}function s(a,b){return n(r(a,b))}function t(a,b,c){return b?c?r(b,a):s(b,a):c?p(a):q(a)}"function"==typeof define&&define.amd?define(function(){return t}):a.setH5Str=t}(this);



var LazyLoad=(function(doc){var env,head,pending={},pollCount=0,queue={css:[],js:[]},styleSheets=doc.styleSheets;function createNode(name,attrs){var node=doc.createElement(name),attr;for(attr in attrs){if(attrs.hasOwnProperty(attr)){node.setAttribute(attr,attrs[attr])}}return node}function finish(type){var p=pending[type],callback,urls;if(p){callback=p.callback;urls=p.urls;urls.shift();pollCount=0;if(!urls.length){callback&&callback.call(p.context,p.obj);pending[type]=null;queue[type].length&&load(type)}}}function getEnv(){var ua=navigator.userAgent;env={async:doc.createElement('script').async===true};(env.webkit=/AppleWebKit\//.test(ua))||(env.ie=/MSIE|Trident/.test(ua))||(env.opera=/Opera/.test(ua))||(env.gecko=/Gecko\//.test(ua))||(env.unknown=true)}function load(type,urls,callback,obj,context){var _finish=function(){finish(type)},isCSS=type==='css',nodes=[],i,len,node,p,pendingUrls,url;env||getEnv();if(urls){urls=typeof urls==='string'?[urls]:urls.concat();if(isCSS||env.async||env.gecko||env.opera){queue[type].push({urls:urls,callback:callback,obj:obj,context:context})}else{for(i=0,len=urls.length;i<len;++i){queue[type].push({urls:[urls[i]],callback:i===len-1?callback:null,obj:obj,context:context})}}}if(pending[type]||!(p=pending[type]=queue[type].shift())){return}head||(head=doc.head||doc.getElementsByTagName('head')[0]);pendingUrls=p.urls.concat();for(i=0,len=pendingUrls.length;i<len;++i){url=pendingUrls[i];if(isCSS){node=env.gecko?createNode('style'):createNode('link',{href:url,rel:'stylesheet'})}else{node=createNode('script',{src:url});node.async=false}node.className='lazyload';node.setAttribute('charset','utf-8');if(env.ie&&!isCSS&&'onreadystatechange'in node&&!('draggable'in node)){node.onreadystatechange=function(){if(/loaded|complete/.test(node.readyState)){node.onreadystatechange=null;_finish()}}}else if(isCSS&&(env.gecko||env.webkit)){if(env.webkit){p.urls[i]=node.href;pollWebKit()}else{node.innerHTML='@import "'+url+'";';pollGecko(node)}}else{node.onload=node.onerror=_finish}nodes.push(node)}for(i=0,len=nodes.length;i<len;++i){head.appendChild(nodes[i])}}function pollGecko(node){var hasRules;try{hasRules=!!node.sheet.cssRules}catch(ex){pollCount+=1;if(pollCount<200){setTimeout(function(){pollGecko(node)},50)}else{hasRules&&finish('css')}return}finish('css')}function pollWebKit(){var css=pending.css,i;if(css){i=styleSheets.length;while(--i>=0){if(styleSheets[i].href===css.urls[0]){finish('css');break}}pollCount+=1;if(css){if(pollCount<200){setTimeout(pollWebKit,50)}else{finish('css')}}}}return{css:function(urls,callback,obj,context){load('css',urls,callback,obj,context)},js:function(urls,callback,obj,context){load('js',urls,callback,obj,context)}}})(this.document);





window.addEventListener('beforeunload', function(){
    /*注销serviceWorker, 防止PC端模拟苹果手机后对PC端的影响；进一步解决模拟ios后，关闭浏览器再次打开hp问题*/
    try{
        if('serviceWorker' in navigator) {
            navigator.serviceWorker.ready.then(function (registration) {
                if(registration && registration.unregister) {
                    registration.unregister();
                }
            });
        }
    } catch (e) {
    }

});


/*解决清流直播，跟DRM点播切换时，或切换后刷新页面后，直播黑屏问题*/
if(/(iphone|ipad)/i.test(navigator.userAgent) && (/safari/i.test(navigator.userAgent) && !/chrome/i.test(navigator.userAgent) && !/qqbrowser/i.test(navigator.userAgent))) {
    try{
        if( ('serviceWorker' in navigator)) {
            navigator.serviceWorker.ready.then(function (registration) {
                if(registration && registration.unregister) {
                    isLiveIosSafariDrm = true;
                }
            });
        }
    } catch (e) {
    }

}





