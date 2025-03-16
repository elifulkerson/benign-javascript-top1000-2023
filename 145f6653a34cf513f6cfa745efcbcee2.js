window.WP.push(function() {
      try {
        window.WP.gaf.registerCommercialBreak(2,{
          setNative: function(data) {
            if (data && data.type === 'blockRouting') {
              window.CBDataNative = data
            }
          }
        });
      } catch (e) {
        console.error('COMMERCIAL_BREAK_ERROR', e);
      }
    })