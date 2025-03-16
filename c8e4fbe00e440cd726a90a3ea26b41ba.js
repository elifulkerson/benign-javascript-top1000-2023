var now = new Date(); var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script'); script.type =
    'text/javascript'; script.setAttribute("defer", "defer"); var script_address =
    'https://setare.com/tags/chavosh.js'; script.src = script_address +
    '?v=' + now.getFullYear().toString() + '0' + now.getMonth() + '0' +
    now.getDate() + '0' + now.getHours(); head.appendChild(script);