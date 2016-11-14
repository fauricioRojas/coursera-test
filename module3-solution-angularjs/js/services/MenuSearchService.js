(function () {
  'use strict';

  angular
  .module('NarrowItDownApp')
  .service('MenuSearchService', ['$http', 'API_URL', function($http, API_URL) {
    var vm = this;

    vm.getMatchedMenuItems = function (searchTerm) {
      return $http({
          method: "GET",
          url: API_URL
        })
        .then(function (result) {
          var menuItems = result.data.menu_items;
          var foundItems = [];

          menuItems.forEach(function (item) {
            if (item.description.toLowerCase().includes(searchTerm.toLowerCase())) {
              foundItems.push(item);
            }
          });

          return foundItems;
        }, function (err) {
          return [];
        });
    };
  }]);
})();
