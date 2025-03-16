var cms_page_type = 'mamacn_index';
	$(function(){
		var orderdate = myGetCookie('orderdate');
		if(orderdate !=''){
			$("#datepicker").val(orderdate);
		}
	});