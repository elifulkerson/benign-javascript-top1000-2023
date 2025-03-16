; window.gaSendEvent = function(event, category, action, label, fieldsObject) {
    window.ga && window.ga('kmkGATracker.send', 'event', category, action, label, fieldsObject);
}; window.clickEvent = function (category, action, label){
    window.ga && window.ga('kmkGATracker.send','event', category, action, label);
};