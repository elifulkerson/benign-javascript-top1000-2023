if (!window.abtest) {
      window.abtest = {
        'b_ut': getCookie('b_ut'),
        'home_version': 'V8',
        'i-wanna-go-back': getCookie('i-wanna-go-back'),
        'in_new_ab': true,
        'ab_version': {"for_ai_home_version":"V8","tianma_banner_inline":"CONTROL","enable_web_push":"DISABLE"},
        'ab_split_num': {"for_ai_home_version":54,"tianma_banner_inline":54,"enable_web_push":10},
      }
    }