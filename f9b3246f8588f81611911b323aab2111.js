window.onload = function () {
          var links =  document.getElementsByClassName('ck-stylesheet-per-route')
          if (links.length) {
            window.requestAnimationFrame(function() {
              for(var i=0; i < links.length; i++) {
                links[i].href = links[i].dataset.href
              }
            })
          }          
        }