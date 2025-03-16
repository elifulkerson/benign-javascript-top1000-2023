(function initPushNotifications() {
        if (
            typeof Exoclick === 'undefined' ||
            typeof Exoclick.pushNotifications === 'undefined'
        ) {
            setTimeout(initPushNotifications, 2);
        } else {
            Exoclick.pushNotifications.init({
                serverPublicKey: "BNViAalUEwPE7ikn3RWdHjGfbDlXPil3Ira0Yq0jHXDs70Vy43hXLyJ-Geyvw3ZtyJjrMN2bVScnbPHO8El00k4",
                jsPath: "https:\/\/www.exoclick.com\/wp-content\/themes\/exoclick",
                backendServer: "https:\/\/backend.exoclick.com"            });
        }

    })();