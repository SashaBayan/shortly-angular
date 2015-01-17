angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links, $http) {

  $scope.data = {};
  $scope.getLinks = function(){
    $http.get('/api/links')
    .then(function(res){
      console.log(res.data);

      console.log('Links():');
      console.log(Links());

      $scope.data.links = res.data;

    });
  };
  $scope.getLinks();
});
