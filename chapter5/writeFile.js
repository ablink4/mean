var fs = require('fs');
var data = 'some file data\n';

// uses utf8 by default
fs.writeFile(__dirname + '/foo.txt', data, {
	flag: 'wx' // causes an error if file already exists
}, function(error) {
	if(error) { 
		// the book uses a return statement here, so I do as well
		// but it works just the same if you just log it with no return.
		// what's the difference, if any?
		return console.error(error.message); 
	}
});
