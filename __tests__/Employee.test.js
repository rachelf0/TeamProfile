const Employee = require("../lib/Employee");

test('New Employee created', () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
});

test('Set Employee Name with a constructor argument', () => {
    const name = "Rachel";
    const emp = new Employee(name);
    expect(emp.name).toBe(name);
});

test('Set Employee ID with a constructor argument', () => {
    const testValue = 100;
    const emp = new Employee("Amy", testValue);
    expect(emp.id).toBe(testValue);
});

test('Set Employee email with a constructor arguments', () => {
    const testValue = "test@gmail.com";
    const emp = new Employee("Amy", 1, testValue);
    expect(emp.email).toBe(testValue);
});

test('Get name with getName()', () => {
    const testValue = "Rachel";
    const emp = new Employee(testValue);
    expect(emp.getName()).toBe(testValue);
});

test('Get ID with getId()', () => {
    const testValue = 2;
    const emp = new Employee("Amy", testValue);
    expect(emp.getId()).toBe(testValue);
});

test('Get Email with getEmail()', () => {
    const testValue = "test@gmail.com";
    const emp = new Employee("Amy", 1, "test@gmail.com");
    expect(emp.getEmail()).toBe(testValue);
});

test("getRole() works correctly", () => {
    const testValue = "Employee";
    const emp = new Employee("Rachel", 1, "test@gmail.com");
    expect(emp.getRole()).toBe(testValue);
});