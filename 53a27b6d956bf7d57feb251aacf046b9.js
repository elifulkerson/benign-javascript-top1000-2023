var hidden, visibilityChange, activeFlag;
    activeFlag = true;
    if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
        hidden = "hidden";
        visibilityChange = "visibilitychange";
    } else if (typeof document.msHidden !== "undefined") {
        hidden = "msHidden";
        visibilityChange = "msvisibilitychange";
    } else if (typeof document.webkitHidden !== "undefined") {
        hidden = "webkitHidden";
        visibilityChange = "webkitvisibilitychange";
    }
    function handleVisibilityChange() {
        if (document[hidden]) {

        } else {
            if (activeFlag) {
                if (w > 668) {
                    googletag.cmd.push(function() {
                        googletag.display('1x1_over');
//                         googletag.display('1x1_out');
                        googletag.display('300x250_r1');
//                         googletag.display('300x250_r2');
//                         googletag.display('300x250_r3');
                        lazyr2();
                        googletag.display('970x90_top');
                    });
                }
                activeFlag = false;
                var infocus = 1;
            }
        }
    }
    if (typeof document.addEventListener === "undefined" || typeof document[hidden] === "undefined") {
        if (w > 668) {
            googletag.cmd.push(function() {
                googletag.display('1x1_over');
//                 googletag.display('1x1_out');
                googletag.display('300x250_r1');
//                 googletag.display('300x250_r2');
//                 googletag.display('300x250_r3');
                lazyr2();
                googletag.display('970x90_top');
            });
        }
        var infocus = 1;
    } else {
        if (document[hidden] == true) {
            document.addEventListener(visibilityChange, handleVisibilityChange, false);
        } else {
            if (w > 668) {
                googletag.cmd.push(function() {
                    googletag.display('1x1_over');
//                     googletag.display('1x1_out');
                    googletag.display('300x250_r1');
//                     googletag.display('300x250_r2');
//                     googletag.display('300x250_r3');
                  
                      lazyr2();
                    googletag.display('970x90_top');
                });
            }
            var infocus = 1;
        }
    }