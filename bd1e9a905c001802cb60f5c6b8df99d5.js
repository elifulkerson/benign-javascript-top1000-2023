$(document).ready(function() {
      var timer1 = show_time_difdate('1697429820283');
      //console.log(timer1);
      if(timer1 != false)
      {
        if(timer1 == "Just now"){
          $(".daysago30878991288").addClass("mpp-red");
        }
        $(".daysago30878991288").html(timer1);
      }
    });