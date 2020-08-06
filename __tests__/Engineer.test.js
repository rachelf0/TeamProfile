const Engineer = require("../lib/Engineer");

test('Set GitHub username with constructor argument', () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Amy", 1, "test@gmail.com", testValue);
    expect(emp.github).toBe(testValue);
});

test('getRole() functions correctly', () => {
    const testValue = "Engineer";
    const emp = new Engineer("Amy", 1, "test@gmail.com", "GitHubUser");
    expect(emp.getRole()).toBe(testValue);
});

test('Get GitHub username with getGitHub()', () => {
    const testValue = "GitHubUser";
    const emp = new Engineer("Amy", 1, "test@gmail.com", testValue);
    expect(emp.getGitHub()).toBe(testValue);
});