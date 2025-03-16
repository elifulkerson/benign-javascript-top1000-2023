/* Stock Action - India -> Start */
				function change_stock_action_in( tab, selected_option ) {

					let selected_option_list = selected_option.split( '|-|' );

					$( '.' + tab + '_display_data .ajax_loading' ).show();

					let ga_event_tracker_label = null;
					if( tab == 'in_ma' ) {
						ga_event_tracker_label = 'India_Most Active_' + selected_option_list[1];

					} else if( tab == 'in_tg' ) {
						ga_event_tracker_label = 'India_Top Gainers_' + selected_option_list[1];

					} else if( tab == 'in_tl' ) {
						ga_event_tracker_label = 'India_Top Losers_' + selected_option_list[1];
					}
					GAEventTracker( 'Stock Action_HP', 'Click_Dropdown', ga_event_tracker_label );

					setTimeout(function() {
						$( '.' + tab + '_display_data .' + tab + '_tab' ).hide();
						$( '.' + tab + '_display_data .' + tab + '_' + selected_option_list[0] ).show();
						$( '.' + tab + '_display_data .ajax_loading' ).hide();
					}, 1000 );
				}
			/* End <- Stock Action - India */

			/* Stock Action - United States -> Start */
				function change_stock_action_us( tab, selected_option ) {
					let selected_option_list = selected_option.split( '|-|' );

					let ga_event_tracker_label = null;
					if( tab == 'us_tg' ) {
						ga_event_tracker_label = 'US_Top Gainers_' + selected_option_list[1];

					} else if( tab == 'us_tl' ) {
						ga_event_tracker_label = 'US_Top Losers_' + selected_option_list[1];

					} else if( tab == 'us_ma' ) {
						ga_event_tracker_label = 'US_Top Companies_' + selected_option_list[1];

					}
					GAEventTracker( 'Stock Action_HP', 'Click_Dropdown', ga_event_tracker_label );

					let ajax_link = null;
					if( tab == 'us_tg' ) {
						ajax_link = 'https://www.moneycontrol.com/techmvc/ajaxcontent/stock_action_us/mc_homepage/top_gainers/' + selected_option_list[0] + '/?classic=true';
					} else if( tab == 'us_tl' ) {
						ajax_link = 'https://www.moneycontrol.com/techmvc/ajaxcontent/stock_action_us/mc_homepage/top_losers/' + selected_option_list[0] + '/?classic=true';
					} else if( tab == 'us_ma' ) {
						ajax_link = 'https://www.moneycontrol.com/techmvc/ajaxcontent/stock_action_us/mc_homepage/top_companies/' + selected_option_list[0] + '/?classic=true';
					}

					$.ajax({
						type: "GET",
						url: ajax_link,
						dataType: 'html',
						error: function ( obj, errorMsg, d ) {
						},
						success: function ( html_body ) {
							if ( html_body != '' ) {
								$( '.' + tab + '_display_data' ).html( html_body );
							}
						},
						beforeSend: function () {
							$( '.' + tab + '_display_data .ajax_loading' ).show();
						},
						complete: function () {
							$( '.' + tab + '_display_data .ajax_loading' ).hide();
						}
					});
				}
			/* End <- Stock Action - United States */