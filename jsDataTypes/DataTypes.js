// Numbers (used for numerical values)
let age = 30;
let pi = 3.14159;

// Strings (represent text data)
let name = "Alice";
let message = 'This is a string with single quotes.';

// Booleans (represent logical values: true or false)
let isLoggedIn = true;
let isValidInput = false;

// Undefined (variable declared but not assigned)
let color; // color is undefined until assigned a value

// Null (intentional absence of a value)
let emptyBox = null;

// Objects (collections of key-value pairs)
let person = {
  firstName: "Bob",
  lastName: "Smith",
  age: 25
};

// Arrays (ordered lists of values)
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

// Demonstrating type checking (optional)
console.log(typeof age);        // Output: "number"
console.log(typeof name);        // Output: "string"
console.log(typeof isLoggedIn);  // Output: "boolean"
console.log(typeof color);       // Output: "undefined"
console.log(typeof emptyBox);    // Output: "object" (null is technically an object type in JavaScript)

// Type conversion (be cautious with potential data loss)
let ageString = String(age); // Convert number to string
let convertedAge = Number(name); // Convert string (assuming it's a valid number) to number (might result in NaN if conversion fails)

console.log(ageString);  // Output: "30" (string representation of the number)
console.log(convertedAge); // Output: Might be a valid number if "name" contains a number, otherwise NaN (Not a Number)

// Arithmetic operations on numbers
let sum = age + pi;
let difference = age - 5;

console.log(sum);        // Output: 33.14159
console.log(difference); // Output: 25

// String concatenation (joining strings)
let greeting = "Hello, " + name + "!";
console.log(greeting); // Output: "Hello, Alice!"

// Accessing object properties using dot notation
let personsLastName = person.lastName;
console.log(personsLastName); // Output: "Smith"

// Accessing array elements by index (starting from 0)
let firstFruit = fruits[0];
console.log(firstFruit); // Output: "apple"


//To run the file
//node DataTypes.js