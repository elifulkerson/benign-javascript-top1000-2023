function setCookieMobileRedirect(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }
    function CheckMobileRedirect() {
        try {
            //check session on client
            if (typeof (Storage) !== "undefined") {
                var session = sessionStorage.getItem("VisitSession");
                if (session == null) {
                    //phien lam viec moi
                    sessionStorage.setItem("VisitSession", "1");

                    var hash = window.location.hash;
                    if (hash == "#first") {
                        //link được redirect từ bản mobile sang thì không làm gì.
                        window.history.replaceState("", "", window.location.href.split('#')[0]);
                    }
                    else {
                        //nếu không phải link đá từ mobile thì remove cookie ở đây.
                        setCookieMobileRedirect("browser", "", -1);
                        //reload lại trang để hệ thống chuyển về bản mobile.
                        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone|webOS)/i) != null) {
                            window.location = window.location.href;
                        }
                    }
                } else {
                    //van dang o phien lam viec cu thi khong lam gi.   
                }
            }
        } catch (e) {
            console.log("Lỗi check mobile redirect: " + e);
        }

    }
    CheckMobileRedirect();