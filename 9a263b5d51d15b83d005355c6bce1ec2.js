if(window.$Nav !== undefined ) {
    $Nav.when('$', 'page.CF', 'page.domReady').run(function ($) {
      var jppointsDiscoLink = $("#nav-discobar-jppoints-link");
      if (jppointsDiscoLink) {
            $("<span class='nav-span'>: 残高を確認</span>").appendTo(jppointsDiscoLink);
                }
    });
}