function readCookieFooter(e) {
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