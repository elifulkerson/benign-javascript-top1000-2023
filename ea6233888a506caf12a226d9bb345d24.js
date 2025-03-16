//sa临时代理
    window.sa = function () {
        if (!window.sa.waitingCommands) {
            window.sa.waitingCommands = []
        }
        window.sa.waitingCommands.push(arguments)
    };
    // sdk_analysis config文件1
    ;(function(){
      var isRomwe = 'shein' === 'romwe'
      var globalSetting = {
        homeSite: isRomwe ? 'romwe': 'shein',
        deviceType: 'pc',
        currency: { cookieKey:'currency', cookieValueDefault:"USD" },
        country:{ cookieKey: 'country' },
        // email: { cookieKey: 'userinfo_email' },
        memberId: { cookieKey: 'memberId' },
        userId: { cookieKey: 'memberId' },
        cookieId: { cookieKey: 'cookieId' },
        sessionId: { cookieKey: isRomwe ? 'sessionID_rw': 'sessionID_shein' },
        SiteUID: 'us',
        appLanguage: 'en',
        environment: 'production',
        host: 'www.srmdata-us.com',
      }
      if(typeof sa == 'function'){
        sa('set', 'init', globalSetting);
      }
    })();