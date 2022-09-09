// Getters
const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    // added info
    this.office = office;
  }
  // Accessors
  getOffice() {
    return this.office;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;
