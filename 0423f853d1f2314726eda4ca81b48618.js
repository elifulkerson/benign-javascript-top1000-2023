/***=====Padma bridge countdown Start=====***/
/*function makeTimer() {
  const bdNumbers = {
    0: '০',
    1: '১',
    2: '২',
    3: '৩',
    4: '৪',
    5: '৫',
    6: '৬',
    7: '৭',
    8: '৮',
    9: '৯',
  };
  //		var endTime = new Date("29 April 2018 9:56:00 GMT+01:00");
  var endTime = new Date('June 25, 2022 09:59:59');
  endTime = Date.parse(endTime) / 1000;

  var now = new Date();
  now = Date.parse(now) / 1000;

  var timeLeft = endTime - now;

  var days = Math.floor(timeLeft / 86400);
  var hours = Math.floor((timeLeft - days * 86400) / 3600);
  var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
  var seconds = Math.floor(
    timeLeft - days * 86400 - hours * 3600 - minutes * 60,
  );

  if (hours < '10') {
    hours = '0' + hours;
  }
  if (minutes < '10') {
    minutes = '0' + minutes;
  }
  if (seconds < '10') {
    seconds = '0' + seconds;
  }

    $("#days").html(days + "<span>Days</span>");
    $("#hours").html(hours + "<span>Hours</span>");
    $("#minutes").html(minutes + "<span>Minutes</span>");
    $("#seconds").html(seconds + "<span>Seconds</span>");

    if(endTime > now){
        let bnDays = days.toString().split('');
        let bnHours = hours.toString().split('');
        let bnMinutes = minutes.toString().split('');
        let bnSeconds = seconds.toString().split('');

        document.querySelector("#days").innerText = bnDays.length > 1 ? (bdNumbers[bnDays[0]]+bdNumbers[bnDays[1]]) : bdNumbers[days];
        document.querySelector("#hours").innerText = bdNumbers[bnHours[0]]+bdNumbers[bnHours[1]];
        document.querySelector("#minutes").innerText = bdNumbers[bnMinutes[0]]+bdNumbers[bnMinutes[1]];
        document.querySelector("#seconds").innerText = bdNumbers[bnSeconds[0]]+bdNumbers[bnSeconds[1]];
    }
    else{
        document.querySelector("#days").innerText = '০';
        document.querySelector("#hours").innerText = '০';
        document.querySelector("#minutes").innerText = '০';
        document.querySelector("#seconds").innerText = '০';
        $('#timer').hide();
    }

}*/


/*
setInterval(function () {
  makeTimer();
}, 1000);
*/
/***=====Padma bridge countdown End=====***/

/***=====Ramadan calendar view script=====***/

$(function () {
    //active script
/*
    var number = {
        0: "০",
        1: "১",
        2: "২",
        3: "৩",
        4: "৪",
        5: "৫",
        6: "৬",
        7: "৭",
        8: "৮",
        9: "৯",
    };

    var d = new Date();
    var hour = d.getHours(); // 12/13...
    var minutes = d.getMinutes(); // 43 / 01
    var seconds = d.getSeconds(); // 3 / 13
    var month = d.getMonth() + 1; // 4
    var day = d.getDate(); // 1 / 14
    var year = d.getFullYear(); // 2022
    
    // Ifter coundown auto termination start 
    
    if (day > 21) {
        $("#ifter_countdown").hide();
        
    }
    else{
        $("#ifter_countdown").show();
    }
    
    // Ifter coundown auto termination end
    
    var today = day + "-" + month + "-" + year; // 1-4-2022

    var timebd = {
        "24-3-2023": { rday: "১ম", sahri: "4:38", iftar: "6:14" },
        "25-3-2023": { rday: "২য়", sahri: "4:37", iftar: "6:14" },
        "26-3-2023": { rday: "৩য়", sahri: "4:36", iftar: "6:15" },
        "27-3-2023": { rday: "৪র্থ", sahri: "4:35", iftar: "6:15" },
        "28-3-2023": { rday: "৫ম", sahri: "4:34", iftar: "6:16" },
        "29-3-2023": { rday: "৬ষ্ঠ", sahri: "4:32", iftar: "6:16" },
        "30-3-2023": { rday: "৭ম", sahri: "4:31", iftar: "6:17" },
        "31-3-2023": { rday: "৮ম", sahri: "4:30", iftar: "6:17" },
        "1-4-2023": { rday: "৯ম", sahri: "4:29", iftar: "6:18" },
        "2-4-2023": { rday: "১০ম", sahri: "4:28", iftar: "6:18" },
        "3-4-2023": { rday: "১১তম", sahri: "4:27", iftar: "6:19" },
        "4-4-2023": { rday: "১২তম", sahri: "4:26", iftar: "6:19" },
        "5-4-2023": { rday: "১৩তম", sahri: "4:25", iftar: "6:20" },
        "6-4-2023": { rday: "১৪তম", sahri: "4:24", iftar: "6:20" },
        "7-4-2023": { rday: "১৫তম", sahri: "4:23", iftar: "6:21" },
        "8-4-2023": { rday: "১৬তম", sahri: "4:22", iftar: "6:21" },
        "9-4-2023": { rday: "১৭তম", sahri: "4:21", iftar: "6:22" },
        "10-4-2023": { rday: "১৮তম",sahri: "4:20", iftar: "6:22" },
        "11-4-2023": { rday: "১৯তম",sahri: "4:19", iftar: "6:22" },
        "12-4-2023": { rday: "২০তম",sahri: "4:18", iftar: "6:23" },
        "13-4-2023": { rday: "২১তম", sahri: "4:16", iftar: "6:23" },
        "14-4-2023": { rday: "২২তম", sahri: "4:15", iftar: "6:23" },
        "15-4-2023": { rday: "২৩তম", sahri: "4:14", iftar: "6:24" },
        "16-4-2023": { rday: "২৪তম", sahri: "4:13", iftar: "6:24" },
        "17-4-2023": { rday: "২৫তম", sahri: "4:12", iftar: "6:24" },
        "18-4-2023": { rday: "২৬তম", sahri: "4:11", iftar: "6:25" },
        "19-4-2023": { rday: "২৭তম", sahri: "4:10", iftar: "6:25" },
        "20-4-2023": { rday: "২৮তম", sahri: "4:09", iftar: "6:26" },
        "21-4-2023": { rday: "২৯তম", sahri: "4:08", iftar: "6:26" },
        "22-4-2023": { rday: "৩০তম", sahri: "4:07", iftar: "6:26" },
        "23-4-2023": { sahri: "-", iftar: "-" },
    };

    var s = timebd[today]["sahri"]; // 4:27

    var a = s.split(":"); // 4,27
    var hr = parseInt(a[0]);
    var starttime = Date.parse(new Date(year, month - 1, day, hr, a[1])); // 1617574380000
    var t = starttime - Date.parse(new Date()); // -19628000 Running time

    var currentTime = Date.parse(new Date());

    var tt = new Date(year, month - 1, day, hr, a[1]); // Fri Apr 05 2022 05:00:00 GMT+0600 (BST)

    var iftr = timebd[today]["iftar"];
    var splt = iftr.split(":");
    var iftr_hour = parseInt(splt[0]) + 12;

    var iftar_start_time = Date.parse(
        new Date(year, month - 1, day, iftr_hour, splt[1])
    );

    // alert(iftar_start_time);
    var iftar_time_gap = iftar_start_time - Date.parse(new Date());

    if (currentTime > iftar_start_time) {
        today = day + 1 + "-" + month + "-" + year;
    }

    // alert(iftar_time_gap);
    initializeClock("jug_rm_clockdiv", iftar_start_time);

    if (currentTime > starttime) {

        document.getElementById("jug_rm_day").innerHTML =
            timebd[today]["rday"];

        document.getElementById("jug_rm_ifter").innerHTML =
            replaceTimeNumbers(timebd[today]["iftar"]) + " মিনিট";

        document.getElementById("jug_rm_sehri").innerHTML =
            replaceTimeNumbers(timebd[today]["sahri"]) + " মিনিট";

    }


    // Condition for iftar time to 12PM
    if (currentTime > iftar_start_time) {

        document.getElementById("jug_rm_day").innerHTML =
            timebd[today]["rday"];

        document.getElementById("jug_rm_ifter").innerHTML =
            replaceTimeNumbers(timebd[today]["iftar"]) + " মিনিট";

        document.getElementById("jug_rm_sehri").innerHTML =
            replaceTimeNumbers(timebd[today]["sahri"]) + " মিনিট";

    }

    // Condition for 12 AM to Sahri time
    if (currentTime < starttime) {

        document.getElementById("jug_rm_day").innerHTML =
            timebd[today]["rday"] + "- তম ";

        document.getElementById("jug_rm_ifter").innerHTML =
            replaceTimeNumbers(timebd[today]["iftar"]) + " মিনিট";

        document.getElementById("jug_rm_sehri").innerHTML =
            replaceTimeNumbers(timebd[today]["sahri"]) + " মিনিট";

    }

    if (iftar_time_gap <= 7200000 && iftar_time_gap > 0) {
        document.getElementById("ifter_countdown").classList.remove("d-none");

        document.getElementById("jug_rm_day").innerHTML =
            timebd[today]["rday"];

        document.getElementById("jug_rm_ifter").innerHTML =
            replaceTimeNumbers(timebd[today]["iftar"]) + " মিনিট";

        document.getElementById("jug_rm_sehri").innerHTML =
            replaceTimeNumbers(timebd[today]["sahri"]) + " মিনিট";

        document.getElementById("jug_rm_clockdiv").style.display = "inline-block";
    }
*/
    // Start Second Shine logo bg Change
    /*    if (
            (month === 4 && day > 23 && day <= 30) ||
            (month === 5 && day <= 3)
        ) {
            $("#logo_anchor").attr("href", "https://b.link/othoba-shine");

            $("#logo").attr(
                "src",
                "https://images.prothomalo.com/prothomalo-bangla/2021-04/19ec924d-8b1d-4678-8fea-134301571c9f/shine.png"
            );
            $("#logo").css("padding-top", "12px");
        }*/

    // End Second Shine logo bg Change

    // Start Third falcon logo bg Change

    /*
        if (month === 5 && day > 3 && day <= 14) {
            $("#logo_anchor").attr("href", "https://b.link/othoba-falcon");

            $("#logo").attr(
                "src",
                "https://images.prothomalo.com/prothomalo-bangla/2021-03/2cd95951-d541-431a-b58e-ca132d36c159/falcon.png"
            );
            $("#logo").css("padding-top", "12px");
        }
    */

    // End Third falcon logo bg Change

    //active script
    
/*    function getTimeRemaining(endtime) {
        var t = endtime - Date.parse(new Date());

        var seconds = Math.floor((t / 1000) % 60);
        var minutes = Math.floor((t / 1000 / 60) % 60);
        var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
        var days = Math.floor(t / (1000 * 60 * 60 * 24));
        return {
            total: t,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        };
    }

    function initializeClock(id, endtime) {
        var clock = document.getElementById(id);
        var hoursSpan = clock.querySelector(".hours");
        var minutesSpan = clock.querySelector(".minutes");
        var secondsSpan = clock.querySelector(".seconds");

        function updateClock() {
            var t = getTimeRemaining(endtime);
            var h = ("0" + t.hours).slice(-2);
            var m = ("0" + t.minutes).slice(-2);
            var s = ("0" + t.seconds).slice(-2);

            hoursSpan.innerHTML = replaceNumbers(h);
            minutesSpan.innerHTML = replaceNumbers(m);
            secondsSpan.innerHTML = replaceNumbers(s);

            if (t.total <= 0) {
                clearInterval(timeinterval);
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }

    function replaceNumbers(input) {
        var output = [];
        for (var i = 0; i < input.length; ++i) {
            if (number.hasOwnProperty(input[i])) {
                output.push(number[input[i]]);
            } else {
                output.push(input[i]);
            }
        }
        return output.join("");
    }

    function replaceTimeNumbers(input) {
        var h = input.slice(-4, 1);
        var m = input.slice(-2);

        return replaceNumbers(h) + ":" + replaceNumbers(m);
    }*/
        
});
/***=====Ramadan calendar view script End=====***/

/*----------------------------------- Archive Script Start--------------------------------------*/
if ($('.archive_submit').is(':visible')) {
  $('.archive_submit').click(function () {
    var URL = window.location.origin;
    var sel_day = $('select[name="arch_day"]').val();
    var sel_month = $('select[name="arch_month"]').val();
    var sel_year = $('select[name="arch_year"]').val();
    var sel_edition = $('select[name="edition"]').val();
    if (sel_day === '') {
      $('select[name="arch_day"]').css('background', '#FF9').focus();
    } else if (sel_month === '') {
      $('select[name="arch_month"]').css('background', '#FF9').focus();
    } else if (sel_year === '') {
      $('select[name="arch_year"]').css('background', '#FF9').focus();
    } else {
      var sel_date = sel_year + '/' + sel_month + '/' + sel_day;
      if (sel_edition !== '') URL = URL + '/archive/' + sel_edition + '/';
      var d1 = sel_year + '-' + sel_month + '-' + sel_day;
      var d2 = '2017-12-28';
      if (Date.parse(d2) >= Date.parse(d1)) {
        if (sel_edition == 'online-edition')
          URL = URL + '/archive/online-edition/' + sel_date;
        else URL = URL + '/archive/print-edition/' + sel_date;
        window.location.href = URL;
      } else {
        if (sel_edition === '') URL = URL + '/archive/' + sel_date;
        else URL = URL + sel_date;
        window.location.href = URL;
      }
    }
  });
}

var today = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
var base_url = window.location.href;
var current_archive_date = today;
var last_archive_date = today;
var sel_edition = '';
var url_prefix = base_url + 'archive/';
var url_postfix = '';
new js_calender({
  language: 'bn',
  container: '#archive_calendar',
  url_prefix: url_prefix,
  url_postfix: url_postfix,
  delimeter: '/',
  lowest_year: '2017-12-28',
  current_date: current_archive_date,
  last_date: last_archive_date,
  calender_archive_url: '',
});
/*----------------------------------- Archive Script End--------------------------------------*/

/*--------------------------Online Poll script Start-----------------------*/
$.ajax({
  url: 'https://www.jugantor.com/get_token',
  type: 'get',
  dataType: 'json',
  success: function (result) {
    $('meta[name="csrf-token"]').attr('content', result.token);
    $.ajaxSetup({
      headers: {
        'X-CSRF-TOKEN': result.token,
      },
    });
    document.querySelector('#poll_token').value = result.token;
  },
  error: function (xhr, status, error) {
    console.log(xhr);
  },
});

$('.pollSubmit').click(function () {
  var poll_val = $("input[name='poll']:checked").val();

  if (poll_val === '' || poll_val === undefined) {
    alert('যে কোনো একটি নির্বাচন করুন!!');
  } else {
    $('.right_poll_cont form').submit();
  }
});
/*--------------------------Online Poll script End-----------------------*/

/*--------------------------Prayer Time Script Start---------------------------------*/
//var dateBN = document.getElementById("dateBN").innerHTML;
var date = new Date(); // today
//	var times = prayTimes.getTimes(date, [23.777176, 90.399452], +6, "auto", "12h");
var list = ['Fajr', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
var listBN = ['ফজর', 'জোহর', 'আসর', 'মাগরিব', 'ইশা'];
var listTime = ['ভোর', 'বেলা', 'বিকেল', 'সন্ধ্যা', 'রাত'];
var listSun = ['sunrise', 'sunset'];
var listSunBN = ['সূর্যোদয়', 'সূর্যাস্ত'];
//var listSunTime = ['ভোর', 'সন্ধ্যা'];

function en_to_bn_number_conversion(en_number) {
  var bn_number = '';
  for (var i = 0; i < en_number.length; i++) {
    if (en_number[i] == '0') bn_number = bn_number + '০';
    if (en_number[i] == '1') bn_number = bn_number + '১';
    if (en_number[i] == '2') bn_number = bn_number + '২';
    if (en_number[i] == '3') bn_number = bn_number + '৩';
    if (en_number[i] == '4') bn_number = bn_number + '৪';
    if (en_number[i] == '5') bn_number = bn_number + '৫';
    if (en_number[i] == '6') bn_number = bn_number + '৬';
    if (en_number[i] == '7') bn_number = bn_number + '৭';
    if (en_number[i] == '8') bn_number = bn_number + '৮';
    if (en_number[i] == '9') bn_number = bn_number + '৯';
    if (en_number[i] == ':') bn_number = bn_number + ':';
  }
  return bn_number;
}

for (var i in list) {
  if (i == 2) {
    var times = prayTimes.getTimes(
      date,
      [23.777176, 90.399452],
      +7.3,
      'auto',
      '12h'
    );
  } else {
    var times = prayTimes.getTimes(
      date,
      [23.777176, 90.399452],
      +6,
      'auto',
      '12h'
    );
  }
}

sun =
  '<span class="sunrise">' +
  listSunBN[1] +
  ' : ' +
  en_to_bn_number_conversion(times[listSun[1].toLowerCase()]) +
  '</span>';
sun +=
  '<span class="sunset">' +
  listSunBN[0] +
  ' : ' +
  en_to_bn_number_conversion(times[listSun[0].toLowerCase()]) +
  '</span>';

var html = '<table cellspacing="1" cellpadding="1" width="100%">';
for (var i in list) {
  if (i == 2) {
    var times = prayTimes.getTimes(
      date,
      [23.777176, 90.399452],
      +7.3,
      'auto',
      '12h'
    );
  } else {
    var times = prayTimes.getTimes(
      date,
      [23.777176, 90.399452],
      +6,
      'auto',
      '12h'
    );
  }
  var timeEN = times[list[i].toLowerCase()];
  html += '<tr><td><span class="prayerName">' + listBN[i] + '</span></td>';
  html +=
    '<td><span class="prayerTime">' +
    en_to_bn_number_conversion(times[list[i].toLowerCase()]) +
    '</span></td></tr>';
}
html += '</table>';

document.getElementById('tableSunTimes').innerHTML = sun;
document.getElementById('tablePrayTimes').innerHTML = html;
/*--------------------------Prayer Time Script End---------------------------------*/
