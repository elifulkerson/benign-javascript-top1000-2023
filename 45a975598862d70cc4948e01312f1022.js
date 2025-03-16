var userdatetime = new Date();
var shodate_js =  userdatetime.toLocaleString("en", { month: "short"  })+ ' ' + userdatetime.getDate() + ', ' + userdatetime.getFullYear();
document.getElementById("m_date2").innerHTML = shodate_js;