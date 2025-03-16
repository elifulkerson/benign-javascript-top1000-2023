var templateName = 'full\u002Dwidth\u002Dlayout';

        if(templateName === 'case-study'){
        	 var taxonomylist = '';
             var keys_vals = taxonomylist.split(",");
            keys_vals.forEach(function (data,index) {
                keys_vals[index] = keys_vals[index].substring(keys_vals[index].indexOf(":") + 1);
            });
            keys_vals.forEach(function (data,index) {
                keys_vals[index] = keys_vals[index].substring((keys_vals[index].lastIndexOf('/'))+1).trim();
            });
            var meta  = document.createElement('meta');
            var head  = document.getElementsByTagName('head')[0];
            var contentList = keys_vals.toString();
            var keywordIndex = 'ibm.search.facet.field_keyword_01';
            if(contentList){
                meta.name   = keywordIndex;
                meta.content = contentList;
                head.appendChild(meta);
            }
        }