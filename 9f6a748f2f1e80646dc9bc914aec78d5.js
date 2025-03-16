var refreshed_onDemand2 = false;

		var TopLeft_pos_onDemand2 = getElementTopLeft("onDemand2");
		
		var pos_onDemand2= TopLeft_pos_onDemand2.top;
	
      var adAlmostVisibleScrollValueTop_onDemand2 = pos_onDemand2  - 500;
      
	  console.log('onDemand2 must be viewd after : '+adAlmostVisibleScrollValueTop_onDemand2);
	  
      var listener_onDemand2 = function() {
        if (window.scrollY >= adAlmostVisibleScrollValueTop_onDemand2 && !refreshed_onDemand2) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([onDemand2]);
			
			// googletag.display('onDemand2');
			
			console.log('onDemand2 viewd at : '+window.scrollY);
          });
          refreshed_onDemand2 = true;

          window.removeEventListener('scroll', listener_onDemand2);
        }
      }
      window.addEventListener('scroll', listener_onDemand2);