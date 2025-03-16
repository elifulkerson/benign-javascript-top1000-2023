var metrics=window.DVWebNode.perfMetrics['payment-state-msg'];
    var i=metrics.length-1;
    metrics[i].afterProps=new Date();
    if(window.ue!=undefined && typeof window.ue.count==='function'){
        window.ue.count('DVWebNode:payment-state-msg:'+i+':DOMParsed', metrics[i].afterMarkup.getTime() - metrics[i].beforeMarkup.getTime());
        window.ue.count('DVWebNode:payment-state-msg:'+i+':PropsParsed',metrics[i].afterProps.getTime() - metrics[i].afterMarkup.getTime());
    }