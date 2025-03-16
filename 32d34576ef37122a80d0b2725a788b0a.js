$(function(){
        $("#notif-20d-close").click(function() {
            $("#notif-20d").remove();
            $(".float-vid__box .float-vid__content").removeAttr("style");
            return false;
        });
      });