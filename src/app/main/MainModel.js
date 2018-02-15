
angular.module('ngmkdev').factory('MainModel', function (AuthModel, TransactionsModel) {
	var model = {};

	model.init = function () {
		AuthModel.init();
		TransactionsModel.init();
	};

	return model;
});