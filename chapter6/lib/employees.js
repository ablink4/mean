var employeeDb = require('../database/employees');

exports.getEmployees = getEmployees;
exports.getEmployee = getEmployee;

function getEmployees (callback) {
	// simulate a database call
	setTimeout(function () {
		// the null argument indicates there were no errors
		callback(null, employeeDb);
	}, 500);
}

function getEmployee (employeeId, callback) { 
	getEmployees(function (error, data) {
		if(error) { 
			// return the error to the caller
			return callback(error);
		}
		
		var result = data.find(function(item) {
			return item.id === employeeId;
		});
		
		callback(null, result);
	});
}
