var promise = new Promise(function(resolve, reject) {
	var success = true;
	
	if (success) {
		resolve('promise fulfilled');
	} else { 
		// by convention, reject() is called with an Error object
		reject(new Error('promise rejected'));
	}
});
