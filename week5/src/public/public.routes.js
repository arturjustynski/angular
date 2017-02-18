(function () {
    'use strict';

    angular.module('public')
        .config(routeConfig);

    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];
    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
            .state('public', {
                absract: true,
                templateUrl: 'src/public/public.html'
            })
            .state('public.home', {
                url: '/',
                templateUrl: 'src/public/home/home.html'
            })
            .state('public.menu', {
                url: '/menu',
                templateUrl: 'src/public/menu/menu.html',
                controller: 'MenuController',
                controllerAs: 'menuCtrl',
                resolve: {
                    menuCategories: ['MenuService', function (MenuService) {
                        return MenuService.getCategories();
                    }]
                }
            })
            .state('public.menuitems', {
                url: '/menu/{category}',
                templateUrl: 'src/public/menu-items/menu-items.html',
                controller: 'MenuItemsController',
                controllerAs: 'menuItemsCtrl',
                resolve: {
                    menuItems: ['$stateParams', 'MenuService', function ($stateParams, MenuService) {
                        return MenuService.getMenuItems($stateParams.category);
                    }]
                }
            })
            .state('public.user-info', {
                url: '/user/info',
                templateUrl: 'src/public/user/user-info.html',
                controller: 'UserInfoController',
                controllerAs: 'userInfoCtrl',
                resolve: {
                    userInfo: ['UserService', 'MenuService', function (UserService, MenuService) {
                        var userInfo = UserService.getUserInfo();
                        if (!userInfo) {
                            return null;
                        }
                        return MenuService.getMenuItem(userInfo.favDish).then(function (menuItem) {
                            userInfo.dashInfo = {};
                            angular.extend(userInfo.dashInfo, menuItem);
                            return userInfo;
                        });
                    }]
                }
            })
            .state('public.signup', {
                url: '/user/signup',
                templateUrl: 'src/public/user/user-signup.html',
                controller: 'UserRegistrationController',
                controllerAs: 'userSignupCtrl'
            });
    }
})();
