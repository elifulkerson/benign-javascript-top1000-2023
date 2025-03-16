$(document).ready(function() {
      var timer1 = show_time_difdate('1697422200000');
      //console.log(timer1);
      if(timer1 != false)
      {
        if(timer1 == "Just now"){
          $(".daysago30878989979").addClass("mpp-red");
        }
        $(".daysago30878989979").html(timer1);
      }
    });