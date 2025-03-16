window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
// Globally used associated attributes
'brand': 'Bitly', // Bitly, QRCG
'user_id': '',
});


jQuery(document).ready(function($) {
            //X CTA CLICKS
            //CHAT EVENTS - NOT AVAILABLE
            //	open
            //	engage
            //	close
            //Form EVENTS
            //	completed
            //	submitted
            //	error
            // FUNNEL
            //X	Get Started CTA
            //X	Get Started Funnel
            //X	Get a Quote CTA
			//X Free Hook CTA
			//X Free Hook Funnel
			//X Footer Navigation Click 
			//X Header Navigation Click

            $(document).on('click', 'a', function(e) {
               // console.log('infotrust-click');

                var event = 'cta_clicks';
                var click_text = $(this).text();
                var cta_location = 'Mid Page';
                var cta_url = $(this).attr('href');
				var brnad = '';
                // Generic CTA CLICKS
                //button, no pricing or quote, and not in the freehook
                if (
                    ( $(this).hasClass('button') || $(this).hasClass('more')) &&
                    cta_url.toLowerCase().indexOf("pricing") === -1 &&
                    cta_url.toLowerCase().indexOf("discover-enterprise") === -1
                ) {
                    window.dataLayer.push({
                        'event': event,
                        'click_text': click_text,
                        'cta_location': cta_location
                    });
                }



                // Get a Quote
                //Link with text "Get a Quote" that links to quote page
                if (
                    click_text == 'Get a Quote' &&
                    cta_url.toLowerCase().indexOf("discover-enterprise") != -1
                ) {
                    event = 'get_a_quote_cta';
                    if ($(this).parents('.top-bar').length > 0) {
                        cta_location = 'Top Navigation';
                    }

                    window.dataLayer.push({
                        'event': event,
                        'click_text': click_text,
                        'cta_location': cta_location
                    });
                }

                // Get Started
                // button, goes to pricing
                if (
                    $(this).hasClass('button') &&
                    cta_url.toLowerCase().indexOf("pricing") != -1 
                ) {
                    event = 'get_started_cta';

                    if ($(this).parents('.hero-content').length > 0) {
                        cta_location = 'Hero';
                    }

                    if ($(this).parents('section.dark-row').length > 0) {
                        cta_location = 'Bottom Page';
                    }

                    window.dataLayer.push({
                        'event': event,
                        'click_text': click_text,
                        'cta_location': cta_location
                    });
                }

                // Get started Funnel - Pricing
                if (
                    $(this).hasClass('button') &&
                    cta_url.toLowerCase().indexOf("sign_up") != -1 &&
                    ( 
                    	$(this).parents('section.pricing-tables').length > 0 ||
                    	$(this).parents('section.comparison-tables').length > 0
                    )
                ) {
                   	event = 'get_started_funnel';
                    
                    if ($(this).parents('section.comparison-tables').length > 0) {

                    cta_location = 'Bottom Page';
                    columnindex =  $(this).parent('td').index();

                    tier = $(this).parent('td').attr('data-plan').toLowerCase();
                    termchoice  = $(this).parents('table.is-year').length;

                    if(termchoice > 0) {
                     	term = 'month';
                     	cost = $(this).parent('td').find('span:nth-child(2)').text().split('/')[0].trim();
                     } else {
                     	term = 'year';
                     	cost = $(this).parent('td').find('span:nth-child(1)').text().split('/')[0].trim();
                     }

                    } else {

                     termchoice  = $(this).parents('.pricing-tables').find('.switch.is-year-top').length;
                     cta_location = 'Top Page';

                     if(termchoice > 0) {
                     	term = 'month';
                     	theclass='year';
                     } else {
                     	term = 'year';
                     	theclass='month';
                     }

                     tier = $(this).parents('.plan-column').find('.plan-name').attr('data-label').toLowerCase();
                     cost = $(this).parents('.plan-column').find('.plan-price.'+theclass).text().split('/')[0].trim();

                    }

                    window.dataLayer.push({
					  'event': event,
					  'click_text' : click_text, // Get Started 
					  'funnel_step_number' : '1', // 1, 2, 3
					  'funnel_step_name' : 'Select Subscription', 
					  'subscription_tier' : tier, // Starter, Basic, Premium 
					  'subscription_cost' : cost, // 8, 29, 199, 35, 300 
					  'subscription_term' : term, // Annually, Monthly
					  'cta_location' : cta_location, // Hero Box, Mid Page, Bottom Page
					});

                   // console.log(term,tier,cost);
                }

                // Navigation links
                if ($(this).parents('#main-nav').length >0){	
	                window.dataLayer.push({
					  'event': 'header_navigation_click',
					  'menu_name' : click_text, // Why Bitly, Products, Link Management 
					  'destination_url' : cta_url, // 
					});
                }

                if ($(this).parents('#sidemenu').length >0){	
	                window.dataLayer.push({
					  'event': 'header_navigation_click',
					  'menu_name' : click_text, // Why Bitly, Products, Link Management 
					  'destination_url' : cta_url, // 
					});
                }


                // Footer
                if ($(this).parents('.footer').length > 0){ 	
	                dataLayer.push({
					  'event': 'footer_navigation_click',
					  'menu_name' : click_text, // Why Bitly, Products, Link Management 
					  'destination_url' : cta_url, // 
					});
                }
            });


            $('.freehook-form').on('submit',function(e) {
               // console.log('freehook-submit');

                var event = 'freehook_cta';
                var click_text = $(this).find('.button').attr('value');
                var cta_location = 'Top Page';
            	var product_type = $('.tabs-title.is-active').text().trim();

              	window.dataLayer.push({
	                'event': event,
	                'click_text': click_text,
	                'cta_location': cta_location
                });
				
				/*
                window.dataLayer.push({
                    'event': 'freehook_funnel',
                    'click_text': click_text,
                    'cta_location': cta_location,
                    'product_type': product_type
                });

              	//console.log(event,click_text,cta_location,product_type);
               */

               });

            $('.hs-form-private').on('submit',function(e) {
               // console.log('freehook-submit');

                var event = 'form_submit';
                var form_name = 'Get a Quote';

                formid = $(this).attr('id');

                if(formid == 'hbspt-form-4cc9f62a-8993-4bf4-abea-c8356143699d') {
                    var form_name = 'Bitly Partner Program';
                }

                if(formid == 'hbspt-form-4cc9f62a-8993-4bf4-abea-c8356143699d') {
                    var form_name = 'Spotlight on Inclusion';
                }
                window.dataLayer.push({
                    'event': event,
                    'form_name': form_name
                });

                //console.log(event,click_text,cta_location,product_type);
               });

        });



