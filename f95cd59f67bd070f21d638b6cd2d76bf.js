var top_pop = {
    picProp: new prompt(),

    delDiv: function (obj) {
        var div = document.getElementById(obj);
        if (div != null) {
            div.parentNode.removeChild(div);
        }
    },
    closeX: function (obj) {
        //$(obj).remove();
        this.delDiv(obj);
        background().remove();
        return;
    },

    showComingSoon: function (content) {
        if (typeof(content) == 'undefined') content = '<p class="succes-icon">' + langArr["Successful registration"] + '</p>';

        var html = '<div class="popWrap">\
					  <h2 class="popUp_head">\
					    <a href="javascript:;" class="btn_close" title="Close">x</a>\
					  </h2>\
					  <div class="pop-newsBox">' + content + '</div>\
					</div>';
        this.picProp.init(html, function (o) {
            o.container.find('a.btn_close').click(function () {
                o.container.remove();
                background().hide();
                return false;
            });
        }).show();
    }
};

function getUserMessage() {
    if ($.cookie("uuzu_UAUTH") != null) {
        $.getJSON(urls.passport_url + "/message/getUserMessages?callback=?", function (data) {
            if (data.message_sys + data.message_self > 0) {
                $('.btn_massage').addClass('unread');
            }
            if (data != '') {
                $('.top_sys').html(data.message_sys);
                $('.top_par').html(data.message_self);
            }
        });
        /*每5分钟请求一次*/
        setTimeout("getUserMessage()", 5 * 60 * 1000);
    }
}

$(function () {
    if ($.cookie("uuzu_UAUTH") != null) {
        //getUserMessage();
    }
    $('#g_Recharge').click(function () {
        top_pop.showComingSoon();
    });

    var top_games_cls = '';
    $('li.game-selector').mouseover(function () {
        $('#show_top_games').show();
    }).mouseout(function () {
        $('#show_top_games').hide();
    });

    $('#show_top_games').hover(function () {

        $('#show_top_games').show();
    }, function () {
        $('#show_top_games').hide();
    });

    $('a.msg_ico').mouseover(function () {
        $('#show_top_msg').show();
    });

    $('#show_top_msg').hover(function () {
        $('#show_top_msg').show();
    }, function () {
        $('#show_top_msg').hide();
    });
})

;(function (global, factory) {
    var sinkScene = {
        initData: function initData(data) {
            var _Self = this;
            var JsonData = JSON.parse(data)
            if(JsonData.length < 1) {
                return false
            }
            var flMark = false;
            if ($.cookie('flCookie') != null) {
                flMark = true;
            }
            $.cookie('flCookie', flMark);
            _Self.getFloor(JsonData, flMark);

        },
        getFloor: function (params, flMark) {
            var _Self = this;
            if($('.banner-container').length > 0) {
                $('.banner-container').remove()
            }
            var flHtml = '<div class="J_smartBanner banner-container">\
                            <a class="J_pupil pupil-container">\
                                <img data_gtarcade_plat_frontpoint="www-bottom-sink,sink-img,' + params.banner_small_url + '" class="gtarcade_plat_frontpoint" src="' + params.banner_small_url + '">\
                                <i data_gtarcade_plat_frontpoint="www-bottom-sink,sink-close2,' + params.banner_small_url + '" class="s-close gtarcade_plat_frontpoint"></i>\
                            </a>\
                            <div class="J_sBanner sBanner-container">\
                                <img src="' + params.banner_big_url + '">\
                                <a data_gtarcade_plat_frontpoint="www-bottom-sink,sink-close1,' + params.banner_big_url + '" class="J_closeIcon close-icon gtarcade_plat_frontpoint"></a>\
                                <a data_gtarcade_plat_frontpoint="www-bottom-sink,sink-btn1,' + params.banner_big_url + '" class="text-box gtarcade_plat_frontpoint" href="' + params.home_url + '" target="_blank">' + params.home_text + '</a>\
                                <a data_gtarcade_plat_frontpoint="www-bottom-sink,sink-btn2,' + params.banner_big_url + '" class="text-box android-box gtarcade_plat_frontpoint" href="' + params.join_url + '" target="_blank">' + params.join_text + '</a>\
                                <div class="time-box"><span>16</span>s</div>\
                            </div>\
                        </div>';
            $('body').append(flHtml);
            var postDotObject ={};
            $(".J_smartBanner .gtarcade_plat_frontpoint").unbind().on("click",function () {
                postDotObject = {
                    event_type: "1",
                    key_module: $(this).attr("data_gtarcade_plat_frontpoint").split(",")[0],
                    key_function: $(this).attr("data_gtarcade_plat_frontpoint").split(",")[1],
                    value: $(this).attr("data_gtarcade_plat_frontpoint").split(",")[2],
                }
                $(this).attr("href") && $(this).attr("href").indexOf("javascript") === -1 ?
                    postDotObject.target_url = $(this).attr("href") : null;
                yoozoo.customDot(postDotObject)
            })
            _Self.listenDom(flMark)
        },
        listenDom: function listenDom(flMark) {
            var _timer = '', _num = 16;
            $(document).on("click", ".pupil-container img", function () {
                $('.J_pupil').css('left', '-100%');
                $('.time-box').hide();
                setTimeout(function () {
                    $('.J_sBanner').css('left', '0');
                }, 500)
            });
            $(document).on("click", ".sBanner-container .J_closeIcon", function () {
                $('.J_sBanner').css('left', '-100%');
                if(_timer) {
                    clearInterval(_timer)
                }
                setTimeout(function () {
                    $('.J_pupil').css('left', '0');
                }, 500)
            });
            $(document).on("click", ".pupil-container .s-close", function () {
                $('.J_smartBanner').hide();
                $.cookie('closedCookie', 'b8d47210afcece86')
            });
            $(document).on("click", ".agree-btn", function () {
                $('.sBanner-container').css('bottom', '-1.9%');
                $('.pupil-container').css('bottom', '0');
            });
            if ($.cookie('closedCookie')) {
                $('.J_smartBanner').hide();
            } else if (flMark && !$.cookie('closedCookie')) {
                $('.J_sBanner').css('left', '-100%')
                $('.J_pupil').css('left', '0');
            } else {
                setTimeout(function () {
                    $('.J_sBanner').css('left', '0');
                }, 1e3)
            }
            if($('#agreement-box').length > 0) {
                $('.sBanner-container').css('bottom', '25px');
                $('.pupil-container').css('bottom', '34px');
            } else {
                $('.sBanner-container').css('bottom', '-1.9%');
                $('.pupil-container').css('bottom', '0');
            }
            if(!flMark) {
                _timer = setInterval(function () {
                    _num--;
                    if (_num < 1) {
                        $(".sBanner-container .J_closeIcon").trigger('click');
                        clearInterval(_timer);
                        return false;
                    }
                    $('.time-box span').html(_num);
                }, 1000);
            }
        }
    }

    window.sinkScene = sinkScene;

})(typeof window !== "undefined" ? window : this, function(window, $, noGlobal ) {

});