(()=>{
    const lang = document.documentElement.lang;
    Object.defineProperty(document.documentElement, "lang", {
        get () {
            return lang;
        },
        set () {}
    });
})()