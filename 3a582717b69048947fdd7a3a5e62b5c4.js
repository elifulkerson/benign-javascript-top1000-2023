// affiliate.js
var trace_channel = '';
// ga埋点上报配置
var gtmReportObj = {
  GTM_ID_SUFFIX: "WPNBJKV",
  TID: "UA-4839360-64",
};

// 进入页面，首先取出location.href的所有参数组装为hrefParams，后面根据取参直接根据key取值即可
var hrefParams = {};
window.location.href.replace(/([^?&=]+)=([^?&=#]*)/g, function (_, $1, $2) {
  hrefParams[$1] = hrefParams[$1] ? hrefParams[$1] : $2;
});
// console.log("***hrefParams***", hrefParams);

var scene = "web";

// custom可能包含=号，不能先对decodeURIComponent整个url，再取custom参数，会导致取值异常（如会截断=号）
var custom = null;
var customStr = getParamByName("custom");
try {
  if (isNonEmptyValue(customStr)) {
    // custom包含code_type、type、shopping_id、buy_type、device_id
    custom = JSON.parse(window.atob(decodeURIComponent(customStr)));
    console.log("custom", custom);
  }
} catch (e) {
  console.error(e);
}

var shopping_id = "";
var isBuyPage = isBuyPageFunc();
if (isBuyPage) {
  // 只有buy页面，才需要执行该函数
  shopping_id = create_shopping_id(scene);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getPureUrl(url) {
  return url.split("?")[0];
}

function create_shopping_id(scene) {
  var pureUrl = getPureUrl(window.location.href);
  // 解决buy页面url base64之后包含=特殊字符后，shopping_id取参错误的问题
  var base64PureUrl = window.btoa(pureUrl).replace(/=/g, "~");
  var ShoppingIdkey = "shopping_" + base64PureUrl;
  var ShoppingIdvalue =
    new Date().getTime() + "_" + Math.random().toString().slice(-6);
  var existShoppingIdCkv = getCookie(ShoppingIdkey);
  // in_app场景：shopping_id由内嵌页buy_report_sdk.js生成，每次打开内嵌页都生成新的shopping_id
  // app_to_web场景：shopping_id由客户端跳到buy页面来时在buy页面链接custom参数上带过来
  // only_web场景：shopping_id由内嵌页buy_report_sdk.js生成
  /* 
      only_web场景shopping_id生成规则：
      - create_shopping_id判断若是不存在shopping_id，生成shopping_id=毫秒时间戳+6位随机数，存入cookie（有效期24小时）：key=>value为：md5(当前页面url不带参数)=>毫秒时间戳_6位随机数
      - 更新cookie中extra_param的shopping_id值为上一步生成的值（若是extra_param都不存在，则也生成extra_param，内容中只有shopping_id）
    */
  // in_app场景，每次都生成新的shopping_id
  if (scene === "client") {
    setCookie(ShoppingIdkey, ShoppingIdvalue, 1); // 24小时有效期
    return ShoppingIdvalue;
  }
  // only_web
  if (scene === "web" && existShoppingIdCkv) {
    return existShoppingIdCkv;
  } else {
    setCookie(ShoppingIdkey, ShoppingIdvalue, 1); // 24小时有效期
    return ShoppingIdvalue;
  }
}

function isBuyPageFunc(url) {
  if (!url) {
    url = getPureUrl(window.location.href);
  }
  var isHttps = url.indexOf("https://") !== -1;
  // 是否包含某些关键词
  var isBuyPageInclude =
    /.*\/buy.*|.*\/pay.*|.*\/pricing.*|.*\/purchase.*|.*\/shop.*|.*\/store.*/i.test(
      url
    );
  // 是否包含某些关键词（取反即为不包含）
  var isBuyPageExclude =
    /.*success.*|^store.*|^account.*|^pop.*|^support.*/i.test(url);
  return isHttps && isBuyPageInclude && !isBuyPageExclude;
}

function getParameter(b, a) {
  var c = b.match(new RegExp('[?&]' + a + '=([^&]*)(&?)', 'i'));
  // 原逻辑 c[1] 为'' 时，没有返回值
  return c && c[1] ? c[1] : null;
}

/**
 * @description 因后面取href字段的if都会执行 运用科里化 避免每次都去取window.location.href
 * @param {String} name 
 * @returns 
 */
function getParamByName(name) {
  return hrefParams[name] || '';
}

/**
 * @description new getCookie function 2021-09-23 之前的方法当value是未经encode处理的带"="的值时，会导致取值不全
 * @author yankang@300624.cn
 * @param {String} cookieName
 * @return {String}
 */
function getCookie(cookieName) {
  var cookie = document.cookie;
  var i = cookie.indexOf(cookieName);
  if (i > -1) {
    var starti = i + cookieName.length + 1;
    var endi = cookie.indexOf(';', starti);
    var cookieValue = '';
    if (endi == -1) {
      cookieValue = cookie.slice(starti);
    } else {
      cookieValue = cookie.slice(starti, endi);
    }
    return decodeURIComponent(cookieValue);
  }
  return null;
}

function serviceCookie(params) {
  var xhr = new XMLHttpRequest();
  xhr.open('POST', location.origin + '/trk', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      // 收集种包含order_id的cookie用户行为数据
      if (params && params.indexOf("order_id") !== -1) {
        try {
          params = decodeURIComponent(params);
          sendGTMRequest(
            "cookie_order_id",
            "collect",
            encodeURIComponent(params)
          );
        } catch (err) {
          console.error(err);
        }
      }
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        adrId: xhr.responseText
      });
    }
  };
  xhr.send(params);
}

/**
 *
 * 转化路由参数对象为路由字符串
 * @input {a: 1, b: 2}
 * @output a=1&b=2
 * @param {*} paramsObj
 * @return {*}
 */
function transferParamsObj2Str(paramsObj) {
  var res = "";
  for (var key in paramsObj) {
    res += key + "=" + decodeURIComponent(paramsObj[key]) + "&";
  }
  var lens = res.length;
  if (res.length > 0 && res[lens - 1] === "&") {
    res = res.slice(0, lens - 1); // 去掉多余的&
  }
  return res;
}

/**
 *
 * 是否非空值
 * @param {*} input
 * @return {*} 
 */
function isNonEmptyValue(input) {
  var res = true;
  if (input === undefined || input === null || input === "") {
    res = false;
  }
  return res;
}

/* GA埋点上报公共方法 */
// 解决GA Cookie取值错误的问题
function getGACookie(name) {
  var v = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return v ? decodeURIComponent(v[2]) : null;
}

// 生成唯一ID
function uuid() {
  var s = [];
  var hexDigits = "0123456789abcdef";
  for (var i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
  }
  s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = "-";

  var uuid = s.join("");
  return uuid;
}

function buildParamsObj2String(eventCatagory, eventAction, eventLabel) {
  var gackv = getGACookie("_ga") || "";
  if (gackv && gackv.indexOf("GA1.1.") === 0) {
    gackv = gackv.split("GA1.1.")[1];
  }
  if (gackv && gackv.indexOf("GA1.2.") === 0) {
    gackv = gackv.split("GA1.2.")[1];
  }
  if (gackv && gackv.indexOf("GA1.3.") === 0) {
    gackv = gackv.split("GA1.3.")[1];
  }
  var paramsObj = {
    v: 1,
    _v: "j87",
    a: uuid(),
    t: "event",
    ni: 0,
    ds: "web_GTM-" + gtmReportObj.GTM_ID_SUFFIX + "_15",
    _s: 1,
    dl: window.location.href,
    dp: window.location.pathname,
    ul: "zh-cn",
    de: "UTF-8",
    sd: "24-bit",
    je: 0,
    ec: eventCatagory,
    ea: eventAction,
    el: eventLabel,
    _u: "SCCAAEALAAAAAC~",
    jid: uuid(),
    gjid: uuid(),
    cid: gackv,
    tid: gtmReportObj.TID,
    _r: 1,
    gtm: "2wgbu0" + gtmReportObj.GTM_ID_SUFFIX,
    cd2: gackv,
    cd3: new Date().getTime(), // hitTimeStamp
    z: uuid(),
  };
  var res = "";
  for (var key in paramsObj) {
    res += key + "=" + paramsObj[key] + "&";
  }
  var lens = res.length;
  if (res.length > 0 && res[lens - 1] === "&") {
    res = res.slice(0, lens - 1); // 去掉多余的&
  }
  return res;
}

function sendGTMRequest(eventCatagory, eventAction, eventLabel) {
  if ("function" !== typeof fetch || "function" !== typeof Headers) {
    return false;
  }
  var myHeaders = new Headers();
  myHeaders.append("accept", " */*");
  myHeaders.append("accept-encoding", " gzip, deflate, br");
  myHeaders.append("accept-language", " zh-CN,zh;q=0.9,en;q=0.8");
  myHeaders.append("cache-control", " no-cache");
  myHeaders.append("content-length", " 0");
  myHeaders.append("content-type", " text/plain");
  myHeaders.append("pragma", " no-cache");
  myHeaders.append("sec-fetch-dest", " empty");
  myHeaders.append("sec-fetch-mode", " no-cors");
  myHeaders.append("sec-fetch-site", " cross-site");

  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: "",
    mode: "no-cors",
  };

  var params = buildParamsObj2String(eventCatagory, eventAction, eventLabel);

  fetch("https://www.google-analytics.com/j/collect?" + params, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
}
/* GA埋点上报公共方法 */

function isAccountUrl(href) {
  var res = false;
  if (href.indexOf("accounts.wondershare.com") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.cn") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.cc") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.de") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.fr") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.es") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.net") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.it") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.hk") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.tw") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.kr") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.ae") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.jp") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.co.jp") !== -1) {
    res = true;
  }
  if (href.indexOf("accounts.wondershare.com.br") !== -1) {
    res = true;
  }
  return res;
}

function isCartUrl(href) {
  var res = false;
  if (!href) {
    return false;
  }
  if (href.indexOf("https://store.wondershare.com/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.cn/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.net/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.kr/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.jp/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.it/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.fr/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.es/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.de/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.ae/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.co.jp/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.wondershare.com.br/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.edrawsoft.com/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.iskysoft.com/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.iskysoft.jp/") !== -1) {
    res = true;
  }
  if (href.indexOf("https://store.iskysoft.us/") !== -1) {
    res = true;
  }
  // 如果不包含index.php，则不是购买链接
  if (href.indexOf("index.php") === -1) {
    res = false;
  }
  return res;
}

// ga keywords rank
if (document.referrer.match(/google\.([a-zA-Z]{2,5})/gi) && document.referrer.match(/cd/gi)) {
  var myString = document.referrer;
  var r = myString.match(/cd=(.*?)&/);
  var rank = parseInt(r[1]);
  var kw = myString.match(/q=(.*?)&/);
  var engine = myString.split('/')[2];

  if (kw[1].length > 0) {
    var keyWord = decodeURI(kw[1]);
  } else {
    keyWord = '(not provided)';
  }

  var pn = document.location.pathname;
  _gaq.push(['_trackEvent', engine, keyWord, pn, rank, true]);
}

// PartnerBoost联盟落地页代码
(function () {
  var script = document.createElement('script');
  script.setAttribute('src', 'https://app.partnerboost.com/brand/track.2.0.min.js?bid=85021');
  document.head.appendChild(script);
})();

(function () {
  // 落地页custom 渠道划分
  if (isNonEmptyValue(customStr)) {
    // 是buy页面且custom非空
    if (custom && isBuyPage) {
      // 如果存在custom参数，则完全根据custom生成extra_param Cookie（生成之前需要处理type和buy_type默认值）
      if (!custom.type) {
        custom.type = "web_client_info";
      }
      if (!custom.buy_type) {
        custom.buy_type = "only_web";
      }
      // 解决客户端跳过来，custom解析值中device_id非空，但是购物车数据库表记录的extra_param解析出来的buy_type为only_web的问题
      if (isNonEmptyValue(custom.device_id)) {
        custom.buy_type = "app_to_web";
      }
      // custom解析值中没shopping_id，则新增shopping_id字段；custom解析值中有shopping_id，则保持不变
      if (!custom.shopping_id) {
        custom.shopping_id = shopping_id;
      }
      customStr = window.btoa(JSON.stringify(custom));
    }
    serviceCookie("extra_param=" + customStr);
  } else if (isBuyPage) {
    var extraParamCkv = getCookie("extra_param");
    if (extraParamCkv) {
      try {
        // extra_param cookie value解码
        extraParamCkv = JSON.parse(
          window.atob(decodeURIComponent(extraParamCkv))
        );
        if (!extraParamCkv.type) {
          extraParamCkv.type = "web_client_info";
        }
        if (!extraParamCkv.buy_type) {
          extraParamCkv.buy_type = "only_web";
        }
        // 解决客户端跳过来，custom解析值中device_id非空，但是购物车数据库表记录的extra_param解析出来的buy_type为only_web的问题
        if (isNonEmptyValue(extraParamCkv.device_id)) {
          extraParamCkv.buy_type = "app_to_web";
        }
        // extra_param cookie没shopping_id，则新增shopping_id字段；extra_param cookie有shopping_id，则保持不变
        if (!extraParamCkv.shopping_id) {
          extraParamCkv.shopping_id = shopping_id;
        }
        console.log("extraParamCkv", extraParamCkv);
        extraParamCkv = encodeURIComponent(
          window.btoa(JSON.stringify(extraParamCkv))
        );
        serviceCookie("extra_param=" + extraParamCkv);
      } catch (e) {
        console.error(e);
      }
    } else {
      // only web
      // 如果custom参数和extra_param Cookie都没有，则只根据shopping_id生成extra_param Cookie
      var extraParamCkv2 = encodeURIComponent(
        window.btoa(
          JSON.stringify({
            type: "web_client_info",
            buy_type: "only_web",
            shopping_id: shopping_id,
          })
        )
      );
      serviceCookie("extra_param=" + extraParamCkv2);
    }
  }
  // cj code by wxl 2019-01-21 [7]
  if (getParamByName('src') === 'cj' && getParamByName('cjevent')) {
    trace_channel = 'cj';
    var cjevent = encodeURIComponent(getParamByName('cjevent'));
    var affsrc = encodeURIComponent('src=cj&cjevent=' + getParamByName('cjevent'));
    var affiliate_search = encodeURIComponent(location.search);
    var Affilate_Cookies = encodeURIComponent('affilate=cj');
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&cjevent=' + cjevent + '&affsrc=' + affsrc + '&Affilate_Search=' + affiliate_search);
  }
  // lc code by wxl 2019-05-28 [12-15]
  if (getParamByName('usource') === 'lc') {
    trace_channel = 'linkconnector';
    var Affilate_Cookies = encodeURIComponent('affilate=linkconnector&lctid=' + getParamByName('lctid'));
    var affsrc = encodeURIComponent('affilate=linkconnector&lctid=' + getParamByName('lctid'));
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&affsrc=' + affsrc + '&Affilate_Search=' + Affilate_Search);
  }
  // mopubi [3]
  if (getParamByName("utm_source") === "mopubi" || getParamByName("utm_medium") === "mopubi") {
    trace_channel = "mopubi";
    var Affilate_Cookies = encodeURIComponent("affilate=mopubi");
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie("Affilate_Cookies=" + Affilate_Cookies + "&Affilate_Search=" + Affilate_Search);
  }
  // add a8 affilate code modify by pengpp 2019-08-06 OFF confirm
  if (isNonEmptyValue(getParamByName('a8'))) {
    trace_channel = 'a8';
    var Affilate_Cookies = encodeURIComponent('affilate=a8&A8_DELIVERY=' + getParamByName('a8'));
    var affsrc = encodeURIComponent('affilate=a8&A8_DELIVERY=' + getParamByName('a8'));
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&affsrc=' + affsrc + '&Affilate_Search=' + Affilate_Search);
  }
  // add affilate code modify by pengpp 2019-10-21  OFF
  if (isNonEmptyValue(getParamByName('tduid')) && document.referrer.indexOf('clk.tradedoubler.com') >= 0) {
    trace_channel = 'tradedoubler';
    var td = encodeURIComponent(getParamByName('tduid'));
    var affsrc = encodeURIComponent('affilate=tradedoubler&TRADEDOUBLER=' + getParamByName('tduid'));
    var Affilate_Search = encodeURIComponent(location.search);
    var Affilate_Cookies = encodeURIComponent('affilate=tradedoubler');
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&affsrc=' + affsrc + '&Affilate_Search=' + Affilate_Search + '&TRADEDOUBLER=' + td);
  }
  // add affilate code daisycon added by daisycon 2021-06-03 [5]
  if (isNonEmptyValue(getParamByName('dci')) || getParamByName('src') === 'dsc') {
    trace_channel = 'daisycon';
    var dci = getParamByName('dci');
    var Affilate_Cookies = encodeURIComponent('affilate=daisycon&DAISYCON=' + dci);
    var affsrc = encodeURIComponent('affilate=daisycon&DAISYCON=' + dci);
    var Affilate_Search = encodeURIComponent(location.search);
    var DAISYCON = encodeURIComponent(dci);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&affsrc=' + affsrc + '&Affilate_Search=' + Affilate_Search + '&DAISYCON=' + DAISYCON);
  }
  // end shareasale affilate code daisycon
  // add mms code pengpp 2019-11-08 OFF
  if (getParamByName('src') === 'follow_effect' && getParamByName('active_id')) {
    trace_channel = 'follow_effect';
    var Affilate_Cookies = encodeURIComponent('follow_effect&active_id=' + getParamByName('active_id'));
    var affsrc = encodeURIComponent('affilate=follow_effect&active_id=' + getParamByName('active_id'));
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&affsrc=' + affsrc + '&Affilate_Search=' + Affilate_Search);
  }
  // linkshare [9]
  if (getParamByName('src') === 'linkshare') {
    trace_channel = 'linkshare';
    var siteID = getParamByName('siteID');
    var ranMID = getParamByName('ranMID');
    var ranEAID = getParamByName('ranEAID');
    var ranSiteID = getParamByName('ranSiteID');
    var Affilate_Search = encodeURIComponent(location.search);
    var Affilate_Value = 'affilate=linkshare&siteID' + siteID + '&ranMID=' + ranMID + '&ranEAID=' + ranEAID + '&ranSiteID=' + ranSiteID;
    Affilate_Value = encodeURIComponent(Affilate_Value);
    serviceCookie('Affilate_Cookies=' + Affilate_Value + '&affsrc=' + Affilate_Value + '&Affilate_Search=' + Affilate_Search);
  }
  // shareasale [18]
  if (isNonEmptyValue(getParamByName('sscid'))) {
    trace_channel = 'shareasale';
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + encodeURIComponent('affilate=shareasale&last_linkid=' + getParamByName('sscid')) + '&Affilate_Search=' + Affilate_Search);
  }
  // add bd_vid code caopc 2020-03-21 OFF
  if (isNonEmptyValue(getParamByName('bd_vid'))) {
    trace_channel = 'bd_vid';
    var Affilate_Cookies = encodeURIComponent('affilate=bd_vid&bd_vid=' + window.location.href);
    var affsrc = encodeURIComponent('affilate=bd_vid&bd_vid=' + window.location.href);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&affsrc=' + affsrc + '&Affilate_Search=' + Affilate_Search);
  }
  // add hi_pdf code caopc 2020-04-03 OFF
  if (getParamByName('src') === 'hi_pdf') {
    trace_channel = 'hi_pdf';
    var Affilate_Cookies = encodeURIComponent('affilate=hi_pdf&src=hi_pdf');
    var affsrc = encodeURIComponent('affilate=hi_pdf&src=hi_pdf');
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&affsrc=' + affsrc + '&Affilate_Search=' + Affilate_Search);
  }
  // add admitad code caopc 2020-06-15 [16-17]
  if (getParamByName('utm_source') === 'admitad') {
    trace_channel = 'admitad';
    var tag_id = getParamByName('tagtag_uid');
    var Affilate_Cookies = encodeURIComponent('affilate=admitad&src=admitad');
    var affsrc = encodeURIComponent('utm_source=admitad&tagtag_uid=' + tag_id);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&affsrc=' + affsrc + '&Affilate_Search=' + Affilate_Search + '&tagtag_aid=' + encodeURIComponent(tag_id));
  }
  // add studentbeans code caopc 2020-07-03 OFF studentbeans
  if (isNonEmptyValue(getParamByName('aff_sub'))) {
    trace_channel = 'studentbeans';
    var val = getParamByName('aff_sub');
    var Affilate_Cookies = encodeURIComponent('affilate=studentbeans&type=proxy&transaction_id=' + val);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // OFF confirm
  if (getParamByName('source') === 'webgains') {
    trace_channel = 'webgains';
    var wgu = getParamByName('wgu').match(/\d+/);
    var event_id = wgu && wgu[0] === '280465' ? 1060325 : 1060775;
    var Affilate_Cookies = encodeURIComponent('affilate=webgains&wgu=' + wgu + '&eventId=' + event_id);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // awin [8]
  if (isNonEmptyValue(getParamByName('awc'))) {
    trace_channel = 'awin';
    var awc = getParamByName('awc');
    var Affilate_Cookies = encodeURIComponent('affilate=awin&awc=' + awc);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // Flexoffer [21]
  if (isNonEmptyValue(getParamByName('refid'))) {
    trace_channel = 'Flexoffer';
    var refid = getParamByName('refid');
    var Affilate_Cookies = encodeURIComponent('affilate=Flexoffer&refid=' + refid);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // Avantlink [22]
  if (isNonEmptyValue(getParamByName('avad'))) {
    trace_channel = 'Avantlink';
    var avad = getParamByName('avad');
    var Affilate_Cookies = encodeURIComponent('affilate=Avantlink&avad=' + avad);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // lomadee [20]
  if (getParamByName('utm_source') === 'lomadee') {
    trace_channel = 'lomadee';
    var lmdsid = getParamByName('lmdsid');
    var Affilate_Cookies = encodeURIComponent('affilate=lomadee&lmdsid=' + lmdsid);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // OFF
  if (isNonEmptyValue(getParamByName('wgp_msg_id'))) {
    // trace_channel = '';
    var wgp_msg_id = getParamByName('wgp_msg_id');
    var Affilate_Cookies = encodeURIComponent('wgp_msg_id=' + wgp_msg_id);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // webridge
  if (getParamByName('utm') === 'webridge') {
    trace_channel = 'webridge';
    var fil = encodeURIComponent(getParamByName('fil'));
    var Affilate_Cookies = encodeURIComponent('affilate=webridge');
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search + '&GQAau8dfXaUH=' + fil);
  }
  // indoleads [1-2]
  if (getParamByName('utm_term') === 'indoleads') {
    trace_channel = 'indoleads';
    var utm_content = getParamByName('utm_content');
    var Affilate_Cookies = encodeURIComponent('affilate=indoleads&utm_content=' + utm_content);
    var Affilate_Search = encodeURIComponent(location.search);
    var indoleads_click = encodeURIComponent(utm_content);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search + '&indoleads_click=' + indoleads_click);
  }
  // impact [23]
  if (getParamByName('utm_term') === 'impact') {
    try {
      var irclickid = getParamByName('irclickid');
      // 针对irclickid中含有%的特殊情况进行处理,%编码后会丢失
      if (irclickid && irclickid.indexOf('%') > -1) {
        irclickid = irclickid.replace('%', 'hadSignA')
      }

      var _search = location.search;
      if (_search && _search.indexOf('%') > -1) {
        _search = _search.replace('%', 'hadSignA')
      }
    } catch (error) {
      console.log("IMPACT", error);
    }

    trace_channel = 'impact';
    var Affilate_Cookies = encodeURIComponent('affilate=impact&irclickid=' + irclickid);
    var Affilate_Search = encodeURIComponent(_search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // soicos [6]
  if (getParamByName('utm_source') === 'soicos') {
    trace_channel = 'soicos';
    var Affilate_Cookies = encodeURIComponent('affilate=soicos');
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // Tradetracker [4]
  if (getParamByName('utm_source') === 'tradetracker') {
    trace_channel = 'tradetracker';
    var utm_medium = getParamByName('utm_medium');
    var Affilate_Cookies = encodeURIComponent('affilate=tradetracker&utm_medium=' + utm_medium);
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie('Affilate_Cookies=' + Affilate_Cookies + '&Affilate_Search=' + Affilate_Search);
  }
  // ValueCommerce
  if (getParamByName("utm") === "ValueCommerce") {
    trace_channel = "ValueCommerce";
    var Affilate_Cookies = encodeURIComponent("affilate=ValueCommerce");
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie("Affilate_Cookies=" + Affilate_Cookies + "&Affilate_Search=" + Affilate_Search);
  }
  // Accesstrade
  if (getParamByName("utm") === "Accesstrade") {
    trace_channel = "Accesstrade";
    var Affilate_Cookies = encodeURIComponent("affilate=Accesstrade");
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie("Affilate_Cookies=" + Affilate_Cookies + "&Affilate_Search=" + Affilate_Search);
  }
  // PartnerBoost
  if (getParamByName("utm_source") === "PartnerBoost") {
    trace_channel = "PartnerBoost";
    var Affilate_Cookies = encodeURIComponent("affilate=PartnerBoost");
    var Affilate_Search = encodeURIComponent(location.search);
    serviceCookie("Affilate_Cookies=" + Affilate_Cookies + "&Affilate_Search=" + Affilate_Search);
  }
})();

(function () {
  function bindPureLinkClick() {
    var hostList = [
      "wondershare.com",
      "wondershare.com.br",
      "wondershare.de",
      "wondershare.es",
      "wondershare.fr",
      "wondershare.it",
      "wondershare.kr",
      "wondershare.jp",
      "edrawsoft.com",
      "hipdf.com",
      "mindmaster.io",
      "media.io",
      // "wondershare.net",
      // "wondershare.co.jp",
      "wondershare.co.id",
      "wondershare.com.ru",
      "wondershare.ae",
      "wondershare.tw",
    ];
    var href = this.href,
      inHostList = false;

    var Affilate_Cookies = getCookie("Affilate_Cookies");
    // Affilate_Search已经包含了custom
    var urlSearch = getCookie("Affilate_Search");
    if (href) {
      // 购买按钮配置的链接长度可能超过255，会导致host正则匹配失败，在做host的match之前先进行截取，不改变原href值。
      var hostHref = href.slice(0, 250);
      // var host = href.match(/^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*/g);
      /* 
      该正则的作用是取出href的域名
      如hostHref输入为https://www.wondershare.jp/?order_id=1378273975885762658&ver=v5&wgp_msg_id=1374329064976543758
      host输出为https://www.wondershare.jp
      */
      var host = hostHref.match(
        /^(?=^.{3,255}$)(http(s)?:\/\/)?(www\.)?[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+(:\d+)*(\/\w+\.\w+)*/g
      );
      host = host ? host[0] : "";
      // 如果当前点击跳转的a标签host不包含当前网站的host，则认为是跨站点跳转
      if (host && host.indexOf(location.host) === -1) {
        for (var index = 0; index < hostList.length; index++) {
          // 判断当前点击跳转的a标签host是否在hostList（主域名）范围内
          // 如host为https://www.wondershare.jp，包含wondershare.jp，则认为在hostList（主域名）范围内
          if (host.indexOf(hostList[index]) > -1) {
            inHostList = true;
            break;
          }
        }
        // 如果当前点击跳转的a标签host在hostList范围（主域名）内
        if (inHostList) {
          var params = {},
            strParams = "",
            hrefQueryFlag = false; // href是否包含?
          if (href.indexOf("?") > -1) {
            hrefQueryFlag = true;
            // 如果href包含问号，先取出原href的参数组装到params
            href.replace(/([^?&=]+)=([^?&=#]*)/g, function (_, $1, $2) {
              params[$1] = params[$1] ? params[$1] : $2;
            });
          }
          if (Affilate_Cookies && urlSearch) {
            /* 
            走到以下逻辑的三大条件
            1、Affilate两个Cookie有值
            2、跨站点跳转
            3、点击跳转的目标网站在hostList（主域名）范围内
            */
            urlSearch.replace(/([^?&=]+)=([^?&=#]*)/g, function (_, $1, $2) {
              params[$1] = params[$1] ? params[$1] : $2;
            });
            if (isNonEmptyValue(trace_channel)) {
              params.trace_channel = trace_channel;
            }
          }
          // 最后统一处理extra_param，extra_param与代理商Affiliate两个Cookie无关，但是受1）跨站点和2）点击跳转的目标网站在hostList（主域名）范围内两个条件限制
          var extraParam = getCookie("extra_param");
          if (extraParam) {
            params.extra_param = extraParam;
          }
          // 当参数中有order_id时，把order_id去掉，避免进入购物车跳empty页
          if (isCartUrl(href) && params.order_id) {
            delete params.order_id;
          }
          strParams = transferParamsObj2Str(params);
          if (hrefQueryFlag) {
            // strParams a=1&b=2
            href = href.split("?")[0] + "?" + strParams;
          } else {
            href += "?" + strParams;
          }
          if (hrefParams && hrefParams.auth_code && href.indexOf("auth_code=") === -1) {
            href += "&auth_code=" + hrefParams.auth_code;
          }
          this.href = href;
          console.log("***href***", this.href);
        }
      }
    }
  }

  function bindLinkClick() {
    var allLinks = document.querySelectorAll("a");
    // 兼容性问题，用原生for循环解决，不用forEach
    for (var i = 0; i < allLinks.length; i++) {
      var item = allLinks[i];
      item.addEventListener("click", bindPureLinkClick);
    }
  }

  function onloadFunc() {
    if (window.attachEvent) {
      window.attachEvent("onload", function () {
        console.log("page loaded");
        bindLinkClick();
      });
    } else {
      window.addEventListener(
        "load",
        function () {
          console.log("page loaded");
          bindLinkClick();
        },
        false
      );
    }
  }

  if (window.jQuery) {
    // 如果页面有引入jq，则用jq绑定click事件（注意：要在jq ready回调中绑定事件，否则绑定事件失效）
    // jq绑定事件的好处在于：可以监听异步元素的事件
    $(document).ready(function () {
      $("a").on("click", bindPureLinkClick);
    })
  } else {
    onloadFunc();
  }
  serviceCookie();
})();

(function () {
  function addToCartGaReport(href, className, custom, shopping_id) {
    // 只有点击buy now，href为购物车链接才上报click事件
    if (isCartUrl(href)) {
      if (custom && custom.shopping_id) {
        // app_to_web
        // 旧版本custom没有shopping_id，buy_type为app_to_web（解决有custom，但是没有shopping_id，buy_type被记录为only_web的问题）
        window.dataLayer.push({
          event: "add_to_cart",
          buy_type: "app_to_web",
          shopping_id: custom.shopping_id,
          btn_name: className,
        });
      } else {
        // only_web
        window.dataLayer.push({
          event: "add_to_cart",
          buy_type: "only_web",
          shopping_id: shopping_id,
          btn_name: className,
        });
      }
    }
  }

  var isBuyPage = isBuyPageFunc();
  if (!isBuyPage) {
    return;
  }

  // 是buy页面才走以下全链路逻辑
  // var shopping_id = create_shopping_id(scene);
  window.dataLayer = window.dataLayer || [];
  // 默认only_web
  var gaDisplayReportObj = {
    event: "buypage_display",
    buy_type: "only_web",
    shopping_id: shopping_id,
    ab_testing: "",
  };

  if (custom) {
    // custom包含code_type、type、shopping_id、buy_type、device_id、ab_testin、platform（json）
    // app_to_web
    gaDisplayReportObj = {
      event: "buypage_display",
      buy_type: "app_to_web",
      shopping_id: custom.shopping_id || shopping_id,
      device_id: custom.device_id || "",
      code_type: custom.code_type || "",
      pid: custom.pid || "",
      ab_testing: custom.ab_testing || "",
    };
  }

  // 曝光埋点
  window.dataLayer.push(gaDisplayReportObj);
  // 点击埋点
  if (window.jQuery) {
    $(document).ready(function () {
      $("a").on("click", function () {
        var href = this.href || "";
        var className = this.className || "";
        addToCartGaReport(href, className, custom, shopping_id);
      });
      $(".apple-pay-button").on("click", function () {
        var href = $(this).attr("buy-url") || "";
        var className = this.className || "";
        addToCartGaReport(href, className, custom, shopping_id);
      });
    })
  } else {
    var allLinks = document.querySelectorAll("a");
    // 兼容性问题，用原生for循环解决，不用forEach
    for (var i = 0; i < allLinks.length; i++) {
      var item = allLinks[i];
      item.addEventListener("click", function () {
        var href = this.href || "";
        var className = this.className || "";
        addToCartGaReport(href, className, custom, shopping_id);
      });
    }
    // apple pay
    var applePayBtns = document.querySelectorAll(".apple-pay-button");
    // 兼容性问题，用原生for循环解决，不用forEach
    for (var i = 0; i < applePayBtns.length; i++) {
      var item = applePayBtns[i];
      item.addEventListener("click", function () {
        var href = $(this).attr("buy-url") || "";
        var className = this.className || "";
        addToCartGaReport(href, className, custom, shopping_id);
      });
    }
  }

  window.buyReportUtils = {
    custom: custom,
    shopping_id: shopping_id,
    create_shopping_id: create_shopping_id,
    addToCartGaReport: addToCartGaReport,
  };
})();

(function () {
  // 下载未安装埋点（曝光&点击）
  // + 下载未安装埋点（点击sign in&点击download）2023-02-14
  // sc_project=UA_WGP_System
  var wgp_msg_id = getParamByName("wgp_msg_id");
  var sc_project = getParamByName("sc_project");
  var sc_gaid = getParamByName("sc_gaid");
  var isScProjectRight = sc_project.indexOf("UA_WGP_System") === -1 ? false : true;
  var hasScGaid = sc_gaid === "" ? false : true;
  if (!wgp_msg_id) {
    return;
  }
  // 曝光埋点
  if (isScProjectRight) {
    sendGTMRequest("download_no_install", "display", wgp_msg_id);
  }

  function downloadNoInstallClickHandle() {
    // 点击埋点
    var allLinks = document.querySelectorAll("a");
    // 兼容性问题，用原生for循环解决，不用forEach
    for (var i = 0; i < allLinks.length; i++) {
      var item = allLinks[i];
      item.addEventListener("click", function () {
        var href = this.href || "";
        // 只有点击buy now，href为购物车链接才上报click事件
        if (isCartUrl(href) && isScProjectRight) {
          sendGTMRequest("download_no_install", "click", wgp_msg_id);
        }
        var isSignUp = false;
        if ($(this) && $(this).length > 0 && $(this)[0].innerText) {
          var signUpText = $(this)[0].innerText.toLowerCase();
          if (signUpText.indexOf("sign") !== -1 && signUpText.indexOf("up") !== -1) {
            isSignUp = true;
          }
        }
        if ($(this) && $(this).hasClass("sign-up-click")) {
          isSignUp = true;
        }
        // 识别用户中心注册页地址
        if (isSignUp && hasScGaid) {
          sendGTMRequest("download_no_install", "click_sign_up", wgp_msg_id);
        }
        // https://download.wondershare.com/pdfelement-pro_full5239.exe
        if (href.indexOf("download.wondershare.com") !== -1 && hasScGaid) {
          sendGTMRequest("download_no_install", "click_download", wgp_msg_id);
        }
      }, false);
    }
  }
  // 注意：要把affiliate.js移到最后
  downloadNoInstallClickHandle();
})();

(function () {
  // 探测paypal页面分类（paypal快捷/paypal smt/没部署任何paypal）
  function detectPayPalPage() {
    if (getParamByName("_ws_cart_find_paypal_") !== "1") {
      return;
    }

    var paypalFindResult = "0";
    var allLinks1 = document.querySelectorAll("a");
    // 兼容性问题，用原生for循环解决，不用forEach
    for (var i = 0; i < allLinks1.length; i++) {
      var item1 = allLinks1[i];
      var href1 = item1.href;
      if (isCartUrl(href1)) {
        if (href1.indexOf("flush=paypal") !== -1) {
          paypalFindResult = "1";
          sendGTMRequest("find_paypal", "result", paypalFindResult);
          break;
        }
      }
    }

    var allScripts1 = document.querySelectorAll("script");
    // 兼容性问题，用原生for循环解决，不用forEach
    for (var i = 0; i < allScripts1.length; i++) {
      var item1 = allScripts1[i];
      var src = item1.src;
      if (
        src &&
        src.indexOf("smart_button_buy.js") !== -1
      ) {
        paypalFindResult = "2";
        sendGTMRequest("find_paypal", "result", paypalFindResult);
        break;
      }
    }
  }

  detectPayPalPage();
})();

(function () {
  // 智能客服数据采集
  var loopCount = 0;

  /**
   * @description 根据当前页面域名匹配用户中心域名
   * @param
   */
  function getAccountDomain() {
    var domain = "accounts.wondershare.com";
    var pageUrlDomain = window.location.hostname;
    if (pageUrlDomain.indexOf(".wondershare.com") !== -1) {
      domain = "accounts.wondershare.com";
    }
    if (pageUrlDomain.indexOf(".wondershare.cn") !== -1) {
      domain = "accounts.wondershare.cn";
    }
    if (pageUrlDomain.indexOf(".wondershare.cc") !== -1) {
      domain = "accounts.wondershare.cc";
    }
    if (pageUrlDomain.indexOf(".wondershare.de") !== -1) {
      domain = "accounts.wondershare.de";
    }
    if (pageUrlDomain.indexOf(".wondershare.fr") !== -1) {
      domain = "accounts.wondershare.fr";
    }
    if (pageUrlDomain.indexOf(".wondershare.es") !== -1) {
      domain = "accounts.wondershare.es";
    }
    if (pageUrlDomain.indexOf(".wondershare.net") !== -1) {
      domain = "accounts.wondershare.net";
    }
    if (pageUrlDomain.indexOf(".wondershare.it") !== -1) {
      domain = "accounts.wondershare.it";
    }
    if (pageUrlDomain.indexOf(".wondershare.hk") !== -1) {
      domain = "accounts.wondershare.hk";
    }
    if (pageUrlDomain.indexOf(".wondershare.tw") !== -1) {
      domain = "accounts.wondershare.tw";
    }
    if (pageUrlDomain.indexOf(".wondershare.kr") !== -1) {
      domain = "accounts.wondershare.kr";
    }
    if (pageUrlDomain.indexOf(".wondershare.ae") !== -1) {
      domain = "accounts.wondershare.ae";
    }
    if (pageUrlDomain.indexOf(".wondershare.jp") !== -1) {
      domain = "accounts.wondershare.jp";
    }
    if (pageUrlDomain.indexOf(".wondershare.co.jp") !== -1) {
      domain = "accounts.wondershare.co.jp";
    }
    if (pageUrlDomain.indexOf(".wondershare.com.br") !== -1) {
      domain = "accounts.wondershare.com.br";
    }
    return domain;
  }

  /**
   * @description 获取用户登录态信息
   * @param
   */
  function getUserLoginInfo() {
    var accountDomain = getAccountDomain();
    if (window.jQuery) {
      // 如果有jq
      $.ajax({
        url: "https://" + accountDomain + "/api/v3/account",
        type: "get",
        data: {
          detail: 1,
          is_jsonp: 1,
        },
        dataType: "jsonp",
        jsonp: "callback",
        success: function (result) {
          if (result) {
            if (!window.crmChatbotUserInfo) {
              window.crmChatbotUserInfo = {};
            }
            if (result.uid) {
              window.crmChatbotUserInfo.wsid = result.uid;
            }
            if (result.email) {
              window.crmChatbotUserInfo.email = result.email;
            }
          }
        },
        error: function () {},
      });
    } else {
      // 首先插入callback脚本
      var callbackHtml =
        "<scr" +
        "ipt>function getUserLoginInfoCallback(result) {window.crmChatbotUserInfo = result;}</scr" +
        "ipt>";
      callbackHtml = callbackHtml.replace(/<\/?sc[^\>]+>/g, "");
      var callbackScript = document.createElement("script");
      callbackScript.innerHTML = callbackHtml;
      document.body.appendChild(callbackScript);
      // 然后插入jsonp脚本（callback脚本要在jsonp脚本之前插入）
      var crmChatbotLoginSc = document.querySelector(
        "#___crm_chatbot_login_sc___"
      );
      if (crmChatbotLoginSc) {
        document.body.removeChild(crmChatbotLoginSc);
      }
      var accountDomain = getAccountDomain();
      var scriptSrc =
        "https://" +
        accountDomain +
        "/api/v3/account?detail=1&is_jsonp=1&callback=getUserLoginInfoCallback";
      var crmChatbotLoginSc2 = document.createElement("script");
      crmChatbotLoginSc2.type = "text/javascript";
      crmChatbotLoginSc2.id = "___crm_chatbot_login_sc___";
      crmChatbotLoginSc2.src = scriptSrc;
      document.body.appendChild(crmChatbotLoginSc2);
    }
  }

  function detectCrmChatbotClick() {
    var findChatbotDivTimer = setInterval(function () {
      loopCount++;
      if (loopCount > 30) { // 如果轮询了30次（30 * 20秒 = 10分钟）还没找到智能客服，则关闭定时器
        findChatbotDivTimer && clearInterval(findChatbotDivTimer);
      }
      var chatbotDivs = document.querySelectorAll(
        "iframe[id='wondershare_chatbot_iframe']"
      );
      if (chatbotDivs && chatbotDivs.length > 0) {
        var chatbotDoc = chatbotDivs[0].contentDocument;
        var chatbotRootDiv = chatbotDoc.querySelector(
          "div[id='WSAres-CHATBOT-ROOT']"
        );
        if (chatbotRootDiv) {
          chatbotRootDiv.addEventListener("click", function () {
            var currentOpenStatus = null;
            if (
              window.wsCrmChatbotApi &&
              window.wsCrmChatbotApi.getCrmChatbotOpenStatus
            ) {
              currentOpenStatus = window.wsCrmChatbotApi.getCrmChatbotOpenStatus();
            }
            var label = "";
            if (window.crmChatbotUserInfo && window.crmChatbotUserInfo.email) {
              label += "email:" + window.crmChatbotUserInfo.email;
            } else {
              label += "email:null";
            }
            if (window.crmChatbotUserInfo && window.crmChatbotUserInfo.wsid) {
              label += "|wsid:" + window.crmChatbotUserInfo.wsid;
            } else {
              label += "|wsid:null";
            }
            var action = "open";
            if (currentOpenStatus === "opened") {
              action = "collapse";
            }
            console.log("click chatbot " + action);
            sendGTMRequest("crm_chatbot_collect", action, label);
          });
          findChatbotDivTimer && clearInterval(findChatbotDivTimer);
        }
      }
    }, 20 * 1000)
  }

  var hostname = window.location.hostname;
  var arr = hostname.split(".wondershare.");
  var product = arr[0];
  // 只在FX/PE两个产品站点实验
  if (product !== "filmora" && product !== "pdf") {
    // return;
  }

  // 屏蔽智能客服数据采集代码和获取登录态代码
  /* getUserLoginInfo();
  detectCrmChatbotClick();

  window.addEventListener(
    "message",
    function (event) {
      // 监听登录postMessage回调去获取登录态，paypal的postMessage回调不去获取登录态
      if (event && event.data && event.origin.indexOf("paypal") === -1) {
        getUserLoginInfo();
      }
    },
    false
  ); */
})();

(function () {
  // 价格本地化：循环遍历所有购买链接a标签（个人版、商业版、教育版、bundle）
  function loopAllCartUrl() {
    var iframeIncognito = false; // iframe无痕模式
    try {
      localStorage.setItem("test_incognito", "1");
    } catch (err) {
      console.error(err);
      iframeIncognito = true;
    }
    if (iframeIncognito) {
      if (hrefParams.loop_cart_url_switch !== "1") {
        return;
      }
    } else {
      if (hrefParams.loop_cart_url_switch === "1") {
        localStorage.setItem("loop_cart_url_switch", "1");
      }
      if (hrefParams.show_sku_switch === "1") {
        localStorage.setItem("show_sku_switch", "1");
      }
      if (localStorage.getItem("loop_cart_url_switch") !== "1") {
        return;
      }
    }

    var arr = [];
    // 循环遍历所有购买链接a标签
    var allLinks = document.querySelectorAll("a");
    // 兼容性问题，用原生for循环解决，不用forEach
    for (var i = 0; i < allLinks.length; i++) {
      var item = allLinks[i];
      var href = item.href || "";
      // 购物车链接
      if (isCartUrl(href)) {
        if (href.includes("&flush=paypal")) {
          href = href.split("&flush=paypal")[0];
        }
        // 保留url_ab_testing
        // if (href.includes("&url_ab_testing=")) {
        //   href = href.split("&url_ab_testing=")[0];
        // }
        if (href.endsWith("&")) {
          var len = href.length;
          href = href.slice(0, len - 1);
        }
        arr.push(href);
      }
    }

    function getParameter(url, key) {
      var matchArr = url.match(new RegExp("[?&]" + key + "=([^&]*)(&?)", "i"))
      var res = matchArr && matchArr[1] ? matchArr[1] : null
      if (res === "0") {
        res = ""
      }
      return res
    }

    // 遍历所有购买链接并添加sku/pid/license标注
    function loopCartUrlAddTag() {
      var checkTrue = false;
      if (iframeIncognito) {
        if (hrefParams.loop_cart_url_switch === "1" && hrefParams.show_sku_switch === "1") {
          checkTrue = true;
        }
      } else {
        if (hrefParams.loop_cart_url_switch === "1") {
          localStorage.setItem("loop_cart_url_switch", "1");
        }
        if (hrefParams.show_sku_switch === "1") {
          localStorage.setItem("show_sku_switch", "1");
        }
        if (localStorage.getItem("loop_cart_url_switch") === "1" && localStorage.getItem("show_sku_switch") === "1") {
          checkTrue = true;
        }
      }
      if (!checkTrue) {
        return;
      }
      // 遍历所有购买链接a标签
      var allLinks = document.querySelectorAll("a");
      // 兼容性问题，用原生for循环解决，不用forEach
      for (var i = 0; i < allLinks.length; i++) {
        var item = allLinks[i];
        var href = item.href || "";
        // 购买链接
        if (isCartUrl(href) && !href.includes("&flush=paypal")) {
          var sku_id = getParameter(href, "sku_id");
          if (sku_id) {
            var skuDivEle = document.createElement("div");
            skuDivEle.style.color = "red";
            var skuTextEle = document.createTextNode(" sku: " + sku_id);
            skuDivEle.appendChild(skuTextEle);
            item.parentNode.appendChild(skuDivEle);
          } else {
            var pidLicenseDivEle = document.createElement("div");
            pidLicenseDivEle.style.color = "red";
            var pid = getParameter(href, "pid");
            if (pid) {
              var pidEle = document.createTextNode(" pid: " + pid);
              pidLicenseDivEle.appendChild(pidEle);
            }
            var license_id = getParameter(href, "license_id");
            if (license_id) {
              var licenseIdEle = document.createTextNode(", license_id: " + license_id);
              pidLicenseDivEle.appendChild(licenseIdEle);
            }
            item.parentNode.appendChild(pidLicenseDivEle);
          }
        }
      }
    }

    window.addEventListener(
      "load",
      function () {
        console.log("page loaded");
        loopScriptCartUrl();
        loopCartUrlAddTag();
      },
      false
    );

    // 遍历JS里面的购买链接
    function loopScriptCartUrl() {
      var arr2 = [];
      var scripts = document.querySelectorAll("script");
      for (var j = 0; j < scripts.length; j++) {
        var item = scripts[j];
        var innerHTML = item.innerHTML;
        if (innerHTML && innerHTML.includes("https://store.")) {
          var a1 = innerHTML.split("'").filter(item1 => item1.startsWith("https://store."));
          var a2 = innerHTML.split('"').filter(item1 => item1.startsWith("https://store."));
          arr2 = a1.concat(a2).map(item2 => {
            var item3 = item2;
            if (item3.includes("&flush=paypal")) {
              item3 = item3.split("&flush=paypal")[0];
            }
            // 保留url_ab_testing
            // if (item3.includes("&url_ab_testing=")) {
            //   item3 = item3.split("&url_ab_testing=")[0];
            // }
            if (item3.endsWith("&")) {
              var len = item3.length;
              item3 = item3.slice(0, len - 1);
            }
            return item3;
          });
          arr = [...new Set(arr.concat(arr2))];
        }
      }
      console.log("arr", JSON.stringify(arr));
      if (parent) {
        parent.postMessage({
          type: "expose_loop_carturl_data",
          data: arr
        }, '*');
      }
    }
  }
  loopAllCartUrl();
})();

(function () {
  // 价格本地化分流国家统计埋点
  function localCountryReport() {
    try {
      var wsLocalIPReportValue = localStorage.getItem("___ws_local_seo_ip_report___");
      // price_list_json
      if (price_list_json && price_list_json.length > 0 && wsLocalIPReportValue !== "1" && window.jQuery) {
        $.ajax({
          type: 'get',
          timeout: 5000,
          url: 'https://i.wondershare.com/api/v1/geoip/country',
          dataType: 'json',
          success: function (data) {
            if (data && data.data && data.data.country) {
              country = data.data.country
              sendGTMRequest("DC_LOCAL_EV", "SEO", country)
              localStorage.setItem("___ws_local_seo_ip_report___", "1")
            }
          },
          error: function (xhr, textStatus) {}
        })
      }
    } catch (_) {
      console.error("failed to fetch price_list_json");
    }
  }
  // localCountryReport();
})();