var mcpro = getCookie( 'mcpro' );
				var width = window.innerWidth || document.documentElement.clientWidth;
				var adKey = "MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_300";

				if( mcpro == undefined || mcpro == '' || mcpro == '0' ) {
					if( width >= 768 && adKey.indexOf( "MC_ENG_DESKTOP" ) != -1 && adKey.indexOf( "MC_ENG_PWA" ) < 0 ) {
													setTimeout(function() {
								googletag.cmd.push(function() { googletag.display( "MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_300" ) });
							}, 2000);
											}
					if( width <= 768 && adKey.indexOf( "MC_ENG_PWA" ) != -1 ) {
													setTimeout(function() {
								googletag.cmd.push(function() { googletag.display( "MC_ENG_DESKTOP/MC_ENG_Home/MC_ENG_Home/MC_ENG_HP_ATF_300" ) });
							}, 2000);
											}
				}