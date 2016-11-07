(function () {
  'use strict';

  angular
  .module('ShoppingListCheckOff')
  .service('ShoppingListCheckOffService', [function () {
    var vm = this;

    var toBuyList = [
      { name: "cookies", quantity: 10 },
      { name: "bread", quantity: 1 },
      { name: "rice", quantity: 4 },
      { name: "tuna", quantity: 5 },
      { name: "beans", quantity: 2 },
      { name: "milk", quantity: 3 },
      { name: "eggs", quantity: 12 }
    ];
    var boughtList = [];

    vm.getList = function (list) {
      switch (list) {
        case 'toBuy':
          return toBuyList;
        case 'bought':
          return boughtList;
        default:
          return [];
      }
    };

    vm.bought = function (index) {
      var item = toBuyList[index];
      toBuyList.splice(index, 1);
      boughtList.push(item);
    };
  }]);
})();
