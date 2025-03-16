window.addEventListener('DOMContentLoaded', function() {
    const grCities = document.querySelector('#grCities');
    grCities.addEventListener('change', function(e){
      weatherSetCookie("weather_api_cookie", e.target.value , 1); 
      getNewWeather(e.target.value);
    });
    checkWeather();
  });
  
  
  function getNewWeather(city = "athensgr"){
    fetch('/wp-content/themes/whsk_in.gr/weather_api.php')
    .then(response => response.json())
    .then(data => {
      if(data.weather){
        if(data.weather[city]){
          document.querySelector('.weather-ico').src = data.weather[city].temp_ico;
          document.querySelector('.weather-num').innerHTML = data.weather[city].temp_num;
        }
      }
    });
  }
  
  
function checkWeather() {
  const weather_api_cookie = weatherGetCookie("weather_api_cookie");
  if (weather_api_cookie != "") {
    const grCitiesVal = document.querySelector('#grCities');
    getNewWeather(weather_api_cookie);
    grCitiesVal.querySelector(`[value='${weather_api_cookie}']`).setAttribute('selected','');
  } else {
    const grCitiesVal = document.querySelector('#grCities');
    weatherSetCookie("weather_api_cookie", grCitiesVal.value , 1); 
    getNewWeather(grCitiesVal.value);
  }
} 
  
function weatherSetCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
  
function weatherGetCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}