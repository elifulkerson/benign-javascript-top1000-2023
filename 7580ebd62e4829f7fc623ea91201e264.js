window.addEventListener('appinstalled', (event) => {
      if ( 'function' === typeof ga ) {
        // Default GA.
        ga( 'send', 'event', 'pwa', 'install' );
      } else if ( 'function' === typeof __gaTracker ) {
        // MonsterInsights.
        __gaTracker( 'send', 'event', 'pwa', 'install' );
      }
    });