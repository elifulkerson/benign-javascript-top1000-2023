var videoId;
            var videoEl = document.getElementById('my-dailymotion-player');
            if(!!videoEl){
                videoId = videoEl.dataset.id;
            }
            var playerSegsPerm = encodeURIComponent('&permutive='+ JSON.parse(localStorage._pdfps || '[]').slice(0,250).join(','));
            var ads_params = encodeURIComponent("articleID%3D"+ (signal.Content.ArticleId ?signal.Content.ArticleId : '') + "%26topic%3D" + (signal.Content.ContentCategoryLevel1?signal.Content.ContentCategoryLevel1:'')+ "%26stopic%3D" + (signal.Content.ContentCategoryLevel2?signal.Content.ContentCategoryLevel2:'') + "%26authors%3D"+(signal.Content.ArticleAuthorName?signal.Content.ArticleAuthorName:'')+"%26keywords="+(signal.Content.Keywords?signal.Content.Keywords:'')+"%26pt%3Darticle%26platform%3Dweb"+playerSegsPerm);
            var dailymotionVideoConfig = "mute=true&sharing-enable=false&queue-enable=true";
            var appUrl = "";
            let mainCat = "";
            let subCat = "->name";
            let title = "الصفحة الرئيسية";
            let eventLabel = "496 - الصفحة الرئيسية";