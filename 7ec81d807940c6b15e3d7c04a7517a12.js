(function(document, window) {
            var DOMContentLoaded=function(a){var b=function(){return document.attachEvent&&"undefined"!=typeof document.attachEvent?"ie":"not-ie"};return a=function(a){a&&"function"==typeof a?"ie"!==b()?document.addEventListener("DOMContentLoaded",function(){return a()}):document.attachEvent("onreadystatechange",function(){if("complete"===document.readyState)return a()}):console.error("The callback is not a function!")}}(DOMContentLoaded||{});
                DOMContentLoaded(function() {
                    if (typeof NinjaTracker !== "undefined") {
                        NinjaTracker.initEvents();
                        if (typeof PaymentHandler === "function") { PaymentHandler(); }
                    } else {
                        console.log("NinjaTracker Events is undefined, initialization failed!");
                    }
                });
        })(document, window);