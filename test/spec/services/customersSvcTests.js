'use strict';

describe('customersSvc', function(){
    beforeEach(module("myApp"));

    /* MOCK ANY fooService VIA DEPENDENCY RESOLVER
    var fooServiceMock;
    beforeEach(function(){
        fooServiceMock = sinon.stub({someMethod: function(){}});
        module(function($provide){
            $provide.value('fooService', fooServiceMock);
        });
    });*/

    it('should not return user with incorrect id', inject(function(customersSvc){
        expect(customersSvc.getCustomerById(-1)).toBe(undefined);
    }));


});