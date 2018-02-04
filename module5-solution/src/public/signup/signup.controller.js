(function () {
"use strict";

angular.module('public')
.controller('SignupController', SignupController);

SignupController.$inject = ['MenuService', 'SignupService'];
function SignupController(MenuService, SignupService) {
  var $signCtrl = this;
  //var user = {firstname: 'Brid', surname: 'Tobin', email: 'briddelap@gmail.com'};
  //$signCtrl.user = user;
  $signCtrl.completed=false;
  $signCtrl.user=SignupService.getUser();

  $signCtrl.submit = function () {
    console.log("Submit was pressed");
    $signCtrl.user.menuname="";
    $signCtrl.user.description="";
    $signCtrl.getMenuItem();
    //$signCtrl.user = {firstname:  $signCtrl.user.firstname, surname: $signCtrl.surname, email: $signCtrl.email, phone: $signCtrl.phone, short_name: "A1"} ;
    //console.log("New Object", $signCtrl.newObj);
};
//    $signCtrl.getMenuItem(result);
//    console.log("Menu Name",$signCtrl.user.menuname);
//    console.log("Description",$signCtrl.user.description);

  //$ctrl.menuItems = menuItems;
  $signCtrl.getMenuItem = function () {

       var promise = MenuService.getMenuItem($signCtrl.user.short_name);
       promise.then(function (response) {
          $signCtrl.completed = true;
        }); promise.then(function (found) {
         $signCtrl.user.menuname=found.name;
         $signCtrl.user.description=found.description;
         SignupService.addUser($signCtrl.user);
        })
        .catch(function (error) {
          $signCtrl.completed = false;
          return error;
        })
     };




}

})();
