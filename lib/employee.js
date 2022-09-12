// Class constructor // constructor to receive data
class Employee {
  #name;
  #id;
  #email;
  constructor(name, id, email) {
    this.#name = name;
    this.#id = id;
    this.#email = email;
  }
  getName() {
    return this.#name;
  }
  getId() {
    return this.#id;
  }
  getEmail() {
    return this.#email;
  }
  getRole() {
    return "Employee";
  }
}

// Exporting file
module.exports = Employee;
