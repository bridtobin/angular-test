(function () {
'use strict';

angular.module('public')
.service('SignupService', SignupService);

function SignupService() {
  var service = this;
  // List of shopping items
  var user
  service.addUser = function (user) {
    service.user = user;
    console.log(user);
  };


  service.getUser = function () {
    console.log(user);
    return service.user;
  };
}

})();
