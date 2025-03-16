function showLoginAccountInfo() {
    $(".profile-arkadiame").show();
    $(".portfolio-arkadiame").show();
}

function showLoginButton() {
    $(".login-arkadiame").show();
}

function getSsoAccountInfo() {
    var ssoData = null;
    var userInfo = null;
    if (getCookie("sso_data") == null) {
        return userInfo
    }
    ssoData = atob(getCookie("sso_data"));
    if (ssoData != null) {
        userInfo = jQuery.parseJSON(ssoData)
    }
    return userInfo
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(";");
    for (var i = 0; i < ca.length; i += 1) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1)
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length)
        }
    }
    return null
}

$(document).ready(function(){
    var ssoAccountInfo = getSsoAccountInfo();
    if (ssoAccountInfo == null) {
        showLoginButton()
    } else {
        $(".login-arkadiame").hide();
        showLoginAccountInfo();
        $('#portfolio-arkadiame').attr('href', 'https://yoursay.suara.com/profile/'+ssoAccountInfo.data.id+'/'+ssoAccountInfo.data.username);
        $('#avatar').attr('src', 'https://thumb.suara.com/avatar/user/resize/40/'+ssoAccountInfo.data.id);
    }

    $("#closelogin").click(function(){
        $('#myModal').hide();
    });
    $(".login-arkadiame a").on('click', function(e) {
        e.preventDefault();
        localStorage.removeItem("sso_refresh");
        $('#iframe_popup_login').attr('src', 'https://www.arkadia.me/popup');
        $('#myModal').show();
    });
});

window.onmessage = (event) => {
    const { origin, data} = event;
    if (origin === "https://www.arkadia.me") {
      if (data.success) {
        if (localStorage.getItem("sso_refresh") != "no_refresh") {
            localStorage.setItem("sso_refresh", "no_refresh");
            $('#myModal').hide();
            location.reload();
        }
      }
    }
};
