// define pubId only for article or video pages where can be taboola interstitial
if (!Globals.isFeedPage) {
    Globals.pubId = _.result(Globals.settings, 'article.additional_content.taboola_feed.publisher_id', _.result(Globals.settings, 'providers.Taboola.publisher_id', undefined));
}

// init dfp immediately in head section when render_gpt_in_head is true
if (Globals.settings.render_gpt_in_head) {
    if (window.mgzUI.shouldYieldbirdDisplay) {
        mgzUI._dfpFailed = false;
    } else {
        window.dfpService.initDfpLoad();
    }
}

console.log('version:', Globals.version);