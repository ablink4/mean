var m = require('mmm'); 

console.log('time after first require ' + m.now);

console.log(m.add(3, 5));
console.log(m.multiply(4, 5));
console.log(m.factorial(4));

/* this is used to demonstrate that the now field exported from the mmm
 * module is calculated only when it is first imported via require(), and 
 * that this second call to require the mmm module simply reuses the cached
 * version from the first require() call.
 */ 
setTimeout(function () {
	m = require('mmm');
	console.log('time after second require ' + m.now);
}, 5000);
