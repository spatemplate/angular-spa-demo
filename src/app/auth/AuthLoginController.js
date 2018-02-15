angular.module('ngmkdev').controller('AuthLoginController', function ($scope, AuthModel) {

	$scope.login = function (auth) {
		AuthModel.login(auth);
	}

});