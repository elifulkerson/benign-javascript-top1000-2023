FlexiLoader={loadJS:function(e,t){var n,r,a;r=!1,(n=document.createElement("script")).type="text/javascript",n.src=e,n.async=!0,n.onload=n.onreadystatechange=function(){r||this.readyState&&"complete"!==this.readyState||(r=!0,t())},(a=document.getElementsByTagName("script")[0]).parentNode.insertBefore(n,a)},execRequires:function(){this.requires.forEach(function(e,t,n){try{e()}catch(e){console.log("error",e)}}),this.requires=[]},execRequiresOnDomReady:function(){document.addEventListener("readystatechange",function(){["interactive","complete"].indexOf(document.readyState)>=0&&FlexiLoader.execRequires()},!1)},push:function(e){["interactive","complete"].indexOf(document.readyState)>=0?e():this.requires.push(e)},requires:window.FlexiLoaderRequires||[]};
FlexiLoader.loadJS('//vanilla.futurecdn.net/techradar/791504/media/shared/js/flexi.js', function () {
Flexi.globals = {
"environment": "live",
"endpoints": null };
FlexiLoader.execRequiresOnDomReady();
});