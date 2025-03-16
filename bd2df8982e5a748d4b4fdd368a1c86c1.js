const messagingClient = MessagingClient.instantiate();

function loadErrorHandler(err) {
    const src = err.path[0].src;
    const href = err.path[0].href;
    var message = ["could not load", src ? src : href].join(" ");
    try {
        const log = messagingClient.create('log', { logLevel: 'error', message: message, applicationName: 'cronos', loggerName: 'Fe.Cronos.Logger' });
        messagingClient.send(log);
    }
    catch (exception) {
    }
}