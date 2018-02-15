angular.module('ngmkdev').factory('UserItemModel', function ($http, Restangular, config) {
  var model = {};

  model.item_data = function (id) {
    model.item = {};
    model.error = false;
    return $http.get(config.apiUrl + '/users/' + id)
      .then(function (response) {
        model.item.id = response.data.id;
        model.item.email = response.data.email;
        model.item.username = response.data.username;
        model.item.status = response.data.status;
        return model;
      })
      .catch(function (response) {
        if (response.status == 401){
          // console.log("Error: 401", response.data);
          location.href = '#/login';
        }else if(response.status == 403  || response.status == 404){
          // console.log("Error: ", response.data);
          model.error = response.data;
          return model;
        }else {
          //model.error = response.data;
          console.log("Error with status code", response);
        }
      });
  };

  return model;
});
