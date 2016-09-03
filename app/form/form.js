'use strict';

angular.module('myApp.form', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/form', {
    templateUrl: 'form/view.html',
    controller: 'FormCtrl'
  });
}])

.controller('FormCtrl', ['$rootScope', '$scope', '$window', function($rootScope, $scope, $window) {
  $scope.add_item = function() {
    if($scope.name == undefined ||
        $scope.content == undefined ||
        $scope.project == undefined ||
        $scope.priority == undefined) {
      $scope.message = 'Fill data fields';
    } else {
      var request = {
        name: $scope.name,
        content: $scope.content,
        project: $scope.project,
        priority: $scope.priority,
        date: new Date()
      };


      var requests = $window.localStorage.requests;
      if(requests) {
        requests = JSON.parse(requests);
        requests.push(request);
      } else {
        requests = [request];
      }
      $window.localStorage.requests = JSON.stringify(requests);

      $scope.message = 'Request has been added';
      $scope.name = null;
      $scope.content = null;
      $scope.project = null;
      $scope.priority = null;
    }
  };
}]);