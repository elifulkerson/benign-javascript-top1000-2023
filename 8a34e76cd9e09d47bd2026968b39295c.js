function requestBids(){
			if(typeof window.PWT !== "undefined" && typeof PWT.requestBids === 'function'){
			    console.log('ddd')
				PWT.requestBids(
					PWT.generateConfForGPT(googletag.pubads().getSlots()),
					function(adUnitsArray) {
					console.log(adUnitsArray,'adUnitsArray')	
						PWT.addKeyValuePairsToGPTSlots(adUnitsArray);
						PWT.ow_BidsReceived = true;
						window.initAdserver(true);
					}
				);
			}
}