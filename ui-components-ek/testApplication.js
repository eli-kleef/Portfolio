// application testbench to exersize components

(function(){
	'use strict';

	angular.module('testApp', ['ngLodash', 'componentsLib','ui.router']);

	var testApp = angular.module('testApp');

	testApp.config(configBlock);

	configBlock.$inject = ['$stateProvider','$urlRouterProvider'];

	function configBlock($stateProvider,$urlRouterProvider) {
		// configure router and other providers
		$urlRouterProvider.otherwise('/home');
			$stateProvider
				.state('home',{
					url:'/home',
					templateUrl:'componentsProject/partiales/home.html',
				})
				.state('products',{
					url:'/products',
					templateUrl: 'componentsProject/partiales/products.html',
				})
				.state('parts',{
					url:'/parts',
					templateUrl: 'componentsProject/partiales/parts.html',
				})
				.state('support',{
					url:'/support',
					templateUrl: 'componentsProject/partiales/support.html',
				})
				.state('company',{
					url:'/company',
					templateUrl: 'componentsProject/partiales/company.html',
				})
				.state('dealerLocator',{
					url:'/dealerLocator',
					templateUrl: 'componentsProject/partiales/dealerLocator.html',
				})
	}

	angular.module('testApp').run(function ($rootScope){
		$rootScope.$on("$stateChangeError", console.log.bind(console));
	});

}).call(this);