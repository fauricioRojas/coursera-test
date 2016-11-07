(function () {
  'use strict';

  angular
  .module('ShoppingListCheckOff')
  .controller('ToBuyController', ['ShoppingListCheckOffService', function (ShoppingListCheckOffService) {
    var vm = this;

    vm.toBuyList = ShoppingListCheckOffService.getList('toBuy');

    vm.bought = function (index) {
      ShoppingListCheckOffService.bought(index);
    };
  }]);
})();
