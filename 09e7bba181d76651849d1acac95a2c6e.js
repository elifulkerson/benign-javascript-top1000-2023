window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];

      (function (window, document) {
        const elementId = "banner_home3";
        const isMabActive = true
        return document.addEventListener("DOMContentLoaded", function () {
          window.renderAdvertising(elementId, isMabActive);
        });
      })(window, document);