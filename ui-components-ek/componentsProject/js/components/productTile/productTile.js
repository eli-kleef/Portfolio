(function(){
	
	var ProductTile , productTileController;
	productTileController = function($http,$scope){
		$scope.products=[];
	
	};
	
ProductTile = function(){
	return{
		restrict:'E',
		scope:{
			product:'=',
		},
		controller:productTileController,
		controllerAs:'productTileCtrl',
		templateUrl:'componentsProject/js/components/productTile/productTile.html',
	};
};

angular.module('componentsLib').directive('aptProductTile',ProductTile);
	
}).call(this);
