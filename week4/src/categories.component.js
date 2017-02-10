(function () {
    'use strict';

    angular.module('data')
        .component('categories', {
            templateUrl: 'src/templates/categories.template.html',
            bindings: {
                items: '<'
            }
        });

    CategoriesController.$inject = ['MenuDataService'];
    function CategoriesController(MenuDataService) {
        var categories = this;
    }

})();