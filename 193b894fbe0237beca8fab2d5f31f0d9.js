document.addEventListener("DOMContentLoaded", function(event) {
			jQuery(document).ready(function(){
			if (jQuery('p .watermark').length > 0 ) {

				jQuery('p .watermark').parent().addClass('watermarked');

				jQuery('p .watermark').parent().each( function() {
					//jQuery(this).children('img').attr('style', 'margin: 0 !important');
					jQuery(this).children().wrapAll('<div class="watermarked_image"></div>');
				});

				jQuery('.entry-content p.watermarked > div.watermarked_image > img').each( function() {
					if ( jQuery(this).hasClass('alignnone') ) {
						jQuery(this).parent().addClass( 'alignnone' );
					}
					if ( jQuery(this).hasClass('alignleft') ) {
						jQuery(this).parent().addClass( 'alignleft' );
					}
					if ( jQuery(this).hasClass('alignright') ) {
						jQuery(this).parent().addClass( 'alignright' );
					}
					if ( jQuery(this).hasClass('size-medium') ) {
						jQuery(this).parent().addClass( 'has-size-medium' );
					}
					if ( jQuery(this).hasClass('aligncenter') ) {
						jQuery(this).parent().addClass( 'aligncenter' );
						jQuery(this).parent().children().wrapAll('<div class="wm_centered"></div>');
					}
				});
			}
		});
		});