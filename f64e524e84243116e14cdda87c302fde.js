$(function(){
				if(typeof GoogleObj != 'undefined') {
					setTimeout(function() {
						var conversions = GoogleObj.getConversions();
						for(k in conversions) {
							var data = conversions[k];
							window['google_conversion_id'] = data.id;
							window['google_conversion_language'] = data.language;
							window['google_conversion_format'] = data.format;
							window['google_conversion_color'] = data.color;
							window['google_conversion_label'] = data.label;
							window['google_conversion_value'] = data.value;
							oldWrite = document.write;
							document.write = (function(params)
							{
								$(document.body).append(params);
							});
					$.getScript(document.location.protocol + "//www.googleadservices.com/pagead/conversion.js", function(){
						document.write = oldWrite;
					});
						}
					}, 10);
				};

				if(typeof GoogleObj != 'undefined') {
					setTimeout(function() {
						var adsDetails = GoogleObj.getAdsDetails();
						if(typeof adsDetails[0] != 'undefined') {
							GoogleObj.loadGoogleAds(adsDetails[0]);
						}
					}, 100);
				}
			});