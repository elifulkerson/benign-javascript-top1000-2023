$("document").ready(function() {
    var login_opened = false;
    var focused = false;
    $(".btn-open").click(function() {
        if ($(this).hasClass("act")) {
            $(".btn-open", $(this).parents("div.slider")).removeClass("act");
            $(".hidden", $(this).parents("div.slider")).animate({opacity: 'toggle'}, 200, false);
            return false;
        }
        else {
            $(".btn-open", $(this).parents("div.slider")).addClass("act");
            $(".hidden", $(this).parents("div.slider")).animate({opacity: 'toggle'}, 200, false);
            return false;
        }
    });
    $(".login-open").hover(
        function() {
            if (!login_opened) {
                $(".popup-login").animate({opacity: 'toggle'}, 200, false);
                login_opened = true;
            }
        },
        function() {
        }
    );
    $(".box-login").hover(
        function() {
        },
        function() {
            if (login_opened && !focused) {
                $(".popup-login").animate({opacity: 'toggle'}, 200, false);
                login_opened = false;
            }
        }
    );
    $(".txt").focusin(function() {
        focused = true;
    });
    $(".txt").focusout(function() {
        focused = false;
    });
    $(".txt input").click(function() {
        $(this).select();
    });
    /*$(".act-link").click(function(){
     $(".container").after("<div class='wrap-timer'><div class='timer'><h4><span>Please wait <span class='timecount'>15</span> seconds</span> or <a href='#'>click here</a> to get a high speed instant download!</h4><p>You will download as a Free User. Premium users don't have to wait and download with high speed.</p></div></div>");
     var timetogo = 15;
     var timer = window.setInterval(function(){
     var str = timetogo;
     $('.timecount').text(str);
     if (timetogo <= 0)
     {
     $(".download-prepare").hide();
     $(".wrap-timer").remove();
     $(".download-ready").show();
     window.clearInterval(timer);
     }
     timetogo--;
     }, 1000);
     });*/
    $(".box-lang.slider").hover(function() {
        $(".popup-lang.hidden").hide();
    });

    CheckCookie();

    $("#accept-cookie").click(function () {
        var date = new Date(new Date().getTime() + 86400*10000000);
        document.cookie = "eu-cookie=1; path=/; expires=" + date.toUTCString();
        CheckCookie();
    });
});

function CheckCookie()
{
    if (getCookie('eu-cookie')==undefined) {
        $("#cookie-dlg").show();
    } else {
        $("#cookie-dlg").hide();
    }
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

function changeLang(lang) {
    if (lang != '') {
        $.post(url_changeLang, "lang=" + lang, function(data) {
            location.reload(true);
        });
    }
}

function ajaxError(x, e) {
    if (x.status == 0) {
        alert('You are offline!!\n Please Check Your Network.');
    } else if (x.status == 404) {
        alert('Requested URL not found.');
    } else if (x.status == 500) {
        alert('Internel Server Error.');
    } else if (e == 'parsererror') {
        alert('Error.\nParsing JSON Request failed.');
    } else if (e == 'timeout') {
        alert('Request Time out.');
    } else {
        alert('Unknow Error.\n' + x.responseText);
    }
}

