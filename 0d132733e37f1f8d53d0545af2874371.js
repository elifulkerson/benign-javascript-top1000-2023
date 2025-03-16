function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
};

// 获取浏览器信息
function getBrowserInfo() {
    var Sys = {};
    var ua = navigator.userAgent.toLowerCase();
    var re = /(msie|firefox|chrome|opera|version).*?([\d.]+)/;
    var m = ua.match(re);
    Sys.browser = m[1].replace(/version/, "'safari");
    Sys.ver = m[2];
    return Sys;
}

//获取操作系统
function getOS() {
    var navigatorPlatform = navigator.platform,
        navigatorUserAgent = navigator.userAgent,
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
}

//判断客户端类型，pc或移动
function deviceType() {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = 'windows';
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = Agents[v];
            break;
        }
    }
    return flag;
}

var sysinfo = getBrowserInfo();

$(".gtarcade_plat_frontpoint").click(function (data) {
    toTakeTag($(this).attr('data_gtarcade_plat_frontpoint'));
})

$(".gtarcade_plat_frontpoint").change(function () {
    var innerValue = $(this).val();
    var data = "www-m-top-menu, " + innerValue + ",";
    toTakeTag(data);
    return false;
})

function toTakeTag(data) {
    var DotStr = data;
    var DotArr = DotStr.split(',');
    var module = DotArr[0];
    var value = DotArr[1];
    var target_url = DotArr[2];
    var target_host = ''
    if (target_url != '') {
        target_host = target_url.split('/')[2]
    }
    //1访问、 2 点击 、 3 曝光 、4 退出访问
    click_report(2, module, value, target_url, target_host)
}

// 页面进入的话执行一次
click_report(1,
    document.domain.indexOf("www.gtarcade.com") > -1 ? 'www-page' : 'www-m-page',
    '', '', '');

/*
class=gtarcade_plat_frontpoint  data_gtarcade_plat_frontpoint='module,value,target_url'
*/
function click_report(point, module, value, target_url='', target_host='') {
    var jsonObj = JSON.parse($("#wwww_dot").attr("ip_info"));
    $.post('https://collect.gtarcade.com', JSON.stringify([{
            tag: 'gtarcade_plat_frontpoint',
            id: '',
            point: point,
            module: module,
            value: value,
            cur_url: location.href,
            cur_host: location.host,
            time: new Date().getTime(),
            timeline: new Date(),
            ip: jsonObj.ip ? jsonObj.ip : "",
            session_id: '',
            account: $("#wwww_dot").attr("account") ? $("#wwww_dot").attr("account") : "",//前端只能拿到昵称
            link_id: '',
            device_id: getCookie('device_id') ? getCookie('device_id') : '',
            version: '',
            type: 1,
            status: 0,
            game_id: 0,
            source_type: 0,
            referer_url: document.referrer,
            referer_host: document.referrer.split('/')[2],
            search_engine: '',
            search_key: '',
            utm_source: '',
            utm_medium: '',
            utm_campaign: '',
            utm_term: '',
            utm_content: '',
            ad_id: '',
            ad_agent: '',
            ad_mediasource: '',
            loadtime: 0,
            browser: sysinfo.browser,
            browser_version: sysinfo.ver,
            os: getOS(),
            os_version: getOS(),
            cpu: '',
            screen_width: window.screen.width,
            screen_height: window.screen.height,
            device_type: deviceType(),
            lang: getCookie('lang') ? getCookie('lang') : 'en-us',
            location_front: '',
            country_front: "",
            city_front: '',
            location: jsonObj.country_code ? jsonObj.country_code : "",
            country: jsonObj.continent_name ? jsonObj.continent_name : "",
            city: "",
            title: document.title,
            target_url: target_url,
            target_host: target_host
        }]),
        function (data) {
            console.log(data);
        }
        ,
        'json'
    )
    ;
}