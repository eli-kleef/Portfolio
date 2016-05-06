(function(){
	
	var productPricing, productPricingController;

	productPricingController = function($scope, lodash){
		
	}

	productPricingController.$inject = ['$scope','lodash'];

	productPricing= function(){
	return{
		restrict:'E',
		scope:{
			product:'='
		},
		controller:productPricingController,
		controllerAs:'productPricingnCtrl',
		templateUrl:'componentsProject/js/components/productPricing/productPricing.html',
	};
};

angular.module('componentsLib').directive('aptProductPricing', productPricing);
	
}).call(this);

