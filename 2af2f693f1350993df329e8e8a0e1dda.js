// JavaScript Document
$(document).ready(function () {
    //NAV
    $(".nav_juegos,.TB_massage").mouseenter(function (e) {
        $(this).find(".gameBox_nav").show().addClass("css3_bounceIn");
        $(this).find("a:first").addClass("cur");
    });
    $(".nav_juegos,.TB_massage").mouseleave(function (e) {
        $(this).find(".gameBox_nav").hide().removeClass("css3_bounceIn");
        $(this).find("a:first").removeClass("cur");
    });

    //JUEGOS HOT
    $(".hot-game a").mouseenter(function (e) {
        $(".hot-game a").css({"opacity": "0.7"});
        $(this).stop().animate({"opacity": "1"});
        $(this).find(".txt").stop().animate({"left": "290px"});
        $(this).find(".btn").stop().animate({"left": "0"});
    });
    $(".hot-game a").mouseleave(function (e) {
        $(".hot-game a").stop().css({"opacity": "1"});
        $(this).find(".txt").stop().animate({"left": "0"});
        $(this).find(".btn").stop().animate({"left": "-195px"});

    });

    //JUEGOS DE NAVEGADOR
    $(".juegos-list a").mouseenter(function (e) {
        $(this).find(".txt").stop().fadeOut();
        $(this).find(".p-hover").stop().animate({"top": 0, "opacity": 1}, 200);
    });
    $(".juegos-list a").mouseleave(function (e) {
        $(this).find(".txt").stop().css({"opacity": 1}).fadeIn();
        $(this).find(".p-hover").stop().animate({"top": "-157px", "opacity": 0}, 200);
    });

    //google iframe dispayNone
    $("iframe[name='google_conversion_frame']").css({"position": "absolute", "top": "0"});

    //Soporte
    //侧边栏下拉效果
    function ShowDropdown(BtnA, dropdown) {
        $(".subMenu2 .list").find(".current").find(dropdown).slideDown();
        $(BtnA).click(function (e) {
            var $parentLi = $(this).parent();
            var thisDropdown = $parentLi.find(dropdown);
            if (thisDropdown.is(dropdown)) {
                if (thisDropdown.css("display") == "none") {
                    $parentLi.siblings().find(dropdown).slideUp("fast");
                    $parentLi.siblings().removeClass("current");
                    $parentLi.addClass("current").find(dropdown).slideDown();
                }
                else {
                    $parentLi.removeClass("current");
                    thisDropdown.slideUp("fast");
                }
            }
            return false;
        });
    }

    ShowDropdown(".btn_showHide", ".dropdown_list");

    $(".QA_list li a").click(function (e) {
        $(this).parent().siblings().find(".qWen").slideUp();
        $(this).next().slideDown();
    });
    $(".QA_list li a").first().click();


    /* html嵌套逻辑迁移 */

    /* 根据web主机路径和域名判断当前所在页面，并给nav添加高亮 */
    var pathname = window.location.pathname;
    var host = window.location.host;
    var current = 100;
    if (pathname.match("\/profile*|\/password*|\/connect")) {
        current = 2;
    } else if (pathname.match("\/payment*|\/charge*")) {
        current = 3;
    } else if (pathname.match("\/group*|\/forum*|\/post*")) {
        current = 4;
    } else if (pathname.match("\/news*|\/events*")) {
        current = 0;
    }

    if (host.match("community")) {
        current = 5;
    } else if (host.match("support")) {
        current = 4;
    } else if (host.match("client")) {
        current = 6;
    }
    $('.topBar_nav a').removeClass('cur');
    $('.topBar_nav ul li.nav' + current).find('a').addClass('cur');

    // 下拉列表动画切换
    function dropdown(btn) {
        $(btn).mouseenter(function (e) {
            $(this).find(".gameBox_nav").show().addClass("css3_bounceIn");
            $(this).find("a:first").addClass("cur");
        });
        $(btn).mouseleave(function (e) {
            $(this).find(".gameBox_nav").hide().removeClass("css3_bounceIn");
            $(this).find("a:first").removeClass("cur");
        });
    }

    dropdown(".nav_juegos,.TB_massage,.Select_Language");
    $(".btn_logT").on("click",function () {
        if($(".btn_logT .btn").attr("id") && $(".btn_logT .btn").attr("id") == "game_login_header"){
            return
        }
        pop.showLogin();
    })
    inputFocus();

    // 输入框聚焦失焦切换
    function inputFocus() {
        $(".Tsign_box .input_Tlogin").focus(function (e) {
            $(".btn_logT").unbind();
        });
        $(".Tsign_box .input_Tlogin").blur(function (e) {
            dropdown(".btn_logT");
            $(".Tsign_box").click(function (event) {
                event.stopPropagation();
            });
            $(".Tsign_box").parents().click(function (e) {
                $(".btn_logT").mouseleave();
            });
        });
    }

    // 1300-> 头部margin切换
    function dpiChange() {
        if ($(window).width() <= 1300) {
            $(".topBar_main").css({
                "margin": "0"
            });
        } else {
            $(".topBar_main").css({
                "margin": "0 40px"
            });
        }
    }

    dpiChange();
    window.onresize = function () {
        dpiChange();
    };

});