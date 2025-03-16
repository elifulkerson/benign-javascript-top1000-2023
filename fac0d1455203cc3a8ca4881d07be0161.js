var loadScript = function(url, success, async) {
  var newScript = document.createElement('script');
  var scripts = document.getElementsByTagName('script');

  newScript.type = 'text/javascript';
  newScript.async = async || false;
  newScript.crossOrigin = 'anonymous';

  if (success) {
    if (newScript.addEventListener) {
      newScript.addEventListener('load', function() {
       success();
      }, false);
    } else if(newScript.readyState) {
      newScript.onreadystatechange = function() {
        if (this.readyState == 'complete') {
          newScript.onreadystatechange = null;
          success();
        }
      };
    }
  }

  if (scripts && scripts.length) {
    var lastScript = scripts[scripts.length - 1];
    lastScript.parentNode.insertBefore(newScript, lastScript.nextSibling);
  } else if (window.document && window.document.body) {
    window.document.body.appendChild(newScript);
  }

  // IE9 will execute the proper order if src is set AFTER injection
  newScript.src = url;
}

window.coursera = {};
window.appName = "front-page";
window.locale = "en";