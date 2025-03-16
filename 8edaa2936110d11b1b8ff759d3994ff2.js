//<![CDATA[
    function loadScript(url, callback) {
      var script = document.createElement("script");
      script.type = "text/javascript";
    
      if (script.readyState) {  //Internet Explorer
          script.onreadystatechange = function() {
            if (script.readyState == "loaded" ||
                    script.readyState == "complete") {
              script.onreadystatechange = null;
              callback();
            }
          };
      } else {  //Other browsers
        script.onload = function() {
          callback();
        };
      }
    
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    }
    
    function initAppleId() {
      AppleID.auth.init({
        clientId : 'com.goodreads.app', 
        scope : 'name email',
        redirectURI: 'https://www.goodreads.com/apple_users/sign_in_with_apple_web',
        state: 'apple_oauth_state_22ba8e5a-1ff3-4866-a92a-eda8aae7e3c0'
      });
    }
    
    var initializeSiwa = function() {
      var APPLE_SIGN_IN_JS_URL =  "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js"
      loadScript(APPLE_SIGN_IN_JS_URL, initAppleId);
    };
    if (typeof AppleID !== "undefined") {
      initAppleId();
    } else {
      initializeSiwa();
    }
  //]]>