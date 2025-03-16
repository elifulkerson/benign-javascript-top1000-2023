function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    

    

    

	
    //cookie记录个人登录标记为1,商家登录标记为2
    $(".personal-login").click(function () {
        location.href = "https://www.alipay.com/x/personal";
    });

    $(".seller-login").click(function (e) {
        var target = $(e.target);
        if (target.hasClass('alipay')) {
            location.href = "https://b.alipay.com/?ynsrc=zhuzhanA";
        } else if (target.hasClass('koubei')) {
            location.href = "https://e.alipay.com/index.htm?from=zhuzhan20160927";
        }
    });
    // 按钮——我是服务商
    $(".developer-login").click(function () {
        location.href = "https://p.alipay.com/portal/home.htm";
    });

    // 按钮——我是开发者
    $(".personal-developer-login").click(function () {
        location.href = "https://open.alipay.com/platform/home.htm?from=wwwalipay";
    });

    // 按钮——我是机构
    $(".merchant-login").click(function () {
        location.href = "https://i.antfin.com/portal/antdIndex.htm#/home";
    });