const Employee = require("./employee");
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // calling from parent class
    super(name, id, email);
    // added info
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
