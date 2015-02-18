'use strict';

angular.module('mixitApp', ['ngResource'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('Frameworks', function($resource) {
    return $resource('http://localhost\\:8080/frameworks/:id', {
      id: '@_id'
    });
  });

















