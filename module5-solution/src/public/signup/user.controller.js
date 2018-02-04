(function () {
"use strict";

angular.module('public')
.controller('UserController', UserController);


UserController.$inject = ['SignupService', 'ApiPath'];
function UserController(SignupService, ApiPath) {
  var $userCtrl = this;
  $userCtrl.user={};
  $userCtrl.user=SignupService.getUser();
  $userCtrl.basePath=ApiPath;
  $userCtrl.signedUp=$userCtrl.user!=null;
//  $userCtrl.signedUp=
}


})();
