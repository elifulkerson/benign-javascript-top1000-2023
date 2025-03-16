;(function() {
     document.cookie = "__adblocker=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
     var setNptTechAdblockerCookieError = function() {
           var d = new Date();
           d.setTime(d.getTime() + 60 * 60 * 24 * 2 * 1000);
           document.cookie = "__adblocker=false; expires=" + d.toUTCString() + "; path=/";
     };
     var checkBodyVisibility = function() {
           if (document.body.style.visibility != 'hidden' && document.body.style.display != 'none') {
                clearInterval(adblockerTimer);
                var script = document.createElement('script');
                script.async = true;
                script.src = '//www.npttech.com/advertising.js';
                script.onerror = setNptTechAdblockerCookieError;
                document.getElementsByTagName('head')[0].appendChild(script);
           }
     }
     var adblockerTimer = setInterval(checkBodyVisibility, 100);
})();