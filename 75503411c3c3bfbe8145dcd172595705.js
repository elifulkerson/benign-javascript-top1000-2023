$(document).ready(function() {
    var userIP = "70.163.140.175";
    var fullUrl = "https://www.nownews.com";
    var setDays = 3650;
    var postId = "";
    var postTitle = "";
    var javaNow = "2023-10-16 13:16:42";
    var snowplowDomain = "logtrace.gamania.com/nownews/";
    var openId = "";

    // 取得使用者裝置
    var device = getMobileOperatingSystem();

    // 取得使用者 Cookie 的 nn_id, 沒有的話就給一組, 設定 3650 天
    var cookieVal = getCookie("nn_id");
    var cookieId = "";
    if (cookieVal == '') {
        doCookieSetup("nn_id", uuidv4(), setDays);
        cookieId = "nn_id=" + uuidv4();
        cookieVal = uuidv4();
    } else {
        cookieId = "nn_id=" + cookieVal;
    }
    // 數據收集: 當前頁打 API 回送
    ajaxReadingInfo(device, cookieId, userIP, fullUrl, javaNow);
    
});