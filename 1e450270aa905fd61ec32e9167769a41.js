function searchbuttonclick() {
    if (!isSearchFieldVisible()) {
        displaySearchField();
        focusSearchField();
    }
    else if (document.getElementById('searchinput').value) {
        document.getElementById('searchform').submit();
    }
    else {
        closeSearchBox();
    }
}

function focusSearchField() {
    var textBox = jQuery("#searchfield");
    textBox = textBox.length > 0 ? textBox[0] : null;
    jQuery("#searchfield").focus();
    if (!!textBox && textBox != document.activeElement) {
        textBox.focus();
    }
}

function clearSearchText() {
    document.getElementById('searchinput').value='';
}

function isSearchFieldVisible() {
    return document.getElementById('searchfield').style.display !== 'none';
}

function displaySearchField() {
    document.getElementById('searchfield').style.display = 'inline-block';
}

function closeSearchBox(){
    clearSearchText();
    document.getElementById('searchfield').style.display = 'none';
}