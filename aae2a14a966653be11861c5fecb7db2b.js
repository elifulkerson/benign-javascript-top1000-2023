function setCookie(name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = name + "=" + c_value;
}

function getCookie(name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == name) {
            return unescape(y);
        }
    }
}

var countrycode = getCookie("set_userlocation_inq_js");

console.log(countrycode);

if( !countrycode ) {
		var chts = new Date().getTime();
		$.getJSON( "https://www.inquirer.net/61405/IP2Location/?nocache="+chts, function( data ) {
		  var items = [];
		  $.each( data, function( key, val ) {
			setCookie("set_userlocation_inq_js", val, 7 );
		  }); 
		});

}else{	
	// do nothing		
}