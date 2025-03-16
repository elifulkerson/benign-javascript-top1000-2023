window.preloadSupported = function() {
          const link = document.createElement('link');
          const relList = link.relList;
          if (!relList || !relList.supports)
            return false;
          return relList.supports('preload');
        };