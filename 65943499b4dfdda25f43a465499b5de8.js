DM.later('bundle', function() {
			var expireDate = new Date(),
			cName = null;
			
 			if(navigator.userAgent.search("Silk") > -1) {
				var cName = "KindleExpiry",
					link = "amzn://apps/android?asin=B00ARI9CDQ",
					message = 'An important message from MailOnline. '+
					'MailOnline on Kindle is here! '+
					'We think our Kindle app is a much better way of viewing MailOnline. '+
					'Available FREE in the Amazon AppStore. '+
					'Download it now! ';
			} else if(navigator.userAgent.search("Android") > -1) {
				if(navigator.userAgent.search("Mobile") > -1){
					var cName = "AndroidExpiry",
					link = "https://play.google.com/store/apps/details?id=com.dailymail.online",
					message = 'We think our Android app is a much better way of viewing MailOnline. It\'s FREE in the Google Play store and has over 2 million downloads. Get it now! ';
					expireDate.setMonth(expireDate.getMonth() + 1);
				} else {
					var cName = "AndroidExpiry",
					link = "https://play.google.com/store/apps/details?id=com.dailymail.online",
                    message =  "We think our Android tablet app is a much better way of viewing MailOnline. Available for FREE on Google Play. Download it now!";
					expireDate.setMonth(expireDate.getMonth() + 1);
				}
			}
				var log;

				function setCookie(){
					DM.setCookie(cName, cName, expireDate, "/");
				}

				function getCookie(){
					return DM.getCookie(cName);
				}

				if(cName && !getCookie()){
					var conf = confirm(message);
					
					if (conf){
						setCookie();
						window.location = link;
					} else {
						setCookie();
					}
				}
			
		});