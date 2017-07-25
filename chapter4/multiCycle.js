console.log('one event loop cycle');

setTimeout(function() {
	// this prints last because it is queued to run in a future 
	// cycle of the event loop
	console.log('different cycle');
}, 100);

console.log('same cycle');
