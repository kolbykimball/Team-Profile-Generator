const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "kolbykimball";
    const employeeInstance = new Engineer("Kolby", 1, "kolby.kimball10@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("Will getGithub return github.", () => {
    const testGithub = "kolbykimball";
    const employeeInstance = new Engineer("Kolby", 1, "kolby.kimball10@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("Role Test.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Kolby", 1, "kolby.kimball10@gmail.com", "kolbykimball");
    expect(employeeInstance.getRole()).toBe(returnValue);
});