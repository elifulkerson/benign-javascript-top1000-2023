var modal = document.getElementById('myModal');
    var btn = document.getElementById("myBtn");
    var span = document.getElementsByClassName("close")[0];
	$(".close").click(function(){
		$(".modal2").css({ 'display': "none" });
	});	
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }     
	$(document).ready(function() {
		// setTimeout(function(){ 
			$(".modal2").css("display","block");
			modal.style.display = "block";
		// }, 1000);				
		var second = 20;
		var ab = setInterval(function(){
			--second;
			if (second === 0){
				clearInterval(ab);
				$(".modal2").addClass('hilang');
			}
			},1000);
			// setTimeout(function(){
			// location.reload();	
		// }, 90000);
		});