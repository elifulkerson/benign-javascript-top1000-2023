function showCookieBanner() {
        var el = document.getElementById('cookie-accept-footer');
        if (el) el.style.display = 'block';
    }
    function acceptCookieFooter() {
        var el = document.getElementById('cookie-accept-footer');
        if (el) el.style.display = 'none';
        document.cookie = "accept-cookies=1;domain=.mediafire.com;path=/;max-age=31536000";
    }
    function doesCookieExist(cookie) {
        var match = document.cookie.match('(^|;)\\s*' + cookie + '=');
        if (match !== null) {
            return true;
        } else {
            return false;
        }
    }
    if (!doesCookieExist('accept-cookies')) {
        showCookieBanner();
    }