const Employee = require("./employee");

class Intern extends Employee {
  constructor(id, name, email, school) {
    super(id, name, email);
    this.school = school;
  }
  createIntern() {
    return `<div class="card">
    <h2>${this.name}</h2>
    <h3>Manager</h3>
    <div class="container">
      <h4>
        <b>*Office Number = ${this.officeNumber}*</b>
        <b>${this.email}</b>
       \
      </h4>
    </div>
  </div>`;
  }
}

module.exports = Intern;
