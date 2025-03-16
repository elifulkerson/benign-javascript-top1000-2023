(function(){
                window.begun_new_callbacks = window.begun_new_callbacks || [];
                window.capirsIsReady = false;
                window.capirsOnReady = function (callback) {
                  if (window.capirsIsReady) {
                    callback()
                    return
                  }
                  window.begun_new_callbacks.push({lib: {init: function() {
                    callback()
                  }}});
                }
                window.begun_new_callbacks.push({lib: {init: function(){
                  window.capirsIsReady = true
                }}});
              })()