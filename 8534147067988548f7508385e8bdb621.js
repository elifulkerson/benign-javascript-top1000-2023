window.googletag = window.googletag || {};
      window.googletag.cmd = window.googletag.cmd || [];

      (function (window, document) {
        const elementId = "banner_home1_t";
        return document.addEventListener("DOMContentLoaded", function () {
          window.renderAdvertising(elementId, window.cdaaas.SETTINGS.MAB_ACTIVE);
      });
    })(window, document);