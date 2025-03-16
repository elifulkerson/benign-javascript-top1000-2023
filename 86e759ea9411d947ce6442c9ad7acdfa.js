var rumjs = rumjs || {};
      rumjs.que = rumjs.que || [];
      rumjs.gtmque =
        rumjs.gtmque ||
        function () {
          (rumjs.gtmque.q = rumjs.gtmque.q || []).push(arguments);
        };

      var ramjs = ramjs || {};
      ramjs.que = ramjs.que || [];

      ramjs.que.push(function () {
        ramjs.config.init({});
        ramjs.business.init(['all']);
      });