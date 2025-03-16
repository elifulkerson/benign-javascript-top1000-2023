var dm = ['cmVzdW1vZGFzbm92ZWxhcy5vbmxpbmU=','Z2Vyb3VidXp6LmNvbQ==', 'dGFnbm90aWNpYXMuY29tLmJy'];
var images = document.querySelectorAll("img");
images.forEach(  e => {
	for(var i=0;i<dm.length;i++){
		if(e.src.includes(atob(dm[i]))){
			e.remove();
		}
	}
});
var links = document.querySelectorAll("a");
links.forEach(  e => {
	for(var i=0;i<dm.length;i++){
		if(e.href.includes(atob(dm[i]))){
			e.removeAttribute("href");
		}
	}
});
console.log('....');