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