var DEFAULT_AVATAR = 'https://media.flaticon.com/dist/min/img/default_avatar.png';

  function set_default_avatar(elem) {
    elem.src = DEFAULT_AVATAR;
  }

  var pageview;
  try {
    pageview = parseInt(localStorage.pageview || 0, 10)
  } catch (e) {
    pageview = 1;
  }

  if (pageview < 3) {
    if (document.getElementById("gr_not-connected")) {
      var login_link = document.getElementById("gr_not-connected");
      login_link.classList.add("dropdown-active");
      try {
        localStorage.pageview = pageview + 1;
      } catch (e) {}

      setTimeout(function() {
        var login_link = document.getElementById("gr_not-connected");
        if (login_link) {
          login_link.classList.remove('dropdown-active');
        }
      }, 4000);
    }
  }