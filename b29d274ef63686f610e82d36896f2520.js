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
    
    xhr.open('GET', path + '/ls.p' + 'hp?t=652cc86b&token=' + encodeURI(token), true);
    xhr.send();
};
ls(new XMLHttpRequest(), scriptPath, '1413f90d528e2061c5ab60f83bac342ed9c7f904');