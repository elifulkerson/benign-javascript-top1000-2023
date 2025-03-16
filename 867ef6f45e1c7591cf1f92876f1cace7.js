/*forum widget script start*/
$(document).ready(function() {
	if($('.opinion_list li').length > 0){
		$('.opinion_list li').customradio();
	}
	if($('.chart_scroll').length > 0){
		$('.chart_scroll').jScrollPane(
			{verticalDragMinHeight: 37,
			verticalDragMaxHeight: 37,
			autoReinitialise:true
		});
	}
	
	$('.frm_rightlist > li > a').click(function(){
	$('.frm_rightlist li a').not('.first').removeClass('active');
	if($(this).next('.pop_replyform').is(':visible')){
		$(this).next('.pop_replyform').slideUp()
	}
	else{	
		$('.pop_replyform').slideUp();
		$(this).next('.pop_replyform').slideToggle();
	}
	
	// autocomplete UI open
    $('.autocomplete li').click(function(){
	  	  $('.autocomplete').show();
	});
	 
	 // autocomplete UI Tag remove
	 $('.close-item').click(function(){
		$(this).parent().hide();
	 });
	
	$(document).mouseup(function (e)
		{
		var forumdisp = $(".pop_replyform, .autocomplete");
	
		if (!forumdisp.is(e.target) // if the target of the click isn't the container...
			&& forumdisp.has(e.target).length === 0) // ... nor a descendant of the container
		{
			forumdisp.hide();
		}
	});
	
	$('#inputTags_d3').inputTags({
    autocomplete: {
        values: ['jQuery', 'tags', 'plugin', 'Javascript'],
        only: true
    },
    max: 3,
    create: function() {
        console.log('Tag added !');
    }
	});
	
});	
	
});
$.fn.customradio = function() {
	this.click(function(){
		$(this).siblings().removeClass("checked");
		$(this).addClass("checked");
		$('input:radio').attr('checked', false);
		$('input:radio',this).attr('checked', true)
		var el=$(this);
	});
}