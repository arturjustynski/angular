(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);

    function UserService() {
        var service = this;

        var userInfo = null;

        service.getUserInfo = function () {
            return userInfo;
        };

        service.saveUserInfo = function (user) {
            userInfo = {};
            userInfo.firstName = user.firstName;
            userInfo.lastName = user.lastName;
            userInfo.email = user.email;
            userInfo.phone = user.phone;
            userInfo.favDish = user.favDish;
        }

    }

})();