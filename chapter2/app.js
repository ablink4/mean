var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
	// this check is needed because some browsers request
	// these files unexpectedly and that would change our results
	if (req.url === '/favicon.ico') {
		return res.end();
	}
	console.log('Incoming request to ' + req.url);
	
	var i = 2;
	res.writeHead(200, {'Content-Type': 'text/plain'});
	
	setTimeout(function() {
		// reads this source file from disk into memory
		// when the read is complete, the supplied callback
		// function is executed
		fs.readFile(__filename, {
			encoding: 'utf8'
		}, function (error, contents) {
			if (error) {
				console.error(error);
				return res.end();
			}
			
			console.log('sending response for ' + req.url);
			res.end(contents);
		});
	}, 5000);
	
	// this is just to add some synchronous code to demonstrate what
	// happens when we mix synchronous and asynchronous code
	while(i--) {
		console.log('Loop value: ' + i + '\r');
	}
}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
