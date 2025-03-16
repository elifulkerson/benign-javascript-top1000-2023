$(document).ready(function() {
    const axios = window.axios;
    const pdatla = $('.YQHUVkjtgPEMaqRn-mal-pdatla');
    var cookieVal = checkTopSignupCookie();
    let scrollTimer;
    var  cookieTopSignUpValue = 0;

    //Cookieをチェックする画面かどうか
    switch (cookieTopSignUpValue) {
      case 0:
        //Cookieは使用しない画面
        //PDA/TLAが非表示
        if ( !pdatla.exists()) {
          //TopSignArea表示する
          $('.top_signup').css('display', 'block');
        }
        break;
      case 1:
        //Cookieを使用する画面
        //PDA/TLAが非表示 かつ Cookieが未SET
        if ( !pdatla.exists() && Number(cookieVal) !== 1) {
          //TopSignArea表示する
          $('.top_signup').css('display', 'block');
        }
        break;
      default:
      //TopSignArea非表示
    }

    var headerHeight = $('#headerSmall').outerHeight();
    const signup = $('.top_signup .signup');
    if ( signup.exists() ) {
      headerHeight =  $('.top_signup').position().top + $('.top_signup').height();
    }

    $(window).scroll(function(){
      //PDA/TLAが非表示
      if (!pdatla.exists()){
        //top_signupエリアが画面OUT
        if ($(this).scrollTop() > headerHeight && cookieTopSignUpValue === 1) {
          clearTimeout(scrollTimer);
          var cookieVal = checkTopSignupCookie();

          if (Number(cookieVal) !== 1){
            scrollTimer = setTimeout(function() {
              axios.post("/cookie/set", {key: 'top_signup_hidden', value: 1, expires: 14})
                .then(function(response) {
                })
                .catch(function(error) {
                  console.error('cookie set Error', error);
                });
            }, 3000);
          }
        }
      }
    });
  });

  function checkTopSignupCookie(){
    var cookieTopSignUpValue = 0;

    //Cookieセット値取得
    var setCookieVal = $.cookie('top_signup_hidden');

    if (cookieTopSignUpValue === 1 && Number(setCookieVal) === 1){
      return 1;
    }
    return 0;
  }