(function() {
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var narrowIt = this;
    var promise = MenuSearchService.getAllItems();

    promise.then(function(response) {
      narrowIt.items = response.data.menu_items;
    })
    .catch(function (error) {
      console.log(error);
    });

    narrowIt.getFoundItems = function(searchMenu) {
      MenuSearchService.getMenuItems(searchMenu).then(function(result) {
      narrowIt.found = result;
      })
    }

    narrowIt.onRemove = function (itemIndex) {
      narrowIt.found.splice(itemIndex, 1);
    };

  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getAllItems = function() {
      var response = $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json')
      });

      return response;
    };

    service.getMenuItems = function(searchMenu) {
      return $http({
        method: 'GET',
        url: (ApiBasePath + '/menu_items.json')
      }).then(function (result) {
          var foundItems = [];
          angular.forEach(result.data.menu_items, function(value, key) {
            if(value.description.indexOf(searchMenu) != -1) {
              foundItems.push(value);
            }
          });

          return foundItems;
      });
    };
  }

})();
