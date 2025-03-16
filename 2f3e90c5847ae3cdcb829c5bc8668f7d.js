$J( function() {
				BindAutoFlyoutEvents();

				var $Window = $J(window);
				var $Header = $J('#store_header');
				var $ResponsiveNavWindowShadeCtn = $J('#responsive_store_nav_ctn');
				var $ResponsiveNavOverlay = $J('#responsive_store_nav_overlay');
				var $ResponsiveNavOverlayCtn = $J('#responsive_store_nav_overlay_ctn');
				var $ResponsiveNavOverlayBottom = $J('#responsive_store_nav_overlay_bottom');
				var $HeaderWrapper;
				$Window.on('Responsive_SmallScreenModeToggled.StoreMenu', function() {
					var bUseSmallScreenMode = window.UseSmallScreenMode && window.UseSmallScreenMode();

											if ( !$HeaderWrapper )
							$HeaderWrapper = $Header.wrap( $J('<div/>', {'class': 'responsive_store_nav_ctn_spacer'} ) ).parent();

						if ( bUseSmallScreenMode )
							$ResponsiveNavWindowShadeCtn.append( $Header );
						else
							$HeaderWrapper.append( $Header );


						if ( bUseSmallScreenMode )
						{
							$Header.css( 'visibility', 'hidden' );
							$Header.show();

							var nStartingScrollPosition = $J('#store_header').height();
							if ( $Window.scrollTop() < nStartingScrollPosition )
								$Window.scrollTop( nStartingScrollPosition );

							$Header.css('visibility', 'visible');
						}
									} );
				
				window.setTimeout( function() { $J(window).trigger('Responsive_SmallScreenModeToggled.StoreMenu'); }, 0 );

										var g_rgUserPreferences = {
							excluded_tags : [],
							excluded_content_descriptors : [3,4]						};
						
													g_rgUserPreferences['use_store_query'] = 1;
						
						g_rgUserPreferences['use_search_spellcheck'] = 1;
						g_rgUserPreferences['search_creators_and_tags'] = 1;

						if( $J('#searchform').length > 0 )
						{
							// default search support where the web page includes the search edit control
							EnableSearchSuggestions( $J('#searchform')[0].elements['term'], '1_4_4_', 'US', 1, 'english', g_rgUserPreferences, '20694075' );
						}
						else 
						{
							// search support for the mobile client.  the mobile client has a native search edit control but relies on the web content to perform the query and show results
													}
				
				// make genre categories expand/collapse on mobile
				$J(document).on( 'click', '.popup_genre_expand_header', function ( event ) {
					if ( !UseSmallScreenMode() )
						return;

					event.preventDefault();
					var $Element = $J(this);
					var $Target = $J('.popup_genre_expand_content[data-genre-group=' + $Element.data('genre-group') + ']' );
					if ( $Element.data('group-expanded') )
					{
						$Target.slideUp();
						$Element.data( 'group-expanded', false );
					}
					else
					{
						$Target.slideDown();
						$Element.data( 'group-expanded', true );
					}
				});
			} );