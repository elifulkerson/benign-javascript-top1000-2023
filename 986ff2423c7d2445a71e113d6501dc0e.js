$(function(){
	var item = window.location.href.match("breaking_link$");
    if(item != null)
    {
        setTimeout(function(){
            $('.headline')[0].scrollIntoView();
        }, 3000)
    }

	
		var s = document.createElement("script");
	    s.type = "text/javascript";
	    s.src = "https://awscdn.detik.net.id/assets/js/oembed.itp.v2.js?v=2023101610168";
	    s.onload = function()
	    {
	        try{
	            adjustCV.run();
	        }catch(e){}
	    };
		document.body.appendChild(s);
		})