<!--
$(function(){
  $(document).on('click','#weather-guide-tab > li > a',function(){
    var _permalink = [];
    _permalink['satellite'] = '/satellite/japan-near/';
    _permalink['chart']     = '/chart/';
    _permalink['radar']     = '/radar/';
    _permalink['amedas']    = '/amedas/';
    _permalink['pm25']      = '/pm25/';
    _permalink['thunder']   = '/thunder/';
    var _image_url = [];
    _image_url['satellite'] = 'https://static.tenki.jp/static-images/satellite/recent/japan-near-middle.jpg';
    _image_url['chart']     = 'https://static.tenki.jp/static-images/chart/recent/middle.jpg';
    _image_url['radar']     = 'https://static.tenki.jp/static-images/radar/recent/japan-detail-middle.jpg';
    _image_url['amedas']    = 'https://static.tenki.jp/static-images/amedas/recent/temp/japan-detail-middle.jpg';
    _image_url['pm25']      = 'https://static.tenki.jp/static-images/pm25/recent-entry/recent-entry-japan-detail-middle.jpg';
    _image_url['thunder']   = 'https://static.tenki.jp/static-images/liden/recent/japan-detail-middle.jpg';
    var _name = [];
    _name['satellite']      = '衛星';
    _name['chart']          = '天気図';
    _name['radar']          = '雨雲';
    _name['amedas']         = 'アメダス';
    _name['pm25']           = 'PM2.5';
    _name['thunder']        = '雷';
        var $$ = $(this);
    var type = $$.parent().get(0).id.split('-').pop();
    if(type) {
      var __image_url = _image_url[type];
      var __permalink = _permalink[type];
      var __name      = _name[type];
      $('#weather-guide-image > a > img').attr('src',__image_url).attr('alt',__name);
      $('#weather-guide-image > a').attr('href',__permalink);
      $('#weather-guide-tab > li').removeClass('selected');
      var __type_entries = ['satellite','chart','radar','amedas','pm25','thunder'];
      $.each(__type_entries,function(i){
        __type = __type_entries[i];
        if(__type == type) {
          $('#weather-guide-tab-' + __type).addClass('selected').html(_name[__type]);
        } else {
          //$('#weather-guide-tab-' + __type).removeClass('selected').html('<a href="' + _permalink[__type] + '">' + _name[__type] + '</a>');
          $('#weather-guide-tab-' + __type).removeClass('selected').html('<a href="javascript:void(0)">' + _name[__type] + '</a>');
        }
      });
    } // if(type) ...
    event.preventDefault();
    return false;
  }).css('cursor','pointer');
});
//-->