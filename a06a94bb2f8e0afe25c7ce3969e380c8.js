var grid_size = localStorage.getItem('grid_size') || '';
    if (grid_size == 'big')
    {
        var radio = document.querySelector(".grid_selector input[name=grid][value=big]");
        if (radio)
        {
            radio.checked = true;
        }
        [].forEach.call(document.querySelectorAll('.icons:not(.collection_icons_list)'), function(grid){
            grid.classList.add(grid_size);
        });
    }