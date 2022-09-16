const Employee = require("../lib/Employee");

test("Create new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Name Testing.", () => {
    const name = "Kolby";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 1;
    const employeeInstance = new Employee("Kolby", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing Email.", () => {
    const email = "kolby.kimball10@gmail.com";
    const employeeInstance = new Employee("Kolby", 1, email);
    expect(employeeInstance.email).toBe(email);
})

test("Puts name through getName method.", () => {
    const testName = "Kolby";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("Test ID through getID method.", () => {
    const testID = 1;
    const employeeInstance = new Employee("Kolby", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("Test email through getEmail method.", () => {
    const testEmail = "kolby.kimball10@gmail.com";
    const employeeInstance = new Employee("Kolby", 1, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("Role Testing.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Kolby", 1, "kolby.kimball10@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})