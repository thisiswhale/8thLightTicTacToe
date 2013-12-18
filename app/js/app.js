'use strict';


// Declare app level module which depends on filters, and services
var myApp = angular.module('myApp', [
  'ngRoute',
  'filters',
  'services',
  'directives',
  'controllers',
  'firebase'
])

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/welcome', {templateUrl: 'partials/welcome.html', controller: 'Welcome'});
  $routeProvider.when('/localgame', {templateUrl: 'partials/game.html', controller: 'LocalGame'});
  $routeProvider.when('/AIgame', {templateUrl: 'partials/game.html', controller: 'AIGame'});
  $routeProvider.otherwise({redirectTo: '/welcome'});
}]);
