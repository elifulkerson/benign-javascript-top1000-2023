var ntd_storage_prefer = localStorage.getItem("ntd_storage_prefer");
		var ntd_disable_gacookies = false;

		if ((typeof (ntd_language_active) != "undefined" && (((ntd_language_active === 'ntd_portuguese') || (ntd_language_active === 'ntd_italian'))) && ( ntd_storage_prefer == null || (ntd_storage_prefer != null && ntd_storage_prefer.indexOf('ntd-analytics-storage') < 0 )))) {
			ntd_disable_gacookies = true;
		}
		if (!ntd_disable_gacookies) {(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
			j.async=true;j.src='//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-P73TQGK');
		}