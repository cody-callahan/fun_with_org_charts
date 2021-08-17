const Manager = require('../lib/Manager.js');

test("check inheritied vars from employee constructor", () => {
    const manager = new Manager('cody', 1212, 'codycallahan02@gmail.com', 7675);
  
    expect(manager.name).toBe('cody');
    expect(manager.email).toBe('codycallahan02@gmail.com');
    expect(manager.id).toEqual(expect.any(Number));
  });

test("check office number is numeric", () => {
    const manager = new Manager('cody', 1212, 'codycallahan02@gmail.com', 7675);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test("check if office number is numeric", () => {
    const manager = new Manager('cody', 1212, 'codycallahan02@gmail.com', 7675);
    expect(manager.getRole()).toBe('Manager');
});
