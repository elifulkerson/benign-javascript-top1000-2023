var countDownDate = new Date("Feb 14, 2024 00:00:00").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000 * 60 * 60 * 24));
document.getElementById("cdp-days").innerHTML = days + '<span class="cdp-txt">Hari</span>';
if (distance < 0) {
  clearInterval(x);
  document.getElementById("cdpemilu-widget").style.display = "none";
}
}, 1000);