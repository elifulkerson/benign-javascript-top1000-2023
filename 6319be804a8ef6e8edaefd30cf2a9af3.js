if(document.getElementById("breaking_box_wrap"))
	{
		loadScript("https://embed.urdupoint.com/rss/json/top/breaking_news.json",function()
		{
			if(up_breaking_news.news_id)
			{
				var bn_id 			= up_breaking_news.news_id;
				var bn_news_title 	= up_breaking_news.news_title;
				var bn_news_image 	= up_breaking_news.news_image;
				var bn_image_alt 	= up_breaking_news.image_alt;
				var bn_news_url 	= up_breaking_news.news_url;
							
				document.getElementById("breaking_box_wrap").innerHTML = '<a target="_blank" class="urdu full fl ar rtl mb10 bsbb breaking_box" href="'+bn_news_url+'?utm_source=Internal&utm_medium=Breaking-News"><span class="txt_white fs20 lh40 fl bn_tag">بریکنگ نیوز</span><img class="bn_img" src="'+bn_news_image+'" alt="'+bn_image_alt+'"><p class="fs17 lh34 txt_white mt10">'+bn_news_title+'</p></a>';
			}
			
		});	
	}
	
	if(document.getElementById("menu_app_icon"))
	{
		var isAndroid = /(android)/i.test(navigator.userAgent);
		if (isAndroid)
		{
			document.getElementById("menu_app_icon").style.display = 'inline-block';
		}
	}