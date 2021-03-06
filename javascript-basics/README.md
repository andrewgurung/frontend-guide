# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
## JavaScript Basics

Table of Contents
-----------------

- [x] [Language basics crash course](https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/JavaScript_basics)
- [x] [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [x] [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [x] [Loops and iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [x] [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [x] [Decoupling Your HTML, CSS, and JavaScript](http://philipwalton.com/articles/decoupling-html-css-and-javascript/)

-----------------

## Language basics crash course
- JavaScript (JS for short) is a full-fledged `dynamic programming language` when applied to HTML can provide dynamic interactivity on websites
- Dynamic programming language: Operations can be done at runtime. Eg. Changing variable type or adding properties/methods to object is possible while program is running

### Hello World
1. Create a `main.js` file under `scripts` folder
2. In `index.html` file add the following line before the closing `</body>` tag
```
<script src="scripts/main.js"></script>
```
3. Add the following code to `main.js`
```
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
```

### Variables
- Variables in JS are case sensitive. `myVariable` is different than `myvariable`

### Data types
1. String
2. Number
3. Boolean
4. Array
5. Object
6. null
7. undefined

### Comments
```
/*
Multi-line Comment
*/

// Single line comment
```

### Operators
1. Addition: `+`
2. Subtraction, Multiplication, Division: `-`,`*`,`/`
3. Assignment: `=`
4. Equality: `===`
5. Not, Does not equal: `!`, `!==`

### Conditionals
```
var iceCream = 'chocolate';
if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
}
```

### Functions
- Way of packaging functionality that you wish to reuse
- Note: The return statement tells the browser to return the result out to use. Otherwise variables defined inside functions are only available inside those functions
```
function multiply(num1, num2) {
  return num1 * num2;
}
multiply(4,7);
multiply(20,20);
```

### Events
```
document.querySelector('html').onclick = function() {
  alert('Stop clicking');
}
```

### Local Storage
```
localStorage.setItem('name', myName);
var storedName = localStorage.getItem('name');
```

-----------------

## Grammar and types
### Declarations
1. var: Declares a variable
2. let: Declares a block-scoped, local variable
3. const: Declares a block-scoped, read-only variable

### Variables
- Must start with letter, underscore `_`, or dollar sign `$`
- Subsequent characters can be digits (0-9)
- Unicode letters can be used in variables
- Variable declared using `var` or `let` with no assigned value has a value of `undefined`
- Undeclared `var` if tried to access will result in `ReferenceError`
- `undefined` can be used to check if a variable has a value
```
var a;
console.log('The value of a is ' + a); // The value of a is undefined

console.log('The value of c is ' + c); // Uncaught ReferenceError: c is not defined

if (input === undefined) {
  console.log('Empty');
}
```
- `undefined` converts to `NaN` when used in numeric context
```
var a;
a + 2; // NaN
```
- Variable declared outside of `function` is a `global` variable which can be accessed
- ECMAScript 2015 introduced the concept of block-scoping through `let` variables
```
if (true) {
  var x = 5;
}
console.log(x);  // x is 5

if (true) {
  let y = 5;
}
console.log(y);  // ReferenceError: y is not defined
```

### Variable hoisting
- `var` are hoisted
- `let` and `const` are not hoisted
- Eventhough `var` variables are hoisted, the value will still be `undefined`
- Best Practice: `var` statements should be at the top of a function
```
console.log(x); // undefined
var x = 3;

console.log(y); // ReferenceError
let y = 3;
```

### Function hoisting
- Function declaration gets hoisted
- Function expression does not get hoisted
```
foo(); // Foo
function foo() {
	console.log('Foo');
}

baz(); // TypeError: baz is not a function
var baz = function() {
	console.log('baz');
};
```

### Global variables
- In web pages, `window` is the global Object
- Global variables can be set and accessed using the `window.variable` syntax

### Constant
- read-only
- `const` variable cannot be declared with the same name `function` or `variable` in same scope

### Data type conversion
- JS is a dynamically typed language. The data type need not be specified during declaration
- Data type can be changed without errors

### Converting string to Number
- parseInt()
- parseFloat()
- Unary plus
```
'1.1' + '1.1' = '1.11.1'
(+'1.1') + (+'1.1') = 2.2  
```

### Literals
Literals are fixed values that can be literally provided in your script
1. Array literals: `var coffees = ['French Roast', 'Colombian', 'Kona'];` Can be accessed using `coffees[0]`
2. Boolean literals: `true`, `false`.
3. Floating-point literals: `3.1415926, -.123456789, -3.1E+12`
4. Integers: Can be expressed as `decimal (base 10)`, `hexadecimal (base 16)`, `octal (base 8)` and `binary (base 2)`
5. Object literals: `var car = { myCar: 'Saturn', getCar: carTypes('Honda'), special: sales };`
6. RegExp literals: Enclosed between slashes. `var re = /ab+c/;`
7. String literals: Enclosed between double `"` or single `'` quote. `'1234', 'one line \n another line'`
8. Template literals: ES2015 introduced template literals.
  ```
  var name = 'Bob', time = 'today';
  `Hello ${name}, how are you ${time}?`
  ```
### Using special characters in strings
```
\b	Backspace
\n	New line
\t	Tab
\'	Apostrophe or single quote
\"	Double quote
\\	Backslash character
\uXXXX	The Unicode character
```

### Escaping characters
- Use backslash `\` to escape characters. Eg: `var quote = "He read \"The Cremation of Sam McGee\" by R.W. Service.";`
-----------------

## Control flow and error handling
### if...else statement
```
if (condition_1) {
  statement_1;
} else if (condition_2) {
  statement_2;
} else {
  statement_last;
}
```

### Falsy values
- false
- null
- 0
- undefined
- NaN
- empty string ("")
Note:
```
var b = new Boolean(false);
if (b) // this condition evaluates to true
```

### switch statement
- `break` statement is optional but helps to break out of `switch` once the matched statement is executed
```
switch (fruittype) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Apples':
    console.log('Apples are $0.32 a pound.');
    break;
  default:
   console.log('Sorry, we are out of ' + fruittype + '.');
}
```

### Exception handling
- Throw Exception: `throw` statement
- Handle Exception: try...catch statement
- `finally` block: Executes whether or not an exception is thrown

### Utilizing Error objects
```
function doSomethingErrorProne() {
  throw (new Error('The message'));
}
....
try {
  doSomethingErrorProne();
} catch (e) {
  console.log(e.name); // logs 'Error'
  console.log(e.message); // logs 'The message' or a JavaScript error message)
}
```

### Promises
- ECMAScript2015 supports Promise objects allowing you to control the flow of deferred and asynchronous operations
- A Promise is in one of these states:
  1. pending: initial state, not fulfilled or rejected.
  2. fulfilled: successful operation
  3. rejected: failed operation.
  4. settled: the Promise is either fulfilled or rejected, but not pending.

### Loading an image with XHR
- [Code Sample](promise-image-load)
```
function imgLoad(url) {
    // Create new promise with the Promise() constructor with two parameters, resolve and reject
    return new Promise(function(resolve, reject) {
        ...
        request.onload = function() {
            if (request.status === 200) {
                // If successful, resolve the promise
                resolve(request.response);
            } else {
                // If it fails, reject the promise
                reject(Error('Image didn\'t load successfully; error code:' + request.statusText));
            }
        }
    });
}

// Call the function to load image, chain the promise then() method which contains two callbacks
imgLoad('http://xyz.com/image,jpg').then(
  // The first callback runs when the promise resolves
  function(response) {
      doSomething(response);
  },
  // The second callback runs when the promise rejects
  function(Error) {
      console.log(Error);
  }
);
```
-----------------

## Loops and iterations
The statements for loops provided in JavaScript are:

### for statement
```
for ([initialExpression]; [condition]; [incrementExpression])
  statement
```

### do...while statement
```
do
  statement
while (condition);
```

### while statement
- Warning: Avoid infinite loops
```
while (condition)
  statement
```

### labeled statement
```
label :
   statement
```

### break statement
- label is optional
- `break` terminates the execution of the loop entirely
- When you use break without a label, it terminates the innermost enclosing while, do-while, for, or switch immediately and jumps to the next outer statement
- When you use break with a label, it terminates the specified labeled statement
```
break [label];
```
- Breaking a labeled statement
```
var x = 0;
labelCancelLoops:
while (true) {
  x += 1;
  console.log(x);
  if (x === 10) {
    break labelCancelLoops;
  }
}
```
### continue statement
- `continue` does not terminate the execution of the loop entirely
```
continue [label];
```
Be careful:
```
var i = 0;
while (i < 5) {
  i++;
  if (i == 3) {
    continue;
  }
  console.log(i); // 1 2 4 5. '3 won't be printed but 4 and 5 will be continued
}
```

### for...in statement
- Iterates a specified variable over all the enumerable properties of an object
- Iterates over user-defined properties
```
for (variable in object) {
  statements
}
```


### for...of statement
- Iterates over property values
```
for (variable of object) {
  statement
}
```

### for..in Vs for..of
```
var arr = [3, 5, 7];
arr.foo = 'hello';

for (var i in arr) {
   console.log(i); // "0", "1", "2", "foo". Doesn't print hello
}

for (var i of arr) {
   console.log(i); // 3, 5, 7. Doesn't print array properties/indices (0,1,2) and user defined property + value
}
```
-----------------

## Functions
### Function declaration
- Hoisted
- Parameter: Primitive parameter are passed by value. Objects can also be passed as parameter
- NOTE: If function modifies an object parameter, its change will be visible outside the function. Whereas changes to primitive parameters (like number) will not be reflected
```
function fn_name(parameter) {
  statement;
}
```

### Function expression
- Not hoisted
- Functions created using function expression can be `anonymous`
- Convenient when passing a function as an argument to another function

```
var square = function(number) { return number * number; };
var square = function square(number) { return number * number; };
```

### Calling functions
- A function is executed only when it is `called`
- Function must be in scope
- Function declaration are hoisted

### Function scope
- Function defined in the global scope can access all variables defined in the global scope
- Function defined inside another function can also access all variables defined in its parent function and any other variable to which the parent function has access

### Recursion
- Some algorithms cannot be simple iterative loops. Eg: getting all the nodes of a tree structure
Three ways for a function to refer to itself
1. the function's name
2. arguments.callee
3. an in-scope variable that refers to the function

```
var foo = function bar() {
   // statements go here
};
```
1. bar()
2. arguments.callee()
3. foo()

### Nested functions and closures
- A closure is a typically a function that can have free variables together with an environment that binds those variables
- A nested function is a closure
- A closure must preserve the arguments and variables in all scopes it references
- The inner function can be accessed only from statements in the outer function
- The inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function

### Closures
- A closure is created when the inner function is somehow made available to any scope outside the outer function
- If both inner and outer function uses the same variable name, there is no way to refer to the variable in outer scope again
```
var pet = function(name) {

  var getName = function() {
    return 'Nice ' + name; //Inner function has access to the "name" variable in outer function
  }
  return getName; // Return the inner function, thereby exposing it to outer scopes
}

myPet = pet('Dog');
myPet(); // Nice Dog
```

### Using the arguments object
- The arguments are maintained in an array-like object. Syntax: `arguments[i]`
- Total arguments count: `arguments.length`

### Function parameters
Starting from ES2015 there are two **new** kinds of parameters:
1. Default parameters
```
function multiply(a, b = 1) {
  return a * b;
}
multiply(5); // 5
```
2. Rest parameters
- Allows us to represent indefinite number of arguments
```
function fun1(...theArgs) {
  console.log(theArgs.length);
}
fun1();
fun1(5, 6, 7); // 3
```

### Arrow functions
- Shorter syntax alternative to function expressions and lexically binds the `this` value
- Always anonymous
```
arrayList.map(function(s) { return s.length; });
arrayList.map(s => s.length);
```

### Lexical `this`

1. Before ES6
`this` refers to global `this` instead of Person `this`
```
function Person() {
  this.age = 0;

  setInterval(function growUp() {
    this.age++; // Points to global `this`
  }, 1000);
}
```

#### Hack:
```
function Person() {
  var self = this;
  self.age = 0;

  setInterval(function growUp() {
    self.age++; // Points to self which is the correct Person
  }, 1000);
}
```

2. Using Arrow functions
```
function Person() {
  this.age = 0;

  setInterval(() => {
      this.age++; // |this| properly refers to the person object
  }, 1000);
}
```

### Predefined functions
JS has several top-level, built-in functions
- `eval()`: Evaluates JavaScript code represented as a string.
- `isNaN()`: Determines whether a value is NaN or not
- `parseFloat()`: Parses a string argument and returns a floating point number.
-----------------

## Decoupling Your HTML, CSS, and JavaScript
A back-end developer should be able to change the markup in an HTML template without worrying about accidentally breaking a CSS rule or some JavaScript functionality

### Anti-Patterns
1. Avoid Overly Complex Selectors
- Overly complex selector has its CSS extremely coupled with HTML
- Any changes to HTML structure might break CSS style
- Solution: Use specific classes which requires more classes in HTML but decouples it with CSS
```
/* Bad */
#sidebar section:first-child h3 + p { }
#sidebar ul > li > ul { }

/* Good */
.submenu { }
```

2. Classes With More Than One Responsibility
- Do not reuse CSS classes for JavaScript hooks or listeners
- Solution: Add `js-` prefix for all JavaScript hooks
- `js-` prefix makes it clear that changing the CSS class name will affect JavaScript
```
/* Bad */
<button class="add-item">Add to Cart</button>

/* Good */
<button class="js-add-to-cart add-item">Add to Cart</button>
```

3. State classes
- Use the prefix `is-*` to define class selectors that alter the state of a visual component
```
.pop-up.is-visible { }
```

Note:
- The state class `.is-visible` is chained to the component class `pop-up`
- State class styles describe the state of a component, they should not appear on their own

4. JavaScript “Selectors”
- jQuery and JS document query selectors are extremely easy to use
- Significantly slower
- Tightly coupled with HTML structure. Any change in HTML would break the JS selector

```
/* Bad */
var saveBtn = document.querySelector("#modal div:last-child > button:last-child")

/* Good */
var saveBtn = document.querySelector(".js-save-btn")
```

### Conclusion
- At first glance it may seem like using a lot of classes in the markup is a sign of tight coupling
- But classes should be the glue that connects your HTML, CSS, and JavaScript together
- Adding classes gains in predictability and maintainability
- Easier for new developer to write and debug codes as it is easier to find matching class name instead of understanding complex selector chain
