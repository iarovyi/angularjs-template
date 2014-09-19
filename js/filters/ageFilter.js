app.filter('ageFilter', function(){
	return function(age){
		if (age < 18) {
			return 'teenager';
		} else if (age > 50) {
			return 'old man';
		}
		
		return 'adult';
	};
});