console.log(111, 'start')
      setTimeout(function () {
        console.log(111, 'setTimeout')

        var ua = window.navigator.userAgent
        var isLinux = ua.indexOf('Linux') >= 0
        var isChrome = ua.indexOf('Chrome') >= 0

        try {
          if (isChrome && !isLinux && !document.querySelector("a[data-rseat-v2='712211_channel_shouye']")) {
            var img = new Image()
            img.src = 'https://msg.qy.net/qos?t=11&rpage=vue-ssr&ct=no-header&requestId='+(Qi.logParams()||{}).requestId
          } else {
            console.log(111, 'has-header')
          }
          if (isChrome && !isLinux && !window.home2020Mounted) {
            var img = new Image()
            img.src = 'https://msg.qy.net/qos?t=11&rpage=vue-ssr&ct=home2020-not-mounted&requestId='+(Qi.logParams()||{}).requestId
          } else {
            console.log(111, 'home2020 mounted')
          }
        } catch (e) { console.log(111, 'no-header出错了：', e) }
      }, 5000)