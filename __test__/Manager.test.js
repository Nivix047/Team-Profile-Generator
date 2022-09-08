const Manager = require("../lib/manager");

describe("Manager", () => {
  it("returns the right position", () => {
    const man = new Manager();
    expect(man.getRole()).toEqual("Manager");
  });
});
