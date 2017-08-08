# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
##  ES5 vs. ES6

Table of Contents
-----------------

- [x] [Constants](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const)
- [ ] [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [ ] [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ ] [Syntactical sugar ](https://en.wikipedia.org/wiki/Syntactic_sugar)
- [ ] [Prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [ ] [ES5, ES6, ES2016, ES.Next](http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/)
- [ ] [Getting Started with ES6](http://weblogs.asp.net/dwahlin/getting-started-with-es6-%E2%80%93-the-next-version-of-javascript)

-----------------

## Constants
- Constants are block-scoped, can't be changed through re-assignment, and can't be redeclared
- `const` are read-only but doesn't guarantee Immutable. For instance, object's content can be altered
- `const` cannot share its name with function or variable in same scope
- `const` has a naming convention of all uppercase
```
const MY_FAV = 7;

// Throws an error
MY_FAV = 20;

// Prints: 7
console.log(MY_FAV);

// Trying to redeclare will throw an error
const MY_FAV = 20;

// variable with same name
let MY_FAV = 20;

// throws an error, missing initializer in const declaration
const FOO; 

// const also works on objects
const MY_OBJECT = {'key': 'value'};

// Attempting to overwrite the object throws an error
MY_OBJECT = {'OTHER_KEY': 'value'};

// However, object keys are not protected, reassigning key value is possible
MY_OBJECT.key = 'otherValue';

// SAME with arrays
const MY_ARRAY = [];
// It's possible to push items into the array
MY_ARRAY.push('A'); // ["A"]
// However, assigning a new array to the variable throws an error
MY_ARRAY = ['B'];
```
----------------------------

## Classes

----------------------------

## Template literals

----------------------------

## Syntactical sugar

----------------------------

## Prototypal inheritance

----------------------------

## ES5, ES6, ES2016, ES.Next

----------------------------

## Getting Started with ES6

----------------------------
