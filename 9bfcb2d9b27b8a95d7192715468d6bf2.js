$(document).ready(function() {
      var timer1 = show_time_difdate('1697431500810');
      //console.log(timer1);
      if(timer1 != false)
      {
        if(timer1 == "Just now"){
          $(".daysago30878991293").addClass("mpp-red");
        }
        $(".daysago30878991293").html(timer1);
      }
    });