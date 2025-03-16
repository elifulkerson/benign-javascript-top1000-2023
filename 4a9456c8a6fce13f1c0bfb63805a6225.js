var refreshed_Side3 = false;

		var pos_Side3 = document.getElementById("Side3").getBoundingClientRect().top;
	
      var adAlmostVisibleScrollValueTop_Side3 = pos_Side3 - 100;
      
	  //console.log('Side3 must be viewd after : '+adAlmostVisibleScrollValueTop_Side3);
	  
      var listener_Side3 = function() {
        if (window.pageYOffset >= adAlmostVisibleScrollValueTop_Side3 && !refreshed_Side3) {
          googletag.cmd.push(function() {
            googletag.pubads().refresh([Side3]);
			
			// googletag.display('Side3');
			
			//console.log('Side3 viewd at : '+window.pageYOffset);
          });
          refreshed_Side3 = true;

          window.removeEventListener('scroll', listener_Side3);
        }
      }
      window.addEventListener('scroll', listener_Side3);