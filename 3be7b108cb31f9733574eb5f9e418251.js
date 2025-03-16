$(document).ready(function() {
      var timer1 = show_time_difdate('1697401800000');
      //console.log(timer1);
      if(timer1 != false)
      {
        if(timer1 == "Just now"){
          $(".daysago30878990640").addClass("mpp-red");
        }
        $(".daysago30878990640").html(timer1);
      }
    });