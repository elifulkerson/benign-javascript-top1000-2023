__webpack_public_path__ = "https://creditkarmacdn-a.akamaihd.net/res/content/bundles/homepage/2.9.0";
        
        
        
        
        window._MODULEFEDERATION = {"WEB_TRACKING_CLIENT":"1.1.1","WEB_TRACKING_COMPONENTS":"3.0.1"};
        
        window.SSO_SESSION = true;
        window.REQUEST_ID = "1697434659233front-end-render-service165751";
        window.TRACE_ID = "c91ec5a0-cc9a-4f1a-b250-7065ff91a15d";
        window._PKG_NAME = "homepage";
        window._PKG_VERSION = "2.9.0";
        
        
        window._CK_ENVIRONMENT = "production";
        
        
        
        
        window._DARWIN = {"mono":{"homepage_version":"b","homepage_enable_criticalCss":true,"homepage_section_1":"kc_cc_pl_v1_login_cta","homepage_section_2":"v1","homepage_section_3":"money","homepage_section_4":"v1","homepage_section_5":"v1","homepage_section_6":"v1","homepage_section_7":"v1","homepage_section_8":"v1","homepage_section_9":"v1","homepage_disclaimer_variation":"cc_pl_disclaimers,\x20money_disclaimers"}};
        
        
        
        window.IS_PRODUCTION = true;
        
        window.IS_FERS = true;
        window._IMG_FALLBACK = false;
        window._IMG_ONERROR = false;
        
        window._PLATFORM_INFO = {"platform":"Web","osType":null};
        
        window._COOKIE_ID = "4389BE35C1824E8EA4E0FA72AFAFEB4E";
        
        
        window._CK_OAUTH_DECOMP = true;
        
        (function(w){ if (w.fetch) {
          var f = w.fetch;
          w.fetch = function(url, options) {
          var o = options || {}
          if (url.substr(0, 27) === 'https://api.creditkarma.com' || url.substr(0, 30) === 'https://sponge.creditkarma.com') {
            o.credentials = 'include'
            if (window._CK_OAUTH_DECOMP &&
                window.location.host === 'www.creditkarma.com' &&
                /^https:\/\/api.creditkarma.com\/mobile\/([0-9].[0-9]|default)\/oauth2\/token/.test(url) ) {
              return f('https://www.creditkarma.com/member/oauth2/refresh', o)
            }
          }
          return f(url, o)
          };
        }})(window);
        window.NAV_PROPERTIES = {
            
        };