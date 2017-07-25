var fs = require('fs');

try {
	fs.readFile('README.txt', 'utf8', function(error, data) {
		if (error) {
			throw error;
			return;
		}
		
		console.log(data);
	});
} catch (error) {
	/* we will not get here because try..catch cannot handle
	 * asynchronously-generated errors.  Use try..catch for 
	 * synchronous operations.  Typically, asynchronous errors
	 * are passed around using callbacks until they reach a place
	 * where it makes sense to handle them.
	 */ 
	console.error('Caught the error synchronously.');
}
