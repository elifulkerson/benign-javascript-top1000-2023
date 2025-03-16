/* Add active feature flags in case they're required by React code and haven't been set yet. */
    if (window.active_feature_flags === undefined) {
        window.active_feature_flags = "MobileDismissibleMessages,TheaterChatAlways,HideAddressBar,IntelligentSitemap,PayGardenFraudBan,FngrpntDashboard"
    }