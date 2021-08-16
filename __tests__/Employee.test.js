const Employee = require('../lib/Employee.js')

test("creates an employee object", () => {
    const employee = new Employee('cody', 1212, 'codycallahan02@gmail.com');
  
    expect(employee.name).toBe('cody');
    expect(employee.email).toBe('codycallahan02@gmail.com');
    expect(employee.id).toEqual(expect.any(Number));
  });
