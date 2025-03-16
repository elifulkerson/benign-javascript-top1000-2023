jQuery(document).ready(function () {
    jQuery(".ico-menu").click(function () {
      jQuery(".stick").toggleClass(function () {
        return jQuery(this).is(".open, .close") ?
          'open close' : 'open';
      })
    })
  });