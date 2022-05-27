// Write your solution in this file!
const employee = {
    name : 'George',
    streetAddress : '8th Street NW',
}

beforeEach(function () {
    for (const key in employee) {
      delete employee[key];
    }

    employee.name = 'Sam';
  });

  function updateEmployeeWithKeyAndValue(employee, streetAddress, ) {
      const newEmployee = {...employee}

     newEmployee[streetAddress] = '11 Broadway';
     
     return newEmployee;
  }

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, streetName, ) {
    employee[streetName] = '12 Broadway';
    return employee;
  }

  function deleteFromEmployeeByKey(employee, name) {
      const newEmployee = {...employee}

      delete newEmployee.name

      return newEmployee;
  }

  function destructivelyDeleteFromEmployeeByKey(employee, name) {
      delete employee.name
        return employee;
  }