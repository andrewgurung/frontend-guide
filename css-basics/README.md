# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
## CSS Basics from Mozilla Developer Network <br/>
https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works

Notes
-----
### Introduction to CSS

#### CSS basics
- A document is usually a text file structured using a markup language — `HTML`
- CSS is a language for specifying how documents are presented to users

**CSS consists of:**
- property: how to display the element
- selector: which elements to apply the properties to

**Simple CSS Syntax**

[JS Bin Example](https://jsbin.com/lapocar/edit?html,css,output)

HTML:
```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

CSS:
```
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

#### How does CSS work
![CSS Dom](images/css-dom.svg)

#### DOM
- DOM has a tree-like structure
- Each element, attribute and piece of text becomes a DOM node

#### Ways to apply CSS
1. External stylesheet
```
<head>
   <title>My CSS experiment</title>
   <link rel="stylesheet" href="style.css">
 </head>
```
2. Internal stylesheet
```
<head>
   <title>My CSS experiment</title>
   <style>
     p {
       color: red;
     }
   </style>
 </head>
```
3. Inline stylesheet
```
<body>
    <p style="color:red;">This is my first CSS example</p>
  </body>
```

#### CSS Vocabulary
CSS consists of two building blocks:
- property: Human-readable identifiers that indicates which stylistic feature to change
- value: How you want to change those stylistic features

```
Property + Value ==> CSS Declaration

CSS Declaration + Selectors ==> CSS Rulesets/Rules
```

- There are around 300 CSS properties

#### CSS Declaration block
- Enclosed in braces `{ }`
- Must end with semicolons
- Best practice: leave the last property with `;` too so that you don't forget
```
{
  background-color: red;
  color: blue
}
```

#### CSS At-rules and Nested Statements

CSS Rules are the most common blocks in CSS. But there are other blocks/statements too.
1. At-rules:
  - Used to convey metadata, nested or descriptive information
  - Starts with `@` sign, then followed by syntax, ending with `;`
  - Eg: `@import`(metadata), `@media`(nested), `@font-face`(descriptive)

2. Nested Statements:
  - Subset of At-rule
  - Syntax is a nested block of CSS which applies only if the condition is met
  ```
  @media(min-width: 800px) {
    body {
      color: red;
    }
  }
  ```



-----------------------------------------

### Styling text

-----------------------------------------

### Styling boxes

-----------------------------------------

### CSS layout

-----------------------------------------
