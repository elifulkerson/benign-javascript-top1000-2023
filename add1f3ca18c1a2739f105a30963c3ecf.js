var args = {
  state: {"widgets":{"OfferRow":{"buttonText":"Go to Amazon.com to watch","backgroundColor":"#000","footer":"Live outside of the United States? Sign in to continue.","backgroundImage":"https:\u002F\u002Fm.media-amazon.com\u002Fimages\u002FG\u002F02\u002Fdigital\u002Fvideo\u002FJulia\u002FZorro\u002FPV_MLP_Zorro_C_Jack_Ryan.jpg","GUID":"BKB2557GD0YNC5WPR16D","isPrimeVideo":true,"language":"en_US","sessionID":"133-9486405-7919753","title":"Watch on Amazon.com","body":"Enjoy The Lord of the Rings: The Rings of Power and other Amazon Originals, popular movies, and hit TV shows — all available with your Prime membership.","buttonUrl":"https:\u002F\u002Fwww.amazon.com\u002FAmazon-Video\u002Fb\u002F?&node=2858778011&ref=dvm_MLP_ROWNA_US_1","marketplaceID":"ART4WZ8MWBX2Y","customerID":"unrecognised"}}},
  widgetName: 'OfferRow'
}
if (window.hasOwnProperty('DVPAWebWidgetsMLP') && window.hasOwnProperty('DVPAWebWidgetsWidgetFramework')) {
  DVPAWebWidgetsWidgetFramework.mount(
    args.widgetName,
    args.state,
    DVPAWebWidgetsMLP.OfferRow,
    false);
} else {
  window.hasOwnProperty('DigitalVideoWidgetQueue')
    || (window.DigitalVideoWidgetQueue = {});
  window.DigitalVideoWidgetQueue.hasOwnProperty('DVPAWebWidgetsMLP')
    || (window.DigitalVideoWidgetQueue.DVPAWebWidgetsMLP = []);
  window.DigitalVideoWidgetQueue.DVPAWebWidgetsMLP.push(args);
}