var app = angular.module('RS', []);

app.controller('rsCtrl', function($scope, $http){
	
	$scope.info = [];

	$http.get ('http://jsonplaceholder.typicode.com/posts').then(
		function success(resp){
			$scope.info = resp.data
	},  function error(resp){
			$scope.info = resp.statusText;

	});

	$scope.sorter = function (status) {
		if($scope.sort == status) {
			$scope.sort = '-'+status;
		} else {
			$scope.sort = status;
		}
	}
});