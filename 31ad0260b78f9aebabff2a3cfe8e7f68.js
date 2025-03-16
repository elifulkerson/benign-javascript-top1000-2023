function initAdserver(forced){	
			googletag.cmd.push(function () {
				console.log('PWT',forced,'window.initAdserverFlag',window.initAdserverFlag,'PWT.ow_BidsReceived',PWT.ow_BidsReceived)
				if((forced === true && window.initAdserverFlag !== true) || (PWT.TAM_BidsReceived && PWT.ow_BidsReceived)){
					window.initAdserverFlag = true;
					console.log('PWT',2)
					PWT.TAM_BidsReceived = PWT.ow_BidsReceived = false;
					googletag.pubads().refresh();
				}   
				
			});
		
	}