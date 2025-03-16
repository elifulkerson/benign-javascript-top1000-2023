(function(doc, id) {
    if(doc.getElementById(id)){return;}
    var kly_trace_log_scripts = doc.createElement('script');
    kly_trace_log_scripts.src = 'https://trace-log.kl-youniverse.com/js/embed.js';
    kly_trace_log_scripts.type = 'text/javascript';
    //kly_trace_log_scripts.async = true;
    //kly_trace_log_scripts.defer = true;
    kly_trace_log_scripts.id = id;
    var s = doc.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(kly_trace_log_scripts, s);
    })(document, 'klytracelog');