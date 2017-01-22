(function () {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

        var items = [];
        $scope.lunchItems = "";
        $scope.msg = "";
        $scope.validData;

        function cleanArray(array) {
            var cleanArray = [];
            for (var i = 0; i < array.length; i++) {
                if (array[i]) {
                    cleanArray.push(array[i]);
                }
            }
            return cleanArray;
        }

        $scope.checkLunch = function () {
            items = cleanArray($scope.lunchItems.split(","));
            if (items == "") {
                $scope.msg = "Please enter data first";
                $scope.validData = false;
                return;
            }

            $scope.validData = true;
            $scope.msg = items.length <= 3 ? "Enjoy!" : "Too much!";
        }

    }

})();