angular.module('ngmkdev').factory('UserModel', function ($http, Restangular, AlertModel, config) {

	var _data = [];

    _data.load = function () {
      _data.data = {};
      _data.error = false;
      return Restangular.all('users').getList().then(function (results) {
        _data.data = results;
        return _data;
      }).catch(function(response) {
        if (response.status == 401){
          // console.log("Error: 401", response.data);
          location.href = '#/login';
        }else if(response.status == 403  || response.status == 404){
          // console.log("Error:", response.data);
          _data.error = response.data;
          return _data;
        }else {
          console.log("Error with status code", response);
        }
      });
    };

    _data.create = function (user) {
			return Restangular.all('users').post(user).then(function () {
					_data.push(user);
				}).catch(function (response) {
				AlertModel.add(response.data[0]['message'], 'danger', 5);
			})
		};

    _data.update = function (id, user) {
			return Restangular.all('users/' + id).put(user).then(function () {
				_data.push(user);
			}).catch(function (response) {
				AlertModel.add(response.data[0]['message'], 'danger', 5);
			})
		};

    return _data;
});
