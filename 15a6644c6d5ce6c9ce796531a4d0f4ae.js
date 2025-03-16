function getPoll()
{
    var pollUrl = window.location.protocol + "//" + window.location.host +"/news/poll" ;
    $.ajax({
        type: "GET",
        url : pollUrl + "?m=main",
        dataType: "json",
        error    : function(result) {
            return false;
        } ,
        success : function(result) {
            if ( result !== undefined ) {
				if ( result.html !== undefined && result.html != '' )
				{
					$('#poll_content').html( result.html ) ;
				}
			}
        }
    });
}
getPoll();