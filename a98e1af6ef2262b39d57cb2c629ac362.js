var loadScriptAsync = function(uri){
  return new Promise((resolve, reject) => {
    var tag = document.createElement('script');
    tag.src = uri;
    tag.async = true;
    tag.onload = () => {
      resolve();
    };
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
});
}
var scriptLoaded = loadScriptAsync('https://newrevive.detik.com/delivery/asyncjs.php');

scriptLoaded.then(function(){
// channelbox year in review
    //document.getElementById("rv_cb_g20").setAttribute("data-revive-zoneid", rv_cb_g20);

 window.reviveAsync["0cceecb9cae9f51a31123c541910d59b"].addEventListener('afterRenderBanner',rvCallbackBanner);

 function rvCallbackBanner(data){

  for(i=0;i<data.detail.length;i++){
    checkBannerAvailable(data.detail[i], 230,detectHeightMR2,true);
    checkBannerAvailable(data.detail[i], 228, nullLB);
    checkBannerAvailable(data.detail[i], 624, nullTB);
    checkBannerAvailable(data.detail[i], 625, nullBB);
  }

 }
});

function checkBannerAvailable(dataDetail, checkZone, callFunc, available = false){
	try {
		var show = available ? 1 : 0;
		if(show == 0){
          if (dataDetail.zoneid == checkZone && dataDetail.bannerid == show) {
            callFunc();
            console.log('zone id adjustment : ' + checkZone);
          }
        }
        if(show == 1){
          if (dataDetail.zoneid == checkZone && dataDetail.bannerid >= show) {
            callFunc();
            console.log('zone id adjustment : ' + checkZone);
          }
        }
	} catch(e) {
		console.log(e);
	}
}