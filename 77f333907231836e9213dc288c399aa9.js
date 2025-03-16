// Load More
        $('#btn-load-more-wp').click(function(){
            var element = this;
            $(this).hide();
            // $(this).parent().append('<div id="load-more-loading" style="text-align:center;z-index:1000;position:relative"><img src="https://asset.kompas.com/data/2017/wp/images/loading.gif"></div>');
            $.ajax({
                url:$(this).attr('data-url'),
                type:'post',
                data:{xmlpath:$(this).attr('data-xmlpath')},
                dataType:'json',
                success:function(str){
                    $($(element).attr('data-append')).append(str['result']);
                    $('#load-more-loading').remove();
                }
            });
        });
        $(document).ready(function() {
            $(window).scroll(function() {
                if ($("#btn-load-more-wp").length > 0 && ($('#btn-load-more-wp').is(':visible'))) {
                    if ($(window).scrollTop() >= ($(document).height() - $(window).height())*0.5) {
                        $("#btn-load-more-wp").trigger('click');
                        return false;
                    }
                }
            });
        });