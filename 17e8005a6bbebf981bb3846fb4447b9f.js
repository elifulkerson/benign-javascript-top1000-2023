$(document).on('click', '.send-cerita-pemilih', function(e){
				e.preventDefault();
				var $t = $(this);
				var tags = $(this).data('tags');
				var channel = $(this).data('channel');

				if(!isKompasianer)
				{
					alert("Anda harus login / mendaftar sebagai Kompasianer terlebih dahulu.");
					redirectLogin();
					return false;
				}

				$.redirect(base_url + channel+'/dashboard/write?source_from=cerita-pemilih', {tags_topic : tags});
			});
            $(document).ready(function () {
                $('.cerpemVotewidget__itemVotebar').each(function () {
                    $(this).find('.Votebar__wrap').animate({
                        height: $(this).attr('data-percent')
                    }, 3000);
                });
				$(".thismonthContent").slick({
                    infinite: !0,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    arrows: true,
                    variableWidth: true,
                });
				$('#video_cerita_pemilih').slick({
					infinite: true,
					speed: 300,
					slidesToShow: 3,
					slidesToScroll: 3,
					centerMode: false,
					arrow: true,
					dots: false,
					cssEase: 'linear',
					variableWidth: true
				});
            });