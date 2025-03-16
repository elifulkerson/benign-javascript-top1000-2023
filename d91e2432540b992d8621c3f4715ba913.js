jQuery(document).ready(function($) {
							$(".breaking_news_marquee").show();
							$(".marquee").marquee({
								//speed in milliseconds of the marquee
								duration: 60000,
								//gap in pixels between the tickers
								gap: 150,
								//time in milliseconds before the marquee will start animating
								delayBeforeStart: 0,
								direction: 'left',
								//true or false - should the marquee be duplicated to show an effect of continues flow
								duplicated: true,
								pauseOnHover: true
							});


						});