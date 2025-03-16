fetch("https://www.thehindu.com/fragment/todays-paper-img").then(function(response) {
	if(response.ok && (response.status >= 200 &&  response.status < 400)) {          
		return response.text();
	}
}).then(function(respone) {
	var tpimage = document.querySelectorAll(".menu-todays-paper")
	for (var j = 0; j < tpimage.length; ++j) {
		tpimage[j].innerHTML = respone;
	}
}).catch(function(error) {
});