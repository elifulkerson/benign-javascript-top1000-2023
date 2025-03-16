function accessibilityPatch() {
               document.querySelector('.scl-hero--msg-colimg img')?.setAttribute('role', 'none');
               document.querySelector('.prosp-chart--rangeslider input')?.setAttribute('aria-label', 'Monthly contribution Amount');
               document.querySelector('.pvd-field-group__field-group')?.removeAttribute('role');
               document.querySelector('.prosp-chart--field-input .pvd-field-group__field-group')?.removeAttribute('aria-labelledby')
               document.querySelector('.scl-hero--msg-text-header')?.setAttribute('aria-label', 'Empty header');
               document.querySelector('.popin--close-button')?.setAttribute('aria-labelledby', 'Close this modal');
           }
           var pageVersion = _dmt.Data.MetaTags.getMetaTagContent('PAGE') || 'default';
                  function loadJs(url){
		       var script=document.createElement('script');
		       script.type="text/javascript";
		       script.src=url;
		       document.body.appendChild(script);
	             }
	
                  
                  loadJs("https://assets.fidelity.com/virtual-assistant/runtime.ap119043-bundle.js");
                  loadJs("https://assets.fidelity.com/virtual-assistant/polyfills.ap119043-bundle.js");
                  loadJs("https://assets.fidelity.com/virtual-assistant/main.ap119043-bundle.js");  

               if (pageVersion == 'HomePageProspect'){
                     // Add measurement for AO button and start here button
                 document.querySelector('.hp-new-account-selector')?.setAttribute('data-measurement','open more guidance')
   
                  // Change footer and disclosure location
                 var footerEle = $('#layout-region-footer').eq(0);
                 var disclosureEle = $('#layout-region-page-disclosure').eq(0);
                 disclosureEle.insertAfter(footerEle);

                 accessibilityPatch()

  	          

              }

               //fix disclosure extra gap issue
              if ( $("#responsive-landing .below-disclosure, #responsive-landing-page .below-disclosure").length > 0 ) {
               $("#responsive-landing .below-disclosure, #responsive-landing-page .below-disclosure").attr("style","padding-top: 0px !important;")
            }

           // Mobile login collapse(only PHP)
           var pageVersionhp = _dmt.Data.MetaTags.getMetaTagContent('PAGE') || 'default';
           if(pageVersionhp == 'HomePageProspect' && navigator.userAgent.match((/(iPhone|Android|Windows Phone|SymbianOS)/i))){
              $('#homepage-container .login-widget-homepage').css('display','none')
              $('#homepage-container .login-widget-homepage--toplink').css('display','none')
           }

            var timerservicemessageFlag=false;
            var timerservicemessageCounter=0;
            var timerservicemessage=setInterval(function(){
              timerservicemessageCounter++;
              if(timerservicemessageFlag || timerservicemessageCounter>=15){
                clearInterval(timerservicemessage);   
                return;
              }
              if($('.message-page-level').length>0){
                var offerid=$('.message-page-level').attr('id')
                if(offerid && offerid.includes("Suppressed")){
                    $('.message-page-level').css('display','none')
                    timerservicemessageFlag=true
                }else{
                    $('.service-message--container-wrapper').css('visibility','visible')
                 }
              }
            },100)