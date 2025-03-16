ga('send', 'event', 'page_view_valid', "en-web", "NA");
		(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        j.onload=function(){
			if (typeof dataLayer !='undefined'){
				ga('send', 'event', 'page_view_defined', "en-web", "NA");
				dataLayer.push({
					'event':'page_view_dom_ready',
					'article_author': "NA",
					'article_content_environment': "web",
					'article_content_type': "NA",
					'article_publish_date':	"NA",
					'article_update_date':	"NA",
					'website_language' : "en",
					'article_id': "NA",
				});
			}else{
				ga('send', 'event', 'page_view_undefined', "en-web", "NA");
			}
		};
        })(window,document,'script','dataLayer','GTM-TDGJZS');