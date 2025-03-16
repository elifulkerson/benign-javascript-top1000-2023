jQuery(function($){
    $(".pltrack").click(function(){
        var lenum = $(this).attr("data-num");
        ga('send', 'event', 'ProjectLucy', 'ClickArticle'+ lenum, 'PLGallery');    
    });
	
	  $(".fv_click_new").click(function(){         
        ga('send', 'event', 'INQClickTracking', 'FearlessViewsNewTpl', 'FearlessViewWWWnew');    
		console.log('FV_new_Tracked!');
    });
	
			  $(".election_2019_htc").click(function(){         
        ga('send', 'event', 'INQClickTracking', 'Election2019_SlashhomeTracker', 'Election2019_SlashhomeTrackerViews');    
		console.log('Elect Tracked!');
    });
				$(".CH_BoxOld a").click(function(){         
        ga('send', 'event', 'INQClickTracking', 'ChannelBoxOldDesignTracking', 'ChannelBoxOldDesignViews');    
		console.log('ChannelOldBoxTracked!');
    });
	
	
					$("#inqflxgl-wrap a").click(function(){         
        ga('send', 'event', 'INQClickTracking', 'FG_2020', 'FG_2020Views');    
		console.log('FG_Guadalupe_has_been_click!');
    });
	 
	
	
						$(".sp_coronavirus a").click(function(){         
        ga('send', 'event', 'INQClickTracking', 'sp_coronavirusTracking', 'sp_coronavirusViews');    
		console.log('sp_coronavirusTracked!');
    });
	
	
		$("#inq-plus-free a").click(function(){         
        ga('send', 'event', 'INQPlusTracking', 'inqplus_2020', 'inqplus_2020_Views');    
		console.log('track_inqplus_2020!');
    });
	
	
	
		$("#inq-plus-free a").click(function(){         
        ga('send', 'event', 'INQClickTracking', 'track_inqplus2020_OLD', 'track_inqplus2020_OLD_Views');    
		console.log('track_inqplus2020_OLD!');
    });
	
	
		$("#inq-plus-free-b a").click(function(){         
        ga('send', 'event', 'INQClickTracking', 'track_inqplus2020_OLD', 'track_inqplus2020_OLD_Views2');    
		console.log('track_inqplus2020_OLD_B!');
    });
	
	
	
	
	
	
	$(".www_TP a").click(function(){         
        ga('send', 'event', 'INQClickTracking', 'www_TP', 'www_TP');    
		console.log('www_TP!');
    });
	
	
	
});
 
 
 console.log('2023-10-16 12:47:23 PM');
 
 if (window.matchMedia('(display-mode: standalone)').matches) {  
      ga('send', 'event', 'INQHomeScreenPhoneTracking', 'MobilehomescreenTracking', 'MobilehomescreenTrackingWWW');
console.log('HomescreenTracked!');	  
} 
console.log('refferall from:' + document.referrer);