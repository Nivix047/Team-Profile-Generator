const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // calling from parent class
    super(name, id, email);
    // added info
    // Don't need to test name, id, email because is already inherited.
    // toBe is an alternate to expect.
    this.github = github;
  }
  getGithub() {
    return this.github;
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
