app.controller('productsController', ['$scope', 'productsFactory', 'authFactory', '$stateParams', function($scope, productsFactory, authFactory, $stateParams) {

  console.log('you are in the productsController');
  if($stateParams.id){
        productsFactory.get($stateParams.id, function(data) {
          if(data) {
            $scope.foundProduct = data
          }
  })
  }

  $scope.isLoggedIn = authFactory.isLoggedIn;
  $scope.currentUser = authFactory.currentUser;
  $scope.logOut = authFactory.logOut;
  $scope.foundProduct = productsFactory.foundProduct;

  $scope.products = productsFactory.products;

  $scope.addProduct = function(){
    if($scope.name === '' || $scope.price === '') {
      return;
    }
    productsFactory.create({
      name: $scope.name,
      condition: $scope.condition,
      quantity: $scope.quantity,
      price: $scope.price
    });
    $scope.name = '';
    $scope.condition = '';
    $scope.quantity = '';
    $scope.price = '';
    console.log('the product has been added');
  };

  // $scope.addReview = function(){
  //   if($scope.body === '') {
  //     return;
  //   }
  //   productsFactory.reviewProduct(product._id, {
  //     body: $scope.body,
  //     author: 'user',
  //   }).success(function(review) {
  //     $scope.product.reviews.push(review);
  //   });
  //   $scope.body = '';
  //   console.log('the review has been added');
  // };

  $scope.incrementUpvotes = function(product) {
    productsFactory.upvote(product);
    console.log('the product has been upvoted');

  }



}]);
