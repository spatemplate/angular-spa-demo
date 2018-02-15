angular.module('ngmkdev').controller('TransactionsController', function ($scope, TransactionsModel) {

	TransactionsModel.init();

	this.addTransaction = function () {
		TransactionsModel.addTransaction(this.newTransaction);
		this.resetTransaction();
	}

	this.resetTransaction = function () {
		this.newTransaction = {
			amount: 0.0,
			description: null
		}
	}
	this.transactions_store = TransactionsModel;
	this.resetTransaction();
});