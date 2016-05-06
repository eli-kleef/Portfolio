// Component that renders product tiles inside of a grid layout

(function(){
	'use strict';

	var productGrid, productGridCtrl;

	productGridCtrl = function(componentDataService, $timeout) {
				
		var ctrl = this;
		componentDataService.getProductList().then(function(result){    
      	ctrl.data = result.data;
		});

	};

	productGridCtrl.$inject = ['componentDataService','$timeout'];
	
	productGrid = function() {
		return {
			restrict: 'E',
			scope: {},
			templateUrl: 'componentsProject/js/components/productGrid/productGrid.html',
			controller: productGridCtrl,
			controllerAs: 'ctrl',
			bindToController: true
		};
	};

	productGrid.$inject = [];

	angular.module('componentsLib').directive('aptProductGrid', productGrid);
		
}).call(this);