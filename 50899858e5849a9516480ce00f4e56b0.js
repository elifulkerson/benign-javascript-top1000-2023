function handlePushNews(event){
	document.removeEventListener('scroll', handlePushNews);

	var t=document.createElement("script");
	t.type="text/javascript";
  //t.src="https://cdn.pn.vg/sites/37f77b04-2931-461c-bd78-536a0a68bc20.js";
  t.src="https://cdn.pn.vg/push/pushnews-launcher.js?appId=37f77b04-2931-461c-bd78-536a0a68bc20";
	document.getElementsByTagName("body")[0].prepend(t);

	console.log('XHD push int novo 5...');
	
}
document.addEventListener('scroll', handlePushNews);

//console.log('Push Original2...');