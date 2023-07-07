#
## Q.1 Explain Hoisting in JavaScript
* Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their scope during the compilation phase, allowing them to be accessed before their actual position in the code
* In JavaScript, when the code is executed, it goes through two phases: compilation and execution. During the compilation phase, the JavaScript engine scans through the code and hoists (moves) variable and function declarations to the top of their containing scope.
* Only variable declarations using var are hoisted and function declarations are entirely hoisted, including both the declaration and the function body.
```
console.log(x); // Output: undefined
var x = 5;



sayHello(); // Output: "Hello!"
function sayHello() {
  console.log("Hello!");
}

```
#
## Q.2 Explain Temporal Dead Zone?
* The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when accessing a variable before it is declared using the let or const keywords. It is a specific period within a lexical scope where variables exist but cannot be accessed or assigned a value.
* The TDZ occurs between the start of the scope and the point of declaration of a let or const variable. During this period, any attempt to access or assign a value to the variable will result in a ReferenceError. This behavior helps catch potential bugs caused by accessing variables before they are intentionally declared.

```
console.log(x); // Throws a ReferenceError
let x = 5;
```

#
## Q.3 Difference between var & let?
* The var and let keywords are used for variable declarations in JavaScript, but they have some differences in terms of scope, hoisting, and redeclaration. Here are the main differences between var and let:
    * **Scope**: Variables declared with var have function scope or global scope, while variables declared with let have block scope. 
    ```
        // Example 1: var with function scope
        function exampleFunc() {
         var x = 1;
        if (true) {
        var x = 2; // Same variable x
        console.log(x); // Output: 2
            }
        console.log(x); // Output: 2
        }

        // Example 2: let with block scope
        function exampleFunc() {
        let y = 1;
        if (true) {
        let y = 2; // Different variable y
        console.log(y); // Output: 2
        }
        console.log(y); // Output: 1
        }

    ```
    *  **Hoisting**: Variables declared with var are hoisted to the top of their scope during the compilation phase, which means they can be accessed before their declaration. However, they are initialized with the value undefined until the assignment is made. 
    ``` 
    console.log(x); // Output: undefined
    var x = 5;

    console.log(y); // Throws a ReferenceError
    let y = 5;
    ```
    * **Redeclaration**: Variables declared with var allow redeclaration within the same scope without generating an error. The subsequent declaration simply overrides the previous one. In contrast, variables declared with let cannot be redeclared within the same block scope. Redeclaring a variable with let in the same scope will result in a SyntaxError.
    ```
        var x = 1;
        var x = 2; // Valid redeclaration

        let y = 1;
        let y = 2; // Throws a SyntaxError
    ```
#
## Q.4 What are the major features introduced in ECMAScript 6?

ECMAScript 6 (ES6), also known as ECMAScript 2015, introduced several major features and improvements to the JavaScript language. Some of the key features introduced in ES6 are:

* **let and const Declarations**: The let and const keywords were introduced as alternatives to var for declaring variables. let allows block-scoped variables, while const is used to declare constants that cannot be reassigned.

* **Arrow Functions**: Arrow functions provide a concise syntax for writing function expressions. They have a shorter syntax, lexical this binding, and do not create their own this, arguments, super, or new.target bindings.

* **Classes**: ES6 introduced class syntax for defining classes in JavaScript, providing a more familiar and structured way of defining objects and inheritance. Classes support constructor methods, inheritance, static methods, and more.

* **Modules**: ES6 introduced a standardized module format for JavaScript with the import and export keywords. Modules allow for better code organization, encapsulation, and dependency management.

* **Template Literals**: Template literals provide an improved way of working with strings. They allow embedding expressions within backticks (`...`) and support multi-line strings, string interpolation, and tagged templates.

* **Enhanced Object Literals**: Object literals gained new syntax features, including concise methods and properties, computed property names, shorthand property and method names, and the ability to set a prototype using `__proto__`.

* **Destructuring Assignment**: Destructuring assignment allows extracting values from arrays or objects into individual variables, making it easier to work with complex data structures.

* **Spread and Rest Operators**: The spread operator (...) and rest parameters (...) were introduced. The spread operator allows expanding elements of an array or object, while rest parameters allow representing an indefinite number of function arguments as an array.

* **Promises**: Promises provide a standardized way of working with asynchronous operations. They simplify asynchronous programming and make it easier to handle success and failure callbacks.

* **Iterators and Generators**: ES6 introduced the concept of iterators and generators. Iterators provide a protocol for defining a sequence of values, while generators allow creating iterators with a more concise syntax using the function* declaration.

#
## Q.5 What is the difference between let and const ?
* The let and const keywords in JavaScript are used for variable declarations, but they have some differences in terms of reassignment and scope. Here are the main differences between let and const:
* **Reassignment**: Variables declared with let can be reassigned to a new value, while variables declared with const cannot be reassigned. Once a value is assigned to a const variable, it remains constant and cannot be changed.
```
let x = 5;
x = 10; // Valid reassignment

const y = 5;
y = 10; // Throws a TypeError: Assignment to constant variable.
```

* **Initialization**: Variables declared with let can be declared without an initial value and assigned later. On the other hand, variables declared with const must be initialized with a value at the time of declaration.
```
let x; // Declaration without initialization
x = 5; // Assignment later

const y; // Throws a SyntaxError: Missing initializer in const declaration

```

* **Scope**: Both let and const have block scope, meaning they are only accessible within the nearest enclosing block (a pair of curly braces {}). They are not hoisted to the top of their scope like variables declared with var.
```
if (true) {
  let x = 5;
  const y = 10;
  console.log(x); // Output: 5
  console.log(y); // Output: 10
}

console.log(x); // Throws a ReferenceError
console.log(y); // Throws a ReferenceError

```

* **Mutable vs. Immutable**: Variables declared with let are mutable, meaning their values can be changed. On the other hand, variables declared with const are immutable, meaning their values cannot be changed once assigned. 

#
## Q.6  What is template literals in ES6 and how do you use them?

* Template literals, introduced in ES6 (ECMAScript 2015), provide an improved way of working with strings in JavaScript. They allow embedding expressions within backticks (`...`) and support multi-line strings, string interpolation, and tagged templates.
* Here's an example:
```
const name = "Alice";
const age = 25;

const message = `My name is ${name} and I'm ${age} years old.`;
console.log(message);

```
* Template literals also support multi-line strings without the need for escape characters or concatenation. Here's an example:
```
const multiLine = `
  This is a
  multi-line
  string.
`;

console.log(multiLine);

```
* Template literals can also be used with tagged templates, where a tag function is placed before the template literal. The tag function can process the template and its expressions in a custom way. Here's a basic example:
```
function myTag(strings, ...values) {
  console.log(strings); // Array of string literals
  console.log(values); // Array of interpolated values
}

const name = "Alice";
const age = 25;

myTag`My name is ${name} and I'm ${age} years old.`;

```

* Template literals provide a more readable and convenient syntax for working with strings, especially when combining variables or expressions within the string content. They are widely used in JavaScript for string interpolation, multi-line strings, dynamic HTML generation, and more.

#
## Q.7 What’s difference between map & forEach?
* The map() and forEach() are both array methods in JavaScript used for iterating over arrays and performing operations on their elements. 
* However, they have some differences in terms of return value and their intended use. Here are the main differences between map() and forEach():

* **Return Value**: The map() method returns a new array with the results of applying a provided function to each element of the original array. It creates a new array by transforming each element based on the return value of the callback function.

```        

const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);

console.log(doubledNumbers); // Output: [2, 4, 6, 8]
```

* forEach()  does not return a new array. It simply executes a provided function once for each array element. It is primarily used for performing side effects like logging, updating variables, or making changes to external objects.

```        

const numbers = [1, 2, 3, 4];
numbers.forEach((num) => console.log(num * 2));
```



* **Use Case**: The map() method is typically used when you want to transform each element of an array into a new value or create a new array based on the original array's elements. It is commonly used when you need to perform a one-to-one mapping operation.
* The forEach() method, on the other hand, is used when you want to perform a certain operation on each element of an array without creating a new array. It is useful for iterating over arrays and performing side effects or actions for each element.

```
const numbers = [1, 2, 3, 4];
const doubledNumbers = numbers.map((num) => num * 2);

numbers.forEach((num) => console.log(num * 2));

console.log(doubledNumbers); // Output: [2, 4, 6, 8]
```
* In the above code, map() is used to create a new array doubledNumbers with the elements doubled, while forEach() is used for logging each element multiplied by 2 without creating a new array.

#
## Q.8 How can you destructure objects and arrays in ES6?
* . Destructuring allows to unpack and assign values in a more concise and expressive way.
* **Destructuring Objects:** To destructure an object, you use curly braces {} and provide the names of the properties you want to extract as variables. The variable names should match the property names in the object.
```
const person = { name: 'Alice', age: 25 };

const { name, age } = person;

console.log(name); // Output: 'Alice'
console.log(age); // Output: 25

```
* **Destructuring Arrays:** To destructure an array, you use square brackets [] and provide variable names for the elements you want to extract. The order of the variables matches the order of the elements in the array.
```
const numbers = [1, 2, 3, 4];

const [a, b, c, d] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 3
console.log(d); // Output: 4
```

* rest operator (...) also used to assign the remaining elements of an array to a single variable.
```
const numbers = [1, 2, 3, 4, 5];

const [a, b, ...rest] = numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(rest); // Output: [3, 4, 5]
```

* Destructuring can also be used in function parameters to extract values directly from objects or arrays passed as arguments.
```
function greet({ name, age }) {
  console.log(`Hello, ${name}! You are ${age} years old.`);
}

const person = { name: 'Alice', age: 25 };
greet(person); // Output: 'Hello, Alice! You are 25 years old.'
```

#
## Q.9 How can you define default parameter values in ES6 functions?
* In ES6 (ECMAScript 2015) and later versions of JavaScript, you can define default parameter values for function parameters. Default parameter values allow you to specify a default value that will be used if no argument or an undefined argument is passed to the function. Here's how you can define default parameter values in ES6 functions:
```
function greet(name = 'Guest') {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: 'Hello, Guest!'
greet('Alice'); // Output: 'Hello, Alice!'

```
* One can define default values for multiple parameters in a function:
```
function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(5)); // Output: 5
console.log(multiply(5, 3)); // Output: 15
```
* Default parameter values are evaluated at the time of function execution. This means that expressions, including function calls, can be used as default values:
```
function greet(name = getDefaultName()) {
  console.log(`Hello, ${name}!`);
}

function getDefaultName() {
  return 'Guest';
}

greet(); // Output: 'Hello, Guest!'
```
* Default parameter values offer a convenient way to provide fallback values for function parameters, making functions more flexible and robust. They help in reducing the need for explicit checks for undefined or missing arguments.

#
## Q.10 What is the purpose of the spread operator (...) in ES6?

* The spread operator (...) in ES6 (ECMAScript 2015) has several useful purposes. It allows you to manipulate arrays and objects in a concise and flexible way. Here are the main purposes of the spread operator:

* **Array Spread**: The spread operator can be used to expand an array into individual elements. It allows you to copy the elements of an existing array into a new array or pass individual array elements as arguments to a function.
 ```       
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]
```


* **Object Spread**: The spread operator can also be used to create a new object by copying the properties of an existing object and adding new properties.
```
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };

console.log(obj2); // Output: { x: 1, y: 2, z: 3 }
```

* **Function Arguments:** The spread operator can be used to pass an array's elements as individual arguments to a function.
```
function sum(a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];
const result = sum(...numbers);

console.log(result); // Output: 6
```

* **Array/Object Destructuring**: The spread operator can be used in array or object destructuring to extract the remaining elements or properties into a separate array or object.


```
const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
```


* The spread operator can be used in object destructuring to collect the remaining properties into a separate object.

