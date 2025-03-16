
$(document).ready(function(){    

	$('.loading-more').hide();
	$('.btn-index-berita').hide();

    $('.btn-more').click(function() {
    	
    	$('.loading-more').show();
    	$('.btn-more').hide();

    	var action 	= $(this).attr('data-action');
	    var page 	= $(this).attr('data-page');
	    var append 	= $(this).attr('data-append');
	    var source 	= $(this).attr('data-source');
	    var author_id = $(this).attr('data-author_id');
	    var subdomain = id_site;
	    var t = $(this);

	    if (action) { 

	        $.ajax({
	            url : action,
	            method : 'POST',
	            data : {page:page,source:source,author_id:author_id,subdomain:subdomain},
	            dataType : 'json',         
	            success:function(data){

	            	$('.loading-more').hide();
	            	$('.'+append).append(data.results);
	            	if(data.page <= data.total_page){	            		
	            		$(t).attr('data-page', data.page);

	            		$('.btn-more').show();

	            		if(data.page>data.total_page){
	            			$(t).hide();
	            			$('.btn-index-berita').show();
	            		}

	            	}else{
	            		$(t).hide();
	            		$('.btn-index-berita').show();
	            	}
	            },
	            error: function(xhr, textStatus, errorThrown){
	                alert("Oops...", "Something went wrong!", "error");
	            }       
	        });
	    }else{
	        alert("Oops...", "Something went wrong!", "error");      
	    }
    });

	$("#search_input").keypress(function (e) {
		if (e.which == 13) {
			window.location = base_url + "search?q="+$(this).val();
  	    	return false;
  	  	}
	});

	$("#sort").change(function (e) {
		window.location = base_url + "search?q="+$('.searchbox__input').val()+"&sort="+$(this).val();
	});
});


