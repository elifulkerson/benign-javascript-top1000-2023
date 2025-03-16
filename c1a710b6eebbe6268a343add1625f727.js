var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-23987051-2']);
		  _gaq.push(['_setDomainName', '.olx.ua']);
		  _gaq.push(['_addOrganic', 'go.mail.ru', 'q']);
		  _gaq.push(['_addOrganic', 'search.ukr.net', 'q']);
		  _gaq.push(['_addOrganic', 'search.ukr.net', 'search_query']);
		  _gaq.push(['_addOrganic', 'meta.ua', 'q']);
		  _gaq.push(['_addOrganic', 'nigma.ru', 's']);
		  _gaq.push(['_addOrganic', 'search.qip.ru', 'query']);
		  _gaq.push(['_addOrganic', 'search.livetool.ru', 'text']);
		  _gaq.push(['_addOrganic', 'bpes.com.ua', 'q']);
		  _gaq.push(['_addOrganic', 'webalta.ru', 'q']);
		  _gaq.push(['_addOrganic', 'search.i.ua', 'q']);
		  _gaq.push(['_addOrganic', 'search.icq.com', 'q']);
		  _gaq.push(['_trackPageview']);
		  
		  if(typeof gaTransaction != 'undefined' && typeof gaTransactionItem != 'undefined') {
			  _gaq.push(gaTransaction);
			  _gaq.push(gaTransactionItem);
			  _gaq.push(['_trackTrans']); //submits transaction to the Analytics servers
		  }
		
		 (function(){
		  var ga, s;
		  if ( !_adblock ) {
			  ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			  ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
			  s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  } else {
			  ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
			  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www')+ '.google-analytics.com/ga.js';
			  s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  }})();