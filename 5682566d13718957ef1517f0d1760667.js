document.addEventListener('DOMContentLoaded', function() {
function addTrackingParam(event) {
    if (!(event.target instanceof Element)) return;
    if (!window.pageConfig) return;

    delete window.pageConfig.trackingPayload.context.section;
    delete window.pageConfig.trackingPayload.context.position;
    
    var element = event.target.closest('a,button');
    if (element) {
        var section = event.target.closest('[data-activity-context-section]');
        if (section) {
            window.pageConfig.trackingPayload.context.section = section.dataset.activityContextSection;
        }
        
        var position = event.target.closest('[data-activity-context-position]');
        if (position) {
            window.pageConfig.trackingPayload.context.position = position.dataset.activityContextPosition;
        }
    }
    
    var link = event.target.closest('a');
    if (!link) return;
    
    // Don't modify external links
    if (link.hostname !== window.location.hostname) return;
    
    // Encode the tracking payload as Base64 URL
    var trackingPayload = window.pageConfig.trackingPayload;
    var jsonString = JSON.stringify(trackingPayload);
    var base64String = btoa(jsonString);
    var base64Param = base64String.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
    
    // Remove any existing '_tp' query param
    var url = new URL(link.href);
    url.searchParams.delete('_tp');
    
    // Add the new '_tp' query param
    url.searchParams.append('_tp', base64Param);
    
    link.href = url.toString();
}
window.addEventListener('mouseover', addTrackingParam);
window.addEventListener('focusin', addTrackingParam);
window.addEventListener('touchstart', addTrackingParam);
});