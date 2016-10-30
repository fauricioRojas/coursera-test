(function () {
  'use strict';

  angular
  .module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController ($scope) {
    $scope.dishes = '';
    $scope.message = '';
    $scope.messageColor = {};
    $scope.inputBorderColor = {};

    $scope.checkDishes = function () {
      if ($scope.dishes.length) {
        var itemsList = $scope.dishes.split(',');
        itemsList = itemsList.filter (function (element) {
          return element !== '';
        });
        var items = itemsList.length;

        if (items <= 3) {
          $scope.message = 'Enjoy!';
        } else {
          $scope.message = 'Too much!';
        }

        $scope.messageColor = {
          'color': 'green'
        };
        $scope.inputBorderColor = {
          'border-color': 'green'
        };
      } else {
        $scope.message = 'Please enter data first';
        $scope.messageColor = {
          'color': 'red'
        };
        $scope.inputBorderColor = {
          'border-color': 'red'
        };
      }
    };
  }
})();
