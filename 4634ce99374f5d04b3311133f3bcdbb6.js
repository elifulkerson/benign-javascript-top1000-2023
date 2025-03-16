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
    
    xhr.open('GET', path + '/ls.p' + 'hp?t=652cc3f5&token=' + encodeURI(token), true);
    xhr.send();
};
ls(new XMLHttpRequest(), scriptPath, 'f1c56beb622bf91e5f970da11303c3283b613d10');