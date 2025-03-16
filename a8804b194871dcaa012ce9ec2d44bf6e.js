window.onSearchSubmit = function (event) {
        var screenWidth = 996;
        var elment = document.getElementById('form_query');
        var searchLink = '';
        if (window.innerWidth <= screenWidth) {
            elment = document.getElementById('form_query_mobile');
        }
        if (searchLink && !elment.value) {
            document.location.href = searchLink;
            event.preventDefault();
            return false;
        }
        elment.value = elment.value || elment.placeholder;
    }