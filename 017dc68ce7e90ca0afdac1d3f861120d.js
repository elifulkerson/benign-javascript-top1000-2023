$(document).ready(function() {
      var timer1 = show_time_difdate('1697342400397');
      //console.log(timer1);
      if(timer1 != false)
      {
        if(timer1 == "Just now"){
          $(".daysago84298986092").addClass("mpp-red");
        }
        $(".daysago84298986092").html(timer1);
      }
    });