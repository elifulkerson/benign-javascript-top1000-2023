function getCookieNwsLetter(name) {
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
}

function nwsLetterSubmit() {
    var token = getCookieNwsLetter("kmp_uid");
    if (token !== null) {
        window.location.href = "https://www.kompas.com/newsletter/pendaftaran-berhasil";
    } else {
        window.location.href =
            'https://account.kompas.com/login/a29tcGFz/aHR0cHM6Ly93d3cua29tcGFzLmNvbS9uZXdzbGV0dGVyL3BlbmRhZnRhcmFuLWJlcmhhc2ls?source=kompas.com&medium=gatenewsletter';
    }
}