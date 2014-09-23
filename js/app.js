'use strict';


var app = angular.module('myApp', [ 'ngRoute'/*,'myApp.view1', 'myApp.view2', 'myApp.version'*/]).
config(['$routeProvider', function($routeProvider, $locationProvider) {
 $routeProvider.otherwise({redirectTo: '/'});
 //$locationProvider.html5Mode(true);


 $routeProvider
 	.when('/feature1', 
 		{ templateUrl: 'feature1/feature1.html', controller: 'Feature1Ctrl' })
 	.when('/feature1/:customerId', 
 		{ templateUrl: 'feature1/EditCustomer/customer.html', controller: 'CustomerCtrl',
 		  myConstantVar: 'true'
 		})
	.when('/feature2', 
		{ templateUrl: 'feature2/feature2.html', controller: 'Feature2Ctrl' });
}]);
