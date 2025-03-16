<!--
function adclickcatalyst(adtype,pos){
var s = s_gi(report_suite);
s.linkTrackVars = 'prop18';
s.linkTrackEvents = 'None';
if(pos){
  s.prop18 = adtype+'_'+pos;
}else{
  s.prop18 = adtype;
}
s.tl(this, 'o', s.prop18);
}
// -->