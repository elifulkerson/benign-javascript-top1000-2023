document.addEventListener('DOMContentLoaded', function () {
    function handleTabClick(containerSelector, tabLiSelector, innerSelector) {
        var tabs = document.querySelectorAll(containerSelector + ' ' + tabLiSelector + ' a');

        tabs.forEach(function (tab) {
            tab.addEventListener('click', function (event) {
                var parentTabs = document.querySelectorAll(containerSelector + ' ' + tabLiSelector);
                parentTabs.forEach(function (parentTab) {
                    parentTab.classList.remove('tabAct');
                });

                var currentParentTab = event.target.parentElement;
                currentParentTab.classList.add('tabAct');

                var currentTab = event.target.getAttribute('href');
                var innerElements = document.querySelectorAll(containerSelector + ' ' + innerSelector);
                innerElements.forEach(function (innerElement) {
                    innerElement.classList.remove('tbShow-on');
                });

                var currentInnerTab = document.querySelector(currentTab);
                currentInnerTab.classList.add('tbShow-on');

                event.preventDefault();
            });
        });
    }

    handleTabClick('.nw-chanlWid_lftCont', '.nw-chanlWid_tabLi', '.nw-chanlWid_inner');
    handleTabClick('.nw-chanlWid_rgtCont', '.nw-chanlWid_tabLi', '.nw-chanlWid_inner');
});