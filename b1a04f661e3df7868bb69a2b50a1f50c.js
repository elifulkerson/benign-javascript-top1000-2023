window.Config = { platform: "web", plataforma: "web" };

        // universal variable para métricas
        window.universal_variable = window.universal_variable || {};
        window.universal_variable.sc = window.universal_variable.sc || {};
        window.universal_variable.sc.components = window.universal_variable.sc.components || [];
        window.universal_variable.aud = window.universal_variable.aud || {};
        window.universal_variable.aud.mediaTitle = "home uol";
        window.universal_variable.aud.central = "home";

        //adaptação de disparo de PV uolhome para métrica de aplicativo
        (function(w, f){
          w[f] = function(a){w[f].q = a};
        })(window, 'initAppMetrics');

        // força refresh para cache cinza no back/forward do iphone
        if (location.href.includes('debugBfcache')) {
          if(/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            window.onpageshow = function (event) {
              if (event.persisted) {
                location.href = location.href;
              }
            }
          }
        }

        if (location.href.includes('debugBfunload')) {
          if(/iPad|iPhone|iPod/.test(navigator.userAgent)) {
            window.onbeforeunload = function (event) { }
          }
        }