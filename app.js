(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

        toBuyList.checkOffItem = function (item, index) {
            ShoppingListCheckOffService.removeBoughtItemFromList(index);
            ShoppingListCheckOffService.addBoughtItem(item);
        };
        
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.itemsBought = ShoppingListCheckOffService.getBoughtItems();

    }

    function ShoppingListCheckOffService() {
        var service = this;

        var itemsBought = [];

        service.addBoughtItem = function (item) {
            itemsBought.push(item);
        };

        service.removeBoughtItemFromList = function (index) {
            itemsToBuy.splice(index, 1);
        };

        service.getBoughtItems = function () {
            return itemsBought;
        };

        var itemsToBuy = [
            {
                name : "cookies",
                quantity : 8
            },
            {
                name : "chips",
                quantity : 2
            },
            {
                name : "pepsi",
                quantity : 7
            },
            {
                name : "beer",
                quantity : 12
            },
            {
                name : "gums",
                quantity : 1
            }
        ];

        service.getItemsToBuy = function () {
            return itemsToBuy;
        };
    }

})();