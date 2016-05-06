(function(){
	var pageHeader, pageHeaderController;

	pageHeaderController = function($scope, lodash){
		
	}

	pageHeaderController.$inject = ['$scope','lodash'];
	
pageHeader = function(){
	return{
		restrict:'E',
		scope:{},
		controller:pageHeaderController,
		controllerAs:'pageHeaderCtrl',
		bindToController:true,
		templateUrl:'componentsProject/js/components/pageHeader/pageHeader.html',
	};
};

angular.module('componentsLib').directive('aptPageHeader', pageHeader);
	
}).call(this);

