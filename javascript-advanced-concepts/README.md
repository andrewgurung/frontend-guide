# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
##  JavaScript Advanced Concepts

Table of Contents
-----------------

- [x] [Prototypal inheritance](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)
- [x] [Scoping](https://spin.atomicobject.com/2014/10/20/javascript-scope-closures/)
- [ ] [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [ ] [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [ ] [Event bubbling](http://javascript.info/tutorial/bubbling-and-capturing)
- [ ] [Apply, call, and bind](http://javascriptissexy.com/javascript-apply-call-and-bind-methods-are-essential-for-javascript-professionals/)
- [ ] [Callbacks and promises](https://www.quora.com/Whats-the-difference-between-a-promise-and-a-callback-in-Javascript)
- [ ] [Variable and function hoisting](http://adripofjavascript.com/blog/drips/variable-and-function-hoisting)
- [ ] [Currying](http://www.sitepoint.com/currying-in-functional-javascript/)
- [ ] [A Shift From Imperative To Declarative](http://www.tysoncadenhead.com/blog/the-state-of-javascript-a-shift-from-imperative-to-declarative#.Vz0WEZMrIUE)
- [ ] [Declarative vs. Imperative](http://developer.telerik.com/featured/three-ds-of-web-development-1-declarative-vs-imperative/)
- [ ] [What is Ajax](http://www.vandelaydesign.com/what-is-ajax-webdev/)
- [ ] [Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [ ] [jQuery Effects](http://learn.jquery.com/effects/intro-to-effects/)
- [ ] [jQuery Handling Events](http://learn.jquery.com/events/handling-events/)
- [ ] [JavaScript functions equivalent to jQuery](http://youmightnotneedjquery.com/)

-----------------

## Prototypal inheritance
- JavaScript follows a prototypal inheritance model instead of classical model
- For inheritance, JavaScript has only one construct: `objects`
- Each object has a private property `[[Prototype]]` that holds a link to another object called `prototype` which keep on chaining till `null` is reached
- `Object` sits on the top of prototype chain

### Inheritance with the prototype chain
1. Inheriting properties
- {a: 1, b: 2} ---> {b: 3, c: 4} ---> null
- child.[[Prototype]] has properties b and c
- child.[[Prototype]].[[Prototype]] is null
- Inherited properties are shadowed/overridden if child object has its own properties

```
var parent = { b: 3, c: 4 };
var child = Object.create(parent);

child.a = 1;
child.b = 2;

console.log(child.a); // 1
console.log(child.b); // 2
console.log(child.c); // 4
console.log(child.d); // undefined
```
2. Inheriting methods
- An inherited function acts just as any other property, including property `shadowing`
- `this` points to the `inheriting` object, not to the `prototype` object where the function resides

```
var parent = {
	a:2,
  m: function() {
		return this.a + 1;  
  }
};
console.log(parent.m()); // 3
var child = Object.create(parent);
child.a = 4;
console.log(child.m()); // 5
```

### Different ways to create objects
1. Syntax constructs
-  `var o = {a: 1};`
-  `o ---> Object.prototype ---> null`
2. Constructor
- Called with the `new` operator
```
function Graph() {
  this.vertices = [];
  this.edges = [];
}

Graph.prototype = {
  addVertex: function(v) {
    this.vertices.push(v);
  }
};

var g = new Graph();
```
3. Object.create()
- The `prototype` is the first argument
- `b ---> a ---> Object.prototype ---> null`
```
var a = {a: 1};
var b = Object.create(a);
console.log(b.a); // 1 (inherited)
```
4. class keyword
- ES2015 introduced `class`, `constructor`, `static`, `super`, and `extends`
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
### Performance
- Properties high up on the prototype chain can take longer for lookup
- `.hasOwnProperty()` can be used to find properties defined on itself
- Try not to extend `Object.prototype` or one of the other built-in prototypes

### prototype and Object.getPrototypeOf
1. prototype: Used with types. Eg: `A.prototype`
2. Object.getPrototypeOf: Used with instances. Eg: `Object.getPrototypeOf(a1)`

Conclusion: `Object.getPrototypeOf(a1) == A.prototype`
```
function A() {
}
A.prototype = {
  doSomething: function() {
    console.log("Do something");
  }
};

var a1 = new A();
var a2 = new A();

a1.doSomething == Object.getPrototypeOf(a1).doSomething == A.prototype.doSomething
Object.getPrototypeOf(a2).doSomething == A.prototype.doSomething
```
----------------------------

## Scoping
- JavaScript has `lexical` scoping instead of `block` scoping
- A new scope is created when you create a new `function`

### Closures
- A special kind of object that combines two things: a `function` and `environment` in which that function was created
- In the following example, since `x` is a member of the environment that created nestedFunction(),  nestedFunction() will have access to it
```
function outerFunction() {
  var x = 10;
  function nestedFunction() {
    var y = 5;
    console.log('x: ' + x);
    console.log('y: ' + y);
  }
  return nestedFunction;
}

var myFunction = outerFunction();
myFunction();
// "x: 10"
// "y: 5"
```

### Things get tricker when using `this` in closures
-  `this` will stop working with nested methods. i.e Only works with top level methods

1. Top-level `this` will work fine
```
var cat = {
  name: 'Gus',
  color: 'gray',
  age: 15,
  printInfo: function() {
    console.log("Name: " + this.name + ", Color:" + this.color + ", Age:" + this.age);  
  }
}
cat.printInfo(); // Name: Gus, Color:gray, Age:15
```

2. `this` inside a nested function will not work
- `this` loses it's scope and fallback to the default global `window` object
- Coincidently, `window` object happens to have a `name` property
```
var cat = {
  name: 'Gus',
  color: 'gray',
  age: 15,
  printInfo: function() {
    nestedFunction = function() {
      console.log("Name: " + this.name + ", Color:" + this.color + ", Age:" + this.age);  
    }
    nestedFunction();
  }
}

cat.printInfo(); // "Name: window , Color:undefined, Age:undefined"
```

### Controlling Context
- Lexical scope cannot be altered but we can control the `context` in which we call our functions
- Context is decided at runtime, and is always bound to the `object` the function was called within
- Controlling context = Changing `this`

```
var obj1 = {
   printThis: function() {
      console.log(this);
   }
};

var func1 = obj1.printThis;
obj1.printThis(); // Prints `obj1` object
func1(); // Prints `window` object
```
- obj1.printThis(): The context here is the obj1 object itself
- func1(): References to printThis() function, then called in context to global object

### That, Call, Bind, and Apply
There are multiple ways to control the value of `this`

1. storing a reference to this in another variable `that`: Useful in nested functions
2. .call(): Borrow a method from one object and use it in a completely separate object. Can take multiple arguments
3. .apply(): Similar to call() method. Only difference is that it can only take one array argument [Mnem: `a`pply = `a`rray]
4. .bind(): Can take extra arguments. Doesn't invoke the function immediately. Useful in asynchronous callbacks and events

Example: Using `that`
```
var cat = {
  name: 'Gus',
  color: 'gray',
  age: 15,
  printInfo: function() {
    var that = this;
    nestedFunction = function() {
      console.log("Name: " + that.name + ", Color:" + that.color + ", Age:" + that.age);  
    }
    nestedFunction();
  }
}
cat.printInfo();
```

Example: Using `call`, `apply`, `bind`
```
var cat = {
  name: 'Gus',
  color: 'gray',
  age: 15,
  printInfo: function() {
    nestedFunction = function() {
      console.log("Name: " + this.name + ", Color:" + this.color + ", Age:" + this.age);  
    }
    nestedFunction.call(this); // "Name: Gus, Color:gray, Age:15"
    nestedFunction.apply(this); // "Name: Gus, Color:gray, Age:15"
    var storedFunction = nestedFunction.bind(this);
    storedFunction(); // "Name: Gus, Color:gray, Age:15"
  }
}
cat.printInfo();
```
----------------------------

## Closures

----------------------------

## The event loop

----------------------------

## Event bubbling

----------------------------

## Apply, call, and bind

----------------------------

## Callbacks and promises

----------------------------

## Variable and function hoisting

----------------------------

## Currying

----------------------------

## A Shift From Imperative To Declarative

----------------------------

## Declarative vs. Imperative

----------------------------

## What is Ajax

----------------------------

## Fetch

----------------------------

## jQuery Effects

----------------------------

## jQuery Handling Events

----------------------------

## JavaScript functions equivalent to jQuery

----------------------------
