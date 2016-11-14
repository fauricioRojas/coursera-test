(function () {
  'use strict';

  angular
  .module('NarrowItDownApp')
  .controller('NarrowItDownController', ['MenuSearchService', function (MenuSearchService) {
    var vm = this;
    vm.searchTerm = '';
    vm.found = [];
    vm.loading = false;
    vm.notFound = false;

    vm.filterItems = function () {
      if (vm.searchTerm.length) {
        vm.loading = true;
        vm.found = [];
        vm.notFound = false;

        MenuSearchService.getMatchedMenuItems(vm.searchTerm)
        .then(function (response) {
          vm.found = response;

          if (!vm.found.length) {
            vm.notFound = true;
          }

          vm.loading = false;
        });
      } else {
        vm.notFound = true;
      }
    };

    vm.removeItem = function (itemIndex) {
      vm.found.splice(itemIndex, 1);
    };
  }]);
})();
