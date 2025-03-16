function onclickListItem(lstDst, id){
var s = s_gi(report_suite);
s.linkTrackVars = 'list1,prop31,prop32';
s.linkTrackEvents = 'None';
s.list1 = 'lst_restaurant_id=' + id;
s.prop31 = lstDst;
s.prop32 = document.getElementById('js-personalize-catalyst').dataset.pvId;
s.tl(this, 'o', s.prop31, s.prop32);
}