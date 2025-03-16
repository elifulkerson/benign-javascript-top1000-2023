(function jqIsReady() {
                  if (typeof $ === "undefined") {
                      setTimeout(jqIsReady, 10);
                      return;
                  }
                  for (var i = 0; i < HS_Array.functionArray.length; i++) {
                      try {
                          HS_Array.functionArray[i]();
                      } catch (e) { }
                  }
              })();