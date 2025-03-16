$(document).ready(function() {
		/* Hide Close Add div for MC Pro Users */
		if( $( '.ad_google_shhide' ).length ) {
			var is_dfp_ads_visible = $.trim( $( '.is_dfp_ads_visible' ).val() );
			if( is_dfp_ads_visible == false || is_dfp_ads_visible === 'false' ) {	/* is_dfp_ads_visible is declared while initialization of DFP */
				$( '.closeadpr' ).css( 'display', 'none' );
			}
		}

	});