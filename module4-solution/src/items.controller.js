/*(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsController', ItemsController);


ItemsController.$inject = ['items'];
function ItemsController(items) {
  var items = this;
  items.items = items;
}

})();*/
(function () {

	angular.module('MenuApp')
	.controller('ItemsController', ItemsController);

	ItemsController.$inject = ['menuItems'];
	function ItemsController (menuItems) {
		var itemsCtrl = this;
    itemsCtrl.items = menuItems.menu_items;
    itemsCtrl.category=menuItems.category.name;
	}

})();
