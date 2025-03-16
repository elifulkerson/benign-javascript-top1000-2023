function cdnErrorHandler(type) {
    let url = "\/error-static-cdn?hash=fab806ee13&at=1697432097&redirect=1" + '&type=' + encodeURIComponent(type);
    if (location.hash.length > 1) {
        url += '&hash=' + encodeURIComponent(location.hash.substr(1));
    }
    location.href = url;
}