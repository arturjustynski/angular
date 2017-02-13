(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('MenuItemsController', MenuItemsController);


    MenuItemsController.$inject = ['items'];
    function MenuItemsController(items) {
        var itemList = this;
        itemList.items = items.data.menu_items;
    }

})();
