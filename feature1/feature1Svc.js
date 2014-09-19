'use strict';

app.factory('customersSvc', function () {
    return { 
    	customers: [{ "id": 1, "name": "Ted" }, { "id": 2, "name": "Jack" }] 
	};
});