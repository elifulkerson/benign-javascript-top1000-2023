(sinaads = window.sinaads || []).push({
        params: {
            element: document.getElementById("PDPS000000067800"),
            sinaads_success_handler:function () {
                  var ads = document.getElementById("sinaads-right-hotlist");
				  var _news= document.getElementById("hotlist_index_3");
				  var hot_list_ad= document.getElementById("hot_list_ad")
				  _news.style.display="none";
			      ads.style.display= "block";
				  hot_list_ad.classList.add("hotlist_have_ad")
            },
            sinaads_fail_handler: function () {
                console.log('sinaads_fail_handler')
            }
        }
    })