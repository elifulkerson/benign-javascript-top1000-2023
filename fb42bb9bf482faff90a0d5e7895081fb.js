<!--
	var user_key = hex_md5('70.163.140.175'+':'+navigator.userAgent+':'+navigator.platform+((typeof(screen)!='undefined') ? ':'+screen.width+'*'+screen.height+'*'+(screen.colorDepth ?	screen.colorDepth : screen.pixelDepth):''));
  var p_videos = [];
	$(document).ready(function() {
    
    if('desktop' == 'desktop'){
      $("#prilipala").sticky({ 
        topSpacing: 20,
        bottomSpacing: 20
      });

      $(window).bind('resize scroll ready', function(){
          if($('#footer').position().top-$('body').scrollTop()<$('#prilipala').height()){
            $('#prilipala').css({
              top: -($('#prilipala').height()- ($('#footer').position().top-$('body').scrollTop()))
            });
          }
      });
    }
  
		$('.gif-player').gifPlayer();
    
    $("div[rel='yapfiles']").each(function( index ) {
      p_videos.push($( this ).attr('id'));
    });
    
    if(p_videos.length>0){
      $(window).bind('scroll ready', loadVideos);    
    }    
	});
    
  function loadVideos() {
    topOffset = $(window).scrollTop();

    var vidz = [];
    for (var key in p_videos) {
      vidz[key] = p_videos[key];
    }    

    if(vidz.length>0){
      vidz.forEach(function(item, i, vidz) {
        blockOffset = $('#'+item).offset().top;
        blockHeight = $('#'+item).innerHeight();
        if(topOffset + window.innerHeight + 1 > blockOffset && topOffset < (blockOffset + blockHeight)){
              p_videos.splice(p_videos.indexOf(item), 1);
              $('#'+item).html('<iframe src="https://api.yapfiles.ru/get_player/?v='+item.replace(/^yfp\-[0-9]+\-/, "")+'" width="640" height="360" name="video_'+rand(100000,999999)+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
              console.log(item.replace(/^yfp\-[0-9]+\-/, ""));
        }
      });
    }
  }
  function closeApp(){
    $('#android-app').hide();
    //$.cookie("hide_app_sticker", 1);
    $.cookie("hide_app_sticker", 1, { expires : 7, domain  : ".yaplakal.com" });    
    return false;
  }
  function installApp(url){
    window.open(url, '_blank');
    $('#android-app').hide();
    $.cookie("hide_app_sticker", 1, { expires : 365, domain  : ".yaplakal.com" });    
    return false;
  }
	//-->