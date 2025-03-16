var width = document.documentElement.clientWidth;
		var mcpro = getCookie( 'mcpro' );
		if( mcpro == undefined || mcpro == '' || mcpro == '0' ) {
			googletag.cmd.push(function() {
				/* Runs Only for WEB */
				if( width >= 768 ) {
					googletag.defineOutOfPageSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_SHOSH_OOP', 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_SHOSH_OOP' ).addService( googletag.pubads() );
					googletag.defineOutOfPageSlot( '/1039154/MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_SKIN_OOP', 'MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_SKIN_OOP' ).addService( googletag.pubads() );
				}

				/* Runs Only for WAP */
				if( width <= 768 ) {
					googletag.defineOutOfPageSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_SHOSH_OOP', 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_SHOSH_OOP' ).addService( googletag.pubads() );
					googletag.defineOutOfPageSlot( '/1039154/MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_SKIN_OOP', 'MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_PG_SKIN_OOP' ).addService( googletag.pubads() );

					
				}

				/* googletag.pubads().enableSingleRequest(); */
				googletag.pubads().disableInitialLoad();
				googletag.enableServices();
			});
		}