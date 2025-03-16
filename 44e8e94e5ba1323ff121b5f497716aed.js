window.googletag = window.googletag || {cmd: []};

            var adBillboard, adLeaderboard, adRectangle1, adGiantrec, adBottomrec, adHorizon, adSkinLeft, adSkinRight, adPop;
            googletag.cmd.push(function() {
                adLeaderboard = googletag.defineSlot('/105246217/sindonews/desktop/home_page/home/leaderboard', [728, 90], 'div-gpt-ad-leaderboard').addService(googletag.pubads());
                adBillboard = googletag.defineSlot('/105246217/sindonews/desktop/home_page/home/billboard', [970, 250], 'div-gpt-ad-billboard').addService(googletag.pubads());
                adRectangle1 = googletag.defineSlot('/105246217/sindonews/desktop/home_page/home/rectangle1', [300, 250], 'div-gpt-ad-rectangle1').addService(googletag.pubads());
                adGiantrec = googletag.defineSlot('/105246217/sindonews/desktop/home_page/home/giantrec', [300, 600], 'div-gpt-ad-giantrec').addService(googletag.pubads());
                adBottomrec = googletag.defineSlot('/105246217/sindonews/desktop/home_page/home/bottomrec', [300, 250], 'div-gpt-ad-bottomrec').addService(googletag.pubads());
                adHorizon = googletag.defineSlot('/105246217/sindonews/desktop/home_page/home/horizonad', [[970,90],[1100,50]], 'div-gpt-ad-horizonad').addService(googletag.pubads());

                /*adSkinLeft = googletag.defineSlot('/105246217/sindonews/desktop/home_page/home/skinad', [120,600], 'div-gpt-ad-skinad-left').addService(googletag.pubads());
                adSkinRight = googletag.defineSlot('/105246217/sindonews/desktop/home_page/home/skinad', [120,600], 'div-gpt-ad-skinad-right').addService(googletag.pubads());*/
                if(!getCookie('SINDOAdID')){
                    adPop = googletag.defineOutOfPageSlot('/105246217/sindonews/desktop/Sindonews_Desktop_Interstitial', googletag.enums.OutOfPageFormat.INTERSTITIAL).setTargeting('MPI', ['Interstitial']).addService(googletag.pubads());
                }
                
                googletag.pubads().disableInitialLoad();
                googletag.pubads().enableSingleRequest();                
                googletag.pubads().addEventListener('impressionViewable', function(event) {
                    setTimeout(function() {
                        googletag.pubads().refresh([event.slot]);
                    }, 15000);
                });

                googletag.pubads().addEventListener('slotRenderEnded', function(event) {
                    var adATF = ['div-gpt-ad-billboard'];
                    var adTagID = event.slot.getSlotElementId();
                    var elemenTagID = document.getElementById('me-' + adTagID);
                    
                    if(adTagID === 'div-gpt-ad-billboard'){
                        if(event.isEmpty){
                            elemenTagID.classList.add('adnone');
                        } else {
                            elemenTagID.classList.remove('adnone');
                        }
                    }
                    
                    if(event.isEmpty){                        
                        if(elemenTagID !== null && !adATF.includes(adTagID)){
                            elemenTagID.style.display = 'none';
                        }
                    }
                    
                    setTimeout(function(){
                        if(elemenTagID !== null){
                            elemenTagID.classList.remove('adnone');
                        }
                    },10000);
                });
                
                googletag.enableServices();
                
                googletag.pubads().refresh([adBillboard,adHorizon,adPop]);
                googletag.pubads().enableLazyLoad();
                googletag.pubads().refresh([adLeaderboard,adRectangle1,adGiantrec,adBottomrec]);
            });
            
            function setCookie(cname,cvalue,exdays,domain){var d = new Date();d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));var expires = "expires=" + d.toUTCString();document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=" + domain + "; secure; SameSite=None";}
            function getCookie(cname){var name = cname + "=";var decodedCookie = decodeURIComponent(document.cookie);var ca = decodedCookie.split(';');for(var i = 0;i < ca.length;i++){var c = ca[i];while(c.charAt(0) == ' '){c = c.substring(1);}if(c.indexOf(name) == 0){return c.substring(name.length,c.length);}}return "";}
            function bannerCheck(unitAd){googletag.pubads().addEventListener('slotRenderEnded',function(event){if(event.slot.getSlotElementId() === unitAd){if(event.isEmpty){var eAd = document.getElementById('me-'+unitAd);if(eAd != null){eAd.classList.add('adnone');setTimeout(function(){eAd.classList.remove('adnone');},15000);}}}});}
            function bannerHide(unitAd){googletag.pubads().addEventListener('slotRenderEnded',function(event){if(event.slot.getSlotElementId() === unitAd){if(event.isEmpty){var eAd = document.getElementById('me-'+unitAd);if(eAd != null){eAd.classList.add('dnone');}}}});}