function qrcode_show() {
    $(".qrcode-show").show();
}

function qrcode_hide(type) {
    $(".qrcode-show").hide();
    if (type == 1) {
        if ($("#wx_valide_" + wx_login_type).val().length == 4) {
            var res = checkWxCode();
        }
    }
}

//
function checkWxCode() {
    var res = 0;
    $.ajax({
        url: "/member.php?act=check_wx_code&wxcode=" + $("#wx_valide_" + wx_login_type).val(),
        type: "get",
        dataType: "json",
        async: false,
        success: function (msg) {
            if (msg.result == 1) {
                $("#wx_error_" + wx_login_type).addClass("hide");
                $("#wx_ok_" + wx_login_type).removeClass("hide");
                res = 1;
                setTimeout(function(){
									$("#wx_ok_" + wx_login_type).addClass('hide');
								}, 3000);

            }
            else {
                $("#wx_error_" + wx_login_type).removeClass("hide");
                $("#wx_ok_" + wx_login_type).addClass("hide");
                res = 0;
                setTimeout(function(){
									$("#wx_error_" + wx_login_type).addClass('hide');
								}, 3000);
            }
        }
    });
    return res;
}

//ajax 刷新微信二维码
function re_wxcode() {
		$(".qrcode-show").show();
    $.ajax({
        url: '/member.php?act=get_wx_code',
        type: 'post',
        dataType: 'html',
        data: {},
        success: function (data) {
            var data = $.trim(data);
            if (data != '') {
                qrcode_img_spe(data, "doc_qrcode", 124);
            }
        }
    });
}