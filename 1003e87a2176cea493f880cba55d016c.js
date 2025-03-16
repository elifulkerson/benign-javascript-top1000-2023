var getPremiumService = function(){
	var jqXHR = $.ajax({
		url: '/news/esi/premium_service_utf8.txt',
		dataType: 'text'
	});
	return jqXHR.promise();
};

var formatDate = function( date, format ){
  format = format.replace(/yyyy/g, date.getFullYear());
  format = format.replace(/MM/g, ('0' + ( date.getMonth() + 1 )).slice(-2));
  format = format.replace(/dd/g, ('0' + date.getDate()).slice(-2));
  format = format.replace(/HH/g, ('0' + date.getHours()).slice(-2));
  format = format.replace(/mm/g, ('0' + date.getMinutes()).slice(-2));
  format = format.replace(/ss/g, ('0' + date.getSeconds()).slice(-2));
  format = format.replace(/SSS/g, ('00' + date.getMilliseconds()).slice(-3));
  return format;
};

var AdPremiumBanner = function(){
	var dt = new Date();
	var banner = document.getElementById( 'AdPremiumBanner' );
	if( typeof asa16_premium_service !="undefined" && asa16_premium_service && banner ){
		getPremiumService().then(function( data ){
			banner.innerHTML=data;
			var ele = document.getElementById( 'NoticeOfPremium' );
			var btn = ele.querySelector( 'a.CloseButton');
			ele.style.display = 'block';
			btn.addEventListener( 'click', function(){
				dt.setDate(dt.getDate() + 14);
				window.localStorage.setItem( 'NoticeOfPremium', formatDate(dt, 'yyyy/MM/dd HH:mm:ss' ));
				ele.style.display = 'none';
			});
		});
	}
	return false;
}

try{
	if( document.cookie.indexOf( 'digital_cxl=' ) === -1 ){
		var currentDateTime = formatDate( new Date(), 'yyyy/MM/dd HH:mm:ss' );
		var expireDateTime = null;
		if( window.localStorage ){
			expireDateTime = window.localStorage.getItem( 'NoticeOfPremium' );
			if( !expireDateTime || new Date( expireDateTime ) < new Date( currentDateTime )){
				AdPremiumBanner();
			}
		}
	}
}catch(e){}
