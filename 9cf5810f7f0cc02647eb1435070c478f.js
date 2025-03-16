function comscoreBeacon() {
              var url = "https://www.indiatoday.in/api/xml/pv.xml?q="+(new Date).getTime();
              var xmlhttp;
              if (window.XMLHttpRequest) {
              // code for IE7+, Firefox, Chrome, Opera, Safari
              xmlhttp = new XMLHttpRequest();
              } else {
              // code for IE6, IE5
              xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
              }
              xmlhttp.open("GET", url, true);
              xmlhttp.send();
              (new Image).src = "https://sb.scorecardresearch.com/b?c1=2&c2=8549097&c8=" + encodeURIComponent(document.title) + "&c7=" + encodeURIComponent(document.location.href) + "&c9=" + encodeURIComponent(document.referrer) + "&rn=" + ("" + (new Date).getTime())
            }