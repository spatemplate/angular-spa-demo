angular.module('ngmkdev').factory('AlertModel', function () {

	var messages = [];

	return {

		add: function (text, type, timeout) {
			type = typeof type != 'undefined' ? type : 'success';
			messages.push({
				msg: text,
				type: type,
				timeout: timeout * 1000 || null
			});
		},

		close: function (index) {
			messages.splice(index, 1);
		},

		clear: function () {
			messages.splice(0,messages.length);
		},

		all: function () {
			return messages;
		}

	}
});
