(function(){ 
            window.OptanonWrapper = function () {
              if (window.AsanaTimings) window.AsanaTimings.setTiming("optanonWrapperCalled")
              if (window.AsanaStorage) {
                window.AsanaStorage.setPendingCookies();
                window.AsanaStorage.pushPendingEventsToDataLayer();
                window.AsanaStorage.optanonWrapperInitialized = true;
              } else {
                AsanaErrors.notifyException('AsanaStorage not found in OptanonWrapper');
              }
            }})()