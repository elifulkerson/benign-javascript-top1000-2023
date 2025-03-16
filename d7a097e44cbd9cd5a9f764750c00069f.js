try {
    //先判断是否来源是手机端
    var urlhash = window.location.hash;
    if (!urlhash.match("fromapp")) {
        if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios|iPad)/i))) {
            $.ajax({
                url: "/ajax/pctomobile_urlredirect_301.html",
                type: "post",
                dataType: "json",
                success: function (d) {
                    if (d != null && d.success) {
                        if (d.result.mobileUrl != null && d.result.mobileUrl != '')
                            location.href = d.result.mobileUrl;
                    }
                },
                error: function (e) {

                }
            });
            
        }
    }
}
catch (err) {
}