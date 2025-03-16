jQuery(document).ready(function($){
if( typeof BH_AlkasooD === 'function' ) {
BH_AlkasooD($);
}
});

if ('1' != Cookies.get('ckNOMOBILE')) {
headertomobile(navigator.userAgent||navigator.vendor||window.opera,'https://m.gamer.com.tw');
}

if (location.href.match(/^https?:\/\/gamer\.com\.tw/)) {
location.replace("https://www.gamer.com.tw/");
}

if (Cookies.get('ckForumDarkTheme') == 'yes') {
$('html').attr('data-theme', 'dark');

jQuery('<link>').attr({
'rel': 'stylesheet',
'type': 'text/css',
'href': 'https://i2.bahamut.com.tw/css/basic_dark.css'
}).insertAfter('link:last');
}jQuery('<link>').attr({
'rel': 'stylesheet',
'type': 'text/css',
'href': 'https://i2.bahamut.com.tw/css/index_festival.css?v=1695369026'
}).insertAfter('link:last');