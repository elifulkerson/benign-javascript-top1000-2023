const addLink = (etype) => {
    let foundClass = false;
    const className = etype.srcElement.className;
    if ((className === 'embed-url embed-url-no-touch')) {
        foundClass = true;
    }

    if (!foundClass) {
        const selection = window.getSelection();
        const pagelink = '&#x2E;&#x2E;&#x2E;<br/><br/> Read more at: ' + document.location.href;
        let limitData = selection;
        const limitDataValue = limitData.toString().substring(0, 100);
        const copytext = limitDataValue + pagelink;
        let newdiv = document.createElement('div');

        newdiv.style.position = 'absolute';
        newdiv.style.left = '-99999px';

        document.body.appendChild(newdiv);
        newdiv.innerHTML = copytext;
        selection.selectAllChildren(newdiv);

        window.setTimeout(() => {
            document.body.removeChild(newdiv);
        }, 100);
    }
}
document.addEventListener('copy', addLink);