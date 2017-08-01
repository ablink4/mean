var fs = require('fs');
var stream = fs.createReadStream('foo.txt');

stream.on('data', function(data) {
    var chunk = data.toString();

    // don't use console.log() because it appends an extra newline
    process.stdout.write(chunk);
});

stream.on('end', function() {
    console.log();
});

stream.on('error', function(error) {
    console.error(error);
});