var SudahDiLoad=0

function DataLayerTracking(i,filter){
console.log(i);
var kanal='WP';

if(filter=='BeritaTerkini'){
	var title		=$('.LayerBeritaTerkini-'+i).attr("data-title");
	var link		=$('.LayerBeritaTerkini-'+i).attr("data-link");
	var channelname	=$('.LayerBeritaTerkini-'+i).attr("data-channelname");
	var date		=$('.LayerBeritaTerkini-'+i).attr("data-date");
	var images		=$('.LayerBeritaTerkini-'+i).attr("data-images");
	var code		=$('.LayerBeritaTerkini-'+i).attr('data-id');
	var filter		='berita_terbaru';
	var kanal		=$('.LayerBeritaTerkini-'+i).attr('data-kanal');
} else if(filter=='Headline'){
	var title		=$('.LayerHeadline-'+i).attr("data-title");
	var link		=$('.LayerHeadline-'+i).attr("data-link");
	var channelname	=$('.LayerHeadline-'+i).attr("data-channelname");
	var date		=$('.LayerHeadline-'+i).attr("data-date");
	var images		=$('.LayerHeadline-'+i).attr("data-images");
	var code		=$('.LayerHeadline-'+i).attr('data-id');
	var filter		='headline';
	var kanal		=$('.LayerHeadline-'+i).attr('data-kanal');
} else if(filter=='BeritaTerpopuler'){
	var title		=$('.LayerTerpopuler-'+i).attr("data-title");
	var link		=$('.LayerTerpopuler-'+i).attr("data-link");
	var channelname	=$('.LayerTerpopuler-'+i).attr("data-channelname");
	var date		=$('.LayerTerpopuler-'+i).attr("data-date");
	var images		=$('.LayerTerpopuler-'+i).attr("data-images");
	var code		=$('.LayerTerpopuler-'+i).attr('data-id');
	var filter		='berita_terpopuler';
	var kanal		=$('.LayerTerpopuler-'+i).attr('data-kanal');
} else if(filter=='BeritaPilihan'){
	var title		=$('.LayerPilihan-'+i).attr("data-title");
	var link		=$('.LayerPilihan-'+i).attr("data-link");
	var channelname	=$('.LayerPilihan-'+i).attr("data-channelname");
	var date		=$('.LayerPilihan-'+i).attr("data-date");
	var images		=$('.LayerPilihan-'+i).attr("data-images");
	var code		=$('.LayerPilihan-'+i).attr('data-id');
	var filter		='berita_pilihan';
	var kanal		=$('.LayerPilihan-'+i).attr('data-kanal');
} else {
	var title		='null';
	var link		='null';
	var channelname	='null';
	var date		='null';
	var images		='null';
	var code		='null';
	var filter		='null';
}
kanal.replace('.','');
console.log('No:'+i+'  ==>'+title+'>>'+link+'>>'+date+'>>'+images+'>>'+code+'==>'+filter);

	window.dataLayer.push({
		event			: "promotion_click",
		event_category	: "article",
		event_action	: "article_list_click",
		event_label		: kanal.replace('.','')+" - "+link,
		content_type	: "artikel",
		article_title	: title,
		publish_date	: date,
		ecommerce: {
			promoClick: {
			  promotions: [
				{
				  id		: code,
				  name		: title,
				  creative	: link,
				  position	: (i+1)+"_"+filter
				}
			  ]
			}
		}
	});

}