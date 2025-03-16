function onclickcatalysthozonbutton(clicktype, eventtype){
var s = s_gi(report_suite);
s.linkTrackVars = 'prop18,events';
s.linkTrackEvents = eventtype;
s.events = eventtype;
s.prop18 = clicktype;
s.tl(this, 'o', clicktype);
}