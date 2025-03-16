(function() {
            const agent = typeof navigator !== 'undefined' ? navigator.userAgent : '';
            const REGEX_MATCH_CLIENT_TYPE = /BNC\/([0-9.]+) \(([a-zA-Z]+) ([0-9.]+)\)/;
            const isMiniApp = typeof window !== 'undefined' && window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction
            if(REGEX_MATCH_CLIENT_TYPE.test(agent) || isMiniApp){
              return null
            }
            function getJSON(str) {
              try {
                return JSON.parse(str)
              } catch (e) {
                return {}
              }
            }

            var AutoBlockScriptMap = getJSON('{"binance.com":"https://cdn.cookielaw.org/consent/e21a0e13-40c2-48a6-9ca2-57738356cdab/OtAutoBlock.js","binance.info":"https://cdn.cookielaw.org/consent/03246444-2043-432d-afae-413a91f535e9/OtAutoBlock.js","binance.me":"https://cdn.cookielaw.org/consent/39df5304-ea83-4bd5-8550-d57bca54d95a/OtAutoBlock.js"}');
            var SDKStubInfoMap = getJSON('{"binance.com":{"src":"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js","hash":"e21a0e13-40c2-48a6-9ca2-57738356cdab"},"binance.info":{"src":"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js","hash":"03246444-2043-432d-afae-413a91f535e9"},"binance.me":{"src":"https://cdn.cookielaw.org/scripttemplates/otSDKStub.js","hash":"39df5304-ea83-4bd5-8550-d57bca54d95a"}}');

            var domain = location.hostname.split('.').slice(-2).join('.');
            // var domain = 'binance.com';

            function isString(str) {
              return str && typeof str === 'string';
            };

            var stubInfo = SDKStubInfoMap[domain] || {};

            var SDKStubSrc = stubInfo.src;
            var SDKStubHash = stubInfo.hash;

            var injectSDKStub = isString(SDKStubSrc) && isString(SDKStubHash);
            if (injectSDKStub) {
              var script = document.createElement('script');
              script.src = SDKStubSrc;
              script.type = 'text/javascript';
              script.setAttribute('charSet', 'UTF-8');
              script.setAttribute('data-domain-script', SDKStubHash);
              document.head.appendChild(script);

              var s = document.createElement('script')
              s.type = 'text/javascript'
              s.innerHTML = 'function OptanonWrapper() {};'
              s.nonce = 'e4219619-9a00-4863-968c-f9e1f8b4db3d'
              document.head.appendChild(s)

              var ss = document.createElement('script');
              ss.src = 'https://bin.bnbstatic.com/static/one-trust/onetrust-trigger.js';
              ss.type = 'text/javascript';
              ss.setAttribute('charSet', 'UTF-8');
              ss.setAttribute('data-domain-script', SDKStubHash);
              document.head.appendChild(ss);

            }
            }())