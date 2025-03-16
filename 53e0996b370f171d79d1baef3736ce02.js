$(document).ready(function() {
      var timer1 = show_time_difdate('1697354488970');
      //console.log(timer1);
      if(timer1 != false)
      {
        if(timer1 == "Just now"){
          $(".daysago30878988818").addClass("mpp-red");
        }
        $(".daysago30878988818").html(timer1);
      }
    });