var OneSignal = window.OneSignal || [];
            OneSignal.push(["init", {
                appId: "da41085a-a849-47c0-96e7-4b956b56f35e",
                /* Set to true to automatically prompt visitors */
                autoRegister: true,

                // https://documentation.onesignal.com/docs/customize-permission-messages-1
                notifyButton: {
                    text: {
                        'tip.state.unsubscribed': 'Subscribe to notifications',
                        'tip.state.subscribed': "You're subscribed to notifications",
                        'tip.state.blocked': "You've blocked notifications",
                        'message.prenotify': 'Click to subscribe to notifications',
                        'message.action.subscribed': "Thanks for subscribing!",
                        'message.action.resubscribed': "You're subscribed to notifications",
                        'message.action.unsubscribed': "You won't receive notifications again",
                        'dialog.main.title': 'Manage Site Notifications',
                        'dialog.main.button.subscribe': 'SUBSCRIBE',
                        'dialog.main.button.unsubscribe': 'UNSUBSCRIBE',
                        'dialog.blocked.title': 'Unblock Notifications',
                        'dialog.blocked.message': "Follow these instructions to allow notifications:"
                    },
                    /* Set to false to hide */
                    enable: false
                },

                prenotify: true,
                persistNotification: false,
                showCredit: false,
                // Your other init options here
                promptOptions: {
                    /* Change bold title, limited to 30 characters */
                    siteName: "Dawn.Com",
                    /* Subtitle, limited to 90 characters */
                    actionMessage: "We'd like to show you notifications for the latest news and updates.",
                    /* Example notification title */
                    exampleNotificationTitle: 'Subscribe for news updates',
                    /* Example notification message */
                    exampleNotificationMessage: "",
                    /* Text below example notification, limited to 50 characters */
                    exampleNotificationCaption: 'You can unsubscribe anytime',
                    /* Accept button text, limited to 15 characters */
                    acceptButtonText: "ALLOW",
                    /* Cancel button text, limited to 15 characters */
                    cancelButtonText: "NO THANKS"
                }
            }]);
            // OneSignal.setSubscription(true);
            OneSignal.push(function() {
                // forcefully popup for notification subscription
                // OneSignal.registerForPushNotifications();
                // for debugging
                // OneSignal.log.setLevel('trace');
                /*OneSignal.isPushNotificationsEnabled(function(isEnabled) {
                    if (isEnabled) {
                      console.log("Push notifications are enabled!");
                    }
                    else {
                      console.log("Push notifications are not enabled yet.");
                    }
                });*/
            });