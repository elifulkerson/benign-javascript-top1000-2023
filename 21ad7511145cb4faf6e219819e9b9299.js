function jsFCPInitializator() {
                if (typeof liputan6 !== 'undefined') {
                    
liputan6.init();
if(liputan6.categories) { 
	if(liputan6.categories.init) { liputan6.categories.init(); } 
	if(liputan6.categories.init_show) { liputan6.categories.init_show(); } 
}
if(liputan6.final) { liputan6.final(); }
;
                } else {
                    setTimeout(jsFCPInitializator, 500);
                }
            } 
            ready(function() {
                jsFCPInitializator(); 
            });