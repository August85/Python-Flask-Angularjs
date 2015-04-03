(function(){
	var HServices = angular.module('hServices', ['restangular', 'ngResource']);

	HServices.service('HomeServices', function HomeServicesProvider($rootScope, $http, $resource, $q){
        this.baseURL = "";
        this.demoFunction = function(){
            console.log('Inside demo function');

        };
	});
})();