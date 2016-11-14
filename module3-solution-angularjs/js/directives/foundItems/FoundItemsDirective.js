(function () {
  'use strict';

  angular
  .module('NarrowItDownApp')
  .directive('foundItems', [function() {
    return {
      templateUrl: 'js/directives/foundItems/foundItemsTemplate.html',
      scope: {
        items: '<',
        onRemove: '&'
      },
      controller: [function() { }],
      controllerAs: 'foundItemsCtrl',
      bindToController: true
    };
  }]);
})();
