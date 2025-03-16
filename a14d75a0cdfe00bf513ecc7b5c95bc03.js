var dHighlight = "highlight-";
    var pHighlight = 1;
    var newLoad = "";
    var viewName = "pilihan";
    var loadScroll = 0;
    
    $(window).scroll(function(){
        if($('#more_data').is(':visible')){
            $more = $('#more_data').offset().top - 1000;
            $scroll = $(window).scrollTop();
            if($scroll >= $more)
            {
                $('#more_data').remove(); 
                loadScroll = 1;
                if($('.timeline--artikel__mob').length){
                    // loadMoreMob();
                }else{
                    loadMore();
                }
            }
        }
    });

    $(document).on('click', '#load_more', function(e){
        $(this).hide();
        loadMore();
    });

            function loadMore(){
            if (checkMoreIndex()) {
                return false;
            }

            var urlHighlights = "https://www.kompasiana.com/ajax/getHighlights";
            pHighlight++;
            newLoad = dHighlight.concat(pHighlight);

            $.ajax({
                type: "POST",
                url: urlHighlights,
                data: {newLoad: newLoad, viewName: viewName},
                beforeSend: function() {
                    $("#loading-image").show();
                },
                success: function(data){
                    (data == "none") ? data = "" : data;
                    $("#loading-image").hide();
                    if(data){
                        if(loadScroll == 1){
                            $(".timeline--artikel:last").after("<div id='more_data'></div>").show();
                        }else{
                            $('#load_more').show();
                        }
                        
                        $(".timeline--artikel:last").after(data).show().fadeIn("slow");
                    }

                    if(pHighlight == 4){
                        showIndexButton();
                    
                        if (checkMoreIndex()) {
                            $("#more_data").remove();
                            $(".load-more").closest('.more-stories').hide();
                        }
                    }
                }
            });
            
        }
    
    var time = new Date().getTime();
    $(document.body).bind("mousemove keypress", function(e) {
        time = new Date().getTime();
    });

    $(document).on('click', '#follow', function(e){
        e.preventDefault();
        var $t = $(this);
        var cid = $(this).attr('data-id');
        var location = $(this).attr('data-location');

        if(!isKompasianer)
        {
            alert("Anda harus login / mendaftar sebagai Kompasianer terlebih dahulu.");
            redirectLogin();
            return false;
        }

        if(location == null) {
            var replace = '<a href="#" id="unfollow" data-id='+cid+'><span>UNFOLLOW</span></a>';
        } else {
            var replace = '<a href="#" data-location="friends" id="unfollow" data-id='+cid+'><span>UNFOLLOW</span></a>';
        }

        $.ajax({
            type: "POST",
            url: "/ajax/follow",
            data: {cid: cid},
            dataType: 'json',
            success: function(response) {
                $t.replaceWith(replace).fadeIn();
            }
        });
    });

    $(document).on('click', '#unfollow', function(e){
        e.preventDefault();
        var $t = $(this);
        var cid = $(this).attr('data-id');
        var location = $(this).attr('data-location');

        if(!isKompasianer){
            alert("Anda harus login / mendaftar sebagai Kompasianer terlebih dahulu.");
            redirectLogin();
            return false;
        }

        if(location == null) {
            var replace = '<a href="#" id="follow" data-id='+cid+'><span>FOLLOW</span></a>';
        } else {
            var replace = '<a href="#" id="follow" data-location="friends" data-id='+cid+'><span>FOLLOW</span></a>';
        }

        $.ajax({
            type: "POST",
            url: "/ajax/unfollow",
            data: {cid: cid},
            dataType: 'json',
            success: function(response) {
                $t.replaceWith(replace).fadeIn();
            }
        });
    });

    // button index berita
    $('.more-index').hide();
    function showIndexButton() {
        $('.more-index').show();
    }

    function checkMoreIndex() {
        if ($('.more-index').is(':visible')) {
            return true;
        }
    }