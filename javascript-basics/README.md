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
- [ ] [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [ ] [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [ ] [Loops and iterations](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [ ] [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [ ] [Decoupling Your HTML, CSS, and JavaScript](http://philipwalton.com/articles/decoupling-html-css-and-javascript/)

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

-----------------

## Loops and iterations

-----------------

## Functions

-----------------

## Decoupling Your HTML, CSS, and JavaScript
