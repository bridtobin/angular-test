(function () {
//"use strict";

angular
.module('public')
.directive('itemExists', ItemExists);
//.run('serverMock', serverMock);


ItemExists.$inject=['$http', '$q', '$timeout', 'MenuService'];
function ItemExists($http, $q, $timeout, MenuService) {
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      // fetch the call address from directives 'checkIfAvailable' attribute
      ngModel.$validators.itemExists = function(modelValue, viewValue) {
        if (viewValue!=null && viewValue.length>1 && viewValue.length<5) {
        ngModel.$setValidity('itemExists', true);

        var promise = MenuService.getMenuItem(viewValue);
        promise.then(function (response) {
          ngModel.$setValidity('itemExists', true);
          return true;

         })
         .catch(function (error) {
           ngModel.$setValidity('itemExists', false);
           return false;
         })
       }
      };
    }
  }
};


})();
