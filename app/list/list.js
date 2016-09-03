'use strict';

angular.module('myApp.list', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/list', {
    templateUrl: 'list/view.html',
    controller: 'ListCtrl'
  });
}])

.controller('ListCtrl', ['$rootScope', '$scope', '$window', function($rootScope, $scope, $window) {
  $scope.project_filter = -1;

  var requests = $window.localStorage.requests;
  if(requests) {
    requests = JSON.parse(requests);
    $scope.requests = requests;
  } else {
    $scope.requests = [];
  }

  $scope.$watch('project_filter', function(newVal, oldVal) {
    if(oldVal != newVal) {
      if(requests) {
        if(newVal != -1) {
          $scope.requests = requests.filter(function(elem) {
            return elem.project == $scope.project_filter;
          });
        } else {
          $scope.requests = requests;
        }
      }
    }
  });

}]);