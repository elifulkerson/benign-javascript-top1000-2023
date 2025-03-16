var winhref = window.location.href.replace("/content/samsung","").replace(".html","/");
if ( winhref.indexOf("?") > 0) {
	winhref = winhref.substring(0, winhref.indexOf("?"));
}
var siteCode = winhref.split("/")[3];

//depth Info.
var depth = winhref.split("/").length;
var depth_last = winhref.split("/")[depth-1];
if(depth_last =="" || depth_last.charAt(0)=="?"){
	depth -= 1;
}

//set pathIndicator(not product page)
var pageName = "";    
var depth_2 = "";
var depth_3 = "";
var depth_4 = "";
var depth_5 = "";

var digitalData = {
	"page" : {
			"pageInfo" : {
					"siteCode"    : "us",
					"pageName"    : pageName,
					"pageID"      : "L2NvbnRlbnQvc2Ftc3VuZy91cw==",
					"pageTrack"   : "home",
					"originPlaform" : "web"
			},
			"pathIndicator" : {
					"depth_2" : depth_2,
					"depth_3" : depth_3,
					"depth_4" : depth_4,
					"depth_5" : depth_5
			}
	},
	"user": {
			"userDeviceList": [
			]
	},
	"product" : {
			"category" : "", 
			"model_code" : "", // PD class정보 이용하여 설정
			"model_name" : "", // PD page(server-side)
			"displayName" : "", // PD class정보 이용하여 설정
			"pvi_type_code" : "", //PD page(server-side)
			"pvi_type_name" : "", //PD page(server-side)
			"pvi_subtype_code" : "", //PD page(server-side)
			"pvi_subtype_name" : "",//PD page(server-side)
			"pd_type" : "", //PD type
            "content_id" : "",
            "products" : "",
            "prodView" : ""
	}
}