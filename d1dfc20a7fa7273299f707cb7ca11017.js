window.kw_pwlPerformanceTester = (function() {
    try {
        var _cookieName = "kw_pwlpt_";
        var domainSplitted = window.location.hostname.split(".");
        var domain = window.location.hostname === "localhost" ? "localhost" : "." + domainSplitted[domainSplitted.length - 2] + "." + domainSplitted[domainSplitted.length - 1];
        var path = "/";

        function _getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ')
                    c = c.substring(1, c.length);
                if (c.indexOf(nameEQ) == 0)
                    return c.substring(nameEQ.length, c.length);
            }
            return "";
        }

        function _writeCookieProfiler(ckName, value, erase) {
            var _ckName = "";
            var expires = "";
            if (ckName) {
                _ckName = ckName
            }

            if (erase) {
                var date = new Date();
                date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));
                expires = "; expires=" + date.toGMTString();
            }
            document.cookie = _cookieName + _ckName + "=" + value + "___" + Date.now() + expires + "; path=" + path + "; domain=" + domain;
        }

        function _resetTest() {
            _writeCookieProfiler("t0", "", true)
            _writeCookieProfiler("t1", "", true)
            _writeCookieProfiler("t2", "", true)
        }


        var t0Cookie = _getCookie("kw_pwlpt_t0");

        if (t0Cookie) {
            var t0Data = t0Cookie.split("___");
            if (t0Data.length === 2) {
                var urlToTest = t0Data[0];

                if (window === window.top) {
                    if (window.location.origin + window.location.pathname === urlToTest) {
                        _writeCookieProfiler("t1", urlToTest)
                    }
                }
                else {
                    // if (window.top.location.origin + window.top.location.pathname === urlToTest) {
                    //   _writeCookieProfiler("t2", urlToTest)
                    // }
                    _writeCookieProfiler("t2", window.location.href)
                }
            }
        }

        return {
            reset() {
                _resetTest()
            },
            bthInitializer(reset) {
                try {
                    if (reset) {
                        _resetTest()
                    }
                    var btnContainer = document.createElement("div");
                    btnContainer.style.position = "absolute";
                    btnContainer.style.top = 0;
                    btnContainer.style.left = 0;
                    btnContainer.style.bottom = 0;
                    btnContainer.style.right = 0;
                    btnContainer.style.background = "rgba(0,0,0,0.5)";
                    btnContainer.style.zIndex = 100000;

                    var content = `
                      <div style="position: absolute; padding: 50px; background-color: white; top: 50%; left: 50%; transform: translate(-50%, -50%);">
                          <form id="kw_pwlPerformanceTesterForm">
                              <input id="kw_pwlPerformanceTesterUrl" style="borde: solid 1px gray;" placeholder="Pagina da testare">
                              <button type="submit" style="padding: 10px; background-color: gray; border: solid 1px black;">Testa</button>
                          </form>
                      </div>
                    `;

                    btnContainer.innerHTML = content;

                    var form = btnContainer.querySelector("#kw_pwlPerformanceTesterForm");
                    var input = btnContainer.querySelector("#kw_pwlPerformanceTesterUrl");
                    form.addEventListener("submit", function (e) {
                        e.preventDefault();

                        if (input.value) {
                            var url = new URL(input.value);
                            _writeCookieProfiler("t0", url.origin + url.pathname);
                            window.location = url
                        }
                    })
                    document.body.appendChild(btnContainer);
                }
                catch (e) {
                    console.error("kw_pwlPerformanceTester - bthInitializer", e)
                }
            },
            getTestTime() {
                try {
                    var cT0 =  _getCookie("kw_pwlpt_t0");
                    var cT1 =  _getCookie("kw_pwlpt_t1");
                    var cT2 =  _getCookie("kw_pwlpt_t2");

                    if (cT0 && cT1 && cT2) {
                        var t0 = cT0.split("___")[1];
                        var t1 = cT1.split("___")[1];
                        var t2 = cT2.split("___")[1];

                        if (t0 && t1 && t2) {
                            var result = {
                                t1_to_t0: t1 - t0,
                                t2_to_t1: t2 - t1,
                                t2_to_t0: t2 - t0,
                            }

                            return result;
                        }
                    }
                }
                catch (e) {
                    console.error("kw_pwlPerformanceTester - getTestTime", e)

                }
            }
        }
    }
    catch (e) {
        console.error("kw_pwlPerformanceTester", e)
    }
})()



window.kw_site_mode = "page";
if (window.location.href.indexOf("/embed/") > -1) {
  window.kw_site_mode = "embed";
}
try {
    window.kwasyncsetup = true;
    var kw_alt_tlh_regex_3 = /^https?:\/\/(test|pre|www)\.lanuovasardegna\.it/;
    if (location.href.match(kw_alt_tlh_regex_3)) {
		window.kwasyncsetup = false;
    }
} catch(e) {
    console.log('%c[head.js] %c ERROR SETTING kwasyncsetup value => setting false as fallback', 'padding: 2px; background: yellow; color: #000', 'padding: 2px; color: #00F'); 
    window.kwasyncsetup = false;
}
function MNZ_RICH() {}
function MNZ_moreContent() {}
function asr_error() {
    window.kw_tlh_adSetupAvailable = false;
    console.log("%c[head.js] %cLoading TLH Library Manually", 'padding: 2px; background: yellow; color: #000', 'padding: 2px; color: #00F');
    var script = document.createElement('script');
    script.async = false;
    script.onload = function (e, elem) {
		window.kw_tlh_ready();
		console.log('%c[head.js] %cDETECTED MISSING ADSETUP LOADING -> loading single js tlh configuration', 'padding: 2px; background: yellow; color: #000', 'padding: 2px; color: #00F'); 
	};
	script.onerror = function (e) {
		console.log(e);
	};
	script.src = "https://tlh.gedidigital.it/tlh.js";
	document.head.appendChild(script);
}
function kw_tlh_ready() {
    console.log('%c[head.js] %cTLH READY EVENT RECEIVED', 'padding: 2px; background: yellow; color: #000', 'padding: 2px; color: #00F'); 
}
function kw_js_seo_tricks(){
    // resets itself avoiding further executions due to readystate change
    window.kw_js_seo_tricks = function() {};
    console.log("[SEO TRICKS] Adding seo meta");
    var seo_tricks = [
        { 
            url_contains: "//www.lastampa.it/la-zampa/argomenti/cani",
            title: "Cani - La Zampa - La Stampa",
            description: "Notizie sui cani nella nostra vita quotidiana"
        },
        { 
            url_contains: "//www.lastampa.it/la-zampa/argomenti/gatti",
            title: "Gatti - La Zampa - La Stampa",
            description: "Notizie sui gatti nella nostra vita quotidiana"
        },
        { 
            url_contains: "//www.lastampa.it/la-zampa/argomenti/altri_animali",
            title: "Altri animali - La Zampa - La Stampa",
            description: "Notizie sugli animali nei loro ambienti naturali e nelle nostre città. Diritti, curiosità, consigli."
        }
    ];

    if(window.location.href.indexOf("//www.lastampa.it/la-zampa") < 0) {
        console.log("[SEO TRICKS] DIDNT MATCH LA ZAMPA - Aborting seo trick");
        return;
    }
    if(!window.pageType) {
        console.log("[SEO TRICKS] Missing pagetype....aborting");
        return;
    }
    try {
        if (window.pageType === "lista_tag"){
            console.log("[SEO TRICKS] Looping rules");
            for (var i = 0; i < seo_tricks.length; i++) {
                if (window.location.href.indexOf(seo_tricks[i].url_contains) > -1) {
                    console.log("[SEO TRICKS] Matched current url with rule: ", seo_tricks[i].url_contains, "- TITLE ", seo_tricks[i].title, " - DESCRIPTION ", seo_tricks[i].description);  
                    document.title = seo_tricks[i].title;
                    document.querySelector("meta[name=description]").setAttribute("content",seo_tricks[i].description);
                    console.log("[SEO TRICKS] Added seo meta");
                    return;
                }
            }
            console.log("[SEO TRICKS] Didn't match any rule.");
        } else {
            console.log("[SEO TRICKS] Wrong pagetype.");
        }
    } catch(e) {
        console.log("[SEO TRICKS] ERROR EXECUTING SEO TRICKS", e);
    }
}

if (document.readyState !== 'loading') {
    window.kw_js_seo_tricks();
} else {
    document.onreadystatechange = function() {
        if (document.readyState !== 'loading') {
            window.kw_js_seo_tricks();
        }
    }
}