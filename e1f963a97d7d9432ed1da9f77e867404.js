$(document).ready(function() {
                        var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
                        var daysInWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                        var currentTime = new Date();
                        var currentOffset = currentTime.getTimezoneOffset();
                        var ISTOffset = 330;   // IST offset UTC +5:30
                        var d = new Date(currentTime.getTime() + (ISTOffset + currentOffset) * 60000);
                        $("span.systemdate_site").html(daysInWeek[d.getDay()] + ", " + d.getDate() + " " + monthNames[d.getMonth()] + " " + d.getFullYear())
                    });