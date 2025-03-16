function show_time_difdate(timeT1) {
            date = timeT1;
            var currentTime = new Date();
            /*var currentOffset = currentTime.getTimezoneOffset();
            var ISTOffset = 330;   // IST offset UTC +5:30
            var ISTTime =  new Date(currentTime.getTime() + (ISTOffset + currentOffset)*60000 );
            //var ISTTime1 = + new Date("03 17 2022 10:55:49 GMT+0530 (India Standard Time)");
            var ISTTime1 = + new Date(("0" + (ISTTime.getMonth() + 1)).slice(-2)+" "+ ("0"+ISTTime.getDate()).slice(-2)+" "+ ISTTime.getFullYear()+" "+ ("0" + ISTTime.getHours()).slice(-2)+":"+("0" + ISTTime.getMinutes()).slice(-2)+":00 GMT+0530 (India Standard Time)");*/
            var seconds = Math.floor(( currentTime - date) / 1000);
            var interval = Math.floor(seconds / (60*60*24*365));
            if (interval == 1) { /*return interval + " year ago"; */ return false } else if (interval > 1) { return false  }
            interval = Math.floor(seconds / (60*60*24*30));
            if (interval == 1) { /*return interval + " month ago"; */ return false } else if (interval > 1) { return false }
            interval = Math.floor(seconds / (60*60*24*7));
            if (interval == 1) { /*return interval + " week ago";*/ return false } else if (interval > 1) { return false   }
            interval = Math.floor(seconds / (60*60*24));
            if (interval == 1) { /* return interval + " day ago"; */ return false } else if (interval > 1) { /* return interval + " days ago"; */ return false }
            interval = Math.floor(seconds / 3600);
            if (interval == 1) { return interval + " hr ago"; } else if (interval > 1) { return interval + " hrs ago"; }
            interval = Math.floor(seconds / 60);
            if (interval > 5) { return interval + " min ago"; } else{ return "Just now"}
            return false;
        }