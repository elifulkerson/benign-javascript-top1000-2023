<!--
 var feedOffset = 1697399319;
 var loadingRun = 0;
 
 function loadFeed(st, theDate){
  if(st>=0){
    if(theDate){
      var dateParts = theDate.split('-');
    }
    else{
      var dateParts = [0, 0, 0];
    }
    $.getJSON('//www.yaplakal.com', {act: 'Portal', 'st': st, mode: '', rand: Math.random(), show: 'ajax', a: dateParts[0], m: dateParts[1], d: dateParts[2]}, function(data){ 
        feedOffset = data.offset;
        var old_scroll = $(window).scrollTop();
        $('#lentaFeed').append(data.html);
        $(document).scrollTop(old_scroll);
    
        $("div[rel='yapfiles']").each(function( index ) {
          p_videos.push($( this ).attr('id'));
        });
    
        loadVideos();
        loadingRun = 0;
    
        if(data.offset<0 || !data.offset){
          $('#loaderInfo').remove();    
        }
        else{
            var linkObj = $('#loaderLink');
            window.history.pushState(null, null, '//www.yaplakal.com'+(theDate ? '/archive' : '')+'/st/'+st+(theDate ? '/' + theDate + '.html': ''));
            $(linkObj).attr('href', $(linkObj).attr('href').replace(/\/st\/\d+\//g,'/st/'+feedOffset+'/'));
        }
    });
  }
  else{
    $('#loaderInfo').remove();
  }
  return false;
}

function link_to_topic(forum, topic)
{
    var link = "http://www.yaplakal.com/forum"+forum+"/topic" + topic + ".html";
		if(prompt( "Отправь эту ссылку другу", link)){
			location.href=link;
		}
    return false;
}

$(document).ready(function() {
  $(window).bind('scroll', function(){
    if($(window).scrollTop() + window.innerHeight + 1 > $('#loaderInfo').offset().top && !loadingRun){
      loadingRun = 1;
      loadFeed(feedOffset, '');
    }
  });
});
        
//-->