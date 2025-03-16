oneSignalInitialized = false;
            window.addEventListener("load", function() {
                if (!$ || !$.fn || !$.fn.scroll){return;};
                $(window).scroll(function() {
                    if (oneSignalInitialized) {return;};
                    oneSignalInitialized = true;
                    var OneSignal = window.OneSignal || [];
                        OneSignal.push(function() {
                            OneSignal.init({
                            appId: "d146d4bc-9c50-44e1-aaed-e0b54778a598",
                        });
                    });
                });
            });