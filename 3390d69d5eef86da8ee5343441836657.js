const $ = window.$;

/**
 * @typedef uspObject
 * @type {object}
 * @property {boolean} cmpLoaded
 * @property {array} jurisdiction
 * @property {string} location
 * @property {array} mode
 */

$(document).ready(() => {
  // CCPA
  if (typeof window.__uspapi === 'function') {
    /**
     * @param {uspObject} obj
     * @param {bool} status
     */
    window.__uspapi('uspPing', 1, (obj, status) => {
      if (status && obj.mode.includes('USP') && obj.jurisdiction.includes(obj.location.toUpperCase())) {
        window.__uspapi('setUspDftData', 1, (obj, status) => {
          if (!status) {
            console.error("Error: USP string not updated!")
          }
        });

        const $ccpaContents = $('.cmp-ccpa-only');
        $ccpaContents.click(function () {
          window.__uspapi('displayUspUi');
          return false;
        });
        $ccpaContents.show();
      }
    });
  }

  // GDPR
  if (typeof window.__tcfapi === 'function') {
    /**
     * @typedef TcData
     * @type {object}
     * @property {boolean} gdprApplies
     *
     */
    /**
     * @param {TcData} tcData
     */
    window.__tcfapi('getTCData', 2, (tcData, success) => {
      if (!success) {
        console.error('Error: Cannot get TCData!');
        return;
      }

      if (!tcData.gdprApplies) {
        return;
      }

      const $gdprContents = $('.cmp-gdpr-only');
      $gdprContents.click(() => {
        window.__tcfapi('displayConsentUi',2, () => {});
        return false;
      });
      $gdprContents.show();
    });
  }
})
