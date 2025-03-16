$(document).ready(function() {
      var timer1 = show_time_difdate('1697430180000');
      //console.log(timer1);
      if(timer1 != false)
      {
        if(timer1 == "Just now"){
          $(".daysago30878988989").addClass("mpp-red");
        }
        $(".daysago30878988989").html(timer1);
      }
    });