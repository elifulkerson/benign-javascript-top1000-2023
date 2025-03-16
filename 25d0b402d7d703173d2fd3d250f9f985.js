$(document).ready( function() {
			if( $( '.storyboard_18_widget' ).length ) {
				$.ajax({
					type: "GET",
					url: 'https://www.moneycontrol.com/news/widget/mcpro-home-2023.html?mode=home&amp;limit=2&amp;classic=true',
					dataType: 'html',
					error: function( obj, errorMsg, d ) {},
					success: function( html_body ) {
						if( html_body != '' ) { $( ".storyboard_18_widget" ).html( html_body ); }
					},
					beforeSend: function () {},
					complete: function () {}
				});
			}
		});