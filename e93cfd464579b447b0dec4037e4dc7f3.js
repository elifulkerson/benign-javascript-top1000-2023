(function () {
            if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                    window.navigator.serviceWorker.getRegistrations().then(function(registrations) {
                        registrations.forEach(function(registration) {
                            if (
                                registration.active.scriptURL.indexOf('sw_ug.js') !== -1
                                ||
                                registration.active.scriptURL.indexOf('sw_ug_v2.js') !== -1
                            ) {
                                registration.unregister()
                            }
                        })
                    })
                    window.navigator.serviceWorker.register('/sw_ug_v3.js').catch(function(error) {})
                })
            }
        })()