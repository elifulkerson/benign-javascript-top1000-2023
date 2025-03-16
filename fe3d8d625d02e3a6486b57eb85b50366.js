(function () {
        window._apkAttaReport = function(err_msg, event_code) {
            function safeJsonParse(str) {
                try {
                    return JSON.parse(str);
                } catch (e) {
                    return {};
                }
            };
            function getFixReferrer() {
                var dtReferrerFixJson = window.name ? safeJsonParse(window.name) : null;
                if (dtReferrerFixJson
                    && dtReferrerFixJson.createTime
                    && Date.now() - dtReferrerFixJson.createTime < 30 * 1000
                    && Date.now() - dtReferrerFixJson.createTime > 0) {
                    return dtReferrerFixJson.referrer || '';
                }
                return 'none';
            }
            function getRandom(len) {
                var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz0123456789';
                var uuid = '';
                for (var i = 0; i < len; i++) {
                    uuid += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                return uuid;
            };
            function httpRequest(url, data) {
                var querys = [];

                Object.getOwnPropertyNames(data).forEach(function (key) {
                    querys.push(key + '=' + encodeURIComponent(data[key]));
                });
                var reqUrl = url + '?' + querys.join('&');
                var xhr = new XMLHttpRequest();
                xhr.open("GET", reqUrl, true);
                xhr.send();
            }
            function setCookie(name, value, days, domain, secure) {
                var c = name + "=" + value;
                if (days) {
                    var date = new Date();
                    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
                    c += "; expires=" + date.toGMTString();
                }
                c += '; path=/';
                if (domain) {
                    c += '; domain=' + domain;
                }
                if (secure) {
                    c += '; secure'
                }
                document.cookie = c;
            }
            function getCookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                }
                return null;
            }
            function createDeviceId() {
                var BEACON_DEVICE_ID_KEY = '__BEACON_deviceId';
                var QIEMI_KEY = '_qimei'
                var COOKIE_DOMAIN = 'apkpure.com';
                var COOKIE_MAX_AGE = 365;
                var deviceId = window.localStorage.getItem(BEACON_DEVICE_ID_KEY);
                var qimei = getCookie(QIEMI_KEY);
                var useCookieUserId = true;
                if (qimei && useCookieUserId) {
                  window.localStorage.setItem(BEACON_DEVICE_ID_KEY, qimei);
                  return qimei;
                }
                if (deviceId) {
                  setCookie(QIEMI_KEY, deviceId, COOKIE_MAX_AGE, COOKIE_DOMAIN);
                  return deviceId;
                }
                deviceId = 'atta' + getRandom(28);
                window.localStorage.setItem(BEACON_DEVICE_ID_KEY, deviceId);
                setCookie(QIEMI_KEY, deviceId, COOKIE_MAX_AGE, COOKIE_DOMAIN);
                return deviceId;
            };
            var user_id = createDeviceId();
            var beaconIndex = window._beaconIndex;
            if (!beaconIndex) {
                beaconIndex = (Number(window.localStorage.getItem(user_id + "_index")) || 0) + 1;
            }
            
            
                var reqUrl = "https://tapi.pureapk.com/report/search_report";
                var data = {report_from: 'tapi.pureapk.com'};
            
            data.project = 'channelReport';
            data.atta_id = '05900073415';
            data.user_id = user_id;
            data.url = location.href;
            data.ua = navigator.userAgent;
            data.event_time = Date.now();
            data.timezone = new Date().getTimezoneOffset();
            data.beacon_index = beaconIndex;
            data.document_referrer = document.referrer;
            data.referrer = getFixReferrer();
            data.event_code = event_code;
            data.log_id = getRandom(10);
            data.ext_info = JSON.stringify({ err_msg: err_msg });
            data.report_spend = Date.now() - window._atta_load_start;
            data.fetch_start_spend = Date.now() - window._atta_fetch_start;
            data.pv_id = window._atta_pvId;
            httpRequest(reqUrl, data);
        }
        window._apkAttaReportWithCatch = function(err_msg, event_code) {
            try {
                window._apkAttaReport && window._apkAttaReport(err_msg, event_code);
            } catch (err) {
                var err_msg = "err";
                if (err && err.message) {
                    err_msg = err.message;
                }
                window._apkAttaReport && window._apkAttaReport(err_msg, event_code + "_error");
            }
        }
        window._apkAttaReportWithCatch("", "before_all");

    })()