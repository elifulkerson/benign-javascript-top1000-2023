var metrics=window.DVWebNode.perfMetrics['navigation-bar'];
    var i=metrics.length-1;
    metrics[i].afterProps=new Date();
    if(window.ue!=undefined && typeof window.ue.count==='function'){
        window.ue.count('DVWebNode:navigation-bar:'+i+':DOMParsed', metrics[i].afterMarkup.getTime() - metrics[i].beforeMarkup.getTime());
        window.ue.count('DVWebNode:navigation-bar:'+i+':PropsParsed',metrics[i].afterProps.getTime() - metrics[i].afterMarkup.getTime());
    }