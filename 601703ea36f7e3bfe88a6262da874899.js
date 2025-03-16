function appURL(){	
	return "https://www.thehindu.com/";
}
function pageType(){	return "sec";
}
function pageTypeName(){	return "Home";}
var DevIdf = {
	isMobile: false,
	isTablet: false,
	isDesktop: false,
	isMobileAndroid: false,
	isMobileIos: false,
	isLargeDesktop: false
};
var ClientdeviceType = {
	"xlarge": "(min-width: 1600px)",
	"large": "(min-width: 1024px) and (max-width: 1599px)",
	"small": "(max-width: 767px)",
	"medium": "(min-width: 768px) and (max-width: 1023px)"
};

var userAgent = navigator.userAgent || navigator.vendor || window.opera;    


function isDeviceEnabled(DeviceValue) {if (DeviceValue == "large" && (DevIdf.isDesktop || DevIdf.isLargeDesktop || DevIdf.isTablet)) {
		return true;
	}else if (DeviceValue == "medium" && DevIdf.isTablet) {
		return true;
	} else if (DeviceValue == "small" && DevIdf.isMobile) {
		return true;
	} else if (DeviceValue == "twa" && (DevIdf.isMobileAndroid || DevIdf.isMobileIos)) {
		return true;	
	}
	else if (DeviceValue == "all") {
		return true;	
	}
	return false;
}
for (var type in ClientdeviceType) {
	if (window.matchMedia(ClientdeviceType[type]).matches) {
		switch (type) {
			case "xlarge":
				DevIdf.isLargeDesktop = true;
				break;
			case "large":
				DevIdf.isDesktop = true;
				break;
			case "medium":
				DevIdf.isTablet = true;
				break;
			case "small":
				DevIdf.isMobile = true;
				if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) ){
					DevIdf.isMobileIos = true;
				}else{
					DevIdf.isMobileAndroid = true;
				}
				break;
		}
		break;
	}
}
function loadScript(url) {
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.src = url;
		var x = document.getElementsByTagName('script')[0];
		x.appendChild(s);
}

function loadCSS(url) {
		var link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = url;
		link.type = 'text/css';
		var el = document.getElementsByTagName('link')[0];
		el.parentNode.insertBefore(link, el);
} 
function getUrlParameter( name, url ) {
if (!url) url = location.href;
name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
var regexS = "[\\?&]"+name+"=([^&#]*)";
var regex = new RegExp(regexS,"i");
var results = regex.exec( url );
return results == null ? null : results[1];
}
function createCookie(name,value,days) { if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; path=/";
}
function eraseCookie(name) {
createCookie(name,"",-1);
}
function readCookie(name) {
var nameEQ = name + "=";
var ca = document.cookie.split(';');
for(var i=0;i < ca.length;i++) {
var c = ca[i];
while (c.charAt(0)==' ') c = c.substring(1,c.length);
if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
}
return null;
}
function deleteCookie(name) {
createCookiewithdomain(name,null,-1);
}
function createCookiewithdomain(name,value,days) {
if (days) {
var date = new Date();
date.setTime(date.getTime()+(days*24*60*60*1000));
var expires = "; expires="+date.toGMTString();
}
else var expires = "";
document.cookie = name+"="+value+expires+"; domain="+document.location.host.match(/\.[.\w]*/)+";path=/";
}
function getStorage(name){	if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {	if (localStorage.getItem(name)){	cookieObj = JSON.parse(localStorage.getItem(name));
if (cookieObj !== undefined && (cookieObj.e == null || cookieObj.e > new Date())){return cookieObj.v === undefined ? null : cookieObj.v ; }	else{localStorage.removeItem(name);}	}
return null;	} else {return readCookie(name);}	}
function setStorage(name,value,days){
if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {
var date = new Date();	localStorage.setItem(name,JSON.stringify({"v":value, "e":date.setTime(date.getTime()+(days*24*60*60*1000))}))
} else {createCookie(name,value,days);}	}
function eraseStorage(name){ if(typeof(Storage) !== "undefined" && 'localStorage' in window && window.localStorage !== null) {localStorage.removeItem(name);}
else{eraseCookie(name)}
}
var isNonSubcribed = true;function isNonSubcribedUser(){return isNonSubcribed;}
var myUserStatus = "anon";function UserCurrentStatus(){return myUserStatus;}var imageSizes = [80, 100, 115, 140, 155 ,170, 215, 230, 240, 300, 320, 355,385, 435, 460, 480,560, 615, 660, 730, 810, 960, 1080, 1140, 1200];function imglazyload(selector){
	var lazyImages = [];
   if(typeof selector !== 'undefined' && selector){
	lazyImages = [].slice.call(document.querySelectorAll(selector +" img.lazy"));
   }
   else{
	lazyImages = [].slice.call(document.querySelectorAll("img.lazy"))
   }

 if ("IntersectionObserver" in window) {
   let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
	 entries.forEach(function(entry) {
	   if (entry.isIntersecting) {
		 let lazyImage = entry.target
		 lazyImageloader(lazyImage);
		 lazyImageObserver.unobserve(lazyImage);
	   }
	 });
   });

   lazyImages.forEach(function(lazyImage) {
	 lazyImageObserver.observe(lazyImage);
   });
 } else {
	lazyImages.forEach(function(lazyImage) {
	 lazyImageloader(lazyImage);
	});
 }
	window.__thgimgloaded = true;
 }
function lazyImageloader(lazyImage){
	let variant = lazyImage.dataset.deviceVariant;
	let imagesrc =  lazyImage.dataset.srcTemplate;
	if(typeof imagesrc !="undefined" && imagesrc != ""){
	if(typeof variant !="undefined" && variant != ""){
	let position = 0;
	if(DevIdf.isDesktop){
	  position = 1;
	}
	else if(DevIdf.isTablet){
		 position = 2;
	}
	else if(DevIdf.isMobile){
		 position = 3;
	}
	variant = variant.split("~")[position];
	var selected = Math.max.apply(null, imageSizes);
	for (var i = 0; i < imageSizes.length; i++) {
	  if (lazyImage.offsetWidth <= imageSizes[i]) {
		selected = imageSizes[i];
		break;
	  }
	}
	 var alterRegEx = new RegExp("alternates\/[a-z0-9_]*", "ig");
	 imagesrc = imagesrc.replace(alterRegEx,"alternates/"+variant + "_" + selected);
	
	 lazyImage.src = imagesrc;
	}
	else{
	  lazyImage.src = imagesrc;
	}
	}
	lazyImage.classList.remove("lazy");
}var promiseResolve, promiseReject;userIdentify = new Promise(function(resolve, reject){promiseResolve = resolve;promiseReject = reject;});var thg={required:!0,functional:!1,advertising:!1,requiredCookie:function(){return thg.required},functionalCookie:function(){return thg.functional},advertisingCookie:function(){return thg.advertising}};thgCookieConsent.then(function(){var constentbehavior=readCookie("notice_behavior"),cookieconsent=readCookie("cmapi_cookie_privacy");null==cookieconsent&&null!=constentbehavior&&-1==constentbehavior.indexOf("eu")?(thg.functional=!0,thg.advertising=!0):null!==cookieconsent?(cookieconsent.indexOf("permit")>-1&&cookieconsent.indexOf("2")>-1&&(thg.functional=!0),cookieconsent.indexOf("permit")>-1&&cookieconsent.indexOf("3")>-1&&(thg.advertising=!0)):null==constentbehavior&&(thg.functional=!0,thg.advertising=!0);});