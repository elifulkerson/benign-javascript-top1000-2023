window.onload = function() {
var electment = window.location.href.split('?')[0];

if(electment =="https://khabar.ndtv.com/")
{
 document.getElementById("gavtab-3").className="select";
  
}
if(electment =="https://www.ndtv.com/")
{
 document.getElementById("gavtab-1").className="select";
  
  }
if(electment =="https://www.ndtv.com/bengali")
{
document.getElementById("gavtab-12").className="select";
 
}
if(electment =="https://www.ndtv.com/tamil")
{
document.getElementById("gavtab-13").className="select";
}
};