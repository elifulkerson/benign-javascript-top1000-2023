if(document.getElementById("desk_side_first"))
	{
		var TopLeft_pos_dside1 = getElementTopLeft("desk_side_first");
		
		var pos_dside1= TopLeft_pos_dside1.top;
		
		//var pos_dside1 = document.getElementById("desk_side_first").getBoundingClientRect().top;
		
		//console.log('pos_dside1 : '+pos_dside1);
		
		pos_dside1 = pos_dside1;
		pos_dside1_max = pos_dside1 + 1600;

		var listener_dside1 = function() {
			
			//console.log('scrolly : '+window.pageYOffset);

			if (window.pageYOffset >= pos_dside1 && window.pageYOffset < pos_dside1_max) 
			{
				document.getElementById("desk_side_first").className = "stick_pos";
			}
			else
			{
				if(document.getElementById("desk_side_first").className == 'stick_pos') 
				{
					document.getElementById("desk_side_first").className = "";
				}
			}
		}
		window.addEventListener('scroll', listener_dside1);
	}