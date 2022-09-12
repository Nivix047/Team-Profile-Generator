const Employee = require("./employee");
class Manager extends Employee {
  constructor(name, id, email, office) {
    super(name, id, email);
    // added info
    this.office = office;
  }
  // Accessors // Gettors
  getOffice() {
    return this.office;
  }
  getRole() {
    return "Manager";
  }
}

module.exports = Manager;

// Settors/Mutators - applying a value to something
