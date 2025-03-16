var refreshed_onDemand1 = false;

		var TopLeft_pos_onDemand1 = getElementTopLeft("onDemand1");
		
		var pos_onDemand1= TopLeft_pos_onDemand1.top;
	
      var adAlmostVisibleScrollValueTop_onDemand1 = pos_onDemand1 - 700;
      
	  console.log('onDemand1 must be viewd after : '+adAlmostVisibleScrollValueTop_onDemand1);
	  
      var listener_onDemand1 = function() {
        if (window.scrollY >= adAlmostVisibleScrollValueTop_onDemand1 && !refreshed_onDemand1) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([onDemand1]);
			
			// googletag.display('onDemand1');
			
			console.log('onDemand1 viewd at : '+window.scrollY);
          });
          refreshed_onDemand1 = true;

          window.removeEventListener('scroll', listener_onDemand1);
        }
      }
      window.addEventListener('scroll', listener_onDemand1);