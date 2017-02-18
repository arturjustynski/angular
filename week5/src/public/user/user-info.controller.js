(function () {
    "use strict";

    angular.module('public')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['userInfo'];
    function UserInfoController(userInfo) {
        var $userInfoCtrl = this;
        $userInfoCtrl.userInfo = userInfo;
    }

})();