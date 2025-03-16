layui.use(function(){
        var layer = layui.layer
        ,form = layui.form
        ,laypage = layui.laypage
        ,element = layui.element
        ,laydate = layui.laydate
        ,util = layui.util
        ,upload = layui.upload
        // ,carousel = layui.carousel
        ,$ = layui.$

        //首页-顶部轮播
        function getHotPic() {
            $.post('//bbs.nga.cn/nuke.php?__lib=www_api&__act=hot_pic&__output=11', function(d){
                if (d.error) {
                    return layer.alert("获取数据错误");
                }
                if(d.data && d.data[0]){
                    var htmlStr0 = '';
                    htmlStr0 += '<div class="maskFilter" style="background-image:url('+d.data[0][0]['picurl']+')"></div>';
                    htmlStr0 += ' <a class="pic" href="'+d.data[0][0]['url']+'" title="'+d.data[0][0]['title']+'">';
                    htmlStr0 += '<img src="'+d.data[0][0]['picurl']+'" alt="'+d.data[0][0]['url']+'" title="'+d.data[0][0]['title']+'">';
                    htmlStr0 += '</a>';
                    htmlStr0 += '<div class="txt">';
                    htmlStr0 += '<a href="'+d.data[0][0]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][0]['title']+'</h2></a>';
                    htmlStr0 += '</div>';
                    document.getElementById("scrollD0").innerHTML = htmlStr0;
                    document.getElementById("txts0").value = d.data[0][0]['title'];
                    document.getElementById("urls0").value = d.data[0][0]['url'];

                    var htmlStr1 = '';
                    htmlStr1 += '<div class="maskFilter" style="background-image:url('+d.data[0][1]['picurl']+')"></div>';
                    htmlStr1 += ' <a class="pic" href="'+d.data[0][1]['url']+'" title="'+d.data[0][1]['title']+'">';
                    htmlStr1 += '<img src="'+d.data[0][1]['picurl']+'" alt="'+d.data[0][1]['url']+'" title="'+d.data[0][1]['title']+'">';
                    htmlStr1 += '</a>';
                    htmlStr1 += '<div class="txt">';
                    htmlStr1 += '<a href="'+d.data[0][1]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][1]['title']+'</h2></a>';
                    htmlStr1 += '</div>';
                    document.getElementById("scrollD1").innerHTML = htmlStr1;
                    document.getElementById("txts1").value = d.data[0][1]['title'];
                    document.getElementById("urls1").value = d.data[0][1]['url'];

                    var htmlStr2 = '';
                    htmlStr2 += '<div class="maskFilter" style="background-image:url('+d.data[0][2]['picurl']+')"></div>';
                    htmlStr2 += ' <a class="pic" href="'+d.data[0][2]['url']+'" title="'+d.data[0][2]['title']+'">';
                    htmlStr2 += '<img src="'+d.data[0][2]['picurl']+'" alt="'+d.data[0][2]['url']+'" title="'+d.data[0][2]['title']+'">';
                    htmlStr2 += '</a>';
                    htmlStr2 += '<div class="txt">';
                    htmlStr2 += '<a href="'+d.data[0][2]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][2]['title']+'</h2></a>';
                    htmlStr2 += '</div>';
                    document.getElementById("scrollD2").innerHTML = htmlStr2;
                    document.getElementById("txts2").value = d.data[0][2]['title'];
                    document.getElementById("urls2").value = d.data[0][2]['url'];

                    var htmlStr3 = '';
                    htmlStr3 += '<div class="maskFilter" style="background-image:url('+d.data[0][3]['picurl']+')"></div>';
                    htmlStr3 += ' <a class="pic" href="'+d.data[0][3]['url']+'" title="'+d.data[0][3]['title']+'">';
                    htmlStr3 += '<img src="'+d.data[0][3]['picurl']+'" alt="'+d.data[0][3]['url']+'" title="'+d.data[0][3]['title']+'">';
                    htmlStr3 += '</a>';
                    htmlStr3 += '<div class="txt">';
                    htmlStr3 += '<a href="'+d.data[0][3]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][3]['title']+'</h2></a>';
                    htmlStr3 += '</div>';
                    document.getElementById("scrollD3").innerHTML = htmlStr3;
                    document.getElementById("txts3").value = d.data[0][3]['title'];
                    document.getElementById("urls3").value = d.data[0][3]['url'];

                    var htmlStr4 = '';
                    htmlStr4 += '<div class="maskFilter" style="background-image:url('+d.data[0][4]['picurl']+')"></div>';
                    htmlStr4 += ' <a class="pic" href="'+d.data[0][4]['url']+'" title="'+d.data[0][4]['title']+'">';
                    htmlStr4 += '<img src="'+d.data[0][4]['picurl']+'" alt="'+d.data[0][4]['url']+'" title="'+d.data[0][4]['title']+'">';
                    htmlStr4 += '</a>';
                    htmlStr4 += '<div class="txt">';
                    htmlStr4 += '<a href="'+d.data[0][4]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][4]['title']+'</h2></a>';
                    htmlStr4 += '</div>';
                    document.getElementById("scrollD4").innerHTML = htmlStr4;
                    document.getElementById("txts4").value = d.data[0][4]['title'];
                    document.getElementById("urls4").value = d.data[0][4]['url'];
                }
            })
        }
        getHotPic();

        //首页-专栏轮播
        function getZtPic() {
            $.post('//bbs.nga.cn/nuke.php?__lib=www_api&__act=zt_pic&__output=11', function(d){
                if (d.error) {
                    return layer.alert("获取数据错误");
                }
                if(d.data && d.data[0]){
                    var htmlStr0 = '';
                    htmlStr0 += '<a class="pic" href="https://bbs.nga.cn/read.php?tid=34984566" title="'+d.data[0][0]['title']+'">';
                    htmlStr0 += '<img class="img" src="'+d.data[0][0]['picurl']+'" alt="'+d.data[0][0]['title']+'"><img class="mark" src="//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-40l5K4T8S2h-2u.png"></a>';
                    htmlStr0 += '<div class="txt"><a href="'+d.data[0][0]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][0]['title']+'</h2></a></div>';
                    document.getElementById("scrollDzt0").innerHTML = htmlStr0;
                    document.getElementById("ztxts0").value = d.data[0][0]['title'];
                    document.getElementById("zurls0").value = d.data[0][0]['url'];

                    var htmlStr1 = '';
                    htmlStr1 += '<a class="pic" href="'+d.data[0][1]['url']+'" title="'+d.data[0][1]['title']+'">';
                    htmlStr1 += '<img class="img" src="'+d.data[0][1]['picurl']+'" alt="'+d.data[0][1]['title']+'"><img class="mark" src="//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-40l5K4T8S2h-2u.png"></a>';
                    htmlStr1 += '<div class="txt"><a href="'+d.data[0][1]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][1]['title']+'</h2></a></div>';
                    document.getElementById("scrollDzt1").innerHTML = htmlStr1;
                    document.getElementById("ztxts1").value = d.data[0][1]['title'];
                    document.getElementById("zurls1").value = d.data[0][1]['url'];

                    var htmlStr2 = '';
                    htmlStr2 += '<a class="pic" href="'+d.data[0][2]['url']+'" title="'+d.data[0][2]['title']+'">';
                    htmlStr2 += '<img class="img" src="'+d.data[0][2]['picurl']+'" alt="'+d.data[0][2]['title']+'"><img class="mark" src="//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-40l5K4T8S2h-2u.png"></a>';
                    htmlStr2 += '<div class="txt"><a href="'+d.data[0][2]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][2]['title']+'</h2></a></div>';
                    document.getElementById("scrollDzt2").innerHTML = htmlStr2;
                    document.getElementById("ztxts2").value = d.data[0][2]['title'];
                    document.getElementById("zurls2").value = d.data[0][2]['url'];

                    var htmlStr3 = '';
                    htmlStr3 += '<a class="pic" href="'+d.data[0][3]['url']+'" title="'+d.data[0][3]['title']+'">';
                    htmlStr3 += '<img class="img" src="'+d.data[0][3]['picurl']+'" alt="'+d.data[0][3]['title']+'"><img class="mark" src="//img.nga.178.com/attachments/mon_201909/27/-ikzzQ5-40l5K4T8S2h-2u.png"></a>';
                    htmlStr3 += '<div class="txt"><a href="'+d.data[0][3]['url']+'" title="" target="_blank"><h2 class="tit">'+d.data[0][3]['title']+'</h2></a></div>';
                    document.getElementById("scrollDzt3").innerHTML = htmlStr3;
                    document.getElementById("ztxts3").value = d.data[0][3]['title'];
                    document.getElementById("zurls3").value = d.data[0][3]['url'];
                }
            })
        }//
        getZtPic();
        //热帖
        function getHotPost() {
            $.post('//bbs.nga.cn/nuke.php?__lib=www_api&__act=hot_post&__output=11',{"t":'www'}, function(d){
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
                document.getElementById("hot_post").innerHTML = posthtmlStr;
            })
        }//
        getHotPost();
        //热帖
        function getHotPost1() {
            $.post('//bbs.nga.cn/nuke.php?__lib=www_api&__act=hot_post_page&__output=11',{"t":'www'}, function(d){
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
                document.getElementById("loadEven").innerHTML = posthtmlStr;
                document.getElementById("type").value = 'www';
                $('.clickAddMore').show();
            })
        }//
        getHotPost1();
        
        //论坛活动 select * from list_ngacn where tag='论坛活动' and daynum<>-1 and power>=60 and power<255 order by daynum desc,power desc limit 0,6
        
         function bbsActivity() {
            $.post('//bbs.nga.cn/nuke.php?__lib=www_api&__act=bbs_activity&__output=11', function(d){
                if (d.error) {
                    return layer.alert("获取数据错误");
                }
                var posthtmlStr = '';
                for(var k in d.data[0]){
                    posthtmlStr += '<li><img src="'+d.data[0][k]['picurl']+'"><div class="info"><a href="'+d.data[0][k]['url']+'" class="txt" target="_blank"><strong>'+d.data[0][k]['title']+'</strong>'+d.data[0][k]['subtitle']+'</a><p class="tag"><span>'+d.data[0][k]['digest']+'</span></p><span class="t">'+d.data[0][k]['diy2']+'</span></div></li>';
                }
                document.getElementById("a").innerHTML = posthtmlStr;
            })
        }//
        bbsActivity();
    })