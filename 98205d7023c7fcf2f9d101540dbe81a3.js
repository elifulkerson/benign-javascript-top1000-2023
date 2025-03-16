$(function(){
    var headerHeight = $('#headerSmall').outerHeight();
    const signup = $('.top_signup .signup');
    if ( signup.exists() ) {
      headerHeight =  $('.top_signup').position().top + $('.top_signup').height();
    }
    $('.bottom-bar').css({'height': '0'});

    $(window).scroll(function(){
      if ($(this).scrollTop() > headerHeight
        & !$('#gdpr-modal-bottom').is(':visible')
        & $(window).height() > 672
      ) {
        $('.bottom-bar').css({'height': '73px'});
        $('#tbl-next-up').css({'bottom': '73px'});
      } else {
        $('.bottom-bar').css({'height': '0'});
        $('#tbl-next-up').css({'bottom': '0'});
      }
    });
  });