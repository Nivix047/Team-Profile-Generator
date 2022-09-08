const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    // added info
    this.office = office;
  }
  getSchool() {
    return this.office;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
