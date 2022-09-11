const Intern = require("../lib/intern");

describe("Test Intern Class", () => {
  it("it should return a new intern object", () => {
    const int = new Intern("Daniel", 1, "abc123@gmail.com", "Coding School");
    expect(typeof int).toEqual("object");
  });
});

it("can set school name via constructor", () => {
  const int = new Intern("Daniel", 1, "acb123@gmail.com", "Coding School");

  expect(int.school).toEqual("Coding School");
});

it("can get school name via getSchool() method", () => {
  const int = new Intern("Daniel", 1, "acb123@gmail.com", "Coding School");

  expect(int.getSchool()).toEqual("Coding School");
});

it("can get employee role via getRole() method", () => {
  const int = new Intern("Daniel", 1, "acb123@gmail.com", "Coding School");

  expect(int.getRole()).toEqual("Intern");
});
