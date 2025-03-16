(function yoozooDot(window) {
    var hm = document.createElement("div"),
        s = document.getElementsByTagName("body")[0],
        immediatelyJson = {},//立刻传输的打点内容
        exposedObj = {},//暴露给外部的对象
        navigatorUserAgent = navigator.userAgent,
        getUrl = "https://collect.gtarcade.com/web/images?data=",//上报打点的地址
        currentTime = (new Date()).getTime(),//当前时间
        navigatorUserAgentLower = navigatorUserAgent ? navigatorUserAgent.toLowerCase() : '';

    // 插入节点
    hm.className = "imgBox";
    hm.style.display = "none";
    s.parentNode.insertBefore(hm, s);

    /**
     * ----------------------公共方法（内部调用）---------------------
     */
    var dot = {
        /**
         * 存储参数
         * @param obj
         */
        setDot: function (obj) {
            obj.timestamp = Math.floor((new Date()).getTime() / 1000);
            dot.updateDot(obj);
        },
        /**
         * 发送统一请求方法封装，以及发送请求
         * @param obj
         */
        setImmediatelyJson: function (obj) {
            for (var i in obj) {
                immediatelyJson[i] = obj[i]
            }
        },
        /**
         * cookie的设置与存取
         * @param cname
         * @returns {*}
         */
        getCookie: function (cname) {
            var name = cname + "=", ca = document.cookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') c = c.substring(1);
                if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
            }
            return "";
        },
        /**
         * 设置cookie
         * @param cname
         * @param cvalue
         */
        setCookie: function (cname, cvalue) {
            var d = new Date();
            d.setTime(d.getTime() + (3000 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires + (window.location.href.indexOf("gtarcade.com") > -1 ? "; domain=.gtarcade.com; path=/" : "; path=/")
        },
        /**
         * 判断用户是否允许运行cookie
         * @returns {boolean}
         * @constructor
         */
        cookieEnable: function () {
            var result = false;
            if (navigator.cookiesEnabled) return true;
            document.cookie = "testCookie=yes;";
            var cookieSet = document.cookie;
            if (cookieSet.indexOf("testCookie=yes") > -1) result = true;
            document.cookie = "";
            return result;
        },
        /**
         * 获取浏览器的信息以及版本
         * @returns {{}}
         */
        getBrowserInfo: function () {
            var Sys = {},
                re = /(msie\s|trident|firefox|chrome|opera|version).*?([\d.]+)/,
                m = navigatorUserAgentLower.match(re);
            Sys.browser = m ? m[1].replace(/version/, "'safari") : "";
            Sys.ver = m ? m[2] : "";
            return Sys;
        },
        /**
         * 判断是PC端还是移动端
         * @returns {*}
         */
        browserRedirect: function () {
            var bIsIpad = navigatorUserAgentLower.match(/ipad/i) == "ipad",
                bIsIphoneOs = navigatorUserAgentLower.match(/iphone os/i) == "iphone os",
                bIsMidp = navigatorUserAgentLower.match(/midp/i) == "midp",
                bIsUc7 = navigatorUserAgentLower.match(/rv:1.2.3.4/i) == "rv:1.2.3.4",
                bIsUc = navigatorUserAgentLower.match(/ucweb/i) == "ucweb",
                bIsAndroid = navigatorUserAgentLower.match(/android/i) == "android",
                bIsCE = navigatorUserAgentLower.match(/windows ce/i) == "windows ce",
                bIsWM = navigatorUserAgentLower.match(/windows mobile/i) == "windows mobile",
                bIsWD = navigatorUserAgentLower.match(/gtarcade/i) == "gtarcade";
            if (bIsWD) {
                return "WD"
            } else if (!(bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)) {
                return "PC"
            } else {
                var isAndroid = navigatorUserAgent.indexOf('Android') > -1 || navigatorUserAgent.indexOf('Linux') > -1,
                    isIOS = !!navigatorUserAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
                if (isAndroid) {
                    return "Android"
                }
                if (isIOS) {
                    return "IOS"
                }
            }
        },
        /**
         * 获取操作系统
         * @returns {*}
         */
        getOS: function () {
            var navigatorPlatform = navigator.platform,
                isWin = (navigatorPlatform == "Win32") || (navigatorPlatform == "Windows"),
                isMac = (navigatorPlatform == "Mac68K") || (navigatorPlatform == "MacPPC") || (navigatorPlatform == "Macintosh") || (navigatorPlatform == "MacIntel");
            if (isMac) return "Mac";
            if ((navigatorPlatform == "X11") && !isWin && !isMac) return "Unix";
            if (String(navigatorPlatform).indexOf("Linux") > -1) return navigatorPlatform;
            if (isWin) {
                if (navigatorUserAgent.indexOf("Windows NT 5.0") > -1 || navigatorUserAgent.indexOf("Windows 2000") > -1) return "Win2000";
                if (navigatorUserAgent.indexOf("Windows NT 5.1") > -1 || navigatorUserAgent.indexOf("Windows XP") > -1) return "WinXP";
                if (navigatorUserAgent.indexOf("Windows NT 5.2") > -1 || navigatorUserAgent.indexOf("Windows 2003") > -1) return "Win2003";
                if (navigatorUserAgent.indexOf("Windows NT 6.0") > -1 || navigatorUserAgent.indexOf("Windows Vista") > -1) return "WinVista";
                if (navigatorUserAgent.indexOf("Windows NT 6.1") > -1 || navigatorUserAgent.indexOf("Windows 7") > -1) return "Win7";
                if (navigatorUserAgent.indexOf("Windows NT 10") > -1 || navigatorUserAgent.indexOf("Windows 10") > -1) return "Win10";
                if (navigatorUserAgent.indexOf("Windows NT 6.3") > -1 || navigatorUserAgent.indexOf("Windows 8") > -1) return "Win8";
            }
            return "other";
        },
        /**
         * 检查是否安装了某插件，如果安装了返回版本号
         * @param pluginname
         * @returns {*}
         */
        checkPlugs: function (pluginname) {
            var f = "-", plugins = navigator.plugins;
            if (plugins.length > 0) {
                for (var i = 0; i < navigator.plugins.length; i++) {
                    if (navigator.plugins[i].name.indexOf(pluginname) >= 0) {
                        f = navigator.plugins[i].description.split(pluginname)[1];
                        return f;
                    }
                }
            }
            return false
        },
        /**
         * 发送请求
         * @param json
         */
        updateDot: function (json) {
            var imgBox = dot.getClass("imgBox")[0], obj = {}, arr = [];
            for (var i in immediatelyJson) {
                obj[i] = immediatelyJson[i]
            }
            for (var i in json) {
                obj[i] = json[i]
            }
            !obj.tag ? obj.tag = "collect_web_behavior_data" : null;
            obj.uuid = dot.cookieEnable() ? dot.getCookie("uuid_do") : "";
            arr.push(obj);
            imgBox.innerHTML = '<img src="' + getUrl + encodeURIComponent(dot.encode(JSON.stringify(arr))) + '" alt="">';
        },
        /**
         *为解决兼容性问题，封装获取类名的方法
         * @param className
         * @returns {*}
         */
        getClass: function (className) {
            if (!document.getElementsByClassName) {
                var list = document.getElementsByTagName("*"), temp = [];
                for (var i = 0; i < list.length; i++) {
                    list[i].className == className ? temp.push(list[i]) : null;
                }
                return temp;
            }
            else {
                return document.getElementsByClassName(className);
            }
        },
        /**
         * 获取script后面跟着的参数
         */
        getScriptParams: function () {
            var scriptDom = document.getElementsByTagName("script"), scriptStr = "";
            for (var i = 0; i < scriptDom.length; i++) {
                scriptDom[i].src.indexOf("yoozooDot.js") > -1 ? scriptStr = scriptDom[i].src : null
            }
            return scriptStr.split("form=")[1]
        },
        /**
         * 对base64方法进行封装
         */
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        encode: function (input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = this._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output +
                    this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                    this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
            }
            return output;
        },
        _utf8_encode: function (string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }

            }
            return utftext;
        },
        /**
         * base64解码
         * @param e
         * @returns {string}
         */
        decode: function (e) {
            var t = "";
            var n, r, i;
            var s, o, u, a;
            var f = 0;
            e = e.replace(/[^A-Za-z0-9+/=]/g, "");
            while (f < e.length) {
                s = this._keyStr.indexOf(e.charAt(f++));
                o = this._keyStr.indexOf(e.charAt(f++));
                u = this._keyStr.indexOf(e.charAt(f++));
                a = this._keyStr.indexOf(e.charAt(f++));
                n = s << 2 | o >> 4;
                r = (o & 15) << 4 | u >> 2;
                i = (u & 3) << 6 | a;
                t = t + String.fromCharCode(n);
                if (u != 64) {
                    t = t + String.fromCharCode(r)
                }
                if (a != 64) {
                    t = t + String.fromCharCode(i)
                }
            }
            t = this._utf8_decode(t);
            return t
        },
        _utf8_decode: function (e) {
            var t = "";
            var n = 0;
            var r = c1 = c2 = 0;
            while (n < e.length) {
                r = e.charCodeAt(n);
                if (r < 128) {
                    t += String.fromCharCode(r);
                    n++
                } else if (r > 191 && r < 224) {
                    c2 = e.charCodeAt(n + 1);
                    t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                    n += 2
                } else {
                    c2 = e.charCodeAt(n + 1);
                    c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    };


    /**
     * -----------------需要暴露出去给页面调用的方法（SDK）------------------
     * @type {{customClick: customClick, recordErrorMessages: recordErrorMessages, customDot: customDot}}
     */
    var yoozoo = {
        /**
         * 暴露给外部调用点击事件（string）
         * @param dotRecord
         */
        customClick: function (dotRecord) {
            dot.setDot({
                key_module: dotRecord.split("-")[0] ? dotRecord.split("-")[0] : "",
                key_function: dotRecord.split("-")[1] ? dotRecord.split("-")[1] : "",
                value: dotRecord.split("-")[2] ? dotRecord.split("-")[2] : ""
            });
        },
        /**
         * 暴露给外部调用错误信息（错误码-number，错误提示-string）
         * @param code
         * @param message
         */
        recordErrorMessages: function (code, message) {
            dot.setDot({status: code, error: message});
        },
        /**
         * 自定义的传参供外部调用（Object）
         * @param obj
         */
        customDot: function (obj) {
            if (obj && JSON.stringify(obj) != "{}" && typeof obj == "object") {
                dot.setDot(obj);
                return immediatelyJson;
            }
        },
        /**
         * 暴露给外部调用的接口，用于获取对象
         * @param array
         */
        exposedObject: function (array) {
            if (array && array.length !== 0) {
                exposedObj = {};
                for (var i = 0; i < array.length; i++) {
                    exposedObj[array[i]] = immediatelyJson[array[i]]
                }
                return exposedObj;
            }
        }
    };


    /**
     * 持续统计的内容注释：continue  页面的加载打点
     * 页面加载即可传送打点的注释：immediately
     * 页面一加载即可传送的打点将在页面的后续内容中不再统计，
     */


    /**
     * 用户退出上报数据
     */
    window.addEventListener("beforeunload", function () {
        dot.setDot({event_type: 3, session_time: (new Date()).getTime() - currentTime});
    });


    /**
     * 获取当前URL --immediately
     */
    dot.setImmediatelyJson({cur_url: window.location.href});

    /**
     * 获取当前account(uuzu_account) --immediately
     */
    dot.setImmediatelyJson({
        account: (dot.cookieEnable() && dot.getCookie("uuzu_account")) ?
            dot.decode(decodeURIComponent(dot.getCookie("uuzu_account"))) : ""
    });

    /**
     * 获取当前域名 --immediately
     */
    dot.setImmediatelyJson({cur_host: document.domain});

    /**
     * 获取当前访问的机型是PC还是移动端(iOS/android) --immediately
     */
    dot.setImmediatelyJson({device_type: dot.browserRedirect()});

    /**
     * 获取当前页面的title --immediately
     */
    dot.setImmediatelyJson({title: document.title});

    /**
     * 获取当前时间戳 --immediately
     */
    dot.setImmediatelyJson({event_type: 0, access_time: Math.floor(currentTime / 1000)});

    /**
     * 获取CPU是64还是32 --immediately
     */
    (navigatorUserAgentLower.indexOf("win64") >= 0 || navigatorUserAgentLower.indexOf("wow64") >= 0) ?
        dot.setImmediatelyJson({cpu: "x64"}) : dot.setImmediatelyJson({cpu: navigator.cpuClass});

    /**
     * 获取来源地址referer_url --immediately
     */
    dot.setImmediatelyJson({referer_url: document.referrer ? document.referrer : ""});

    /**
     * 获取浏览器的版本以及信息 --immediately
     */
    dot.setImmediatelyJson({browser: dot.getBrowserInfo().browser, browser_version: dot.getBrowserInfo().ver});

    /**
     * 获取操作系统&版本 --immediately
     */
    dot.setImmediatelyJson({os_version: dot.getOS()});

    /**
     * 获取浏览器宽高 --immediately
     */
    dot.setImmediatelyJson({screen_width: window.screen.width, screen_height: window.screen.height});

    /**
     * 获取当前语言  --immediately
     */
    dot.setImmediatelyJson({lang: navigator.language});

    /**
     * 是否运行了flash --immediately
     */
    dot.setImmediatelyJson({is_flash_enable: dot.checkPlugs('Shockwave Flash')});

    /**
     * 是否允许cookie --immediately
     */
    dot.setImmediatelyJson({is_cookie_enable: dot.cookieEnable()});

    /**
     * 是否运行了java --immediately
     */
    dot.setImmediatelyJson({is_java_enable: navigator.javaEnabled()});

    /**
     * 获取当前时区 --immediately
     */
    dot.setImmediatelyJson({timezone: new Date().getTimezoneOffset() / 60});

    /**
     * 把yoozoo暴露到window中
     */
    window.yoozoo = yoozoo;

    /**
     * 发送请求（页面加载就执行的请求,种下用户的唯一cookie）
     */
    if (dot.cookieEnable() && !dot.getCookie("uuid_do")) {
        var cookieBase = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+",
            str = "";
        for (var i = 0; i < 32; i++) {
            str += cookieBase[Math.floor(cookieBase.length * Math.random())];
        }
        dot.setCookie("uuid_do", str);
    }
    dot.setImmediatelyJson({uuid: dot.cookieEnable() ? dot.getCookie("uuid_do") : ""});
    dot.getScriptParams() !== "doNotUpdatePV" ? yoozoo.customDot({event_type: 0}) : null;
})(window);