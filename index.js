// Write your solution in this file!
// creating a employee variable and assigning it to an object.
var employee = {
    name: "Etemesi",
    streetAddress: "Mathare North"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator
    return {
      ...employee,
      [key]: value
    };
  }
  
  var originalEmployee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  var updatedEmployee = updateEmployeeWithKeyAndValue(originalEmployee, "streetAddress", "456 Oak Avenue");
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    // Return the modified employee object 
    return employee;
  }
  
  // Implementation
  var originalEmployee = {
    name: "Sam",
    streetAddress: "11 Broadway"
  };
  
  destructivelyUpdateEmployeeWithKeyAndValue(originalEmployee, "streetAddress", "456 Oak Avenue");
  
  function deleteFromEmployeeByKey(employee, key) {
    // using the spread operator to create a new object and delete the specified key
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  // Implementation
  var originalEmployee = {
    name: "Sam",
    streetAddress: "123 Main Street",
  };
  
  var employeeWithoutStreetAddress = deleteFromEmployeeByKey(originalEmployee, "streetAddress");
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    //deleting the specified key to enable mutation of the original employee
    delete employee[key];
    // modified employee object bein returned
    return employee;
  }
  
  // Implementation
  var originalEmployee = {
    name: " ",
  };

  // Displaying the original and modified employee objects
  
  console.log("Modified Employee:", originalEmployee);
  console.log("Original Employee:", originalEmployee);
  console.log("Updated Employee:", updatedEmployee);
  