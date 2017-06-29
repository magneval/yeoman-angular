'use strict';

angular.module('mixitApp', ['ngResource','ngRoute'])
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
    return $resource('rest/frameworks/:id/.json', {
      id: '@_id'
    });
  });

















