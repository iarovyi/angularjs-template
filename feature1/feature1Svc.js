'use strict';

app.factory('customersSvc', function () {
    return { 
    	getCustomerById: function(id){
    		return this.customers[id];
    	},
    	customers: [
    		{ "id": 1, "name": "Ted", age: 15 },
    		{ "id": 2, "name": "Jack", age: 80 }
    	],
    	/*getMoreData: function(){
			return $resource('/data/event/:id', { id: '@id'}).get({id: 1});
		}*/
	};
});