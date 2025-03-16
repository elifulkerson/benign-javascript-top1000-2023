var clevertap = { event: [], profile: [], region: "in1", account: [], onUserLogin: [], notifications: [], privacy: [] };
		clevertap.account.push({ id: "86Z-5ZR-RK6Z" });	/* TEST-9RZ-67K-Z46Z */
		clevertap.privacy.push({ optOut: false });
		clevertap.privacy.push({ useIP: false });
		(
			function () {
				var wzrk = document.createElement( 'script' );
				wzrk.type = 'text/javascript';
				wzrk.async = true;
				wzrk.src = ('https:' == document.location.protocol ? 'https://d2r1yp2w7bby2u.cloudfront.net' : 'http://static.clevertap.com') + '/js/clevertap.min.js';
				var s = document.getElementsByTagName('script')[0];
				s.parentNode.insertBefore( wzrk, s );
			}
		)();

		clevertap.notifications.push(
			{
				titleText : "Would you like to receive Push Notifications?",
				bodyText : "We promise to only send you relevant content and give you updates on your transactions",
				okButtonText : "Allow",
				rejectButtonText : "No thanks",
				okButtonColor : "#005493",
				/*
				askAgainTimeInSeconds : 5,
				skipDialog : true,
				*/
				serviceWorkerPath : "https://www.moneycontrol.com/news/js/clevertap_sw.js?v=0.1&classic=true"
			}
		);

		function CleverTapEventTracker( name, action, values ) {
			console.log( 'Called CleverTapEventTracker () with => name = ', name, ' action = ', action, ' values = ', values );
			clevertap.event.push( name, { "Property": action, "Values": values });
		}