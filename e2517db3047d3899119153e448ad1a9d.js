window.LS_Mustache_Params = {
            ...window.LS_Mustache_Params,
            preloadGigJs: {
          gigJs: {"jquery":"https://www2.grouponcdn.com/layout/assets/jquery-79a74aa9e6.js","hogan":"https://www1.grouponcdn.com/layout/assets/hogan-9dc5cb2370.js","underscore":"https://www1.grouponcdn.com/layout/assets/underscore-99b6e6555f.js","modernizr":"https://www1.grouponcdn.com/layout/assets/modernizr-5dbd398026.js"},
          gigNames: ''
        }
          };
          (function ({ gigJs, gigNames }) {
  if (document.head.append) {
    gigNames.split(',').forEach(i => {
      if (gigJs[i]) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'script';
        link.href = gigJs[i];
        link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });
  }
})(window.LS_Mustache_Params['preloadGigJs']);