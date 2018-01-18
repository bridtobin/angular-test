(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyList = this;
  buyList.items=ShoppingListCheckOffService.getInitialToBuyItems();

  buyList.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  } ;
} ;


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtList = this;
  boughtList.items = ShoppingListCheckOffService.getBoughtItems();
};


function ShoppingListCheckOffService() {
  var service = this;
  var toBuyItems = [];
  var boughtItems = [];

  service.getInitialToBuyItems = function() {
    toBuyItems = [
      { name: "cookies", quantity: 10 },
      { name: "cakes", quantity: 20 },
      { name: "biscuits", quantity: 10 },
      { name: "chips", quantity: 10 },
      { name: "fizzy drinks", quantity: 10 }];
    return toBuyItems;
  };

  service.buyItem = function (itemIndex) {
    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };

}

})();
