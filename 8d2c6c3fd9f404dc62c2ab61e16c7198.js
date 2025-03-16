$(".feedback-tob-btn").on("click", function () {
        $("input[name='fankui']")
          .attr('checked', false)
          .eq(0).attr('checked', true);
        $(".fb-question").val('');
        $("#input-phone").val('');
        $("#input-useremail").val('');
        $('.validate-error').hide();
        $(".feedback-modal-cover").show('fast');
      });

      $(".feedback-close").on("click", function () {
        $(".feedback-modal-cover").hide('fast');
      });
        
      $('.feedback-modal').on('click', function(e) {
        e.stopPropagation()
      })

      $(".submit-fb").on("click", submit);

      function submit() {
        var product = $("input[name='fankui']:checked").val();
        var question = $(".fb-question").val();
        var phone = $("#input-phone").val();
        var email = $("#input-useremail").val();
        var phoneReg = /^1[0-9]{10}$/;
        var emailReg = /^.+\@.+\..+$/;
        var validSuc = true;

        if (!product) {
          $("#fankui-error").show();
          validSuc = false;
        } else {
          $("#fankui-error").hide();
        }

        if (question.length < 8 || question.length > 500) {
          $("#title-error").show();
          validSuc = false;
        } else {
          $("#title-error").hide();
        }

        if (!phone.match(phoneReg)) {
          $("#phone-error").show();
          validSuc = false;
        } else {
          $("#phone-error").hide();
        }

        if (!email.match(emailReg)) {
          $("#useremail-error").show();
          validSuc = false;
        } else {
          $("#useremail-error").hide();
        }

        if (!validSuc) {
          return;
        }
          
        QHPassCaptcha.init({
          appid: "zwu7cyPUHkKPeijajZ73S3idxbAxIcCW",
          width: 300,
          adaptScreen: false, //与width互斥。为true，width不生效
          needDialog: true, // 是否需要弹窗
          imgShow: true, // 是否一进来展示图片,
          captchaSite: $(".feedback-modal")[0], // 展示为全局居中还是登录框居中
          callBack: function (result) {
            if (result.success) {
              console.log(result);
              $.ajax({
                // type: "POST",
                dataType: 'jsonp',
                url: '//news.safe.360.cn/www/counselling/add',
                data: {
                  product_name: product,
                  description: encodeURIComponent(question),
                  contact: phone,
                  mail: email,
                  token: result.token,
                  vd: result.vd
                },
                success: function(res) {
                  if (res.errno === 0) {
                    $(".feedback-modal-cover").hide('fast');
                  } else {
                    $('#submit-error').hide()
                  }
                  console.log('suc', res)
                },
                error: function() {
                    console.log('err')
                    $('#submit-error').show()
                },
                complete: function() {
                }
              });
            } else {
              // alert("校验失败");
            }
          },
        });

        console.log(product, question, phone, email);
      }