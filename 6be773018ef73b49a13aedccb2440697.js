/* global Cookies, boxBootstrap */
/* eslint-disable prefer-template */

/*
 *   Automatic redirect to WebApp.
 */
(function redirectToApp(window, document, boxBootstrap, Cookies) {
    // Check for the cookie if user is logged in.
    const subdomain = Cookies.get('box_active_user_subdomain');

    // If the user has been already authentificated to the WebApp, the cookie should be present in order to fall into this conditional.
    if (subdomain && boxBootstrap.isMktg) {
        // Split pathname in parts.
        const paths = window.location.pathname.toLowerCase().split('/');
        const filteredPaths = paths.filter(function (el) {
            return el !== '';
        });

        // Get the language and region based on the Back-end language map.
        const currentLanguageLocale = boxBootstrap.languageMapping[boxBootstrap.currUrlLang].toLowerCase();

        // Conditional logic for language locale.
        // The paths like "/", "en-gb", "de-de", etc. are considered website index.
        // The paths like "/home", "/en-gb/home", "/de-de/home", etc. are considered normal pages.
        if (
            window.location.pathname === '/' ||
            (filteredPaths[0] === currentLanguageLocale && filteredPaths[1] === undefined)
        ) {
            const pattern = /^[a-zA-Z0-9.\-_]+$/;
            if (pattern.test(subdomain)) {
                // Redirect to subdomain.
                window.location.href = 'https://' + subdomain + '.' + boxBootstrap.domainTld + '/login';

                // Hide the marketing website.
                document.getElementsByTagName('html')[0].setAttribute('style', 'visibility:hidden;');

                // Toggle the state.
                boxBootstrap.isRedirecting = true;
            }
        }
    }
})(window, document, boxBootstrap, Cookies);