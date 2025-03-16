if (typeof (index1024_showdate) == 'undefined') index1024_showdate = '';
if (typeof (User_index1024_showdate) == 'undefined') User_index1024_showdate = '';
var qs = (function (a) {
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=');
        if (p.length != 2) continue;
        b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
})(window.location.search.substr(1).split('&'));
function GetDateObject(_date) {
    if (_date == null) return null;
    var _date = _date.replace(/\/Date\((.*?)\)\//gi, '$1');
    var date = new Date();
    date.setTime(_date);
    return date;
}
function GetDate(_date) {
    if (_date == null) return null;
    var _date = _date.replace(/\/Date\((.*?)\)\//gi, '$1');
    var date = new Date();
    date.setTime(_date);
    _date = date.getFullYear() + '-' + (parseInt(date.getMonth()) + 1) + '-' + date.getDate();
    return _date + ' ' + date.getHours() + ':' + date.getMinutes();
}
function SizeToString(size) {
    size = parseInt(size);
    if (size > 1024 * 1024 * 1024) return Math.round(size / (1024 * 1024 * 1024)) + "GB";
    if (size > 1024 * 1024) return Math.round(size / (1024 * 1024)) + "MB";
    if (size > 1024) return Math.round(size / 1024) + "KB";
    return size + "B";
}

function isNullOrEmpty(p) {
    return ((p == undefined) || (p == '') || (p == null));
}
function getThisOrAlt(p, alt) {
    if (isNullOrEmpty(alt)) alt = '';
    return isNullOrEmpty(p) ? alt : p;
}
function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}
function setCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
}

function CheckMail(email) {
    if (email == '') return true;
    var filter = /^https?:\/\/(www\.|ftp\.)?([a-zA-Z0-9\-]{1,}\.)*([a-zA-Z0-9\-]{1,})\.([a-zA-Z0-9\-]{1,})+\/?.*$/;
    if (filter.test(email)) return true;
    else return false;
}

function CheckColor(value) {
    var filter = /^\#|#[0-9aAbBcCdDeEfF]{6}/;
    if (filter.test(value)) return true;
    else return false;
}
function CheckNumber(value) {
    var filter = /(^-?\d\d*\.\d*$)|(^-?\d\d*$)|(^-?\.\d\d*$)/;
    if (filter.test(String(value))) return true;
    else return false;
}
function PComma(nStr) {
    nStr += '';
    nStr = nStr.replace(/,/gi, '');
    x = nStr.split('.');
    x1 = x[0];
    x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}
function commafy(val1, val2) {
    val1 = val1.replace(/,/gi, '');
    val2 = val2.replace(/,/gi, '');
    var StringVal1 = String(val1).split("").reverse().join("")
        .replace(/(.{3}\B)/g, "$1,")
        .split("").reverse().join("");
    var StringVal2 = String(val2).split("").reverse().join("")
        .replace(/(.{3}\B)/g, "$1,")
        .split("").reverse().join("");
    $('.statistic').find('span[id$=Count]:first').html(StringVal1);
    $('.statistic').find('span[id$=Count]:last').html(StringVal2);
}

$(function () {
    $('.setcolor li').click(function () {
        var TColor = $(this).attr('ColorID');
        setCookie('tebclr', TColor, null);
        var os = (function () {
            var ua = navigator.userAgent.toLowerCase();
            return {
                isWin2K: /windows nt 5.0/.test(ua),
                isXP: /windows nt 5.1/.test(ua),
                isVista: /windows nt 6.0/.test(ua),
                isWin7: /windows nt 6.1/.test(ua)
            };
        }());
        if ((os.isXP) && ($.browser.msie) && (($.browser.version.substring(0, 1) == 7) || ($.browser.version.substring(0, 1) == 8))) {
            window.location.href = document.URL;
        }
        else {
            GoToServer('/WebServices/Page/PageService.asmx/SetSkin', { skin: TColor }, function (data) {
                if (data != null && data.d != null) {
                    if (onsuccess != null) { onsuccess(data.d.Items); }
                }
            }, null, true);
            LoadCssTebMain(GCN(TColor));
            if (typeof (LoadCssTebBox) == 'function') LoadCssTebBox(GCN(TColor));
            $('.mainwindow').removeClass().addClass('mainwindow' + ' ' + GCN(TColor));
        }

        var d = new Date();
        var d = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()).toString();

        if ($('.Languagebox .TitleLB').text().replace(/[\s\t\r\n]{1,}/gi, '') == 'Persian' && $('.centerheaderimage').length && $('.headerrl').length && $('.settingbox .setting').length && $('.centerfooterimage').length) {
            var now = new Date(CurrentDate.split('-')[0], CurrentDate.split('-')[1] - 1, CurrentDate.split('-')[2]);
            if (CCHeader == true) {
                var d = new Date(CurrentDate.split('-')[0], parseInt(CurrentDate.split('-')[1]) - 1, CurrentDate.split('-')[2]);
                var d = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()).toString();
                var stringdate = dateToYMD(now);

                $('.rpnlTHMV .headerrl,.settingbox .setting,.headerMV .centerheaderimage,.footerMV .centerfooterimage').removeAttr('style');
                $('.headerrl').attr('style', "background-image:url(https://img.tebyan.net/ts/1024/" + stringdate + "/" + GCN(TColor) + "/Header.png?seed1=" + d + ")");
                $('.settingbox .setting').attr('style', "background-image:url(https://img.tebyan.net/ts/1024/" + stringdate + "/" + GCN(TColor) + "/Header.png?seed1=" + d + ")");
                $('.centerheaderimage').attr('style', "background-image:url(https://img.tebyan.net/ts/1024/" + stringdate + "/" + GCN(TColor) + "/Header_Footer.jpg?seed1=" + d + ")");
                $('.centerfooterimage').attr('style', "background-image:url(https://img.tebyan.net/ts/1024/" + stringdate + "/" + GCN(TColor) + "/Header_Footer.jpg?seed1=" + d + ")");
            }
            else {
                $('.rpnlTHMV .headerrl,.settingbox .setting,.headerMV .centerheaderimage,.footerMV .centerfooterimage').removeAttr('style');
                $('.headerrl').attr('style', "background-image:url(https://img.tebyan.net/ts/1024/" + GCN(TColor) + "/Header.png?seed1=" + d + ")");
                $('.settingbox .setting').attr('style', "background-image:url(https://img.tebyan.net/ts/1024/" + GCN(TColor) + "/Header.png?seed1=" + d + ")");
                $('.centerheaderimage').attr('style', "background-image:url(https://img.tebyan.net/ts/1024/" + GCN(TColor) + "/Header_Footer.jpg?seed1=" + d + ")");
                $('.centerfooterimage').attr('style', "background-image:url(https://img.tebyan.net/ts/1024/" + GCN(TColor) + "/Header_Footer.jpg?seed1=" + d + ")");
            }
        }
    });

    if ($('.Languagebox .TitleLB').text().replace(/[\s\t\r\n]{1,}/gi, '') == 'Persian' && $('.centerheaderimage').length && $('.headerrl').length && $('.settingbox .setting').length && $('.centerfooterimage').length) {

        var now = new Date(CurrentDate.split('-')[0], CurrentDate.split('-')[1] - 1, CurrentDate.split('-')[2]);
        if (CCHeader == true) {
            var d = new Date(CurrentDate);
            var d = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()).toString();
            var stringdate = dateToYMD(now);
            var newurl = $('.headerMV .centerheaderimage').css('background-image').replace(/1024/gi, '1024/' + stringdate).replace(/Header_Footer.jpg/gi, 'Header_Footer.jpg?seed=' + d).replace(/http:\/\//, "https://");
            var __newurl = $('.footerMV .centerfooterimage').css('background-image').replace(/1024/gi, '1024/' + stringdate).replace(/Header_Footer.jpg/gi, 'Header_Footer.jpg?seed=' + d).replace(/http:\/\//, "https://");
            var _newurl = $('.rpnlTHMV .headerrl').css('background-image').replace(/1024/gi, '1024/' + stringdate).replace(/Header.png/gi, 'Header.png?seed=' + d).replace(/http:\/\//, "https://");
            var Settingnewurl = $('.settingbox .setting').css('background-image').replace(/1024/gi, '1024/' + stringdate).replace(/Header.png/gi, 'Header.png?seed=' + d).replace(/http:\/\//, "https://");

            $('.rpnlTHMV .headerrl,.headerMV .centerheaderimage,.settingbox .setting,.footerMV .centerfooterimage').removeAttr('style');
            $('.headerrl').attr('style', 'background-image:' + _newurl);
            $('.settingbox .setting').attr('style', 'background-image:' + Settingnewurl);
            $('.centerheaderimage').attr('style', 'background-image:' + newurl);
            $('.centerfooterimage').attr('style', 'background-image:' + __newurl);

        }
    }
    var StatusSetting = false;
    var StatusLanB = false;
    var StatusILogin = false;
    $('.InputLogin .InputVIL').focus(function () {
        $(this).addClass('SelectedVIL');
    }).blur(function () { $(this).removeClass('SelectedVIL');});

    $('.NextIco,.BackIco').live('click', function () {
        $(this).click(function () {
            stayOpen();
        });
    });
    $('.TabI .MainItems,.TabII .MainItems,.TabGallery .TabItems').click(function () {
        stayOpen();
    });
    function dateToYMD(date) {
        var d = date.getDate();
        var m = date.getMonth();
        var y = date.getFullYear();
        return '' + y + '-' + (m <= 9 ? '0' + m : m) + '-' + (d <= 9 ? '0' + d : d);
    }
    function stayOpen() {
        if ($('.subsetting').css('display') == 'block') {
            StatusSetting = true;
            $('.subsetting').show();
        }
        if ($('.ValuesLB').css('display') == 'block') {
            StatusLanB = true;
            $('.ValuesLB').show();
        }
        if ($('.InputLogin').css('display') == 'block') {
            StatusILogin = true;
            $('.InputLogin').show();
            setCookie('StatusILogin', StatusILogin, null);
        }
    }
    $('.setting').click(function () {
        $(this).siblings('.subsetting').slideToggle();
        StatusSetting = true;
    });
    $('.subsetting').click(function () {
        $(this).show();
        StatusSetting = true;
    });
    $('.ValuesLB').click(function () {
        $(this).show();
        StatusLanB = true;
    });


    $('body').click(function () {
        if (StatusSetting != true)
            $('.subsetting').slideUp();
        StatusSetting = false;
        if (StatusLanB != true)
            $('.ValuesLB').slideUp();
        StatusLanB = false;
        if (StatusILogin != true)
            $('.InputLogin').slideUp();
        StatusILogin = false;
        setCookie('StatusILogin', StatusILogin, null);
    });

    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            if (StatusSetting != true)
                $('.subsetting').slideUp();
            StatusSetting = false;
            if (StatusLanB != true)
                $('.ValuesLB').slideUp();
            StatusLanB = false;
            if (StatusILogin != true)
                $('.InputLogin').slideUp();
            StatusILogin = false;
            setCookie('StatusILogin', StatusILogin, null);
        }
    });

    if ($('.userinfo').css('display') == 'block')
        $('.InputLogin').slideUp();
    StatusILogin = false;
    var GetCookieLGN = getCookie('StatusILogin');
    if ((GetCookieLGN != '') && (GetCookieLGN == 'true')) $('.InputLogin').show();

    var StatusLanB = false;
    $('.TitleLB,.ArrowLB').click(function () {
        $(this).siblings('.ValuesLB').slideToggle();
        StatusLanB = true;
    });
    
    $('.CloseIL').click(function () {
        $('.InputLogin').slideUp();
        StatusILogin = false;
        setCookie('StatusILogin', StatusILogin, null);
    });
    $('.InputLogin').click(function () {
        $(this).show();
        StatusILogin = true;
    });

    $('.itemslb .rpnl').live('click', function () {
        $(this).find('.pointer').fadeIn().closest('.rpnl').addClass('activep').siblings('.rpnl').find('.pointer').fadeOut().closest('.rpnl').removeClass('activep');
    });
    var d = new Date();
    var d = Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()).toString();
    var patt = /"\)/gi;
    if ($('.centerheaderimage').length && $('.headerrl').length && $('.settingbox .setting').length && $('.centerfooterimage').length) {
        $('.centerheaderimage').css('background-image', $('.centerheaderimage').css('background-image').replace(patt, '?seed=' + d + '")').replace(/http:\/\//, "https://"));
        $('.centerfooterimage').css('background-image', $('.centerfooterimage').css('background-image').replace(patt, '?seed=' + d + '")').replace(/http:\/\//, "https://"));
        $('.headerrl').css('background-image', $('.headerrl').css('background-image').replace(patt, '?seed=' + d + '")').replace(/http:\/\//, "https://"));
        $('.settingbox .setting').css('background-image', $('.settingbox .setting').css('background-image').replace(patt, '?seed=' + d + '")').replace(/http:\/\//, "https://"));
    }
    /*ForArticle*/
    /*Add Count & Date To New Article*/
    if ($('.LiPropertiesCount2').length && $('.LiPropertiesDate1').length) {
        var TitleCountVisit = $('.LiPropertiesCount1').text();
        var CountVisit = $('.LiPropertiesCount2').text();
        var TitlecurrentDate = $('.LiPropertiesDate2').text();
        var currentDate = $('.LiPropertiesDate1').text();

        var ArticleTools = $('.SendToNetwork').html();
        if (!$('.sharebar').length) {
            if ($('.Article > h1:first + h3').length)
                $('<div class="sharebar"></div>').insertAfter('.Article > h1:first + h3');
            else
                $('<div class="sharebar"></div>').insertAfter('.Article > h1:first');
        }

        $('.UlProperties,.SendToNetwork').hide();
        $('.sharebar').prepend(ArticleTools);
        var _html = '<span class="articleDate">' +
            TitlecurrentDate + ' <span class="currentDate">' + currentDate + '</span>' +
            '</span>';
        if (CountVisit > 399) {
            _html = _html + '<span class="articleviewcount">' +
                TitleCountVisit + ' <span class="currentViewcount">' + CountVisit + '</span>' +
                '</span>';
        }
        $('.sharebar').append('<div class="StatisticsSharebar fl">' + _html + '</div>');
    }
    /*Add FancyBox Show Image*/
    if ($('.imageListContainer,.AddForFancy').length) {
        $('body').append('<link class="AddForFancy" rel="stylesheet" type="text/css" href="https://www.tebyan.net/Js/TS/1024/EShopping/fancybox/fancybox.css"/><style type="text/css">#fancybox-title, #fancybox-left, #fancybox-right{display:block!important}</style>');
        $.getScript('https://www.tebyan.net/Js/TS/1024/EShopping/fancybox/fancybox.js', function () {
            $(".imageListContainer a").fancybox({
                'titleFormat': function (itemTitle, itemArray, itemIndex, itemOpts) {
                    return itemTitle + '<span> تصویر ' + (itemIndex + 1) + ' از ' + itemArray.length + '</span>';
                }
            });
        });
    }

    function CallArticleImageAlbum(obj) {
        var ParentImageAlbum = obj.length ? obj : 0;
        if (ParentImageAlbum.length) {
            var TImageAlbum = ParentImageAlbum.find('.thumbs').detach();
            $(TImageAlbum).find('img').each(function () {
                $(this).attr({ 'src': $(this).attr('url'), 'data-image': $(this).attr('bigurl') });
                $(this).removeAttr('url bigurl width height');
            });
            TImageAlbum = $('<div id="ImageAlbum" class="js_ImageAlbum ImageAlbum" style="display:none;"' +
                'opt_scale_mode="fit"' +
                'opt_width="100%"' +
                'opt_height="500"' +
                'opt_autoplay="false"' +
                'opt_borderthumb="#FFF">' + $(TImageAlbum).html() + '</div>');
            TImageAlbum.insertAfter(obj);
        }
        $.getScript("/js/ts/1024/ArticleImageAlbum/ImageAlbum.pack.js", function () {
            $(".js_ImageAlbum").ImageAlbum();
        });
    }
    CallArticleImageAlbum($('.albumGalleryDiv'));

});
function Paging1024(Way, Paging1024Object, obj) {
    $(Paging1024Object.btnNext).unbind('click');
    $(Paging1024Object.btnBack).unbind('click');
    $this = $(Paging1024Object.DataPanel.split(' ')[0]);
    var np = $this.find('.NewPanel');

    $('.Destination').removeClass('Destination');
    np.html('<img class="loadingimage" src="https://img.tebyan.net/MainParts/Persian/Thesarus/Tcore/loading.gif"/>');
    np.show();
    var Width = Paging1024Object.Width;
    var right = '-' + Width + 'px';
    var Newright = Width + 'px';
    if (Way == 'Back') { right = Width + 'px'; Newright = '-' + Width + 'px'; }

    np.css({ 'right': right });

    np.animate({ 'right': '0px' }, Paging1024Object.RateAnimate, null,
        function () { $(this).removeClass("NewPanel").addClass('Current'); }
    ).addClass('Destination');

    $this.find('.Current').css({ 'right': 0 });
    $this.find('.Current').animate({ 'right': Newright }, Paging1024Object.RateAnimate, null, function () {
        $(this).removeClass("Current").addClass('NewPanel');
    });

    GetPageIndex(Way, Paging1024Object);

    GetBoxTebyan(Paging1024Object, function (data) {
        $(Paging1024Object.DataPanel).empty();
        $("#" + Paging1024Object.jTemplateID).tmpl(data).prependTo(Paging1024Object.DataPanel);
        np.html($(Paging1024Object.DataPanel).html());

        setTimeout(function () {
            $(Paging1024Object.btnNext).one('click', function () { Paging1024("Next", Paging1024Object, obj); });
            $(Paging1024Object.btnBack).one('click', function () { Paging1024("Back", Paging1024Object, obj); });
            if (Paging1024Object.OnSuccess != null) { Paging1024Object.OnSuccess(data); }
        }, Paging1024Object.RateAnimate - 100);

    }, true);
}
function GetPageIndex(Way, Paging1024Object) {
    if (Paging1024Object.PageSize < 0) Paging1024Object.PageSize *= -1;
    var RowCount = Paging1024Object.RowCount;
    var PageIndex = Paging1024Object.PageIndex;
    var PageSize = Paging1024Object.PageSize;
    if (Way == 'Back') {
        var _temp = Math.floor(RowCount / PageSize);
        var __temp = 1;
        if (RowCount % PageSize != 0) __temp = 0;

        if (PageIndex <= 0) {
            PageIndex = _temp - __temp;
        }
        else PageIndex--;
    }
    else {
        var _temp = Math.floor(RowCount / PageSize);
        var __temp = 0;
        if (RowCount % PageSize != 0) __temp = 1;
        if (PageIndex < _temp + __temp - 1) {
            PageIndex++;
        }
        else PageIndex = 0;
    }
    
    Paging1024Object.setPageIndex(PageIndex);
    
}

function GetBannerTebyan(drpPart, drpLanguage, drpCreationType, onsuccess, ispaging) {
    if (qs['BoxID'] == null || qs['BoxID'] == '' || qs['BoxID'] == 'undefined') {
        GoToServer('/WebServices/Page/PageService.asmx/GetBanner', { drpPart: drpPart, drpLanguage: drpLanguage, drpCreationType: drpCreationType, PageSize: ispaging, PageIndex: 0, showDate: index1024_showdate }, function (data) {
            if (data != null && data.d != null) {
                if (onsuccess != null) { onsuccess(data.d.Items); }
            }
        }, null, true);
    }
}
var RequestArray1024 = [];

function SetRequestBox(BoxObject, onsuccess, ispaging, loading) {
    SetRequestBoxBase(RequestArray1024, BoxObject, onsuccess, ispaging, loading);
}
function LoadControl(path, onsuccess) {
    GoToServer('/WebServices/Page/PageService.asmx/GetControl', { path: path }, function (data) {
        onsuccess(data.d);
    });
}

function SetRequestControlBox(boxid, onsuccess) {
    if (qs['BoxID'] == null || qs['BoxID'] == '' || qs['BoxID'] == 'undefined' ||
        parseInt(qs['BoxID']) == boxid
    ) {
        RequestArray1024.push({ iscontrol: true, BoxID: boxid, Onsuccess: onsuccess });
    }
}
function SetRequestControl(path, onsuccess) {
    RequestArray1024.push({ IsControl: true, ControlPath: path, Onsuccess: onsuccess, BoxID: 0 });
}
function SetRequestBoxBase(ArrayList, BoxObject, onsuccess, ispaging, loading) {
    if (typeof (BoxObject) != 'object') {
        if (qs['BoxID'] == null || qs['BoxID'] == '' || qs['BoxID'] == 'undefined' ||
            parseInt(qs['BoxID']) == parseInt(BoxObject)
        ) {
            ArrayList.push({ BoxObject: false, BoxID: BoxObject, PageSize: ispaging, PageIndex: 0, Onsuccess: onsuccess });
        }
    }
    else
        if (qs['BoxID'] == null || qs['BoxID'] == '' || qs['BoxID'] == 'undefined' ||
            parseInt(qs['BoxID']) == BoxObject.BoxID
        ) {
            ArrayList.push({ BoxObject: BoxObject, BoxID: BoxObject.BoxID, PageSize: BoxObject.PageSize, PageIndex: BoxObject.PageIndex, Onsuccess: onsuccess });
        }
}
function StartSendRequest() {
    var GetUrl = document.URL;
        StartSendRequestBase(RequestArray1024);
}
function StartSendRequestBase(ArrayList) {
    var array1024 = new Array();
    for (k = 0; k < ArrayList.length; ++k) {
        if (ArrayList[k].IsControl) {
            array1024[k] = '{IsControl:true,Control:"' + ArrayList[k].ControlPath + '", UDate:"' + User_index1024_showdate + '", ShowDate: "' + index1024_showdate + '",  BoxID: ' + ArrayList[k].BoxID + '}';
        }
        else array1024[k] = '{UDate:"' + User_index1024_showdate + '", ShowDate: "' + index1024_showdate + '",  BoxID: ' + ArrayList[k].BoxID + ', PageSize: ' + ArrayList[k].PageSize + ', PageIndex: ' + ArrayList[k].PageIndex + ' }';
    }
    GoToServer('/WebServices/Page/PageService.asmx/GetBoxs', '{ request: [' + array1024.join(',') + '] }', function (data) {
        try {
            if (data != null && data.d != null) {

                for (y = 0; y < data.d.length; ++y) {
                    if (data.d[y]) {
                        if (typeof (ArrayList[y].BoxObject) == 'object') {
                            var $this = $(ArrayList[y].BoxObject.DataPanel.split(' ')[0]);
                            $("#" + ArrayList[y].BoxObject.jTemplateID).tmpl(data.d[y].Items).prependTo(ArrayList[y].BoxObject.DataPanel);
                            $this.find('.Current').html($(ArrayList[y].BoxObject.DataPanel).html());
                            if (data.d[y].RowCount == null) data.d[y].RowCount = 15;
                            ArrayList[y].BoxObject.SetRowCount(data.d[y].RowCount);
                        }
                        
                        if (data.d[y] != null && data.d[y].IsActive == false) {
                            HiddenBox1024(data.d[y].BoxID);
                        }
                        else if (ArrayList[y].Onsuccess != null) { ArrayList[y].Onsuccess(data.d[y].Items, data.d[y]); }
                    }
                    
                }

            }
        }
        catch (ex) { }

    }, null, true);
}

function GetBoxTebyan(BoxObject, onsuccess, ispaging, loading) {

    if (typeof (BoxObject) != 'object') {
        if (qs['BoxID'] == null || qs['BoxID'] == '' || qs['BoxID'] == 'undefined' ||
            parseInt(qs['BoxID']) == parseInt(BoxObject)
        ) {
            GoToServer('/WebServices/Page/PageService.asmx/GetBox', { UDate: User_index1024_showdate, ShowDate: index1024_showdate, BoxID: BoxObject, PageSize: ispaging, PageIndex: 0 }, function (data) {
                if (data != null && data.d != null) {
                    if (data.d.IsActive == false) {
                        HiddenBox1024(BoxObject);
                    }
                    else if (onsuccess != null) { onsuccess(data.d.Items, data.d); }
                }
            }, loading, true);
        }
    }
    else
        if (qs['BoxID'] == null || qs['BoxID'] == '' || qs['BoxID'] == 'undefined' ||
            parseInt(qs['BoxID']) == BoxObject.BoxID
        ) {
            GoToServer('/WebServices/Page/PageService.asmx/GetBox', { UDate: User_index1024_showdate, ShowDate: index1024_showdate, BoxID: BoxObject.BoxID, PageSize: BoxObject.PageSize, PageIndex: BoxObject.PageIndex }, function (data) {
                if (data != null && data.d != null) {
                    if (data.d.IsActive == false && typeof (HiddenBox1024) == 'function') {
                        HiddenBox1024(BoxObject.BoxID);
                    }
                    else {
                        if (ispaging == null) {
                            var $this = $(BoxObject.DataPanel.split(' ')[0]);
                            $("#" + BoxObject.jTemplateID).tmpl(data.d.Items).prependTo(BoxObject.DataPanel);
                            $this.find('.Current').html($(BoxObject.DataPanel).html());
                            if (data.d.RowCount == null) data.d.RowCount = 15;
                            BoxObject.SetRowCount(data.d.RowCount);
                        }
                        if (onsuccess != null) { onsuccess(data.d.Items, data.d); }
                    }
                }

            }, loading, true);
        }
}

function GetBoxTebyanAPI(BoxObject, onsuccess, ispaging, loading) {

    if (typeof (BoxObject) != 'object') {
        if (qs['BoxID'] == null || qs['BoxID'] == '' || qs['BoxID'] == 'undefined' ||
            parseInt(qs['BoxID']) == parseInt(BoxObject)
        ) {

            var _url_ = 'https://api.tebyan.net/api/TemplatePageBox/GetBoxCross?BoxID=' + BoxObject + '&PageIndex=0&PageSize=' + ispaging;
            CrossGet(_url_, {}, function (data) {
                if (data != null && data.d != null) {
                    if (data.d.IsActive == false) {
                        HiddenBox1024(BoxObject);
                    }
                    else if (onsuccess != null) { onsuccess(data.d.Items, data.d); }
                }

            }, loading, true);

        }
    }
    else
        if (qs['BoxID'] == null || qs['BoxID'] == '' || qs['BoxID'] == 'undefined' ||
            parseInt(qs['BoxID']) == BoxObject.BoxID
        ) {

            var _url_ = 'https://api.tebyan.net/api/TemplatePageBox/GetBoxCross?BoxID=' + BoxObject.BoxID + '&PageIndex=' + BoxObject.PageIndex + '&PageSize=' + BoxObject.PageSize;
            CrossGet(_url_, {}, function (data) {
                if (data != null && data.d != null) {
                    if (data.d.IsActive == false && typeof (HiddenBox1024) == 'function') {
                        HiddenBox1024(BoxObject.BoxID);
                    }
                    else {
                        if (ispaging == null) {
                            var $this = $(BoxObject.DataPanel.split(' ')[0]);
                            $("#" + BoxObject.jTemplateID).tmpl(data.d.Items).prependTo(BoxObject.DataPanel);
                            $this.find('.Current').html($(BoxObject.DataPanel).html());
                            if (data.d.RowCount == null) data.d.RowCount = 15;
                            BoxObject.SetRowCount(data.d.RowCount);
                        }
                        if (onsuccess != null) { onsuccess(data.d.Items, data.d); }
                    }
                }

            }, loading, true);
        }
}
/*JScript source code*/

function CheckDate(d) 
{
    if (d.toString().length < 2)
        d = "0" + d;
    return d;
}
function PTG(date) 
{
    if (date != '') 
    {
        date = date.replace(/-/gi, '/');
        var t = date.split('/');
        if (t[0][0] == '0') t[0] = t[0][1];
        if (t[1][0] == '0') t[1] = t[1][1];
        if (t[2][0] == '0') t[2] = t[2][1];
        if (t[2].length == 4)
            var d = jd_to_gregorian(persian_to_jd(parseInt(t[2]), parseInt(t[1]), parseInt(t[0])));
        else
            var d = jd_to_gregorian(persian_to_jd(parseInt(t[0]), parseInt(t[1]), parseInt(t[2])));
        return CheckDate(d[0]) + "/" + CheckDate(d[1]) + "/" + CheckDate(d[2]);
    }
}

var cache = [];
function GTP(date, form2) 
{
    if (date != null && date != '')
    {
        date = date.replace(/\//gi, '-');
        var t = date.split('-');
        var d = jd_to_persian(gregorian_to_jd(parseInt(t[0]), parseInt(t[1]), parseInt(t[2])));
        if (form2 == 'YMD') {
            return CheckDate(d[0]) + "/" + CheckDate(d[1]) + "/" + CheckDate(d[2]);
        }
        else if (form2) 
        {
            time = date.split(' ')[1];
            hour = CheckDate(time.split(':')[0]);
            min = CheckDate(time.split(':')[1]);
            return CheckDate(d[0]) + "-" + CheckDate(d[1]) + "-" + CheckDate(d[2]) + ' ' + hour + ':' + min;
        }
        return CheckDate(d[2]) + "/" + CheckDate(d[1]) + "/" + CheckDate(d[0]);
    }
}
function GetDate(_date) 
{
    if (_date == null) return null;
    var _date = _date.replace(/\/Date\((.*?)\)\//gi, '$1');
    var date = new Date();
    date.setTime(_date)
    _date = date.getFullYear() + '-' + (parseInt(date.getMonth()) + 1) + '-' + date.getDate();
    return _date + ' ' + date.getHours() + ':' + date.getMinutes();
}

/*Ads*/
let getScript = (source, callback) => {
    var el = document.createElement('script');
    el.type = 'text/javascript';
    el.onload = callback;
    el.src = source;

    document.body.appendChild(el);
};
let typeAdsScript = {
    mediaads: true,
    yektanet: false
};
let callScriptAds = (typeAdsScript) =>
{
    if (typeAdsScript.yektanet)
    {
        /*banner_yektanet*/
        var now = new Date();
        var head = document.getElementsByTagName('head')[0];
        var script_banner = document.createElement('script');
        script_banner.type = 'text/javascript';
        var script_banner_address = 'https://cdn.yektanet.com/template/bnrs/yn_bnr.min.js';
        script_banner.src = script_banner_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
        head.appendChild(script_banner);

        /*native_yektanet*/
        var script_native = document.createElement('script');
        script_native.async = true;
        var script_native_address = 'https://cdn.yektanet.com/js/tebyan/article.v1.js';
        script_native.src = script_native_address + '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' + now.getDate() + '0' + now.getHours();
        head.appendChild(script_native);

        if (window.location.href.split("https://").pop() !== "tebyan.net/" && window.location.href.split("https://www.").pop() !== "tebyan.net/" && window.location.href.split("https://").pop() !== "tebyan.net/newindex.aspx?pid=1" && window.location.href.split("https://www.").pop() !== "tebyan.net/newindex.aspx?pid=1" && window.location.href.split("https://").pop() !== "tebyan.net/newindex.aspx?pid=1&isadmin=1" && window.location.href.split("https://www.").pop() !== "tebyan.net/newindex.aspx?pid=1&isadmin=1") {
            /*AddNotification*/
            let notificationads = {}, BoxIDAds = {};
            notificationads = {
                "notif": 1624
            };
            BoxIDAds = notificationads.notif;
            let addTebyanAds = function (BoxIDAds)
            {
                let notifStructer = '';
                CrossGet("https://api.tebyan.net/api/TemplatePageBox/GetBoxesPlus?BoxIDs=" + BoxIDAds, {}, function (data)
                {
                    if (data !== null)
                    {
                        for (var i = 0; i < data.length; i++)
                        {
                            if (data[i].Items.length > 0)
                            {
                                notifStructer += "<div id='" + data[i].Items[i].Link + "'></div>";
                            }
                            $("body").append(notifStructer);
                        }
                    }
                }, null, false);

            };
            addTebyanAds(BoxIDAds);

        }
        $.getScript("https://src.tebyan.net/gen/js/plugin/detectdevice/detectdevice.js", function ()
        {
            var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
            var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
            var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
            var isBlackBerry = /blackberry/i.test(navigator.userAgent.toLowerCase());
            var isWebOS = /webos/i.test(navigator.userAgent.toLowerCase());
            if (isiDevice || isAndroid || isWindowsPhone || isBlackBerry || isWebOS)
            {
                $("body").append('<div id="pos-footer-sticky-5265"></div>');
            }
        });
        
    }
    else if (typeAdsScript.mediaads)
    {
        getScript('https://s1.mediaad.org/serve/tebyan.net/loader.js');
        if (window.location.href.split("https://").pop() !== "tebyan.net/" && window.location.href.split("https://www.").pop() !== "tebyan.net/" && window.location.href.split("https://").pop() !== "tebyan.net/newindex.aspx?pid=1" && window.location.href.split("https://www.").pop() !== "tebyan.net/newindex.aspx?pid=1" && window.location.href.split("https://").pop() !== "tebyan.net/newindex.aspx?pid=1&isadmin=1" && window.location.href.split("https://www.").pop() !== "tebyan.net/newindex.aspx?pid=1&isadmin=1" && window.location.href.split("https://").pop() !== "tebyan.net/newindex.aspx?pid=470091" && window.location.href.split("https://www.").pop() !== "tebyan.net/newindex.aspx?pid=470091" && window.location.href.split("https://").pop() !== "tebyan.net/newindex.aspx?pid=470091&isadmin=1" && window.location.href.split("https://www.").pop() !== "tebyan.net/newindex.aspx?pid=470091&isadmin=1") {
            /*Add Notification*/
            $("body").append("<div id='mediaad-mTMU'></div>");
        }

    }
};
callScriptAds(typeAdsScript);



function LazyLoad(obj) {
    if (obj.length) {
        if ($('script[src$="LazyImage.js"]').length) {
            obj.lazy({
                effect: "fadeIn",
                effectTime: 800,
                removeAttribute: true,
                threshold: 200,
                bind: "event"
            });
        }
        else {
            $.getScript("/JS/TS/1024/ArticlePage/LazyImage/LazyImage.js", function () {
                obj.lazy({
                    effect: "fadeIn",
                    effectTime: 800,
                    removeAttribute: true,
                    threshold: 200,
                    bind: "event"
                });
            });
        }
    }
}
$(document).ready(function () {
    LazyLoad($("img.js_lazy"));
})
