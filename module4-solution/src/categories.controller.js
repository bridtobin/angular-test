(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);


CategoriesController.$inject = ['categoriesItems'];
function CategoriesController(categoriesItems) {
  var categoriesCtrl = this;
  categoriesCtrl.categories = categoriesItems;
}

})();
