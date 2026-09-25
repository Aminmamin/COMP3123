let employees = [
    {id: 1, firstName: "Pritesh", lastName: "Patel", email: "pritesh@gmail.com", Salary:5000},
    {id: 2, firstName: "Krish", lastName: "Lee", email: "krish@gmail.com", Salary:4000},
    {id: 3, firstName: "Racks", lastName: "Jacson", email: "racks@gmail.com", Salary:5500},
    {id: 4, firstName: "Denial", lastName: "Roast", email: "denial@gmail.com", Salary:9000}
];

const employeeModule = {
    getAllEmployees: function() {
        return employees;
    },

    getEmployeeNames: function() {
        return employees.map(function(employee) {
            return employee.firstName + " " + employee.lastName;
        }).sort();
    },

    getTotalSalary: function() {
        return employees.reduce(function(total, employee) {
            return total + employee.Salary;
        }, 0);
    }
};

module.exports = employeeModule;