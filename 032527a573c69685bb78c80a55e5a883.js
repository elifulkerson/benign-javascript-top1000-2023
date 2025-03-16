var http_flight = new XMLHttpRequest();
                            var flight_url = site_base+"ajax_home_flight.php";
                            var flight_params = "act=get_flight_data";
                            
                            http_flight.open("POST", flight_url, true);
                            http_flight.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            
                            http_flight.onreadystatechange = function() 
                            {	
                                if(http_flight.readyState == 4 && http_flight.status == 200) 
                                {
                                    var get_flight_data = http_flight.responseText;
                                    
                                    
                                    if(document.getElementById("airports_box_wrap"))
                                    {
                                        document.getElementById("airports_box_wrap").innerHTML = get_flight_data;
                                    }
                                    
                                }
                            }
                        http_flight.send(flight_params);