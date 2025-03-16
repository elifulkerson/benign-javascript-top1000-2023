(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	var ntd_storage_prefer = localStorage.getItem("ntd_storage_prefer");
	var ntd_disable_gacookies = false;
		
	if ((typeof (ntd_language_active) != "undefined" && (((ntd_language_active === 'ntd_portuguese') || (ntd_language_active === 'ntd_italian'))) && ( ntd_storage_prefer == null || (ntd_storage_prefer != null && ntd_storage_prefer.indexOf('ntd-analytics-storage') < 0 )))){
		ntd_disable_gacookies = true;
	}		
	var GA_LOCAL_STORAGE_KEY = 'ga:clientId';
	var ga_client_id = localStorage.getItem(GA_LOCAL_STORAGE_KEY);
		
	if (ntd_disable_gacookies) {
		window['ga-disable-UA-52771782-1'] = true;
	}

	ga('create', the_ga_id, 'auto');
	ga('require', ntd_google_optimize_id);	

	  if ( typeof(ntd_primary_category) != "undefined" && ntd_primary_category !== null ) {
		  ga('set', 'dimension1', ntd_primary_category);
	  }
	  if ( typeof(ntd_user_id) != "undefined" && ntd_user_id !== null ) {
		  ga('set', 'dimension2', ntd_user_id);
	  }
	  if ( typeof(ntd_cat_ids) != "undefined" && ntd_cat_ids !== null ) {
		  ga('set', 'dimension3', ";" + ntd_cat_ids + ";");
	  }
	  if ( typeof(ntd_term_ids) != "undefined" && ntd_term_ids !== null ) {
		  ga('set', 'dimension4', ";" + ntd_term_ids + ";");
	  }
	  if ( typeof(ntd_all_term_ids) != "undefined" && ntd_all_term_ids !== null ) {
		  ga('set', 'dimension5', ";" + ntd_all_term_ids + ";");
	  }
		  if ( typeof(ntd_post_id) != "undefined" && ntd_post_id !== null ) {
			  ga('set', 'dimension21', ntd_post_id);
		  }
		  if ( typeof(ntd_author_nicename) != "undefined" && ntd_author_nicename !== null ) {
			  ga('set', 'dimension22', ntd_author_nicename);
		  }
		  if ( typeof(ntd_author_name) != "undefined" && ntd_author_name !== null ) {
			  ga('set', 'dimension23', ntd_author_name);
		  }
		  if ( typeof(ntd_primary_category_name) != "undefined" && ntd_primary_category_name !== null ) {
			  ga('set', 'dimension26', ntd_primary_category_name);
		  }
		  if ( typeof(ntd_cat_names) != "undefined" && ntd_cat_names !== null ) {
			  ga('set', 'dimension28', ";" + ntd_cat_names + ";");
		  }
		  if ( typeof(ntd_tags) != "undefined" && ntd_tags !== null ) {
			  ga('set', 'dimension29', ";" + ntd_tags + ";");
		  }
		  if ( typeof(ntd_publish_date) != "undefined" && ntd_publish_date !== null ) {
			  ga('set', 'dimension30', ntd_publish_date);
		  }
		  if ( typeof(ntd_last_updated_date) != "undefined" && ntd_last_updated_date !== null ) {
			  ga('set', 'dimension31', ntd_last_updated_date);
		  }
		  if ( typeof(ntd_word_count) != "undefined" && ntd_word_count !== null ) {
			  ga('set', 'dimension33', ntd_word_count);
		  }
		  if ( typeof(ntd_user_id) != "undefined" && ntd_user_id !== null ) {
			  ga('set', 'dimension38', ntd_user_id);
		  }
		  if ( typeof(ntd_tags_slugs) != "undefined" && ntd_tags_slugs !== null ) {
			  ga('set', 'dimension42', ";" + ntd_tags_slugs + ";");
		  }
		  if ( typeof(ntd_page_type) != "undefined" && ntd_page_type !== null ) {
			  ga('set', 'dimension43', ntd_page_type);
		  }
		var domain = ".ntdtv.jp";
		if (ntd_language_active === 'ntd_italian') {
			domain = '.epochtimes.it';			
		} else if (ntd_language_active === 'ntd_portuguese') {
			domain = '.epochtimes.com.br';
		}
		if ( ntd_disable_gacookies) {			
			ga('create', 'UA-52771782-1', {
				'storage': 'none',
				'storeGac': false,
				'cookieDomain': domain,
				'cookieExpires': -86400,
				'clientId': ga_client_id,
				'cookieUpdate': false,
				'cookieFlags': 'SameSite=Lax;Secure',
			});
		} 
		ga('send', 'pageview');
		
		ga(function(tracker) {
			localStorage.setItem(GA_LOCAL_STORAGE_KEY, tracker.get('clientId'));
			if (typeof ga_client_id === 'undefined') {
				ga_client_id = tracker.get('clientId'); 
				ga('set', 'userId', ga_client_id);
			}
		});