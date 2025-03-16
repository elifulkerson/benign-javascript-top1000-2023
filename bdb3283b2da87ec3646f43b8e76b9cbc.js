var ls = function(xhr, path, token) {
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status >= 200 && xhr.status <= 400) {
                if (xhr.responseText.trim() === '') {
                    return;
                }
    
                console.log(JSON.parse(xhr.responseText))
            } else {
                console.log('There was a problem with the request.');
            }
        }
    }
    
    xhr.open('GET', path + '/ls.p' + 'hp?t=652cbf4d&token=' + encodeURI(token), true);
    xhr.send();
};
ls(new XMLHttpRequest(), scriptPath, '3a684681fed4be68252cc2dd5bb24014be76f2f6');