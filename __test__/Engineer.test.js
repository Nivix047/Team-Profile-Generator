const Engineer = require("../lib/engineer");

describe("Test Engineer Class", () => {
  it("it should return a new engineer object", () => {
    const eng = new Engineer("Daniel", 1, "abc123@gmail.com", "gitHubName");
    expect(typeof eng).toEqual("object");
  });
});

it("can set an gitHub URL via constructor", () => {
  const eng = new Engineer("Daniel", 1, "acb123@gmail.com", "gitHubName");

  expect(eng.github).toEqual("gitHubName");
});

it("can get an gitHub URL via getgitHub() method", () => {
  const eng = new Engineer("Daniel", 1, "acb123@gmail.com", "gitHubName");

  expect(eng.getGithub()).toEqual("gitHubName");
});

it("can get employee role via getRole() method", () => {
  const eng = new Engineer("Daniel", 1, "acb123@gmail.com", "gitHubName");

  expect(eng.getRole()).toEqual("Engineer");
});
