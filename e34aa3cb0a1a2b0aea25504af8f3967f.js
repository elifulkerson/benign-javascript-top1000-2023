/**
 * reset page Referer
 */
var Referer = {
    initAjax: function () {
        $.ajaxSetup({
            headers: {
                'refererFrom': window.location.href
            }
        });
    },
    //源地址
    getReferer: function () {
        return $.cookie("refererUrl");
    },
    //当前地址
    getCurrent: function () {
        return window.location.href;
    },
    // 设置referer cookie
    resetReferer: function () {
        var referer = document.referrer;
        // empty referer
        if (referer.length == 0) {
            $.cookie("refererUrl", "", {
                path: '/',
                domain: '.gtarcade.com'
            });
        }
        var currentUrl = $.url();
        var refererUrl = $.url(referer);
        // Net source outside
        if (refererUrl.attr("host") != currentUrl.attr("host") && refererUrl.attr("host").indexOf('gtarcade.com') == -1) {
            $.cookie("refererUrl", refererUrl.attr("source"), {
                path: '/',
                domain: '.gtarcade.com'
            });
        }
    },
};

$(document).ready(function () {
    Referer.initAjax();
    Referer.resetReferer();

});