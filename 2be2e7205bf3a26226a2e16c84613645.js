/*<![CDATA[*/

    setTimeout(function () {

        if (!jQuery) {
            return;
        }

        jQuery("nav.catMenu .catMenuItem a").find('span.iconTravel').addClass("iconPet");
        jQuery('#footer .fMenu .column:first-child .columnContent h4').text('n11');

        jQuery('#footer .socialBarIcon.facebook').attr('href','https://www.facebook.com/n11official');
        jQuery('#footer .socialBarIcon.twitter').attr('href','https://twitter.com/n11official');

        var $privateProductField = jQuery('#isPrivateProduct');
        if ($privateProductField.length > 0 && $privateProductField.val() == "false") {
            return;
        }

        // if new car remove shopping credit tab
        if (jQuery('[data-type=arabasatissozlesmesi]').length) {
            var $shoppingCreditTab = jQuery('#shoppingCreditTab');
            if ($shoppingCreditTab.length > 0) {
                $shoppingCreditTab.remove();
                jQuery('#shoppingCreditTabPanel').remove();
            }
        }

        // if 2nd hand car show only fiba
        if (jQuery('[data-type=ikincielarabasatissozlesmesi]').length) {
            var $fibaInput = jQuery('.shoppingCreditCollapse #fibabank-shopping-credit');
            var $otherTypes = $fibaInput.closest('li').siblings().remove();
        }

        // activate first visible payment tab..
        var $firstActiveTab = jQuery('.paymentOpts__tabs .tab').not(".hidden").first();
        $firstActiveTab.click();

        var pageModule = jQuery('.module').val();

        if (pageModule === 'dailyDeal') {
            var $discountBadge = jQuery('.shockingPro .lstng-badge-discount'),
                discount = $discountBadge.text().trim();

            if (discount === '%0') {
                $discountBadge.hide();
                jQuery('.shockingPro .lstng-price-old').hide();
            }
        }

    }, 750);

    /*]]>*/