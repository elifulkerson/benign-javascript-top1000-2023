function chgFollowallList(){
                    var ul = document.getElementById("userlist").getElementsByTagName("ul");
                    for (var i=0; i < ul.length; i++){
                        ul[i].style.display = ul[i].style.display == "block" ? "none" : "block";
                    };
                }