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
- [x] [Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [x] [The event loop](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [x] [Event bubbling](http://javascript.info/tutorial/bubbling-and-capturing)
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
- Closure = Function + lexical environment
- Lexical = the location where a variable is declared. Determines if a variable is accessible
- Nested functions can access variables declared in their outer space

### Function factory using closure
- `makeAdder(x)` takes a single argument and returns a new function
- The new function `add10` will then return the sum of x and y
```
function makeAdder(x) {
  return function(y) {
     return x + y;
  }
}
var add10 = makeAdder(5);
console.log(add10(40)); //45
```

### Practical closures
- Similar to object oriented programming, where we can set data/properties through one or more methods
- Can be used anywhere where we normally use an object with only a single method
- Commonly used to define some behavior, then attach it to an event. Eg. Attached as a callback: a single function is executed when event is triggered

#### Change text size with button click
```
function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}
var size12 = makeSizer(12);

document.getElementById('size-12').onclick = size12;
```

### Emulating private methods with closures
- Private in Java: Methods can only be called by other methods in the same class
- JavaScript doesn't have a native way of creating private methods
- Private methods helps to restrict access to code and managing global namespace

1. Any variable or method defined inside an anonymous function is not accessible from outside i.e `counter`
- `(function(){ /* code */ })()` is an immediately invoked anonymous function expression
- Variables and methods defined inside IIFE are private
```
var counter = (function(){ /* code */ })();
```

2. Accessing private methods through a public interface/function
- privateCounter: private variable
- changeBy(): private method
- { increment.., decrement..,value..} is returned with three public functions
- These 3 public functions are using to access private variables and methods
- This pattern is known as `Module Pattern`
```
var counter = (function() {
  var privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  };   
})();

console.log(counter.value()); // logs 0
counter.increment();
console.log(counter.value()); // logs 1
counter.decrement();
console.log(counter.value()); // logs 0
```

### Creating closures in loops: A common mistake
- Prior to the `let` keyword, a common mistake occurred with closures when they were created inside loops

1. Problem with loops
- The problem below is that all three callbacks / closures share the same lexical environment.
- When the loop completes, since all the three closures refer to the same `item` variable, the `item` variable object is left pointing to the last entry in the `helpText`
```
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];
  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help); // Callback
    }
  }
}
setupHelp();
```

2. Solution One: Function factory
- Rather than the callbacks all sharing a single lexical environment, the `makeHelpCallback` function creates a new lexical environment for each callback
```
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function makeHelpCallback(help) {
	return function() {
    showHelp(help);
  };
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];
  for (var i = 0; i < helpText.length; i++) {
    var item = helpText[i];
    document.getElementById(item.id).onfocus = makeHelpCallback(item.help);
    }
  }
}
setupHelp();
```

3. Solution 2: Anonymous function
```
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    (function() {
       var item = helpText[i];
       document.getElementById(item.id).onfocus = function() {
         showHelp(item.help);
       }
    })(); // Immediate event listener attachment with the current value of item (preserved until iteration)
  }
}

setupHelp();
```

4. Solution 3: `let` keyword for block scoping
```
function showHelp(help) {
  document.getElementById('help').innerHTML = help;
}

function setupHelp() {
  var helpText = [
      {'id': 'email', 'help': 'Your e-mail address'},
      {'id': 'name', 'help': 'Your full name'},
      {'id': 'age', 'help': 'Your age (you must be over 16)'}
    ];

  for (var i = 0; i < helpText.length; i++) {
    let item = helpText[i];
    document.getElementById(item.id).onfocus = function() {
      showHelp(item.help);
    }
  }
}
setupHelp();
```

### Performance considerations
- Considered bad to have nested functions if no closure is required

1. Bad practice: Having functions inside Object constructor
```
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
  this.getName = function() {
    return this.name;
  };

  this.getMessage = function() {
    return this.message;
  };
}
```

2. Solution 1: Appending to existing prototype
```
function MyObject(name, message) {
  this.name = name.toString();
  this.message = message.toString();
}
MyObject.prototype.getName = function() {
  return this.name;
};
MyObject.prototype.getMessage = function() {
  return this.message;
};
```

3. Solution 2: Cleaner alternative
```
function MyObject(name, message) {
    this.name = name.toString();
    this.message = message.toString();
}
(function() {
    this.getName = function() {
        return this.name;
    };
    this.getMessage = function() {
        return this.message;
    };
}).call(MyObject.prototype);
```
----------------------------

## The event loop
- JavaScript has a concurrency model based on an "event loop"
- The event loop model in JavaScript never blocks other processes. Eg: while waiting for an IndexedDB query to return, it can process user input
- It got its name because of the way it is implemented
```
// queue.waitForMessage waits synchronously for a message to arrive if there is none currently
while (queue.waitForMessage()) {
  queue.processNextMessage();
}
```

![Visual representation](https://developer.mozilla.org/files/4617/default.svg)

- Stack: Function calls form a stack of frames
- Heap: Objects are allocated to heap to denote a large mostly unstructured region of memory
- Queue: JavaScript runtime contains a message queue where each message has an associated function which is executed when `stack` is free

- Run-to-completion: Each message is processed completely before moving to the next. Better to cut down message into several messages
- Messages are added any time an event occurs and there is an event listener attached to it
- Calling `setTimeout` will add a message after a set period has passed if there is no other in-process message. Hence the time set on `setTimeout` indicates a **minimum time and not a guaranteed time**

### Several runtimes communicating together
- A web worker or a cross-origin iframe has its own stack, heap, and message queue
- Two distinct runtimes can only communicate through sending messages via the `postMessage` method

----------------------------

## Event bubbling

The event handling process:
1. Capturing phase – the event goes down to the element. Rarely used
2. Target phase – the event reached the target element
3. Bubbling phase – the event bubbles up from the element

![Event Flow](http://javascript.info/article/bubbling-and-capturing/eventflow@2x.png)

- `event.target`: When an event happens – the most nested element where it happens gets labeled as the "target element"
- Capturing phase: Then the event first moves from the document `root` down the `event.target`, calling handlers assigned with addEventListener(...., true) on the way. The capturing phase is used very rarely, usually we handle events on bubbling. And there’s a logic behind that
- Bubbling phase: Then the event moves from `event.target` up to the `root`, calling handlers assigned using `on<event>` and `addEventListener` without the 3rd argument or with the 3rd argument `false`.

- Each handler can access event object properties:
1. event.target – the deepest element that originated the event.
2. event.currentTarget (=this) – the current element that handles the event (the one that has the handler on it)
3. event.eventPhase – the current phase (capturing=1, bubbling=3).
4. event.stopPropagation() - Any event handler can stop the event by calling event.stopPropagation(), but that’s not recommended, because we can’t really be sure we won’t need it above, maybe for completely different things.

Eg: Clicking on `p` will trigger all three alerts due to bubbling
```
<form onclick="alert('form')">FORM
  <div onclick="alert('div')">DIV
    <p onclick="alert('p')">P</p>
  </div>
</form>
```
If you click on <p>, then the sequence is:
1. HTML → BODY → FORM → DIV → P (capturing phase, the first listener), and then:
2. P → DIV → FORM → BODY → HTML (bubbling phase, the second listener).

----------------------------

## Apply, call, and bind
- Functions are objects in JavaScript. As objects, functions have methods including `apply`, `call` and `bind`

### bind() method
- Mainly used to set which specific object will be bound to `this` when a function is invoked

### Usage 1: Set the `this` value on Methods
- In ECMAScript 6, the equivalent of `|0` is `Math.trunc` which removes any fractional digits after the dot

#### Simple JavaScript click event
- [JSBin Practice](http://jsbin.com/yobugiyufe/8/edit?js,output)
```
function clickHandler(e) {
  alert('Clicked!');
}

document.querySelector('button').addEventListener('click', clickHandler);
```

#### Common JS problem
- `this` is not bound properly in most cases. jQuery and Backbone automatically binds `this` for us
- A method is bound to the object calling it
- In the `buttonElement.addEventListener(..)` the `clickHandler` is bound to the `buttonElement`. So `this` points to `buttonElement` which doesn't have the `data` property
- The `data` property is inside of `user` object. Hence only `user.clickHandler()` will work
- [JSBin Practice](http://jsbin.com/yobugiyufe/14/edit?js,output)
```
var user = {
  data: {name:"T. Woods", age:37},
  clickHandler: function(e) {
    document.querySelector('input').value = this.data.name + " " + this.data.age;
  }
}

var buttonElement = document.querySelector('button');
buttonElement.addEventListener('click', user.clickHandler); // Error
user.clickHandler(); // T.Woods 37
```

#### Fix `this` bound problem
- Explicitly set `this` using `bind()` method
- Set `this` -> `user` which has the `data` property that we want
- Note: `.bind()` is unavailable in IE < 9. Need to add custom bind
- [JSBin Practice](http://jsbin.com/yobugiyufe/15/edit?js,output)
```
buttonElement.addEventListener('click', user.clickHandler.bind(user));
```

#### Global context overriding
- showDataVar() is bound to the global scope. i.e Window object
- Fix: Use `.bind()` to set `this` to `user`
```
var data = {name:"J. Global", age: 35};

var user = {
  data: {name:"T. Local", age:37},
  showData: function(e) {
    console.log(this.data.name + ' ' + this.data.age);
  }
}

var showDataVar = user.showData;
showDataVar(); // J. Global 35. Gets from global because context is global
user.showData(); // T. Local 37

var fixedDataVar = user.showData.bind(user); // Set 'this' to user
fixedDataVar(); // T. Local 37
```

### Usage 2: Allow us to `Borrow` Methods
- We can borrow methods using `bind()`
- Note: It will copy the method from source to destination which may cause overriding the existing method.
- Better use apply or call to borrow methods
- [JSBin Practice](http://jsbin.com/yasotoxava/2/edit?js,console)
```
var user = {
  data: {name:'T. Local', age:37},
  showData: function(e) {
    console.log(this.data.name + ' ' + this.data.age);
  }
}

var car = {
  data: {name: 'Toyota Rav 4', age: 2015}
}

car.showData = user.showData.bind(car); // borrow method
car.showData(); // Toyota Rav 4 2015
```

### Usage 3: Allows Us to `Curry` a Function 

### apply() and call() methods
-

1. Usage 1: `apply()` and `call()` allow us to Set the `this` value on methods

2. Usage 2: `apply()` and `call()` allow us to `Borrow` Methods

3. Usage 3: `apply()` allows us to Execute Variable

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
