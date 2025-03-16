var refreshed_onDemand4 = false;
	  
	  var TopLeft_pos_onDemand4 = getElementTopLeft("onDemand4");
		
		var pos_onDemand4= TopLeft_pos_onDemand4.top;
		
	
      var adAlmostVisibleScrollValueTop_onDemand4 = pos_onDemand4 - 400;
      
	  console.log('onDemand4 must be viewd after : '+adAlmostVisibleScrollValueTop_onDemand4);
	  
      var listener_onDemand4 = function() {
        if (window.scrollY >= adAlmostVisibleScrollValueTop_onDemand4 && !refreshed_onDemand4) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([onDemand4]);
			
			// googletag.display('onDemand4');
			
			console.log('onDemand4 viewd at : '+window.scrollY);
          });
          refreshed_onDemand4 = true;

          window.removeEventListener('scroll', listener_onDemand4);
        }
      }
      window.addEventListener('scroll', listener_onDemand4);