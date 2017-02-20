(function () {
    "use strict";

    angular.module('public')
        .controller('UserRegistrationController', UserRegistrationController);

    UserRegistrationController.$inject = ['UserService', 'MenuService'];
    function UserRegistrationController(UserService, MenuService) {
        var $signupCtrl = this;
        $signupCtrl.registered = UserService.getUserInfo() != null;
        $signupCtrl.favDishError = false;
        $signupCtrl.regComplete = false;

        $signupCtrl.submit = function () {
            MenuService.getMenuItem($signupCtrl.user.favDish)
                .then(function (response) {
                    if (angular.isDefined(response)) {
                        UserService.saveUserInfo($signupCtrl.user);
                        $signupCtrl.regComplete = true;
                    }
                })
                .catch(function (e) {
                    $signupCtrl.favDishError = true;
                });

        };

    }

})();