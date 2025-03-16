if (window.gtag) {
            gtag("event", "optimize.callback", {
                callback: function() {
                    updateGOExperimentsCookie && updateGOExperimentsCookie.apply(this, arguments);
                }
            });
        }