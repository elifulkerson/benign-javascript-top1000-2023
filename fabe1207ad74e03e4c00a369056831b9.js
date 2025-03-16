$(window).on("load", function () {
    if (CountryCode == "US") {
        $(".footer-sec-wrap .careers a").attr("href", "https://us-careers.zohorecruit.com/jobs/Careers");
    }
    if ($(".zlang-container").length == 0) {
        $(".ZF-container").hide()
    }

    customvar.nonlogged = function () {
        customvar.dynamicLinks({
            href: {
                ".loggedout": langsrc + "signup.html"
            }
        })
    };

    /* Social Handles */

    var sShare = '<div class="zsocial-share"><a class="zsocial-icon icon-tw" href="https://twitter.com/zoho" target="_blank" rel="noopener">Twitter</a><a class="zsocial-icon icon-fb" href="https://www.facebook.com/zoho/" target="_blank" rel="noopener">FB</a><a class="zsocial-icon icon-yt" href="https://www.youtube.com/zoho" target="_blank" rel="noopener">Youtube</a><a class="zsocial-icon icon-ln" href="https://www.linkedin.com/company/zohocorp/" target="_blank" rel="noopener">linkedin</a><a class="zsocial-icon icon-in" href="https://www.instagram.com/zoho/" target="_blank" rel="noopener">Instagram</a></div>';
    if (jQuery.inArray(0, customvar.meaList) >= 0) {
        sShare = '<div class="zsocial-share"><a class="zsocial-icon icon-tw" href="https://twitter.com/zoho_mea?lang=en" target="_blank" rel="noopener">Twitter</a><a class="zsocial-icon icon-fb" href="https://business.facebook.com/pg/ZohoMEA/" target="_blank" rel="noopener">FB</a><a class="zsocial-icon icon-yt" href="https://www.youtube.com/channel/UCmdynKP1t8PPu91_1GEpDYA" target="_blank" rel="noopener">Youtube</a><a class="zsocial-icon icon-ln" href="https://www.linkedin.com/company/31279043/" target="_blank" rel="noopener">linkedin</a><a class="zsocial-icon icon-in" href="https://www.instagram.com/zoho_mea/?hl=en" target="_blank" rel="noopener">Instagram</a></div>';
    }

    if ($('body').hasClass('page-node-81657')) { //Newletter APAC page
        if (jQuery.inArray(CountryCode, customvar.countryApac) >= 0) {
            sShare = '<div class="zsocial-share"><a class="zsocial-icon icon-tw" href="https://twitter.com/zoho" target="_blank" rel="noopener">Twitter</a><a class="zsocial-icon icon-fb" href="https://www.facebook.com/ZohoAPAC" target="_blank" rel="noopener">FB</a><a class="zsocial-icon icon-yt" href="https://www.youtube.com/channel/UCe18FMWXEuA-CZkIlrrbDWg" target="_blank" rel="noopener">Youtube</a><a class="zsocial-icon icon-ln" href="https://www.linkedin.com/company/zohoapac/" target="_blank" rel="noopener">linkedin</a><a class="zsocial-icon icon-in" href="https://www.instagram.com/zoho/" target="_blank" rel="noopener">Instagram</a></div>';

        }
    }
    if ($('body').hasClass('page-node-91172')) { //Newletter ID page
        if (CountryCode == "ID") {
            sShare = '<div class="zsocial-share"><a class="zsocial-icon icon-tw" href="https://twitter.com/zoho" target="_blank" rel="noopener">Twitter</a><a class="zsocial-icon icon-fb" href="https://www.facebook.com/ZohoIndonesia" target="_blank" rel="noopener">FB</a><a class="zsocial-icon icon-yt" href="https://www.youtube.com/channel/UCeFA5Ju5F0xkOE-epIoHaig" target="_blank" rel="noopener">Youtube</a><a class="zsocial-icon icon-ln" href="https://www.linkedin.com/showcase/zohoindonesia/" target="_blank" rel="noopener">linkedin</a><a class="zsocial-icon icon-in" href="https://www.instagram.com/zoho/" target="_blank" rel="noopener">Instagram</a></div>';

        }
    }

    setTimeout(() => {
        $(sShare).insertAfter('.footer-search');
    }, 1000);

    $('.i18n-nl .zsocial-share').find('a.icon-tw').attr("href", "https://twitter.com/ZohoNederland/");
    $('.i18n-nl .zsocial-share').find('a.icon-ln').attr("href", "https://www.linkedin.com/showcase/zoho-nederland/");

})

$(document).ready(function () {

    if (domainOne == "eu") {
        // changing ZU link foR EU
        var _com = 'com';
        //$('.zoho-university-link').attr({'href': 'https://www.zohouniversity.'+_com});
        $('.footer-sec-wrap a[href*="/perspectives/"]').each(function () {
            var c = 'c',
                o = 'o',
                m = 'm';
            var that = $(this);
            that.attr({
                'href': 'https://www.zoho.' + c + o + m + '/perspectives/'
            });
        });

        $('.footer-sec-wrap a[href*="/academy/"]').each(function () {
            var c = 'c',
                o = 'o',
                m = 'm';
            var that = $(this);
            that.attr({
                'href': 'https://www.zoho.' + c + o + m + '/academy/'
            });
        });
    }


    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
    var $mob_menu = getParameterByName('mob_app');
    if ($mob_menu == 'true') {
        $("body").addClass("zmob-app");
    }
});

$(document).ready(function () {
    if (window.location.href.indexOf("25") > -1) {
        $('.copyright-section').html('<div class="content-wrap">&copy; 2023, Zoho Corporation Pvt. Ltd. All Rights Reserved.</div>');
    }



});

   
/*$(window).on("load", function() {
    if ($('body').hasClass('zw-product-zoho_general_pages') && wW <= 767) {
        $('.zw-product-header  .product-title a').attr('href', '/')

    }
})*/

