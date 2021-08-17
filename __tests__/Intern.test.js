const Intern = require('../lib/intern.js');

test("check inheritied vars from manager constructor", () => {
    const intern = new Intern('cody', 1212, 'codycallahan02@gmail.com', 'ASU');
  
    expect(intern.name).toBe('cody');
    expect(intern.email).toBe('codycallahan02@gmail.com');
    expect(intern.id).toEqual(expect.any(Number));
  });

test("check office number is numeric", () => {
    const intern = new Intern('cody', 1212, 'codycallahan02@gmail.com', 'ASU');
    expect(intern.school).toBe('ASU');
});

test("check if office number is numeric", () => {
    const intern = new Intern('cody', 1212, 'codycallahan02@gmail.com', 'ASU');
    expect(intern.getRole()).toBe('Intern');
});
