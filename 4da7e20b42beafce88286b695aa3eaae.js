//ELECTION COUNT DOWN


        function makeTimer() { 



            $('.counter').each(function( index ) {
               var Dday= $('.counter')[index].getAttribute('data-date');
                var endTime = new Date(Dday);          
                endTime = (Date.parse(endTime) / 1000);
                var now = new Date();
                now = (Date.parse(now) / 1000);
                var timeLeft = endTime - now;
                var days = Math.floor(timeLeft / 86400); 
                var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
                var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
                var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));
                if (hours < "10") { hours = "0" + hours; }
                if (minutes < "10") { minutes = "0" + minutes; }
                if (seconds < "10") { seconds = "0" + seconds; }
                $(".day")[index].innerHTML=days + "<span> Days</span>";
                $(".hour")[index].innerHTML=hours + "<span> Hrs</span>";
                $(".min")[index].innerHTML=minutes + "<span> Mins</span>";
                $(".sec")[index].innerHTML=seconds + "<span> Secs</span>";   
             
            });



                
        }

    setInterval(function() { makeTimer(); }, 1000);