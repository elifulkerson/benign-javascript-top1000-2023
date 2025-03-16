function GetQueryString(name) {
          var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
          var r = window.location.search.substr(1).match(reg);
          if (r != null) return unescape(r[2]); return null;
      }
      function runExperiment() {
        // sample: PI_RETAILHP_HERO_HomePageProspect --PHP page
        // sample: PI_RETAILHP_HERO_HomePage --CHP Page
        // sample: PI_RETAILHP_HERO_default
        var pageVersion = _dmt.Data.MetaTags.getMetaTagContent('PAGE') || 'default';
         if (pageVersion == 'HomePage'){
             var test = [
               {
                 location: 'PI_RETAILHP_HERO_' + pageVersion ,
                 selector: '.scl-hero--container-wrapper',
                 clickHandler:  '.scl-hero [data-tmsid] a'  
               },
               {
                 location: 'PI_RETAILHP_Notification',
                 selector: '.service-message--container-wrapper',
                 clickHandler:  '.message-page-level--content p a'
                },
               {
                 location: 'PI_CHP_SecL',
                 selector: '#DEFAULTsecondaryCHP00message00SMNCL11 .scl-flexible-images-with-column-1 .scl-flexible-layout-multi-column--compLinkdescription',
                 clickHandler:  '.hp-SL-promo a'
               },
               {
                 location: 'PI_CHP_SecR',
                 selector: '#DEFAULTsecondaryCHP00message00SMNCL11 .scl-flexible-images-with-column-2 .scl-flexible-layout-multi-column--compLinkdescription',
                 clickHandler:  '.hp-SR-promo a'
               },
              {
                 location: 'PI_CHP_FlashPromo',
                 selector: '#chp-flash-container',
                 clickHandler:  '#chp-flash-container a'
               },
               {
                 location: 'PI_CHP_LOGIN_TEST',
                 selector: '#pi-chp-login-test',
                 clickHandler: '#pi-chp-login-test'
               }
             ];
         }else{ 
               var test = [
                     {
                         location: 'PI_RETAILPHP_Notification',
                         selector: '.service-message--container-wrapper',
                        clickHandler:  '.message-page-level--content p a'
                      }
                     
                 ];  
                  function loadCss(url){
		       var style=document.createElement('link');
		       style.rel='stylesheet';
                       style.type='text/css'
		       style.href=url;
		       document.head.appendChild(style);
	             }
                   loadCss('https://www.fidelity.com/bin-public/060_www_fidelity_com/css/helios-expand-collapse.css')
                   loadCss('https://www.fidelity.com/bin-public/060_www_fidelity_com/helios/helios_styles_lc.css')
                   loadCss('https://www.fidelity.com/bin-public/060_www_fidelity_com/css/hp-newphp.css')
         }
        window._dmt.Helper.Experimentation.process(test, 'New Homepage');
      }
  if (typeof window._dmt === 'object') {
        runExperiment();
      } else {
        document.addEventListener('dmt-init-done', function() {
          runExperiment();
        });
      }