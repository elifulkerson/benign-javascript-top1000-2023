(function(H,A,D,R,O,N,i,d){
				H[N] = H[N] || function(){ (H[N].q = H[N].q || []).push(arguments) };
				H[N]({config: {dm: i}});
				const j = A.createElement(D); A.async=true;
				j.src = R + "?url=" + encodeURIComponent(H.location.href) +
				      "&ref=" + encodeURIComponent(A.referrer) +
				      "&_it=tag&partner_id=" + O;
				const p = A.getElementsByTagName(D)[0];
				p.parentNode.insertBefore(j,p);
			})(window, document, 'script', 'https://cdn.hadronid.net/hadron.js', '484', 'ha', true);

			(function(){
				let ats_ess = getCookie( 'ff_ats_ess' );
				if ( ats_ess ) {
					window.au = window.au || {push: function(){(window.au.q = window.au.q || []).push(arguments) }};
					window.au.push({
						fn: 'addUserIdentity',
						args: {
							identityType: 'email',
							identityValue: ats_ess
						}
					});
				}
			})();