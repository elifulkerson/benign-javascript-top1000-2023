;(function(window) {
        // Valida se o navegador possui suporte para Symbol. Se não tiver,
        // está em um range de navegadores não mais suportados pelo UOL e que
        // não precisam ter o registro de erros feito.
        var isBrowserSupported = "Symbol" in window;

        console.log('[see-jserror] ativando registro de erro', isBrowserSupported);

        // descarta erros sem informações relevantes
        var historyErrors = [{
          message: "Script error.",
          stack: "Script error. at :0:0"
        }];

        var findError = function(data) {
          console.log(historyErrors);
          data = data || {};
          for(var i=0; i < historyErrors.length; i++) {
            if(data.message == historyErrors[i].message && data.stack == historyErrors[i].stack) {
              console.log('[see-jserror] erro já reportado');
              return true;
            }
          }

          historyErrors.push(data);

          return false;
        };

        var storageValidation = (function(window) {
          'use strict';
          var validation;
          try {
            // IE <= 9 e demais navegadores devem retornar TRUE
            validation = !!window.localStorage;

            // Se estiver em modo Private no Safari, DOM Exception será retornado,
            // alegando falta de espaço para armazenamento.
            if(validation === true) {
              localStorage.setItem('__test', '');
              localStorage.removeItem('__test');
            }
          } catch(e) {
            // possível erro de Access Denied no IE 10 ou
            // modo private no Safari.
            validation = false;
          }
          return validation;
        }(window));

        function continueReportError(data) {
          console.log('[see-jserror] novo erro reportado');

          var body = [{
            'groupingMap': {
              'Url': window.location.href,
              'UserAgent': window.navigator.userAgent + '',
              'CookieAtivado': window.navigator.cookieEnabled + '',
              'Language': window.navigator.language,
              'LocalStorage': storageValidation + '',
              'Erro': data.message || '',
              'Stack': data.stack || '',
              'HitJsDomain': 'true',
              'ErrorTime': data.ErrorTime,
            },
            'measureMap': {
              'JSErrors': 1
            }
          }];

          // valida se tem acesso ao c.jsuol para descartar problemas de proxy ou bloqueios
          // em redes corporativas / adblocks
          fetch("https://h.jsuol.com.br/assets/?loadComponent=Media&contentType=js").then(function(response) {
            if(response.status == 200) {
              return Promise.resolve();
            }

            return Promise.reject('Failed to fetch, statusCode ' + response.status);
          }).catch(function(err) {
            body[0].groupingMap.HitJsDomain = 'false';
            body[0].groupingMap.Erro += ' (hit jsuol: ' + err.message + ')';
          }).then(function() {
            var req = new XMLHttpRequest();
            req.open('POST', '//logger.uol.com.br/v1/?prd=41&disp=true&mm=true', true);
            req.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            req.send(JSON.stringify(body));
          });
        }

        window.ReportError = function(data) {
          if(isBrowserSupported === false) {
            console.log('[see-jserror] browser not supported, ignoring error');
            return undefined;
          }

          try {
            console.log('[see-jserror] report error');

            // utiliza try..catch para evitar loop
            data = data || {};

            if(findError(data) == true) {
              return undefined;
            }

            data.ErrorTime = performance.now();

            continueReportError(data);
          } catch(err) {
            console.error('[see-jserror] erro ao enviar erro :/', err.message);
            return undefined;
          }
        };

        window.onerror = function(message, file, line, column, error) {
          try {
            // utiliza try..catch para evitar loop
            window.ReportError({
              message: error ? error.message : message,
              stack: error ? error.stack : message+' at '+file+':'+line+':'+column
            });
          } catch(e) { console.error('[see-jserror] catch ', e) }
        };
      })(window);