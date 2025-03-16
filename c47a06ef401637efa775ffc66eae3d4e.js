(function ($) {
    //统计方法
    function GetHits(id) {
        $.ajax({
            url: "//click.gamersky.com/Common/GetHits.aspx",
            type: "get",
            contentType: 'application/json',
            dataType: "jsonp",
            data: {
                script: 3,
                id: id
            },
            success: function (rs) {
                if (typeof callback == "function") {
                    callback(rs)
                }
            }
        })
    }
    var fx = {
        countIds: [{
            name: '仁王',
            kuid: '662872', //游戏库ID
            oldid: '993591', //众评 旧 统计ID
            newid: '993596', //众评 新 统计ID
            zqid: '993597' //专区 新 统计ID
        }, {
            name: '尼尔：机械纪元',
            kuid: '673540',
            oldid: '993589',
            newid: '993595',
            zqid: '993594'
        }
        ],
        addCountZp: function (kuid) {
            $.each(fx.countIds, function (i, item) {
                if (item.kuid == kuid) {
                    $('.tgFenxiaoMini').addClass('countHit').attr('data-itemid', item.newid);
                    $('.YXXX-L .btn a').addClass('countHit').attr('data-itemid', item.oldid);
                }
            });
        },
        addCountZq: function (kuid) {
            $.each(fx.countIds, function (i, item) {
                if (item.kuid == kuid) {
                    $('.tg-fenxiao-buybtn a.tgbtn').addClass('countHit').attr('data-itemid', item.zqid);
                }
            });
        },
        longStyle: function (htm) { //长广告样式
            htm += '.tg-fenxiao-long {margin:20px auto 30px; width:100%; height:64px; font-family:"Microsoft YaHei"; white-space:nowrap; position:relative;}';
            htm += '.tg-fenxiao-long {background-color:#fff; box-shadow:0 1px 0 rgba(102,102,102,.15);}';
            htm += '.tg-fenxiao-long div {overflow:visible;}';
            htm += '.tg-fenxiao-long a {text-decoration:none;}';
            htm += '.tg-fenxiao-long a:hover {text-decoration:none;}';
            htm += '.tg-fenxiao-name {padding-left:55px; width:250px; height:64px; line-height:64px; font-size:18px; color:#262626; font-weight:700;}';
            htm += '.tg-fenxiao-name {background:url(//image.gamersky.com/webimg15/tg/long-buy.png) 18px center no-repeat; white-space:nowrap; text-overflow:ellipsis; overflow:hidden;}';
            htm += '.tg-fenxiao-right {position:absolute; right:16px; top:16px;}';
            htm += '.tg-fenxiao-price {float:left; margin-right:20px; width:auto; height:32px; line-height:32px; color:#333;}';
            htm += '.tg-fenxiao-price del {margin-right:14px; font-size:14px; color:#666;}';
            htm += '.tg-fenxiao-price span {font-size:14px;}';
            htm += '.tg-fenxiao-price i {font-size:18px; font-style:normal;}';
            htm += '.tg-fenxiao-price.off {right:168px; color:#df3900; white-space:nowrap;}';
            htm += '.tg-fenxiao-buybtn {float:left; width:auto; height:32px;}';
            htm += '.tg-fenxiao-buybtn a {float:left; display:block; height:32px; line-height:32px; color:#fff; font-size:14px; text-align:center;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn {width:100px; background:url(//image.gamersky.com/webimg15/tg/long-btn.png) 0 0 no-repeat;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn span {display:none;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn:hover {background-position:0 -40px;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn.off {padding-left:48px; background-position:0 -79px; position:relative;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn.off span {display:block; width:48px; position:absolute; left:0; top:0;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn.off:hover {background-position:0 -119px;}';
            htm += '.tg-fenxiao-buybtn a.tglik {margin-left:-2px; padding-left:4px; width:46px; background:url(//image.gamersky.com/webimg15/box-lik-pc.png) no-repeat;}';
            htm += '.tg-fenxiao-buybtn a.tglik:hover {background-position:0 -32px;}';
            htm += '.hei .tg-fenxiao-long.bg {background-color:#404040;}';
            htm += '.hei .tg-fenxiao-name {color:#ddd;}';
            htm += '.hei .tg-fenxiao-price {color:#e28a21;}';
            htm += '.hei .tg-fenxiao-price del {color:#ddd;}';
            return htm;
        },
        midStyle: function (htm) { //中广告样式
            htm += '.tg-fenxiao-middle {margin:0 15px 15px; height:39px; border-top:1px solid #424242; border-bottom:1px solid #424242; white-space:nowrap; position:relative;}';
            htm += '.tg-fenxiao-middle a {text-decoration:none;}';
            htm += '.tg-fenxiao-middle a:hover {text-decoration:none;}';
            htm += '.tg-fenxiao-price {width:auto; height:39px; line-height:39px; color:#f35f1c; font-family:"Microsoft YaHei"; position:absolute; left:0; top:0;}';
            htm += '.tg-fenxiao-price span {font-size:14px;}';
            htm += '.tg-fenxiao-price i {font-size:18px; font-style:normal;}';
            htm += '.tg-fenxiao-price.off del {margin-right:10px; font-size:14px; color:#aaa;}';
            htm += '.tg-fenxiao-buybtn {width:auto; height:25px; position:absolute; right:0; top:7px;}';
            htm += '.tg-fenxiao-buybtn a {float:left; display:block; height:25px; line-height:25px; color:#fff; font-size:12px; font-family:SimSun; text-align:center;}';
            htm += '.tg-fenxiao-buybtn a:hover {color:#fff;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn {width:72px; background:url(//image.gamersky.com/webimg15/tg/mid-btn.png) 0 0 no-repeat;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn span {display:none;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn:hover {background-position:0 -30px;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn.off {padding-left:44px; background-position:0 -60px; position:relative;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn.off span {display:block; width:44px; position:absolute; left:0; top:0;}';
            htm += '.tg-fenxiao-buybtn a.tgbtn.off:hover {background-position:0 -90px;}';
            htm += '.tg-fenxiao-buybtn a.tglik {margin-left:-2px; width:46px; background:url(//image.gamersky.com/webimg15/box-lik-zq.png) no-repeat;}';
            htm += '.tg-fenxiao-buybtn a.tglik:hover {background-position:0 -25px;}';
            return htm;
        },
        //评测内容页
        longPos: function (contain, dt) {
            if (dt.status != 1) return;
            $.getScript('//j.gamersky.com/common/tg/fxtgJson.js', function () {
                var htm = '', zb = '', info = dt.data, priOld = parseInt(info.oldprice), priNow = parseInt(info.price), diyCss = contain.attr('data-css');
                var calcOff = Math.round((1 - priNow / priOld) * 100);
                var url = info.url.replace(/(html)/ig, '$1?ukey=207cpQ01DVBTdvV%2BkkOyikDDnUtrPUY3vJLpJBcHxpWUrTXJuLTwkm0');
                var gid = $(".ratingGroup").attr("data-generalid"); //游戏ID
                var isGid = kuGameJson.filter(function (p) { return p.gameId == gid; });
                if (isGid.length > 0) {
                    //zb = '<a class="tglik countHit" data-itemid="'+isGid[0].itemId+'" href="'+isGid[0].webUrl+'" target="_blank">周边</a>';
                }
                var inlineSty = diyCss ? diyCss : '', background = diyCss ? 'bg' : '';
                htm += '<style>' + fx.longStyle('') + '.tg-fenxiao-long.bg {' + inlineSty + '}</style>';
                htm += '<div class="tg-fenxiao-long ' + background + '">';
                htm += '<div class="tg-fenxiao-name">' + info.title + '</div>';
                htm += '<div class="tg-fenxiao-right">';
                if (priOld == priNow) {
                    htm += '<div class="tg-fenxiao-price"><span>￥</span><i>' + priNow + '</i></div>';
                    htm += '<div class="tg-fenxiao-buybtn"><a target="_blank" href="' + url + '" class="tgbtn countHit" data-itemid="1186812">正版购买</a>' + zb + '</div>';
                } else {
                    htm += '<div class="tg-fenxiao-price off"><del>￥' + priOld + '</del><span>￥</span><i>' + priNow + '</i></div>';
                    htm += '<div class="tg-fenxiao-buybtn"><a target="_blank" href="' + url + '" class="tgbtn off countHit" data-itemid="1186812"><span>-' + calcOff + '%</span>正版购买</a>' + zb + '</div>';
                }
                htm += '</div></div>';
                contain.html(htm);
            });
        },
        //专区
        midPos: function (contain, dt) {
            if (dt.status != 1) return;
            $.getScript('//j.gamersky.com/common/tg/fxtgJson.js', function () {
                var htm = '', zb = '', info = dt.data, priOld = parseInt(info.oldprice), priNow = parseInt(info.price);
                var calcOff = Math.round((1 - priNow / priOld) * 100);
                var url = info.url.replace(/(gamersky)/ig, 'gamersky2');
                var gid = $(".gameScore").attr("data-generalid"); //游戏ID
                var isGid = kuGameJson.filter(function (p) { return p.gameId == gid; });
                //if (location.href.indexOf("www.gamersky.com/z/nba2k21/")!=-1) {
                //  url = 'https://www.sonkwo.hk/sku/5196';
                //}
                if (isGid.length > 0) {
                    //zb = '<a class="tglik countHit" data-itemid="'+isGid[0].itemId+'" href="'+isGid[0].webUrl+'" target="_blank">周边</a>';
                }
                htm += '<style>' + fx.midStyle('') + '</style>';
                htm += '<div class="tg-fenxiao-middle">';
                if (priOld == priNow) {
                    htm += '<div class="tg-fenxiao-price"><span>￥</span><i>' + priNow + '</i></div>';
                    htm += '<div class="tg-fenxiao-buybtn"><a target="_blank" href="' + url + '" class="tgbtn countHit" data-itemid="1186812">正版购买</a>' + zb + '</div>';
                } else {
                    htm += '<div class="tg-fenxiao-price off"><del>￥' + priOld + '</del><span>￥</span><i>' + priNow + '</i></div>';
                    htm += '<div class="tg-fenxiao-buybtn"><a target="_blank" href="' + url + '" class="tgbtn off countHit" data-itemid="1186812"><span>-' + calcOff + '%</span>正版购买</a>' + zb + '</div>';
                }
                htm += '</div>';
                contain.html(htm);
                fx.addCountZq(info.kuid);
            });
        },
        //其它内容页
        buyPos: function (contain, dt) {
            $.getScript('//j.gamersky.com/common/tg/fxtgJson.js', function () {
                var htm = '<style>';
                htm += '.box_game {height:214px;}';
                htm += '.box_game .box_t,.box_game.not .box_t {height:44px; border-bottom:1px solid #383838;}';
                htm += '.box_game .box_i {height:169px;}';
                htm += '.box_game .box_c {height:214px;}';
                htm += '.box_game .box_c .c_1 {overflow:visible;}';
                htm += '.box_game .box_c .c_1 a {box-shadow:0 2px 10px 0 rgba(0,0,0,.7);}';
                htm += '.box_game .box_c .c_3 .btn a {border-radius:5px;}';
                htm += '.box_game .box_c .c_3 .btn a.btn3 {color:#2db46c; border:1px solid #31684b;}';
                htm += '.box_game .box_c .c_4 {padding:4px 0;}';
                htm += '.box_game .box_c .c_4 a {margin-right:0;}';
                htm += '.c_4_buy {float:right; margin-top:6px;}';
                htm += '.c_4_buy .price {float:left;padding:0 8px 0 5px;height:24px;border:1px solid #a04310;border-right:0;border-radius:5px 0 0 5px;}';
                htm += '.c_4_buy .price em {float:left;margin-right:4px;display:block;height:24px;line-height:24px;color:#f35f1c;font-size:14px;font-family:"Microsoft YaHei";font-style:normal;}';
                htm += '.c_4_buy .price em b {font-size:20px;font-family:Arial;}';
                htm += '.c_4_buy .price div {float:left;height:24px;text-align:center;}';
                htm += '.c_4_buy .price span {margin-top:1px;display:block;height:12px;line-height:12px;color:#ff9600;font-size:12px;font-family:SimSun;text-align:right;}';
                htm += '.c_4_buy .price del {margin-top:-3px;display:block;height:12px;line-height:12px;color:#aaa;font-size:12px;font-family:"Microsoft YaHei",SimSun;text-align:right;}';
                htm += '.c_4_buy .price del i {font-family:SimSun;font-style:normal;}';
                htm += '.c_4_buy .nobuy {float:left;margin-right:0!important;padding:0 8px;height:26px;line-height:26px;color:#999;font-size:12px;font-family:SimSun;background:#444;border-radius:5px;}';
                htm += '.c_4_buy a {display:block; height:26px; line-height:26px; color:#fff!important; font-size:12px; font-family:SimSun;}';
                htm += '.c_4_buy a.buy {width:85px; text-indent:29px; background:#f05400 url(//image.gamersky.com/webimg15/box-buy.png) 8px center no-repeat;border-radius:0 5px 5px 0;}';
                htm += '.c_4_buy a.buy:hover {background-color:#df3a00; text-decoration:none!important;}';
                htm += '.c_4_buy a.lik {margin-left:-2px; width:46px; text-align:center; background:url(//image.gamersky.com/webimg15/box-lik.png) no-repeat;}';
                htm += '.c_4_buy a.lik:hover {background-position:0 -26px; text-decoration:none!important;}';
                htm += '.c_4_lik {float:left;}';
                htm += '.c_4_lik i {float:left;display:block;height:38px;line-height:38px;color:#666;font-size:12px;font-family:SimSun;font-style:normal;}';
                htm += '.c_4_lik a {margin:0 7px 0 8px!important;}';
                if (location.href.indexOf("/zl/") != -1 || location.href.indexOf("v.gamersky.com") != -1) {
                    //专栏和视频内容页
                    htm += '.c_4_lik a.zp {margin:0 7px 0 0!important;}';
                    htm += '.c_4_lik a.zp:hover {color:#d93a3a!important;}';
                    htm += '.c_4_lik a.zq {color:#444!important; font-weight:400!important;}';
                    htm += '.c_4_lik a.zq:hover {color:#d93a3a!important; text-decoration:underline!important;}';
                    htm += '.hei .c_4_buy .nobuy {color:#999;background:#666;}';
                    htm += '.hei .c_4_lik a.zp:hover {color:#fff!important;}';
                    htm += '.hei .c_4_lik a.zq {color:#ccc!important; font-weight:400!important;}';
                    htm += '.hei .c_4_lik a.zq:hover {color:#fff!important; text-decoration:underline!important;}';
                } else {
                    //其它内容页
                    htm += '.box_game .box_c {background:url(//image.gamersky.com/webimg15/c_4_mx.png) 0 bottom repeat-x;}';
                    htm += '.box_game .box_c .c_3 {height:149px; top:17px;}';
                    htm += '.box_game .box_c .c_3 .YMZS,.box_game.not .box_c .c_3 .YMZS {width:98px; background:url(//image.gamersky.com/webimg15/cpf3.png) no-repeat;}';
                    htm += '.c_4_lik a.zp {margin:0 7px 0 0!important;color:#2aae68!important;background:url(//image.gamersky.com/webimg15/zq1.png) no-repeat!important;}';
                    htm += '.c_4_lik a.zp:hover {color:#fff!important;background-position:0 -38px!important;}';
                    htm += '.c_4_lik a.zq {color:#ccc!important;font-weight:400!important;}';
                    htm += '.c_4_lik a.zq:hover {color:#fff!important; text-decoration:underline!important;}';
                }
                htm += '</style>';
                htm += '<div class="c_4_buy">';

                var outHtm = contain.html().match(/<a.*?>(.*?)<\/a>/ig); //正则提取所有a标签组成数组
                if ($(".box").css("display") != 'none' && dt.status == 1) {
                    $('#tgFenxiaoLong').remove();
                    var info = dt.data, priOld = parseInt(info.oldprice), priNow = parseInt(info.price);
                    var calcOff = Math.round((1 - priNow / priOld) * 100);
                    var url = info.url.replace(/(html)/ig, '$1?ukey=207cpQ01DVBTdvV%2BkkOyikDDnUtrPUY3vJLpJBcHxpWUrTXJuLTwkm0');
                    htm += '<div class="price">';
                    htm += '<em>￥<b>' + priNow + '</b></em>';
                    if (priOld != priNow) {
                        htm += '<div><span>-' + calcOff + '%</span><del>￥<i>' + priOld + '</i></del></div>';
                    }
                    htm += '</div>';
                    htm += '<a class="buy countHit" data-itemid="1186812" href="' + url + '" target="_blank">正版购买</a>';
                } else {
                    htm += '<div class="nobuy">暂无购买渠道</div>';
                }
                var gid = $(".ratingGroup").attr("data-generalid"); //游戏ID
                var isGid = kuGameJson.filter(function (p) { return p.gameId == gid; });
                if (isGid.length > 0) {
                    htm += '<a class="lik countHit" data-itemid="' + isGid[0].itemId + '" href="' + isGid[0].webUrl + '" target="_blank">周边</a>';
                }
                htm += '</div>';
                htm += '<div class="c_4_lik">';
                $.each(outHtm, function (i, item) {
                    htm += (i != 0 ? '<i>|</i>' : '') + item;
                });
                htm += '</div>';
                contain.html(htm);
            });
        },
        //众评内容页
        miniPos: function (contain, dt) {
            $.getScript('//j.gamersky.com/common/tg/fxtgJson.js', function () {
                var htm = '', gid = $("#jcjbContentData").attr("data-generalid"); //游戏ID
                var isGid = kuGameJson.filter(function (p) { return p.gameId == gid; });
                if (dt.status == 1) {
                    var info = dt.data;
                    //var url = info.url.replace(/(html)/ig, '$1?ukey=fdc2EfsP8F6jCJFDUEsJZy7hclqqeSL2grsL09mp40kJvEGpf2OiCT8');
                    var url = info.url.replace(/gamersky/ig, 'gamersky1');
                    //if (location.href.indexOf("ku.gamersky.com/2020/nba-2k21/")!=-1) {
                    //  url = 'https://www.sonkwo.hk/sku/5196';
                    //}
                    var btnimg = 'background:url(//image.gamersky.com/webimg15/tg/mini-btn.png) center 5px no-repeat;';
                    htm += '<a class="tgFenxiaoMini" style="' + btnimg + '" href="' + url + '" target="_blank"></a>';
                }
                if (isGid.length > 0) {
                    var likimg = 'background:url(//image.gamersky.com/webimg15/tg/mini-lik.png) center 5px no-repeat;';
                    htm += '<a class="lik countHit" style="' + likimg + '" data-itemid="' + isGid[0].itemId + '" href="' + isGid[0].webUrl + '" target="_blank"></a>';
                }
                contain.append(htm);
                if (dt.status == 1) {
                    if ($(".YXXX-L .btn").length > 0) {
                        $(".YXXX-L .btn a").attr("href", url);
                    } else {
                        $(".YXXX-L").append('<div class="btn"><a target="_blank" href="' + url + '">购买正版</a></div>');
                    }
                    fx.addCountZp(info.kuid);
                    //增加凤凰分销按钮 cms统计
                    $('.YXXX-L div.btn a,.Midnav a.tgFenxiaoMini').on('click', function () {
                        GetHits(1475221)
                    })
                }
            });

        },
        getApiData: function (callback, kuid) {
            $.ajax({
                type: "GET",
                dataType: 'jsonp',
                url: '//db2.gamersky.com/GameDistributor.aspx',
                data: { game_id: kuid },
                success: function (backData) {
                    if (typeof callback == 'function') {
                        //库 修改 凤凰跳转添加统计
                        if (location.href.indexOf('ku.gamersky.com') != -1) {
                            var url = backData.data.url
                            var qurl = url.slice(0, url.indexOf('#'))
                            var durl = url.slice(url.indexOf('#'), url.length)
                            backData.data.url = qurl + '?ukey=3580uyTkUrHCyqP3tmyzUL%2FBgPAj9YSZcLydQEew76W6yxAIMzKRqYaShg' + '&' + durl
                            callback(backData);
                        } else {
                            callback(backData);
                        }
                    }
                }
            });
        },
        init: function () {
            var kuid,
                buyId = $(".box_game .c_4"),
                longId = $('#tgFenxiaoLong'),
                mideId = $('#tgFenxiaoMiddleExtend'),
                midId = $('#tgFenxiaoMiddle'),
                miniId = $('#tgFenxiaoMini'),
                miniNav = $('.Midnav');
            if (typeof gameLib !== 'undefined') { kuid = gameLib; }
            if (kuid == undefined) { kuid = $('#gamerskypf').attr('data-generalid'); }
            if (kuid == undefined) { kuid = $('#Remark').attr('sid'); }
            if (kuid == undefined) { kuid = $('.ratingGroup').attr('data-generalid'); }

            if (longId.length > 0) { //评测内容页
                fx.getApiData(function (bt) { fx.longPos(longId, bt); }, kuid);
            }
            if (midId.length > 0) { //专区
                fx.getApiData(function (bt) { fx.midPos(midId, bt); }, kuid);
            }
            if (mideId.length > 0) { //专区
                fx.getApiData(function (bt) { fx.midPos(mideId, bt); }, mideId.attr("data-kuid"));
            }
            if (miniId.length > 0) { //众评内容页
                fx.getApiData(function (bt) { fx.miniPos(miniNav, bt); }, kuid);
            }
            if (buyId.length > 0 && $(".box").css("display") == 'block') { //其它内容页
                fx.getApiData(function (bt) { fx.buyPos(buyId, bt); }, kuid);
            }

            //首页 增加今日值得买凤凰跳转 统计 增加cms统计
            if ($('#countn').attr('generalid') == 1192960) {
                $('.Mid2Lpic a').each(function (index, item) {
                    var url = $(this).attr('href')
                    var qurl = url.slice(0, url.indexOf('#'))
                    var durl = url.slice(url.indexOf('#'), url.length)
                    var href = qurl + '?ukey=cc09kO%2FlVEK5FjEI0vhYwcIC3%2Bw2gE8spU%2FWIAcKBcdiM0yRaxBnyHaDhw' + '&' + durl
                    $(this).attr('href', href)
                })
                //增加cms统计
                $('.Mid2Lpic  .Mid2LItem a').on('click', function () {
                    GetHits(1475012)
                })
            }
        }
    };
    fx.init();
})(jQuery);