const Manager = require("../lib/manager");

describe("Test Manager Class", () => {
  it("it should return a new manager object", () => {
    const man = new Manager("Daniel", 1, "abc123@gmail.com", 111);
    expect(typeof man).toEqual("object");
  });
});

it("can set an office number via constructor", () => {
  const man = new Manager("Daniel", 1, "acb123@gmail.com", 111);

  expect(man.office).toEqual(111);
});

it("can get office number via getOffice() method", () => {
  const man = new Manager("Daniel", 1, "acb123@gmail.com", 111);

  expect(man.getOffice()).toEqual(111);
});

it("can get employee role via getRole() method", () => {
  const man = new Manager("Daniel", 1, "acb123@gmail.com", 111);

  expect(man.getRole()).toEqual("Manager");
});
