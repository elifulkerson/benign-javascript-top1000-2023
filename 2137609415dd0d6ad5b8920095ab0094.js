$(document).ready(function() {
      var timer1 = show_time_difdate('1697430587152');
      //console.log(timer1);
      if(timer1 != false)
      {
        if(timer1 == "Just now"){
          $(".daysago30878991318").addClass("mpp-red");
        }
        $(".daysago30878991318").html(timer1);
      }
    });