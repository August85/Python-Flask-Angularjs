angular.module("Pragrammar", ['flow', 'hServices', 'ngRoute', 'ngProgress', 'ngTouch', 'ngGrid','ui', 'multi-select', 'toaster'])
.factory('State', function(){
    return {
        formData:{},
    };
})

.config(['$routeProvider', '$locationProvider', 'flowFactoryProvider',
        function ($routeProvider, $locationProvider, flowFactoryProvider) {
        flowFactoryProvider.defaults = {
            target: '/upload',
            permanentErrors:[404, 500, 501]
        };
        flowFactoryProvider.on('catchAll', function (event) {
        });

        $routeProvider
		.when('/Home', {
			templateUrl: 'app/partials/home/home.html',
			controller: HomeCtrl
		})
		$routeProvider
		.when('/Java', {
			templateUrl: 'app/partials/java/java.html',
			controller: JavaCtrl
		})
		$routeProvider
		.when('/Android', {
			templateUrl: 'app/partials/android/android.html',
			controller: AndroidCtrl
		})
		.otherwise({
			redirectTo: '/Home'
		})

		//$locationProvider.html5Mode(true);

}]).
    controller("Ctrl", function($scope, $rootScope, $timeout, HomeServices, $q, $location, State , toaster) {
            $scope.menuItems = [
                    {"name" : "Home", "isActive": "active", "href": "Home"},
                    {"name" : "Java", "isActive" : "", "href": "Java"},
                    {"name" : "Android", "isActive" : "", "href": "Android"}];
            $scope.$on('$routeChangeSuccess', function() {
                    $scope.menuActive = $location.path().split("/")[1];
                    if($scope.menuActive == "") { $scope.menuActive = "Home";}
                    for(var item in $scope.menuItems){
                        if ($scope.menuItems[item].name == $scope.menuActive){
                                $scope.menuItems[item].isActive = "active";
                            }
                        else {
                            $scope.menuItems[item].isActive = "";
                        }
                    }
                });
            $scope.pop = function(type,title,text,timeout,template){
                toaster.pop(type,title,text,timeout,template);
            };
    });