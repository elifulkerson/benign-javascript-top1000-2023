(function(win, doc, cb){
              (win[cb] = win[cb] || []).push(function() {
               try {
                tnsCounterRian_ru = new TNS.TnsCounter({
                'account':'rian_ru',
                'tmsec': 'rian_site-new'
                });
               } catch(e){}
              });

              var tnsscript = doc.createElement('script');
              tnsscript.type = 'text/javascript';
              tnsscript.async = true;
              tnsscript.src = ('https:' == doc.location.protocol ? 'https:' : 'http:') +
               '//www.tns-counter.ru/tcounter.js';
              var s = doc.getElementsByTagName('script')[0];
              s.parentNode.insertBefore(tnsscript, s);
             })(window, this.document,'tnscounter_callback');