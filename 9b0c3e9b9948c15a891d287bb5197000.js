function initRaven() {
            Raven.config(
              'https://2a44deae30bb4bdeab19249122106fbe@sgw.reallifecam.com/3', {
                release: '20220824-00'
            }).install()
          }