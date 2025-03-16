<!--
var __escapeHTML = function(val) { return $('<div />').text(val).html() };
var __h = localStorage.getItem('h');
var __historyCoachMarkValid = false;
function __set_h_point() {
  var __jiscode = '';
  var __name    = '';
  var __path    = '/';
  var __type    = '';
  if(!__jiscode || !__name || !__path) {
      return '';
  }
  // for warn
  if(__type && __type == 'warn') {
      return '';
  // for typhoon
  } else if(__type && __type == 'typhoon') {
      return '';
  // for indexes
  } else if(__type && __type == 'indexes') {
      return '';
  }
  var __entries = localStorage.getItem('h');
  if(__entries) {
      __entries = JSON.parse(__entries);
  }
  if (!!__entries === false || __entries.length === 0) {
    __historyCoachMarkValid = true;
  }
  if(!__entries || !Array.isArray(__entries) || !__entries[0] || !__entries[0]['name'] || !__entries[0]['path']) {
     __entries = [];
  }
  var __verify_entries = [];
  __verify_entries.push({'jiscode':__jiscode,'name':__name,'path':__path,'type':__type});
  var __entries_limit = __entries.length;
  if(__entries_limit && __entries_limit > 20) {
      __entries_limit = 20;
  }
  LOOP_I : for (var __i=0; __i < __entries_limit; __i++) {
    if(__entries[__i] && __entries[__i]['jiscode'] && __entries[__i]['name'] && __entries[__i]['path'] && __entries[__i]['path'] != __path) {
      __verify_entries.push(__entries[__i]);
    }
  }
  localStorage.setItem('h',JSON.stringify(__verify_entries));
};
__set_h_point();

function __remove_h_point(i) {
  var __entries = localStorage.getItem('h');
  if(__entries) {
      __entries = JSON.parse(__entries);
  }
  var __verify_entries = [];
  LOOP_I : for (var __i=0; __i < __entries.length; __i++) {
    if(__entries[__i] && __entries[__i]['jiscode'] && __entries[__i]['name'] && __entries[__i]['path'] && __i != i) {
      __verify_entries.push(__entries[__i]);
    }
  }
  localStorage.setItem('h',JSON.stringify(__verify_entries));
  $('#history-entries').html('');
  $('#forecast-map-history-box-recent-entry').html('');
  $('#forecast-map-history-wrap').html('');
};

function __get_h_point_entries() {
  var __entries = localStorage.getItem('h');
  if(__entries) {
      __entries = JSON.parse(__entries);
  }
  if(!__entries || !Array.isArray(__entries) || !__entries[0] || !__entries[0]['name'] || !__entries[0]['path']) {
    __entries = [];
    $('#history-btn').remove();
    $('.forecast-map-btn-wrap > p').html('');
    $('#forecast-map-history-box-recent-entry').remove();
    return false;
  }
  if(__entries && Array.isArray(__entries) && __entries.length <= 1) {
    $('#history-btn').remove();
  }
  var __processed_entry_by_jiscode = [];
  var $history_entries = $('#history-entries');
  LOOP_I : for ( var __i=0; __i < __entries.length; __i++ ) {
     if(!__entries[__i] || !__entries[__i]['name'] || !__entries[__i]['path']) {
         continue LOOP_I;
     }
     var __jiscode = __escapeHTML(__entries[__i]['jiscode']);
     var __name = __escapeHTML(__entries[__i]['name']);
     var __path = __escapeHTML(__entries[__i]['path']);
     var __type = __escapeHTML(__entries[__i]['type']);
     if(!__type) {
        // for header base html
        if(__i < 6) {
            var __html = '<li id="history-entry-' + __i + '"><a href="' + __path + '" class="history-entries-link clearfix"><div class="img-box"><img src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="47" height="30" alt="---"></div><div class="info-box"><span class="name">' + __name + '</span><span class="temp-box"><span class="max_t">---</span><span class="grey">/</span><span class="min_t">---</span></span></div></a><a href="javascript:void(0);" class="history-entry-close">ｘ</a></li>';
            $('#history-entries').append(__html);
        }
        // for body recent html
        if(__i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
            var _html = '<a href="javascript:void(0);"><span class="grey">---</span><br><img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" alt="---" width="47" height="30"><br><span class="grey">---</span><span class="grey">/</span><span class="grey">---</span><span class="grey">---</span></a>';
            $('#forecast-map-history-box-recent-entry').html(_html);
        }
        // for body base html
        if(__i >= 1 && __i <= 9){
            var __html = '<div id="history-body-entry-' + __i + '" class="forecast-map-history-box"><a href="' + __path + '">' + __name + '<br>' + '<img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="47" height="30" alt="---"><br><span class="max-temp">---</span><span class="grey">/</span><span class="min-temp">---</span><span class="prob-precip">---</span></a></div>';
            $('#forecast-map-history-wrap').append(__html);
        }
        if(__processed_entry_by_jiscode['forecast_' + __entries[__i]['jiscode']]) {
            continue LOOP_I;
        }
        $.ajax({
                type: 'GET',
                url: 'https://static.tenki.jp/static-api/history/forecast/' + __jiscode + '.js',
                dataType: 'jsonp',
                cache: true,
                jsonpCallback: '__r__'+__jiscode
        }).then(function(json){
                for(var ___i=0; ___i < __entries.length; ___i++) {
                    if(json['j'] == __entries[___i]['jiscode'] && !__entries[___i]['type']) {
                        if(!json['i']) {
                            json['i'] = '00';
                            json['t'] = '---';
                        }
                        // for header histories
                        var ___header_history_html_id = 'history-entry-' + ___i;
                        if(document.getElementById(___header_history_html_id)) {
                            var $__html_a = $('#' + ___header_history_html_id + ' a');
                            $('img',$__html_a).attr('src','https://static.tenki.jp/images/icon/forecast-days-weather/' + json['i'] + '.png').attr('alt',json['t']);
                            $('.max_t',$__html_a).html(json['max_t']);
                            $('.min_t',$__html_a).html(json['min_t']);
                        }
                        // for body recent entry
                        if(___i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
                            var $__html = $('#forecast-map-history-box-recent-entry');
                            var __html_str = '<a href="' + __escapeHTML(__entries[___i]['path']) + '">'
                                           + __escapeHTML(__entries[___i]['name']) + '<br>'
                                           + '<img class="forecast-image" src="https://static.tenki.jp' + '/images/icon/forecast-days-weather/' + json['i'] + '.png" alt="' + json['t'] + '" width="47" height="30"><br>'
                                           + '<span class="max-temp">' + json['max_t'] + '</span><span class="grey">/</span><span class="min-temp">' + json['min_t'] + '</span><span class="prob-precip">' + json['p'] +'%</span></a>';
                            $__html.html(__html_str);
                        // for body entries
                        } else if(___i > 0 && document.getElementById('forecast-map-history-wrap')) {
                            var ___html_id = 'history-body-entry-' + ___i;
                            var $___html_a = $('#' + ___html_id + ' a');
                            $('.forecast-image',$___html_a).attr('src','https://static.tenki.jp/images/icon/forecast-days-weather/' + json['i'] + '.png').attr('alt',json['t']);
                            $('.max-temp',$___html_a).html(json['max_t']);
                            $('.min-temp',$___html_a).html(json['min_t']);
                            $('.prob-precip',$___html_a).html(json['p'] + '%');
                        }
                    }
                }
        });
        __processed_entry_by_jiscode['forecast_' + __entries[__i]['jiscode']] = 1;
     } else if(__type == 'heatstroke') {
        // for header base html
        if(__i < 6) {
            var __html = '<li id="history-entry-' + __i + '"><a href="' + __path + '" class="history-entries-link clearfix"><div class="img-box"><img src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"></div><div class="info-box"><span class="name">' + __name + '</span><span class="temp-box">---</span></div></a><a href="javascript:void(0);" class="history-entry-close">ｘ</a></li>';
            $('#history-entries').append(__html);
        }
        // for body recent html
        if(__i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
            var _html = '<a href="javascript:void(0);"><span class="grey">---</span><br><img class="heatstroke-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" alt="---" width="30" height="30"><br><span class="grey">---</span></a>';
            $('#forecast-map-history-box-recent-entry').html(_html);
        }
        // for body base html
        if(__i >= 1 && __i <= 5){
            var __html = '<div id="history-body-entry-' + __i + '" class="forecast-map-history-box"><a href="' + __path + '">' + __name + '<br>' + '<img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"><br><span>---</span></a></div>';
            $('#forecast-map-history-wrap').append(__html);
        }
        if(__processed_entry_by_jiscode['heatstroke_' + __entries[__i]['jiscode']]) {
            continue LOOP_I;
        }
        $.ajax({
            type: 'GET',
            url: 'https://static.tenki.jp/static-api/history/heatstroke/' + __jiscode + '.js',
            dataType: 'jsonp',
            cache: true,
            jsonpCallback: '__h__'+__jiscode
        }).then(function(json){
            for(var ___i=0; ___i < __entries.length; ___i++) {
                if(json['j'] == __entries[___i]['jiscode'] && __entries[___i]['type'] == 'heatstroke') {
                    if(!json['i']) {
                        json['i'] = 'none';
                        json['t'] = '---';
                    }
                    // for header histories
                    var ___header_history_html_id = 'history-entry-' + ___i;
                    if(document.getElementById(___header_history_html_id)) {
                        var $__html_a = $('#' + ___header_history_html_id + ' a');
                        $('img',$__html_a).attr('src','https://static.tenki.jp/images/icon/heatstroke/default/icon-' + json['i'] + '.png').attr('alt',json['t']);
                        $('.temp-box',$__html_a).html(json['t']);
                    }
                    // for body recent entry
                    if(___i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
                        var $__html = $('#forecast-map-history-box-recent-entry');
                        var __html_str = '<a href="' + __escapeHTML(__entries[___i]['path']) + '">'
                                   + __escapeHTML(__entries[___i]['name']) + '<br>'
                                   + '<img class="heatstroke-image" src="https://static.tenki.jp' + '/images/icon/heatstroke/default/icon-' + json['i'] + '.png" alt="' + json['t'] + '" width="30" height="30"><br>'
                                   + '<span>' + json['t'] + '</span></a>';
                        $__html.html(__html_str);
                    } else if(___i > 0 && document.getElementById('forecast-map-history-wrap')) {
                        var ___html_id = 'history-body-entry-' + ___i;
                        var $___html_a = $('#' + ___html_id + ' a');
                        $('.forecast-image',$___html_a).attr('src','https://static.tenki.jp/images/icon/heatstroke/default/icon-' + json['i'] + '.png').attr('alt',json['t']);
                        $('span',$___html_a).html(json['t']);
                    }
                }
            }
        });
        __processed_entry_by_jiscode['heatstroke_' + __entries[__i]['jiscode']] = 1;
     } else if(__type == 'heatshock') {
        // for header base html
        if(__i < 6) {
            var __html = '<li id="history-entry-' + __i + '"><a href="' + __path + '" class="history-entries-link clearfix"><div class="img-box"><img src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"></div><div class="info-box"><span class="name">' + __name + '</span><span class="temp-box">---</span></div></a><a href="javascript:void(0);" class="history-entry-close">ｘ</a></li>';
            $('#history-entries').append(__html);
        }
        // for body recent html
        if(__i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
            var _html = '<a href="javascript:void(0);"><span class="grey">---</span><br><img class="heatshock-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" alt="---" width="30" height="30"><br><span class="grey">---</span></a>';
            $('#forecast-map-history-box-recent-entry').html(_html);
        }
        // for body base html
        if(__i >= 1 && __i <= 5){
            var __html = '<div id="history-body-entry-' + __i + '" class="forecast-map-history-box"><a href="' + __path + '">' + __name + '<br>' + '<img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"><br><span>---</span></a></div>';
            $('#forecast-map-history-wrap').append(__html);
        }
        if(__processed_entry_by_jiscode['heatshock_' + __entries[__i]['jiscode']]) {
            continue LOOP_I;
        }
        $.ajax({
            type: 'GET',
            url: 'https://static.tenki.jp/static-api/history/heatshock/' + __jiscode + '.js',
            dataType: 'jsonp',
            cache: true,
            jsonpCallback: '__hs__'+__jiscode
        }).then(function(json){
            for(var ___i=0; ___i < __entries.length; ___i++) {
                if(json['j'] == __entries[___i]['jiscode'] && __entries[___i]['type'] == 'heatshock') {
                    if(!json['i']) {
                        json['i'] = 'none';
                        json['t'] = '---';
                    }
                    // for header histories
                    var ___header_history_html_id = 'history-entry-' + ___i;
                    if(document.getElementById(___header_history_html_id)) {
                        var $__html_a = $('#' + ___header_history_html_id + ' a');
                        $('img',$__html_a).attr('src','https://static.tenki.jp/images/icon/heatshock/default/icon-small-' + json['i'] + '.png').attr('alt',json['t']);
                        $('.temp-box',$__html_a).html(json['t']);
                    }
                    // for body recent entry
                    if(___i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
                        var $__html = $('#forecast-map-history-box-recent-entry');
                        var __html_str = '<a href="' + __escapeHTML(__entries[___i]['path']) + '">'
                                   + __escapeHTML(__entries[___i]['name']) + '<br>'
                                   + '<img class="heatshock-image" src="https://static.tenki.jp' + '/images/icon/heatshock/default/icon-small-' + json['i'] + '.png" alt="' + json['t'] + '" width="30" height="30"><br>'
                                   + '<span>' + json['t'] + '</span></a>';
                        $__html.html(__html_str);
                    } else if(___i > 0 && document.getElementById('forecast-map-history-wrap')) {
                        var ___html_id = 'history-body-entry-' + ___i;
                        var $___html_a = $('#' + ___html_id + ' a');
                        $('.forecast-image',$___html_a).attr('src','https://static.tenki.jp/images/icon/heatshock/default/icon-small-' + json['i'] + '.png').attr('alt',json['t']);
                        $('span',$___html_a).html(json['t']);
                    }
                }
            }
        });
        __processed_entry_by_jiscode['heatshock_' + __entries[__i]['jiscode']] = 1;
     } else if(__type == 'sakura') {
        // for header base html
        if(__i < 6) {
            var __html = '<li id="history-entry-' + __i + '"><a href="' + __path + '" class="history-entries-link clearfix"><div class="img-box"><img src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"></div><div class="info-box"><span class="name">' + __name + '</span><span class="temp-box">---</span></div></a><a href="javascript:void(0);" class="history-entry-close">ｘ</a></li>';
            $('#history-entries').append(__html);
        }
        // for body recent html
        if(__i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
            var _html = '<a href="javascript:void(0);"><span class="grey">---</span><br><img class="sakura-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" alt="---" width="30" height="30"><br><span class="grey">---</span></a>';
            $('#forecast-map-history-box-recent-entry').html(_html);
        }
        // for body base html
        if(__i >= 1 && __i <= 5){
            var __html = '<div id="history-body-entry-' + __i + '" class="forecast-map-history-box"><a href="' + __path + '">' + __name + '<br>' + '<img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"><br><span>---</span></a></div>';
            $('#forecast-map-history-wrap').append(__html);
        }
        if(__processed_entry_by_jiscode['sakura_' + __entries[__i]['jiscode']]) {
            continue LOOP_I;
        }
        $.ajax({
            type: 'GET',
            url: 'https://static.tenki.jp/static-api/history/sakura/' + __jiscode + '.js',
            dataType: 'jsonp',
            cache: true,
            jsonpCallback: '__skr__'+__jiscode
        }).then(function(json){
            for(var ___i=0; ___i < __entries.length; ___i++) {
                if(json['j'] == __entries[___i]['jiscode'] && __entries[___i]['type'] == 'sakura') {
                    if(!json['i']) {
                        json['i'] = 'none';
                        json['t'] = '---';
                    }
                    // for header histories
                    var ___header_history_html_id = 'history-entry-' + ___i;
                    if(document.getElementById(___header_history_html_id)) {
                        var $__html_a = $('#' + ___header_history_html_id + ' a');
                        $('img',$__html_a).attr('src','https://static.tenki.jp/images/icon/sakura/icon-' + json['i'] + '.png').attr('alt',json['t']);
                        $('.temp-box',$__html_a).html(json['t']);
                    }
                    // for body recent entry
                    if(___i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
                        var $__html = $('#forecast-map-history-box-recent-entry');
                        var __html_str = '<a href="' + __escapeHTML(__entries[___i]['path']) + '">'
                                   + __escapeHTML(__entries[___i]['name']) + '<br>'
                                   + '<img class="sakura-image" src="https://static.tenki.jp' + '/images/icon/sakura/icon-' + json['i'] + '.png" alt="' + json['t'] + '" width="30" height="30"><br>'
                                   + '<span>' + json['t'] + '</span></a>';
                        $__html.html(__html_str);
                    } else if(___i > 0 && document.getElementById('forecast-map-history-wrap')) {
                        var ___html_id = 'history-body-entry-' + ___i;
                        var $___html_a = $('#' + ___html_id + ' a');
                        $('.forecast-image',$___html_a).attr('src','https://static.tenki.jp/images/icon/sakura/icon-' + json['i'] + '.png').attr('alt',json['t']);
                        $('span',$___html_a).html(json['t']);
                    }
                }
            }
       });
        __processed_entry_by_jiscode['sakura_' + __entries[__i]['jiscode']] = 1;
     } else if(__type == 'kouyou') {
        // for header base html
        if(__i < 6) {
            var __html = '<li id="history-entry-' + __i + '"><a href="' + __path + '" class="history-entries-link clearfix"><div class="img-box"><img src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"></div><div class="info-box"><span class="name">' + __name + '</span><span class="temp-box">---</span></div></a><a href="javascript:void(0);" class="history-entry-close">ｘ</a></li>';
            $('#history-entries').append(__html);
        }
        // for body recent html
        if(__i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
            var _html = '<a href="javascript:void(0);"><span class="grey">---</span><br><img class="kouyou-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" alt="---" width="30" height="30"><br><span class="grey">---</span></a>';
            $('#forecast-map-history-box-recent-entry').html(_html);
        }
        // for body base html
        if(__i >= 1 && __i <= 5){
            var __html = '<div id="history-body-entry-' + __i + '" class="forecast-map-history-box"><a href="' + __path + '">' + __name + '<br>' + '<img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"><br><span>---</span></a></div>';
            $('#forecast-map-history-wrap').append(__html);
        }
        if(__processed_entry_by_jiscode['kouyou_' + __entries[__i]['jiscode']]) {
            continue LOOP_I;
        }
        $.ajax({
            type: 'GET',
            url: 'https://static.tenki.jp/static-api/history/kouyou/' + __jiscode + '.js',
            dataType: 'jsonp',
            cache: true,
            jsonpCallback: '__k__'+__jiscode
        }).then(function(json){
            for(var ___i=0; ___i < __entries.length; ___i++) {
                if(json['j'] == __entries[___i]['jiscode'] && __entries[___i]['type'] == 'kouyou') {
                    if(!json['i']) {
                        json['i'] = 'none';
                        json['t'] = '---';
                    }
                    // for header histories
                    var ___header_history_html_id = 'history-entry-' + ___i;
                    if(document.getElementById(___header_history_html_id)) {
                        var $__html_a = $('#' + ___header_history_html_id + ' a');
                        $('img',$__html_a).attr('src','https://static.tenki.jp/images/icon/kouyou/icon-' + json['i'] + '.png').attr('alt',json['t']);
                        $('.temp-box',$__html_a).html(json['t']);
                    }
                    // for body recent entry
                    if(___i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
                        var $__html = $('#forecast-map-history-box-recent-entry');
                        var __html_str = '<a href="' + __escapeHTML(__entries[___i]['path']) + '">'
                                   + __escapeHTML(__entries[___i]['name']) + '<br>'
                                   + '<img class="kouyou-image" src="https://static.tenki.jp' + '/images/icon/kouyou/icon-' + json['i'] + '.png" alt="' + json['t'] + '" width="30" height="30"><br>'
                                   + '<span>' + json['t'] + '</span></a>';
                        $__html.html(__html_str);
                    } else if(___i > 0 && document.getElementById('forecast-map-history-wrap')) {
                        var ___html_id = 'history-body-entry-' + ___i;
                        var $___html_a = $('#' + ___html_id + ' a');
                        $('.forecast-image',$___html_a).attr('src','https://static.tenki.jp/images/icon/kouyou/icon-' + json['i'] + '.png').attr('alt',json['t']);
                        $('span',$___html_a).html(json['t']);
                    }
                }
            }
       });
        __processed_entry_by_jiscode['kouyou_' + __entries[__i]['jiscode']] = 1;
     } else if(__type == 'ski') {
        // for header base html
        if(__i < 6) {
            var __html = '<li id="history-entry-' + __i + '"><a href="' + __path + '" class="history-entries-link clearfix"><div class="img-box"><img src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="47" height="30" alt="---"></div><div class="info-box"><span class="name">' + __name + '</span><span class="temp-box"><span class="max_t">---</span><span class="grey">/</span><span class="min_t">---</span></span></div></a><a href="javascript:void(0);" class="history-entry-close">ｘ</a></li>';
            $('#history-entries').append(__html);
        }
        // for body recent html
        if(__i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
            var _html = '<a href="javascript:void(0);"><span class="grey">---</span><br><img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" alt="---" width="47" height="30"><br><span class="grey">---</span><span class="grey">/</span><span class="grey">---</span><span class="grey">---</span></a>';
            $('#forecast-map-history-box-recent-entry').html(_html);
        }
        // for body base html
        if(__i >= 1 && __i <= 9){
            var __html = '<div id="history-body-entry-' + __i + '" class="forecast-map-history-box"><a href="' + __path + '">' + __name + '<br>' + '<img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="47" height="30" alt="---"><br><span class="max-temp">---</span><span class="grey">/</span><span class="min-temp">---</span><span class="prob-precip">---</span></a></div>';
            $('#forecast-map-history-wrap').append(__html);
        }
        if(__processed_entry_by_jiscode['ski_' + __entries[__i]['jiscode']]) {
            continue LOOP_I;
        }
        $.ajax({
                type: 'GET',
                url: 'https://static.tenki.jp/static-api/history/ski/' + __jiscode + '.js',
                dataType: 'jsonp',
                cache: true,
                jsonpCallback: '__ski__'+__jiscode
        }).then(function(json){
                for(var ___i=0; ___i < __entries.length; ___i++) {
                    if(json['j'] == __entries[___i]['jiscode'] && __entries[___i]['type'] == 'ski') {
                        if(!json['i']) {
                            json['i'] = '00';
                            json['t'] = '---';
                        }
                        // for header histories
                        var ___header_history_html_id = 'history-entry-' + ___i;
                        if(document.getElementById(___header_history_html_id)) {
                            var $__html_a = $('#' + ___header_history_html_id + ' a');
                            $('img',$__html_a).attr('src','https://static.tenki.jp/images/icon/forecast-days-weather/' + json['i'] + '.png').attr('alt',json['t']);
                            $('.max_t',$__html_a).html(json['max_t']);
                            $('.min_t',$__html_a).html(json['min_t']);
                        }
                        // for body recent entry
                        if(___i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
                            var $__html = $('#forecast-map-history-box-recent-entry');
                            var __html_str = '<a href="' + __escapeHTML(__entries[___i]['path']) + '">'
                                           + __escapeHTML(__entries[___i]['name']) + '<br>'
                                           + '<img class="forecast-image" src="https://static.tenki.jp' + '/images/icon/forecast-days-weather/' + json['i'] + '.png" alt="' + json['t'] + '" width="47" height="30"><br>'
                                           + '<span class="max-temp">' + json['max_t'] + '</span><span class="grey">/</span><span class="min-temp">' + json['min_t'] + '</span></a>';
                            $__html.html(__html_str);
                        // for body entries
                        } else if(___i > 0 && document.getElementById('forecast-map-history-wrap')) {
                            var ___html_id = 'history-body-entry-' + ___i;
                            var $___html_a = $('#' + ___html_id + ' a');
                            $('.forecast-image',$___html_a).attr('src','https://static.tenki.jp/images/icon/forecast-days-weather/' + json['i'] + '.png').attr('alt',json['t']);
                            $('.max-temp',$___html_a).html(json['max_t']);
                            $('.min-temp',$___html_a).html(json['min_t']);
                            $('.prob-precip',$___html_a).html('');
                        }
                    }
                }
        });
        __processed_entry_by_jiscode['ski_' + __entries[__i]['jiscode']] = 1;
     } else if(__type == 'pollen') {
        // for header base html
        if(__i < 6) {
            var __html = '<li id="history-entry-' + __i + '"><a href="' + __path + '" class="history-entries-link clearfix"><div class="img-box"><img src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"></div><div class="info-box"><span class="name">' + __name + '</span><span class="temp-box">---</span></div></a><a href="javascript:void(0);" class="history-entry-close">ｘ</a></li>';
            $('#history-entries').append(__html);
        }
        // for body recent html
        if(__i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
            var _html = '<a href="javascript:void(0);"><span class="grey">---</span><br><img class="pollen-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" alt="---" width="30" height="30"><br><span class="grey">---</span></a>';
            $('#forecast-map-history-box-recent-entry').html(_html);
        }
        // for body base html
        if(__i >= 1 && __i <= 5){
            var __html = '<div id="history-body-entry-' + __i + '" class="forecast-map-history-box"><a href="' + __path + '">' + __name + '<br>' + '<img class="forecast-image" src="https://static.tenki.jp/images/icon/forecast-days-weather/00.png" width="30" height="30" alt="---"><br><span>---</span></a></div>';
            $('#forecast-map-history-wrap').append(__html);
        }
        if(__processed_entry_by_jiscode['pollen_' + __entries[__i]['jiscode']]) {
            continue LOOP_I;
        }
        $.ajax({
            type: 'GET',
            url: 'https://static.tenki.jp/static-api/history/pollen/' + __jiscode + '.js',
            dataType: 'jsonp',
            cache: true,
            jsonpCallback: '__pl__'+__jiscode
        }).then(function(json){
            for(var ___i=0; ___i < __entries.length; ___i++) {
                if(json['j'] == __entries[___i]['jiscode'] && __entries[___i]['type'] == 'pollen') {
                    if(!json['i']) {
                        json['i'] = 'none';
                        json['t'] = '---';
                    }
                    // for header histories
                    var ___header_history_html_id = 'history-entry-' + ___i;
                    if(document.getElementById(___header_history_html_id)) {
                        var $__html_a = $('#' + ___header_history_html_id + ' a');
                        $('img',$__html_a).attr('src','https://static.tenki.jp/images/icon/pollen/default/icon-small-' + json['i'] + '.png').attr('alt',json['t']);
                        $('.temp-box',$__html_a).html(json['t']);
                    }
                    // for body recent entry
                    if(___i == 0 && document.getElementById('forecast-map-history-box-recent-entry')) {
                        var $__html = $('#forecast-map-history-box-recent-entry');
                        var __html_str = '<a href="' + __escapeHTML(__entries[___i]['path']) + '">'
                                   + __escapeHTML(__entries[___i]['name']) + '<br>'
                                   + '<img class="pollen-image" src="https://static.tenki.jp' + '/images/icon/pollen/default/icon-small-' + json['i'] + '.png" alt="' + json['t'] + '" width="30" height="30"><br>'
                                   + '<span>' + json['t'] + '</span></a>';
                        $__html.html(__html_str);
                    } else if(___i > 0 && document.getElementById('forecast-map-history-wrap')) {
                        var ___html_id = 'history-body-entry-' + ___i;
                        var $___html_a = $('#' + ___html_id + ' a');
                        $('.forecast-image',$___html_a).attr('src','https://static.tenki.jp/images/icon/pollen/default/icon-small-' + json['i'] + '.png').attr('alt',json['t']);
                        $('span',$___html_a).html(json['t']);
                    }
                }
            }
       });
        __processed_entry_by_jiscode['pollen_' + __entries[__i]['jiscode']] = 1;
     }
     var coachLinkHistoryIsClosed = Cookies.get('coach_mark_history') === 'closed';
     if (__historyCoachMarkValid && !coachLinkHistoryIsClosed) {
      var target = document.getElementById('history-entry-0');
      target.innerHTML = '<div style="position:relative;">' + target.innerHTML + '<span id="coach-mark-history" class="coach-mark-history"><span id="coach-mark-text" class="coach-mark-text">直前に見た情報が<br>ここに保存されます<br>（ログイン不要）</span><span id="coach-mark-close" class="coach-mark-close"><span id="close-button" class="close-button"></span></span></span></div><style id="coach-mark-css">.coach-mark-history{width:140px;text-align:center;display:flex;background:rgba(0,0,0,.7);color:#fff;border-radius:5px;position:absolute;left:120px;top:-5px;padding:5px 10px;z-index:9999}.coach-mark-text{flex:1;font-size:.68em;line-height:1.2}.coach-mark-text .plus-button::before{content:"＋";display:inline-block;color:#62bcfe;font-weight:700;font-size:1.275em}.coach-mark-close{width:20px;display:flex;align-items:center;justify-content:center;position:relative;cursor:pointer}.coach-mark-close .close-button::after,.coach-mark-close .close-button::before{content:"";position:absolute;top:50%;left:50%;width:2px;height:11px;background:#fff}.coach-mark-close .close-button::before{transform:translate(-50%,-50%) rotate(45deg)}.coach-mark-close .close-button::after{transform:translate(-50%,-50%) rotate(-45deg)}.coach-mark-history::before{pointer-events:none;content:"";position:absolute;top:50%;left:-20px;margin-top:-10px;border:10px solid transparent;border-right:10px solid rgba(0,0,0,.7)}</style>';
      var close_button = document.querySelector('.coach-mark-close');
      close_button.addEventListener('click', function(){
        document.querySelector('.coach-mark-history').style.display = 'none';
        Cookies.set('coach_mark_history', 'closed', {'expires': 3000, path: '/'});
      });
    }
  } // LOOP_I
};
__get_h_point_entries();
// redirect location url
if( navigator.geolocation && document.getElementById('hd-search-gps')){
    $('#hd-search-gps a,#body-search-gps a').click(function(){
        navigator.geolocation.getCurrentPosition(function(position){
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            location.href = 'https://static.tenki.jp/api/app/get-point-url.html?lon=' + lon + '&lat=' + lat;
            return false;
        });
    });
}
$(document).on('click','#history-entries li a.history-entry-close',function(){
   var $$ = $(this);
   var id = $$.parents('li[id^=history-]').get(0).id.split('-').pop();
   if(id != '' && id >= 0 && id <= 10000) {
     __remove_h_point(id);
     __get_h_point_entries();
   }
});
// -->