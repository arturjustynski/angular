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
            userInfo = user;
        }

    }

})();