'use strict';


describe('Feature1Ctrl', function(){
    var scope, $controllerConstructor, mockCustomersData;

    beforeEach(module("myApp"));
    beforeEach(inject(function($controller, $rootScope){
        scope = $rootScope.$new();
        mockCustomersData = sinon.stub({getAllCustomers: function(){}});
        $controllerConstructor = $controller;
    }));

    it('should set the scope customers to the result of customersSvc.getAllCustomers', function(){
        //ARRANGE
        var customers = {};
        mockCustomersData.getAllCustomers.returns(customers);

        //ACT
        var ctrl = $controllerConstructor('Feature1Ctrl', { $scope: scope, customersSvc: mockCustomersData});

        //ASSERT
        expect(scope.customers).toBe(customers);
    });
});