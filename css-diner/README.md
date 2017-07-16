# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung
URL: http://www.andrewgurung.com/

Context
-----------------
## CSS Diner
http://flukeout.github.io/

Notes
-----------------

### Type Selector
- Select elements by their type
- Syntax: `A` selects all <A> elements

### ID Selector
- Select elements with an ID
- Syntax: `#id`

### Descendant Selector
- Select an element inside another element
- Syntax: `A B`

### Combine the Descendant & ID Selectors
- Combine any selector with the descendent selector
- Syntax: `#id  A`

### Class Selector
- Select elements by their class
- Syntax: `.classname`

### Combine the Class Selector
- Can combine the class selector with other selectors, like the type selector.
- Eg: `A.className`
- Select oranges that are small
- Note: There are no spaces between selectors. Extra space will denote descendent
HTML:
```
<orange class="small" />
```

CSS:
```
orange.small
```

### Comma Combinator
- Combine, selectors, with... commas!
- Eg: `A, B`

### The Universal Selector
- You can select everything!
- Syntax: `*`

### Combine the Universal Selector
- Select all elements inside of A but not A
- Syntax: `A *`

### Adjacent Sibling Selector
- Select an element 'B' that immediately/directly follows another element 'A'
- Must be on same level
- Syntax: `A + B`

### General Sibling Selector
- Select elements that follows another element
- Do not have to be immediate/directly following
- Syntax: `A ~ B`

### Child Selector
- Select direct children of an element
- Syntax: `A > B`

### First Child Pseudo-selector
- Select a first child element inside of another element
- Syntax: `:first-child`
1. `:first-child` selects all first child elements
2. `p:first-child` selects all first child p elements

### Only Child Pseudo-selector
- Select an element that are the only element inside of another one
- Syntax: `:only-child`

### Last Child Pseudo-selector
- Select the last element inside of another element
- Syntax: `:last-child`
- Pro Tip: In cases where there is only one element, that element counts as the first-child, only-child and last-child

### Nth Child Pseudo-selector
- Select an element by its order in another element
- Syntax: `:nth-child(A)`

### Nth Last Child Selector
- Select an element by its order in another element, counting from the back
- Syntax: `nth-last-child(n)`

### First of Type Selector
- Select the first element of a specific type
- Syntax: `:first-of-type`

### Nth of Type Selector
1. `div:nth-of-type(2)` selects the second instance of a div
2. `.example:nth-of-type(odd)` selects all odd instances of a the example class

### Nth-of-type Selector with Formula
- Syntax: `:nth-of-type(An+B)`
- span:nth-of-type(6n+2) selects every 6th instance of a span, starting from (and including) the second instance

### Only of Type Selector
- Select elements that are the only ones of their type within of their parent element
- Syntax: `:only-type`

### Last of Type Selector
- Select the last element of a specific type
- Syntax: `:last-of-type`

### Empty Selector
Select elements that don't have children
- Syntax: `:empty`

### Negation Pseudo-class
- Select all elements that don't match the negation selector
- Syntax: `:not(X)`
- `:not(#fancy)` selects all elements that do not have id="fancy"

### Attribute Selector
- Select all elements that have a specific attribute
- Must be enclosed in square brackets
- Syntax: `[attribute]`
- `[type]` selects all elements that have type="anything"

### Combined attribute selector
- Select all elements that have a specific attribute
- `a[href]` selects all `<a>` elements that have a href="anything" attribute

### Attribute Value Selector
- Select all elements that have a specific attribute value
- Syntax: `[attribute="value"]`
- `input[type="checkbox"]` selects all checkbox input elements

### Attribute Starts With Selector
- Select all elements with an attribute value that starts with specific characters
- Syntax: `[attribute^="value"]`
- `.toy[category^="Swim"]` selects elements with class `toy` and either `category="Swimwear` or `category="Swimming"`

### Attribute Ends With Selector
- Select all elements with an attribute value that ends with specific characters
- Syntax: `[attribute$="value"]`
- img[src$=".jpg"] selects all images display a .jpg image

### Attribute Wildcard Selector
- Select all elements with an attribute value that contains specific characters anywhere
- Syntax: `[attribute*="value"]`
- `[class*="heading"]` selects all elements with `"heading"` in their class, like `class="main-heading"` and `class="sub-heading"`
