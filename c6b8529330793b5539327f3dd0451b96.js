document.domain = "rediff.com";
var glb_script_load = 0;var glb_citymapped = 0;
var endyear = "2023";var loggedin ="";var totalfeaturedpages ="9";var totsmartTrnd ="7";var totsmartBest = "0";
var pages_domain ="http://pages.rediff.com";
var cdn_domain = "https://www.rediff.com";var org_domain = "http://mypage.rediff.com";var ishare_domain = "https://ishare.rediff.com";var shopping_domain ="https://shopping.rediff.com";var books_domain ="http://books.rediff.com";var track_domain ="https://track.rediff.com";var money_domain ="https://money.rediff.com";var realtime_domain ="https://realtime.rediff.com";var share_domain ="http://share.rediff.com";var imgpath ="//imworld.rediff.com/worldrediff/pix";
var srch_tab_sel = "shopping"; //used in sns
var srch_tab_num = 0; //used in sns

function trackURL(url){
	var tmpurl = url.split("___");
	if(tmpurl[1]){url = decodeURIComponent(tmpurl[1]);}
	if(navigator.userAgent.toLowerCase().indexOf('msie') != -1){var referLink = document.createElement('a');referLink.href = url;document.body.appendChild(referLink);referLink.click();}else{document.location.href = url;}
}
function getCookie(name){var dc=document.cookie;var prefix=name+"=";var begin=dc.indexOf("; "+prefix);if(begin==-1){begin=dc.indexOf(prefix);if(begin!=0)return null}else begin+=2;var end=document.cookie.indexOf(";",begin);if(end==-1)end=dc.length;return unescape(dc.substring(begin+prefix.length,end))}