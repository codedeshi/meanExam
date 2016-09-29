var myApp = angular.module('myApp', ['ngRoute','ngCookies']);

myApp.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/index.html',
      controller: 'usersController as uc'
    })
    .when('/dashboard', {
      templateUrl: 'partials/dashboard.html',
      controller: 'listController as lc'
    })
    .when('/user/:user', {
      templateUrl: 'partials/profile.html',
      controller: 'listController as lc'
    })
    .otherwise({
      redirectTo: '/'
    });
});
