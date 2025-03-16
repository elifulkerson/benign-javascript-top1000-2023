(function (win, doc, style, timeout) {
              var STYLE_ID = 'at-body-style';
              function getParent() {
                return doc.getElementsByTagName('head')[0];
              }
              function addStyle(parent, id, def) {
                if (!parent) {
                  return;
                }
                var style = doc.createElement('style');
                style.id = id;
                style.innerHTML = def;
                parent.appendChild(style);
              }
              function removeStyle(parent, id) {
                if (!parent) {
                  return;
                }
                var style = doc.getElementById(id);
                if (!style) {
                  return;
                }
                parent.removeChild(style);
              }
              function initFunc() {
                addStyle(getParent(), STYLE_ID, style);
                setTimeout(function () {
                  removeStyle(getParent(), STYLE_ID);
                }, timeout);
              }
              if (window.gateway && gateway.environment) {
                initFunc();
              } else if (document.cookie.match(/_dcf=0/) != null) {
                initFunc();
              } else if (document.cookie.match(/usprivacy=1YYY/gi) != null) {
                initFunc();
              }
            })(window, document, 'body {opacity: 1 !important}', 3000);