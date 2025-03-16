if(location.href.indexOf("rutor.is")!==-1 || location.href.indexOf("rutor.info")!==-1){
if ($.cookie('redir_ipv6')===null) {
$(document).ready(function(){$.ajax({url:"http://6tor.org/ping.php?proto=ipv6&"+Math.random()+"="+Math.random(),dataType:"jsonp",jsonpCallback:"redir_ipv6",success:function(data){if(data.status=="ok"){location.href=location.href.replace(/http:\/\/([^\/]+)/,"http://6tor.org");}}});});
$.cookie('redir_ipv6', 'redir_ipv6');
}
}