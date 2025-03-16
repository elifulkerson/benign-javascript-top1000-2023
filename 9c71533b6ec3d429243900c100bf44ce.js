window.skinSize = 'small';
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (w > 1300) {
        window.skinSize = 'large';
    }
    if (w <= 668) {
        var platform = 'mobile';
        /*
        $(document).ready(function() {
            f = $(".das-mmiddle");
            d = $("#das-mmiddle-wp");
            var waypoint = new Waypoint({
                element: d[0],
                handler: function(n) {
                    "up" === n ? f.addClass('ups') : "down" === n && f.removeClass('ups')
                },
                offset: function() {
                    return window.innerHeight
                }
            })
        });
        */
    } else {
        var platform = 'desktop';
    }

  function displayr2() {
       googletag.cmd.push(function() {
           googletag.display('300x250_r2');
       });
       displayr2 = function() {}
   }
    function lazyr2() {
        d = $("#300x250_r2");
       var waypoint = new Waypoint({
           element: d[0],
           handler: function(n) {
               displayr2()
           },
           offset: function() {
               return window.innerHeight+50
           }
       })
   }