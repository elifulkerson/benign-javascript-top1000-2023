var addebug = document.querySelectorAll('.cpRight');
    for (i = 0; i < addebug.length; ++i) {
        addebug[i].addEventListener('click', function handleClick() {
            googletag.openConsole();
        });
    };