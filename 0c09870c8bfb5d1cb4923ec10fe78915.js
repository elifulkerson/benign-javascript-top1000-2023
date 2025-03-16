$(function() {
      $(".js-notification-update").click(function(e){
          e.preventDefault();
          $(this).parent(".notification-overlay").hide();
          $('#notification_newsfeed').attr('popup-notif','disable');
      });
    });