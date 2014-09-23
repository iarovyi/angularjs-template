'use strict';


app.controller('Feature1Ctrl', function($scope, customersSvc) {
	$scope.customers = customersSvc.getAllCustomers();
});