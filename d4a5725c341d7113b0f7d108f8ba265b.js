if(window.location.hostname.indexOf("wwws") > -1){
     	var link=document.createElement('meta');
  		link.name="robots";
  		link.content="noindex";
  		var metaTags = document.getElementsByTagName('meta').length;
  		var headTag = document.getElementsByTagName('head')[0];
  		headTag.insertBefore(link, document.getElementsByTagName('meta')[metaTags-1].nextSibling);
  }