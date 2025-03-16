/* Read Chartbeat cookie function -> Start */
		function get_chartbeat_cookie( cname ) {
			var name = cname + "=";
			var ca = document.cookie.split( ';' );
			for( var i = 0; i < ca.length; i++ ) {
				var c = ca[i];
				while( c.charAt(0) == ' ' ) { c = c.substring(1); }
				if( c.indexOf( name ) == 0 ) { return c.substring( name.length, c.length ); }
			}
			return "";
		}
	/* End <- Read Chartbeat cookie function */

	(function() {
		var _sf_async_config = window._sf_async_config = (window._sf_async_config || {});
		_sf_async_config.uid = 20831;
		_sf_async_config.domain = 'moneycontrol.com';
		_sf_async_config.flickerControl = false;

		let canonical_url =  $.trim( $( "link[rel='canonical']" ).attr( "href" ) );
		if( canonical_url !== "" ) {
			_sf_async_config.useCanonical = true;
			_sf_async_config.useCanonicalDomain = true;
		} else {
			let location_path = window.location.href;
			location_path = location_path.replace(/^http:\/\//, '').replace(/^https:\/\//, '').replace(/^www./, '');
			_sf_async_config.path = location_path;
		}
		_sf_async_config.sections = 'Moneycontrol,Home';
		_sf_async_config.authors = 'Moneycontrol';
		_sf_async_config.type = 'homepage';
		/* User Subscriber Status -> Start */
			var user_type = 'anon';	/* Subscriber Status - Guest */
			if( get_chartbeat_cookie( 'nnmc' ) ) {
				user_type = 'lgdin';	/* Subscriber Status - Registered */
				var mcpro = get_chartbeat_cookie( 'mcpro' );
				if( mcpro != undefined && mcpro == '1' ) {
					user_type = 'paid';	/* Subscriber Status - Subscriber */
				}
			}
			var _cbq = window._cbq = (window._cbq || []);
			_cbq.push( ['_acct', user_type] );
		/* End <- User Subscriber Status */

		function loadChartbeat() {
			var e = document.createElement('script');
			var n = document.getElementsByTagName('script')[0];
			e.type = 'text/javascript';
			e.async = true;
			e.src = '//static.chartbeat.com/js/chartbeat.js';;
			n.parentNode.insertBefore(e, n);
		}
		loadChartbeat();
	})();