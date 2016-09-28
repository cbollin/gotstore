var app = angular.module('app', ['ui.router', 'ngRoute']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'authController'

    })

    .state('products', {
      url: '/products',
      templateUrl: '/products.html',
      controller: 'productsController',
      resolve: {
        products: ['productsFactory', function(productsFactory) {
          return productsFactory.getAll();
        }]
      }
    })

    .state('oneproduct', {
      url: '/products/:id',
      templateUrl: '/oneproduct.html',
      controller: 'productsController',

    })

    // .state('review', {
    //   url: '/products/:id',
    //   templateUrl: '/oneproduct.html',
    //   controller: 'productsController'
    //
    // })

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
