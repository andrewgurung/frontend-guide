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

-----------------

## Control flow and error handling

-----------------

## Loops and iterations

-----------------

## Functions

-----------------

## Decoupling Your HTML, CSS, and JavaScript
