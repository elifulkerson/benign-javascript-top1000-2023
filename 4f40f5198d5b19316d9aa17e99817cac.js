(function (d, w, c) {
    function setCookie(name, value) {
      var options = {}
      options.expires = new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toUTCString();
      options.path = '/'
      options.domain = '.ultimate-guitar.com'
      var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
      for (var optionKey in options) {
        updatedCookie += "; " + optionKey;
        var optionValue = options[optionKey];
        if (optionValue !== true) {
          updatedCookie += "=" + optionValue;
        }
      }
      document.cookie = updatedCookie;
    }
    (w[c] = w[c] || []).push(function() {
        try {
                            w.yaCounter18746557 = new Ya.Metrika({"clickmap":true,"trackLinks":true,"triggerEvent":true,"accurateTrackBounce":true,"ab":{"2681":2,"2801":1,"3289":3,"3304":2,"3409":2,"3448":1,"3457":1,"2513":3,"2738":2,"3115":3,"3412":1,"3442":2},"id":18746557,"webvisor":true});

                
                                                                
             var clientId = w.yaCounter18746557.getClientID();

             setCookie('_ug_client_id', clientId)

             var isPwa =  (
                 (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
                 window.navigator.standalone === true
             );
             var params = {"has_web_pro_access":0,"ab":{"2681":2,"2801":1,"3289":3,"3304":2,"3409":2,"3448":1,"3457":1,"2513":3,"2738":2,"3115":3,"3412":1,"3442":2},"uuid":0,"is_registered":0,"rights":0,"u_id":"SA==","type":"","auth":"None"};
             params.pwa = isPwa ? 1 : 0;
             w.yaCounter18746557.params(params)
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//www.ultimate-guitar.com/static/vendor/metrica/watch_ver1697208206.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");