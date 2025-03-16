if(upgj_x > 800)
	{
		if(document.getElementById('google_ads_iframe_/21678054/header_970x250_0__container__'))
		{
			var hb_ad_html =  document.getElementById('google_ads_iframe_/21678054/header_970x250_0__container__').innerHTML;
			if(hb_ad_html == '')
			{
				document.getElementById('gpt-970-banner-wrap').className += ' heighta';   
			}
		}
	}
	
	
	if(document.getElementById("google_ads_iframe_/21678054/up-v2/sticky-header-top_0__container__"))
	{
		var hbf_ad_html =  document.getElementById('google_ads_iframe_/21678054/up-v2/sticky-header-top_0__container__').innerHTML;
		if(hbf_ad_html == '')
		{
			document.getElementById('HeadTopSticky').style.height = 'auto';
		}
	}
	else
	{
		if(document.getElementById('HeadTopSticky'))
		{
			var hbf_ad_html =  document.getElementById('HeadTopSticky').innerHTML;
			if(hbf_ad_html == '')
			{
				document.getElementById('HeadTopSticky').style.height = 'auto';
			}
		}
	}