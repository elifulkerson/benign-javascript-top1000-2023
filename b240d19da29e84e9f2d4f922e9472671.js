// 轮播图
var c = 0;
var bannernum;
$(function() {
		//个人信息下拉
		$(".personal-con").hover(function() {
			$(".msg").show();
			$(".personal-con .arr").html("&#xe68d;");
		}, function() {
			$(".msg").hide();
			$(".personal-con .arr").html("&#xe68a;");
		});
		
		// 监听页面滚动
		$(window).scroll(function() {
			if ($(window).scrollTop() > 660) {
				$(".new-header").addClass('header-show');
			} else{
				$(".new-header").removeClass('header-show');
			};
		});
		//记住密码
		$('.analog-check').click(function(){
			$(this).find('b').toggleClass('check');
		});
		//搜素类型选择单选按钮
		$('.type-cho-con label').click(function(){
			$(this).children('b').addClass('check');
			$(this).siblings('label').find('b').removeClass('check')
		});

    // 中标动态上下无缝轮播
//  setInterval(function() {
//      // 将第一个高度变成0
//      var dynFirst = $('.dyn-bid li').first();
//      dynFirst.animate({
//          'marginTop': "-78px"
//      },
//      600,
//      function() {
//          $('.dyn-bid').append(dynFirst);
//          dynFirst.css('marginTop', '0');
//      });
//  },
//  5000);

    // 机构滚动
//  setInterval(function() {
//      var orgFirst = $('.org-scroll-list').first();
//      orgFirst.animate({
//          'marginTop': "-101px"
//      },
//      600,
//      function() {
//          $('.org-scroll').append(orgFirst);
//          orgFirst.css('marginTop', '0');
//      });
//  },
//  5000);

    // tab切换内容
//  $(".currency-title li").hover(function() {
//      var tabNum = $(this).index();
//      $(this).addClass('current').siblings('li').removeClass('current');
//      $(this).parents('.currency-con').find('.currency-box').eq(tabNum).show().siblings('.currency-box').hide();
//  });
    //最新上传切换
//  $(".last_upload_catalog li").hover(function() {
//      var tabNum = $(this).index();
//      if(tabNum==0){
//      	$(this).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(0).show().siblings('.currency-box').hide();
//      }else if(tabNum==2){
//      	$(this).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(1).show().siblings('.currency-box').hide();
//      }else if(tabNum==4){
//      	$(this).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(2).show().siblings('.currency-box').hide();
//      }else if(tabNum==6){
//      	$(this).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(3).show().siblings('.currency-box').hide();
//      }else if(tabNum==8){
//      	$(this).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(4).show().siblings('.currency-box').hide();
//      }
//      $(this).addClass('current').siblings('li').removeClass('current');
//      $(this).parents('.currency-con').find('.currency-box').eq(tabNum).show().siblings('.currency-box').hide();
//  });
   
//   function last_upload_catalogHL(obj){
//  	 var tabNum = $(obj).index();
//      if(tabNum==0){
//      	$(obj).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(0).show().siblings('.currency-box').hide();
//      }else if(tabNum==2){
//      	$(obj).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(1).show().siblings('.currency-box').hide();
//      }else if(tabNum==4){
//      	$(obj).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(2).show().siblings('.currency-box').hide();
//      }else if(tabNum==6){
//      	$(obj).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(3).show().siblings('.currency-box').hide();
//      }else if(tabNum==8){
//      	$(obj).addClass('current').siblings('li').removeClass('current');
//      	$('#quality_doc_content').find('.currency-box').eq(4).show().siblings('.currency-box').hide();
//      }
//  }
    
    

    // 机构tab滑块
//  $(".org-list li:even").hover(function() {
//      var orgNum = $(this).index() / 2;
//      var leftLength = 184 * orgNum + 84;
//      $(".triangle-arr").stop().animate({
//          "left": leftLength
//      },
//      300);
//      $(".org-con").eq(orgNum).show().siblings('.org-con').hide();
//  });

    
    
    timer = setInterval(run, 5000);
    
    
//  $('.bannerbox .banner-radio li').mouseover(function() {
//      clearInterval(timer);
//      c = $(this).index();
//      changeImg(c);
//  });
//  $('.bannerbox .banner-radio li,.bannerbox .arrow-right,.bannerbox .arrow-left').mouseout(function() {
//      timer = setInterval(run, 5000);
//  });
//  $('.bannerbox .arrow-left,.bannerbox .arrow-right').mouseover(function() {
//      clearInterval(timer);
//  });
//  $('.bannerbox .arrow-right').click(function() {
//      c++;
//      c = (c == 3) ? 0 : c;
//      changeImg(c);
//  });
//  $('.bannerbox .arrow-left').click(function() {
//      c--;
//      c = (c == -1) ? 2 : c;
//      changeImg(c);
//  });

    // 登录方式切换
    $(".pc-login").click(function() {
        $(".user-login").removeClass('show');
        $(".user-login").eq(1).addClass('show');

        Captcha.init('nocaptcha_login');
    });
    $(".weixin-login").click(function() {
        $(".user-login").removeClass('show');
        $(".user-login").eq(0).addClass('show');
    });
    $(".free-register").click(function() {
        $(".user-login").removeClass('show');
        $(".user-login").eq(1).addClass('show');

        Captcha.init('nocaptcha_login');

    });
    
    $(".user-login-top .login-tab").click(function(event) {
        var i = $(this).index();
        $(".user-login").removeClass('show');
        $(".user-login").eq(i).addClass('show');

        if (i == 1) {
            Captcha.init('nocaptcha_login');
        } else {
            Captcha.init('nocaptcha_phone');
        }
    });


})

function fetchBanner(){
    var html ='';
    $.ajax({
        'url':'/index.php?act=ajax_get_banner',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,function(m,data){
            	bannernum = msg.length;
                if (data.img_url == "javascript:void(0)") {
                    html +='<a href="'+data.img_url+'" class="img imgz" onclick="indexAddLog(\'bigbanner\',\'a\',\''+data.img_path+'\',\''+data.img_path+'\',19)">';
                }else{
                    html +='<a href="'+data.img_url+'" target="_blank" class="img imgz" onclick="indexAddLog(\'bigbanner\',\'a\',\''+data.img_path+'\',\''+data.img_path+'\',19)">';
                }
                
                html +='<img src="'+udata_url+''+data.img_path+'" alt="">';
                html +='</a>';
            });
            html +='<ul class="banner-radio">';
            $.each(msg,function(m,data){
                if(m==0){
                    html +='<li class="current" onmouseover="banner_radioHover(this);"></li>';
                }else{
                    html +='<li onmouseover="banner_radioHover(this);"></li>';
                }
            });
            $('.bannerbox').html(html);
        }
    });
}
function indexLike(){
    var html="";
    $.ajax({
        'url':'/index.php?act=guess_like',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,function(m,data){
                html+='<div class="books-each">';
                html+='<div class="bookcover-bd"><a class="bookcover" style="background: url(' + data.image + ') center center no-repeat scroll; display: block;" href="/p-' + data.p_code + '.html" target="_blank"></a></div>';
                html+='<a class="books-title" href="/p-' + data.p_code + '.html" target="_blank">'+data.p_name+'</a>';
                html+='</div>';
            });
            $('.book-like-con').html(html);
        }
    });
}
function channelShow(){
    var html ='';
    $.ajax({
        'url':'/index.php?act=ajax_image_about&image_type=4',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,function(m,data){
                html +='<a href="'+data.img_url+'" target="_blank" onclick="indexAddLog(\'smallbanner\',\'a\',\''+data.img_path+'\',\''+data.img_path+'\',26)">';
                html +='<img src="'+udata_url+''+data.img_path+'" alt="">';
                html +='</a>';
            });
            $('.column').html(html);
        }
    });
}
//免费下载的分类
function fetchFreeDownloadCatalog(){
    var html ='';
    $.ajax({
        'url':'/index.php?act=ajax_free_download_catalog',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,function(m,data){
                if(m==0){
                    html +='<li class="current" onmouseover="free_downH(this);" value="'+data.id+'">'+data.name+'</li>';
                }else{
                    html +='<li class="" onmouseover="free_downH(this);" value="'+data.id+'">'+data.name+'</li>';
                }
                if(m!= msg.length-1){
                    html +='<li class="part-line"></li>';
                }
            });
            $('#current_type_doc').html(html);
        }
    });
}
//免费下载
function getFreeDownload() {
    $.ajax({
        url: "/index.php?act=index&module_type=2",
        type: "get",
        dataType: "json",
        success: function(msg) {
            //console.log(msg);
            $.each(msg,
            function(m, data) {
                var type=m;
                var html1 = "";
                var html2 = "";
                //console.log(doc_type);
                    $.each(data,function(n,detail){
                        if(n<5){
                            html1 += '<div id="free_' + detail.p_id + '" class="books-free">';
                            html1 += '<div class="bookcover-bd"><a class="bookcover" style="background: url('+site_png+''+detail.img_path+ ') center center no-repeat scroll; display: block;" href="/p-' + detail.p_code + '.html" target="_blank"></a></div>';
                            html1 += '<a class="books-title-nowrap" href="/p-' + detail.p_code + '.html" target="_blank">' + detail.p_name + '</a>';
                            html1 += '<div class="books-price">';
                            html1 += '<span class="discount">免费</span>';
                            html1 += '<span class="book-integral">500积分</span>';
                            html1 += '</div>';
                            html1 += '</div>';
                        }
                        if(n>4&&n<10) {
                            html2 += '<div id="free_' + detail.p_id + '" class="books-free">';
                            //html2 += '<a class="bookcover" href="/p-' + detail.p_code + '.html" target="_blank"><img src="'+site_url+'/'+ detail.img_path + '" alt=""></a>';
                            html2 += '<div class="bookcover-bd"><a class="bookcover" style="background: url('+site_png+''+ detail.img_path + ') center center no-repeat scroll; display: block;" href="/p-' + detail.p_code + '.html" target="_blank"></a></div>';
                            html2 += '<a class="books-title-nowrap" href="/p-' + detail.p_code + '.html" target="_blank">' + detail.p_name + '</a>';
                            html2 += '<div class="books-price">';
                            html2 += '<span class="discount">免费</span>';
                            html2 += '<span class="book-integral">500积分</span>';
                            html2+= '</div>';
                            html2 += '</div>';
                        }
                    });
                $("#a_"+type).children('.books-free-line1').html(html1);
                $("#a_"+type).children('.books-free-line2').html(html2);
            });
        }
    });
}
function fetchAdsShow1(){
    var html ='';
    $.ajax({
        url:'/index.php?act=ajax_image_about&image_type=2',
        type:'get',
        dataType:'json',
        success:function(msg){
            $.each(msg,function(m,data){
                html +='<a href="'+data.img_url+'" target="_blank" onclick="indexAddLog(\'banner1\',\'a\',\''+data.img_path+'\',\''+data.img_path+'\',28)">';
                html +='<img src="'+udata_url+''+data.img_path+'" alt="">';
                html +='</a>';
            });
            $('#brow_1').html(html);
        }
    });
}
function fetchAdsShow2(){
    var html ='';
    $.ajax({
        url:'/index.php?act=ajax_image_about&image_type=3',
        type:'get',
        dataType:'json',
        success:function(msg){
            $.each(msg,function(m,data){
                html +='<a href="'+data.img_url+'" target="_blank" onclick="indexAddLog(\'banner2\',\'a\',\''+data.img_path+'\',\''+data.img_path+'\',32)">';
                html +='<img src="'+udata_url+''+data.img_path+'" alt="">';
                html +='</a>';
            });
            $('#brow_2').html(html);
        }
    });
}

function fetchAdsShow3(){
    var html ='';
    $.ajax({
        url:'/index.php?act=ajax_image_about&image_type=9',
        type:'get',
        dataType:'json',
        success:function(msg){
            $.each(msg,function(m,data){
                html +='<a href="'+data.img_url+'" target="_blank" onclick="indexAddLog(\'banner3\',\'a\',\''+data.img_path+'\',\''+data.img_path+'\',32)">';
                html +='<img src="'+udata_url+''+data.img_path+'" alt="">';
                html +='</a>';
            });
            $('#brow_3').html(html);
        }
    });
}

//vip折扣文档
function vipDiscountDoc(){
    var html='';
    $.ajax({
        'url':'/index.php?act=ajax_vip_in_sale_doc',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,
                function(m,data){
                	var msgl = msg.length-1;
                  if(m==msgl){
                    html +='<li class="side-itemfoot"><p class="s-d-name"><img src="'+site_url+'/resources/images/type/'+data.p_doc_format+'.png" alt=""><a href="/p-' + data.p_code + '.html" target="_blank">'+data.p_name+'</a></p>';
                    html +='<div class="hdoc-des"><p class="hdoc-lev">星级：'+data.star+'</p>';
                    html +='<span class="hdoc-paper">'+data.p_pagecount+'页</span>';
                    html +='</div></li>';
                  }else{
                  	html +='<li><p class="s-d-name"><img src="'+site_url+'/resources/images/type/'+data.p_doc_format+'.png" alt=""><a href="/p-' + data.p_code + '.html" target="_blank">'+data.p_name+'</a></p>';
                    html +='<div class="hdoc-des"><p class="hdoc-lev">星级：'+data.star+'</p>';
                    html +='<span class="hdoc-paper">'+data.p_pagecount+'页</span>';
                    html +='</div></li>';
                  }
            });
            $('.vip-free').html(html);
        }
    });
}
function hotDocShow(){
    var html='';
    $.ajax({
        'url':'/index.php?act=ajax_hot_doc',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,
                function(m,data){
                		var msgl = msg.length-1;
                  if(m==msgl){
                    html +='<li class="side-itemfoot"><p class="s-d-name"><img src="'+site_url+'/resources/images/type/'+data.p_doc_format+'.png" alt=""><a href="/p-' + data.p_code + '.html" target="_blank">'+data.p_name+'</a></p>';
                    html +='<div class="hdoc-des"><p class="hdoc-lev">星级：'+data.star+'</p>';
                    html +='<span class="hdoc-paper">'+data.p_pagecount+'页</span>';
                    html +='</div></li>';
                  }else{
                  	html +='<li><p class="s-d-name"><img src="'+site_url+'/resources/images/type/'+data.p_doc_format+'.png" alt=""><a href="/p-' + data.p_code + '.html" target="_blank">'+data.p_name+'</a></p>';
                    html +='<div class="hdoc-des"><p class="hdoc-lev">星级：'+data.star+'</p>';
                    html +='<span class="hdoc-paper">'+data.p_pagecount+'页</span>';
                    html +='</div></li>';
                  }
                });
            $('.vip-free').html(html);
        }
    });
}
//分类
function fetchLastUploadDoc(){
    var html ='';
    $.ajax({
        url: "/index.php?act=ajax_last_upload_catalog",
        type: "get",
        dataType: "json",
        success:function(msg){
            $.each(msg,
                function(m,data){
                    if(m==0){
                        html +='<li class="current" onmouseover="last_upload_catalogH(this);" value="'+data.id+'">'+data.name+'</li>';
                    }else{
                        html +='<li class="" onmouseover="last_upload_catalogH(this);" value="'+data.id+'">'+data.name+'</li>';
                    }
                    html +='<li class="part-line"></li>';
            });
            html +='<li class="up-more"><a href="/list.html" target="_blank">查看更多<i class="iconfont">&#xe6b6;</i></a></li>';
            $('.last_upload_catalog').html(html);
        }
    });
}
//最新上传
function getQualityDoc() {
    var html = "";
    $.ajax({
        url: "/index.php?act=ajax_last_upload",
        type: "get",
        dataType: "json",
        success: function(msg) {
            //console.log(msg);
            $.each(msg,
            function(m, data) {
                type=m;
                if (m == 0) {
                    html += '<div class="currency-box show">';
                } else {
                    html += '<div class="currency-box">';
                }
                $.each(data,function(n,detail){
                    html += '<div id="free_' + detail.p_id + '" class="books-free">';
                    html += '<div class="bookcover-bd"><a class="bookcover" style="background: url('+site_png+''+detail.img_path+ ') center center no-repeat scroll; display: block;" href="/p-' + detail.p_code + '.html" target="_blank"></a></div>';
                    html += '<a class="books-title" href="/p-' + detail.p_code + '.html" target="_blank">' + detail.p_name + '</a>';
                    html += '</div>';
                });
                html += '</div>';
            });
            $("#quality_doc_content").html(html);
        }
    });
}
//最新模板
function fetchNewModule(){
    var html ='';
    $.ajax({
        url:'/index.php?act=index&module_type=1',
        type: "get",
        dataType: "json",
        success: function(msg) {
            $.each(msg,function(m,data){
                html +='<li class="temp-item"><a href="/p-'+data.p_code+'.html" target="_blank">';
                var num=m+1;
                if(m==0){
                    html +='<span class="sort-numbg">'+num+'</span>';
                }else{
                    html +='<span class="sort-num">'+num+'</span>';
                }
                html +=data.p_name+'</a></li>';
            });
            html +='<li class="temp-item side-more"><a href="/list.html" target="_blank">查看更多<i class="iconfont harr-r">&#xe6b6;</i></a></li>';
            $('.temp-con').html(html);
        }
    });

}
//文档求助
function getDocHelp() {
    var html = "";
    $.ajax({
        url: "/index.php?act=ajax_doc_find",
        type: "get",
        dataType: "json",
        success: function(msg) {
            $.each(msg,
            function(m, data) {
            	if (m==0 || m==1) {
            		html+= '<div class="task-item">';
                html +='<h3><span>求助</span>';
                html += '<a class="reco-task" href="/t-' + data.t_code + '.html" target="_blank">'+data.title+'</a>';
                html += '</h3>';
                html += '<p class="task-des"><strong>'+'描述：'+'</strong>' + data.description + '</p><p class="task-num f12">积分：'+'<span class="cf60">'+Math.round(data.money*100)+'</span>';
                html += '&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;浏览人数：'+data.view_num+'&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;参与人数：'+data.join_num+'</p>';
                html += '</div>';
            	} else{
            		html+= '<div class="task-item task-item-bo">';
                html +='<h3><span>求助</span>';
                html += '<a class="reco-task" href="/t-' + data.t_code + '.html" target="_blank">'+data.title+'</a>';
                html += '</h3>';
                html += '<p class="task-des"><strong>'+'描述：'+'</strong>' + data.description + '</p><p class="task-num f12">积分：'+'<span class="cf60">'+Math.round(data.money*100)+'</span>';
                html += '&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;浏览人数：'+data.view_num+'&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;参与人数：'+data.join_num+'</p>';
                html += '</div>';
            	}
               
            });
            $("#doc_help_content").html(html);
        }
    });
}

//中标动态
function getBiddingDynamics(site_url) {
    var html = "";
    $.ajax({
        url: "/index.php?act=ajax_renwu_work_success_show",
        type: "get",
        dataType: "json",
        success: function(msg) {
            $.each(msg,
            function(m, data) {
                //console.log(data.gap);
                html += '<li>';
                html += '<a href="/' + data.login_name + '" target="_blank"><img src="' + face_url + '/' + data.face + 'm.jpg" alt=""></a>';
                //html += '<p class="dyn-tname"><a href="/t-' + data.task_id + '.html" target="_blank">' + data.name + '完成了“' + data.title + '”任务赚取了'+ Math.round(data.money*100)+'积分</p></a>';
                html += '<p class="dyn-tname"><a href="/t-' + data.t_code + '.html" target="_blank">' + data.name + '&nbsp;&nbsp;完成了任务赚取了'+ Math.round(data.money*100)+'积分</p></a>';
                html += '<p class="dyn-tre">';
                html += '<span>' + data.gap + '</span>';
                html += '<span class="cf60">+' + Math.round(data.money*100) + '积分</span>';
                html += '</p>';
                html += '</li>';
            });
            $("#bidding_dynamics_content").html(html);
        }
    });
}

//文辑广场
function getCorpusSquare() {
    var html = "";
    $.ajax({
        url: "/index.php?act=index&module_type=3",
        type: "get",
        dataType: "json",
        success: function(msg) {
            $.each(msg,
            function(m, data) {
                html += '<div class="corpus-item">';
                html += '<div class="co-left">';
                html += '<div class="co-cover-main">';
                if(data.doc_info.length==0){

                }else if(data.doc_info.length==1){
                    html += '<div class="co-cover1"><img src="'+site_png+''+data.doc_info[0].img_path+'"></div>';
                }else if(data.doc_info.length==2){
                    html += '<div class="co-cover2"><img src="'+site_png+''+data.doc_info[0].img_path+'"></div>';
                    html += '<div class="co-cover1"><img src="'+site_png+''+data.doc_info[1].img_path+'"></div>';
                }
                /*html += '<div class="co-cover2"  data="http://png.doc88.com/2008/12/13/70302747_80.png" style="background-image: url(&quot;http://png.doc88.com/2008/12/13/70302747_80.png&quot;);"></div>';
                html += '<div class="co-cover1"  data="http://png.doc88.com/2008/12/13/70302744_80.png" style="background-image: url(&quot;http://png.doc88.com/2008/12/13/70302744_80.png&quot;);"></div>';*/
                html += '<div class="co-cover" id="cover"><img src="'+site_png+''+data.img_book+'"></div>';
                html += '</div></div>';
                html += '<div class="co-right">';
                html += '<h2 class="co-name"><a href="/b-'+data.code+'.html" target="_blank">'+data.title+'</a></h2>';
                html += '<p class="co-des">简介：'+data.description+'</p>';
                html += '<p class="co-num">文档数量：'+data.doc_num+'&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;浏览次数：'+data.view_num+'次</p>';
                if(data.star_level){
                    html += '<p class="co-lev">星级： <span class="star-lev star-lev-'+data.star_level+'"></span></p>';
                }else{
                    html += '<p class="co-lev">星级： <span class="star-lev star-lev-3"></span></p>';
                }
                html += '</div>';
                html += '</div>';
            });
            $("#corpus_square_content").html(html);
        }
    });
}

//推荐文辑
function corpusRecommend(){
    var html ='';
    $.ajax({
        'url':'/index.php?act=index&module_type=4',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,function(m,data){
                html +='<li class="copsi-item"><span class="iconfont">&#xe6f5;</span><a href="/b-'+data.code+'.html" target="_blank">'+data.title+'</a>';
                html +='<div class="hdoc-des"><p class="hdoc-lev">浏览人数：'+data.view_num+'</p>';
                html +='<span class="hdoc-paper">'+data.doc_num+'P</span>';
                html +='</div></li>';
            });
            html +='<li class="temp-item side-more"><a href="/b-list.html" target="_blank">查看更多<i class="iconfont harr-r">&#xe6b6;</i></a></li>';
            $('.copus-con').html(html);
        }
    });
}
//认证用户
function authenticationUser(){
    var html ='';
    $.ajax({
        'url':'/index.php?act=index&module_type=5',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,
                function(m,data){
                   //  html +='<li class="autuser-item"><div class="aut-user-h"><a class="aut-head" href="/'+data.login_name+'" target="_blank"><img src="'+site_url+'/'+data.face+'b.jpg"/></a>';
                   //  html +='<div class="aut-des"><a class="aut-name" href="/'+data.login_name+'" target="_blank">'+data.true_name+'</a>';
                   //  html +='<p class="aut-ind">'+data.certification_appellation+'</p>';
                   // /* html +='<p><span class="star-lev star-lev-3"></span><span class="aut-scor">4分</span></p>';*/
                   //  html +='</div></div>';
                   //  html +='<ol class="aut-user-doc">';
                   //  if(data.doc_info){
                   //      $.each(data.doc_info,
                   //          function(n,detail){
                   //              html +='<li><img src="'+site_url+'/resources/images/type/'+detail.p_doc_format+'.png" alt="">';
                   //              html +='<a class="title" href="/p-'+detail.p_code+'.html" target="_blank">'+detail.p_name+'</a>';
                   //              html +='</li>';
                   //          });
                   //  }
                   //  html +='</ol>';
                   //  html +='</li>';
                    
                    // 加入配置后的认证用户文档
                    html +='<li class="autuser-item"><div class="aut-user-h"><a class="aut-head" href="/'+data.member_info.login_name+'" target="_blank"><img src="'+face_url+'/'+data.member_info.face+'b.jpg"/></a>';
                    html +='<div class="aut-des"><a class="aut-name" href="/'+data.member_info.login_name+'" target="_blank">'+data.member_info.true_name+'</a>';
                    html +='<p class="aut-ind">'+data.member_info.certification_appellation+'</p>';
                    html +='</div></div>';
                    html +='<ol class="aut-user-doc">';
                    if(data.doc_info){
                        $.each(data.doc_info,
                            function(n,detail){
                                html +='<li><img src="'+site_url+'/resources/images/type/'+detail.p_doc_format+'.png" alt="">';
                                html +='<a class="title" href="/p-'+detail.p_code+'.html" target="_blank">'+detail.p_name+'</a>';
                                html +='</li>';
                            });
                    }
                    html +='</ol>';
                    html +='</li>';

            });
            $('.autuser-con').html(html);
        }
    });
}
//机构图片
function authenticationInstitutionImage(){
    var html ='';
    $.ajax({
        'url':'/index.php?act=index&module_type=6',
        'type':'get',
        'dataType':'json',
        success: function (msg) {
            $.each(msg, function (m, data) {
                if (m == 0) {
                    html += '<li><img src="'+site_url+''+ data.img_path + '" alt=""></li>';
                } else {
                    html += '<li class="sline"></li>';
                    html += '<li><img src="'+site_url+''+ data.img_path + '" alt=""></li>';
                }
            });
            $('.org-list').html(html);
        }
    });
}
//机构文档
function authenticationInstitutionDoc(){
    var html ='';
    $.ajax({
        'url':'/index.php?act=index&module_type=6',
        'type':'get',
        'dataType':'json',
        success: function (msg) {
            html +='<div class="triangle-arr"></div>';
            html +='<ul class="org-list">';
            $.each(msg,function(m,data) {
                if(m==0){
                    html += '<li onmouseover="org_listH(this);"><img src="'+site_url+''+ data.img_path + '" alt=""></li>';
                }else{
                    html += '<li class="sline"></li>';
                    html += '<li onmouseover="org_listH(this);"><img src="'+site_url+''+ data.img_path + '" alt=""></li>';
                }
            });
            html +='</ul>';
            $.each(msg,function(m,data) {
                if(m==0){
                    html +='<div class="org-con show">';
                }else{
                    html +='<div class="org-con">';
                }
                if(data.doc_info){
                    $.each(data.doc_info,function(n,detail){
                        html +='<div class="books-sides">';
                        html +='<div class="bookcover-bd"><a class="bookcover" style="background: url('+site_png+''+detail.img_path+ ') center center no-repeat scroll; display: block;" href="p-' + detail.p_code + '.html" target="_blank"></a></div>';
                        html +='<a class="books-title" href="p-' + detail.p_code + '.html" target="_blank">'+detail.name+'</a>';
                        html +='</div>';
                    });
                }
                html +='</div>';
            });
            $('.org-container').html(html);
        }
    });
}

//入驻文库的机构
function joinStoreInstitution(){
    var html ='';
    $.ajax({
        'url':'/index.php?act=index&module_type=7',
        'type':'get',
        'dataType':'json',
        success:function(msg){
            $.each(msg,function(m,data){
                html +='<div class="org-scroll-list">';
                html +='<a href="/'+data.src+'" target="_blank"><img class="orgh-img" src="' + face_url + '/' + data.face + 'm.jpg" alt=""></a>';
                html +='<div class="org-add-time">';
                html +='<h5><a href="/'+data.src+'" target="_blank">'+data.name;
                html +='</a></h5>';
                html +='<p>官方机构入驻 <span class="org-add">'+data.gap+'</span></p>';
                html +='</div></div>';
            });
            $('.org-scroll').html(html);
        }
    });
}

//机构专区
function getOrganizationZone() {
    var html = "";
    $.ajax({
        url: "/index.php?act=ajax_institution_zone",
        type: "get",
        dataType: "json",
        success: function(msg) {
            $.each(msg,
            function(m, data) {
                html += '<li><a href="'+data.img_url+'" target="_blank"><img src="'+site_url+''+data.img_path+'" alt=""></a></li>';
               /* html += '<li><a href=""><img src="<tpl>$siteurl_static</tpl>/resources/images/agency/11.png" alt=""></a></li>';*/
        });
            $("#organization_zone_content").html(html);
        }
    });
}

//
/*function wordCount() {
    if ($("#description").val().length <= 300) {
        $("#description_count").html(300 - $("#description").val().length);
    } else {
        $("#description").val($("#description").val().substr(0, 300));
        alert("描述不能大于300个字符");
    }
}

function getLoginSta(divcls, type) {
    $.ajax({
        url: "/member.php?act=bar&u=1&t=" + type,
        dataType: 'html',
        success: function(msg) {
            $("." + divcls).html(msg);
        }
    });
}*/
//最新上传切换
function last_upload_catalogH(obj){
	 var tabNum = $(obj).index();
    if(tabNum==0){
    	$(obj).addClass('current').siblings('li').removeClass('current');
    	$('#quality_doc_content').find('.currency-box').eq(0).show().siblings('.currency-box').hide();
    }else if(tabNum==2){
    	$(obj).addClass('current').siblings('li').removeClass('current');
    	$('#quality_doc_content').find('.currency-box').eq(1).show().siblings('.currency-box').hide();
    }else if(tabNum==4){
    	$(obj).addClass('current').siblings('li').removeClass('current');
    	$('#quality_doc_content').find('.currency-box').eq(2).show().siblings('.currency-box').hide();
    }else if(tabNum==6){
    	$(obj).addClass('current').siblings('li').removeClass('current');
    	$('#quality_doc_content').find('.currency-box').eq(3).show().siblings('.currency-box').hide();
    }else if(tabNum==8){
    	$(obj).addClass('current').siblings('li').removeClass('current');
    	$('#quality_doc_content').find('.currency-box').eq(4).show().siblings('.currency-box').hide();
    }else if(tabNum==10){
        $(obj).addClass('current').siblings('li').removeClass('current');
        $('#quality_doc_content').find('.currency-box').eq(5).show().siblings('.currency-box').hide();
    }
}
//tab切换
function free_downH(obj){
//	console.log(obj);
	var freecindex = $(obj).index()/2;
	$(obj).addClass('current').siblings('li').removeClass('current');
	$(obj).parents('.currency-con').find('.currency-box').eq(freecindex).show().siblings('.currency-box').hide();
}
function org_listH(obj){
  var orgNum = $(obj).index() / 2;
  var leftLength = 184 * orgNum + 84;
  $(".triangle-arr").stop().animate({
      "left": leftLength
  },
  300);
  $(".org-con").eq(orgNum).show().siblings('.org-con').hide();
}


//轮播
function changeImg(c) {
  $('.bannerbox .img').eq(c).stop().animate({
      "opacity": 1,
      "zIndex":1
  },
  800).siblings('.img').stop().animate({
      "opacity": 0,
      "zIndex":0
  },
  1000);
  $('.bannerbox .banner-radio li').eq(c).addClass('current').siblings('li').removeClass('current');
}
function run() {
    c++;
    c = (c == bannernum) ? 0 : c;
    changeImg(c);
}
function banner_radioHover(obj){
	clearInterval(timer);
  c = $(obj).index();
  changeImg(c);
}

//首页添加点击事件
function indexAddLog(log_type, target_type, target_id, desc, order_type) {
    $.ajax({
        url: '/index.php?act=index_add_log',
        type: "post",
        data: {
            log_type: log_type,
            target_type: target_type,
            target_id: target_id,
            desc: desc,
            order_type: order_type
        },
        dataType: "json",
        success: function (msg) {
        }
    })
}
// 手机号登录错误提示
function showMobileLoginError(message) {
    $('.error-msg').html(message).show();
}

var is_send = true;
var num = 60
// 获取短信验证码
function getPhoneCode() {
    if (is_send == false) {
        return false
    }

    // 验证手机号
    var mobile_phone = $('#mobilephone').val();
    if (mobile_phone == '') {
        showMobileLoginError('请输入手机号码');
        $('#mobilephone').focus();
        return false;
    }

    if (!(/^1[3456789]\d{9}$/.test(mobile_phone))) {
        showMobileLoginError('手机号码格式不正确');
        return false;
    }

    // 验证滑块
    var captchaCode = $("#captchaCode").val();
    if (captchaCode == "2") {
        showMobileLoginError('请滑动验证');
        return false;
    }
    if (captchaCode != "1") {
        showMobileLoginError('请滑动验证');
        return false;
    }

    // 发送短信
    $.ajax({
        url: '/doc.php',
        type: 'get',
        dataType: 'json',
        data: 'act=send_sms&source=4&fk=20228888&type=0&phone=' + mobile_phone,
        beforeSend: function () {
            $('.phone-code-btn').html('发送中..');
            is_send = false
        },
        success: function (msg) {
            if (msg.result == 0) {
                $('.phone-code-btn').html('已发送');
                //开启倒计时
                var timer = setInterval(function countDown() {
                    num--
                    $('.phone-code-btn').html(num + 's')
                    if (num <= 0) {
                        clearInterval(timer)
                        $('.phone-code-btn').html('获取验证码');
                        num = 60
                        is_send = true
                    }
                }, 1000)
            } else {
                showMobileLoginError(msg.message);
                $('.phone-code-btn').html('获取验证码');
                is_send = true

                return false;
            }

        }
    })
}

// 闪烁提示
function error(cls,times){
    var obj=$("."+cls);
    obj.css("color","red");
    times=times-1;
    setTimeout("normal('"+cls+"',"+times+")",150);
}

var is_submit = true;
// 手机号登录提交
function phoneLoginSubmit() {
    if (is_submit == false) {
        return false
    }

    var mobile_phone = $('#mobilephone').val();
    var mobile_phone_code = $("#mobilephonecode").val();

    if (mobile_phone == '') {
        showMobileLoginError('请输入手机号码');
        $('#mobilephone').focus();
        return false;
    }

    if (!(/^1[3456789]\d{9}$/.test(mobile_phone))) {
        showMobileLoginError('手机号码格式有误');
        return false;
    }

    var captchaCode = $("#captchaCode").val();
    if (captchaCode == "2") {
        error('nc-lang-cnt',5);
        //showMobileLoginError('请滑动验证');
        return false;
    }
    if (captchaCode != "1") {
        error('nc-lang-cnt',5);
        //showMobileLoginError('请滑动验证');
        return false;
    }

    if (mobile_phone_code == '') {
        showMobileLoginError('请输入验证码');
        $("#mobilephonecode").focus();
        return false;
    }



    if (mobile_phone_code.length != 5) {
        showMobileLoginError('验证码格式有误');
        return false;
    }

    is_submit = false;

    var data = "phone=" + mobile_phone + "&sms_checkcode=" + mobile_phone_code;

    //验证结束，开启ajax状态
//        $("#loginCodeTip").hide();
    $("#loginLoadImg").show();
    $("#loginSubmit").attr("disabled", "disabled");

    $("#mobilephone").attr("disabled", "disabled");
    $("#mobilephonecode").attr("disabled", "disabled");

    $.ajax({
        type: 'post',
        url: '/mobile/mobile.php?act=phone_member_check',
        dataType: 'json',
        data: data,
        success: function (msg) {
            $("#loginLoadImg").hide();
            if (msg.code == 1) {
                window.location.reload();
            } else {
                showMobileLoginError('验证码有误');
                is_submit = true;

                $("#mobilephone").attr("disabled", false);
                $("#mobilephonecode").attr("disabled", false);
                $("#mobile").show();

                Captcha.init('nocaptcha_phone');
                $("#captchaCode").val('0');
                return false;
            }
        }
    });
    return false;
}

function goWin(){
    DOC88Window.win({
        message: "/index.php?act=go_win",
        height: 480,
        width: 600,
        title: "网络安全感满意度调查",
        iframe: true
    });
}