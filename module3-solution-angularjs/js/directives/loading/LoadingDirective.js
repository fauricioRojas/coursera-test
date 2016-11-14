(function () {
  'use strict';

  angular
  .module('NarrowItDownApp')
  .directive('loading', [function() {
    return {
      templateUrl: 'js/directives/loading/loadingTemplate.html',
      controller: [function() { }],
    };
  }]);
})();
