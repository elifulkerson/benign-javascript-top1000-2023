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
                    decline: "Nie, dziękuję",
                    accept: "Tak, pewnie",
                    next: "Dalej",
                    finish: "Gotowe",
                    radioGroupHint: "Wybierz tylko jedną odpowiedź",
                    checkBoxGroupHint: "Możesz wybrać kilka odpowiedzi",
                    multiLineInputHint: "Wpisz swoją odpowiedź",
                    singleInputHint: "Wpisz swoją odpowiedź",
                    policyLink: 'Przeczytaj naszą <a href="https://pomoc.olx.pl/hc/pl/articles/360000901525" target="_blank">Politykę prywatności</a>, aby dowiedzieć się, jak chronimy Twoje dane'
                  }
                });
              
                
            } else {
                console.log("NinjaTracker is undefined, initialization failed!");
            }