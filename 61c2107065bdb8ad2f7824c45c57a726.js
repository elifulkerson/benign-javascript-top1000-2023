var __CurrentMainDomain__ = (function () {
          var hostnameArray = location.hostname.split('.');
          return "." + hostnameArray.slice(-2).join('.');
        })();