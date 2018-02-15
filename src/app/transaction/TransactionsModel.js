angular.module('ngmkdev').factory('TransactionsModel', function (Restangular, AlertModel) {

	var _transactions = [];

	return {
		init: function () {
          Restangular.all('transactions').getList().then(function (results) {
            _transactions = results;
          }, function(response) {
            if (response.status == 401){
              // console.log("Error: 401", response.data);
              location.href = '#/login';
            }else if(response.status == 403 || response.status == 404){
              model.error = response.data;
              // console.log("Error: 403", response.data);
            }else {
              console.log("Error with status code", response);
            }
          });
		},
		addTransaction: function (transaction) {
			var that = this;
			return Restangular.all('transactions').post(transaction).then(function () {
					that.transactions.push(transaction);
				}).catch(function (response) {
				AlertModel.add(response.data[0]['message'], 'danger', 5);
			})
		},
		sum: function () {
			var sum = 0;
            angular.forEach(_transactions, function(el, key) {
                  sum += parseFloat(el.amount);
            });
			return sum;
		}, length: function () {
			return _transactions.length;
		}, all: function () {
			return _transactions;
		}
	}
});
