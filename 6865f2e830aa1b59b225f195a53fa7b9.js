try { document.domain = document.domain.replace(/.*?(\w+\.\w+)$/,"$1"); } catch(e) { console.log(e); }

var g_hPlatform = {
	"id": 01,
	"domain": "myfreecams.com",
	"name": "MyFreeCams",
	"code": "mfc",
	"image_url": "https://img.mfcimg.com/",
	"performer": "model",
	"Performer": "Model",
	"avatar_prefix": "avatar"
};

g_hPlatform.image_url_cdn = g_hPlatform.image_url.replace('//img','//assets');