var ntd_storage_prefer = localStorage.getItem("ntd_storage_prefer");
	var ntd_disable_gacookies = false;
	
	if ((typeof (ntd_language_active) != "undefined" && (((ntd_language_active === 'ntd_portuguese') || (ntd_language_active === 'ntd_italian'))) && ( ntd_storage_prefer == null || (ntd_storage_prefer != null && ntd_storage_prefer.indexOf('ntd-analytics-storage') < 0 )))) {
		ntd_disable_gacookies = true;
	}
	
	if (!ntd_disable_gacookies) {
	var ntd_tag_manager = 'GTM-P73TQGK';
		var settings_obj = {};
		settings_obj[ ntd_tag_manager ] = true;
		(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
		h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
		(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
		})(window,document.documentElement,'async-hide','dataLayer',500,settings_obj);
	}