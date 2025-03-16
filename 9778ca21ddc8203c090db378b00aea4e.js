// Send an event on clicks for link elements with data-nyp-affiliate="true", wait until the document has loaded.
			document.addEventListener('DOMContentLoaded', function() {
				const affiliateLinks = document.querySelectorAll('a[data-nyp-affiliate="true"]');
				// Return early if we don't have any links.
				if ( ! affiliateLinks ) {
					return;
				}
				// Loop through the links and add the event listener.
				affiliateLinks.forEach(function(link) {
					link.addEventListener('click', function(event) {

						const {
							nypScripts: {
								nypost_wp_vars: {
									nypostSite: siteId = '',
								} = {},
							} = {},
						} = window;

						// Check if we are on the element with the a[data-nyp-affiliate="true"].
						let link = event.target;
						if ( 'true' !== link.dataset.nypAffiliate ) {
							// If not, get the closest one then get the href from that.
							link = event.target.closest('a[data-nyp-affiliate="true"]');
						}

						// Get the URL from the link.
						let href = link.href || '';

						// Bail if we don't have a href.
						if ( ! href ) {
							return;
						}

						// If the URL does not have the protocol we need to add it or URL() will throw an error.
						if (!href.startsWith('http://') && !href.startsWith('https://')) {
							href = 'https://' + href;
						}

						// Get the URL from the link.
						if (href.match(new RegExp(`https?://go.${siteId}.com/`))) {
							// Extract the URL from the skimlinks href.
							href = new URL(href).searchParams.get('url') || href;
						}

						// Get the URL hostname, for example: www.amazon.com.
						const retailer = new URL(href).hostname;

						gtag('event', 'outbound', {
							'internal_source': window.location.href,
							'external_destination': href,
							'retailer': retailer,
							'post_id': "",
						});
					});
				});
			});