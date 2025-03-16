(function(win, doc, cb) {
        var tnsscript = doc.createElement('script');
        var s = doc.getElementsByTagName('script')[0];
        window.tnsID = 'rambler_head-new2';
        (win[cb] = win[cb] || []).push(function() {
          try {
            window.tnsCounterRambler_ru = new window.TNS.TnsCounter({
              account: 'rambler_ru',
              tmsec: 'rambler_head-new2',
            });
          } catch (e) {
            console.error('TNS счетчик не отработал', e);
          }
        });
        tnsscript.type = 'text/javascript';
        tnsscript.async = true;
        tnsscript.src = (doc.location.protocol === 'https:' ? 'https:' : 'http:') +
          '//www.tns-counter.ru/tcounter.js';
        s.parentNode.insertBefore(tnsscript, s);
      }(window, this.document, 'tnscounter_callback'));