(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant("ENDPOINT_PREFIX_URL", "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ENDPOINT_PREFIX_URL'];
    function MenuDataService($http, ENDPOINT_PREFIX_URL) {
        var service = this;

        service.getAllCategories = function () {
            return $http(
                {
                    method: "GET",
                    url: (ENDPOINT_PREFIX_URL + "/" + "categories.json")
                }
            );
        };

        service.getItemsForCategory = function (categoryShortName) {
            return $http(
                {
                    method: "GET",
                    url: (ENDPOINT_PREFIX_URL + "/" + "menu_items.json"),
                    params: {
                        category: categoryShortName
                    }
                }
            );
        };

    }

})();