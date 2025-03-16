$(document).ready(function(){
        if(typeof(headerGlobalSearchJsPath)!="undefined"){
            flash_fe_core_tool.$AsyncLoadFileManagement.load(flash_fe_core_tool.$adobe.getAdobeVersionPath(headerGlobalSearchJsPath)).then(data => {
            
            }).catch(err => {
                console.log("globalsearch Box js load error.", err);
            });
        }
    });