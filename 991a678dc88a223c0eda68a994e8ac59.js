window.googletag = window.googletag || {cmd: []};
  googletag.cmd.push(function() {

//googletag.defineSlot('/21678054/up_1x1', [1, 1], 'div-gpt-ad-1x1').addService(googletag.pubads());
//googletag.defineSlot('/21678054/urdupoint_outstream', [1, 1], 'div-gpt-ad-outstream').addService(googletag.pubads());

googletag.defineSlot('/21678054/up-v2/center', [[336, 280], [320, 100], [300, 250]], 'gpt-center-banner').addService(googletag.pubads())
    .setCollapseEmptyDiv(true,true);
googletag.defineSlot('/21678054/up-v2/end', [[336, 280], [320, 100], [300, 250]], 'gpt-end-banner').addService(googletag.pubads())
    .setCollapseEmptyDiv(true,true);
    
if(upgj_x <= 800)
{
//googletag.defineSlot('/21678054/336x281_adunit', [[336, 280], [300, 250]], 'gpt-970-banner').addService(googletag.pubads())
//.setCollapseEmptyDiv(true,true);
googletag.defineSlot('/21678054/up-v2/mobile-middle', [[300, 250], [320, 100], [336, 280]], 'gpt-middle-banner').addService(googletag.pubads())
.setCollapseEmptyDiv(true,true);

//Side2 =  googletag.defineSlot('/21678054/urdupoint_desktop_side', [[300, 250], [336, 280], [320, 480]], 'Side2').addService(googletag.pubads())
//    .setCollapseEmptyDiv(true,true);
HeadTopSticky = googletag.defineSlot('/21678054/up-v2/sticky-header-top', [[320, 50], [320, 100]], 'HeadTopSticky').addService(googletag.pubads())
		.setCollapseEmptyDiv(true,true);
//Head2Sticky = googletag.defineSlot('/21678054/up-v2/sticky-mobile', [[320, 100], [300, 100], [320, 50]], 'Head2Sticky').addService(googletag.pubads())
//    .setCollapseEmptyDiv(true,true);
//googletag.defineSlot('/21678054/up-v2/sticky-footer', [[320, 50]],  'FooterFixed').addService(googletag.pubads())
//   .setCollapseEmptyDiv(true,true);
}
else
{
googletag.defineSlot('/21678054/up-v2/header-desktop', [728,90], 'header-banner').addService(googletag.pubads())
.setCollapseEmptyDiv(true,true);
googletag.defineSlot('/21678054/up-v2/side-one', [[300, 250]], 'Side1-banner').addService(googletag.pubads())
.setCollapseEmptyDiv(true,true);
googletag.defineSlot('/21678054/header_970x250', [[970, 250], [970, 90]], 'gpt-970-banner').addService(googletag.pubads())
.setCollapseEmptyDiv(true,true);

//Side2 =  googletag.defineSlot('/21678054/up-v2/side-second', [[300, 250], [336, 280], [320, 480]], 'Side2').addService(googletag.pubads())
//        .setCollapseEmptyDiv(true,true);
//Side3 = googletag.defineSlot('/21678054/up-v2/side-third', [[300, 600], [320, 480], [300, 250], [336, 280]], 'Side3').addService(googletag.pubads())
//			.setCollapseEmptyDiv(true,true);
//new			
HeadTopSticky = googletag.defineSlot('/21678054/up-v2/sticky-header-top', [728, 90], 'HeadTopSticky').addService(googletag.pubads())
		.setCollapseEmptyDiv(true,true);

}
googletag.pubads().collapseEmptyDivs();
googletag.pubads().setTargeting('site', ['urdu']).setTargeting('section', ['home']);
googletag.pubads().enableSingleRequest();
//googletag.pubads().refresh();
// googletag.pubads().disableInitialLoad(); 
 googletag.enableServices();
});