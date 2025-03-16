var domain = "bzw315.com";
    window.onload = function () {
        var isShow = this.getCookie("is_show_price");
        if (isShow == null || isShow !== "1") {
            //$('.remodal-wrapper').show();
            var inst = $('[data-remodal-id=global_price_modal]').remodal();
            inst.open();
            setCookie("is_show_price", "1");
        }
    }
    //读cookies
    function getCookie(name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
        if (arr = document.cookie.match(reg))
            return unescape(arr[2]);
        else
            return null;
    }
    //写cookies
    function setCookie(name, value) {
        var Days = 1;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
        //document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
        document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString() + ";path=/" + ";domain=" + domain;
    }
    // 加密
    function crypt(da) {
        let k = '6bdc6d8d3b036dc4c30e9ceb99cdcb0e2f572ea963fd81c57bf603a3ff2c86f4' + getTime(new Date());
        let aseKey = CryptoJS.MD5(k).toString();
        var encrypt = CryptoJS.AES.encrypt(da, CryptoJS.enc.Utf8.parse(aseKey), {
            mode: CryptoJS.mode.ECB,
            padding: CryptoJS.pad.Pkcs7
        }).toString();
        return encrypt;
    }
    // 封装一个获取当前年月日的函数getTime
    function getTime(date) {
        let y = date.getFullYear() //年
        let m = date.getMonth() + 1  //月，月是从0开始的所以+1
        let d = date.getDate() //日
        m = m < 10 ? "0" + m : m //小于10补0
        d = d < 10 ? "0" + d : d //小于10补0
        return y + "-" + m + "-" + d; //返回时间形式yyyy-mm-dd
    }
    $(function () {

        setImgCaptcha();

        //var inst = $('[data-remodal-id=global_price_modal]').remodal();
        //inst.close();// 关闭模态框

        //数字跳动
        setInterval(function () {
            var total = fRandomBy(50000, 200000);
            var materialPay = Math.round(total * 0.469);
            var artificialPay = Math.round(total * 0.471);
            var designPay = Math.round(total * 0.042);
            var qualityPay = Math.round(total * 0.017);
            total = materialPay + artificialPay + designPay + qualityPay;
            $('#bprice').text(total);
            $('#materialPay').text(materialPay);
            $('#artificialPay').text(artificialPay);
            $('#designPay').text(designPay);
            $('#qualityPay').text(qualityPay);
        }, 300);

        //计算报价
        $('.start-btn').click(function () {
            var that = $(this);
            var provinceId = $('#jsq_province').val();
            if (provinceId == '' || provinceId == 1) {
                alert('请选择城市');
                return;
            }
            var cityId = $('#jsq_city').val();
            if (cityId == '' || cityId == 0) {
                alert('请选择城市');
                return;
            }
            var housearea = $('#Area').val();
            if (housearea == '' || housearea <= 0) {
                $('#Area').val('');
                $('#Area').focus();
                return;
            }
            var room = $('#room').val();
            var hall = $('#hall').val();
            var kitchen = $('#kitchen').val();
            var toilet = $('#toilet').val();
            var balcony = $('#balcony').val();
            var username = $('#ApplyUser').val();
            if (username == '') {
                $('#ApplyUser').focus();
                return;
            }
            var mobile = $('#Mobile').val();
            if (!isMobil(mobile)) {
                $('#Mobile').focus();
                return;
            }
            var mobilecode = $('#mobilecode').val();
            if (mobilecode==='') {
                $('#mobilecode').focus();
                return;
            }            

            verifyAgreestPrivacy(function (result) {
                if (result) {
                    that.html('<span class="one">计算中...</span>');
                    //设置按钮不可用
                    that.attr("disabled", true);

                    let da = {
                        'applyUser': username,
                        'mobile': mobile,
                        'provinceId': provinceId,
                        'cityId': cityId,
                        'classId': 25059,
                        'houseArea': housearea,
                        'remark': room + '' + hall + '' + kitchen + '' + toilet + '' + balcony,
                        'captcha': mobilecode
                    };

                    $.ajax({
                        url: 'https://app-api.bzw315.com/api/huodong/eprices/',
                        type: 'post',
                        contentType: 'application/json',
                        dataType: 'json',
                        data: JSON.stringify({ data: crypt(JSON.stringify(da))}),
                        success: function (data) {
                            if (data.result.success) {
                                if (data.result.data != null) {
                                    resetinput();
                                    that.html('<span class="two">开始<br />计算</span>');
                                    alert('报价已经发送，请留意您的手机短信。');
                                    var inst = $('[data-remodal-id=global_price_modal]').remodal();
                                    inst.close();// 关闭模态框
                                } else {
                                    resetinput();
                                    that.html('<span class="two">开始<br />计算</span>');
                                    alert(data.result.message);
                                }
                            } else {
                                resetinput();
                                that.html('<span class="two">开始<br />计算</span>');
                                alert("计算错误,请刷新页面重试");
                            }
                        }
                    });
                }
            }, $('.js-agreest-privacy'));

            that.attr("disabled", false);
        });

        $(document).on("click", ".bzj_fw", function () {
            index_globe = layer.open({
                type: 1,
                title: false,
                shadeClose: true,
                closeBtn: true,
                shade: 0.4,
                shift: 1,
                area: ['500px'], //宽高
                content: $("#bzj_fw_box"),
                end: function () {
                    $(".zhaobiao-bzwPopup05 input[type=text]").val("").removeClass("zhaobiao-focus");
                }
            });
        });

        $(".get_tupian_box").click(function () {
            var mobile = $('#Mobile').val();
            if (!isMobil(mobile)) {
                $('#Mobile').focus();
                return;
            }
            $('.check-code').show();
        });

        $('.random-code').click(function () {
            setImgCaptcha();
        });

        $('#sendsms').click(function () {
            var mobile = $('#Mobile').val();
            if (!isMobil(mobile)) {
                $('#Mobile').focus();
                return;
            }

            var picturecode = $('#picturecode').val();
            if (picturecode === '') {
                $('#picturecode').focus();
                return;
            }

            $.ajax({
                url: 'https://app-api.bzw315.com/api/WebHelper/SendTSms/',
                type: 'post',
                data: JSON.stringify({ template: 'mobileverfycode', mobile: mobile, code: picturecode }),
                contentType: 'application/json',
                dataType: 'json',
                success: function (data) {
                    if (data.result.success) {
                        alert('验证码已发送到您的手机！');
                        $('.check-code').hide();
                        countdownBegins();
                    } else {
                        alert(data.result ? data.result.message : '短信发送异常');
                        countdownOver();
                    }
                }, error: function (ex) {
                    console.log(ex);
                }
            });
        });

    });

    function setImgCaptcha() {
        $('.imgCode').attr('src', 'https://app-api.bzw315.com/api/WebHelper/GetVerifyCode/?v=' + Math.random());
    }

    var timeObj;
    var captchaWaitTime = 60;
    //------ 倒计时开始
    function countdownBegins() {
        if (captchaWaitTime === 0) {
            countdownOver();
        } else {
            $('.get-code').html('重新发送(' + captchaWaitTime + ')').prop('disabled', true).unbind('click');
            //Utils.setEleText($btnGetCaptcha, '重新发送(' + captchaWaitTime + ')').prop('disabled', true).unbind('click');
            captchaWaitTime--;
            timeObj = setTimeout(function () { countdownBegins(); }, 1000);
        }
    }

    //------ 倒计时结束
    function countdownOver() {
        clearTimeout(timeObj);
        captchaWaitTime = 60;
        $('.get-code').html('重新发送').prop('disabled', false).bind('click');
    }

    /**
     * 验证是否同意隐私政策
     * @param {function} callback 回调函数 callback(Boolean) false：不同意；true：默认状态，可提交
     * @param {any} $agreestPrivacy 是否同意隐私政策操作元素
     */
    function verifyAgreestPrivacy(callback, $agreestPrivacy) {
        if (!'function' === typeof (callback)) {
            callback(true);
            return;
        }

        // 是否同意隐私政策
        if ($agreestPrivacy.length > 0) {
            var agreestPrivacy = true;
            for (var i = 0; i < $agreestPrivacy.length; i++) {
                var item_agreestPrivacy = $($agreestPrivacy[i]).prop('checked');
                if (!item_agreestPrivacy) {
                    agreestPrivacy = false;
                    break;
                }
            }
            if (!agreestPrivacy) {
                var content = [];
                content.push('提交即视为您已同意');
                content.push('<a href="//www.bzw315.com/gonggao/1037.html" target="_blank">《用户协议》</a>');
                content.push('<a href="//www.bzw315.com/gonggao/1044.html" target="_blank">《隐私政策》</a>');
                content.push('<a href="//www.bzw315.com/gonggao/1045.html" target="_blank">《共享说明》</a>');

                var confirmBtn = null;  // 判断关闭模态框的方式，null：点击模态框之外的任意位置关闭
                // 弹出模态框
                layer.open({
                    type: 1,
                    title: false,
                    shadeClose: true,
                    closeBtn: false,
                    skin: 'privacy-confirm-layer',
                    content: content.join(''),
                    btn: ['不同意', '同意'],
                    btn1: function () {
                        confirmBtn = 'btn1';
                        isAllowSubmit = true;
                        callback(false);
                    }, btn2: function (index) {
                        confirmBtn = 'btn2';
                        callback(true);
                    }, end: function () {
                        // 不同意或点击其它位置关闭模态框，则表示用户不同意
                        if (!confirmBtn || confirmBtn === 'btn1') {
                            isAllowSubmit = true;
                            callback(false);
                        }
                    }
                });
            } else {
                callback(true);
            }
        } else {
            callback(true);
        }
    }

    //重置输入框
    function resetinput() {
        $('#Area').val('');
        $('#Mobile').val('');
    }

    //获取 under 和 over 之间的随机数
    function fRandomBy(under, over) {
        switch (arguments.length) {
            case 1: return parseInt(Math.random() * under + 1);
            case 2: return parseInt(Math.random() * (over - under + 1) + under);
            default: return 0;
        }
    }

    // Js 去除字符串前后空格
    function Trim(str) {
        if (str != null && str != '') {
            return str.replace(/(^\s*)|(\s*$)/g, "");
        }
        return str;
    }

    //手机号码验证信息
    function isMobil(s) {
        var patrn = /^((0\d{2,3})-)(\d{7,8})(-(\d{3,}))?|((\(\d{2,3}\))|(\d{3}\-))?(13|14|15|16|17|18|19)\d{9}$/
        if (!patrn.exec(s)) {
            return false;
        }
        return true;
    }