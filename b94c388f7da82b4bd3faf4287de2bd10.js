window.dataLayer = window.dataLayer || []
    const userId = ""
    window.dataLayer = window.dataLayer || []
    const pageType = "home"
    let contentPage = getContentPage(pageType)
    dataLayer.push({
        user_id: userId,
        content_group: contentPage
    });
    localStorage.setItem('content_group', contentPage);

    function getContentPage(){
        let contentPage
        switch (pageType) {
        case 'home':
            const actionPage = "index"
            if(actionPage == 'index'){
                contentPage = "Homepage"
            } else {
                contentPage = "Page"
            }
            break;
        case 'tags':
            contentPage = "Tag Page"
            break;
        case 'komunitas/topics':
        case 'komunitas/discussions':
            contentPage = "Komunitas Page"
            break;
        case 'categories':
            //Hidup Sehat Page, Keluarga Page and Kesehatan Page for index page
            contentPage = ''
            break;
        case 'article':
            //Hidup Sehat Page, Keluarga Page and Kesehatan Page for article page
            contentPage = '' + " Page"
            break;
        case 'disease':
            contentPage = "Disease Page"
            break;
        case 'drugs':
            contentPage = "Drug Page"
            break;
        case 'komunitas/users':
            contentPage = "Profile Page"
            break;
        default:
            contentPage = "Page"
            break;
        }
        return contentPage
    }