var trackingData = trackingData || {}; 
                                try{
                    trackingData.$data = JSON.parse('{"pageView":{"user_status":"unlogged","traffic_source":"direct"},"delayedEvents":[{"click_name":"session_start","event_type":"click"}]}');
                    } catch(e) {
                       throw 'error4' + '{"pageView":{"user_status":"unlogged","traffic_source":"direct"},"delayedEvents":[{"click_name":"session_start","event_type":"click"}]}';
                    }
                    
            if (typeof NinjaTracker !== "undefined") {
                NinjaTracker.init();
                
                window.configTracking = Object.assign(window.configTracking, {
                  platform: "d",
                  surveys: {
                    decline: "Ні, дякую",
                    accept: "Так, звичайно",
                    next: "Далі",
                    finish: "Закінчити",
                    radioGroupHint: "Виберіть один із варіантів",
                    checkBoxGroupHint: "Виберіть кілька варіантів",
                    multiLineInputHint: "Введіть вашу відповідь",
                    singleInputHint: "Введіть вашу відповідь",
                    policyLink: 'Будь ласка, ознайомтеся з нашою <a href="https://help.olx.ua/hc/ru/articles/360000012560" target="_blank">Політикою конфіденційності</a>, щоб дізнатися, як ми захищаємо ваші дані.'
                  }
                });
              
                
            } else {
                console.log("NinjaTracker is undefined, initialization failed!");
            }