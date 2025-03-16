var http_buses = new XMLHttpRequest();
                            var buses_url = site_base+"ajax_home_flight.php";
                            var buses_params = "act=get_buses_data";
                            
                            http_buses.open("POST", buses_url, true);
                            http_buses.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            
                            http_buses.onreadystatechange = function() 
                            {	
                                if(http_buses.readyState == 4 && http_buses.status == 200) 
                                {
                                    var get_buses_data = http_buses.responseText;
                                    
                                    
                                    if(document.getElementById("buses_box_wrap"))
                                    {
                                        document.getElementById("buses_box_wrap").innerHTML = get_buses_data;
                                    }
                                    
                                }
                            }
                        http_buses.send(buses_params);