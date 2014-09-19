'use strict';


var app = angular.module('myApp', [ 'ngRoute'/*,'myApp.view1', 'myApp.view2', 'myApp.version'*/]).
config(['$routeProvider', function($routeProvider) {
  //$routeProvider.otherwise({redirectTo: '/view1'});


 $routeProvider
 	.when('/feature1', 
 		{ templateUrl: 'feature1/feature1.html', controller: 'Feature1Ctrl' })
	.when('/feature2', 
		{ templateUrl: 'feature2/feature2.html', controller: 'Feature2Ctrl' });
}]);
