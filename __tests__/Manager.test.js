const Manager = require("../lib/Manager");

test('Set OfficeNumber with constructor argument', () => {
    const testValue = 50;
    const emp = new Manager("Amy", 1, "test@gmail.com", testValue);
    expect(emp.officeNumber).toBe(testValue);
});

test('getRole() functions correctly', () => {
    const testValue = "Manager";
    const emp = new Manager("Amy", 1, "test@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});

test('Get Office Number with getOfficeNumber', () => {
    const testValue = 50;
    const emp = new Manager("Amy", 1, "test@gmail.com", testValue);
    expect(emp.getOfficeNumber()).toBe(testValue);
});