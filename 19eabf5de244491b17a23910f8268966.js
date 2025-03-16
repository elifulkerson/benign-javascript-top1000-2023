var args = {
  state: {"widgets":{"CustomBareContainer":{"marketplaceID":"ART4WZ8MWBX2Y","customerID":"unrecognised","GUID":"BKB2557GD0YNC5WPR16D","language":"en_US","sessionID":"133-9486405-7919753","content":[{"type":"TitleTag","payload":{"text":"Amazon.com Sign up for Prime Video"}},{"type":"MetaTag","payload":{"name":"description","content":"Enjoy The Lord of the Rings: The Rings of Power and other Amazon Originals, popular movies, and hit TV shows — all available with your Prime membership."}},{"type":"CanonicalLink","payload":{"href":"https:\u002F\u002Fwww.amazon.com\u002Fgp\u002Fvideo\u002Foffers"}}]}}},
  widgetName: 'CustomBareContainer'
}
if (window.hasOwnProperty('DVPAWebWidgetsCustomComponents') && window.hasOwnProperty('DVPAWebWidgetsWidgetFramework')) {
  DVPAWebWidgetsWidgetFramework.mount(
    args.widgetName,
    args.state,
    DVPAWebWidgetsCustomComponents.CustomBareContainer,
    false);
} else {
  window.hasOwnProperty('DigitalVideoWidgetQueue')
    || (window.DigitalVideoWidgetQueue = {});
  window.DigitalVideoWidgetQueue.hasOwnProperty('DVPAWebWidgetsCustomComponents')
    || (window.DigitalVideoWidgetQueue.DVPAWebWidgetsCustomComponents = []);
  window.DigitalVideoWidgetQueue.DVPAWebWidgetsCustomComponents.push(args);
}