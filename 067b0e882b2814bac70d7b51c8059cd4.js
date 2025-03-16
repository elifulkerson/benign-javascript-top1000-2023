(function () {
              try {
                var storeKey = localStorage.getItem('ab4900');
                if (storeKey != 'true') {
                  const script = document.createElement('script');
                  script.src = "https://gs.nmgassets.com/HMPCDB853.js";
                  script.setAttribute('type', 'text/javascript');
                  script.async = true;
                  document.head.appendChild(script);
                } 
              } catch (e) {}
            })();