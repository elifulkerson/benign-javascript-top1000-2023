var is_dfp_ads_visible = true; /* Use to check for DFP Ads visibility */
		var w_flag = document.documentElement.clientWidth;
		var width = document.documentElement.clientWidth;
		var h_flag = window.screen.height;
		var mc_mchp_gutter_ck = "MC_GUTTER_mchp";
		var ad_delay_by = '2000';	/* Ad delay by n seconds */
		var ppid_cookie_name = 'MC_PPID_LOGIC';

		
		var platform = 'mobile';
		if( w_flag >= 1280 && h_flag >= 600 ) {
			platform = 'desktop';
		}

		function close_mc_gutter(){
			create_dfp_cookie( mc_mchp_gutter_ck, 1, 1 );
		}

		/* Create DFP cookie function -> Start */
			function create_dfp_cookie( name, value, days ) {
				var expires="";
				if( days ) {
					var date = new Date();
					date.setTime(date.getTime()+(days*24*60*60*1000));
					expires = "; expires="+date.toGMTString();
				} else { 
					expires = ""; 
				}
				document.cookie = name+"="+value+expires+"; path=/; domain=.moneycontrol.com;";
			}
		/* End <- Create DFP cookie function */

		/* Read DFP cookie function -> Start */
			function get_dfp_cookie( cname ) {
				var name = cname + "=";
				var ca = document.cookie.split( ';' );
				for( var i = 0; i < ca.length; i++ ) {
					var c = ca[i];
					while( c.charAt(0) == ' ' ) {
						c = c.substring(1);
					}
					if( c.indexOf( name ) == 0 ) {
						return c.substring( name.length, c.length );
					}
				}
				return "";
			}
		/* End <- Read DFP cookie function */

		/* Load scrip file function -> Start */
			function load_script_file( src, is_async ) {
				var script = document.createElement( 'script' );
				script.src = src;
				script.async = is_async ? "async" : false;
				document.head.appendChild( script );
			}
		/* End <- Load scrip file function */

		/* Generate PPID function -> Start */
			function generate_dfp_ppid() {
				var ppid_cookie_object = get_dfp_cookie( ppid_cookie_name );	/* Get Cookie Value */

				/* Checks for Cookie is exists OR not? */
				if( ppid_cookie_object == undefined || ppid_cookie_object == '' ) {
					var ppid_normal_user = 'normaluser' + Math.floor( Math.pow( 15, 13 ) + Math.random() * 14 * Math.pow( 15, 13 ) ) + 'mcids';
					create_dfp_cookie( ppid_cookie_name, ppid_normal_user, '180' );	/* Create Cookie */
				}
			}
		/* End <- Generate PPID function */

		
		/* Load Akamai Edgescape function -> Start */
			function get_akamai_edgescape() {
				let ajax_link = 'https://www.moneycontrol.com/monitoring/get_akamai_edgescape.php?classic=true';
				let opts = { method: 'GET', headers: {} };
				fetch( ajax_link, opts ).then( function ( response ) { 
					return response.json();
				})
				.then( function ( json_obj ) {
					if( Object.keys( json_obj ).length > 0 ) {
						if( json_obj.hasOwnProperty( 'akamai_list' ) ) {
							let akamai_list = json_obj.akamai_list;
							if( akamai_list.hasOwnProperty( 'country_code' ) ) { document.getElementById( 'country_code' ).value = akamai_list.country_code; }
							if( akamai_list.hasOwnProperty( 'region_code' ) ) { document.getElementById( 'region_code' ).value = akamai_list.region_code; }
							if( akamai_list.hasOwnProperty( 'continent' ) ) { document.getElementById( 'continent' ).value = akamai_list.continent; }
						}
					}
				});
			}
		/* End <- Load Akamai Edgescape function */

		/* Initialization DFP  -> Start */
			var googletag = googletag || {};
			googletag.cmd = googletag.cmd || [];

			/* get_akamai_edgescape();	/* Load Akamai Edgescape */

			
							/* PubMatic OpenWrap Script -> Start */
					var profile_id = '8278';	/* For WEB */
					var publisher_id = '113941';

					var PWT = {};
					var gptRan = false;
					PWT.jsLoaded = function() { 
						loadGpt(); 
					};

					/* Runs Only for WAP */
					if( width <= 768 ) { profile_id = '8300'; }

					(function() {
						var purl = window.location.href;
						var url = '//ads.pubmatic.com/AdServer/js/pwt/' + publisher_id + '/' + profile_id;
						var profileVersionId = '';
						if( purl.indexOf( 'pwtv=' ) > 0 ) {
							var regexp = /pwtv=(.*?)(&|$)/g;
							var matches = regexp.exec(purl);
							if( matches.length >= 2 && matches[1].length > 0 ) {
								profileVersionId = '/' + matches[1];
							}
						}
						var wtads = document.createElement( 'script' );
						wtads.async = true;
						wtads.type = 'text/javascript';
						wtads.src = 'https:' + url + profileVersionId + '/pwt.js';
						/* console.log( 'wtads.src = ' , wtads.src ); */
						var node = document.getElementsByTagName( 'script' )[0];
						node.parentNode.insertBefore( wtads, node );
					})();

					var loadGpt = function() {
						/* Check the gptRan flag */
						if (!gptRan) {
							gptRan = true;
							var gads = document.createElement( 'script' );
							var useSSL = 'https:' == document.location.protocol;
							gads.src = (useSSL ? 'https:' : 'http:') + '//www.googletagservices.com/tag/js/gpt.js';
							var node = document.getElementsByTagName( 'script' )[0];
							node.parentNode.insertBefore( gads, node );
						}
					}
					setTimeout( loadGpt, 500 );	/* Failsafe to call gpt */
				/* End <- PubMatic OpenWrap Script */
			
					/* End <- Initialization DFP */

		/* Normal DFP -> Start */
			function normal_dfp() {
				var googletag = googletag || {};
				googletag.cmd = googletag.cmd || [];
				(function() {
					var gads = document.createElement('script');
					gads.async = true;
					gads.type = 'text/javascript';
					var useSSL = 'https:' == document.location.protocol;
					gads.src = (useSSL ? 'https:' : 'http:') + '//securepubads.g.doubleclick.net/tag/js/gpt.js';
					var node = document.getElementsByTagName('script')[0];
					node.parentNode.insertBefore(gads, node);
				})();
			}
		/* End <- Normal DFP */

		
		/* Get Page Meta List function -> Start */
			function get_page_meta_list( meta_name ) {
				const metas = document.getElementsByTagName( 'meta' );
				if( meta_name != '' ) {
					for( let i = 0; i < metas.length; i++ ) {
						if( metas[i].getAttribute( 'name' ) === meta_name ) {
							return metas[i].getAttribute( 'content' );
						}
					}
				}
				return '';
			}
		/* End <- Get Page Meta List function */

		/* Set DFP Targeting -> Start */
			function set_dfp_targeting() {
				let activate_set_targeting = false;
				let dfp_targeting_cookie_name = 'USR_DFP_TARGETING';

				/* Checks for Cookie is exists OR not? */
				if( get_dfp_cookie( 'nnmc' ) ) {
					activate_set_targeting = true;
				}

				/* Hide for MC Pro Users -> Start */
					let mcpro = get_dfp_cookie( 'mcpro' );
					if( mcpro == '1' ) {
						activate_set_targeting = false;
					}
				/* End <- Hide for MC Pro Users */

				if( activate_set_targeting == true ) {
					let dfp_targeting_cookie_object = get_dfp_cookie( dfp_targeting_cookie_name );	/* Get Cookie Value */

					/* Checks for Cookie is exists OR not? */
					if( dfp_targeting_cookie_object == '' || typeof( dfp_targeting_cookie_object ) == "undefined" ) {
						let user_token_normal = get_dfp_cookie( 'token-normal' );

						if( user_token_normal != '' ) {
							let ajax_link = 'https://www.moneycontrol.com/portfolio_plus/userdetail.php?token=' + user_token_normal + '&classic=true';
							let opts = {
								method: 'GET',
								headers: {}
							};
							fetch( ajax_link, opts ).then( function ( response ) {
								return response.json();
							})
							.then( function ( json_obj ) {

								if( Object.keys( json_obj ).length > 0 ) {
									if( json_obj.status == 'success' ) {
										let value = json_obj.data;

										let birthday = value.dob;

										/* Find out Age -> Start */
											if( birthday != '' ) {
												// Actual format YYYY-MM-YY 
												birthday = birthday.replace( /\-/g, "," );	// Convert to YYYY,MM,YY
												birthday = new Date( birthday );
												let ageDifMs = Date.now() - birthday.getTime();
												let ageDate = new Date( ageDifMs ); // miliseconds from epoch
												birthday = String( Math.abs( ageDate.getUTCFullYear() - 1970 ) );
											}
										/* End <- Find out Age */

										if( value.tvuid != '' ) {
											document.getElementById( 'tvuid' ).value = value.tvuid;
										}

										let dfp_targeting_cookie_object = {};
										dfp_targeting_cookie_object.p_value = value.p_value;
										dfp_targeting_cookie_object.dob = birthday;
										dfp_targeting_cookie_object.gender = value.gender;
										dfp_targeting_cookie_object.income_data = value.income_data;
										dfp_targeting_cookie_object.occupation = value.occupation;
										dfp_targeting_cookie_object.industry = value.industry;

										googletag.pubads().setTargeting( 'p_value', dfp_targeting_cookie_object.p_value );
										googletag.pubads().setTargeting( 'dob', dfp_targeting_cookie_object.dob );
										googletag.pubads().setTargeting( 'gender', dfp_targeting_cookie_object.gender );
										googletag.pubads().setTargeting( 'income_data', dfp_targeting_cookie_object.income_data );
										googletag.pubads().setTargeting( 'occupation', dfp_targeting_cookie_object.occupation );
										googletag.pubads().setTargeting( 'industry', dfp_targeting_cookie_object.industry );

										/* Create Cookie */
										create_dfp_cookie( dfp_targeting_cookie_name, JSON.stringify( dfp_targeting_cookie_object ), '1' );
									}
								}
							});
						}
					} else {
						dfp_targeting_cookie_object = JSON.parse( dfp_targeting_cookie_object );

						googletag.pubads().setTargeting( 'p_value', dfp_targeting_cookie_object.p_value );
						googletag.pubads().setTargeting( 'dob', dfp_targeting_cookie_object.dob );
						googletag.pubads().setTargeting( 'gender', dfp_targeting_cookie_object.gender );
						googletag.pubads().setTargeting( 'income_data', dfp_targeting_cookie_object.income_data );
						googletag.pubads().setTargeting( 'occupation', dfp_targeting_cookie_object.occupation );
						googletag.pubads().setTargeting( 'industry', dfp_targeting_cookie_object.industry );
					}
				} else {
					/* Delete Cookie */
					if( get_dfp_cookie( dfp_targeting_cookie_name ) ) {
						create_dfp_cookie( dfp_targeting_cookie_name, '', 0 );
					}
				}

									googletag.pubads().setTargeting( 'section', 'home' );
					googletag.pubads().setTargeting( 'Content_type', 'home' );

				
									googletag.pubads().setTargeting( 'title_name', 'Business News Today: Stock and Share Market News, Economy and Finance News, Sensex, Nifty, Global Market, NSE, BSE Live IPO News' );
													googletag.pubads().setTargeting( 'meta_keywords', ['Business News, Business News Today, Market News, Share Market News, Share Market news, finance news, Live Stock Market, Commodity Market, IPO News, Live Stock Price, Trading, Nifty, Sensex, Moneycontrol'] );
								googletag.pubads().setTargeting( 'DFP', 'okay' );
									googletag.pubads().setTargeting( 'page_url', 'https://www.moneycontrol.com/' );
													googletag.pubads().setTargeting( 'excerpt_description', 'Business News Today: Read the latest business news on the Indian economy, global market, upcoming IPOs and more. Get Live Stock Price, Stock and Share market news, Finance News, Sensex, Nifty Live, Commodity Market, IPO news, economy news, and personal finance news today only at Moneycontrol' );
							}
		/* End <- Set DFP Targeting */

		/* Launch dfp ads function -> Start */
			function launch_dfp_ads() {
				let region_code = '';
				let continent = '';
				let is_andbeyond_script = true;

				/*  Normal DFP -> Start */
					normal_dfp();
				/* End <- Normal DFP */

									/* Header biding -> Start */
						region_code = document.getElementById( "region_code" ).value;
						continent = document.getElementById( "continent" ).value;

						if( continent != '' && continent.toLowerCase() == 'eu' ) { is_andbeyond_script = false; }
						if( region_code != '' && region_code.toLowerCase() == 'ca' ) { is_andbeyond_script = false; }

						is_andbeyond_script = true; /* Hardcoded */

						console.log( 'continent=', continent, ' | region_code=', region_code, ' | is_andbeyond_script=', is_andbeyond_script );

						if( is_andbeyond_script == true ) {
							load_script_file( 'https://rtbcdn.andbeyond.media/prod-global-32339.js', true );
						}
					/* End <- Header biding */
				
				/* Initialized DFP Define Slots -> Start */
					define_dfp_slot();
				/* End <- Initialized DFP Define Slots */
			}
		/* End <- Launch dfp ads function */

					var jacketInterval = ''; 
			var jacketCounter = 0;
			function jacketStartTimer() {
				jacketCounter++;

				if( jacketCounter == 10 ) {
					jacketStopTimer();
					if( $( '.ad_google_shhide' ).length ) {
						$( '.sh_clad' ).trigger( 'click' );
					}
				}
			}

			function jacketStopTimer() {
				clearInterval( jacketInterval );
			}
		
		function define_dfp_slot() {

			var ppid = document.getElementById( "ppid" ).value;
			if( ppid === null || ppid === '' ) {
				ppid = get_dfp_cookie( ppid_cookie_name );	/* Get Cookie Value */
			}

			googletag.cmd.push(function() {
				/* Runs Only for WEB */
				if( width >= 768 ) {
											
						
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_728', [[1,1],[728,90],[970,90],[468,60],[970,250],[1003,60],[940,60]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_728' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_300', [[300,250],[250,250]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_300' ).addService(googletag.pubads());
						/* googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_LOGO_99x26', [99,26], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_LOGO_99x26' ).addService(googletag.pubads()); */
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_MID1_300', [[300,250],[250,250]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_MID1_300' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_MID2_300', [[300,250],[250,250]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_MID2_300' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_BTF_300', [[300,250],[250,250],[300,300],[300,600]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_BTF_300' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_MTF_728', [[728,90],[970,90],[468,60]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_MTF_728' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_BTF_728', [[728,90],[970,90],[468,60]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_BTF_728' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_SLUG1_300', [[300,150],[300,100]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_SLUG1_300' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_SLUG2_300', [[300,150],[300,100]], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_SLUG2_300' ).addService(googletag.pubads());

													googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_LHS_210', [210,70], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_LHS_210' ).addService(googletag.pubads());
							googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_RHS_210', [210,70], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_RHS_210' ).addService(googletag.pubads());
						
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_Native', 'fluid', 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_Native' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_MTF_Native', 'fluid', 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_MTF_Native' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_BTF_Native', 'fluid', 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_BTF_Native' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_PG_1x1', [1,1], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_PG_1x1' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_PG_Slider_1x1', [1,1], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_PG_Slider_1x1' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_PG_1x1_2', [1,1], 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_PG_1x1_2' ).addService(googletag.pubads());

									}

				/* Runs Only for WAP */
				if( width <= 768 ) {
					
						
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_320', [[320,50],[300,50],[375,50]], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_320' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_LOGO_100x21', [100,21], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_LOGO_100x21' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_SIP_320', [[320,50],[300,50],[375,50]], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_SIP_320' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_300', [[300,250],[336,280],[250,250],[300,300]], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_300' ).addService(googletag.pubads());
						/* googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_MID_300', [[300,250],[336,280],[250,250],[300,300],[1,1]], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_MID_300' ).addService(googletag.pubads()); */
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_BTF_300', [[300,250],[336,280],[250,250],[300,300]], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_BTF_300' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_FBN_320', [[320,50],[300,50],[375,50]], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_FBN_320' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_NATIVE', 'fluid', 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_NATIVE' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_BTF_NATIVE', 'fluid', 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_BTF_NATIVE' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_1x1', [1,1], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_1x1' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_Slider_1x1', [1,1], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_Slider_1x1' ).addService(googletag.pubads());
						googletag.defineSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_1x1_2', [1,1], 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_1x1_2' ).addService(googletag.pubads());

									}

				/* Runs Only for WEB */
				if( width >= 768 ) {

					/* Ad Slot Render Ended -> Start */
						var dimension_size = '';
						googletag.pubads().addEventListener( 'slotRenderEnded', function( event ) {

															if( event.slot.getSlotElementId() == 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_728' ) {

									dimension_size = '';
									dimension_size = event.size[0] + 'x' + event.size[1];

									if( dimension_size == '970x250' ) {
										/* Display close button for Jacket */
										document.getElementById( 'closeadpr' ).style.display = "block";

										/* 970x250 jacket Ad auto close after 10 seconds */
										document.getElementById( 'closeadpr' ).setAttribute( 'dimension_size', dimension_size );
										jacketInterval = setInterval( jacketStartTimer, 1000 );
									}
								}

								/*
								if( event.slot.getSlotElementId() == 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_LOGO_99x26' ) {
									dimension_size = '';
									dimension_size = event.size[0] + 'x' + event.size[1];

									if( dimension_size == '99x26' ) {
										/* Display Powered by * /
										document.getElementById( 'mc_eng_hp_logo_99x26_powered_by' ).style.display = "inline-block";
									}
								}
								*/
													});
					/* End <- Ad Slot Render Ended */
				}

										googletag.pubads().enableLazyLoad({ fetchMarginPercent: 200, renderMarginPercent: 200, mobileScaling: 1.5 });
						
				if( ppid != '' ) {
					googletag.pubads().setPublisherProvidedId( ppid );
				}
				googletag.enableServices();

									/* OpenWrap code START here */
					if(typeof PWT.requestBids === 'function'){
						PWT.requestBids(
							PWT.generateConfForGPT(googletag.pubads().getSlots()),
							function(adUnitsArray) {
								PWT.addKeyValuePairsToGPTSlots(adUnitsArray);
								PWT.ow_BidsReceived = true;
								/* initAdserver(false); */
							}
						);
					}
					/* No need to handle "else" part as we have A9 wrapper on page */
					/* OpenWrap code END here */
				
				set_dfp_targeting();
			});

					}

		var user_token_normal = get_dfp_cookie( 'token-normal' );
		if( user_token_normal != '' ) {
			var ajax_link = 'https://www.moneycontrol.com/monitoring/mc_user_entitlements.php?user_token=' + user_token_normal + '&classic=true';
			var opts = {
				method: 'GET',
				headers: {}
			};
			fetch( ajax_link, opts ).then( function ( response ) {
				return response.json();
			})
			.then( function ( json_obj ) {
				if( json_obj.hasOwnProperty( 'tvuid' ) ) {
					document.getElementById( 'tvuid' ).value = json_obj.tvuid;
				}
				if( json_obj.hasOwnProperty( 'ppid' ) ) {
					document.getElementById( 'ppid' ).value = json_obj.ppid;
				}
				if( json_obj.hasOwnProperty( 'country_code' ) ) {
					var country_code = json_obj.country_code;

					if( country_code != '' ) {
						if( country_code != 'IN' ) {
							const hide_in_international_collection = document.getElementsByClassName( 'hide_in_international' );
							if( hide_in_international_collection.length > 0 ) {
								for( i = 0; i < hide_in_international_collection.length; i++ ) {
									hide_in_international_collection[i].style.display = 'none';
								}
							}
						}
						if( document.getElementById( 'country_code' ).value == '' ) {
							document.getElementById( 'country_code' ).value = country_code;
						}
					}
				}
				if( json_obj.hasOwnProperty( 'entitlements' ) ) {
					if( !json_obj.entitlements.hasOwnProperty( 'mc_pro' ) ) {
						/* Normal User */
													setTimeout( function() { launch_dfp_ads(); }, ad_delay_by );
											} else {
						/* MC PRO User */
						is_dfp_ads_visible = false;
						document.getElementById( 'is_dfp_ads_visible' ).value = is_dfp_ads_visible;
					}
				} else {
					/* Normal User */
											setTimeout( function() { launch_dfp_ads(); }, ad_delay_by );
									}
			});
		} else {

			generate_dfp_ppid();	/* Generate PPID for Free Users */

			/* Free User */
							setTimeout( function() { launch_dfp_ads(); }, ad_delay_by );
					}