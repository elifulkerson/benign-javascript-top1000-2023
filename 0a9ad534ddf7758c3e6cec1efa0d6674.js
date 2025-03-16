var isPagescrolled = false;
              var isAdsCreatedFF = false;
              HS_Array.functionArray.push(function () {
                  setTimeout(function () {
                      $(window).scroll(function () {
                          if (!_rrCodeStHP) {
                              _rrCodeStHP = 1;
                              setTimeout(function () {
                                  _rrCodeRunNdtvHP(_rrCodeHP);
                              }, 500);

                          }
                      });
                  }, 200);
              });
              function _rrCodeRunNdtvHP(arr) {
                  while (arr.length) {
                      var fnc = arr.splice(0, 1)[0]; fnc();
                  }
              }