
angular.module('ngmkdev').factory('AuthModel', function (Restangular, $http, AlertModel, config) {
	var model = {};

	var _isLogged = false;
	var _info = {};

	model.init = function () {
		var token = localStorage.getItem('access-token');
		_isLogged = token != null;
		$http.defaults.headers.common["Authorization"] = token;
		if(_isLogged) {
			model.loadInfo();
		}
	};

	model.isLogged = function () {
		return _isLogged;
	};

	model.info = function (name) {
		return _info[name];
	};

	model.login = function (user) {
		return $http.post(config.apiUrl + '/auth', user)
			.then(successHandler)
			.catch(errorHandler);
		function successHandler(response) {
			AlertModel.clear();
			AlertModel.add('Вы вошли в свой аккаунт!', 'success', 4);
			localStorage.setItem('access-token', response.data['access-token']);
			model.init();
			location.href = '#/';
		}
		function errorHandler(response) {
			AlertModel.add(response.data[0]['message'], 'danger', 5);
		}
	};

	model.loadInfo = function () {
		$http.get(config.apiUrl + '/auth')
			.then(function (response) {
				_info = response.data;
			})
			.catch(function (response) {
				_info = {};
			});
	};

	model.logout = function () {
		AlertModel.add('Вы вышли из аккаунта!', 'success', 4);
		localStorage.removeItem('access-token');
		model.init();
		location.href = '#/';
	};

	return model;
});
