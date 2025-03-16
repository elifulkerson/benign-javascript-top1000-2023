// var Side3_fresher = false;
	 
    if(document.getElementById("desk_side_last"))
    {
        var pos_desk_screen = window.innerHeight|| document.documentElement.clientHeight|| document.getElementsByTagName('body')[0].clientHeight;
        var pos_desk_side_last = document.getElementById("desk_side_last").getBoundingClientRect().top;
        
        pos_desk_side_last = pos_desk_side_last + pos_desk_screen;

        var listener_desk_last = function() {
			
			/*if(Side3_fresher)
			{
				setInterval(function(){ googletag.pubads().refresh([Side3]);}, 10000);
			}*/
			
			
            if (window.pageYOffset >= pos_desk_side_last) 
            {
				// Refr
				//Side3_fresher = true;
				
                document.getElementById("desk_side_last").className = "last_banner_stick";
            }
            else
            {
				if(document.getElementById("desk_side_last").className == 'last_banner_stick') 
				{
					document.getElementById("desk_side_last").className = "";
				}
            }
        }
        window.addEventListener('scroll', listener_desk_last);
    }