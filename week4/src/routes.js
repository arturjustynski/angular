(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: 'src/templates/home.template.html'
            })
            .state('categories', {
                url: "/categories",
                templateUrl: 'src/templates/categories-list.template.html',
                controller: 'MenuCategoriesController as categoriesList',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: "/category/{category}/items",
                templateUrl: 'src/templates/item-list.template.html',
                controller: 'MenuItemsController as itemList',
                resolve: {
                    items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        return MenuDataService.getItemsForCategory($stateParams.category);
                    }]
                }
            });

    }

})();