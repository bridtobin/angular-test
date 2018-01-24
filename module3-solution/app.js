(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItems)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItems() {
  var ddo = {
    templateUrl: 'foundItem.html',
    scope: {
      found: '<',
      onRemove: '&'
    },
    controller: NarrowItDownController,
    controllerAs: 'narrow',
    bindToController: true
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var narrow = this;
  narrow.searchTerm="";
  narrow.showNoFoundMsg = false;
  narrow.removeItem = function (itemIndex) {
    console.log("'this' is: ", this);
    narrow.found.splice(itemIndex,1);
  };


  narrow.getMenuItems = function () {
    if (narrow.searchTerm !== "") {
      var promise = MenuSearchService.getMatchedMenuItems(narrow.searchTerm);
      promise.then(function (response) {
         console.log("Promise returned okay");
       }); promise.then(function (found) {
         narrow.found = found;
         narrow.showNoFoundMsg = narrow.found.length==0 ? true : false ;
       })
       .catch(function (error) {
         console.log("There was an error",error);
       })
     } else {
       narrow.showNoFoundMsg=true;
       narrow.found=[];
     }
  };
}


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
      return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
      }).then(function(result){
        var i=0;
        var foundItems=[];
        for (i = 0; i < result.data.menu_items.length; i++) {
          if (result.data.menu_items[i].description.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1) {
            foundItems.push(result.data.menu_items[i]) ;
          }
        }
        return foundItems;
      });
  };
}

})();
