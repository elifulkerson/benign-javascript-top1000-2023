function firefly_global_loaded() {
				
			let ffpvi = getCookie( 'ffpvi' ) || 0;
			setCookie( 'ffpvi', ++ffpvi, 0.020833333333333 );
			if( ffpvi >= 2 && 'email' !== getCookie( 'ff_source' ) ) {
				let ges = document.createElement( 'script' );
				ges.src = 'https://s3-us-west-2.amazonaws.com/files.getemails.com/account/K97HRE0/source/getemails.js';
				ges.async = 'async';
				document.body.appendChild( ges );
			}
		
			}

			var firefly_loading_gif_url = 'https://www.westernjournal.com/wp-content/themes/firefly/assets/images/loading.gif';
			var firefly_ajax_url        = 'https://www.westernjournal.com/wp-admin/admin-ajax.php';
			var firefly_post_id         = false;