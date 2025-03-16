var g_UA = new MfcUserAgent();
window.onorientationchange = g_UA.DeviceOrientation;

if( bPopup ) { MobileDevice_CloseWindowOption(); }
document.onreadystatechange = ResizeWindow;

// dependant child popup
if( ! g_ExternalCaller && bPopup && t.name == 'top_level' )
{
	AssertTop();
}

if( typeof(g) != 'object' ) { g = new MfcGraphics(); }

var g_nApplyStyle_Tries=0;
var g_nApplyStyle_Timer = setInterval( function(){
	if( typeof(ApplyStyle)=='function' && ApplyStyle() ) { clearTimeout(g_nApplyStyle_Timer); }
	if( g_nApplyStyle_Tries++ > 20 ) { clearTimeout(g_nApplyStyle_Timer); }
},50);