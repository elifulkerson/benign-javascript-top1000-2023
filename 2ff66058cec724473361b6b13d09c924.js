function onclickImage(index, imgId, rstId, type, post){
var s = s_gi(report_suite);
s.linkTrackVars = 'list1,prop31,prop32';
s.linkTrackEvents = 'None';
s.list1 = 'click_image_index=' + index;
if (imgId) s.list1 += '&click_image_id=' + imgId;
if (rstId) s.list1 += '&click_restaurant_id=' + rstId;
if (post)  s.list1 += '&post_type=' + post;
s.prop31 = type || "";
s.prop32 = document.getElementById('js-personalize-catalyst').dataset.pvId;
s.tl(this, 'o', 's.prop32 click');
}