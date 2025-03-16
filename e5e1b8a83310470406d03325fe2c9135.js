var body = document.querySelector('body');
        var script = document.createElement('script');
        script.defer = true;
        script.crossOrigin = 'anonymous';
        script.src = 'https://g.alicdn.com/AWSC/AWSC/awsc.js';
        script.onload = function () {
          AWSC.configFY(function (obj) {
            window.fyOBJ = obj;
          },
          { appName: 'default', serviceLocation: 'cn' }
          );
        }