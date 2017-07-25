/* when run, these tasks may appear to be executing concurrently,
 * but they are not.  If you uncomment the infinite loop, 'Task A'
 * will stop printing as soon as the infite loop begins.
 */ 
setInterval(function() {
	console.log('Task A');
}, 10);

setInterval(function() {
	//while (true);
	console.log('Task B');
}, 15);
