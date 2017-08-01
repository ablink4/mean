// on my PC, __filename returned the fullpath to the file
console.log('Currently executing file is ' + __filename);
console.log('It is located in ' + __dirname);

console.log('Starting in ' + process.cwd());

try {
	process.chdir('/');
} catch(error) {
	console.error(error);
}

console.log('Current working directory is now ' + process.cwd());
