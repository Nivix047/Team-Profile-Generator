const Employee = require("../lib/employee");

describe("Employee", () => {
  it("returns the correct name", () => {
    const name = "Daniel";
    const emp = new Employee(name);
    expect(emp.name).toEqual(name);
  });
});
