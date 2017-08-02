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
- [ ] [What is the DOM](https://css-tricks.com/dom/)
- [ ] [The Document Object Model](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)
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

-----------------

## The Document Object Model

-----------------

## JavaScript Objects

-----------------

## Attach keyboard event listeners

-----------------

## Chrome developer tool

-----------------
