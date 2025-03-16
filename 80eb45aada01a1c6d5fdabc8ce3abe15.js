let signout = {
      signoutTitle: "SIGN OUT FROM MANORAMAONLINE ?",
      cancelText: "Cancel" ,
      signoutText: "Sign Out",
      signoutMsg: "<p>You can always sign back in at any time.<\/p>\r\n"
  };
  $(document).ready(function(){
    $('.cmp-modal-box--signoutConfrm .cmp-section-title').html(signout.signoutTitle);
    $('.signoutConfrm__btn-grp .cancel-button').html(signout.cancelText);
    $('.signoutConfrm__btn-grp .submit-button').html(signout.signoutText);
    $('.signoutConfrm__btn-grp .mm-btn--primary').prop('title', signout.cancelText);
    $('.signoutConfrm__btn-grp .sso-signout-button').prop('title', signout.signoutText);
    $('.cmp-modal-box--signoutConfrm .signoutConfrm__sub-text').html(signout.signoutMsg);
  });