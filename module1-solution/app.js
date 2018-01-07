(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.analyzeTextBox = function () {
      var arrayOfStrings = $scope.lunchMenu.split(",");
      var countItems = arrayOfStrings.length;
      var emptyItems = 0
      //check if any element is blank
      for (var i = 0; i < arrayOfStrings.length; i++) {
        if (arrayOfStrings[i] == "") {
          emptyItems++;
        }
      }
      //deduct blank elements from count
      countItems=countItems-emptyItems;
      if (countItems > 0 && countItems <= 3)  {
        $scope.message = "Enjoy!"
      }
      else if (countItems > 3) {
        $scope.message = "Too much!"
      }
      else {
        $scope.message = "Please enter data first"
      }
  };
}
})();
