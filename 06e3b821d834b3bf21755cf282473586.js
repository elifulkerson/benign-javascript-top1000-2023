function getParameterByName( name ) {
					name = name.replace( /[\[\]]/g, "\\$&" );
					var regex = new RegExp( "[?&]" + name + "(=([^&#]*)|&|#|$)" ),
						results = regex.exec( window.location.href );
					if( ! results ) return null;
					if( ! results[2] ) return '';
					return decodeURIComponent( results[2].replace( /\+/g, " " ) );
				}

				function getCookie(cname) {
					var name = cname + "=";
					var decodedCookie = decodeURIComponent(document.cookie);
					var ca = decodedCookie.split(';');
					for(var i = 0; i <ca.length; i++) {
						var c = ca[i];
						while (c.charAt(0) == ' ') {
							c = c.substring(1);
						}
						if (c.indexOf(name) == 0) {
							return c.substring(name.length, c.length);
						}
					}
					return "";
				}