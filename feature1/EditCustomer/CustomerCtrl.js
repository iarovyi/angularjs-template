'use strict';


app.controller('CustomerCtrl', function($scope, $route, customersSvc) {
	console.log($route.current.params.myConstantVar); //from get params
	console.log($route.current.myConstantVar);
	

	$scope.customer = customersSvc.getCustomerById($route.current.params.customerId);
});