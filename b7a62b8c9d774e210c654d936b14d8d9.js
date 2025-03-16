/**** Responsive pagination Start****/
    $('.pagination').pagShrink();
    /**** Responsive pagination End****/

    $('.close-fixed-ads').click(function() {
      $('.fixed-ads').hide();
    });

    /**** Google SEARCH FUNCTION Start****/
    $('.srch_btn').click(function() {
      google_search($('.srch_keyword'));
    });

    $('.srch_keyword').keypress(function(e) {
      var p = e.which;
      if (p == 13) google_search($(this));
    });

    function google_search(srchInputElm) {
      var keyword = srchInputElm.val().trim().toLowerCase().replace(/\s/g, '+');
      if (keyword == '') {
        srchInputElm.css({
          'background': '#FF9',
          'color': '#444'
        }).focus()
      } else {
        var URL = 'https://jugantor.com/search/google/?q=' + keyword + '&cx=' + encodeURIComponent(
          '016108874041491943737:xdrx5qcrkpc') + '&cof=' + encodeURIComponent('FORID:10') + '&ie=UTF-8&sa=Search';
        window.location.href = URL;
      }
    }
    /**** Google SEARCH FUNCTION End****/