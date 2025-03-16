function getTaboolaCookie( cname ) {
				var name = cname + "=";
				var ca = document.cookie.split(';');
				for( var i = 0; i < ca.length; i++ ) {
					var c = ca[i];
					while( c.charAt(0) == ' ' ) { c = c.substring( 1 ); }
					if( c.indexOf( name ) == 0 ) { return c.substring( name.length, c.length ); }
				}
				return "";
			}

			var mcpro = getTaboolaCookie( 'mcpro' );
			if( mcpro == undefined || mcpro == '' || mcpro == '0' ) {
				window._taboola = window._taboola || [];
									_taboola.push({ homepage: 'auto' });
								!function( e, f, u, i ) {
					if( !document.getElementById(i) ) { e.async = 1; e.src = u; e.id = i; f.parentNode.insertBefore( e, f ); }
				}( document.createElement( 'script' ),
					document.getElementsByTagName( 'script' )[0],
					'https://cdn.taboola.com/libtrc/network18media-moneycontrolenglish/loader.js',
					'tb_loader_script' );
				if( window.performance && typeof window.performance.mark == 'function' ) { window.performance.mark( 'tbl_ic' ); }
			}