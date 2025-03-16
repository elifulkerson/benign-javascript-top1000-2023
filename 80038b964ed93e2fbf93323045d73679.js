$("body").css({
    'overflow': 'hidden',
    'height': '100%'
  });
  $("html").css({
    'overflow': 'hidden',
    'height': '100%'
  });
  $(document).ready(function () {
    setTimeout(function () {
      $("body").css({
        'overflow': '',
        'height': 'auto'
      });
      $("html").css({
        'overflow': '',
        'height': 'auto'
      });
    }, 3000);
  });