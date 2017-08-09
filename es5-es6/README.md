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
- [x] [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [x] [Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [x] [Syntactical sugar ](https://en.wikipedia.org/wiki/Syntactic_sugar)
- [x] [ES5, ES6, ES2016, ES.Next](http://benmccormick.org/2015/09/14/es5-es6-es2016-es-next-whats-going-on-with-javascript-versioning/)
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
- `class`: Syntactical sugar over JavaScript's existing prototype-based inheritance
- Class members like methods or constructor are defined within `{}`
- Constructor: Special method for creating and initializing an object created with a class
  - A constructor can use the `super` keyword to call the constructor of a parent class

### Class declarations
- Unlike function declaration, class declaration is **NOT** hoisted
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Class Expressions
- Class Expressions is **NOT** hoisted
```
var Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}
```

### Prototype and Static methods
- Prototype: Called through object instance
- Static: Cannot be called through object instance. Instead must be called directly using classname
```
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // Prototype method
  get area() {
    return this.calArea();
  }

  // Prototype method
  calArea() {
    return this.height * this.width;
  }

  // Static method
  static calPerimeter(height, width) {
    return 2 * height + 2 * width;
  }
}

var r1 = new Rectangle(2,3); // 6
console.log(r1.area);
console.log(Rectangle.calPerimeter(2, 3)); // 10
```

### Calling static or prototype method without an object
- Returns undefined since there isn't any autoboxing
```
class Animal {
  speak() {
    return this;
  }
  static eat() {
    return this;
  }
}

let obj = new Animal();
obj.speak(); // Animal {}
let speak = obj.speak;
speak(); // undefined

Animal.eat() // class Animal
let eat = Animal.eat;
eat(); // undefined
```

### Sub classing with extends
- If there is a constructor present in sub-class, it needs to first call super() before using `this`
```
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Dog extends Animal {
  speak() {
    console.log(this.name + ' barks.');
  }
}

var d = new Dog('Mitzie');
d.speak(); // Mitzie barks.
```

### Extend regular class without constructor method defined in parent
- Object.setPrototypeOf(child, parent)
```
var Animal = {
  speak() {
    console.log(this.name + ' makes a noise.');
  }
};

class Dog {
  constructor(name) {
    this.name = name;
  }
}

Object.setPrototypeOf(Dog.prototype, Animal);// If you do not do this you will get a TypeError when you invoke speak
var d = new Dog('Mitzie');
d.speak(); // Mitzie makes a noise.
```

### Use of super()
```
class Cat {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + ' makes a noise.');
  }
}

class Lion extends Cat {
  speak() {
    super.speak();
    console.log(this.name + ' roars.');
  }
}

var l = new Lion('Fuzzy');
l.speak();
// Fuzzy makes a noise.
// Fuzzy roars.
```
----------------------------

## Template literals
- String literals allowing embedded expressions enclosed in \` \` back ticks

### Multi-line strings
```
console.log(`string text line 1
string text line 2`);
// "string text line 1
// string text line 2"
```

### Expression interpolation
```
var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."
```

### Nesting templates
In ES5:
```
var classes = 'header'
classes += (isLargeScreen() ?
   '' : item.isCollapsed ?
     ' icon-expander' : ' icon-collapser');
```

In ES2015 with template literals and without nesting:
```
const classes = `header ${ isLargeScreen() && item.isCollapsed ?
    'icon-expander' : 'icon-collapser' }`;
```

In ES2015 with nested template literals:
```
const classes = `header ${( isLargeScreen() &&
 `icon-${item.isCollapsed ? 'expander' : 'collapser'}` )}`;
```

### Tagged template literals
- Tags allow you to parse template literals with a function
- First argument: String values in array format
- Rest of the arguments: Expressions i.e ${..}
- Returns a composed string
- Called by invoking tag_function_name\`str1 ${exp1} str2 ${exp2} str3\`

```
function myTag(strings, personExp, ageExp) {
  // Value passed into arguments
  // strings = ['that ', ' is a ', ' human']
  // personExp = Mike
  // ageExp = 28

  return ...
}

var person = 'Mike';
var age = 28;
var output = myTag`that ${ person } is a ${ age } human`;
```

### Raw strings
- Additional feature of template literal, where the first argument of tagged template, can be accessed as it was entered without processing escape sequences
```
function tag(strings, ...values) {
  console.log(strings.raw[0]);
}

tag`string text line 1 \n string text line 2`;
// logs "string text line 1 \n string text line 2" ,
// including the two characters '\' and 'n'
```
----------------------------

## Syntactical sugar
- Syntactic sugar: Syntax designed to make things easier to read or to express
- If removed from language, doesn't effect the language at all
- Syntactic sugar for `a = a + b` is `a += b`
- Desugaring: Compilers and static analyzers often expand sugared constructs into more fundamental constructs before processing
----------------------------

## ES5, ES6, ES2016, ES.Next
- ECMAScript: A language standardized by ECMA International and overseen by the TC39 committee. This term is usually used to refer to the standard itself
- JavaScript: Implementations of the ECMAScript standard
- ECMAScript 5 (ES5): The 5th edition of ECMAScript, standardized in 2009. This standard has been implemented fairly completely in all modern browsers
- ECMAScript 6 (ES6)/ ECMAScript 2015 (ES2015): The 6th edition of ECMAScript, standardized in 2015
- ECMAScript YYYY: Naming convention of ECMAScript
ECMAScript Proposals: Proposed features move through a process of five stages: Strawman, Proposal, Draft, Candidate and Finished

----------------------------
