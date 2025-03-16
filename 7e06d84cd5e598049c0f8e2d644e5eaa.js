/**
 * 网站招标插件 
 * 
 * @version: 2.0.0
 * @author: hww
 * @date: 2021/05/13
 * */
; (function (root, factory) {
    if ('object' === typeof module && 'object' === typeof exports) {
        module.exports = factory($);
    } else if ('function' === typeof define) {
        define('TenderApply', [], factory($));
    } else {
        root.TenderApply = factory($);
    }
}(window, function ($) {

    var Utils = {
        /**
         * 初始化配置
         * 
         * @param {object} options 外部传入的配置信息
         */
        initSetting: function (options) {
            this.defaults = $.extend(true, {}, this.defaults, options);
        },

        /**
         * alert 公共处理
         * 
         * @param {string} msg 消息
         */
        alertCommon: function (msg) {
            alert(msg);
        },

        /**
         * 对数据进行正则表达式校验
         * 
         * @param {string} type 校验类型[mobilePhone：手机号码；area：面积]
         * @param {object} value 数据
         * @returns true：校验无误；false：无法通过校验
         */
        dataRegexCheck: function (type, value) {
            var result = false;
            switch (type) {
                case 'mobilePhone':
                    if (/^(13|14|15|16|17|18|19)\d{9}$/.test(value)) { result = true; } break;
                case 'area':
                    if (/^[0-9]+.?[0-9]*$/.test(value)) { result = true; } break;
                default: result = false; break;
            }

            return result;
        },

        /**
         * 设置元素文本信息
         * 
         * @param {any} $ele 元素对象
         * @param {any} text 文本信息
         * @returns 返回元素对象信息
         */
        setEleText: function ($ele, text) {
            if ($ele.is('input[type="button"]') || $ele.is('input[type="submit"]')) {
                return $ele.val(text);
            }
            else {
                return $ele.text(text);
            }
        },

        /**
         * 获取元素文本信息
         * 
         * @param {any} $ele 元素对象
         */
        getEleText: function ($ele) {
            if ($ele.is('input[type="button"]') || $ele.is('input[type="submit"]')) {
                return $ele.val();
            } else {
                return $ele.text();
            }
        },

        /**
         * 获取元素选中的值
         * 
         * @param {any} $ele 元素对象
         * @param {[]} excludeValueArr 需要排除不获取的值集合
         * @returns 返回数组
         */
        getEleSelectValue: function ($ele, excludeValueArr) {
            var result = [];
            if ($ele.length === 0) { return result; }

            if ($ele.is('select')) {
                $ele = $ele.find('option:selected');
                if ($ele.length > 0) {
                    for (var i = 0; i < $ele.length; i++) {
                        var $item = $($ele[i]);
                        if (!excludeValueArr || excludeValueArr.indexOf($item.val()) === -1) {
                            result.push($item.val());
                        }
                    }
                }
            }
            if ($ele.is('input[type="radio"]')) {
                for (var i = 0; i < $ele.length; i++) {
                    var $item = $($ele[i]);
                    if ($item.prop('checked') === true) {
                        if (!excludeValueArr || excludeValueArr.indexOf($item.val()) === -1) {
                            result.push($item.val());
                            break;
                        }
                    }
                }
            }
            if ($ele.is('input[type="checkbox"]')) {
                for (var i = 0; i < $ele.length; i++) {
                    var $item = $($ele[i]);
                    if ($item.prop('checked') === true) {
                        if (!excludeValueArr || excludeValueArr.indexOf($item.val()) === -1) {
                            result.push($item.val());
                        }
                    }
                }
            }

            return result;
        }
    };

    //---------- 系统构建 ----------
    function TenderApply(containerName) {
        this.containerName = containerName;
        if (!containerName || $('.' + containerName).length === 0) {
            console.error('招标实例创建失败，请检查容器对象名称【%s】是否存在！', containerName);
            return;
        }

        this.$container = $('.' + containerName); // 容器对象

        // 默认配置
        var defaults = {
            classId: 0,  // 分类Id

            formEle: {  // 表单元素
                $applyuser: $('input[name="applyuser"]'),       // 称呼
                $mobile: $('input[name="mobile"]'),             // 手机
                $mobileCaptcha: $('input[name="mobilecode"]'),  // 手机验证码
                $imgCaptcha: $('input[name="picturecode"]'),    // 图形验证码

                $decorateBudget: $('select[name="decoratebudget"]'),    // 装修预算
                $decorateTypeway: $('input[name="decoratetypeway"],select[name="decoratetypeway"]'),   // 装修方式
                $address: $('input[name="address"]'),       // 小区地址
                $houseType: $('select[name="housetype"]'),  // 房屋类型
                $houseArea: $('input[name="housearea"]'),   // 房屋面积
                $remark: $('.remark'),                      // 备注
                $isSafeEnterprise: $('input[name="issafeenterprise"]'), // 是否要求公司
                $fengshuiService: $('input[name="fengshuiService"]'),   // 是否需要风水服务
                $insuranceType: $('select[name="insurancetype"]'),      // 建发保险险种

                $provinceId: $('input[name="F_ProvinceID"]'),   // 城市选择[省份Id]
                $cityId: $('input[name="F_CityID"]'),           // 城市选择[城市Id]
                $areaId: $('input[name="F_AreaID"]'),           // 城市选择[区域Id]
                $agreestPrivacy: $('.js-agreest-privacy')       // 是否同意隐私政策
            },

            isUseCaptcha: true,                     // 是否使用验证码
            $btnGetCaptcha: $('.get_tupian_box'),   // 获取验证码按钮
            $imgCaptchaMain: $('.check-code'),      // 图形验证码模块
            $imgCaptcha: $('.imgCode'),             // 生成图形验证码的标签
            $changeImgCaptcha: $('.random-code'),   // 图形验证码 换一换
            $btnSendCaptcha: $('.get_code'),        // 发送短信验证码按钮
            captchaWaitTime: 60,                    // 验证码倒计时时间。单位：秒

            $btnSubmit: $('.zhaobiao_btn'),         // 提交招标按钮
            $btnCloseLayer: $('.layui-layer-close'),// 招标弹出层 关闭按钮
            sourceAdminId: 0,                       // 推广管理员Id
            isDebug: false                          // 是否开启 Debug 模式
        };

        this.defaults = defaults;
    }

    TenderApply.prototype = {
        init: function (options) {
            var that = this;
            if (!that.$container) { return; }

            Utils.initSetting.call(this, options);

            if (!that.defaults.classId) {
                console.error('招标模块【%s】初始化失败，当前分类Id【%s】配置无效，请检查！', that.containerName, that.defaults.classId);
            }

            if (that.defaults.isUseCaptcha) {
                this.imgCaptchaEffect();
                this.sendSMSCaptcha();
            }
            this.submit();
        },

        /**
         * 图片验证码效果
         */
        imgCaptchaEffect: function () {
            var that = this,
                $btnGetCaptcha = that.$container.find(that.defaults.$btnGetCaptcha);

            // 点击页面其它地方隐藏验证码弹出层
            $(document).click(function (e) {
                var $target = $(e.target);
                if ($target.closest($btnGetCaptcha.parent()).length === 0) {
                    that.$container.find(that.defaults.$imgCaptchaMain).hide();
                }
            });

            // 刷新图片验证码
            that.$container.find(that.defaults.$imgCaptcha).click(function () {
                setImgCaptcha();
            });
            that.$container.find(that.defaults.$changeImgCaptcha).click(function () {
                setImgCaptcha();
            });

            /**
             * 设置图片验证码
             */
            function setImgCaptcha() {
                that.$container.find(that.defaults.$imgCaptcha).attr('src', 'https://app-api.bzw315.com/api/WebHelper/GetVerifyCode/?v=' + Math.random());
            }

            // 显示图片验证码模块
            $btnGetCaptcha.click(function () {
                var $mobile = that.$container.find(that.defaults.formEle.$mobile),
                    mobile = $.trim($mobile.val());
                if (!Utils.dataRegexCheck('mobilePhone', mobile)) {
                    $mobile.focus().addClass('zhaobiao-focus');
                    return false;
                } else {
                    $mobile.removeClass('zhaobiao-focus');
                    setImgCaptcha();
                    that.$container.find(that.defaults.$imgCaptchaMain).show();
                }
            });
        },

        /**
         * 发送短信验证码
         */
        sendSMSCaptcha: function () {
            var that = this,
                isAgainSend = true, // 是否允许再次发送验证码
                captchaWaitTime = parseInt(that.defaults.captchaWaitTime),
                $mobile = that.$container.find(that.defaults.formEle.$mobile),
                $btnGetCaptcha = that.$container.find(that.defaults.$btnGetCaptcha),
                timeObj;

            that.$container.find(that.defaults.$btnSendCaptcha).click(function () {
                if (!isAgainSend) {
                    Utils.alertCommon('请不要重复发送验证码，感谢您的理解！');
                    return false;
                }
                isAgainSend = false;

                var formData = getFormData();
                if (!formData) { return false; }
                sendSMSHandle(formData);
            });

            //------ 获取表单信息
            function getFormData() {
                // 图片验证码
                var $imgCaptcha = that.$container.find(that.defaults.formEle.$imgCaptcha),
                    imgCaptcha = $.trim($imgCaptcha.val());

                if (!imgCaptcha || imgCaptcha.length !== 6) {
                    $imgCaptcha.val('').focus().addClass('zhaobiao-focus');
                    isAgainSend = true;
                    return false;
                } else {
                    $imgCaptcha.removeClass('zhaobiao-focus');
                }

                that.$container.find(that.defaults.$imgCaptchaMain).hide();

                // 手机号码
                var mobile = $.trim($mobile.val());

                if (!Utils.dataRegexCheck('mobilePhone', mobile)) {
                    $mobile.focus().addClass('zhaobiao-focus');
                    isAgainSend = true;
                    return false;
                } else {
                    $mobile.removeClass('zhaobiao-focus');
                }

                return {
                    mobile: mobile,
                    code: imgCaptcha
                }
            }

            //------ 发送短信验证码
            function sendSMSHandle(formData) {
                if (that.defaults.isDebug) {
                    Utils.setEleText($btnGetCaptcha, '短信发送中...');
                    console.log('发送短信提交的数据：', { template: 'mobileverfycode', mobile: formData.mobile, code: formData.code });
                    setTimeout(function () {
                        Utils.alertCommon('验证码已发送到您的手机！');
                        that.$container.find(that.defaults.$imgCaptchaMain).hide();
                        countdownBegins();
                    }, 1200);
                    return;
                }

                $.ajax({
                    url: 'https://app-api.bzw315.com/api/WebHelper/SendTSms/',
                    type: 'post',
                    data: JSON.stringify({ mobile: formData.mobile, code: formData.code }),
                    contentType: 'application/json',
                    dataType: 'json',
                    beforeSend: function () {
                        Utils.setEleText($btnGetCaptcha, '短信发送中...');
                    }, success: function (data) {
                        if (data.result.success) {
                            Utils.alertCommon('验证码已发送到您的手机！');
                            that.$container.find(that.defaults.$imgCaptchaMain).hide();
                            countdownBegins();
                        } else {
                            isAgainSend = true;
                            Utils.alertCommon(data.result ? data.result.message : '短信发送异常');
                            countdownOver();
                        }
                    }, error: function (ex) {
                        isAgainSend = true;
                    }
                });
            }

            //------ 倒计时开始
            function countdownBegins() {
                if (captchaWaitTime === 0) {
                    countdownOver();
                } else {
                    Utils.setEleText($btnGetCaptcha, '重新发送(' + captchaWaitTime + ')').prop('disabled', true).unbind('click');
                    captchaWaitTime--;
                    timeObj = setTimeout(function () { countdownBegins(); }, 1000);
                }
            }

            //------ 倒计时结束
            function countdownOver() {
                clearTimeout(timeObj);
                captchaWaitTime = parseInt(that.defaults.captchaWaitTime);

                Utils.setEleText($btnGetCaptcha, '重新发送').prop('disabled', false).bind('click', function () {
                    var mobile = $.trim($mobile.val());
                    if (!Utils.dataRegexCheck('mobilePhone', mobile)) {
                        $mobile.focus().addClass('zhaobiao-focus');
                        return false;
                    } else {
                        $mobile.removeClass('zhaobiao-focus');
                        that.$container.find(that.defaults.$imgCaptcha).click();
                        that.$container.find(that.defaults.$imgCaptchaMain).show();
                    }
                });
            }
        },

        /**
         * 发布招标
         */
        submit: function () {
            var that = this,
                isAllowSubmit = true;

            var submitAlertMsg = {
                notAllowSubmit: '请不要重复提交，感谢您的理解！',
                success: '恭喜您，申请成功！\n您申请的联系电话为{mobile}，保障网的客服将会在一个工作日之内与您取得联系！',
                fail: '提交发生异常，请稍后重试！'
            };
            if (!that.defaults.isUseCaptcha) {
                submitAlertMsg = { notAllowSubmit: '您已经申请过了,请耐心等待客服电话！', success: '申请成功', fail: '申请失败' };
            }

            that.$container.find(that.defaults.$btnSubmit).click(function () {
                var that = this;
                if (!isAllowSubmit) {
                    Utils.alertCommon(submitAlertMsg.notAllowSubmit);
                    return false;
                }
                isAllowSubmit = false;

                var formData = getFormData();
                if (!formData) { return false; }

                verifyAgreestPrivacy(function (result) {
                    if (result) {
                        ajaxHandle.call(that, formData);
                    }
                });
            });

            /**
             * 验证是否同意隐私政策
             * @param {function} callback 回调函数 callback(Boolean) false：不同意；true：默认状态，可提交
             */
            function verifyAgreestPrivacy(callback) {
                if (!'function' === typeof (callback)) {
                    callback(true);
                    return;
                }

                // 是否同意隐私政策
                var $agreestPrivacy = that.$container.find(that.defaults.formEle.$agreestPrivacy);
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

            // 获取表单数据
            function getFormData() {
                // 称呼
                var $applyuser = that.$container.find(that.defaults.formEle.$applyuser),
                    applyUser = '';
                if ($applyuser.length > 0) {
                    applyUser = $.trim($applyuser.val());
                    if (!applyUser) {
                        $applyuser.val('').focus().addClass('zhaobiao-focus');
                        isAllowSubmit = true;
                        return false;
                    } else {
                        $applyuser.removeClass('zhaobiao-focus');
                    }
                }

                // 手机
                var $mobile = that.$container.find(that.defaults.formEle.$mobile),
                    mobile = '';
                if ($mobile.length > 0) {
                    mobile = $.trim($mobile.val());
                    if (!mobile || !Utils.dataRegexCheck('mobilePhone', mobile)) {
                        $mobile.focus().addClass('zhaobiao-focus');
                        isAllowSubmit = true;
                        return false;
                    } else {
                        $mobile.removeClass('zhaobiao-focus');
                    }
                }

                // 手机验证码
                var $mobileCaptcha = that.$container.find(that.defaults.formEle.$mobileCaptcha),
                    mobileCaptcha = '',
                    isCheckMobileCaptcha = false;
                if ($mobileCaptcha.length > 0) {
                    isCheckMobileCaptcha = true;
                    mobileCaptcha = $.trim($mobileCaptcha.val());
                    if (!mobileCaptcha || mobileCaptcha.length !== 6) {
                        $mobileCaptcha.val('').focus().addClass('zhaobiao-focus');
                        isAllowSubmit = true;
                        return false;
                    } else {
                        $mobileCaptcha.removeClass('zhaobiao-focus');
                    }
                }

                // 装修预算
                var $decorateBudget = that.$container.find(that.defaults.formEle.$decorateBudget),
                    decoratebudget = '';
                if ($decorateBudget.length > 0) {
                    var result_Decoratebudget = Utils.getEleSelectValue($decorateBudget, ['0']);
                    if (result_Decoratebudget && result_Decoratebudget.length > 0) {
                        decoratebudget = result_Decoratebudget.join('');
                    }
                }

                // 装修方式
                var $decorateTypeway = that.$container.find(that.defaults.formEle.$decorateTypeway),
                    decorateTypeway = '';
                if ($decorateTypeway.length > 0) {
                    var result_DecorateTypeway = Utils.getEleSelectValue($decorateTypeway);
                    if (result_DecorateTypeway && result_DecorateTypeway.length > 0) {
                        decorateTypeway = result_DecorateTypeway.join('');
                    }
                }

                // 房屋类型
                var $houseType = that.$container.find(that.defaults.formEle.$houseType),
                    houseType = '';
                if ($houseType.length > 0) {
                    var result_HouseType = Utils.getEleSelectValue($houseType, ['0']);
                    if (result_HouseType && result_HouseType.length > 0) {
                        houseType = result_HouseType.join('');
                    }
                }

                // 房屋面积
                var $houseArea = that.$container.find(that.defaults.formEle.$houseArea),
                    houseArea = '';
                if ($houseArea.length > 0) {
                    houseArea = $.trim($houseArea.val());
                    if (houseArea && !Utils.dataRegexCheck('area', houseArea)) {
                        $houseArea.val('').focus().addClass('zhaobiao-focus');
                        return false;
                    } else {
                        $houseArea.removeClass('zhaobiao-focus');
                    }
                }

                // 是否要求公司
                var $isSafeEnterprise = that.$container.find(that.defaults.formEle.$isSafeEnterprise),
                    isSafeEnterprise = 0;
                if ($isSafeEnterprise.length > 0) {
                    var result_IsSafeEnterprise = Utils.getEleSelectValue($isSafeEnterprise);
                    if (result_IsSafeEnterprise && result_IsSafeEnterprise.length > 0) {
                        isSafeEnterprise = result_IsSafeEnterprise.join('');
                    }
                }

                // 是否要求风水服务
                var $fengshuiService = that.$container.find(that.defaults.formEle.$fengshuiService),
                    fengshuiService = '',
                    needfs = 0;
                if ($fengshuiService.length > 0) {
                    var result_FengshuiService = Utils.getEleSelectValue($fengshuiService);
                    if (result_FengshuiService && result_FengshuiService.length > 0) {
                        fengshuiService = '需要预约风水上门诊断服务；';
                        needfs = 1;
                    }
                }

                // 小区地址
                var $address = that.$container.find(that.defaults.formEle.$address),
                    address = '';
                if ($address.length > 0) {
                    address = $.trim($address.val());
                }

                // 建发保险险种
                var $insuranceType = that.$container.find(that.defaults.formEle.$insuranceType),
                    insuranceType = '';
                if ($insuranceType.length > 0) {
                    var result_InsuranceType = Utils.getEleSelectValue($insuranceType, ['0']);
                    if (result_InsuranceType && result_InsuranceType.length > 0) {
                        insuranceType = result_InsuranceType.join('') + '；';
                    }
                }

                // 备注
                var $remark = that.$container.find(that.defaults.formEle.$remark),
                    remark = '';
                if ($remark.length > 0) {
                    remark = $.trim($remark.val());
                }

                // 城市选择
                var $provinceId = that.$container.find(that.defaults.formEle.$provinceId),
                    provinceId = 0;
                if ($provinceId.length > 0 && parseInt($provinceId.val()) > 1) {
                    provinceId = $provinceId.val();
                }
                var $cityId = that.$container.find(that.defaults.formEle.$cityId),
                    cityId = 0;
                if ($cityId.length > 0 && parseInt($cityId.val()) > 1) {
                    cityId = $cityId.val();
                }
                var $areaId = that.$container.find(that.defaults.formEle.$areaId),
                    areaId = 0;
                if ($areaId.length > 0 && parseInt($areaId.val()) > 1) {
                    areaId = $areaId.val();
                }

                return {
                    name: applyUser,
                    mobile: mobile,
                    captcha: mobileCaptcha,

                    classid: that.defaults.classId,
                    sourceadminid: that.defaults.sourceAdminId,

                    decoratebudget: decoratebudget,
                    decoratetypeway: decorateTypeway,
                    address: address,
                    housetype: houseType,
                    housearea: houseArea,
                    remark: fengshuiService + insuranceType + remark,
                    needfs: needfs,
                    issafeenterprise: isSafeEnterprise,

                    provinceID: provinceId,
                    cityID: cityId,
                    areaID: areaId,

                    ischeck: isCheckMobileCaptcha
                };
            }

            /**
             * 提交数据
             * 
             * @param {object} formData 表单数据
             */
            function ajaxHandle(formData) {
                var $btnSubmit = $(this),
                    btnDefaultText = Utils.getEleText($btnSubmit);

                var ajaxOptions = {
                    url: 'https://app-api.bzw315.com/api/huodong/eorders/',
                    data: JSON.stringify({ data: crypt(JSON.stringify(formData))}),
                    contentType: 'application/json'
                };
                if (!that.defaults.isUseCaptcha) {
                    ajaxOptions = {
                        url: 'https://app-api.bzw315.com/api/huodong/eordersnocode/',
                        data: JSON.stringify({
                            data: crypt(JSON.stringify({
                                name: formData.name,
                                mobile: formData.mobile,
                                classId: that.defaults.classId,
                                sourceadminid: that.defaults.sourceAdminId,
                                provinceid: formData.provinceID,
                                cityid: formData.cityID
                            }))
                        }),
                        contentType: 'application/json'
                    };
                }

                if (that.defaults.isDebug) {
                    Utils.setEleText($btnSubmit, '提交中...');

                    setTimeout(function () {
                        console.log('最终提交的招标表单数据：', ajaxOptions);
                        var $btnCloseLayer = $(document).find(that.defaults.$btnCloseLayer.selector);
                        if ($btnCloseLayer.length > 0) {
                            $btnCloseLayer.click();
                        }
                        Utils.alertCommon(submitAlertMsg.success.replace('{mobile}', formData.mobile));
                        initForm();
                        Utils.setEleText($btnSubmit, btnDefaultText);
                    }, 1200);
                    return;
                }

                $.ajax({
                    url: ajaxOptions.url,
                    type: 'post',
                    contentType: ajaxOptions.contentType,
                    dataType: 'json',
                    data: ajaxOptions.data,
                    beforeSend: function () {
                        Utils.setEleText($btnSubmit, '提交中...');
                    },
                    success: function (data) {
                        successHandle(data, formData.mobile, $btnSubmit, btnDefaultText);
                    }, error: function (ex) {
                        initForm();
                        isAllowSubmit = true;
                        Utils.setEleText($btnSubmit, btnDefaultText);
                        Utils.alertCommon(submitAlertMsg.fail);
                    }
                });
            }

            /**
             * 成功处理方法
             * 
             * @param {any} data 请求成功后返回的数据信息
             * @param {number} mobile 提交的手机号码
             * @param {any} $btnSubmit 提交按钮
             * @param {any} btnDefaultText 提交按钮默认文字信息
             */
            function successHandle(data, mobile, $btnSubmit, btnDefaultText) {
                if (data.result.success) {
                    var $btnCloseLayer = $(document).find(that.defaults.$btnCloseLayer.selector);
                    if ($btnCloseLayer.length > 0) {
                        $btnCloseLayer.click();
                    }
                    Utils.alertCommon(submitAlertMsg.success.replace('{mobile}', mobile));
                } else {
                    isAllowSubmit = true;
                    Utils.alertCommon((data.result && data.result.message) || submitAlertMsg.fail);
                }
                initForm();
                Utils.setEleText($btnSubmit, btnDefaultText);
            }

            /**
             * 表单重置为初始状态
             */
            function initForm() {
                that.$container.find('input[type="text"]').val('');
                that.$container.find('input[type="checkbox"]').prop('checked', false);
                that.$container.find('textarea').val('');
            }

            // 加密
            function crypt(da) {
                var k = '6bdc6d8d3b036dc4c30e9ceb99cdcb0e2f572ea963fd81c57bf603a3ff2c86f4' + getTime(new Date());
                var aseKey = CryptoJS.MD5(k).toString();
                var encrypt = CryptoJS.AES.encrypt(da, CryptoJS.enc.Utf8.parse(aseKey), {
                    mode: CryptoJS.mode.ECB,
                    padding: CryptoJS.pad.Pkcs7
                }).toString();
                return encrypt;
            }
            // 封装一个获取当前年月日的函数getTime
            function getTime(date) {
                var y = date.getFullYear() //年
                var m = date.getMonth() + 1  //月，月是从0开始的所以+1
                var d = date.getDate() //日
                m = m < 10 ? "0" + m : m //小于10补0
                d = d < 10 ? "0" + d : d //小于10补0
                return y + "-" + m + "-" + d; //返回时间形式yyyy-mm-dd
            }
        }
    };

    return function (containerName) {
        return new TenderApply(containerName);
    }
}));