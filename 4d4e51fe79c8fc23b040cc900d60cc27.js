var http_train = new XMLHttpRequest();
                            var train_url = site_base+"ajax_home_flight.php";
                            var train_params = "act=get_train_data";
                            
                            http_train.open("POST", train_url, true);
                            http_train.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                            
                            http_train.onreadystatechange = function() 
                            {	
                                if(http_train.readyState == 4 && http_train.status == 200) 
                                {
                                    var get_train_data = http_train.responseText;
                                    
                                    
                                    if(document.getElementById("trains_box_wrap"))
                                    {
                                        document.getElementById("trains_box_wrap").innerHTML = get_train_data;
                                    }
                                    
                                }
                            }
                        http_train.send(train_params);