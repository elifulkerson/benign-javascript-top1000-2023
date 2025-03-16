function updateTimer() {
            future  = Date.parse("February 14, 2024 08:08:00");
            now     = new Date();
            diff    = future - now;

            days  = Math.floor( diff / (1000*60*60*24) );
            // hours = Math.floor( diff / (1000*60*60) );
            // mins  = Math.floor( diff / (1000*60) );
            // secs  = Math.floor( diff / 1000 );

            d = days;
            // h = hours - days  * 24;
            // m = mins  - hours * 60;
            // s = secs  - mins  * 60;

            document.getElementById("box-countdown2")
              .innerHTML =
                '<div class="text">' + d + '<span> Hari</span></div>' ;
                // '<div>' + h + '<span>hours</span></div>' +
                // '<div>' + m + '<span>minutes</span></div>' +
                // '<div>' + s + '<span>seconds</span></div>' ;
          }
          setInterval('updateTimer()', 1000 );