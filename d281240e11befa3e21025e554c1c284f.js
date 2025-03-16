var refreshed_onDemand5 = false;

		
		var TopLeft_pos_onDemand5 = getElementTopLeft("onDemand5");
		
		var pos_onDemand5= TopLeft_pos_onDemand5.top;
		
	
      var adAlmostVisibleScrollValueTop_onDemand5 = pos_onDemand5 - 400;
      
	  console.log('onDemand5 must be viewd after : '+adAlmostVisibleScrollValueTop_onDemand5);
	  
      var listener_onDemand5 = function() {
        if (window.scrollY >= adAlmostVisibleScrollValueTop_onDemand5 && !refreshed_onDemand5) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([onDemand5]);
			
			// googletag.display('onDemand5');
			
			console.log('onDemand5 viewd at : '+window.scrollY);
          });
          refreshed_onDemand5 = true;

          window.removeEventListener('scroll', listener_onDemand5);
        }
      }
      window.addEventListener('scroll', listener_onDemand5);