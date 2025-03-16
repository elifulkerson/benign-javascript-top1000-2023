/* analytics functions start */
		var KEY = "A18ID", DAYS = "730";
		function _htCreate(name,value,days) {
			var expires = "";
			if (days) {
				var date = new Date();
				date.setTime(date.getTime() + (days*24*60*60*1000));
				expires = "; expires=" + date.toUTCString();
			}
			document.cookie = name + "=" + value + expires + "; path=/";
		}
		function _htGet(name) {
			var nameEQ = name + "=";
			var ca = document.cookie.split(";");
			for(var i=0;i < ca.length;i++) {
				var c = ca[i];
				while (c.charAt(0)==" ") c = c.substring(1,c.length);
				if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
			}
			return null;
		}
		function _htDel(name) { _htCreate(name,"",-1); }
		function getId() { return Date.now() + "." + Math.round(Math.random() * 1000000); }
		function create_dim_cookie(){
			ID = _htGet(KEY);
			if(null == ID || "" == ID) {
				ID = getId();
				_htCreate(KEY, ID, DAYS);
			}
		}
	/* end analytics functions */

	function getCookie(cname) {
		var name = cname + "=";
		var ca = document.cookie.split(';');
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') { c = c.substring(1); }
			if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
		}
		return "";
	}
	create_dim_cookie();

	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	ga( 'create', 'UA-156703-1', 'moneycontrol.com' );
	ga( 'require', 'GTM-PGHT597' );

	var GA_USER_ID = getCookie( "UIDHASH" );
	ga( 'set', 'userId', GA_USER_ID ); /* Set the user ID using signed-in user_id. */
	ga( 'set', 'dimension3', GA_USER_ID );

	var A18ID = getCookie( "A18ID" );
	ga( 'set', 'dimension4', A18ID );

	var mcpro = getCookie( "mcpro" );
	ga( 'set', 'dimension38', mcpro );

	if( typeof window._taboola === 'object' ) {
		ga( 'set', 'dimension42', 'Taboola Yes' );
	} else {
		ga( 'set', 'dimension42', 'Taboola No' );
	}

	/* GA Custom Dimension for logged-in / Non Logged-in User -> Start */
		var user_token_normal = getCookie( "token-normal" );
		var login_user = '0';
		if( user_token_normal != '' ) { login_user = '1'; }
		ga( 'set', 'dimension43', login_user );
	/* End <- GA Custom Dimension for logged-in / Non Logged-in User */

	ga( 'send', 'pageview' );

	function urchinTracker(pa_str) {ga(['_trackPageview', ''+pa_str+'']);}
	function GAEventTracker(category,action,opt_label) {ga('send', 'event', ''+category+'', ''+action+'', ''+opt_label+'');}