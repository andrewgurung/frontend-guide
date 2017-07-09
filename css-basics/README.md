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

[Assessment 1](assessment1)

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
![CSS Dom](images/htmlcssload.jpg)

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

#### Making CSS readable
1. Whitespace
- Browsers ignores CSS whitespaces(tabs, spaces, new lines) as in HTML

2. Comment
- Comments in CSS begin with `/* and end with */`

3. Shorthand
```
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

Shorthand properties
```
/* in shorthand like padding and margin, the values are applied
   in the order top, right, bottom, left (the same order as an analog clock). There are also other
   shorthand types, for example two values, which set for example
   the padding for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

#### Types of CSS selector
The following  types of CSS selectors are based on:
1. Simple selector: Element type, class or id
2. Attribute selector: Attributes/attribute values
3. Pseudo-classes: State an element exist in. Eg: Mouse hovered
4. Pseudo-elements: Relative to an element. Eg: First word of every paragraph
5. Combinators: Combining two or more selectors. Eg: Paragraphs that are direct descendants of divs
6. Multiple selectors: Multiple selectors share the same CSS rule separated by comma


#### Simple selectors
1. Element selector
- Selects an HTML element
- Case in-sensitive

HTML:
```
<div>CSS simple selctor</div>
```
CSS:
```
DIV {
  color: blue;
}
```  

2. Class selector
- '.' followed by class name
- Multiple elements can share same class name

HTML:
```
<li class="first done">Milk</li>
<li class="second done">Eggs</li>
```

CSS:
```
.done {
  text-decoration: line-through;
}
```

3. ID selector
- '#' followed by ID name of an element
- Most efficient way to select a single element

HTML:
```
<p id="polite"> — "Good morning."</p>
```

CSS:
```
#polite {
  font-family: cursive;
}
```

4. Universal selector
- `*`
- Rarely useful as it selects all elements

5. Combinators using simple selectors
- The descendant selector: (space) -- Select an element nested somewhere inside another element (not necessarily a direct descendant)
- The child selector: `>` -- Select an element that is an immediate child of another element.
- The adjacent sibling selector: `+` -— Select an element that is an immediate sibling of another element (i.e. right next to it, at the same level in the hierarchy).
- The general sibling selector: `~` —- allows you to select any elements that are siblings of another element (i.e. at the same level in the hierarchy, but not necessarily right next to it)

HTML:
```
<section>
  <h2>Heading 1</h2>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
  <div>
    <h2>Heading 2</h2>
    <p>Paragraph 3</p>
    <p>Paragraph 4</p>
  </div>
</section>
```

CSS:
```
section p {
  color: blue;
}

section > p {
  background-color: yellow;
}

h2 + p {
  text-transform: UPPERCASE;
}

h2 ~ p {
  border: 1px dashed black;
}
```

[JSBin Practice](https://jsbin.com/kuyasu/2/edit?html,css,output)


#### Attribute selectors
1. Presence and value attribute selectors
- Tries to match exact attribute value

**Types:**
- [attr]: All matching attributes `attr`
- [attr="val"]: Matching attributes where `val` is the `attr`s value
- [attr~="val"]: Matching attribute where `val` is one of the comma separated list of `attr`s values

[JSBin Practice](https://jsbin.com/hajobuc/9/edit?html,css,output)

CSS:
```
[data-vegetable] {
  color: green;
}

[data-vegetable="liquid"] {
  background-color: goldenrod;
}

[data-vegetable~="chili"] {
  color: red;
}
```

2. Substring value attribute selectors
- Offer flexible matching in a similar fashion to regular expression

**Types:**
- [attr|="val"]: Attributes `attr` whose value is exactly `val` or starts with `val`
- [attr^="val"]: Attributes `attr` whose value starts with `val`
- [attr$="val"]: Attributes `attr` whose value ends with `val`
- [attr*="val"]: Attributes `attr` whose value contains `val`

[JSBin Practice](https://jsbin.com/mugeqer/7/edit?html,css,output)

CSS:
```
/* Classic usage for language selection */
[lang|=fr] {
  font-weight: bold;
}

[data-vegetable*="not spicy"] {
  color: green;
}

[data-quantity$="kg"] {
  font-weight: bold;
}

[data-quantity^="optional"] {
  opacity: 0.5;
}
```

#### Pseudo-classes
- Pseudo-classes are added to the end of a selector to style selected elements only when they are in certain state
- Syntax: colon (:) + keyword. Eg: :active, :checked

```
a:hover,
a:active,
a:focus {
  color: darkred;
  text-decoration: none;
}

li:nth-of-type(even) {
  background-color: #ccc;
}

li:nth-of-type(odd) {
  background-color: #eee;
}
```

#### Pseudo-elements
- Similar to Pseudo-classes
- Syntax: two colons (::) + keyword. Eg: ::after, ::before

[JSBin Practice](https://jsbin.com/hejarof/1/edit?html,css,output)
```
/* All elements with an attribute "href", which values
   start with "http", will be added an arrow after its
   content (to indicate it's an external link) */
[href^=http]::after {
  content: '!';
}

p::first-line {
  font-weight: bold;
}

 p::first-letter{
  font-size: 3em;
  border: 1px solid black;
  background: red;
  display: block;
  float: left;
  padding: 2px;
  margin-right: 4px;
}
```

#### Combinators
1. A, B:	Any element matching A and/or B
2. A B: 	Any element matching B that is a descendant of an element matching A (that is: a child, or a child of a child, etc.)
3. A > B:	Any element matching B that is a direct child of an element matching A
4. A + B:	Any element matching B that is the next sibling of an element matching A
5. A ~ B:	Any element matching B that is one of the next siblings of an element matching A

```
/* All <td>s that are a last child,
   within a <tbody>, within a <table> */
table tbody td:last-child {
  text-align: right
}

/* All <td>s preceded by a <th>, within a <table> */
table th + td {
  text-align: right;
}
```

#### Multiple selectors on one rule
- Multiple selectors separated by commas to apply same rule to different sets of elements at once

```
h1, h2, h3, h4, h5, h6 {
  font-family: helvetica, 'sans serif';
}
```

### CSS values and units

**Types of CSS values**
- Numeric values
- Percentages
- Colors
- Coordinate positions
- Functions

#### Numeric Values
- Pixels(px) are the most used `absolute` numeric values -- same size regardless of any other related settings
- mm, cm, in: Millimeters, centimeters, or inches. Absolute numeric values
- pt, pc: Points (1/72 of an inch) or picas (12 points.). Absolute numeric values

There are also relative units:
- em: 1em is 16 pixels for an element by default. The most common relative unit
- ex, ch: Respectively these are the height of a lower case x, and the width of the number 0
- rem: rem (root em) works in exactly the same way as the em, except that inherited font sizes will have no effect. Much better option than ems although rems don't work in older versions of IE
- vw, vh: Respectively these are 1/100th of the width of the viewport, and 1/100th of the height of the viewport

Unitless values:
1. Can be used to completely remove the margin or padding. Eg: padding: 0;
2. Line height multiplier. Eg: line-height: 1.5;
3. Number of animations. Eg: animation-iteration-count: 5;

Best practice: Using relative units is quite useful — you can size your HTML elements relative to your font or viewport size

#### Percentages
- Size will always shift to be a certain percentage of their parent container. Eg: width: 75%;

#### Colors
- Keywords: Oldest color types. Eg: red
- Hexadecimal values: (#) followed by six hexadecimal numbers. Eg: #ff0000
- RGB: A function of red, green and blue channel. Eg: rgb(0,0,255)
- HSL: A function of hue, saturation, and lightness. Eg: hsl(0,100%,50%);
- RGBA and HSLA: RGB and HSL function with an extra transparency parameter. Eg: rgba(255,0,0,0.5);

**Opacity**
- Another way to specify transparency via CSS.
`opacity: 0.5;`

#### Functions
- Name with parenthesis after it
```
/* calculate the new position of an element after it has been rotated by 45 degress */
transform: rotate(45deg);
/* calculate the new position of an element after it has been moved across 50px and down 60px */
transform: translate(50px, 60px);
/* calculate the computed value of 90% of the current width minus 15px */
width: calc(90%-15px);
/* fetch an image from the network to be used as a background image */
background-image: url('myimage.png');
```

### Cascade and inheritance
At its most basic level `Cascade` indicates that the order of CSS rules matter. But it depends on more factors:
1. Importance
2. Specificity
3. Source order

#### Importance
- Make sure it always wins over all others
- Syntax: !important
- Best practice: Don't use it unless you have to. Because `!important` changes the way the cascade normally works, it can make debugging CSS problems really hard to work out

```
.better {
  background-color: gray;
  border: none !important;
}
```

#### Specificity
- A measure of how specific a selector is

The amount of specificity a selector has is measured using four different values.
1. Thousands: Score one in this column if the matching selector is inside a <style> element or the declaration is inside a style attribute (such declarations don't have selectors, so their specificity is always simply 1000.) Otherwise 0.
2. Hundreds: Score one in this column for each ID selector contained inside the overall selector.
3. Tens: Score one in this column for each class selector, attribute selector, or pseudo-class contained inside the overall selector.
4. Ones: Score one in this column for each element selector or pseudo-element contained inside the overall selector.


#### Source order
- If multiple competing selectors have the same importance and specificity, source order comes in.
- Later rules will win over earlier rules.
Note: Rule overriding is on property level, not the entire ruleset.

### Inheritance
The idea is that some property values applied to an element will be inherited by that element's children, and some won't.
- Naturally inherited: Eg: font-family
- Naturally not-inherited: Eg: border, margin

CSS provides three special values to handle inheritance:
- inherit: Inherits its value from the parent element
- initial: Sets to the browser's default style sheet. If no value is set by browser, the property will be naturally inherited. i.e Set to `inherit`
- unset: If property is a naturally inherited property, it acts as `inherit` else acts as `initial`

```
body {
  color: green;
}

.inherit a {
  color: inherit;
}

.initial a {
  color: initial
}

.unset a {
  color: unset;
}
```

### The box model

- Every element within a document is structured as a rectangular box
![Box properties](images/box-model-standard-small.png)

#### Border box
- The total width of a box is the sum of its width, padding-right, padding-left, border-right, and border-left properties
- What if you want to have a box with a total width of 50% with border and padding
![Border box properties](images/box-model-alt-small.png)

Solution: Use `box-sizing` property with `border-box` value
```
box-sizing: border-box;
```

### Advanced box manipulation
Beyond setting the width, height, border, padding and margin of boxes, there are some other properties available to change how they behave

#### Overflow
- When you set the size of a box with absolute values, the content may not fit the box which causes content overflow
The `overflow` property can have the following values
1. auto: Displays a scrollbar to accommodate the overflow content
2. hidden: Cuts off the overflow content
3. visible: Default browser behavior. Displays the overflow content outside of the box border without any scrollbar

[JSbin Practice](https://jsbin.com/haxefih/1/edit?html,css,output)

```
p {
  height: 100px;
  width: 200px;
  border: 1px solid black;
}

.autoscroll { overflow: auto;    }
.clipped    { overflow: hidden;  }
.default    { overflow: visible; }
```

#### Background clip
Background color and images are drawn under a box (In CSS every element is represented by a rectangular box)
- By default, backgrounds extend to the outer edge of a box's border
- What if you want to only limit the background within the content?
- `background-clip`: Adjust background settings on the box

1. border-box: Default browser behaviour. The background extends to the outside edge of the border (but underneath the border in z-ordering)
2. padding-box: No background is drawn below the border. (The background extends to the outside edge of the padding)
3. content-box: The background is painted within (clipped to) the content box

[JSBin Practice](https://jsbin.com/mabazor/1/edit?html,css,output)

```
.border-box { background-clip: border-box; }
.padding-box { background-clip: padding-box; }
.content-box { background-clip: content-box; }
```

#### Outline
- Outlines differ from borders
- It behaves like the border but is drawn on top of the box without changing the size of the box
```
outline: 1px solid white;
```

#### Types of CSS boxes
The type of box applied to an element is specified by the `display` property.
1. block:
- Stacked upon other boxes
- Content before and after the box appears on a separate line
- Can have width and height set on it
2. inline:
- Flows with the document text on the same line
- Width and height settings have no effect
- Any padding, margin and border set on inline boxes will update the position of surrounding text, but will not affect the position of surrounding block boxes
3. inline-block:
- Something in between the first two
- Inline characters: It flows with surrounding text without creating line breaks before and after it like an inline box.
- Block characters: It can be sized using width and height and maintains its block integrity like a block box — it won't be broken across paragraph lines.

[JSBin Practice](https://jsbin.com/hikabel/2/edit?html,css,output)
```
.inline       { display: inline;       }
.block        { display: block;        }
.inline-block { display: inline-block; }
```

### Debugging CSS
- CSS is permissive -- if a declaration is invalid, browser will ignore it completely and move ahead
- All modern web browsers provide developer tools to help inspect and understand web pages
- Any invalid properties appear with a line through them and a little warning symbol next to them
- Best practice: For a large stylesheet, it is worth running it through a W3C CSS Validation service first to get rid of any basic syntax mistakes
[W3C CSS Validation Service](http://jigsaw.w3.org/css-validator/)
-----------------------------------------

## Styling text
Styling text includes text styling fundamentals, including setting font, boldness, italics, line and letter spacing, drop shadows and other text features

### Fundamental text and font styling
The CSS properties used to style text falls into two categories:
1. Font styles: What font? How big? Bold or Italics?
2. Text layout styles: Space between lines and letters? Alignment?

[JSBin Practice](http://jsbin.com/dizijoh/14/edit?html,css,output)

#### Font styles
1. Color:
- Sets the foreground color
```
color: red;
```

2. Font-family:
- Applies the font to elements. If font is not found, browser sets default font
- There are certain fonts that are generally found across all systems known as `web safe fonts`. Eg: Arial, Courier New, Georgia, Times New Roman, Verdana
- Serifs are small decorative details on letters and symbols. Eg Times New Roman
- Sans serifs does not have these details. Eg Arial
```
font-family: arial;
```

**Note:** CSS defines five generic default names for fonts:  serif, sans-serif, monospace, cursive, and fantasy. `Default font` name will be open for interpretation by the browser which will try to replace it will the closet appropriate font face

- Font stack: Since the availability of a font is not guaranteed, it is best to define font stack. Best practice to define `default font` at the end.
```
font-family: "Trebuchet MS", Verdana, sans-serif;
```

3. Font-size: The most common sizes are
- pixels
- em: 1em = font size of parent element
- rem = font size of root element(i.e `<html>`) not the parent. More predictable than `em`

**Best Practice:** Set base `font-size` to 10px so that setting `em` or `rem` will be must easier to calculate instead of dividing my 16px(default size). `rem` is preferred over `em`

```
html {
  font-size: 10px;
}

h1 {
  font-size: 2.6rem; /* 26px */
}

p {
  font-size: 1.4rem; /* 14px */
}
```

4. Font style, font weight, text transform, and text decoration
- font-style: Values include `normal`, `italic`, `oblique` (Slant the normal font if italics version is not available)
- font-weight: Values include `normal`, `bold`, `lighter`, `bolder`, `100-900` (for fine grain control)
- text-transform: Values include `none`, `uppercase`, `lowercase`, `capitalize` (Capitalize first letter of every word)
- text-decoration: Values include `none`, `underline`, `overline`, `line-through`

5. Text drop shadows
- Takes four values which are horizontal offset, vertical offset, blur radius, shadow color
```
text-shadow: 4px 4px 5px red;
```

**Multiple shadows**
```
text-shadow: -1px -1px 1px #aaa,
             0px 4px 1px rgba(0,0,0,0.5),
             4px 4px 5px rgba(0,0,0,0.7),
             0px 0px 7px rgba(0,0,0,0.4);
```

#### Text layout styles
1. Text align: Values include `left`, `right`, `center`, `justify`
- Justify can look terrible, especially when applied to a paragraph with lots of long words in it. Use along with `hyphens` property (none, auto, manual) which inserts hyphen to break lines

```
text-align: center;
```

2. Line height: The height of each line
- Best Practice: Use 1.5-2 times `multiplier` instead of exact pixels. It calculates based on the font-size. Eg: 1.5 = 1.5 times of font-size.
```
line-height: 1.5;
```

3. Letter and word spacing
```
p::first-line {
  letter-spacing: 2px;
  word-spacing: 4px;
}
```

### Styling lists

#### List-specific styles
There are 3 properties that can be set to `<ul>` or `<ol>` elements
1. list-style-type: The type of bullets to use for the list, for example square or circle bullets
```
ol {
  list-style-type: upper-roman;
}
```

2. list-style-position: Whether the bullets appear inside or outside the list items
```
ol {
  list-style-position: inside;
}
```

3. list-style-image: Allows custom image as bullets
```
ul {
  list-style-image: url(star.svg);
}
```

For more flexibility use `background-image` solution:
```
ul li {
  padding-left: 2rem;
  list-style-type: none;
  background-image: url(star.svg);
  background-position: 0 0;
  background-size: 1.6rem 1.6rem;
  background-repeat: no-repeat;
}
```

#### List style shorthand
```
ul {
  list-style-type: square;
  list-style-image: url(example.png);
  list-style-position: inside;
}
```

Shorthand:
```
ul {
  list-style: square url(example.png) inside;
}
```

#### Controlling list count

[JSBin Practice](http://jsbin.com/norowu/1/edit?html,css,output)

1. start: What number to start from?
```
<ol start="4">
  <li>Apple</li>
  <li>Orange</li>
<ol>
```

2. reversed: Reverse the numbering
```
<ol reversed>
  <li>Apple</li>
  <li>Orange</li>
<ol>
```

3. value: Custom numbering
```
<ol>
  <li value="500">Apple</li>
  <li value="200">Orange</li>
<ol>
```

### Styling links
- Mnemonic: `L`o`V`e `F`ears `H``A`te

#### States of a link
1. Link: The default state. Unvisited state. `:link` pseudo class
2. Visited: A link when it has already been visited. `:visited` pseudo class
3. Focus: A link when it has been focused. `:focus` pseudo class
4. Hover: A link when it is being hovered over by a mouse. `:hover` pseudo class
5. Active: A link when it is being activated (e.g. clicked on). `:active` pseudo class

#### CSS properties to change default link styles:
- outline: An outline is a line that is drawn around elements (outside the borders) to make the element "stand out"
- color
- cursor: Change the hand icon when mouse over
- text-decoration: Use `none` to remove underline
- background: Give a background color that stands out
- border-bottom: Border-bottom is better than default `a href` underline which can cut across the descenders of letters like `g` and `y`

```
a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;     
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}
```

#### Including icons on link
Eg: Display icons on link only if it is an external link i.e begins with http

HTML
```
<a href="/contact">Contact Us</a> <br>
<a href="https://en.wikipedia.org/wiki/Weather">weather on Wikipedia</a>
```

CSS
```
a[href*="http"] {
 background: url('https://mdn.mozillademos.org/files/12982/external-link-52.png') no-repeat 100% 0;
 background-size: 16px 16px;
 padding-right: 20px;
}
```

#### Styling links as buttons

- `<li>` are blocks by default. So set `display` to `inline`
- `<a>` should be `block` that does not spill over the next line but we still want `<a>` to be in same line. Use `display: inline-block` that fulfills both requirements
- Set the width to 19.5%, and the margin-right to 0.625%. But the total will add up to 100.625%, which would make the last button overflow the <ul> and fall down to the next line. Removes the margin from last link `li:last-child a`

[JSBin Practice](http://jsbin.com/jarahic/edit?html,css,output)

HTML
```
<ul>
  <li><a href="#">Home</a></li><li><a href="#">Pizza</a></li><li><a href="#">Music</a></li><li><a href="#">Wombats</a></li><li><a href="#">Finland</a></li>
</ul>
```

CSS
```
body,html {
  margin: 0;
  font-family: sans-serif;
}

ul {
  padding: 0;
  width: 100%;
}


li {
  display: inline;
}

a {
  outline: none;
  text-decoration: none;
  width: 19.5%;
  display: inline-block;
  margin-right: 0.625%;
  line-height: 3;
  text-align: center;
  color: black;
}

li:last-child a {
  margin-right: 0;
}

a:link, a:visited, a:focus {
  background: yellow;
}

a:hover {
  background: orange;
}

a:active {
  background: red;
  color: white;
}
```

### Web fonts
There are only a limited set of `Web-safe fonts` -- available across all systems. But if the developer wants to use a custom font?
Web-safe fonts:
```
p {
  font-family: Helvetica, "Trebuchet MS", sans-serif;
}
```

#### Web fonts
- A CSS feature that allows you to specify font files to be ***downloaded*** along with your website as it is accessed
- Can get a bit complex to support different browsers. May have to support the following types
  - WOFF/WOFF2 (Web Open Font Format versions 1 and 2): the most efficient format around
  - EOT (Embedded Open Type) fonts: Older versions of IE only support
  - SVG version: Older versions of iPhone and Android browsers
- Generating required fonts for multiple browsers from a single font: https://www.fontsquirrel.com/tools/webfont-generator
- Using an online font service: [Google Fonts](https://fonts.google.com/)

**Web fonts syntax:**
- font-family: Any name to define the font
- src: location of font
- format: Optional parameter. Helps browser to locate a font they can use faster
- font-weight/font-style: If you are importing multiple weights of the same font, you can specify what their weight/style is

```
@font-face {
  font-family: 'ciclefina';
  src: url('fonts/cicle_fina-webfont.eot');
  src: url('fonts/cicle_fina-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/cicle_fina-webfont.woff2') format('woff2'),
         url('fonts/cicle_fina-webfont.woff') format('woff'),
         url('fonts/cicle_fina-webfont.ttf') format('truetype'),
         url('fonts/cicle_fina-webfont.svg#ciclefina') format('svg');
  font-weight: normal;
  font-style: normal;
}

html {
  font-family: "myFront", serif;
}
```

-----------------------------------------

## Styling boxes

Box properties include:
- width/height of content box
- padding
- border
- margin

#### Percentage values
- Box height doesn't take percentages. It has to be exact values (Eg. Set in `em`, `px`)
- Border doesn't tale percentages
- Margin collapsing: When two boxes touches, the larger margin overrides the smaller

#### Overflow
- auto: If there is too much content, the overflowing content is hidden and scroll bars are shown to let the user scroll to see all the content.
- hidden: If there is too much content, the overflowing content is hidden.
- visible: If there is too much content, the overflowing content is shown outside of the box. Default behavior

#### Background clip
- Box background is made up of `background-color` and `background-image`
- Background extends upto the border which can be controlled by `background-clip`

Values for `background-clip`
1. border-box
2. padding-box
3. content-box

### Advanced box properties

#### Setting width and height properites
Ways of handling content box size -- setting constraints rather than absolute value using `max-width`, `max-height`, `min-width`, `min-height`

[JSBin Practice](http://jsbin.com/bokowin/6/edit?css,output)

```
width: 70%;
max-width: 1280px;
min-width: 480px;
```

Center align the content
```
margin: 0 auto;
```

Center align and constraint an image:
- `max-width`: Keeps the media (e.g. images and video) constrained inside a container
```
display: block;
margin: 0 auto;
max-width: 100%;
```

#### Changing the box model completely
- Total width of a box is the sum of its width, padding-right, padding-left, border-right, and border-left properties
- Setting box content size to 50% width will not be exact 50% after you add padding and borders
- To fix this, we can use `box-sizing: border-box` to have an all inclusive width

```
box-sizing: border-box;
```

#### Uncommon display types
- display: table -- allows you to emulate table layouts using non-table elements, without abusing table HTML to do so
- display: flex -- allows you to solve many classic layout problems such as laying a series of containers in flexible equal width columns, or vertically centering content
- display: grid -- gives CSS a native way of easily implementing grid systems

### Backgrounds
#### Background color
- Syntax: `background-color`
- Default color: `transparent`
- Best practice: Set background-color for failover mechanism to background image or newer background-gradient properties
```
background-color: yellow;
```

#### Background image
- Syntax: `background-image`
- Pass image path through `url` function
- background-image is used decoration without being parsed by screen readers. Must use `<img>` element if the image is important
```
background-image: url(https://mdn.mozillademos.org/files/13026/fire-ball-icon.png);
```

#### Background image




## Borders

## Styling tables

## Advanced box effects
-----------------------------------------

## CSS layout

-----------------------------------------
