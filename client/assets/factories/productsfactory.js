app.factory('productsFactory', ['$http', 'authFactory', function($http, authFactory) {

  console.log('you are in the productsFactory');

  var factory = {
    products: []
  };

  factory.get = function(id, callback) {
    return $http.get('/products/' + id).success(function(res) {
      factory.foundProduct = res;
      callback(res);
    })
  };

  factory.getAll = function() {
    return $http.get('/products').success(function(data) {
      angular.copy(data, factory.products);

    });
  };

  factory.create = function(product) {
    return $http.post('/products', product, {
      headers: {Authorization: 'Bearer '+authFactory.getToken()}
    }).success(function(data) {
      factory.products.push(data);
    });
  };

  factory.upvote = function(product) {
    return $http.put('/products/' + product._id + '/upvote', null, {
      headers: {Authorization: 'Bearer '+authFactory.getToken()}
    }).success(function(data) {
      product.upvotes += 1;
    });
  };

  // factory.reviewProduct = function(id, review) {
  //   return $http.post('/products/' + id + '/reviews', review, {
  //     headers: {Authorization: 'Bearer '+authFactory.getToken()}
  //   });
  // };

  return factory;

}]);
