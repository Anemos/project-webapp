'use strict';

/* Controllers */
var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers.controller('AppCtrl', ['$scope', 
  function($scope) {
    $scope.$back = function() { 
      window.history.back();
    };
  }]);

phonecatControllers.controller('PhoneListCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $http.get('phones/phones.json').success(function(data) {
      $scope.phones = data;
    });
 
    $scope.orderProp = 'age';
  }]);
  
phonecatControllers.controller('PhoneDetailCtrl', ['$scope','$routeParams',
  function($scope, $routeParams) {
    $scope.phoneId = $routeParams.phoneId;
  }]);