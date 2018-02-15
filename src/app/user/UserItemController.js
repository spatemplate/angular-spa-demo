angular.module('ngmkdev').controller('UserItemController', function ($scope, UserItemModel) {

  if ($scope.item_id){
    UserItemModel.item_data($scope.item_id).then(function (response) {
      $scope.response.errors = response.error;
    });
  }

  $scope.data = UserItemModel;

});
