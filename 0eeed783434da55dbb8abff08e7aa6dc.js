var ASAHI_TSUNAMI = new XMLHttpRequest();
ASAHI_TSUNAMI.open('GET', '/wave/tsunami/alert/emergency_box.html', true);
ASAHI_TSUNAMI.onload = function() {
  if ((ASAHI_TSUNAMI.status >= 200 && ASAHI_TSUNAMI.status < 400) && ASAHI_TSUNAMI.responseText.match(/tsunami\.html/)) {
    EventTsunami();
  }
}
function EventTsunami(){
  var txt_tsunami = document.getElementById("tsunami_read_text");
  txt_tsunami.innerHTML = ASAHI_TSUNAMI.responseText;
  Function(document.getElementById("TsunamiScript").innerHTML)();
  var ele = document.querySelector("#InsideTsunami .SlideBtn");
  var btn = ele.querySelector("span b");
  var sld = document.querySelector("#InsideTsunami .TsunamiSlide");
  ele.addEventListener("click",function(){
  if(sld.style.display=="none"){
    btn.classList.remove("Click");
    btn.innerHTML = "閉じる";
    sld.style.display = "block";
    }else{
    btn.classList.add("Click");
    btn.innerHTML = "詳しく";
    sld.style.display = "none";
    }
  });
}
ASAHI_TSUNAMI.send();