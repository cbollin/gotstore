var app = angular.module('app', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      // controller: 'mainController'
    })

    .state('register', {
      url: '/register',
      templateUrl: '/register.html',
      controller: 'authController'

    })

    .state('login', {
      url: '/login',
      templateUrl: '/login.html',
      controller: 'authController'

    })

    $urlRouterProvider.otherwise('home');

}]);
