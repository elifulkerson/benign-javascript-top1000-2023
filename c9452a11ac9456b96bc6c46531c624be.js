(function () {
    var launchScript = document.createElement('script');
    launchScript.type = 'text/javascript';
    launchScript.className = 'cookie-category-2';
    launchScript.async = true;
    var isCN = document.cookie.includes('elsevier_user_country=CN');
    launchScript.src = isCN ? 'https://assets.elseviercdn.cn/vendor/adobe/4a848ae9611a/d40517b608b9/launch-fe8ef7c28822.min.js' : 'https://assets.adobedtm.com/4a848ae9611a/d40517b608b9/launch-fe8ef7c28822.min.js';
    document.head.appendChild(launchScript); 
  })();