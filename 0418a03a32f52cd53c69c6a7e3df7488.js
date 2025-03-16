if (window.location.href.indexOf('/privatkunden.html') !== -1) {
    const welcomePage = 'https://www.dhl.de/de/privatkunden/kundenkonto/willkommen.html';
    const httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            window.location.replace(welcomePage);
        }
    };
    httpRequest.open('GET', '/bin/dhlde/servlets/customerInformation', true);
    httpRequest.send();
}