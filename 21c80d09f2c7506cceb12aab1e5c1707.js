window.LS_Mustache_Params = {
            ...window.LS_Mustache_Params,
            gigComponents: {
        
      }
          };
          (function ({ gigComponents }) {
  if (gigComponents && gigComponents.length) {
    window.__GIG_COMPONENTS = gigComponents.split(',');
  }

  window.GIG || (window.GIG = {});

  window.GIG.loadGigComponents = function () {
    return new Promise(resolve => {
      if (typeof window.GIG.components !== 'undefined') {
        resolve();
        return;
      }

      window.addEventListener('loaded-gig-components', resolve);

      window.addEventListener('failed-gig-components', resolve);
    });
  };
})(window.LS_Mustache_Params['gigComponents']);