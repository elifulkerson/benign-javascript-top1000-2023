window.dataLayer = window.dataLayer || [];
			var usprivacy = '1---';
			if (
				'undefined' !== typeof window.usPrivacyCookie       // The usPrivacyCookie object is defined.
				&& 'function' === typeof window.usPrivacyCookie.get // usPrivacyCookie.get is a function.
				&& 'undefined' !== window.usPrivacyCookie.get()     // The value is defined.
				&& null !== window.usPrivacyCookie.get()            // The value is not null.
			) {
				usprivacy = window.usPrivacyCookie.get();
			}
			dataLayer.push({'usprivacy':usprivacy} );