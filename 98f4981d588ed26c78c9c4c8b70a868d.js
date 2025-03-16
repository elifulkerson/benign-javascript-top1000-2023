function listenerPopupSemalt(event){
	if(event.origin == "https://semalt.com"){} else return;
	if(event.data){
		if(event.data == 'closePopupStartWow'){	$('#popupStartWow').hide();
			var date = new Date();
			date.setTime(date.getTime() + (60 * 60 * 1000)); //60 минут
			$.cookie('closePopupStartWow', 1, { expires: date, path:'/',domain:'.'+location.hostname });
		}
		else if(event.data.indexOf('startPopupStartWow')>-1){
			try{var res = JSON.parse(event.data);
				if(res && res.page){location.href = 'https://semalt.com/?s='+decodeURIComponent(res.page)+'&ref=Newtraf';}
			}catch(ee){}
			$.cookie('closePopupStartWow', 1, { expires: date, path:'/',domain:'.'+location.hostname });
		}
	}
}
if (window.addEventListener){window.addEventListener("message", listenerPopupSemalt,false);}
else {window.attachEvent("onmessage", listenerPopupSemalt);}
setTimeout(function(){
	if($.cookie && $.cookie('closePopupStartWow')){}
	else{
		$('#popupStartWow').attr('src','https://semalt.com/popups/popup_wow.php?lang=en');
		setTimeout(function(){ $('#popupStartWow').show(); },400);
	}
},400);