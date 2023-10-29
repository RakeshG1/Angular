// // Property decorator to validate the value of a property
// function validateProperty(value: any) {
//     if (typeof value !== "string") {
//       throw new Error("Property must be a string");
//     }
//   }
  
//   // Class with a property decorated with the `validateProperty()` decorator
//   class MyClass {
//     @validateProperty()
//     name: string = "John Doe";
//   }
  
//   // Create a new instance of the class
//   const myClass = new MyClass();
  
//   // Set the `name` property to a valid value
//   myClass.name = "Jane Doe"; // No error is thrown
  
//   // Set the `name` property to an invalid value
//   myClass.name = 123; // Error: Property must be a string