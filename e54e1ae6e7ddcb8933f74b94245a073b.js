(function () {
            var loadDeferredStyles = function() {
              var addStylesNode = document.getElementById("deferred-styles");
              var replacement = document.createElement("div");
              var baseCssPath = '<link media="screen" href="https://css.slickdealscdn.com/min/9227/g=css&amp;style=14&amp;n=STYLE_PLACEHOLDER" rel="stylesheet" crossorigin="anonymous" >';
              var deferredStyles = addStylesNode.textContent.match(/n=([^"&]+)/g);

              if (deferredStyles && deferredStyles.length)
              {
                deferredStyles = deferredStyles.map(function(style) {
                  return style.substr(2);
                });

                replacement.innerHTML = baseCssPath.replace(/(STYLE_PLACEHOLDER)/g, deferredStyles.join('%2C'));
                document.head.appendChild(replacement);
                addStylesNode.parentElement.removeChild(addStylesNode);
              }
            };
            var raf = requestAnimationFrame || mozRequestAnimationFrame ||
                webkitRequestAnimationFrame || msRequestAnimationFrame;
            if (raf) raf(function() { window.setTimeout(loadDeferredStyles, 0); });
            else window.addEventListener('load', loadDeferredStyles);
          })();