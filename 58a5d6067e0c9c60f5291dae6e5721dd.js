
(function () {

  const widgetMeteoLight = document.getElementById('widgetMeteoLight');
  const widgetMeteoLightHeader = document.getElementById('widgetMeteoLightSmall');

  loadCssAsync = function(src, id, d) {
    if (!d)
        d = document;
    css = d.createElement("link");
    css.rel = "stylesheet";
    css.href = src;
    css.media="print";
    css.type  = 'text/css';
    document.head.appendChild(css);
    css.onload = function(){
      css.media="all";
      //document.body.className +=" css-widget-" + id + "-is-loaded";
      //kwait.push(["call", "css-" + id]);

    if(widgetMeteoLight ) widgetMeteoLight.removeAttribute('hidden');
    if(widgetMeteoLightHeader) widgetMeteoLightHeader.removeAttribute('hidden');
  }
  };
  loadCssAsync("//www.repstatic.it/cless/common/widget/meteo/2017-v1/css/meteo-light.css","");




  var pickRandom = function (arr) {
    var rnd = Math.random();
    var interval = 1 / arr.length;
    var idx = parseInt(rnd / interval);
    return arr[idx];
  }

var getScript = function (url, callback) {
  var script = document.createElement('script');
  script.async = true;
  script.onload = function () {
    callback();
  };
  script.src = url;
  document.body.appendChild(script);
}


/* if (!window.widget) window.widget = {};

  var widget = window.widget; */

  var meteolight = function (id, cityCode) {

    //function(box){
    var cont = document.getElementById(id);
    var me = this;

    var forecast = cont.querySelector(".widget-meteo-light__image");
    var temperature = cont.querySelector(".widget-meteo-light__temperature");
    var cityInput = cont.querySelector("input[name=meteoLightCity]");

    if (cityCode) cityCode += "";

    //var profile_page = "https://www.repubblica.it/social/sites/repubblica/nazionale/custom.php";
    //if (GeleSocial.settings.test) profile_page = "https://www3.repubblica.it/social/sites/repubblica/nazionale/custom.php";

    var METEO_BASE = "https://www.repstatic.it/storage/meteo2016/previsioni/italia/json/";
    var CLASS_NAMES = ["sereno", "poco-nuvoloso", "parz-nuvoloso", "var-rovesci-30", "var-rovesci-90", "molto-nuvoloso", "pioggia-30", "pioggia-60", "pioggia-90", "temporale", "neve-moderata", "neve-forte", "pioggia-neve", "foschia", "nebbia"];
    var INTERVAL_NAMES = ["Notte", "Mattino", "Pomeriggio", "Sera"];
    var LABELS = ["Sereno", "Poco nuvoloso", "Parzialmente nuvoloso", "Variabile con rovesci al 30%", "Variabile rovesci al 90%", "Molto nuvoloso", "Pioggia al 30%", "Pioggia al 70%", "Pioggia al 90%", "Temporale", "Neve moderata", "Neve forte", "Pioggia e neve", "Foschia spessa", "Nebbia"];
    var RANDOM_CITIES = ["532", //Bari
      "745", //Bologna
      "2798", //Firenze
      "3088", //Genova
      "4074", //Milano
      "4579", //Napoli
      "4937", //Palermo
      "4988", //Parma
      "5913", //Roma
      "7301" //Torino
    ];

    var zeroPadding = function (val) {
      if (val < 10) val = "0" + val;
      else val = "" + val;
      return val;
    }

    var isDay = function (hours) {
      return hours >= 6 && hours < 18;
    }

    var getIntervalIndex = function (hours) {
      return parseInt(hours / 6);
    }

    var printDate = function (year, month, date, hours) {
      if (hours == 0) {
        hours = 24;
        var tmp = new Date();
        tmp.setFullYear(year);
        tmp.setMonth(month - 1);
        tmp.setDate(date - 1);
        tmp.setDate(date - 1);

        year = tmp.getFullYear();
        month = tmp.getMonth() + 1;
        date = tmp.getDate();
      }
      return year + "-" + zeroPadding(month) + "-" + zeroPadding(date) + "T" + zeroPadding(hours) + ":00";
    }

    var expandDate = function (date) {
      return [date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours()];
    }

    var calcNextIntervals = function () {

      var now = new Date();
      var expandedDate = expandDate(now);
      var ret = [];

      var utcOffset = now.getTimezoneOffset(); // offset rispetto a UTC
      var offset  = (utcOffset == -60) ? 1 : 2 ; // -60 ora solare ; -120 ora legale 
      
      startInterval = getIntervalIndex(expandedDate[3]) * 6 + offset ; // aggiungere offset per fasce orarie nuove json

      now.setHours(startInterval);
      expandedDate = expandDate(now);
      var dateS = printDate(expandedDate[0], expandedDate[1], expandedDate[2], expandedDate[3]);
      ret.push([dateS, getIntervalIndex(expandedDate[3]), isDay(expandedDate[3]), expandedDate]);

      for (var i = 0; i < 3; i++) {

        now.setHours(now.getHours() + 6);
        expandedDate = expandDate(now);
        var dateS = printDate(expandedDate[0], expandedDate[1], expandedDate[2], expandedDate[3]);
        ret.push([dateS, getIntervalIndex(expandedDate[3]), isDay(expandedDate[3]), expandedDate]);

      }

      return ret;

    };

    var onload = function () {
      var data = meteo.previsioni[me.cityCode];
      if (!data) return;

      
      var nome = "";
      if (data.nome) nome = data.nome;

      //for (var i = 0; i < 1; i++) {


        var nextInterval = me.nextIntervals[0];
        if (data.previsioni[nextInterval[0]]) {
          var previsione = data.previsioni[nextInterval[0]];
          var iconBig = parseInt(previsione.icon_big) - 1;
          //var desc_tempo = previsione.desc_tempo;
          var className = CLASS_NAMES[iconBig];
          var label = LABELS[iconBig];
          var isDay = nextInterval[2]; 
          var intervalName = INTERVAL_NAMES[nextInterval[1]];
          var date = nextInterval[3];
          var zfill = function (n, m) {
            n = n + "";
            while (n.length < m) n = "0" + n;
            return n;
          }
          date = zfill(date[2], 2) + "/" + zfill(date[1], 2) + "/" + date[0];
          var temp = previsione.temp + "Â°";

          if (isDay) {
            className += " morning";
          } else {
            className += " evening";
          }



          forecast.setAttribute("class", "widget-meteo-light__image " + className);
          temperature.innerHTML = temp;
          cityInput.setAttribute("placeholder", nome);
          cityInput.setAttribute("value", nome);
        }

     // }
      //cont.show();
      cont.classList.add('is-active');
    }

    //this.cont = $(cont);
    cityCode = localStorage.getItem('MeteoCityCode');
    
    if (!cityCode) {
       let popup = cont.querySelector(".widget-meteo-light__message");
       if(popup){ 
          popup.classList.add("is-active");
       }
        cityCode = pickRandom(RANDOM_CITIES);

        if (window.location.hostname == "www.lastampa.it") { // Per lastampa previsioni di default su Torino
          cityCode = "7301"; 
        } else {
          cityCode = pickRandom(RANDOM_CITIES);
        }

    }

    cityCode = cityCode.replace(/[^0-9]/g, '');
    this.cityCode = cityCode;
    this.nextIntervals = calcNextIntervals();

    if (window.meteo && meteo.previsioni && meteo.previsioni[cityCode]) {

      onload();

    } else {

      var url = METEO_BASE + cityCode.slice(0, 2) + "/" + cityCode + ".js"
      getScript(url, onload);

    }

    // Matches Polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
    }

    //var widgetMeteoLight = document.getElementById("widgetMeteoLight");
    //var meteoLightCity = document.getElementById("meteoLightCity");

    var cityListDownloaded = false;
    cont.addEventListener("click", function (e) {

      if (e.target && e.target.matches(".widget-meteo-light__search") || e.target && e.target.matches('input[name=meteoLightCity]')) {
        cityInput.focus();

        if (cityListDownloaded == false) {

          var request = new XMLHttpRequest();
          request.open('GET', METEO_BASE + 'localita/prov.json', true);
          request.onload = function () {
            if (this.status >= 200 && this.status < 400) {
              // Success!
              var resp = this.response;
              var cityList = JSON.parse(resp);
              autocomplete(cityInput, cityList);
              cityListDownloaded = true;
            } else {}
          };
          request.onerror = function () {};

          request.send();
        }

      };
    });

    function autocomplete(inp, arr) {

      var currentFocus, locationCode, location, prov;
      inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;
        closeAllLists();
        if (!val) {
          return false;
        }
        currentFocus = -1;
        a = document.createElement("div");
        a.setAttribute("id", this.id + "autocomplete-list"); 
        a.setAttribute("class", "autocomplete-items");
        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {
          location = arr[i].localita;
          locationCode = arr[i].id_localita;
          prov = arr[i].prov;
 
          if (location.substr(0, val.length).toUpperCase() == val.toUpperCase()) {
            b = document.createElement("DIV");
            b.innerHTML = "<strong>" + location.substr(0, val.length) + "</strong>";
            b.innerHTML += location.substr(val.length);
            b.innerHTML += "<input type='hidden' value='" + location + "' data-id='" + locationCode + "' data-prov='" + prov + "'>";
            b.addEventListener("click", function (e) {

              inp.value = this.getElementsByTagName("input")[0].value;
              locationCode = this.getElementsByTagName("input")[0].getAttribute('data-id');
              prov = this.getElementsByTagName("input")[0].getAttribute('data-prov');
              inp.setAttribute('data-id', locationCode);
              inp.setAttribute('data-prov', prov);
              me.cityCode = locationCode;
              localStorage.setItem('MeteoCityCode', locationCode);

              var url = METEO_BASE + locationCode.slice(0, 2) + "/" + locationCode + ".js"
              getScript(url, onload);
              //Krux
              // window.Krux||((Krux=function(){Krux.q.push(arguments);}).q=[]);
              // Krux('admEvent', 'MtpkV-Sj', {"event_type":"default", "meteo_id": locationCode, "meteo_name": prov});
              closeAllLists();
            });
            a.appendChild(b);
          }
        }
      });

      inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
          currentFocus++;
          addActive(x);
        } else if (e.keyCode == 38) { 
          currentFocus--;
          addActive(x);
        } else if (e.keyCode == 13) {
          e.preventDefault();
          if (currentFocus > -1) {
            if (x) x[currentFocus].click();
          }
        }
      });

      function addActive(x) {
        if (!x) return false;
        removeActive(x);
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
      }

      function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
          x[i].classList.remove("autocomplete-active");
        }
      }

      function closeAllLists(elmnt) {
        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
          if (elmnt != x[i] && elmnt != inp) {
            x[i].parentNode.removeChild(x[i]);
          }
        }
      }

      document.addEventListener("click", function (e) {
        closeAllLists(e.target);
      });
    }

  }

  if(widgetMeteoLight) meteolight('widgetMeteoLight');
  if(widgetMeteoLightHeader) meteolight('widgetMeteoLightSmall');

})();
