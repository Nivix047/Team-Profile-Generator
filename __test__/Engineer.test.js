const Engineer = require("../lib/engineer");

describe("Engineer", () => {
  it("returns the right position", () => {
    const eng = new Engineer();
    expect(eng.getRole()).toEqual("Engineer");
  });
});
