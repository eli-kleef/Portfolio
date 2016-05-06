(function(){
	
	var actionButtonController, ActionButton;
	
	actionButtonController = function($scope){
		$scope.clickAction=function(){
			alert('hello');
		}
	};

	actionButtonController.$inject = ['$scope','lodash'];
	
	ActionButton = function(){
		return{
			restrict:'E',
			scope:{
				clickAction:"&",
				value:'@',
			},
			controller:actionButtonController,
			controllerAs:'actionButtonCtrl',
			bindToController:true,
			template:"<input type = 'button' ng-click = 'clickAction()' value='LABEL'/>"
		};
	};

	//ActionButton.$inject = [];

	angular.module('componentsLib').directive('aptActionButton', ActionButton);
}).call(this); 


