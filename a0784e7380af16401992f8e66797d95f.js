$(document).ready(function() {
      $(".widget-title-aiml .berita-terbaru").click(function() {
        $(".widget-title-aiml .berita-terbaru").addClass("active");
        // $(".body-right-bodyhome").show();
        $(".widget-title-aiml .berita-rekomendasi").removeClass("active");
        rekomendasiMPI(0);
      });
      $(".widget-title-aiml .berita-rekomendasi").click(function() {
        $(".widget-title-aiml .berita-terbaru").removeClass("active");
        // $(".body-right-bodyhome").hide();
        $(".widget-title-aiml .berita-rekomendasi").addClass("active");

        rekomendasiMPI(1);
      });
      // $(".title-content").css("-webkit-box-orient", "vertical");
      // $(".desk-content").css("-webkit-box-orient", "vertical");
    });