var width = window.innerWidth || document.documentElement.clientWidth;
						adKey = "MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_320";
						if (width >= 768 && adKey.indexOf( "MC_ENG_DESKTOP" ) != -1 && adKey.indexOf( "MC_ENG_PWA" ) < 0 ) {
							setTimeout(function() {
								googletag.cmd.push(function() { googletag.display( "MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_320" ) });
							}, 2000 );
						}
						if (width <= 768 && adKey.indexOf( "MC_ENG_PWA" ) != -1 ) {
							setTimeout(function() {
								googletag.cmd.push(function() { googletag.display( "MC_ENG_PWA/MC_ENG_PWA_Home/MC_ENG_PWA_Home/MC_ENG_PWA_HP_ATF_320" ) });
							}, 2000 );
						}