function onGoogleOneTapEvent(event) {
  var momentType = event.getMomentType();
  var momentReason = null;

  if (event.isNotDisplayed()) {
    momentReason = event.getNotDisplayedReason();
  } else if (event.isSkippedMoment()) {
    momentReason = event.getSkippedReason();
  } else if (event.isDismissedMoment()) {
    momentReason = event.getDismissedReason();
  }

  Aedu.arbitraryEvents.write('GoogleOneTapEvent', {
    moment_type: momentType,
    moment_reason: momentReason,
  });
}