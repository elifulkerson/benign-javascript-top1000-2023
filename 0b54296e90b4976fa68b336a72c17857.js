var refreshed_onDemand6 = false;

		
		var TopLeft_pos_onDemand6 = getElementTopLeft("onDemand6");
		
		var pos_onDemand6= TopLeft_pos_onDemand6.top;
		
	
      var adAlmostVisibleScrollValueTop_onDemand6 = pos_onDemand6 - 100;
      
	  console.log('onDemand6 must be viewd after : '+adAlmostVisibleScrollValueTop_onDemand6);
	  
      var listener_onDemand6 = function() {
        if (window.scrollY >= adAlmostVisibleScrollValueTop_onDemand6 && !refreshed_onDemand6) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([onDemand6]);
			
			// googletag.display('onDemand6');
			
			console.log('onDemand6 viewd at : '+window.scrollY);
          });
          refreshed_onDemand6 = true;

          window.removeEventListener('scroll', listener_onDemand6);
        }
      }
      window.addEventListener('scroll', listener_onDemand6);