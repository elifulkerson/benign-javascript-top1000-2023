var _ABTestingTrack = _ABTestingTrack || 'b';
var _comscore_lib_user_logged = _comscore_lib_user_logged || 0;
var _ptype = 'browser';
if (IOLHP.PWA) _ptype = 'pwa';
var iol_analytics_tracking_conf = {
    customParams: {
        5: String(_comscore_lib_user_logged),
        6: _ABTestingTrack,
		14: _ptype
    }
}