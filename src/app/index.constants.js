/* global malarkey:false, moment:false */
(function () {
	'use strict';
	
	angular.module('ngmkdev').constant('config', {
		apiUrl: 'http://site9.bxon.ru',
		dbName: 'ascrum'
	});

	angular.module('ngmkdev').constant('malarkey', malarkey);
	angular.module('ngmkdev').constant('moment', moment);

})();
