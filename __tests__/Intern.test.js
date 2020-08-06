const Intern = require("../lib/Intern");

test('Set School with constructor argument', () => {
    const testValue = "Auburn";
    const emp = new Intern("Amy", 1, "test@gmail.com", testValue);
    expect(emp.school).toBe(testValue);
});

test('getRole() is functioning correctly', () => {
    const testValue = "Intern";
    const emp = new Intern("Rachel", 1, "test@gmail.com", "Auburn");
    expect(emp.getRole()).toBe(testValue);
});

test('Get school with getSchool()', () => {
    const testValue = "Auburn";
    const emp = new Intern("Amy", 1, "test@gmail.com", testValue);
    expect(emp.getSchool()).toBe(testValue);
});