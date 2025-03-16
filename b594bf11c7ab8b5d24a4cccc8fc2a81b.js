function reload_mobile_market_data() {

				/* Update Nifty Section -> Start */
					var ajax_link = 'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3BNSX';
					var opts = {
						method: 'GET',
						headers: {}
					};
					fetch( ajax_link, opts ).then( function ( response ) {
						return response.json();
					})
					.then( function ( json_obj ) {

						if( json_obj.hasOwnProperty( 'code' ) && json_obj.code === '200' ) {
							var nifty_object = json_obj.data;

							if( Object.keys( nifty_object ).length > 0 ) {
								var color_bg_class = '';
								if( nifty_object.pricechange > 0 ) {
									color_bg_class = 'grn_hilight';
								} else if( nifty_object.pricechange < 0 ) {
									color_bg_class = 'red_hilight';
								}

								var pricechange = 0;
								pricechange = parseFloat( nifty_object.pricechange ).toFixed(2);
								if( pricechange > 0 ) {
									pricechange = '+' + pricechange;
								}

								var pricepercentchange = 0;
								pricepercentchange = parseFloat( nifty_object.pricepercentchange ).toFixed(2);
								if( pricepercentchange > 0 ) {
									pricepercentchange = '+' + pricepercentchange;
								}

								document.getElementById( "nifty_block_cp" ).classList.remove( 'red_hilight', 'grn_hilight' );
								document.getElementById( "nifty_block_cp" ).classList.add( color_bg_class );
								document.getElementById( "nifty_block_cp" ).innerHTML = nifty_object.pricecurrent;

								document.getElementById( "nifty_block_change" ).innerHTML = pricechange;

								document.getElementById( "nifty_block_chg_pchg" ).innerHTML = '(' + pricepercentchange + '%)';

								var arrow_html_body = '';
								if( nifty_object.pricechange > 0 ) {
									arrow_html_body = '<svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
														'	<defs><style>.a{fill:#6db41e;stroke:#637733;}.b,.d{fill:none;}.b{stroke:#fff;}.c{stroke:none;}</style></defs>' +
														'	<g class="a">' +
														'		<rect class="c" width="24" height="24" rx="5"/>' +
														'		<rect class="d" x="0.5" y="0.5" width="23" height="23" rx="4.5"/>' +
														'	</g>' +
														'	<g transform="translate(8 7)">' +
														'		<line class="b" y1="9" x2="9"/>' +
														'		<line class="b" x2="9" transform="translate(0 0)"/>' +
														'		<line class="b" y1="9" transform="translate(9)"/>' +
														'	</g>' +
														'</svg>';
								} else if( nifty_object.pricechange < 0 ) {
									arrow_html_body = '<svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
														'	<defs><style>.ar{fill:#eb6135;stroke:#b24226;}.br,.dr{fill:none;}.br{stroke:#fff;}.cr{stroke:none;}</style></defs>' +
														'	<g transform="translate(-128 -20)">' +
														'		<g class="ar" transform="translate(128 20)">' +
														'			<rect class="cr" width="24" height="24" rx="5"/>' +
														'			<rect class="dr" x="0.5" y="0.5" width="23" height="23" rx="4.5"/>' +
														'		</g>' +
														'		<g transform="translate(-369.5 70.5)">' +
														'			<line class="br" x2="9" y2="9" transform="translate(505.5 -42.5)"/>' +
														'			<line class="br" x2="9" transform="translate(505.5 -33.5)"/>' +
														'			<line class="br" y2="9" transform="translate(514.5 -42.5)"/>' +
														'		</g>' +
														'	</g>' +
														'</svg>';
								}
								document.getElementById( "nifty_block_arrow" ).innerHTML = arrow_html_body;

								setTimeout( function() {
									document.getElementById( "nifty_block_cp" ).classList.remove( 'red_hilight', 'grn_hilight' );
								}, 5000 );
							}
						}
					});
				/* End <- Update Nifty Section */

				/* Update Sensex Section -> Start */
					var ajax_link = 'https://priceapi.moneycontrol.com/pricefeed/notapplicable/inidicesindia/in%3BSEN';
					var opts = {
						method: 'GET',
						headers: {}
					};
					fetch( ajax_link, opts ).then( function ( response ) {
						return response.json();
					})
					.then( function ( json_obj ) {

						if( json_obj.hasOwnProperty( 'code' ) && json_obj.code === '200' ) {
							var sensex_object = json_obj.data;

							if( Object.keys( sensex_object ).length > 0 ) {
								var color_bg_class = '';
								if( sensex_object.pricechange > 0 ) {
									color_bg_class = 'grn_hilight';
								} else if( sensex_object.pricechange < 0 ) {
									color_bg_class = 'red_hilight';
								}

								var pricechange = 0;
								pricechange = parseFloat( sensex_object.pricechange ).toFixed(2);
								if( pricechange > 0 ) {
									pricechange = '+' + pricechange;
								}

								var pricepercentchange = 0;
								pricepercentchange = parseFloat( sensex_object.pricepercentchange ).toFixed(2);
								if( pricepercentchange > 0 ) {
									pricepercentchange = '+' + pricepercentchange;
								}

								document.getElementById( "sensex_block_cp" ).classList.remove( 'red_hilight', 'grn_hilight' );
								document.getElementById( "sensex_block_cp" ).classList.add( color_bg_class );
								document.getElementById( "sensex_block_cp" ).innerHTML = sensex_object.pricecurrent;

								document.getElementById( "sensex_block_change" ).innerHTML = pricechange;

								document.getElementById( "sensex_block_chg_pchg" ).innerHTML = '(' + pricepercentchange + '%)';

								var arrow_html_body = '';
								if( sensex_object.pricechange > 0 ) {
									arrow_html_body = '<svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
														'	<defs><style>.a{fill:#6db41e;stroke:#637733;}.b,.d{fill:none;}.b{stroke:#fff;}.c{stroke:none;}</style></defs>' +
														'	<g class="a">' +
														'		<rect class="c" width="24" height="24" rx="5"/>' +
														'		<rect class="d" x="0.5" y="0.5" width="23" height="23" rx="4.5"/>' +
														'	</g>' +
														'	<g transform="translate(8 7)">' +
														'		<line class="b" y1="9" x2="9"/>' +
														'		<line class="b" x2="9" transform="translate(0 0)"/>' +
														'		<line class="b" y1="9" transform="translate(9)"/>' +
														'	</g>' +
														'</svg>';
								} else if( sensex_object.pricechange < 0 ) {
									arrow_html_body = '<svg xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">' +
														'	<defs><style>.ar{fill:#eb6135;stroke:#b24226;}.br,.dr{fill:none;}.br{stroke:#fff;}.cr{stroke:none;}</style></defs>' +
														'	<g transform="translate(-128 -20)">' +
														'		<g class="ar" transform="translate(128 20)">' +
														'			<rect class="cr" width="24" height="24" rx="5"/>' +
														'			<rect class="dr" x="0.5" y="0.5" width="23" height="23" rx="4.5"/>' +
														'		</g>' +
														'		<g transform="translate(-369.5 70.5)">' +
														'			<line class="br" x2="9" y2="9" transform="translate(505.5 -42.5)"/>' +
														'			<line class="br" x2="9" transform="translate(505.5 -33.5)"/>' +
														'			<line class="br" y2="9" transform="translate(514.5 -42.5)"/>' +
														'		</g>' +
														'	</g>' +
														'</svg>';
								}
								document.getElementById( "sensex_block_arrow" ).innerHTML = arrow_html_body;

								setTimeout( function() {
									document.getElementById( "sensex_block_cp" ).classList.remove( 'red_hilight', 'grn_hilight' );
								}, 5000 );
							}
						}
					});
				/* End <- Update Sensex Section */

				setTimeout( reload_mobile_market_data, 60000 );
			}

			/* Show Telegram Section */
			var today = new Date();
			if( today.getDay() == 6 || today.getDay() == 0 ) {
				document.getElementById( "mkt_livetv" ).style.display = "none";
				document.getElementById( "join_us_telegram" ).style.display = "block";
			}

			reload_mobile_market_data();