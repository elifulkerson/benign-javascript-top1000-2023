var ASAHI_QUAKE = new XMLHttpRequest();
ASAHI_QUAKE.open('GET', '/earthquake/news/esi/max_emergency_box1_utf8.htm', true);
ASAHI_QUAKE.onload = function() {
 if ((ASAHI_QUAKE.status >= 200 && ASAHI_QUAKE.status < 400)  && ASAHI_QUAKE.responseText.match(/max_earthquakealert\.html/)) {
  var txt_quake = document.getElementById("earthquake_read_text");
  txt_quake.innerHTML = ASAHI_QUAKE.responseText;
 }
}
ASAHI_QUAKE.send();