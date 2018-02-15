angular.module('ngmkdev').controller('UserController', function ($scope, UserModel) {

	UserModel.load().then(function (response) {
      $scope.response.errors = response.error;
    });

	$scope.user = {};

	$scope.add = function () {
		console.log($scope.user);
		//UserModel.add(this.newUser);
		//this.resetTransaction();
	};

	$scope.update = function () {
		console.log($scope.user);
		//UserModel.add(this.newUser);
		//this.resetTransaction();
	};

	$scope.data = UserModel;
	//this.resetTransaction();
});
