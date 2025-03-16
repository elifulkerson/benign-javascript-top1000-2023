var pageLoadData = "{\x22site\x22:{\x22environment\x22:\x22production\x22,\x22publishDate\x22:\x2231\/07\/2023\x22,\x22language\x22:\x22us\u002Den\x22},\x22page\x22:{\x22section\x22:\x22public\u002Dsite\x22,\x22subSection\x22:\x22us\u002Dpersonal\u002Dbanking\x22},\x22event\x22:\x22pageLoad\x22}";
        
        function linkClickPush(linkName) {
	        tms_tag.push({
		        "event": "linkClick",
                "link": {
                    "name": linkName,
		            "type": "button"
                }
	        });
        }