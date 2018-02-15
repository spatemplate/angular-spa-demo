
angular.module('ngmkdev').controller('NavigationController', function (TransactionsModel, AuthModel) {

	this.transactions_store = TransactionsModel;
	this.AuthModel = AuthModel;

});
