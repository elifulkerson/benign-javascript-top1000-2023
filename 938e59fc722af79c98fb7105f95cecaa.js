var xxfwConfig = {namespace:'anjuke_c_pc'};

    // 设备指纹js
    function loadJs() {
        // 设备指纹js
        var element = document.createElement("script");
        var now = new Date()
        var timestamp=now.getFullYear() +''+now.getMonth() +''+now.getDate()+''+now.getHours();
        var appKey = 'gk1leqzjj6u65bd2zbal';
        element.src = "//j1.58cdn.com.cn/git/xxzl/teemo/teemo_init.js?dt="+timestamp+"&appkey="+appKey;
        document.body.appendChild(element);

        // 反爬虫js
        // jQuery.getScript("https://pages.anjukestatic.com/usersite/site/js/xxfw.min.js");
    }

    if (!(navigator.userAgent.match(/miniprogram/i) || window.__wxjs_environment === 'miniprogram')) {
        if (window.addEventListener) {
            window.addEventListener("load", loadJs, false);
        } else if (window.attachEvent) {
            window.attachEvent("onload", loadJs);
        } else {
            window.onload = loadJs;
        }
    }