var scrollCounter = false;
    var videoLoad = true;
    var videoLoaded = false;
    var pageType = typeof signal !== 'undefined' && signal.Content.ArticleId!=null?'article':'notanarticle';
    var cds = /Mobi/.test(navigator.userAgent) && document.body.clientWidth < 737 ? 'Mobile' : /Mobi/.test(navigator.userAgent) && document.body.clientWidth > 767 ? 'Tablet' : 'Desktop';
    var is_sponsored_page = window.location.pathname == '/Sponsored';
    var is_internal_article = window.location.href.indexOf('sponsored=true') != -1
    if (cds == 'Mobile' && !is_sponsored_page && !is_internal_article) {
        videoLoad = false;
        setTimeout(function() {
        //condition for home and section pages
          if(pageType == 'notanarticle') {
                if (!scrollCounter) {
                    scrollCounter = true;
                    console.log('timeout');
                    addThirdPartyLibs();
                    if(videoLoaded == false) {
                        videoLoad = true;
                        loadVideo();
                    }
                }           	
         }//end of condition
        var activityEvents = [
            'keydown', 'touchstart', 'scroll'
        ];
        activityEvents.forEach(function(eventName) {
            document.addEventListener(eventName, function(e) {
                if (!scrollCounter) {
                    scrollCounter = true;
                    console.log(window.scrollY);
                    addThirdPartyLibs();
                    if(videoLoaded == false) {
                        videoLoad = true;
                        loadVideo();
                    }
                }
            }, true);
        });
       }, 4000);
    } else {
        addThirdPartyLibs();
    }
    
    loadGPTJs();
    loadGTMJs();
    //Mawdoo3 mawdoo3scriptjqueryall
    loadModo3AllJs();

    function addThirdPartyLibs() {

        // loadSnowplow();
        let countryCode = getCookie('country-code');
        if(countryCode != null && countryCode != ''){
            signal.User.Country = countryCode;
        }
    }

    var scrollEvent = ['scroll'];
    var userActivity321 = false;
    scrollEvent.forEach(function(eventName) {
        document.addEventListener(eventName, function(e) {
            if (!userActivity321 && window.scrollY >= 100) {
                userActivity321 = true;
                //insert all other libraries here that are not required on page load. e.g(recaptcha JS/CSS libraries, Dailymotion libraries etc.)
                loadSearhAnimationOnHomepage();
                loadIframe();
                loadRecaptcha();
            }
        }, true);
    });
    function createScriptElement(src, callback){
        var elm = document.createElement("script");
        elm.defer = !0;
        elm.type = "text/javascript";
        var b2 = "https:" == document.location.protocol;
        elm.src =  src.toString();
        if(callback != undefined) {
            elm.addEventListener("load", function() {
                callback();
            });
        }
        b2 = document.getElementsByTagName("script")[0];
        b2.parentNode.insertBefore(elm, b2);
    }
    function loadGTMJs() {
        //insert GTM snippet
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.defer = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-K5733BJ');
    }
    
    function loadGPTJs() {
        createScriptElement("//securepubads.g.doubleclick.net/tag/js/gpt.js");
    }
   
    function loadModo3AllJs() {
        createScriptElement("/assets/js/mawdoo3scriptjqueryall116.js", function(){getCountryCode(); HttpOnlyCookie();});
    }
    function loadSearhAnimationOnHomepage() {
        var el = document.getElementById("search_home");
        if(el){
            SearhAnimationOnHomepage();
        }
    }
    function loadRecaptcha() {
        var gcaptcha =  document.querySelector('.recaptcha-div .g-recaptcha');
        if(gcaptcha){
            createScriptElement("https://www.google.com/recaptcha/api.js?hl=ar");
        }
    }
    
    function loadIframe() {
        var frame =  document.querySelector('.embedvideo iframe');
        if(frame){
            var vidSource = frame.getAttribute('data-src');
            var playerSegsPerm = encodeURIComponent('&permutive='+ JSON.parse(localStorage._pdfps || '[]').slice(0,250).join(','));
            var ads_params = encodeURIComponent("articleID%3D"+ (signal.Content.ArticleId ?signal.Content.ArticleId : '') + "%26topic%3D" + (signal.Content.ContentCategoryLevel1?signal.Content.ContentCategoryLevel1:'')+ "%26stopic%3D" + (signal.Content.ContentCategoryLevel2?signal.Content.ContentCategoryLevel2:'') + "%26authors%3D"+(signal.Content.ArticleAuthorName?signal.Content.ArticleAuthorName:'')+"%26keywords="+(signal.Content.Keywords?signal.Content.Keywords:'')+"%26pt%3Darticle%26platform%3Dweb"+playerSegsPerm);
            vidSource += vidSource.indexOf('?') > -1 ? '&' : '?';
            vidSource += 'ads_params=' + ads_params;
            frame.src = vidSource;
            frame.removeAttribute("data-src");
        }
    }

    function loadSnowplow() {
        var snowplow =  document.querySelector('.search-container');
        if(snowplow){
            thirdPartyLibsSearchPage();
        }
    }
    function HttpOnlyCookie() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            signal.User.UserId = this.responseText;
            signal.User.Age = null;
            signal.User.Gender = null;
            
        };
        xhttp.open('GET', '/Http_cookie');
        xhttp.send();
    }
    function getCountryCode() {
        var cc = null;
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
             var result = this.responseText
             var data = result.split('loc=');
            if(data.length > 1){
                setCookie('country-code', data[1].substring(0, 2));
                cc = data[1].substring(0, 2);
                signal.User.Country = cc;
            }
        };
        xhttp.open('GET', 'https://www.cloudflare.com/cdn-cgi/trace');
        xhttp.send();
        return cc;
    }
    //HttpOnlyCookie();