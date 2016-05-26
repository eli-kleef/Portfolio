// module definition for components. 
// All components to belong to this module for now

(function(){
	angular.module('componentsLib', ['ngLodash']);

	var componentsLib = angular.module('componentsLib');

	componentsLib.config(compLibConfigBlock);

	function compLibConfigBlock() {

	}

	// angular.model('componentsLib').service('componentDataService', componentDataService);

	// data service impl
}).call(this);