window.LS_Mustache_Params = {
            ...window.LS_Mustache_Params,
            socialInit: {
        facebookAppId: 7829106395
      }
          };
          /* eslint-disable no-undef */
(function ({ facebookAppId }) {
  if (typeof window.fbAsyncInit === 'undefined') {
    window.fbAsyncInit = function () {
      FB.init({
        appId: facebookAppId,
        autoLogAppEvents: false,
        xfbml: true,
        version: 'v2.9',
      });
    };
  }
})(window.LS_Mustache_Params['socialInit']);