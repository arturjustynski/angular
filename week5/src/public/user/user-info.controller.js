(function () {
    "use strict";

    angular.module('public')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['userInfo', 'ApiPath'];
    function UserInfoController(userInfo, ApiPath) {
        var $userInfoCtrl = this;
        $userInfoCtrl.userInfo = userInfo;
        $userInfoCtrl.basePath = ApiPath;
    }

})();