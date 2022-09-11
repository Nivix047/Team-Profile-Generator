const Employee = require("../lib/employee");

describe("Test Employee Class", () => {
  it("should create a new employee object", () => {
    const me = new Employee("Daniel", 1, "abc123@gmail.com");

    expect(typeof me).toBe("object");
  });
});

it("can set a name via constructor", () => {
  const me = new Employee("Daniel", 1, "acb123@gmail.com");

  expect(me.name).toEqual("Daniel");
});

it("can set a id via constructor", () => {
  const me = new Employee("Daniel", 1, "acb123@gmail.com");

  expect(me.id).toEqual(1);
});

it("can set a email via constructor", () => {
  const me = new Employee("Daniel", 1, "acb123@gmail.com");

  expect(me.email).toEqual("acb123@gmail.com");
});

it("can get email via getName() method", () => {
  const me = new Employee("Daniel", 1, "acb123@gmail.com");

  expect(me.getName()).toEqual("Daniel");
});

it("can get email via getEmail() method", () => {
  const me = new Employee("Daniel", 1, "acb123@gmail.com");

  expect(me.getEmail()).toEqual("acb123@gmail.com");
});

it("can get id via getID() method", () => {
  const me = new Employee("Daniel", 1, "acb123@gmail.com");

  expect(me.getId()).toEqual(1);
});

it("can get role via getRole() method", () => {
  const me = new Employee("Daniel", 1, "acb123@gmail.com");

  expect(me.getRole()).toEqual("Employee");
});

// describe("Employee", () => {
//   it("returns the correct name", () => {
//     const name = "Daniel";
//     const id = "1";
//     const email = "xyz";
//     const emp = new Employee(name, id, email);
//     console.log(emp);
//     expect(emp.name).toEqual(name);
//     expect(emp.id).toEqual(id);
//     expect(emp.email).toEqual(email);
//   });
// });
