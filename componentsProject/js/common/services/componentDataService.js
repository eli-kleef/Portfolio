// common service for fetching and caching data

(function(){
	'use strict';

	angular.module('componentsLib').service('componentDataService', ComponentDataServiceFunc);

	ComponentDataServiceFunc.$inject = ['$http', '$log','$q'];

	function ComponentDataServiceFunc($http, $log, $q) {
		var serviceRef = this;
		var deferred = $q.defer();
	
		serviceRef.getProductList = function() {
			$log.info("getProductList!")
			//var data;

			return $http.get('mockData.json').success(function(result) {
				//data = (angular.isArray(result)) ? result : [result];
				deferred.resolve(result);
				// console.log(JSON.stringify(data));

				return deferred.promise;
			})
			.error(function(err){
				deferred.reject(err);
				return deferred.promise;
				$log.error("unable to fetch mockData.json " + err);
			});
		};

		return this;
	}
}).call(this);