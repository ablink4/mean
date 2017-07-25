var fs = require('fs');

/* learning notes (from the book): by convention, callback
 * functions are the last arguments passed to a function, and
 * error is the first argument passed to a callback function that
 * supports it.
 */ 
fs.readFile('README.txt', 'utf8', function(error, data) {
	if (error) {
		return console.error(error);
	}
	
	console.log(data);
});
