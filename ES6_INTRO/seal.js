const employee = {
  name: "raja rani",
  designation: "QA",
  salary: 20000,
  experience: 1,
  age: 22,
};

// to delete an element from the object use (Delete)
// delete employee.salary;

// to freeze an object just type (object.freeze)

// ------> (seal) modify korte dibe but delete korte dibena

Object.seal(employee);
delete employee.experience;

employee.salary = employee.salary + 5000;
employee.location = "Dhaka";
console.log(employee);
