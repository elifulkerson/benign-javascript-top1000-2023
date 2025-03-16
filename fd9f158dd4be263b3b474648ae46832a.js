var eshtagpush = [];
    var eshtaglazy = [];
    window.eshtagpush = window.eshtagpush || [];
    function gptDisplay(...args) {
        if(typeof args[2] != 'undefined' && args[2] === true) 
            eshtaglazy.push({
                'div': args[0],
                'slot': args[1],
                'top': document.getElementById(args[0]).getBoundingClientRect().top
            });
        else
            gptDisplayTag(args[0], args[1]);
    }