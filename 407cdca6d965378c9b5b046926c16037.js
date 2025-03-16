const infoNoticeInit = function () {
    // Create initial styling elements.
    const newStyle = document.createElement('style');
    newStyle.type = 'text/css';
    newStyle.id = 'info-notice-style';

    // If boxBootstrap is available, check for Cookie information.
    /* eslint-disable no-undef */
    if (boxBootstrap && boxBootstrap.infoNotices) {
        Object.keys(boxBootstrap.infoNotices).forEach((id) => {
            const rev = boxBootstrap.infoNotices[id];
            const cookieName = `infoNotice_${id}`;
            const cookieValue = Cookies.get(cookieName);

            // If the ID/Rev matches, then hide hide the specific banner.
            if (typeof cookieValue !== 'undefined' && cookieValue === rev) {
                const hideNoticeStyling = document.createTextNode(
                    `.info-notice[data-rev-id="${rev}"] { display: none !important; }`
                );
                newStyle.appendChild(hideNoticeStyling);
            }
        });
    }

    // Fallback to show the banner.
    const showNoticeStyling = document.createTextNode(
        '.info-notice.info-notice__top, .info-notice.info-notice__bottom { display: block; }'
    );
    newStyle.appendChild(showNoticeStyling);
    document.head.appendChild(newStyle);
};

infoNoticeInit();