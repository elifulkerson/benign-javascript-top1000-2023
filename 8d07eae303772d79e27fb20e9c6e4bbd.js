var $ = jQuery.noConflict();
$(document).ready(function() {
	$(window).scroll(function() {
	    if (  document.documentElement.clientHeight +
	         $(document).scrollTop() <= document.body.offsetHeight )
	    {
			var getLast = parseInt($("#latestul li").last().attr("data-sort"));
			var cekLast = parseInt($("#latestul").attr("last"));
			if(!cekLast) cekLast = 0;
			if(getLast < 500 && getLast > cekLast ) {
				$("#latestul").attr("last",getLast);
				$("#latestul").append("<li class='loading'><i class='fa fa-refresh fa-spin fa-2x blue'></i></li>");
				$(".loading").show();
				var newlast = getLast;
				$.getJSON("https://api.tribunnews.com/ajax/latest/?callback=?", {start: newlast,img: 'thumb2',icon: '1'}, function(data) {
					$.each(data.posts, function(key, val) {
						newlast	= newlast+1;
						if(val.video) {
							var vthumb = "<i class='fa fa-play playoverlay'></i>";
							var vtitle = " <i class='fa fa-play-circle-o'></i>";
						}
						else
						{
							var vthumb = "";
							var vtitle = "";
						}
						if(val.thumb) {
							var img = "<div class='fr mt5 ml15 pos_rel'><a href='"+val.url+"' title='"+val.title+"'><img src='"+val.thumb+"' width='120' height='90' class='shou2 bgwhite' alt='"+val.title+"' loading='lazy'/></a>"+vthumb+"</div>";
							var milatest = "mr140";
						}
						else {
							var img = "";
							var milatest = "";
						}
						if(val.subtitle) subtitle = "<h4 class='fbo2 f14 red'><a href='"+val.subtitle_url+"' title='"+val.subtitle+"' >"+val.subtitle+"</a></h4>";
						else subtitle = '';
						if(newlast == '41') tam = "<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".ts-1").html()+"</li>";
						// else if(newlast == '51') tam = "<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".video-1").html()+"</li>";
						else if(newlast == '61') tam = "";//"<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".tjb-1").html()+"</li>";
						else if(newlast == '71') tam = ""; //"<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".images-2").html()+"</li>";
						else if(newlast == '81') tam = ""; //"<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".ts-2").html()+"</li>";
						else if(newlast == '101') tam = ""; //"<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".video-2").html()+"</li>";
						else if(newlast == '111') tam = "";//<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".tjb-2").html()+"</li>";
						else if(newlast == '121') tam = "<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".images-2").html()+"</li>";
						else if(newlast == '131') tam = "<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".ts-1").html()+"</li>";
						// else if(newlast == '141') tam = "<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".video-1").html()+"</li>";
						//else if(newlast == '151') tam = "<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".tjb-1").html()+"</li>";
						else if(newlast == '161') tam = "<li class='p1520 pos_rel' style='background:#f2f2f2' >"+$(".images-1").html()+"</li>";
						else tam = "";
						$("#latestul").append("<li class='p1520 art-list pos_rel' data-sort='"+newlast+"'>"+img+"<div class='"+milatest+"'>"+subtitle+"<h3><a href='"+val.url+"' class='f20 ln24 fbo txt-oev-2' title='"+val.title+"'>"+val.title+vtitle+"</a></h3><div class='grey2 pt5 f13 txt-oev-2'>"+val.introtext+"</div><div class='pt5 grey'><span><a href='"+val.s_url+"' class='fbo2 tsa-2' title='"+val.s_title+"'>"+val.s_title+"</a></span><span class='fa fa-clock-o mr5 ml7'></span><time class='foot timeago' title='"+val.date+"'>"+val.times_ago+"</time></div></div><div class='sharecot pos_abs nw' data-href='"+val.url+"' data-title='"+val.title+"'></div><div class='cl2'></div></li>"+tam);
					});
					$(".loading").remove()
				});
			}
			else if (getLast > 150) {
				if ($("#ltldmr").length == 0){
					$("#latestul").append('<li class="pa20 ac loadmore" id="ltldmr"><a href="javascript:" class="button2" onclick="loadmore()">Tampilkan lainnya</a><a href="https://www.tribunnews.com/indeks" class="button2" class="ml15 button2">Indeks</a></li>');
				}
			}
	    }
	});
});

function loadmore(){
	if ($("#ltldmr").length > 0) $("#ltldmr").remove();
	var getLast = parseInt($("#latestul li").last().attr("data-sort"));
	$("#latestul").append("<li class='loading'><i class='fa fa-refresh fa-spin fa-2x blue'></i></li>");
	$(".loading").show();
	var newlast = getLast;
	$.getJSON("https://api.tribunnews.com/ajax/latest/?callback=?", {start: newlast,img: 'thumb2',icon: '1'}, function(data) {
		$.each(data.posts, function(key, val) {
						newlast	= newlast+1;
						if(val.video) {
							var vthumb = "<i class='fa fa-play playoverlay'></i>";
							var vtitle = " <i class='fa fa-play-circle-o'></i>";
						}
						else
						{
							var vthumb = "";
							var vtitle = "";
						}
						if(val.thumb) {
							var img = "<div class='fr mt5 ml15 pos_rel'><a href='"+val.url+"' title='"+val.title+"'><img src='"+val.thumb+"' width='120' height='90' class='shou2 bgwhite' alt='"+val.title+"' loading='lazy'/></a>"+vthumb+"</div>";
							var milatest = "mr140";
						}
						else {
							var img = "";
							var milatest = "";
						}
						if(val.subtitle) subtitle = "<h4 class='fbo2 f14 red'><a href='"+val.subtitle_url+"' title='"+val.subtitle+"' >"+val.subtitle+"</a></h4>";
						else subtitle = '';

						$("#latestul").append("<li class='p1520 art-list pos_rel' data-sort='"+newlast+"'>"+img+"<div class='"+milatest+"'>"+subtitle+"<h3><a href='"+val.url+"' class='f20 ln24 fbo txt-oev-2' title='"+val.title+"'>"+val.title+vtitle+"</a></h3><div class='grey2 pt5 f13'>"+val.introtext+"</div><div class='pt5 grey'><span><a href='"+val.s_url+"' class='fbo2 tsa-2' title='"+val.s_title+"'>"+val.s_title+"</a></span><span class='fa fa-clock-o mr5 ml7'></span><time class='foot timeago' title='"+val.date+"'>"+val.times_ago+"</time></div></div><div class='sharecot pos_abs nw' data-href='"+val.url+"' data-title='"+val.title+"'></div><div class='cl2'></div></li>");
		});
		$(".loading").remove();
	});
}