$(document).ready(function() {
        loadleftsidebar();
        loadrightsidebar();
                  var params = new URLSearchParams(window.location.search);
          if(params.get('rekomendasi') == "true"){
            $(".widget-title-aiml .berita-terbaru").removeClass("active");
            $(".widget-title-aiml .berita-rekomendasi").addClass("active");
            rekomendasiMPI(1);
          } else {
            rekomendasiMPI(0);
          }
              });


    function rekomendasiMPI(val) {
      $.ajax({
        type: 'GET',
        url: 'https://www.okezone.com/no-cache/maincontent-mpi/'+val,
        success: function(data){
            $("#bodyMPI").html(data);
        }
      });
    }

    function loadleftsidebar(){
    /*leftsidebar call*/
    $.ajax({
        type: 'GET',
        url: 'https://www.okezone.com/leftsidebar',
        success: function(data){
            $("#leftside").html(data);
          },
        error: function(xhr, textStatus, errorThrown){
          leftsidebar_error();
        }
        });
        function leftsidebar_error(){
          $.ajax({
            type: 'GET',
            url: 'https://www.okezone.com/leftsidebar/error',
            success: function(data){
                $("#leftside").html(data);
            }
          });
        }
    }

    function loadrightsidebar(){
    /*rightsidebar call*/
    $.ajax({
        type: 'GET',
        url: 'https://www.okezone.com/rightsidebar',
        success: function(data){
            $("#rightside").html(data);
          },
        error: function(xhr, textStatus, errorThrown){
          rightsidebar_error();
        }
        });
        function rightsidebar_error(){
          $.ajax({
            type: 'GET',
            url: 'https://www.okezone.com/rightsidebar/error',
            success: function(data){
                $("#rightside").html(data);
            }
          });
        }
    }


    /*search call*/
    $('#search-top, #search-sticky').on('keyup', function (e) {
        var text = $(this).val();
        if (e.keyCode == 13) {
          window.location = 'http://search.okezone.com/search?q='+text+'&highlight=1&sort=desc&start=0';
        }
      });
    /*logo call after*/