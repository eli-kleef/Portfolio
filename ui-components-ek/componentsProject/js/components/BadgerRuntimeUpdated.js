var myApp = angular.module('apttus',['ngRoute']);

myApp.controller('apttusController', function($scope,$http){
	$scope.x='works';
});
myApp.controller('homeCtrl',function($scope,$http){
	$scope.y='home';
	$scope.info=[];
	$http.get('mockData.json')
	.success(function(resp){
		$scope.info=resp;
		console.log($scope.info[0].gender);
	})
	.error(function(e){
		console.log("Error Occured");
		console.log(e);
	});
});
myApp.controller('productsCtrl',function($scope){
	
});
myApp.controller('partsCtrl',function($scope){
	
});
myApp.controller('supportCtrl',function($scope){
	
});
myApp.controller('companyCtrl',function($scope){
	
});
myApp.controller('dealerLocatorCtrl',function($scope){
	
});
myApp.config(function($routeProvider){
    $routeProvider
        .when('/home',{
            templateUrl:'componentsProject/partiales/home.html',
            controller:'homeCtrl'
        })
        .when('/products',{
            templateUrl:'componentsProject/partiales/products.html',
            controller:'productsCtrl'
        })
        .when('/parts',{
            templateUrl:'componentsProject/partiales/parts.html',
            controller:'productsCtrl'
        })
        .when('/support',{
            templateUrl:'componentsProject/partiales/support.html',
            controller:'supportCtrl'
        })
        .when('/company',{
        	templateUrl:'componentsProject/partiales/company.html',
        	controller:'homeCtrl'
        })
         .when('/dealerLocator',{
        	templateUrl:'componentsProject/partiales/dealerLocator.html',
        	controller:'dealerLocatorCtrl'
        })
        .otherwise({redirectTo:'/home'});
})
myApp.directive('mainContent', function(){
	return{
		templateUrl:'componentsProject/partiales/mainContent.html'
	};
});
myApp.directive('actionButton',function(){
	return{
		templateUrl:'componentsProject/partiales/cartBtn.html'
	}	
});
myApp.directive('pageHeader',function(){
	return{
		templateUrl:'componentsProject/partiales/pageHeader.html'
	}
});
