var cordova = {
                require() {
                  return {
                    nativeCallback() {}
                  }
                }
              }
              function broadcastRenderComplete() {
                if (typeof window.webkit === 'object' &&
                    typeof window.webkit.messageHandlers === 'object' &&
                    typeof window.webkit.messageHandlers.cordova === 'object' &&
                    typeof window.webkit.messageHandlers.cordova.postMessage === 'function') {
                  window.webkit.messageHandlers.cordova.postMessage(["", "AppHost", "broadcastRenderComplete", ["%7B%7D"]]);
                }
              }
              window.onload = broadcastRenderComplete;