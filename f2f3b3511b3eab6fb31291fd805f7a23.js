(function (w, d, s, i) {
            var CREATIVE_ID = "9c281645f69ddf3ef5be65bb0c31f59e";
            var microadTag, countNumber = 0, isFindingMicroAdBanner = false;
           
            var findCreativeTagInterval = setInterval(findCreativeTag, 500);
            function findCreativeTag() {
              if (countNumber > 3) {
                clearInterval(findCreativeTagInterval);
                // add 2 following lines for Passback
                loadAdunit(microadTag.id);
                return;
              }
              if (isFindingMicroAdBanner) return;
              isFindingMicroAdBanner = true;
              var divTags = document.getElementsByTagName('div');
              countNumber = countNumber + 1;
              if (divTags && divTags.length) {
                for (var i = 0; i < divTags.length; i++) {
                  var divTag = divTags[i];
                  if (divTag && divTag.id && divTag.id.indexOf(CREATIVE_ID) > -1) {
                    microadTag = divTag;
                    microadTag.style.visibility = "hidden";
                    if (microadTag && microadTag.getElementsByTagName('iframe') &&
                      microadTag.getElementsByTagName('iframe').length > 0) {
                      loadAdunit(microadTag.id);
                      clearInterval(findCreativeTagInterval);
                      break;
                    }
                  }
                }
              }
              isFindingMicroAdBanner = false;
            }
            function loadAdunit(microadBannerId) {
              w.adunitlength ? w.adunitlength.push('ADU-HM589NIN') : w.adunitlength=['ADU-HM589NIN']; var f=d.getElementsByTagName(s)[0], j=d.createElement(s);
              j.async=true; j.src='https://rise.enhance.co.jp/adu.js?id=' + i + '&matwName=matw_uuid' + '&clientTime=' + (new Date()).getTime() + '&maBannerId=' + microadBannerId;
              f.parentNode.insertBefore(j, f);
            }
          })(window, document, 'script', 'ADU-HM589NIN');