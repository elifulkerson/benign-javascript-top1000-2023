function DOMTokenListSupports(tokenList, token) {
              if (!tokenList || !tokenList.supports) {
                return false;
              }
              try {
                return tokenList.supports(token);
              } catch (e) {
                if (e instanceof TypeError) {
                  console.log('The DOMTokenList doesn\'t have a supported tokens list.', e);
                } else {
                  console.error('That shouldn\'t have happened.', e);
                }
              }
            }

            function loadAdLib() {
              if (!window.__AdLib) {
                var domainEnv = '.vice.com';

                var adLibScript = document.createElement('script');
                adLibScript.src = 'https://vice-web-statics-cdn.vice.com/vendor/ad-lib/v2.71.0/vice-ad-lib.js';
                adLibScript.id = 'ad-lib';
                adLibScript.onload = function() {
                  if (window.__AdLib) {
                    window.__AdLib.env = 'production';
                    window.__AdLib.template = 'homepage-next';
                    window.__AdLib.site = 'vice';
                    window.__AdLib.brand = 'vice';
                    window.__AdLib.domain = domainEnv;
                    window.__AdLib.init();
                  }
                }
                adLibScript.onerror = function(e) {
                  console.error('Ad-Lib could not load it\'s script.', e);
                }
                document.head.appendChild(adLibScript);
              }
            }

            var adLibPreload = document.querySelector('#ad-lib-preload');
            if (adLibPreload) {
              adLibPreload.onload = loadAdLib;
            }

            var linkSupportsPreload = DOMTokenListSupports(document.createElement('link').relList, 'preload');

            if (!linkSupportsPreload) {
              console.log('linkSupportsPreload not supported!');
              loadAdLib();
            }