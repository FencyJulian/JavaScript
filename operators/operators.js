// Declaring Variables with Different Data Types

let name = "Alice"; // String (text data)
let age = 30; // Number (numerical data)
let isLoggedIn = true; // Boolean (true or false)
let color; // Undefined (declared but not assigned)

// Assigning a value to an undefined variable
color = "blue"; // String

// Declaring an empty object
let emptyObject = {};

// Declaring an empty array
let numbers = [];

// Demonstrating Type Checking (optional)
console.log(typeof name);        // Output: "string"
console.log(typeof age);        // Output: "number"
console.log(typeof isLoggedIn);  // Output: "boolean"
console.log(typeof color);       // Output: "string"
console.log(typeof emptyObject); // Output: "object"
console.log(typeof numbers);     // Output: "object" (arrays are technically objects in JavaScript)


// Arithmetic Operators on Numbers

let sum = age + 5;
let difference = age - 10;
let product = age * 2;
let quotient = age / 3;
let remainder = age % 2; // Modulo operator (remainder after division)

console.log(sum);        // Output: 35
console.log(difference); // Output: 20
console.log(product);    // Output: 60
console.log(quotient);   // Output: 10 (decimal part truncated by default)
console.log(remainder);  // Output: 0 (even number)


// String Concatenation (joining strings)

let greeting = "Hello, my name is " + name + ".";
console.log(greeting); // Output: "Hello, my name is Alice."


// Comparison Operators

let isAdult = age >= 18;
let isEqual = age === 30; // Strict comparison (checks both value and type)
let isNotEqual = name !== "Bob";

console.log(isAdult);   // Output: true
console.log(isEqual);  // Output: true
console.log(isNotEqual); // Output: true


// Logical Operators

let isLoggedInAndAdult = isLoggedIn && isAdult;
let isLoggedInOrAdult = isLoggedIn || isAdult;
let isNotLoggedIn = !isLoggedIn;

console.log(isLoggedInAndAdult); // Output: true
console.log(isLoggedInOrAdult);  // Output: true (since at least one condition is true)
console.log(isNotLoggedIn);      // Output: false


// Increment and Decrement Operators

age++;   // Increment age by 1 (postfix increment)
let newAge = age--; // Decrement age by 1 (predecrement, returns the original value before decrementing)

console.log(age);      // Output: 31 (after increment)
console.log(newAge);   // Output: 31 (original value before decrement)


// Assignment Operators

let x = 10;
x += 5;  // Equivalent to x = x + 5; (shorthand for addition assignment)
x -= 2;  // Equivalent to x = x - 2;

console.log(x); // Output: 13

// There are similar assignment operators for multiplication (*=), division (/=) and others.


// Conditional Statements (if...else)

let grade = 85;

if (grade >= 90) {
  console.log("Excellent!");
} else if (grade >= 80) {
  console.log("Very good!");
} else if (grade >= 70) {
  console.log("Good job!");
} else {
  console.log("You can do better.");
}


// Loops (for loop)

for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i); // Print "Iteration:" followed by the current loop counter (0 to 4)
}


// Functions (reusable blocks of code)

function calculateArea(length, width) {
  return length * width;
}

let area = calculateArea(5, 4);
console.log("Area:", area); // Output: "Area: 20"

// This code demonstrates various aspects of variables, operators, and control flow in JavaScript.
// Feel free to experiment and modify it to gain a deeper understanding!
