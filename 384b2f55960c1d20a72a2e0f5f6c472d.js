var cookieConsentPermit = 
            page_params.enabledFeatures && 
            page_params.enabledFeatures.length == 1 
            && page_params.enabledFeatures[0] == "essential" ? 'denied' : 'granted';


        gaSended = false;
        function defaultGA() {
            if(!gaSended) {
                gaSended = true;
                                    ga('set', 'anonymizeIp', true);  // RED-2644
                    ga('set', 'dimension1', 'online');
                    ga('set', 'dimension24', 'true');
                    ga('set', 'dimension40', 'true');
                    ga('set', 'dimension41', 'false');
                    ga('set', 'dimension42', 'false');
                                                                                                    ga('set', 'dimension29', "redtube.video_recommendation.78");
                                        ga('set', 'dimension35', "redtube.pornstar_recommendation.27");
                                        ga('set', 'dimension38', "redtube.channel_recommendation.28");
                                                                        ga('send', 'pageview');
            }
        }

        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

        ga('create', 'UA-2376569-1', 'auto');
        ga('require', 'linker'); 
        ga('require', 'displayfeatures');
        //RTR-2270
        
        

            
        if(cookieConsentPermit == 'denied') {
            ga("set", "anonymizeIp", true);
            window['ga-disable-UA-2376569-1'] = true;
        }

        
        
        setTimeout(function() {
            if (!gaSended) {
                defaultGA();
            }
        }, 5000);
        defaultGA();