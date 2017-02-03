(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemDirective)
        .constant("ENDPOINT_PREFIX_URL", "https://davids-restaurant.herokuapp.com");

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var listCtrl = this;
        listCtrl.errorMsg = "Nothing found";

        listCtrl.find = function (searchTerm) {
            MenuSearchService.getMatchedMenuItems(searchTerm).then(function (result) {
                listCtrl.found = result;
            });
        };

        listCtrl.removeItem = function (index) {
            listCtrl.found.splice(index, 1);
        };
    }

    MenuSearchService.$inject = ['$http', 'ENDPOINT_PREFIX_URL'];
    function MenuSearchService($http, ENDPOINT_PREFIX_URL) {
        var service = this;

        service.getMenuItemsList = function () {
            return $http(
                {
                    method: "GET",
                    url: (ENDPOINT_PREFIX_URL + "/" + "menu_items.json")
                }
            ).then(function (result) {
                return result.data.menu_items;
            });
        };

        service.getMatchedMenuItems = function (searchTerm) {
            return service.getMenuItemsList().then(function (result) {
                var foundItems = [];
                var itemList = result;
                for (var i = 0; i < itemList.length; i++) {
                    var item = itemList[i];
                    if (item.description.toLowerCase().indexOf(searchTerm) > -1) {
                        foundItems.push(item);
                    }
                }
                return foundItems;
            });
        };

    }

    function FoundItemDirective() {
        return {
            templateUrl : 'foundItems.html',
            scope : {
                items : '<',
                onRemove : '&'
            },
            controller: FoundItemDirectiveController,
            controllerAs: 'list',
            bindToController: true,
            transclude : true
        };
    }

    function FoundItemDirectiveController() {
        var list = this;
    }

})();