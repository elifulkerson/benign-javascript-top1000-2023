function getVerloopCookie( cname ) {
			var name = cname + "=";
			var ca = document.cookie.split(';');
			for( var i = 0; i < ca.length; i++ ) {
				var c = ca[i];
				while( c.charAt(0) == ' ' ) {
					c = c.substring( 1 );
				}
				if( c.indexOf( name ) == 0 ) {
					return c.substring( name.length, c.length );
				}
			}
			return "";
		}

		(
			function( w, d, s, u ) {
				w.Verloop = function(c) { w.Verloop._.push(c) }; 
				w.Verloop._ = []; 
				w.Verloop.url = u;
				var h = d.getElementsByTagName(s)[0], j = d.createElement(s); j.async = true;
				j.src = 'https://moneycontrol.verloop.io/livechat/script.min.js';
				h.parentNode.insertBefore( j, h );
				/* Verloop( function() { this.setRecipe( "pz44nQqMye8i9x4Nt" ); }); */
			}
		)
		( window, document, 'script', 'https://moneycontrol.verloop.io/livechat' );

		function openVerloopWidget() {
			let verloop_user_token = getVerloopCookie( 'token-normal' );	/* Get Cookie Value */

			/* Checks for Cookie is exists OR not? */
			if( verloop_user_token == undefined || verloop_user_token == '' ) {
				window.Verloop( function() { 
					this.setWidgetColor( '#0065a1' );
					this.setRecipe( "Lc5LCz4k2mFxc62Xc" );  //  sets the recipe when chat is initiated
					this.openWidget(); //  opens the chat widget
				});
			} else {

				let ajax_link = 'https://www.moneycontrol.com/verloop-apis/overall/user-details/?classic=true&token=' + verloop_user_token;
				let opts = {
					method: 'GET',
					headers: {}
				};
				fetch( ajax_link, opts ).then( function ( response ) {
					return response.json();
				})
				.then( function ( json_obj ) {
					if( json_obj.message == 'success' ) {
						window.Verloop( function() {
							this.setWidgetColor( '#0065a1' );
							this.setUserId( json_obj.data.user_email );
							this.setCustomField( "token", verloop_user_token, { scope: "user" } );
							this.setRecipe( "Lc5LCz4k2mFxc62Xc" );  //  sets the recipe when chat is initiated
							this.openWidget(); //  opens the chat widget
						});
					} else {
						window.Verloop( function() { 
							this.setWidgetColor( '#0065a1' );
							this.setRecipe( "Lc5LCz4k2mFxc62Xc" );  //  sets the recipe when chat is initiated
							this.openWidget(); //  opens the chat widget
						});
					}
				});
			}
		}

		let verloop_user_token = getVerloopCookie( 'token-normal' );	/* Get Cookie Value */
		/* Checks for Cookie is exists OR not? */
		if( verloop_user_token == undefined || verloop_user_token == '' ) {
			window.Verloop(function () {
				this.setWidgetColor( '#0065a1' );
				this.setUserId();
				this.setUserParams( { name: 'userName', } );
			});
		} else {
			window.Verloop(function () {
				this.setWidgetColor( '#0065a1' );
				this.setCustomField( "token", verloop_user_token, { scope: "user" } );
			});
		}