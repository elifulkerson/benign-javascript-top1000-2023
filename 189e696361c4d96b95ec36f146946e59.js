(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
		new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
		j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
		'//www.googletagmanager.com/gtm.js?id='+i+dl;j.addEventListener('load', function() {
		d.dispatchEvent(new CustomEvent('gtm_loaded', { bubbles: true }));});f.parentNode.insertBefore(j,f);
		})(window,document,'script','dataLayer',"GTM-TWX9Z9");

		window.nypGoogletag = function(callback) {
			if ('object' === typeof window.googletag) {
				window.googletag.cmd.push(callback);
			} else {
				window.addEventListener('gtm_loaded', function() {
					window.googletag.cmd.push(callback);
				});
			}
		};