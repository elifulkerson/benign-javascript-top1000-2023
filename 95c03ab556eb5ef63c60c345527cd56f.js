if(window.performance){
		var googletag = googletag || {};
		googletag.cmd = googletag.cmd || [];
		googletag.cmd.push(function () {
			googletag.pubads().addEventListener('slotRenderEnded', function (event) {
				try{
						var slt = event.slot.getSlotElementId();
						if(slt === 'adwallpaper'){
							var time = Date.now() - window.performance.timing.fetchStart;
							var u ="https://evnt.iol.it/v2?&pgnf=wwwtest.libero.it%2Chp%2C%2C%2C%2C0%2C1192%2C0%2C%2CB%2C0%2C%2Cadv_wallpaper%2C"+time+"&nc="+Date.now();
							var i = new Image();
							i.src = u;
						}
				}catch(er){};			
			});
		});
	}