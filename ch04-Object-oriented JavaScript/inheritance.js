function Person() {}
Person.prototype.cry = function() {
  console.log('crying.');
};
function Child() {}
Child.prototype = new Person();
var aChild = new Child();
console.log(aChild instanceof Child);  // true
console.log(aChild instanceof Person);  // true
console.log(aChild instanceof Object);  // true

function Employee() {
  this.name = '';
  this.dept = 'None';
  this.salary = 0.00;
}

// manager object
function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

// contributor
function IndividualContributor() {
  Employee.call(this);
  this.active_projects = [];
}
IndividualContributor.prototype = Object.create(Employee.prototype);

// Team lead
function TeamLead() {
  Manager.call(this);
  this.dept = 'Software';
  this.salary = 100000;
}
TeamLead.prototype = Object.create(Manager.prototype);

function Engineer() {
  TeamLead.call(this);
  this.dept = 'JavaScript';
  this.desktop_id='8822';
  this.salary = 80000;
}
Engineer.prototype = Object.create(TeamLead.prototype);

var genericEmployee = new Employee();
console.log(genericEmployee);

// extend JavaScript
String.prototype.reverse = function() {
  return Array.prototype.reverse.apply(this.split('')).join('');
};
var str = 'JavaScript';
console.log(str.reverse());
