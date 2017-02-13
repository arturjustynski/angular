(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categoryItems', {
            templateUrl: 'src/templates/items.template.html',
            bindings: {
                items: '<'
            }
        });

})();