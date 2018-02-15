(function () {
	'use strict';

	angular.module('ngmkdev').config(routerConfig);

	/** @ngInject */
	function routerConfig($stateProvider, $urlRouterProvider) {

		$stateProvider.state('dashboard', {
			url: "/",
			templateUrl: "app/dashboard/dashboard.html"
		});

		$stateProvider.state('lead', {
			url: "/lead",
			templateUrl: "app/lead/list.html"
		});

		$stateProvider.state('user', {
			url: "/user",
			templateUrl: "app/user/list.html"
		});

		$stateProvider.state('user/create', {
			url: "/user/create",
			templateUrl: "app/user/create.html"
		});

		$stateProvider.state('user/:id/update', {
			url: "/user/:id/update",
			templateUrl: "app/user/update.html"
		});

		$stateProvider.state('user/:id/view', {
			url: "/user/:id/view",
			templateUrl: "app/user/view.html",
            controller: function ($scope, $state) {
              $scope.item_id = $state.params.id;
            }
		});

		$stateProvider.state('transactions', {
			url: "/transactions",
			templateUrl: "app/transaction/transactions.html"
		});

		$stateProvider.state('settings', {
			url: "/settings",
			templateUrl: "app/settings/settings.html"
		});

		$stateProvider.state('loguot', {
			url: "/loguot",
			templateUrl: "app/auth/authLogout.html"
		});

		$stateProvider.state('login', {
			url: "/login",
			templateUrl: "app/auth/authLogin.html"
		});

		$urlRouterProvider.otherwise('/');
	}

})();
