(function () {
	'use strict';

	angular.module('ngmkdev').run(runBlock);

	/** @ngInject */
	function runBlock($log, MainModel) {
		MainModel.init();
		$log.debug('runBlock end');
	}

})();
