var Id = document.getElementById;
var g_bCloseWindow = 0;
var d = document;
var t = window;
var p = parent;

var bPopup = document.bPopup = false;
//if( opener && window.name != 'top_level' )
// ensure that the popup parent it the www client and not something else

try {
	if( opener && opener.t && opener.t.name == 'top_level' && window.name != 'top_level' )
	{
		p = opener;
		bPopup = document.bPopup = true;
	}
}
catch(e){ console.log(e); }

try
{	
	if( ! g_ExternalCaller )
	{	
		if( p.t && p.t.name == 'top_level' )
		{	
			t = p.t;
		}
		else if( top && top.document && top.document.name == 'top_level' )
		{
			t = top;
		}
	}

	if( typeof(t.g_hPlatform) != 'object' && p && typeof(p.g_hPlatform) == 'object' )
	{
		t.g_hPlatform = p.g_hPlatform;
	}
}
catch(e){ console.log(e); }


var docWriteLibs = function(opts)
{
	opts = opts || {};
	if( ! window.g_mfccore_loaded && ! window.g_bLibFileDebug )
		document.write('\x3Cscr'+'ipt src="' + ( opts.host || ''  ) + '/_js/mfccore.js?vcc=' + g_nVcc + '">\x3C/scr'+'ipt>');

	var aStyleSheets = [
		"/css/style.css",
		"/css/videojs.css",
		"/css/videoplayer.css",
		"/css/videopublisher.css",
		( "/css/" + g_hPlatform.code + "_style.css" ),
		"/_css/mfc_less.css"
	];

	var s = decodeURIComponent(window.location.search.replace(new RegExp("^(?:.*[&\\?]" + encodeURIComponent('style').replace(/[\.\+\*]/g, "\\$&") + "(?:\\=([^&]*))?)?.*$", "i"), "$1"));

	if ( s === 'app')
	{
		aStyleSheets.push("https://app.myfreecams.com/static/mfc.app.css");
		document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">');
	}
	else if ( s === 'mobile' )
	{
		aStyleSheets.push("/css/mfc_mobile_style.css");
		document.write('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover">');
	}

	for( var a=0; a < aStyleSheets.length; a++ )
	{
		var h = opts.host || '';
		var ss = aStyleSheets[a];
		var f = ( ss.indexOf("//") > -1 ) ? ss : h + ss;
		document.write('<LINK crossorigin="anonymous" REL=StyleSheet HREF="' + f + '?no_cache='
			+ g_nVcc + ( window.t && t.NightMode && t.NightMode.enabled ? Math.random() : '' ) // nightmode in parent breaks if child CSS is called from cache
			+ '" TYPE="text/css" MEDIA=screen>');
	}

}

var sCdnHost;
if( t && t.location.search.indexOf('use_cdn') > -1 ) {
	sCdnHost = g_sCdnHost;
}
else if( ( t && t.location.search.indexOf('no_cdn') > -1 ) || window.g_bLibFileDebug ) {
	sCdnHost='';
}
else if( g_sCdnHost != '' ) {
	sCdnHost = '//assets.' + g_hPlatform.domain;
}
else {
	sCdnHost = g_sCdnHost;
}

docWriteLibs({ host: sCdnHost });

function PostLoad( hOpts )
{
	hOpts = hOpts || {};
	if( PostLoad.runOnce && ! hOpts.followup ) { return; }

	PostLoad.runOnce = true;

	if( document.body )
	{
		if( location.search.indexOf('dhtml_window=1') > -1 ) { document.body.classList.add('dhtml_window'); }
		if( NightMode && NightMode.Load ) { NightMode.Load(); }

		if( opener && opener.t && opener.t.g_hLegalNotice && opener.t.g_hLegalNotice.footer )
		{
			setTimeout( () => {
				document.body.innerHTML += "<div style='font-size:17pt;color:#BBB;padding:50px 50px 50px 50px;'>" + opener.t.g_hLegalNotice.footer.replace(/\n/g,'<br><br>') + "</div>";
				document.body.style.overflow = 'scroll';
			},1000);
		}
	}
	else
	{
		var nWaitTime = PostLoad.counter * 25;
		if( PostLoad.counter < 50 )
		{
			clearTimeout( window.PostLoad_runOnce_timer );
			window.PostLoad_runOnce_timer = setTimeout(function(){ PostLoad({ 'followup': true }) },nWaitTime);
		}
		//console.log('PostLoad() retry in ' + nWaitTime );
		PostLoad.counter++;
	}
};
PostLoad.counter=0;
PostLoad();