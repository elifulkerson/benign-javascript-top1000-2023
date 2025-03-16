<!--
var __forecast_data = [];
__forecast_data[1100] = [
{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'18', 'min_temp':'12', 'prob_precip':'40'},

{ 'telop':'雨のち曇', 'image_id':'20', 'max_temp':'12', 'min_temp':'5', 'prob_precip':'60'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'20', 'min_temp':'8', 'prob_precip':'30'},

{ 'telop':'雨時々曇', 'image_id':'17', 'max_temp':'20', 'min_temp':'11', 'prob_precip':'80'},

{ 'telop':'曇一時雨', 'image_id':'10', 'max_temp':'13', 'min_temp':'10', 'prob_precip':'70'},

{ 'telop':'曇時々雨', 'image_id':'10', 'max_temp':'12', 'min_temp':'7', 'prob_precip':'70'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'11', 'min_temp':'4', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'15', 'min_temp':'5', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'17', 'min_temp':'5', 'prob_precip':'30'},

{ 'telop':'曇時々晴', 'image_id':'09', 'max_temp':'17', 'min_temp':'8', 'prob_precip':'40'},

{ 'telop':'曇時々晴', 'image_id':'09', 'max_temp':'16', 'min_temp':'7', 'prob_precip':'30'}
];

__forecast_data[1206] = [
{ 'telop':'晴', 'image_id':'01', 'max_temp':'18', 'min_temp':'13', 'prob_precip':'40'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'14', 'min_temp':'6', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'17', 'min_temp':'6', 'prob_precip':'20'},

{ 'telop':'曇', 'image_id':'08', 'max_temp':'19', 'min_temp':'10', 'prob_precip':'40'},

{ 'telop':'曇時々雨', 'image_id':'10', 'max_temp':'15', 'min_temp':'11', 'prob_precip':'80'},

{ 'telop':'晴時々雨', 'image_id':'03', 'max_temp':'15', 'min_temp':'9', 'prob_precip':'50'},

{ 'telop':'晴時々雨', 'image_id':'03', 'max_temp':'13', 'min_temp':'3', 'prob_precip':'60'},

{ 'telop':'晴時々雨', 'image_id':'03', 'max_temp':'15', 'min_temp':'5', 'prob_precip':'50'},

{ 'telop':'晴時々雨', 'image_id':'03', 'max_temp':'16', 'min_temp':'4', 'prob_precip':'50'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'17', 'min_temp':'7', 'prob_precip':'40'},

{ 'telop':'曇時々晴', 'image_id':'09', 'max_temp':'15', 'min_temp':'5', 'prob_precip':'40'}
];

__forecast_data[4100] = [
{ 'telop':'晴一時雨', 'image_id':'03', 'max_temp':'23', 'min_temp':'13', 'prob_precip':'60'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'20', 'min_temp':'12', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'9', 'prob_precip':'20'},

{ 'telop':'曇時々晴', 'image_id':'09', 'max_temp':'25', 'min_temp':'11', 'prob_precip':'30'},

{ 'telop':'曇', 'image_id':'08', 'max_temp':'22', 'min_temp':'14', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'18', 'min_temp':'13', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'15', 'min_temp':'8', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'20', 'min_temp':'8', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'21', 'min_temp':'10', 'prob_precip':'30'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'10', 'prob_precip':'20'},

{ 'telop':'晴時々雨', 'image_id':'03', 'max_temp':'19', 'min_temp':'10', 'prob_precip':'60'}
];

__forecast_data[13101] = [
{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'12', 'prob_precip':'10'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'15', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'14', 'prob_precip':'30'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'26', 'min_temp':'16', 'prob_precip':'20'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'26', 'min_temp':'17', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'17', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'18', 'min_temp':'12', 'prob_precip':'30'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'21', 'min_temp':'11', 'prob_precip':'10'},

{ 'telop':'晴時々雨', 'image_id':'03', 'max_temp':'23', 'min_temp':'12', 'prob_precip':'70'},

{ 'telop':'晴時々雨', 'image_id':'03', 'max_temp':'23', 'min_temp':'14', 'prob_precip':'50'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'14', 'prob_precip':'40'}
];

__forecast_data[15100] = [
{ 'telop':'晴のち雨', 'image_id':'06', 'max_temp':'23', 'min_temp':'16', 'prob_precip':'80'},

{ 'telop':'晴のち雨', 'image_id':'06', 'max_temp':'20', 'min_temp':'13', 'prob_precip':'50'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'21', 'min_temp':'12', 'prob_precip':'10'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'24', 'min_temp':'13', 'prob_precip':'30'},

{ 'telop':'曇のち雨', 'image_id':'13', 'max_temp':'20', 'min_temp':'16', 'prob_precip':'90'},

{ 'telop':'曇時々雨', 'image_id':'10', 'max_temp':'15', 'min_temp':'13', 'prob_precip':'90'},

{ 'telop':'曇', 'image_id':'08', 'max_temp':'16', 'min_temp':'9', 'prob_precip':'40'},

{ 'telop':'晴時々雨', 'image_id':'03', 'max_temp':'20', 'min_temp':'9', 'prob_precip':'50'},

{ 'telop':'曇時々晴', 'image_id':'09', 'max_temp':'21', 'min_temp':'11', 'prob_precip':'40'},

{ 'telop':'曇', 'image_id':'08', 'max_temp':'20', 'min_temp':'12', 'prob_precip':'40'},

{ 'telop':'曇', 'image_id':'08', 'max_temp':'20', 'min_temp':'12', 'prob_precip':'40'}
];

__forecast_data[17201] = [
{ 'telop':'雨のち曇', 'image_id':'20', 'max_temp':'24', 'min_temp':'15', 'prob_precip':'80'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'13', 'prob_precip':'40'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'23', 'min_temp':'11', 'prob_precip':'20'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'25', 'min_temp':'14', 'prob_precip':'20'},

{ 'telop':'曇のち雨', 'image_id':'13', 'max_temp':'21', 'min_temp':'18', 'prob_precip':'90'},

{ 'telop':'雨時々曇', 'image_id':'17', 'max_temp':'16', 'min_temp':'13', 'prob_precip':'90'},

{ 'telop':'曇時々雨', 'image_id':'10', 'max_temp':'17', 'min_temp':'9', 'prob_precip':'70'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'21', 'min_temp':'11', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'12', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'21', 'min_temp':'13', 'prob_precip':'40'},

{ 'telop':'曇時々晴', 'image_id':'09', 'max_temp':'21', 'min_temp':'12', 'prob_precip':'40'}
];

__forecast_data[23100] = [
{ 'telop':'晴', 'image_id':'01', 'max_temp':'24', 'min_temp':'13', 'prob_precip':'0'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'15', 'prob_precip':'0'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'12', 'prob_precip':'0'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'25', 'min_temp':'14', 'prob_precip':'20'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'24', 'min_temp':'16', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'20', 'min_temp':'14', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'20', 'min_temp':'11', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'10', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'12', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'12', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'14', 'prob_precip':'20'}
];

__forecast_data[27100] = [
{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'16', 'prob_precip':'40'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'23', 'min_temp':'16', 'prob_precip':'40'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'13', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'26', 'min_temp':'15', 'prob_precip':'20'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'24', 'min_temp':'17', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'20', 'min_temp':'15', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'18', 'min_temp':'11', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'10', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'12', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'13', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'14', 'prob_precip':'20'}
];

__forecast_data[34100] = [
{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'13', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'13', 'prob_precip':'20'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'26', 'min_temp':'15', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'27', 'min_temp':'16', 'prob_precip':'30'},

{ 'telop':'曇一時雨', 'image_id':'10', 'max_temp':'21', 'min_temp':'18', 'prob_precip':'70'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'19', 'min_temp':'13', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'20', 'min_temp':'10', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'10', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'12', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'12', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'25', 'min_temp':'13', 'prob_precip':'20'}
];

__forecast_data[39201] = [
{ 'telop':'曇のち晴', 'image_id':'12', 'max_temp':'25', 'min_temp':'13', 'prob_precip':'20'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'26', 'min_temp':'14', 'prob_precip':'10'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'25', 'min_temp':'14', 'prob_precip':'30'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'26', 'min_temp':'16', 'prob_precip':'20'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'25', 'min_temp':'17', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'21', 'min_temp':'13', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'21', 'min_temp':'10', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'11', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'12', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'25', 'min_temp':'12', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'25', 'min_temp':'13', 'prob_precip':'20'}
];

__forecast_data[40130] = [
{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'17', 'prob_precip':'20'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'15', 'prob_precip':'40'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'27', 'min_temp':'14', 'prob_precip':'0'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'27', 'min_temp':'14', 'prob_precip':'20'},

{ 'telop':'晴一時雨', 'image_id':'03', 'max_temp':'21', 'min_temp':'17', 'prob_precip':'90'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'18', 'min_temp':'14', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'20', 'min_temp':'11', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'23', 'min_temp':'10', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'13', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'14', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'25', 'min_temp':'14', 'prob_precip':'20'}
];

__forecast_data[46201] = [
{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'14', 'prob_precip':'10'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'25', 'min_temp':'16', 'prob_precip':'10'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'26', 'min_temp':'15', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'26', 'min_temp':'17', 'prob_precip':'30'},

{ 'telop':'曇一時雨', 'image_id':'10', 'max_temp':'25', 'min_temp':'18', 'prob_precip':'80'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'20', 'min_temp':'15', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'22', 'min_temp':'10', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'12', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'25', 'min_temp':'14', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'25', 'min_temp':'15', 'prob_precip':'10'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'24', 'min_temp':'15', 'prob_precip':'20'}
];

__forecast_data[47201] = [
{ 'telop':'晴', 'image_id':'01', 'max_temp':'28', 'min_temp':'23', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'28', 'min_temp':'23', 'prob_precip':'40'},

{ 'telop':'晴のち曇', 'image_id':'05', 'max_temp':'29', 'min_temp':'23', 'prob_precip':'40'},

{ 'telop':'晴', 'image_id':'01', 'max_temp':'30', 'min_temp':'24', 'prob_precip':'20'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'30', 'min_temp':'23', 'prob_precip':'20'},

{ 'telop':'曇時々晴', 'image_id':'09', 'max_temp':'26', 'min_temp':'24', 'prob_precip':'40'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'27', 'min_temp':'22', 'prob_precip':'30'},

{ 'telop':'曇時々晴', 'image_id':'09', 'max_temp':'28', 'min_temp':'23', 'prob_precip':'30'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'28', 'min_temp':'23', 'prob_precip':'30'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'29', 'min_temp':'24', 'prob_precip':'30'},

{ 'telop':'晴時々曇', 'image_id':'02', 'max_temp':'28', 'min_temp':'23', 'prob_precip':'40'}
];

var __public_date_data = [];
__public_date_data[0] = { "date":"10月16日","youbi":"月","holiday":""};

__public_date_data[1] = { "date":"10月17日","youbi":"火","holiday":""};

__public_date_data[2] = { "date":"10月18日","youbi":"水","holiday":""};

__public_date_data[3] = { "date":"10月19日","youbi":"木","holiday":""};

__public_date_data[4] = { "date":"10月20日","youbi":"金","holiday":""};

__public_date_data[5] = { "date":"10月21日","youbi":"土","holiday":""};

__public_date_data[6] = { "date":"10月22日","youbi":"日","holiday":""};

__public_date_data[7] = { "date":"10月23日","youbi":"月","holiday":""};

__public_date_data[8] = { "date":"10月24日","youbi":"火","holiday":""};

__public_date_data[9] = { "date":"10月25日","youbi":"水","holiday":""};

__public_date_data[10] = { "date":"10月26日","youbi":"木","holiday":""};

$(function(){

  $('#forecast-public-date-entries > li > a').click(function(){

    var $$ = $(this);
    $('#forecast-public-date-entries > li > a').removeClass('selected');
    $$.addClass('selected');

    var selected_date = $$.get(0).id.split('-').pop();
    var selected_index = selected_date - 1;
    var public_forecast_date_str = '';

    if(__public_date_data[selected_index] && __public_date_data[selected_index]["holiday"] != '') {
        public_forecast_date_str = __public_date_data[selected_index]['date'] + '(<span class="holiday">' + __public_date_data[selected_index]['youbi'] + '</span>)';
    } else if(__public_date_data[selected_index] && __public_date_data[selected_index]["youbi"] == '土') {
        public_forecast_date_str = __public_date_data[selected_index]['date'] + '(<span class="saturday">' + __public_date_data[selected_index]['youbi'] + '</span>)';
    } else if(__public_date_data[selected_index] && __public_date_data[selected_index]["youbi"] == '日') {
        public_forecast_date_str = __public_date_data[selected_index]['date'] + '(<span class="sunday">' + __public_date_data[selected_index]['youbi'] + '</span>)';
    } else {
        public_forecast_date_str = __public_date_data[selected_index]['date'] + '(<span>' + __public_date_data[selected_index]['youbi'] + '</span>)';
    }

    $('#forecast-public-date').html(public_forecast_date_str);    // 地図
    if(document.getElementById('forecast-map')) {
        $('#forecast-map .forecast-map-entry').each(function(){
            var $this = $(this);
            var jiscode = $this.get(0).id.split('-').pop();
            if(jiscode) { // && __forecast_data[jiscode]) {
                $('.forecast-image',this).attr({'src':'//static.tenki.jp/images/icon/forecast-days-weather/' + __forecast_data[jiscode][selected_index]['image_id'] + '.png','alt':__forecast_data[jiscode][selected_index]['telop']});
                if(__forecast_data[jiscode][selected_index]['max_temp'] != '') {
                    $('.max-temp',this).html(__forecast_data[jiscode][selected_index]['max_temp']);
                } else {
                    $('.max-temp',this).html('---');
                }
                if(__forecast_data[jiscode][selected_index]['min_temp'] != '' ) {
                    $('.min-temp',this).html(__forecast_data[jiscode][selected_index]['min_temp']);
                } else {
                    $('.min-temp',this).html('---');
                }
                if(__forecast_data[jiscode][selected_index]['prob_precip'] != '') {
                    $('.prob-precip',this).html(__forecast_data[jiscode][selected_index]['prob_precip'] + '%');
                } else {
                    $('.prob-precip',this).html('---');
                }
            }
            var url = $this.attr('href');
            if(url) {
                if(url.match(/\?/)) {
                    url = url.split('?').shift();
                }
                if(selected_index > 0 && url.match(/\/$/)) {
                    url = url + '?date=' + ( selected_index + 1 );
                } else {
                    url = url;
                }
                $this.attr('href',url);
            }
        });
    }

    // クリッカブル・マップ
    if(document.getElementById("forecast-map-image-clickable")) {
        $('#forecast-map-image-clickable > area').each(function(){
            var $this = $(this);
            var url = $this.attr('href');
            if(url) {
                if(url.match(/\?/)) {
                    url = url.split('?').shift();
                }
                if(selected_index > 0 && url.match(/\/$/)) {
                    url = url + '?date=' + ( selected_index + 1 );
                } else {
                    url = url;
                }
                $this.attr('href',url);
            }
        });
    }

  });
});
//-->