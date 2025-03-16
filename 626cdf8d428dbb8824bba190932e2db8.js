function firefly_set_ff_utms() {
				['source', 'medium', 'campaign', 'content'].forEach( function( utm ) {
					let val = getParameterByName( 'utm_' + utm );
					if( ! val ) val = getParameterByName( 'ff_' + utm );
					if( val ) {
						let links = document.querySelectorAll( 'a[href*="https://www.westernjournal.com"]:not( [href*="_' + utm + '"] )' );
						for( let i = 0, l = links.length; i < l; ++i ) links[i].href += [/\?/.test(links[i].href) ? '&' : '?', 'ff_', utm, '=', val].join('');
					}
				});
			}
			firefly_set_ff_utms();

			let links = document.querySelectorAll( 'a:not([href^="/"]):not([href*="https://www.westernjournal.com"]):not([href^="#"]):not([href^="mailto:"]):not([href^="javascript:"])' );
			for( let i = 0, l = links.length; i < l; ++i ) links[i].target = '_blank';

			let mailtoLinks = document.querySelectorAll( 'a[href^="mailto:"]' );
			for( let i = 0, l = mailtoLinks.length; i < l; ++i ) mailtoLinks[i].target = '_top';