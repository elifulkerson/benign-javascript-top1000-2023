// 获取用户基本信息
      var token = localStorage.getItem("qj-token");
      if (null != token && token != '' && token !='undefined') {
          getUserInfo(function (userInfo) {
              $("#btn_login").hide();
              $("#usercenter").show();
          });
      } else {
          $("#btn_login").show();
          $("#usercenter").hide();
          $("#navs").hide();
      }

      // 退出登录
      $('#logout').click(function () {
          logout("https://www.qj.com.cn/usercenter/login.html");
      });

      var fixedSearch = document.getElementById('fixedSearch')
      window.addEventListener('scroll',function(e){
          var top = document.documentElement.scrollTop || document.body.scrollTop;
          top >= 140 ? fixedSearch.classList.add('fixed'):fixedSearch.classList.remove('fixed')
      })