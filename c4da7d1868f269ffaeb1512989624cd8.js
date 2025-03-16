(function(defaultTileTheme) {
        var tileContainer = document.getElementById('TileContainer');
        if (!tileContainer) return;
        if (window.location.hash.indexOf('homes') >= 0)
        {
            tileContainer.className = 'TileContainer TileContainer--homes';
        } else if (
            (false && window.location.hash.indexOf('#homes') === -1 && window.location.hash.indexOf('#rooms') ===-1 )
                || window.location.hash.indexOf('#flights') >= 0) {
            tileContainer.className = 'TileContainer TileContainer--full TileContainer--flights';
        }
        else
        {
            tileContainer.className = 'TileContainer TileContainer--' + defaultTileTheme;
        }
    })('greenBluePastel');