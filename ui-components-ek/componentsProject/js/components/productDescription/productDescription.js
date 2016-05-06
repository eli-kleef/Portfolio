(function(){
	
	var productDescription, productDescriptionController; 
	productDescriptionController=function($scope){		

	}
	productDescriptionController.$inject = ['$scope','lodash'];
	
	productDescription = function(){
	return{
		restrict:'E',
		scope:{
			product:'='
		},
		controller:productDescriptionController,
		controllerAs:'productDescriptionCtrl',
		templateUrl:'componentsProject/js/components/productDescription/productDescription.html',
	};
};

angular.module('componentsLib').directive('aptProductDescription', productDescription);
	
}).call(this);

