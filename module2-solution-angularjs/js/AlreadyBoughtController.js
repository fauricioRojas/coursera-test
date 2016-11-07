(function () {
  'use strict';

  angular
  .module('ShoppingListCheckOff')
  .controller('AlreadyBoughtController', ['ShoppingListCheckOffService', function (ShoppingListCheckOffService) {
    var vm = this;

    vm.boughtList = ShoppingListCheckOffService.getList('bought');
  }]);
})();
