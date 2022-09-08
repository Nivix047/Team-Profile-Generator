const Intern = require("../lib/intern");

describe("Intern", () => {
  it("returns the correct position", () => {
    const int = new Intern();
    expect(int.getRole()).toEqual("Intern");
  });
});
