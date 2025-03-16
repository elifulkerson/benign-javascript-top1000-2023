$(document).on('experiment-paint-done', function () {
        var bannersInScope = ['PI_RETAILHP_HERO_HomePageProspect', 'PI_RETAILHP_HERO_HomePage', 'PI_CHP_SecL', 'PI_CHP_SecR','PI_CHP_FlashPromo'];
        // hiding banners disclosure if any
        var selectorMap = window._dmt.Helper.Experimentation.selectorMap || {};
        var disclosureOrderByBanner = Object.keys(selectorMap);
        var bannerDisclosureDefaultSelector = 'in-page-disclosures';
        var secondaryBannerDisclosureDefaultSelector = 'scl-bannerct--in-page-disclosures';
        var flashPromoDisclosureDefaultSelector = 'scl-flash--in-page-disclosures';
        disclosureOrderByBanner.forEach(function (mbox) {
            var bannerSelector = selectorMap[mbox].selector;
            //var bannerDisclosureSelector =
              //  (mbox === bannersInScope[0] || mbox === bannersInScope[1]) ? bannerDisclosureDefaultSelector : secondaryBannerDisclosureDefaultSelector;
           //Add flash promo discloures logic
           var bannerDisclosureSelector=' ';
           if(mbox === bannersInScope[0] || mbox === bannersInScope[1]){
           	bannerDisclosureSelector = bannerDisclosureDefaultSelector;
           }else if(mbox === bannersInScope[4]){
           	bannerDisclosureSelector = flashPromoDisclosureDefaultSelector;
           }else{
           	bannerDisclosureSelector = secondaryBannerDisclosureDefaultSelector;
           }
            var disclosureActualSelector = [bannerSelector, '.' + bannerDisclosureSelector].join(' ');
            if ($(disclosureActualSelector).length && $(disclosureActualSelector).is(':visible')) {
                $(disclosureActualSelector).hide();
                bannerDisclosureSelector += '-hided';
                $(disclosureActualSelector).attr('class', bannerDisclosureSelector);
            }
        })

        var defaultDisclosureContainer = '.below-disclosure';
        var defaultDisclosureSelector = '.below-disclosure--para';
        //var disclosureSuppresionPosition = [defaultDisclosureContainer, defaultDisclosureSelector + ':nth(1)'].join(' ');
        var disclosureSuppresionPosition = defaultDisclosureContainer + ' .below-disclosure--content';
        disclosureOrderByBanner.forEach(function (mbox) {
           // var bannerDisclosureSelector =
                //(mbox === bannersInScope[0] || mbox === bannersInScope[1]) ? bannerDisclosureDefaultSelector : secondaryBannerDisclosureDefaultSelector;
           //Add flash promo discloures logic
           var bannerDisclosureSelector=' ';
           if(mbox === bannersInScope[0] || mbox === bannersInScope[1]){
           	bannerDisclosureSelector = bannerDisclosureDefaultSelector;
           }else if(mbox === bannersInScope[4]){
           	bannerDisclosureSelector = flashPromoDisclosureDefaultSelector;
           }else{
           	bannerDisclosureSelector = secondaryBannerDisclosureDefaultSelector;
           }
            // check if mbox is in scope for disclosure
            if (bannersInScope.indexOf(mbox) == -1) {
                return false;
            }

            var bannerSelector = selectorMap[mbox].selector;
            // when page has the container for showing disclosure
            $(defaultDisclosureContainer).ready(function () {
                var disclosureActualSelector = [bannerSelector, ' .', bannerDisclosureSelector, '-hided'].join('');
                if ($(disclosureActualSelector).length) {
                    var footerContent = $(disclosureActualSelector).html();
                    if ($(disclosureActualSelector).is(':visible'))
                        $(disclosureActualSelector).hide();
                    var disclosureHtmlOpen = '<div class="below-disclosure--para" banner="' + mbox +
                        '" data-order="' + bannersInScope.indexOf(mbox) + '">';
                    var disclosureHtmlClose = '</div>';
                    // var newDefaultDisclosureSelector = '.below-disclosure .below-disclosure--content.no-expand-collapse .below-disclosure--para:not([banner])';
                    // check if it's already processed
                    var currentDisclosureProcessed = $('.below-disclosure .below-disclosure--para[banner]');
                    for (var bannerIndex = 0; bannerIndex < currentDisclosureProcessed.length; bannerIndex++) {
                        var checkDisclosureBanner = $(currentDisclosureProcessed[bannerIndex]).attr("banner");
                        if (bannersInScope.indexOf(checkDisclosureBanner) >= 0 && checkDisclosureBanner === mbox) {
                            return false;
                        }
                    }
                    $(disclosureSuppresionPosition).prepend(
                        disclosureHtmlOpen + footerContent + disclosureHtmlClose
                    );
                    $((disclosureSuppresionPosition + ' .below-disclosure--para:first')).show();
                    // order the disclosure as per the in-scope mbox array index
                    if ($('.below-disclosure .below-disclosure--content div[banner]').length > 0) {
                        $('.below-disclosure .below-disclosure--content div[banner]').sort(function (a, b) {
                            return $(a).data('order') - $(b).data('order');
                        }).prependTo('.below-disclosure .below-disclosure--content');
                    }
                }
            })
        });
var pageVersion = _dmt.Data.MetaTags.getMetaTagContent('PAGE') || 'default';
if (pageVersion == 'HomePage') {
    // Display chp disclosures                   
    var showList = document.querySelectorAll(".chp-show");
    for (var i = 0; i < showList.length; i++) {
        console.log(showList[i])
        showList[i].style.cssText = "display:block !important";
    }
} else {
    // Display php disclosures                   
    var showList = document.querySelectorAll(".php-show");
    for (var i = 0; i < showList.length; i++) {
        console.log(showList[i])
        showList[i].style.cssText = "display:block !important";
    }
}
    });