const Employee = require("../lib/employee");

describe("Employee", () => {
  it("returns the correct name", () => {
    const name = "Daniel";
    const id = "1";
    const email = "xyz";
    const emp = new Employee(name, id, email);
    console.log(emp);
    expect(emp.name).toEqual(name);
    expect(emp.id).toEqual(id);
    expect(emp.email).toEqual(email);
  });
});
