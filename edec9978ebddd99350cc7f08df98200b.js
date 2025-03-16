function newUserGuide(s, g) {
    var p = s;
    var d = g;
    var j = $(document).height();
    var o = $("body").width();
    var c = $("<div>");
    var b = $("<div>");
    var a = $("<ul>");
    $("body").prepend(b);
    b.css({
        background: "#000",
        width: o,
        height: j,
        position: "absolute",
        top: 0,
        left: 0,
        filter: "alpha(opacity=80)",
        "-moz-opacity": 0.8,
        opacity: 0.8,
        "z-index": 10000
    }).attr("id", "over_layer");
    $("body").prepend(c);
    c.css({
        width: o,
        height: j,
        position: "absolute",
        "z-index": 10001
    }).attr("id", "mask_layer");
    a.css({
        position: "relative",
        "z-index": 99999,
        height: j,
        width: o
    });
    var r = $("<li>");
    var h = "http://static1.cdnmama.com/std/images/" + p + "_guide{1}.png";
    for (var k = 0; k < d; k++) {
        var n = r.clone().css({
            "text-align": "center",
            display: "none"
        });
        var l = $("<img>").attr("src", h.replace(/\{([^}]*)\}/, k + 2)).addClass("fixpng");
        var f = $("<a>").addClass("btn_guide_next fixpng").css({
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            cursor: "pointer",
            width: "88px",
            height: "48px",
            "z-index": 99999,
            background: "url(http://static1.cdnmama.com/std/images/new_user_next.png) no-repeat center center"
        }).attr("href", "javascript:void(0)").attr("title", "下一个");
        var e = $("<a>").addClass("btn_guide_exit fixpng").css({
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            cursor: "pointer",
            width: "34px",
            height: "34px",
            "z-index": 99999,
            background: "url(http://static1.cdnmama.com/std/images/new_user_close.png) no-repeat center center"
        }).attr("href", "javascript:void(0)").attr("title", "关闭");
        var q = $("<a>").addClass("btn_guide_exit fixpng").css({
            position: "absolute",
            top: 0,
            left: 0,
            display: "block",
            cursor: "pointer",
            width: "216px",
            height: "54px",
            "z-index": 99999,
            background: "url(http://static1.cdnmama.com/std/images/new_user_start.png) no-repeat center center"
        }).attr("href", "javascript:void(0)").attr("title", "开启妈妈网之旅");
        if (d == 1) {
            if (k == 0) {
                l.css({
                    position: "absolute",
                    left: $(".regGuide").offset().left - 676,
                    top: $(".regGuide").offset().top - 109
                });
                f.css({
                    width: "0",
                    height: "0"
                });
                q.css({
                    left: $(".regGuide").offset().left + 50,
                    top: $(".regGuide").offset().top + 270
                })
            }
        }
        n.append(f).append(q).append(l);
        a.append(n)
    }
    c.append(a);
    $("select").hide();
    a.find("li").eq(0).show();
    $("#mask_layer").bind("click", function() {
        $("#mask_layer").hide().html("");
        $("#over_layer").hide().html("");
        $("#mask_layer").remove();
        $("#over_layer").remove();
        $("select").not("select#searchtype").show()
    });
    c.find(".btn_guide_exit").bind("click", function() {
        $("#mask_layer").hide().html("");
        $("#over_layer").hide().html("");
        $("#mask_layer").remove();
        $("#over_layer").remove();
        $("select").not("select#searchtype").show()
    });
    c.find(".btn_guide_next").bind("click", m);

    function m() {
        var t = $(this);
        var i = a.find("li");
        var u = i.index(t.parent());
        if ((u + 1) == i.length) {
            $("#mask_layer").hide().html("");
            $("#over_layer").hide().html("");
            $("#mask_layer").remove();
            $("#over_layer").remove();
            $("select").show()
        }
        i.hide();
        i.eq(u + 1).show();
        if (window.scrollTo) {
            window.scrollTo(0, 0)
        }
    }
}
var maD = new Date();
var maYear = maD.getFullYear();
var maMon = maD.getMonth() + 1;
var maDay = maD.getDate();
var maTime = maYear + "-" + maMon + "-" + maDay;
$(function() {
    $("#datepicker").val(maTime);
    $("#datepicker").datepicker({
        showAnim: "slideDown",
        dateFormat: "yy-mm-dd"
    });
    show_sidebar("#scrollPic");
    show_sidebar("#scrollPic2");

    function a(d) {
        var c = d.find(".text");
        var b = d.find(".img");
        var e = c.css("display");
        if (e == "none") {
            c.css("display", "block");
            b.css("display", "none")
        } else {
            c.css("display", "none");
            b.css("display", "block")
        }
    }
    $(".fourGe .cell").hover(function() {
        var b = $(this);
        a(b)
    }, function() {
        var b = $(this);
        a(b)
    });
    $('.key').focus(function(){
    	$('.search').css(
    		'border', '1px solid #6abf4b'
    	);
    	$('.key').css(
    		'color', '#000'
    	);
    });

    $('.key').blur(function(){
    	$('.search').css(
    		'border', '1px solid #ddd'
    	);
    	$('.key').css(
    		'color', '#a8a8a8'
    	);
    });
});
$(function() {
    (function() {
        var a = $.cookie("newGuideIndex");
        if (a && a == 1) {
            return
        }
        $.cookie("newGuideIndex", "1", {
            expires: 7,
            path: "/"
        })
    })();
    $(".idxTwo .main img,.idxThree .main img,.idxFour .main img,.shopImg img").lazyload({
        threshold: 100,
        effect: "fadeIn"
    })
});
var clearTimer = null;
var SleepTime = 5000;
$(function() {
    $(".brandScrollArea").jCarouselLite({
        btnNext: ".brandScrollBtnL",
        btnPrev: ".brandScrollBtnR",
        visible: 9,
        scroll: 1,
        speed: 1000,
        auto: 3000,
        mouseOver: true
    });

    $(".friend-links").jCarouselLite({
        btnNext: ".link-prev",
        btnPrev: ".link-next",
        visible: 8,
        scroll: 1,
        speed: 1000,
        auto: 3000,
        mouseOver: true
    });
});
$(function() {
    $("#ranks li:first-child").addClass("cur");
    $("#rankContent").find(".rankList:first-child").show();
    $("#ranks li").click(function() {
        var d = $("#ranks li");
        var a = d.index(this);
        var b = idNumber("rankList");
        tabShow(d, a, b);
        return false
    });
    $("#tabs li:first-child").addClass("cur");
    $("#linkContent").find(".shortTxtLink:first-child").show();
    $("#tabs li").click(function() {
        var d = $("#tabs li");
        var a = d.index(this);
        var b = idNumber("tabList");
        tabShow(d, a, b);
        return false
    })
});