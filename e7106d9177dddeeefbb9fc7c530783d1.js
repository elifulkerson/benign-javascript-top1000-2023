function readCookie(e) {
		var t=e+"=";
		var n=document.cookie.split(";");
		for( var r=0; r < n.length; r++ ) {
			var i = n[r];
			while( i.charAt(0) == " " ) {
				i = i.substring( 1, i.length );
			}
			if( i.indexOf(t) == 0 ) {
				return i.substring( t.length, i.length )
			}
		}
		return false;
	}
	function readCookieRevamp(e) {
		var t=e+"=";
		var n=document.cookie.split(";");
		for( var r=0; r < n.length; r++ ) {
			var i = n[r];
			while( i.charAt(0) == " " ) {
				i = i.substring( 1, i.length );
			}
			if( i.indexOf(t) == 0 ) {
				return i.substring( t.length, i.length )
			}
		}
		return false;
	}
	function convertStringToCamelCase( str ) {
		str = str.toLowerCase();	/* Lower cases the string */
		/* str = str.replace(/[-_]+/g, ' ');	/* Replaces any - or _ characters with a space */
		/* str = str.replace(/[^\w\s]/g, '');	/* Removes any non alphanumeric characters */
		str = ' ' + str + ' ';

		return str.split(' ').map(function( item, index ) {
			return index !== 0 
				? item.charAt(0).toUpperCase() + item.substr(1) 
				: item.charAt(0).toLowerCase() + item.substr(1);
		}).join(' ');
	}
	var m_selected = '17';
	var JQ_IS_NEWS_SECTION = 0;

	var matrix_adunit=1;
	var usernnmc = readCookieRevamp("nnmc");

	var IE = document.all?true:false;
	var anychange=0;
	var bak_price_div;
	var matrix=0;
	var cnbc_matrix=0;

		/* Block site in Client IFrame -> Start */
			/* <meta http-equiv="X-Frame-Options" content="deny"> */
			if(top.location != window.location) {
				window.location = 'https://www.moneycontrol.com/mccode/common/iframe_blocker.php';
			}
		/* End <- Block site in Client IFrame */