$(document).ready(function() {
      $(window).scroll(function() {
        var cHeight = $("#myanimelist").height();
        $("div[data-ad-sticky='manual']").each(function (i, o) {
          var aHeight = $(o).height();
          var aTop = $(o).parent().offset().top;
          if (window.pageYOffset >= (cHeight - aHeight)) {
            $(o).css("top", ((cHeight - aHeight) - window.pageYOffset) + "px");
          } else if (window.pageYOffset >= aTop) {
            $(o).addClass("sticky");
            $(o).css("top", "");
          } else {
            $(o).removeClass("sticky");
          }
        });
      });
    });