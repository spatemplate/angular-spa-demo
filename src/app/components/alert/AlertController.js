
angular.module('ngmkdev').controller('AlertController', function (AlertModel) {

	this.alerts = AlertModel.all();

	this.addAlert = function(text) {
		AlertModel.add(text);
	};

	this.closeAlert = function(index) {
		AlertModel.close(index);
	};

});
