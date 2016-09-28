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
<<<<<<< HEAD
      controller: 'productsController',
      // resolve: {
      //   product: ['$stateParams', 'productsFactory', function($stateParams, productsFactory) {
      //     return productsFactory.get($stateParams.id);
      //   }]
      // }
=======
      controller: 'productsController'

>>>>>>> 2ed86cd545277a9a49016054524801fbc88132fd
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
