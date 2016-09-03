'use strict';

var app = angular.module('myApp', [
  'ngRoute',
  'myApp.list',
  'myApp.form',
  'trNgGrid'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/list'});
}]);

app.run(['$rootScope', function($rootScope) {
    $rootScope.projects = [
        'Project 1',
        'Project 2',
        'Project 3'
    ];

    $rootScope.priorities = [
        'High',
        'Moderate',
        'Low'
    ];
}]);