// 1. for loop (with initialization, condition, and increment/decrement)
console.log("**for loop**");
for (let i = 0; i < 10; i++) {
    console.log("Iteration:", i); // Prints "Iteration:" followed by the loop counter (0 to 9)
  }
  
  // Explanation:
// `let i = 0;`: Initializes a loop counter variable `i` to 0.
// `i < 10;`: This condition checks if `i` is less than 10. The loop continues as long as this condition is true.
//`i++`: Increments `i` by 1 after each iteration of the loop.
  
  // 2. while loop (continues as long as the condition is true)
  
  let count = 1;
  console.log("**while loop**");
  while (count <= 5) {
    console.log("Count:", count);
    count++; // Increment count inside the loop to avoid an infinite loop
  }
  
// Explanation:
// - `let count = 1;`: Initializes a loop counter variable `count` to 1.
//- `while (count <= 5) { ... }`: The code within the curly braces executes as long as `count` is less than or equal to 5.
// - `count++`: Increments `count` by 1 inside the loop to move towards the exit condition.
  
// 3. do...while loop (executes at least once, then checks the condition)
  
  let j = 0;
  console.log("**do while loop**");
  do {
    console.log("Value of j:", j);
    j++;
  } while (j < 3);
  
  // Explanation:
  //  - `let j = 0;`: Initializes a loop counter variable `j` to 0.
  //  - `do { ... } while (j < 3);`: The code within the curly braces executes at least once, then the condition (`j < 3`) is checked.
  //  - If the condition is true, the loop continues.
  //  - If the condition is false (in this case, after the first iteration), the loop terminates.
  
  // 4. for...of loop (iterates over the elements of an array)
  
  let fruits = ["apple", "banana", "orange"];
  console.log("**for of loop**");
  for (let fruit of fruits) {
    console.log("Fruit:", fruit);
  }
  
  // Explanation:
  //  - `let fruits = ["apple", "banana", "orange"];`: Creates an array named `fruits` containing some fruits.
  //  - `for (let fruit of fruits) { ... }`: This loop iterates over each element (fruit) in the `fruits` array.
  //  - The variable `fruit` takes on the value of each element during each iteration.
  
  // 5. for...in loop (iterates over the properties of an object)
  
  let person = {
    firstName: "Bob",
    lastName: "Smith",
    age: 30
  };
  console.log("**for in loop**");
  for (let key in person) {
    console.log(key, ":", person[key]);
  }
  
  // Explanation:
  //  - `let person = { ... };`: Creates an object named `person` with properties like name and age.
  //  - `for (let key in person) { ... }`: This loop iterates over the properties (keys) of the `person` object.
  //    - The variable `key` takes on the name of each property during each iteration.
  //  - `person[key]`: Accesses the value of the property using the current `key`.
  
  //**Functions:**
  
//   // 1. Function declaration (reusable block of code with a name)
console.log("**functions**");
  function greet(name) {
    console.log("Hello,", name + "!"); // Use string concatenation
  }
  
  greet("Alice"); // Calling the function with an argument (name)
  
  // Explanation:
    // - `function greet(name) { ... }`: Defines a function named `greet` that takes one argument (`name`).
    // - `console.log("Hello,", name + "!");`: The code within the function body prints a greeting message using the provided name.
    // - `greet("Alice");`: Calls the `greet` function, passing "Alice" as the argument. This executes the function's code with "Alice" as the value for `name`.
  
  // 2. Function expression (anonymous function assigned to a variable)
  
  const calculateArea = function(length, width) {
    return length * width;
  };
  
  let area = calculateArea(5, 4);
  console.log("Area:", area); // Output: "20"

  // Explanation (continued):
//   - `const calculateArea = function(length, width) { ... }`: Defines an anonymous function and assigns it to the constant variable `calculateArea`.
//     - The function takes two arguments, `length` and `width`.
//     - `return length * width;`: Calculates the area and returns the result using the `return` statement.
//   - `let area = calculateArea(5, 4);`: Calls the `calculateArea` function with arguments 5 and 4, storing the returned value (area) in the `area` variable.
//   - `console.log("Area:", area);`: Prints the calculated area.

// 3. Function parameters and arguments (passing data to functions)

function sum(num1, num2) {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    console.error("Please provide valid numbers for addition.");
    return; // Exit the function if non-numeric arguments are provided
  }
  return num1 + num2;
}

let result = sum(10, 20);
console.log("Sum:", result); // Output: "Sum: 30"

let invalidResult = sum("hello", 5); // This will call the error message
console.log(invalidResult); // Output: "undefined" (since the function exits early)

// Explanation:
//   - `function sum(num1, num2) { ... }`: Defines a function named `sum` that takes two arguments, `num1` and `num2`, intended to be numbers.
//   - `if (typeof num1 !== "number" || typeof num2 !== "number") { ... }`: This check ensures that the arguments are actually numbers. If not, it displays an error message and exits the function using `return;`.
//   - `return num1 + num2;`: Calculates the sum and returns the result.
//   - `let result = sum(10, 20);`: Calls the `sum` function with valid numbers (10 and 20), storing the returned value in `result`.
//   - `let invalidResult = sum("hello", 5);`: Calls the `sum` function with an invalid argument ("hello"), which triggers the error message. The function then exits without a valid return value, so `invalidResult` becomes `undefined`.

// 4. Function scope (where variables are accessible)

let globalVariable = "This is global."; // Global variable, accessible anywhere

function someFunction() {
  let localVariable = "This is local."; // Local variable, only accessible within the function
  console.log(globalVariable); // Can access global variables from within functions
  console.log(localVariable); // Can access local variables within the function
}

someFunction();
console.log(globalVariable); // Still accessible
// console.log(localVariable); // This would cause an error (localVariable not defined outside the function)

// Explanation:
//   - `let globalVariable = "This is global.";`: Declares a global variable accessible throughout the code.
//   - `function someFunction() { ... }`: Defines a function named `someFunction`.
//   - `let localVariable = "This is local.";`: Declares a local variable named `localVariable` within the function, only accessible within that function's scope.
//   - `console.log(globalVariable);`: Prints the global variable from within the function.
//   - `console.log(localVariable);`: Prints the local variable from within the function.
//   - `someFunction();`: Calls the `someFunction`.
//   - `console.log(globalVariable);`: Prints the global variable again (still accessible).
//   - Attempting to access `localVariable` outside the function would result in an error because it's not defined in the global scope.


  