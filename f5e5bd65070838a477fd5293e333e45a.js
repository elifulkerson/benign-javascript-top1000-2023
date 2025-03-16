page_params.cookie_consent = {
        overlay_id: "cookie_banner_overlay",
        modal_min_id: "cookie_consent_min_wrapper",
        close_min_banner_id: "close_minimized_banner",
        accept_all_min_btn_id: "consent_accept_min_all",
        modal_id: "cookie_consent_wrapper",
        accept_all_btn_id: "consent_accept_all",
        accept_essential_btn_id: "consent_accept_essential",
        cookie_name: "cookieConsent",
        toggleClass: "hideConsent",
        manage_consent_id: "footerMenu_consent",
        find_out_more_class: "find_out_more_link",
        actuationPercentage: "0.1",
        showCookieConsent: 0    };

        window.dataLayer = window.dataLayer || [];
    const isCookieReversedButtons = 0;
    const expVerValue = isCookieReversedButtons ? 'reversed' : 'regular';
    window.dataLayer.push({
                event: "cookie_banner",
                event_label: 'impression',
                experiment_version: expVerValue
            });