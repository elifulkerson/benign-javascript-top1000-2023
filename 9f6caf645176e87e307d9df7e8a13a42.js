(function () {
              try {
                var re = new RegExp("OptanonConsent=([^;]+)");
                var value = re.exec(document.cookie);
                var cookievalue = value !== null && value[1] !== "false" ? decodeURI(value[1]) : false;
                if ( cookievalue && cookievalue.includes('C0002%3A1')) {
                  var src = "https://cdn-pci.optimizely.com/public/2125530039/s/hm_us.js";
                  document.write('<script src="' + src + '"/>');
                }
              } catch (e) {}
            })();