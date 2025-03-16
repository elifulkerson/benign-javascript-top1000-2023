(function() {
            window._atta_load_start = Date.now();
            window._atta_pvId = String(Math.random()) + String(Math.random());
            window._atta_fetch_start = window.performance && window.performance.timing && window.performance.timing.fetchStart;
            function getCookie(b){var f=b+"=";var a=document.cookie.split(";");for(var d=0;d<a.length;d++){var e=a[d];while(e.charAt(0)==" "){e=e.substring(1,e.length)}if(e.indexOf(f)==0){return e.substring(f.length,e.length)}}return null}
            var url = "https%3A%2F%2Fm.apkpure.com%2F";
            var hasFeatureUnifiedUrl = false;
            if(!hasFeatureUnifiedUrl && url && /ipod|iphone|ipad|android|symbianos|blackberry|webos|windows phone/i.test(navigator.userAgent)) {
                if (getCookie('mobile') != 0) {
                    
                        window.name = JSON.stringify({
                            referrer: document.referrer,
                            createTime: Date.now()
                        });
                    
                    
                    location.href = decodeURIComponent(url);
                    return;
                }
            }
            function setCookie(d,e,h,a,g){var f=d+"="+e;if(h){var b=new Date();b.setTime(b.getTime()+(h*24*60*60*1000));f+="; expires="+b.toGMTString()}f+="; path=/";if(a){f+="; domain="+a}if(g){f+="; secure"}document.cookie=f};
            window.nextByApkpure = function (u) {if(u){setCookie("apkpure__next", u, 300, 'apkpure.com');}};
            Redirect={getLangCookie:function(){return getCookie("apkpure__lang")},setLangCookie:function(a){setCookie("apkpure__lang",a,300,"apkpure.com")},isMainURL:function(){return Redirect.lang()==="en"&&'true'==="true"},lang:function(){return"en"},isShowLangTip:false,langGoll:"",langGoUrl:"",prefix:"https://apkpure.com",getQueryString:function(a){var b=new RegExp("(^|&)"+a+"=([^&]*)(&|$)","i");var c=location.search.substr(1).match(b);if(c!=null){return unescape(decodeURI(c[2]))}return null}, getRedirectUrl:function(d){var c="";if(Redirect.getQueryString('utm_source')==="pwa"){c="?utm_source=pwa&utm_medium=homesceen&utm_campaign=webapp&launcher=true"}return Redirect.prefix+"/"+d+"/"+c},isBetaLang:function(a){return['fa'].indexOf(a)!==-1?true:false},getNavigatorLang:function(){return Redirect.translateLang(navigator.language)},translateLang:function(a){if(a=="en"||a.indexOf("en-")>=0){return"en"}else{if(a=="br"||a=="pt"||a.indexOf("pt-")>=0){return"br"}else{if(a=="zh-TW"){return"tw"}else{if(a=="cn"||a.indexOf("zh")>=0||a.indexOf("cn-")>=0||a.indexOf("zh-")>=0){return"cn"}else{if(a=="ar"||a.indexOf("ar-")>=0){return"ar"}else{if(a=="jp"||a.indexOf("jp-")>=0||a=="ja"||a.indexOf("ja-")>=0){return"jp"}else{if(a=="es"||a.indexOf("es-")>=0){return"es"}else{if(a=="ru"||a.indexOf("ru-")>=0){return"ru"}else{if(a=="in"||a.indexOf("in-")>=0){return"in"}else{if(a=="id"||a.indexOf("id-")>=0){return"id"}else{if(a=="it"||a.indexOf("it-")>=0){return"it"}else{if(a=="nl"||a.indexOf("nl-")>=0){return"nl"}else{if(a=="pl"||a.indexOf("pl-")>=0){return"pl"}else{if(a=='de'||a.indexOf('de-')>=0){return "de"}else{if(a=='vi'||a.indexOf('vi-')>=0){return "vn"}else{if(a=='fr'||a.indexOf('fr-') >=0){return "fr"}else{if(a=='tr'||a.indexOf('tr-') >=0){return "tr"}else{if(a=='ko'||a.indexOf('ko-') >=0){return "kr"}else{if(a=='ms'||a.indexOf('ms-') >=0){return "ms"}else{if(a=='th'||a.indexOf('th-') >=0){return "th"}else{if(a=='ur'||a.indexOf('ur-') >=0){return "ur"}else{if(a=='bn'||a.indexOf('bn-') >=0){return "bn"}else{if (a=='fa' || a.indexOf('fa-') >= 0) { return "fa" } else { return "en" }}}}}}}}}}}}}}}}}}}}}}}},check:function(){var b=Redirect.getLangCookie();if(!b){if(!Redirect.isMainURL()){Redirect.setLangCookie(Redirect.lang())}else{var a=Redirect.getNavigatorLang();if(Redirect.isBetaLang(a)){Redirect.isShowLangTip=true;Redirect.langGoll=a;Redirect.langGoUrl=Redirect.getRedirectUrl(a)}else{Redirect.setLangCookie(a);if(Redirect.getQueryString('utm_source') === "googleads"){return;}Redirect.run(Redirect.getLangCookie())}}}else{if(b==="menu"){Redirect.setLangCookie(Redirect.lang())}else{if(Redirect.isMainURL()){Redirect.run(b)}}}},run:function(a){if(a&&a!=="en"){ window.name = JSON.stringify({ referrer: document.referrer, createTime: Date.now() }); location.href=Redirect.getRedirectUrl(a)}}};
            Redirect.check();
            setCookie("apkpure__country",'US',300,"apkpure.com");
            window.policy_review = {listeners:[],effective:'20180525',isReview:function(){return getCookie("apkpure__policy_review") != policy_review.effective},setReview:function (){setCookie("apkpure__policy_review",policy_review.effective,300,"apkpure.com");document.getElementById('policy-info').style.display='none';this.listeners.forEach(function(e){(typeof e ==="function")&&e()});},addListener:function(f){this.listeners.push(f)}};
            window.sampleByApkpure={init:function(){var e=getCookie("apkpure__sample");if(e)window.sampleByApkpure.setFlag(e);else{var p=Math.random();setCookie("apkpure__sample",p,1,"apkpure.com"),window.sampleByApkpure.setFlag(p)}},setFlag:function(e){Number(window.sampleByApkpure.rate)>Number(e)&&(window.sampleByApkpure.collect=!0)},collect:!1,rate:"0.001"};
            window.sampleByApkpure.init();
            
                var cookieMap = {"_dt_sample":0.8730570675578677,"_dt_referrer_fix":0.8243324760570554,"_tag_sample":0.41600554015997004,"_home_article_entry_sample":0.15141768741012607,"_related_recommend":0.7498284519115135,"_download_detail_sample":0.5225533381777461,"_f_sp":729361655};
                for (var key in cookieMap) {
                    setCookie(key, cookieMap[key], 1, 'apkpure.com');
                }
            
        })();