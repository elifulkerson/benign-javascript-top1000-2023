(function ($) {

    var methods = {
        init: function (options) {
            var _default = {};
            //mainbootstrapaddress -- >  attr on tag
            //rtlbootstrapaddress -- >  attr on tag
            //corestyleaddress -- >  attr on tag
            //optgetoutbootstrap  -- >  attr on tag
            //optloginlink  --> attr on tag

            _default.optcorestyleaddress = ''; //http://www.tebyan.net/css/NewCoreStyle.css
            _default.optmainbootstrapaddress = '';//http://www.tebyan.net/js/ts/jquery/bootstrap/3.3.7/css/bootstrap.min.css?A=1
            _default.optrtlbootstrapaddress = '';//http://www.tebyan.net/js/ts/jquery/bootstrap/3.3.7/css/bootstrap-rtl.min.css?A=2
            _default.optgetoutbootstrap = false;
            _default.optlogoutlink = "https://myaccount.tebyan.net/Logout?retUrl=";
            _default.opteditaccountlink = "https://myaccount.tebyan.net/Profile?retUrl=";
            _default.optloginuserlink = "https://myaccount.tebyan.net/Login?retUrl=";
            _default.optloginlink = "";
            _default.optchangepasslink = "https://myaccount.tebyan.net/ChangePassword?retUrl=";
            _default.optregisterlink = "https://myaccount.tebyan.net/RegisterNew?retUrl=";
            _default.registerusertxt = "عضویت";
            _default.oldloginusertxt = "ورود کاربر";
            _default.oldlogoutusertxt = "خروج";
            _default.oldloginwelcometxt = "به تبیان خوش آمدید";
            _default.oldbtnchangepasstext = "تغییر رمز عبور";
            _default.oldbtneditaccounttext = "ویرایش";
            _default.TwiceLoaded = false;


            var option = $.extend(true, _default, options);
            return this.each(function () {
                var _this = $(this);
                $(this).data('CheckLoginUser', option);
                _this.CheckLoginUser('loadPlugin');
            });
        },
        CallNeededFiles: function () {
            var _this = $(this);
            var data = _this.data('CheckLoginUser');

            /*AddBootstrap*/
            if (!($.isEmptyObject(_this.attr('min-optgetoutbootstrap')))) {
                data.optgetoutbootstrap = ($.trim(_this.attr('optgetoutbootstrap'))).toLowerCase() == 'true' ? true : false;
            }

            if (data.optgetoutbootstrap) {
                if (!($.isEmptyObject(_this.attr('mainbootstrapaddress'))))
                    data.optmainbootstrapaddress = $.trim(_this.attr('mainbootstrapaddress'));

                if (!($.isEmptyObject(_this.attr('rtlbootstrapaddress'))))
                    data.optrtlbootstrapaddress = $.trim(_this.attr('rtlbootstrapaddress'));
            }

            if (!$('html link[href*="bootstrap"]').length) {
                $('head').prepend('<link rel="stylesheet" type="text/css" href="' + data.optmainbootstrapaddress + '" />' +
                    '<link rel="stylesheet" type="text/css" href="' + data.optrtlbootstrapaddress + '" />');
            }

            /*AddCoreStyle*/
            if (!($.isEmptyObject(_this.attr('optcorestyleaddress'))))
                data.optcorestyleaddress = $.trim(_this.attr('optcorestyleaddress'));

            if (!$('html link[href*="NewCoreStyle"]').length) {
                $('head').prepend('<link rel="stylesheet" type="text/css" href="' + data.optcorestyleaddress + '" />');
            }

            /*oldbtneditaccounttext*/
            if (!($.isEmptyObject(_this.attr('oldbtneditaccounttext'))))
                data.oldbtneditaccounttext = $.trim(_this.attr('oldbtneditaccounttext'));
            /*oldbtnchangepasstext*/
            if (!($.isEmptyObject(_this.attr('oldbtnchangepasstext'))))
                data.oldbtnchangepasstext = $.trim(_this.attr('oldbtnchangepasstext'));
            /*registerusertxt*/
            if (!($.isEmptyObject(_this.attr('registerusertxt'))))
                data.registerusertxt = $.trim(_this.attr('registerusertxt'));
            /*oldloginusertxt*/
            if (!($.isEmptyObject(_this.attr('oldloginusertxt'))))
                data.oldloginusertxt = $.trim(_this.attr('oldloginusertxt'));
            /*oldlogoutusertxt*/
            if (!($.isEmptyObject(_this.attr('oldlogoutusertxt'))))
                data.oldlogoutusertxt = $.trim(_this.attr('oldlogoutusertxt'));
            /*oldloginwelcometxt*/
            if (!($.isEmptyObject(_this.attr('oldloginwelcometxt'))))
                data.oldloginwelcometxt = $.trim(_this.attr('oldloginwelcometxt'));
            /*optchangepasslink*/
            if (!($.isEmptyObject(_this.attr('optchangepasslink'))))
                data.optchangepasslink = $.trim(_this.attr('optchangepasslink'));
            /*optregisterlink*/
            if (!($.isEmptyObject(_this.attr('optregisterlink'))))
                data.optregisterlink = $.trim(_this.attr('optregisterlink'));
            /*Addloginlink*/
            if (!($.isEmptyObject(_this.attr('optloginlink'))))
                data.optloginlink = $.trim(_this.attr('optloginlink'));
            /*optloginuserlink*/
            if (!($.isEmptyObject(_this.attr('optloginuserlink'))))
                data.optloginuserlink = $.trim(_this.attr('optloginuserlink'));
            /*Addlogoutlink*/
            if (!($.isEmptyObject(_this.attr('optlogoutlink'))))
                data.optlogoutlink = $.trim(_this.attr('optlogoutlink'));

            /*Addeditaccountlink*/
            if (!($.isEmptyObject(_this.attr('opteditaccountlink'))))
                data.opteditaccountlink = $.trim(_this.attr('opteditaccountlink'));

            _this.CheckLoginUser('CheckLoginTebyan');

        },
        CheckLoginTebyan: function () {
            var _this = $(this);
            var MessagePoll = '';
            var data = _this.data('CheckLoginUser');
            var TypeProtocol = '';
            function CheckProtocol() {
                if ((document.location.protocol).search('https') >= 0)
                    TypeProtocol = 'https://';
                else if ((document.location.protocol).search('http') >= 0 || (document.location.protocol).search('localhost') >= 0 || (document.location.protocol).search('http') < 0)
                    TypeProtocol = 'http://';
                return TypeProtocol;
            }
            //TypeProtocol = CheckProtocol();
            TypeProtocol = 'https://';
            var WebserviceUrl = TypeProtocol + 'api.tebyan.net/api/Comment/GetUserData';
            if (!$('.js_UserDataLogined').length && !data.TwiceLoaded) {
                CrossGet(WebserviceUrl, {}, function (data) {
                    var UserNameLogined = '';
                    var ImageLogined = '';
                    var FullnameLogined = '';
                    if (!data.GetUserData) {
                        data.TwiceData = data.Username;
                        UserNameLogined = data.Username;
                        ImageLogined = data.Image;
                        FullnameLogined = data.Fullname;
                    }
                    else {
                        UserNameLogined = '';
                    }
                    if (!$('.js_UserDataLogined').length)
                        $('body').append('<span class="js_UserDataLogined" UserName="' + UserNameLogined + '" Image="' + ImageLogined + '" Fullname="' + FullnameLogined + '" style="display:none"></span>');
                    _this.CheckLoginUser('CallLogin');
                }, null, false);
            }
            else if (!$('.js_UserDataLogined').length && data.TwiceLoaded) {
                _this.CheckLoginUser('CallLogin');
            }
        },
        CallLogin: function () {
            var _this = $(this);
            var data = _this.data('CheckLoginUser');

            function Checklogin() {
                var TUserNameLogined = $.trim($('.js_UserDataLogined').attr('UserName'));
                var TImageLogined = $.trim($('.js_UserDataLogined').attr('Image').replace(/big/gi, "small"));
                var TFullnameLogined = $.trim($('.js_UserDataLogined').attr('Fullname'));

                _this.empty();
                var Logindata = '';
                var UrlPath = (window.location.href);
                if ($('.js_GeneralHeader').length) {
                    if (TUserNameLogined !== '') {
                        Logindata = '<figure class="CircleIcon LoginedFigure relative after pull-left mr10 mr-3">' +
                            '<img class="LoginedImage radius100p sborder border1 trans400 block ofh" src="' + TImageLogined + '" width="33" height="33" title="' + TFullnameLogined + '" alt="' + TFullnameLogined + '" />' +
                            '<figcaption>عضويت ' + TFullnameLogined + '</figcaption>' +
                            '</figure>' +
                            '<span class="LoginedUsername block dropdown-toggle pull-left cFFF pt5 textcut pointer" id="Logined" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">' +
                            '<i class="fa fa-caret-down relative ml5"></i>' + TFullnameLogined +
                            '</span>' +
                            '<ul class="dropdown-menu after" aria-labelledby="Logined">' +
                            //'<li>' +
                            //'<a href="https://film.tebyan.net/film/Channel/' + TUserNameLogined + '" title="کانال فیلم من" target="_blank">کانال فیلم من</a>' +
                            //'</li>' +
                            '<li>' +
                            '<a href="https://www.tebyan.net/newindex.aspx?pid=250323" title="تبیان من" target="_blank">تبیان من</a>' +
                            '</li>' +
                            //'<li>' +
                            //'<a href="https://file.tebyan.net" title="فایلهای من" target="_blank">فایلهای من</a>' +
                            //'</li>' +
                            //'<li>' +
                            //'<a href="https://library.tebyan.net/fa/Account/MyLibrary" title="کتابخانه من" target="_blank">کتابخانه من</a>' +
                            //'</li>' +
                            '<li>' +
                            '<a href="https://tebyan.net/newindex.aspx?pid=236000" title="پنل پیامکی" target="_blank">پنل پیامکی</a>' +
                            '</li>' +
                            '<li>' +
                            '<a href="https://teblog.tebyan.net" title="وبلاگ های من" target="_blank">وبلاگ های من</a>' +
                            '</li>' +
                            '<li role="separator" class="divider"></li>' +
                            '<li>' +
                            '<a class="InfoUser" href="' + data.opteditaccountlink + encodeURI(UrlPath) + '" title="اطلاعات کاربری" target="_blank">اطلاعات کاربری</a>' +
                            '</li>' +
                            '<li>' +
                            '<a class="LogoutUser" href="' + data.optlogoutlink + encodeURI(UrlPath) + '" title="خروج">خروج</a>' +
                            '</li>' +
                            '</ul>';

                        _this.append(Logindata);
                        _this.fadeIn();
                    }
                    else {
                        Logindata = '<div class="js_NotLoginedUser NotLoginedUser pull-left pointer">' +
                            '<i class="CircleIcon fa fa-sign-in dropdown-toggle pointer radius100p rounded-circle sborder border1 after relative trans400 pull-left"></i>' +
                            '<span class="LoginedUsername block dropdown-toggle pull-left cFFF pt5 textcut pointer">' +
                            '<i class="fa fa-caret-down relative ml5"></i>' +
                            '<a href="' + data.optregisterlink + encodeURI(UrlPath) + '" target="_blank" class="trans400" title="' + data.registerusertxt + '">' + data.registerusertxt + '</a>' +
                            ' / ' +
                            '<a href="' + data.optloginuserlink + encodeURI(UrlPath) + '" class="trans400" title="' + data.oldloginusertxt + '">' + data.oldloginusertxt + '</a>' +
                            '</span>' +
                            '</div>';
                        _this.append(Logindata);
                        _this.fadeIn();
                    }
                }
                else if (!$('.js_GeneralHeader').length) {
                    if (_this.hasClass('js_MinHeader')) {
                        if (TUserNameLogined !== '') {
                            Logindata = '<div class="js_PersonalInfoBox PersonalInfoBox js_shy w170 t0 b0 r0 relative ">' +
                                '<div class="js_InsidePIB InsidePIB radius2 prl10 fr pointer w140 fl">' +
                                '<div class="Triangle DownTriangleBlog absolute"></div>' +
                                '<img src="' + TImageLogined + '" class="PersonalImageIco radius2 fr over-hidden mr10" width="24" height="24" title="' + TFullnameLogined + '" alt="' + TFullnameLogined + '">' +
                                '<div class="LoginedPerson h20 ofh lh1-5 cFFF over-hidden word-break fr">' +
                                TFullnameLogined +
                                '</div>' +
                                '</div>' +
                                '<div class="js_PopupPersonalBlog PopupPersonalBlog absolute none l0">' +
                                '<div class="Triangle DTrianglePPBlog absolute"></div>' +
                                '<div class="Triangle WTrianglePPBlog absolute"></div>' +
                                '<div class="ContentPPB bwhite">' +
                                '<img src="' + TImageLogined + '" class="PhotoPPB fr" width="96" height="96" title="' + TFullnameLogined + '" alt="' + TFullnameLogined + '">' +
                                '<div class="InfoPPB fl">' +
                                '<span class="NamePPB w100p block fl bold tr">' +
                                TFullnameLogined +
                                '</span>' +
                                '<span class="MailPPB w100p block fl tr">' +
                                TUserNameLogined +
                                '</span>' +
                                '<div class="w100p cb tc dr">' +
                                '<a class="btn inlineblock radius2 trans400 ML5" href="' + data.opteditaccountlink + encodeURI(UrlPath) + '" rel="me" title="' + data.oldbtneditaccounttext + '" target="_blank">' + data.oldbtneditaccounttext + '</a>' +
                                '<a class="btn inlineblock radius2 trans400" href="' + data.optchangepasslink + encodeURI(UrlPath) + '" rel="me" title="' + data.oldbtnchangepasstext + '" target="_blank">' + data.oldbtnchangepasstext + '</a>' +
                                '</div>' +
                                '</div>' +
                                '</div>' +
                                '<a href="' + data.optlogoutlink + encodeURI(UrlPath) + '" class="btn radius2 inlineblock fl m10 trans400" rel="license" title="' + data.oldlogoutusertxt + '">' + data.oldlogoutusertxt + '</a>' +
                                '</div>' +
                                '</div>';
                            _this.append(Logindata);
                            _this.fadeIn();
                        }
                        else {
                            Logindata = '<a class="btnLogin relative js_Login button small gray bold" href="' + data.optloginuserlink + encodeURI(UrlPath) + '" rel="license" title="' + data.oldloginusertxt + '" target="_blank">' + data.oldloginusertxt + '</a>';
                            _this.append(Logindata);
                            _this.fadeIn();
                        }
                    }
                    else {
                        if (TUserNameLogined !== '') {
                            Logindata = '<div class="userinfo" style="display:inline">' +
                                '<span class="NameUI">' +
                                TFullnameLogined + ' ' +
                                '</span> <span class="MessageUI">' + data.oldloginwelcometxt + '</span><span>&nbsp;|&nbsp;</span> <a href="' + data.optlogoutlink + encodeURI(UrlPath) + '" title="' + data.oldlogoutusertxt + '">' + data.oldlogoutusertxt + '</a>' +
                                '</div>';
                            _this.append(Logindata);
                            _this.fadeIn();
                        }
                        else {
                            Logindata = '<div class="LogIn" style="display:inline">' +
                                '<span class="LoginIco"></span>' +
                                '<a href="' + data.optloginuserlink + encodeURI(UrlPath) + '" target="_blank" title="' + data.oldloginusertxt + '">' + data.oldloginusertxt + '</a>' +
                                '</div>';
                            _this.append(Logindata);
                            _this.fadeIn();
                        }
                    }
                }

                if ($('.js_CompetitionBox').length) {
                    /*CallOverlay*/
                    function CallAdminOverlay(obj, status, position) {
                        if (status) {
                            obj.append('<div class="js_AdminOverLay AdminOverLay ' + position + ' t0 r0 b0 l0">' +
                                '<div class="LoadingOverlay ' + position + '"></div>' +
                                '</div>');
                        }
                        else {
                            obj.find('.js_AdminOverLay').remove();
                        }
                    }
                    /*CallCompetion*/
                    if (!$.isEmptyObject($('.js_OuterGeneralPage').attr('opinioncode'))) {
                        var SurveyID = parseInt($('.js_OuterGeneralPage').attr('opinioncode'));
                        var dataCompetion_1 = parseInt($('.js_OuterGeneralPage').attr('data-competition-1'));
                        var GetCaptchaCode = '';
                        function CallSurvey(obj, SurveyID) {
                            obj.empty();
                            CallAdminOverlay(obj, true, 'absolute');
                            CrossGet('https://api.tebyan.net/api/Polling/GetPollFull?ID=' + SurveyID, {}, function (data) {
                                if (data.data.questions != null) {
                                    MessagePoll = data.data.MessageID;
                                    if (MessagePoll == 102) {
                                        MessagePoll = "در خواست شما ثبت گردید .";
                                    }
                                    else if (MessagePoll == 105) {
                                        MessagePoll = "مشخصات شما ثبت گردید .";
                                    }
                                    else if (MessagePoll == 154) {
                                        MessagePoll = "گاربر گرامی رای شما ثبت گردید ، در صورتیکه مجددا در نظرسنجی شرکت کرده اید ، جواب شما جایگزین جواب قبلی شما شده است .";
                                    }
                                    else if (MessagePoll == 312) {
                                        MessagePoll = "کاربر گرامی رای شما ثبت شد ، از شرکت شما در نظرسنجی متشکریم .";
                                    }
                                    else if (MessagePoll == 369) {
                                        MessagePoll = "کاربر گرامی پاسخ شما ثبت شد .";
                                    }
                                    var UserLogined = $.trim($('.js_UserDataLogined').attr('UserName'));
                                    var Data = data.data.questions[0];
                                    var ItemData = '';

                                    /*Start-AfterAdd*/
                                    for (var i = 0; i < Data.Choices.length; i++) {
                                        ItemData += '<div class="radio w100p dtable">' +
                                            '<label class="LiteText">' +
                                            '<input class="Radio relative" type="radio" name="optradio" qid="' + Data.QuestionID + '" value="' + Data.Choices[i].ChoiceID + '"/>' +
                                            Data.Choices[i].Text +
                                            '</label>' +
                                            '</div>';
                                    }
                                    obj.append('<div class="BoldText pull-right" > سوال :</div > ' +
                                        '<h5 class="js_BoldText BoldText Question ofh text-justify">' + Data.Title + '</h5>' +
                                        '<div class="js_ReplayQuestion js_ItemPoll ReplayQuestion" dir="ltr">' +
                                        ItemData +
                                        '</div>' +
                                        '<div class="js_ItemPoll js_CompetitionBtn js_ShyNotSelectItem BtnRow text-center">' +
                                        '<a href= "javascript:void(0)" class="js_SubmitReply SubmitReply ItemBtnRow btn btn-default btn-lg trans400 active"> ثبت پاسخ</a>' +
                                        '</div>');
                                    if (UserLogined === '') {
                                        var CaptchaCode = $('<div class="js_ItemPoll CaptchaRow w100p clearfix text-center">' +
                                            '<figure class="js_CaptchaParent inlineblock">' +
                                            '<img class="ImageCaptcha dtable m0a img-responsive" src="https://api.tebyan.net/api/Captcha/Index?Key=Polling" />' +
                                            '</figure>' +
                                            '<i class="js_RefreshCaptcha RefreshCaptcha fa fa-refresh pointer inlineblock relative trans400"></i>' +
                                            '<div class="EnterCaptchaRow w100p clearfix">' +
                                            '<input type="text" class="js_GetCaptcha GetCaptcha w100p sborder border1 dl tc" maxlength="3" placeholder="کد بالا را وارد نمایید"/>' +
                                            '</div>' +
                                            '</div>');
                                        CaptchaCode.insertBefore('.js_CompetitionBtn');
                                        $('.js_CompetionStructer').addClass('HasCaptcha');

                                    }
                                    else {
                                        $('.js_CompetionStructer').addClass('HasLogined');
                                    }
                                    CrossGet("https://api.tebyan.net/api/TemplatePageBox/GetBoxCross?BoxID=" + dataCompetion_1 + "&PageSize=1&PageIndex=0", {}, function (data) {
                                        if (data != null) {
                                            $("#datacompetition").tmpl(data.Items).appendTo($(".js_ReplayQuestion"));
                                            CallScroll($(".js_ReplayQuestion"));
                                        }
                                        else {
                                            CallScroll($(".js_ReplayQuestion"));
                                        }
                                    }, null, false);
                                    CallAdminOverlay(obj, false, 'absolute');
                                    /*End-AfterAdd*/
                                }
                                else {
                                    CallAdminOverlay(obj, false, 'absolute');
                                    $('.js_CompetionStructer').empty().append('<div class="js_SuccessMessage SuccessMessage alert alert-success fade in none absolutecentervh text-center">کاربر گرامی ، در حال حاضر مسابقه یا نظر سنجی وجود ندارد</div>').find('.js_SuccessMessage').fadeTo(1000, 1);

                                }

                            }, null, false);

                        }
                        var Survey = {
                            Target: $('.js_CompetionStructer'),
                            ID: SurveyID
                        };
                        CallSurvey(Survey.Target, Survey.ID);
                    }
                }

            }
            var CheckUserName = setInterval(function () {
                Checklogin();
                clearInterval(CheckUserName);
            }, 1000);
        },
        loadPlugin: function () {
            this.CheckLoginUser('CallNeededFiles');
        }
    };

    $.fn.CheckLoginUser = function (option) {
        if (methods[option]) {
            return methods[option].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof option === 'object' || !option) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + option + ' does not exist on jQuery.CheckLoginUser');
        }
    };

})(jQuery);