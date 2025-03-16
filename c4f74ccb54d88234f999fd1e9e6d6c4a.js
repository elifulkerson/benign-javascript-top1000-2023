require(['jquery','bootstrap','custom'], function ($) {
		$('.timePublished[data-published]').each(function() {
                    var time = $(this).data('published');
                    if (time) {
                        $(this).html(timeSince(new Date(time)));
                    } 
        });});