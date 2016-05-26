var myApp=angular.module('chart',['chart.js']);
myApp.controller('chartCtrl',function($scope){
	 $scope.x='hi';
	 $scope.labels = ["Zippelin:", "Spark1.4","Hadoop", "Free Space"];
	 $scope.data = [20, 40, 60,30];
});
