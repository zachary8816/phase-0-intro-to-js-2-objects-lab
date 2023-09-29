const employee = {
    name: "John Doe",
    streetAddress: "123 Main St"
  };
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    // Create a new object using the spread operator
    const updatedEmployee = { ...employee };
  
    // Update the value for the specified key
    updatedEmployee[key] = value;
  
    // Return the updated employee object
    return updatedEmployee;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee }; // create a new object by spreading properties of the employee object
    delete newEmployee[key]; // delete the property with the identified key from the new object
    return newEmployee; // return the new object without the identified key-value pair
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete ('John Doe')[key]; // delete the property with the identified key from the employee object
  }
  // Call the destructivelyDeleteFromEmployeeByKey() function
  destructivelyDeleteFromEmployeeByKey(employee,)

// Describe the test case
describe("destructivelyDeleteFromEmployeeByKey()", () => {
  it("should modify the original employee object", () => {
    // Create an example employee object
    const employee = {
      name: "John Doe",
      age: 30,
      position: "Software Engineer"
    };

    // Call the destructivelyDeleteFromEmployeeByKey() function
    destructivelyDeleteFromEmployeeByKey(employee,)

    // Assert the modified employee object
    expect(employee).to.deep.equal({
      age: 30,
      position: "Software Engineer"
    });
  });
});
// Define the employee object
const name = {
    name: "John Doe",
    age: 30,
    position: "Software Engineer"
  };
  function DestructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }