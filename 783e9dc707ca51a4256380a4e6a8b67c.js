(function() {
                        var nativeDataLayerPush = window.dataLayer.push;
                        var shouldCollectData = false;
                        var eventsStorage = [];
                        var exclude = /gtm\.|optimize|content-view/;
                        var preventCollectDataUntilEvent = /content-view/;

                        function hasEventName(data, name) {
                            return data && data.event && name.test(data.event);
                        }

                        function isDataShouldPushToDataLayer(data) {
                            return shouldCollectData || hasEventName(data, exclude);
                        }

                        function restoreEvents(scope, GTM_LOAD_DATA){
                            shouldCollectData = true;
                            nativeDataLayerPush.call(scope, GTM_LOAD_DATA);
    
                            eventsStorage.forEach(function(data) {
                                nativeDataLayerPush.call(scope, data);
                            });
                        }

                        window.dataLayer.push = function(data) {
                            if (isDataShouldPushToDataLayer(data)) {
                                if (!shouldCollectData && hasEventName(data, preventCollectDataUntilEvent)) {
                                    return restoreEvents(this, data);
                                }
                                return nativeDataLayerPush.apply(this, arguments);
                            } else {
                                eventsStorage.push(data);
                            }
                        }.bind(window.dataLayer)
                    }());

                    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-MJ29FD7');