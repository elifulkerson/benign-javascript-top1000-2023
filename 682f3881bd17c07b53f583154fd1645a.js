var http_dp = new XMLHttpRequest();
						var dp_url = site_base+"ajax_home_flight.php";
						var dp_params = "act=get_daily_price_data";
						
						http_dp.open("POST", dp_url, true);
						http_dp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
						
						http_dp.onreadystatechange = function() 
						{	
							if(http_dp.readyState == 4 && http_dp.status == 200) 
							{
								var get_dp_data = http_dp.responseText;
								
								
								if(document.getElementById("daily_price_box_wrap"))
								{
									document.getElementById("daily_price_box_wrap").innerHTML = get_dp_data;
								}
								
							}
						}
					http_dp.send(dp_params);