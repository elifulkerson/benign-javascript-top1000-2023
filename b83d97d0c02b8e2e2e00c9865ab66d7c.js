$(document).on('DOMSubtreeModified', '#vid_d', function() {
 var vid = $("#vid_d").find('article');
 if (vid.length > 3) {
 vid.last().hide()
 }
})