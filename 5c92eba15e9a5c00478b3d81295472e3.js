$.browser={}
$.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
window.replaceTag=[
    {'title':'英雄联盟','url':'//bbs.nga.cn/thread.php?fid=-152678'},
    {'title':'魔兽世界','url':'//bbs.nga.cn/thread.php?fid=7'},
    {'title':'星际争霸2','url':'//bbs.nga.cn/thread.php?fid=406'},
    {'title':'炉石传说','url':'//bbs.nga.cn/thread.php?fid=422'},
    {'title':'暗黑3','url':'//bbs.nga.cn/thread.php?fid=318'},
    {'title':'守望先锋','url':'//bbs.nga.cn/thread.php?fid=459'},
    {'title':'风暴英雄','url':'//bbs.nga.cn/thread.php?fid=431'},
    {'title':'魔兽争霸3','url':'//bbs.nga.cn/thread.php?fid=490'},
    {'title':'游戏综合','url':'//bbs.nga.cn/thread.php?fid=414'},
    {'title':'网事杂谈','url':'//bbs.nga.cn/thread.php?fid=-7'},
    {'title':'影音讨论区','url':'//bbs.nga.cn/thread.php?fid=-576177'},
    {'title':'怪物猎人','url':'//bbs.nga.cn/thread.php?fid=427'},
    {'title':'二次元','url':'//bbs.nga.cn/thread.php?fid=-447601'},
    {'title':'DOTA2','url':'//bbs.nga.cn/thread.php?fid=321'},
    {'title':'战舰世界','url':'//bbs.nga.cn/thread.php?fid=441'},
    {'title':'剑网3','url':'//bbs.nga.cn/thread.php?fid=-7861121'},
    {'title':'剑灵','url':'//bbs.nga.cn/thread.php?fid=-65653'},
    {'title':'手游','url':'//bbs.nga.cn/thread.php?fid=428'},
    {'title':'皇室战争','url':'//bbs.nga.cn/thread.php?fid=492'},
    {'title':'舰队collection','url':'//bbs.nga.cn/thread.php?fid=-7202235'},
    {'title':'战舰少女','url':'//bbs.nga.cn/thread.php?fid=-149110'},
    {'title':'镶金玫瑰旅店','url':'//bbs.nga.cn/thread.php?fid=254'},
    {'title':'壁画洞窟','url':'//bbs.nga.cn/thread.php?fid=124'},
    {'title':'幻化讨论','url':'//bbs.nga.cn/thread.php?fid=388'},
    {'title':'坦克世界','url':'//bbs.nga.cn/thread.php?fid=-46468'},
    {'title':'汽车俱乐部','url':'//bbs.nga.cn/thread.php?fid=-343809'},
    {'title':'VR设备与游戏应用','url':'//bbs.nga.cn/thread.php?fid=499'},
    {'title':'恩基爱厨艺美食交流','url':'//bbs.nga.cn/thread.php?fid=-608808'},
    {'title':'IT电子','url':'//bbs.nga.cn/thread.php?fid=436'},
    {'title':'Fate/Grand Order','url':'//bbs.nga.cn/thread.php?fid=540'},
    {'title':'阴阳师','url':'//bbs.nga.cn/thread.php?fid=538'},
    {'title':'战舰少女R','url':'//bbs.nga.cn/thread.php?fid=-149110'},
    {'title':'绝地求生','url':'//bbs.nga.cn/thread.php?fid=568'},
    {'title':'彩虹六号','url':'//bbs.nga.cn/thread.php?fid=600'},
    {'title':'堡垒之夜','url':'//bbs.nga.cn/thread.php?fid=609'},
    {'title':'碧蓝幻想','url':'//bbs.nga.cn/thread.php?fid=560'},
    {'title':'碧蓝航线','url':'//bbs.nga.cn/thread.php?fid=564'},
    {'title':'篮球','url':'//bbs.nga.cn/thread.php?fid=485'},
    {'title':'流放之路','url':'//bbs.nga.cn/thread.php?fid=-5080470'},
    {'title':'少女前线','url':'//bbs.nga.cn/thread.php?fid=-547859'},
    {'title':'第五人格','url':'//bbs.nga.cn/thread.php?fid=607'},
    {'title':'王者荣耀','url':'//bbs.nga.cn/thread.php?fid=516'},
    {'title':'CSGO','url':'//bbs.nga.cn/thread.php?fid=482'}
];

if (window.CanvasRenderingContext2D) {
    CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg) {
// 初始保存
// 初始保存
        this.save();
// 位移到目标点
        this.translate(x, y);
        this.beginPath();
// 画出圆弧
        this.arc(0, 0, radius, sDeg, eDeg);
// 再次保存以备旋转
        this.save();
// 旋转至起始角度
        this.rotate(eDeg);
// 移动到终点，准备连接终点与圆心
        this.moveTo(radius, 0);
// 连接到圆心
        this.lineTo(0, 0);
// 还原
        this.restore();
// 旋转至起点角度
        this.rotate(sDeg);
// 从圆心连接到起点
        this.lineTo(radius, 0);
        this.closePath();
// 还原到最初保存的状态
        this.restore();
        return this;
    }
}
var animateLib='.animated{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated200{-webkit-animation-duration:0.2s;animation-duration:0.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated500{-webkit-animation-duration:0.5s;animation-duration:0.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated1000{-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated1500{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated2000{-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-fill-mode:both;animation-fill-mode:both}.animated.infinite{-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.animated.hinge{-webkit-animation-duration:2s;animation-duration:2s}.animated.bounceIn,.animated.bounceOut{-webkit-animation-duration:.75s;animation-duration:.75s}.animated.flipOutX,.animated.flipOutY{-webkit-animation-duration:.75s;animation-duration:.75s}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}100%{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes bounce{0%,20%,53%,80%,100%{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}40%,43%{-webkit-animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);-webkit-transform:translate3d(0,-30px,0);transform:translate3d(0,-30px,0)}70%{-webkit-animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);animation-timing-function:cubic-bezier(0.755,0.050,0.855,0.060);-webkit-transform:translate3d(0,-15px,0);transform:translate3d(0,-15px,0)}90%{-webkit-transform:translate3d(0,-4px,0);transform:translate3d(0,-4px,0)}}.bounce{-webkit-animation-name:bounce;animation-name:bounce;-webkit-transform-origin:center bottom;transform-origin:center bottom}@-webkit-keyframes fadeIn{0%{opacity:0}100%{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes bounceInDown{0%,60%,75%,90%,100%{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000)}0%{opacity:0;-webkit-transform:translate3d(0,-3000px,0);transform:translate3d(0,-3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,25px,0);transform:translate3d(0,25px,0)}75%{-webkit-transform:translate3d(0,-10px,0);transform:translate3d(0,-10px,0)}90%{-webkit-transform:translate3d(0,5px,0);transform:translate3d(0,5px,0)}100%{-webkit-transform:none;transform:none}}.bounceInDown{-webkit-animation-name:bounceInDown;animation-name:bounceInDown}@-webkit-keyframes slideInLeft{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);visibility:visible}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.slideInLeft{-webkit-animation-name:slideInLeft;animation-name:slideInLeft}@-webkit-keyframes bounceInUp{0%,60%,75%,90%,100%{-webkit-animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000);animation-timing-function:cubic-bezier(0.215,0.610,0.355,1.000)}0%{opacity:0;-webkit-transform:translate3d(0,3000px,0);transform:translate3d(0,3000px,0)}60%{opacity:1;-webkit-transform:translate3d(0,-20px,0);transform:translate3d(0,-20px,0)}75%{-webkit-transform:translate3d(0,10px,0);transform:translate3d(0,10px,0)}90%{-webkit-transform:translate3d(0,-5px,0);transform:translate3d(0,-5px,0)}100%{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.bounceInUp{-webkit-animation-name:bounceInUp;animation-name:bounceInUp}';
$(function(){
    $('html,body').scrollTop(0);
    var AN=function(s){
        var k=['-moz-','-webkit-','-ms-','-o-'],y=s.replace(/(-webkit-)/g,'');
        for(i in k){
            y+='\n\/* ###'+k[i]+'专用### *\/\n';
            y+=s.replace(/(-webkit-)/g,k[i]);
        }
        return y+'\n';
    }
    $('#eventsTag').find('li').each(function () {
        $(this).mousemove(function () {
            $(this).addClass('cur').siblings().removeClass('cur');
            var cur = $(this).attr('data-event');
            $('#events').find('.'+cur).fadeIn('fast').siblings().fadeOut('fast');
        })
    })


    $('head').append('<style type="text/css">'+AN(animateLib)+'</style>');

    $('.scrollA').each(function() {
        var a = $(this),
            b = a.find('.scrollA'),
            c = a.find('.scrollC'),
            d = a.find('.scrollD'),
            e = a.find('.scrollE'),
            l = a.find('.scrollL'),
            r = a.find('.scrollR'),

            g = a.find('.txts'),
            gg = a.find('.urls'),
            h = a.find('.scrollF'),
            v = 6000,
            s = Math.ceil(d.size() / 1),
            i = 0,
            t = null,
            ct = null;
        d.each(function(){e.append('<span><canvas width="16" height="16"></canvas></span>')});
        var f = e.find('span');
        var can=e.find('canvas'),
            fna = function(arg) {
                var st=v/20;
                var txtHtml = '<div class="txt"><a href="'+gg.eq(i).val()+'" title="" target="_blank"><h2 class="tit">'+g.eq(i).val()+'</h2></a></div>';
                f.removeClass('cur').eq(i).addClass('cur'),h.html(txtHtml)
                if($.browser.msie && $.browser.version<9){
                    f.removeClass('iecur').eq(i).addClass('iecur'),h.html(txtHtml)
                    return
                }
                if(arg=='animate'){
                    d.fadeOut(1000).eq(i).fadeIn(1000)
                }
                if(arg=='hover'){
                    d.stop().attr('style','').hide().eq(i).show()
                    fnc(v/20)
                    return ;
                }
                if(arg=='initializing'){
                    d.hide().eq(i).show()
                }
                clearInterval(ct);
                ct=setInterval(function(){
                    if(st<1) return
                    st--;
                    fnc(st)
                },20)
                ;
            },
            fnb = function() {
                t = setInterval(function() {
                    i = i++ >= s - 1 ? 0 : i++;
                    fna('animate')
                }, v)
            },fnc=function(intervalIndex){
                var ctx=can.eq(i).get(0).getContext('2d')
                ctx.clearRect(0,0,16,16);
                ctx.fillStyle="#cccccc";;
                ctx.sector(8,8,8,-Math.PI * 0.5,Math.PI * 2/v*20*intervalIndex-Math.PI * 0.5).fill();
            };
        f.hover(function(){
            i= f.index(this);
            fna('hover')
        },function(){}),
            r.click(function() {
                i = i++ >= s - 1 ? 0 : i++;
                fna('hover')
            }).bind('selectstart', function() {return !1;}),
            l.click(function() {
                i = i-- <= 0 ? s - 1 : i--;
                fna('hover')
            }).bind('selectstart', function() {return !1;}),
            a.hover(function(){
                clearInterval(t);
                clearInterval(ct);
            },function(){
                fnb();
                fna('initializing')
            }),
            fna('initializing')
            ,fnb()
        ;
    });


    $('.topics').on('mouseenter','.img',function(){
        $(this).find('.imghide').addClass('fadeIn animated').show()
    }).on('mouseleave','.img',function(){
        $(this).find('.imghide').addClass('fadeIn animated').hide()
    })

    $('[data-menu]').each(function(){
        var h=$(this).find('.hideLi').addClass('fadeInDown animated200');
        $(this).hover(function(){
            h.show()
        },function(){
            h.hide()
        })
    });

    function replaceFrom(eles){
        var r=replaceTag;
        eles.each(function(){
            var o=$(this);
            var t=o.text();
            if(t=='') return;
            for(var i=0;i<r.length;i++){
                if(r[i].title.indexOf(t)>=0 || t.indexOf(r[i].title)>=0){
                    var e='<a href="'+r[i].url+'">'+r[i].title+'</a>';
                    o.html(e)
                    break
                }
            }
        })
    }
    replaceFrom($('.topics .oth .f'));

    ;(function(){
        var locked="no",
            obj=$('#loadEven'),
            geturl=window.location.href.replace(/(index\.html.*)/g,''),
            moreTxt=$('.addMore'),
            index=1;
        if(obj.size()<=0) return;
     
        function suburl(){
            if(geturl.substring(geturl.length-1,geturl.length)=='/'){
                geturl+='index.html';
            }
            var j=geturl.indexOf('.html');
            return geturl.substring(0,j)+'_'+index+'.html';
        }

        function appends(s){
            s=$(s).addClass('bounceInUp animated');
            obj.append(s);
            replaceFrom(s.find('.f'));
            moreTxt.hide()
            if(index > 3){
                locked="yes";
                $('.clickAddMore').show()
            }else {
                locked="no";
            }
        }
        $('.clickAddMore').click(function () {
            var types = $("#type").val();
            index++;
            locked="yes";
            moreTxt.show();
            $('.clickAddMore').hide();
            $.post('//bbs.nga.cn/nuke.php?__lib=www_api&__act=hot_post_page&__output=11',{"t":types,"page":index}, function(d){
                if (d.error) {
                    return layer.alert("获取数据错误");
                }
                var posthtmlStr = '';
                for(var k in d.data[0]){
                    posthtmlStr += '<li class="clearfix li">';
                    posthtmlStr += '<div class="img"><a href="'+d.data[0][k]['url']+'" style="background-image:url('+d.data[0][k]['picurl']+')"><div class="imghide">';
                    posthtmlStr += '<div class="posi"><strong class="cn">'+d.data[0][k]['source']+'</strong><span class="en">read more</span></div></div></a></div>';
                    posthtmlStr += '<div class="txt"><h2 class="tit"><a href="'+d.data[0][k]['url']+'" title="'+d.data[0][k]['title']+'">'+d.data[0][k]['title']+'</a></h2><p class="dig">'+d.data[0][k]['digest']+'</p><div class="oth"><span class="f">'+d.data[0][k]['source']+'</span><span class="a">'+d.data[0][k]['author']+'</span><span class="d">'+d.data[0][k]['posttime']+'</span></div></div></li>'; 
                }
                if(posthtmlStr==''){
                    moreTxt.hide()
                    return ;
                }
                setTimeout(function(){
                    appends(posthtmlStr);
                    $('.clickAddMore').show()
                },500);
            })
        });
        $('.totop').click(function(){$('html,body').animate({scrollTop: '0px'}, 500)})
        $(window).scroll(function(){
            var b = $('.totop'),h = 20,isShow = $(document).scrollTop() + $(window).height() > b.parent().position().top
            if(isShow){
                b.css({'display':'block','position':'absolute','bottom': h + b.parent().height() +'px','left':'-60px'})
            }
            else{
                if($(document).scrollTop() < $(window).height()){
                    b.css({'display':'none'})
                }else{
                    b.css({'display':'block','position':'fixed','bottom':h + 'px','left':(($('body').width() - $('.body').width()) / 2 - 60) + 'px'})
                }
            }
            if(($(this).scrollTop()+$(window).height()) >= $(document.body).outerHeight(true)-10 && locked=="no"){
                index++;
                locked="yes";
                var urls=suburl();
                moreTxt.show();
                $.ajax({
                    type : 'GET',
                    url : urls,
                    success : function (response, status, xhr) {
                        if(response==''){
                            moreTxt.hide()
                            return ;
                        }
                        setTimeout(function(){
                            appends(response);
//    $('a').each(function () {
//        var href = $(this).attr('href').replace('game.nga.cn','game.ngacn.cc')
//        href = href.replace('app.nga.cn','app.178.com')
//        href = href.replace('nga.cn/','ngacn.cc/')
//        $(this).attr('href',href)
//    })
                        },500);
                    },
                    error : function(){
                        moreTxt.hide()
                    }
                });
            }

        })
    })();

    (function () {
        // $.get('http://tools.nga.cn/ngacn/index_api.php',function (data) {
        //     var logo = {
        //         '英雄联盟':'//cimg.178.com/nga/s/v5/match/l.png',
        //         '守望先锋':'//cimg.178.com/nga/s/v5/match/o.png',
        //         '王者荣耀':'//cimg.178.com/nga/s/v5/match/k.png',
        //         'DOTA2':'//cimg.178.com/nga/s/v5/match/d.png'
        //     }
        //     var innerHTML = ''
        //     var matchSta = {ed:'已结束',ing:'进行中',not:'未开始'}
        //     for(var i = 0; i< data.length; i++){
        //         innerHTML += '<li><a href="'+(data[i].match.video||'javascript:void(0)')+'" target="_blank">' +
        //             '<img src="' + logo[data[i].game] + '"><div class="info">' +
        //             '<span class="i">'+matchSta[data[i].match.sta]+'</span>' +
        //             '<h5>'+data[i].match.title+'</h5><div class="txt">' +
        //             '<span class="nameA"><span class="name">'+data[i].match.nameA+'</span></span>' +
        //             '<span class="sizeA">'+data[i].match.sizeA.replace('--','-')+'</span>' +
        //             '<span class="vs">:</span>' +
        //             '<span class="sizeB">'+data[i].match.sizeB.replace('--','-')+'</span>' +
        //             '<span class="nameB"><span class="name">'+data[i].match.nameB+'</span></span>' +
        //             '</div><span class="t">'+data[i].match.time.replace('  ',' ')+'</span></div></a></li>'
        //     }
        //     $('#matches').html(innerHTML)
        // },'jsonp')
        function toMatchTime(t){
            var date = new Date(t * 1e3)
            var number =  ['00','01','02','03','04','05','06','07','08','09']
            return (number[date.getMonth() + 1] || date.getMonth() + 1) + '-' +
                (number[date.getDate()] || date.getDate()) + ' ' +
                (number[date.getHours()] || date.getHours()) + ':' +
                (number[date.getMinutes()] || date.getMinutes())
        }
        $.ajax({
            type:'GET',
            url:'https://bbs.nga.cn/nuke.php?__lib=data_query&__act=recommend_match&__output=1',
            dataType:'script',
            scriptCharset:'GBK',
            success:function () {
                var innerHTML = '';
                var logo = {
                    '炉石传说':'//img.nga.178.com/attachments/mon_202006/22/-ikzzQ5-104iK1S1o-1o.png',
                    '英雄联盟':'//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-fb2vK1S1o-1o.png',
                    '守望先锋':'//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-5xvvK2S1o-1o.png',
                    '王者荣耀':'//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-jfxcK2S1o-1o.png',
                    'DOTA2'  :'//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-gscxK2S1o-1o.png'
                };
                var matches = window.script_muti_get_var_store.data[0].matches;
                for(var i in matches){
                    if(matches.hasOwnProperty(i) && logo[matches[i].game_name]){
                        innerHTML += '<li><a href="'+(matches[i].video||'javascript:void(0)')+'" target="_blank">' +
                            '<img src="' + logo[matches[i].game_name] + '"><div class="info">' +
                            '<span class="i">' + matches[i].match_type + '</span>' +
                            '<h5>' + matches[i].event_name + '</h5><div class="txt">' +
                            '<span class="nameA"><span class="name">' + matches[i].team1_name + '</span></span>' +
                            '<span class="sizeA">' + (typeof matches[i].score1 === 'number' ? matches[i].score1 : matches[i].score1.replace('--','-')) + '</span>' +
                            '<span class="vs">:</span>' +
                            '<span class="sizeB">' + (typeof matches[i].score2 === 'number' ? matches[i].score2 : matches[i].score2.replace('--','-')) + '</span>' +
                            '<span class="nameB"><span class="name">'+matches[i].team2_name+'</span></span>' +
                            '</div><span class="t">' + toMatchTime(matches[i].match_time) + '</span></div></a></li>'
                    }
                }
                $('#matches').html(innerHTML)
            }
        })
    })();

    var hot_pics = [
        '//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-hyalK2S1o-1o.png',
        '//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-efuiK3S1o-1o.png',
        '//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-g478K3S1o-1o.png',
        '//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-82jmK2S1o-1o.png'
    ];

    (function () {
        $.ajax({
            type:'GET',
            url:'https://nga.178.com/nuke.php?__lib=load_topic&__act=load_topic_reply_ladder&__output=1',
            dataType:'script',
            scriptCharset:'GBK',
            success:function () {
                var hotTopics = window.script_muti_get_var_store.data[0];
                var forum = window.script_muti_get_var_store.data[1];
                window.script_muti_get_var_store = null;
                var innerHTML = '',topicLength = 0;
                for(var i in hotTopics){
                    if(hotTopics.hasOwnProperty(i) && topicLength < 4){
                        innerHTML += '<li><img src="' + hot_pics[Math.floor(Math.random() * 4)] + '">' +
                            '<a href="//bbs.nga.cn/read.php?tid='+hotTopics[i].tid+'" target="_blank">'+'<span>'+forum[hotTopics[i].fid]+'</span></a>' +
                            '<a href="//bbs.nga.cn/read.php?tid='+hotTopics[i].tid+'" target="_blank" class="subject">'+hotTopics[i].subject+'</a></li>'
                        topicLength++;
                    }
                }
                $('#hot').html(innerHTML)
            }
        })
    })();

    $('#hotTopicFresh').click(function () {
        $.ajax({
            type:'GET',
            url:'https://nga.178.com/nuke.php?__lib=load_topic&__act=load_topic_reply_ladder&__output=1',
            dataType:'script',
            scriptCharset:'GBK',
            success:function () {
                var hotTopics = window.script_muti_get_var_store.data[0];
                var forum = window.script_muti_get_var_store.data[1];
                window.script_muti_get_var_store = null;
                var innerHTML = '',topicLength = 0;
                for(var i in hotTopics){
                    if(hotTopics.hasOwnProperty(i) && topicLength < 4){
                        innerHTML += '<li><img src="' + hot_pics[Math.floor(Math.random() * 4)] + '">' +
                            '<a href="//bbs.nga.cn/read.php?tid='+hotTopics[i].tid+'" target="_blank">'+'<span>'+forum[hotTopics[i].fid]+'</span></a>' +
                            '<a href="//bbs.nga.cn/read.php?tid='+hotTopics[i].tid+'" target="_blank" class="subject">'+hotTopics[i].subject+'</a></li>'
                        topicLength++;
                    }
                }
                $('#hot').html(innerHTML);
                $('#rollText').html('=&nbsp;'+Math.floor(Math.random()*100+1))
            }
        })
    })

    // ;(function () {
    //     var cookie = function(x){if(x){var a=document.cookie.indexOf(x+"=");if(a!=-1){return document.cookie.substring((a+x.length+1),document.cookie.length).split(";")[0];}else{return "";}}},
    //         uid = cookie('ngaPassportUid'), uinfo = unescape(cookie('ngacn0comUserInfo'));
    //     if(uid){
    //         uinfo = uinfo.split("\t")//username/utf8name/gid/mid/null/rvrc/money/active/null/medal
    //         if(uinfo[1] && uinfo[3])
    //             var uname = decodeURIComponent(uinfo[1]), ugid = uinfo[3]
    //         else
    //             var uid=0,uname='',ugid=0
    //     }
    //     else{
    //         uid=0
    //         uinfo = decodeURIComponent(cookie('_178c'))
    //         if(uinfo){
    //             uinfo = uinfo.split('#')
    //             if(uinfo[0] && uinfo[2]){
    //                 uname = uinfo[2]
    //                 uid = uinfo[0]
    //             }
    //         }
    //     }
    //     if(uid) {
    //         jQuery.ajax({
    //             type: 'GET',
    //             url: 'https://bbs.nga.cn/nuke.php?__lib=ucp&__act=get&uid=' + uid + '&lite=js',
    //             dataType: 'script',
    //             scriptCharset: 'GBK',
    //             success: function () {
    //                 var avatars = [];
    //                 var avatar = window.script_muti_get_var_store.data[0].avatar;
    //                 window.script_muti_get_var_store = null;
    //                 var avatarJSON;
    //                 try {
    //                     avatarJSON = jQuery.parseJSON(avatar)
    //                 }
    //                 catch (e) {
    //                     avatarJSON = avatar.split('|')
    //                 }
    //                 for (var i in avatarJSON) {
    //                     if(avatarJSON[i].charAt(0)=='.'){
    //                         var info = avatarJSON[i].match(/^\.a\/(\d+)_(\d+)\.(jpg|png|gif)\?(\d+)/)
    //                         avatars.push("http://img.nga.cn/avatars/2002"+'/'+('000000000'+(info[1]|0).toString(16)).replace(/.+?([0-9a-z]{3})([0-9a-z]{3})([0-9a-z]{3})$/,'$3/$2/$1')+'/'+info[1]+'_'+info[2]+'.'+info[3]+'?'+info[4]);
    //                     }
    //                     else {
    //                         avatars.push(avatarJSON[i]);
    //                     }
    //                 }
    //                 $('#avatar').css('display','block').attr('src',avatars[Math.floor(Math.random()*avatars.length)]).parent().css('display','block');
    //             }
    //         })
    //     }
    // })();

    $('[data-tagName]').each(function(){
        if(window.tagNamer){
            var n=$(this).attr('data-tagName');
            if(n==window.tagNamer){
                $(this).addClass('cur')
                return false;
            }
        }
    })
//    $('a').each(function () {
//        var href = $(this).attr('href').replace('game.nga.cn','game.ngacn.cc')
//        href = href.replace('app.nga.cn','app.178.com')
//        href = href.replace('nga.cn/','ngacn.cc/')
//        $(this).attr('href',href)
//    })
})