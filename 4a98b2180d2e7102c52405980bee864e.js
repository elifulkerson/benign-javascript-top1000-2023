var refreshed_onDemand3 = false;
	
		var TopLeft_pos_onDemand3 = getElementTopLeft("onDemand3");
		
		var pos_onDemand3= TopLeft_pos_onDemand3.top;
	
      var adAlmostVisibleScrollValueTop_onDemand3 = pos_onDemand3 - 500;
      
	  console.log('onDemand3 must be viewd after : '+adAlmostVisibleScrollValueTop_onDemand3);
	  
      var listener_onDemand3 = function() {
        if (window.scrollY >= adAlmostVisibleScrollValueTop_onDemand3 && !refreshed_onDemand3) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([onDemand3]);
			
			// googletag.display('onDemand3');
			
			console.log('onDemand3 viewd at : '+window.scrollY);
          });
          refreshed_onDemand3 = true;

          window.removeEventListener('scroll', listener_onDemand3);
        }
      }
      window.addEventListener('scroll', listener_onDemand3);