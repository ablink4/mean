process.stdin.once('data', function(data) {
    process.stdout.write('Hello ' + data.toString());
    process.stdin.pause();
});

process.stdout.write('What is your name? ');
// unpause stdin to allow user to enter their name
process.stdin.resume();