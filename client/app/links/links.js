angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};
  $scope.getLinks = function(){
    Links.get()
      .then(function(data) {
        $scope.data.links = data;
      })
      .catch(function (error) {
        console.error(error);
      });
    // Also worked, but not the right place -- put in services
    // $http.get('/api/links')
    // .then(function(res){
    //   console.log('res.data in LinksController');
    //   console.log(res.data);
    //   $scope.data.links = res.data;
    // });



  };
  $scope.getLinks();
});
