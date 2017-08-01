var fs = require('fs');

// why does encoding need to be passed as a dict?  seems strange
// I dislike the indentation that's used here, but I followed the book
fs.readFile(__filename, {
	encoding: 'utf8'
	}, function(error, data) {
		if (error) {
			return console.error(error);
		}
	
	console.log(data);
});
