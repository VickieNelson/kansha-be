const db = require('../../data/dbConfig');

module.exports = {
	findAllEmployees,
	findEmployeeById,
	getEmployeesByOrg,
	addEmployee,
	deleteEmployee,
	editEmployee,
};

// find all employees
function findAllEmployees() {
	return db('Employees');
}
function findByEmail(email) {
	return db('Users')
		.where({ email })
		.select('id');
}
// find one employee
function findEmployeeById(id) {
	return db('Employees')
		.where({ id })
		.first();
}

// add an employee
async function addEmployee(employee) {
	const [id] = await db('Employees').insert(employee, 'id');

	return findEmployeeById(id);
}

// delete an employee
function deleteEmployee(id) {
	return db('Employees')
		.where({ id })
		.del();
}

// edit an employee
function editEmployee(id, changes) {
	return db('Employees')
		.where({ id })
		.update(changes)
		.then(count => (count > 0 ? findEmployeeById(id) : null));
}
// Get all employees by org id

function getEmployeesByOrg(org_id) {
	return db('Employees').where({ org_id });
}
