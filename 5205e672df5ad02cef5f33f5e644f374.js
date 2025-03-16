(window.yaContextCb = window.yaContextCb || []).push(() => {
                replaceOriginalAdFoxMethods();
                window.Ya.adfoxCode.hbCallbacks = window.Ya.adfoxCode.hbCallbacks || [];
            })