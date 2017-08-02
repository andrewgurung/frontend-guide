# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
##  Interactivity + Inspector

Table of Contents
-----------------

- [x] [Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction)
- [x] [What is the DOM](https://css-tricks.com/dom/)
- [x] [The Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
- [ ] [JavaScript Objects](http://javascriptissexy.com/javascript-objects-in-detail/)
- [ ] [Attach keyboard event listeners](https://plainjs.com/javascript/events/getting-the-keycode-from-keyboard-events-17/)
- [ ] [Chrome developer tool](https://developer.chrome.com/devtools)

-----------------

## Document Object Model
- Document Object Model (DOM) is a programming interface for HTML and XML documents
- DOM represents document as nodes and objects for programming language to connect
- `W3C DOM` and `WHATWG DOM` standards are implemented in most modern browsers. But many browsers extend the standard, so care must be exercised

### DOM and JavaScript
- DOM is not a programming language
- But without DOM, JavaScript won't have a model of web pages to interact
- DOM is available through the `document` or `window` object in JavaScript
- DOM is independent of any programming language
- `document`: Represents the root of the document itself
- `window`: Represents something like the browser

### Important Data Types
1. document: Root document object
2. element: A node. Eg: `document.createElement()`
3. nodeList: An array of elements. Eg:  `document.getElementsByTagName()`
4. attribute: Special interface. Eg: `createAttribute()`
5. namedNodeMap: Like an array, but the items are accessed by name or index

### DOM Interfaces and Objects
- Objects borrow from several interfaces. Eg: `table` object
- `table` object implements `HTML table element interface` for methods like `createCaption` and `insertRow`
- `table` is also an `element`. So it implements from `Element` interface
- HTML `element` is also a node. So it implements from `Node` interface

```
var table = document.getElementById("table");
var tableAttrs = table.attributes; // Node/Element interface
for (var i = 0; i < tableAttrs.length; i++) {
  // HTMLTableElement interface: border attribute
  if(tableAttrs[i].nodeName.toLowerCase() == "border")
    table.border = "1";
}
// HTMLTableElement interface: summary attribute
table.summary = "note: increased border";
```

### Core interfaces in the DOM
- document.getElementById(id)
- document.getElementsByTagName(name)
- document.createElement(name)
- window.onload
- element.setAttribute()
- parentNode.appendChild(node)
- element.innerHTML

-----------------

## What is the DOM
- The HTML that we write is not the DOM
- The view source is not the DOM. View Source shows the HTML that makes up that page
- The code in DevTools is kind of the DOM even though it may seem similar to the HTML that we wrote in most cases

### When is the DOM different than the HTML?
1. Missing required tag, that was fixed by the browser
2. JavaScript can manipulate the DOM
3. Ajax and Templating: When using templating or getting content from somewhere using Ajax, the source code HTML and DOM will look different

### JavaScript vs. the DOM
- JavaScript is a language that the browser reads and does stuff with
- DOM is where stuffs happen
- A lot of 'JavaScript thing' is more accurately a 'DOM API'
![DOM](https://cdn.css-tricks.com/wp-content/uploads/2013/12/dom-dom-dom-dom.jpg)
-----------------

### The Document Object Model
- [List of DOM APIs](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
-----------------

## JavaScript Objects
- Object: Unordered list of primitive and reference data types stored as name-value pairs
- Object can contain function aka methods, numbers, arrays and even other objects

### Accessing Properties
1. Dot notation
- Note: Number cannot be accessed using dot notation
```
var myFirstObject = {firstName: "Andrew", 100: "JavaScript"};
myFirstObject.firstName;
```

2. Bracket notation
```
var myFirstObject = {firstName: "Andrew", 100: "JavaScript"};
myFirstObject['firstName'];
myFirstObject[100];
```

### Reference Data Type and Primitive Data Types
- Reference data type may have side effects compared to Primitive data types
Primitive Data Types:
```
// The primitive data type String is stored as a value​
​var person = "Kobe";  
​var anotherPerson = person;
person = "Bryant";
​
console.log(anotherPerson); // Kobe​
console.log(person); // Bryant
```

Reference Data Type:
```
var person = {name: "Kobe"};
​var anotherPerson = person;
person.name = "Bryant";
​
console.log(anotherPerson.name); // Bryant​
console.log(person.name); // Bryant
```

### Creating Objects
1. Object Literal
- Easiest way to create Objects
```
var myBooks = {}; // Empty Object
var mango = {
  color: 'yellow',
  sweetness: 9,
  measureSweetness: function() {
    console.log("Good");
  }
}
```

2. Object Constructor
```
var mango = new Object();
mango.color = 'yellow;
mango.sweetness = 9;
mango.measureSweetness = function() {
  console.log("Good");
}
```

### Practical Patterns for Creating Objects
More efficient way of creating objects:
1. Constructor Pattern for Creating Objects
```
function Fruit(theColor, theFruitName) {
  this.color = theColor;
  this.fruitName = theFruitName;
  this.showName = function () {
    console.log("This is a " + this.fruitName);
  }
}

var mangoFruit = new Fruit("Yellow", "Mango");
mangoFruit.showName(); // This is a Mango
// Own property
mangoFruit.mangoSpice = "Citrus";
console.log(mangoFruit.mangoSpice); // Citrus

var pineappleFruit = new Fruit("Brown", "Pineapple");
pineappleFruit.showName(); // This is a Pineapple
```
- An inherited property is defined in the object's prototype property. Eg: mangoFruit.prototype.color
- Own property can be accessed directly. Eg: mangoFruit.mangoSpice
- Methods can be invoked. Eg: mangoFruit.showName();

2. Prototype Pattern for Creating Objects
```
function Fruit () {
​}
​
Fruit.prototype.color = "Yellow";
Fruit.prototype.fruitName = "Generic Fruit";
Fruit.prototype.showName = function () {
  console.log("This is a " + this.fruitName);
}

var mangoFruit = new Fruit ();
mangoFruit.showName(); //​ This is a Generic Fruit
```

### Own and Inherited Properties
- `in`: Check if a property exists on an object either inherited or an own property
```
var school = {schoolName:"MIT"};
console.log("schoolName" in school);  // true​ [own]
console.log("toString" in school);  // true [inherited]
```

### hasOwnProperty
- `.hasOwnProperty`: Check if property is own property
```
var school = {schoolName:"MIT"};
console.log("schoolName" in school);  // true​ [own]
console.log("toString" in school);  // false [inherited]
```

### Accessing and Enumerating Properties on Objects
- Use for/in loop
- Only returns an object's own properties
```
​var school = {schoolName:"MIT", schoolAccredited: true, schoolLocation:"Massachusetts"};
​for (var eachItem in school) {
  console.log(eachItem); // Prints schoolName, schoolAccredited, schoolLocation​
}
```

### Deleting Properties of an Object 
- Syntax: `delete` keyword
- Inherited properties cannot be deleted
- delete operator returns true if successful or property was nonexistent
```
var christmasList = {mike:"Book", jason:"sweater" }
​delete christmasList.mike; // deletes the mike property​
​delete christmasList.toString; // returns true, but toString not deleted because it is an inherited method​
```

### Serialize and Deserialize Objects
- Serialize: Convert it to a string. `JSON.stringify(..)`
- Deserialize: Convert it to object from a string. `JSON.parse(..)`
```
// Serialize
var christmasList = {mike:"Book", jason:"sweater", chelsea:"iPad" }
var christmasListString = JSON.stringify(christmasList); // String output: {"mike":"Book","jason":"sweater","chelsea":"iPad"}

// Deserialize
var christmasListStr = '{"mike":"Book","jason":"sweater","chelsea":"iPad"}';
var christmasList = JSON.parse(christmasListStr);
console.log(christmasList.mike); // Book
```
-----------------

## Attach keyboard event listeners

-----------------

## Chrome developer tool

-----------------
