window.globalVars = window.globalVars || {};
            window.globalVars.performance = window.globalVars.performance || {};
            window.globalVars.performance.pageWasActive = document.visibilityState === "visible";

            document.addEventListener("visibilitychange", function(e) {
                if (document.visibilityState !== "visible") {
                    window.globalVars.performance.pageWasActive = false;
                }
            });