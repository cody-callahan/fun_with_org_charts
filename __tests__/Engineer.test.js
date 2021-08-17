const Engineer = require('../lib/Engineer.js');

test("check inheritied vars from manager constructor", () => {
    const engineer = new Engineer('cody', 1212, 'codycallahan02@gmail.com', 'github.com/cody-callahan');
  
    expect(engineer.name).toBe('cody');
    expect(engineer.email).toBe('codycallahan02@gmail.com');
    expect(engineer.id).toEqual(expect.any(Number));
  });

test("check office number is numeric", () => {
    const engineer = new Engineer('cody', 1212, 'codycallahan02@gmail.com', 'github.com/cody-callahan');
    expect(engineer.github).toBe('github.com/cody-callahan');
});

test("check if office number is numeric", () => {
    const engineer = new Engineer('cody', 1212, 'codycallahan02@gmail.com', 'github.com/cody-callahan');
    expect(engineer.getRole()).toBe('Engineer');
});
