$(document).ready(function() {
    $( "a" ).click(function() {
      var href = $.trim( $(this).attr( 'href' ) );

      /* Module = MoneySavers -> Start */
      if( href.indexOf( "moneysavers" ) >= 0 ) {
        if( $(this).parent().parent().hasClass( 'headbotmmenus1' ) ) {
          ga( 'send', 'event', 'MC_WEB', 'Web_Navigation_Link', 'WEB_NAV_RMF_MoneySavers' );
        } else if( $(this).parent().parent().hasClass( 'splist' ) ) {
          ga( 'send', 'event', 'MC_WEB', 'Special_Section', 'WEB_Special_MoneySavers' );
        }
      }
      /* End <- Module = MoneySavers */

    });
  });