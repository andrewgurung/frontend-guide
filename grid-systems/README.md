# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
## Grid Systems and Responsiveness

Table of Contents
-----------------

- [x] [Understanding CSS Grid Systems](http://www.sitepoint.com/understanding-css-grid-systems/)
- [x] [Don’t Overthink Grids](https://css-tricks.com/dont-overthink-it-grids/)
- [x] [CSS media queries](http://www.w3schools.com/css/css_rwd_mediaqueries.asp)
- [x] [Media Queries](https://varvy.com/mobile/media-queries.html)
- [x] [An Introduction to Mobile-First Media Queries](https://www.sitepoint.com/introduction-mobile-first-media-queries/)
- [x] [CSS Architectures: Refactor Your CSS](https://www.sitepoint.com/css-architectures-refactor-your-css/)
-----------------

## Understanding CSS Grid Systems
- Grid system is a structure that allows content to be stacked both vertically and horizontally
- Simple and predictable HTML scaffolding
- Ideal for responsive design
- Primary Components:
  1. Rows
  2. Columns

### Creating custom CSS Grid Systems

1. Resetting the Box Model
```
.row,
.column {
    box-sizing: border-box;
}
```

2. Clearing Floats for rows
```
.row:before,
.row:after {
    content: " ";
    display: table;
}

.row:after {
    clear: both;
}
```

3. Defining Columns
- The position relative is set on `column` so that the `child` content can be positioned `absolutely` relative to that `column`
- `scw = (100 – (m * (mc – 1))) / mc`
```
.column {
    position: relative;
    float: left;
}
```

4. Creating Gutters
- `+`: Adjacent/immediate sibling selector
- Create a left margin for every column except the first one
```
.column + .column {
    margin-left: 1.6%;
}
```

5. Calculating Column Widths
```
.column-1 {
    width: 6.86666666667%;
}

.column-2 {
    width: 15.3333333333%;
}

.column-3 {
    width: 23.8%;
}

.column-4 {
    width: 32.2666666667%;
}

.column-5 {
    width: 40.7333333333%;
}

.column-6 {
    width: 49.2%;
}

.column-7 {
    width: 57.6666666667%;
}

.column-8 {
    width: 66.1333333333%;
}

.column-9 {
    width: 74.6%;
}

.column-10 {
    width: 83.0666666667%;
}

.column-11 {
    width: 91.5333333333%;
}

.column-12 {
    width: 100%;
}
```

6. Optimizing for Mobile Devices
- No Gutters
- Stack on-top
```
@media only screen and (max-width: 550px) {
    .column-1,
    .column-2,
    .column-3,
    .column-4,
    .column-5,
    .column-6,
    .column-7,
    .column-8,
    .column-9,
    .column-10,
    .column-11,
    .column-12 {
        width: auto;
        float: none;
    }

    .column + .column {
        margin-left: 0;
    }
}
```

7. Pulling it all Together
```
<div class="row">
    <div class="column column-4"></div>
    <div class="column column-4"></div>
    <div class="column column-4"></div>
</div>

<div class="row">
    <div class="column column-2"></div>
    <div class="column column-4"></div>
    <div class="column column-4"></div>
    <div class="column column-2"></div>
</div>
```
-----------------

## Don’t Overthink It Grids

1. Context / Row
- As wide as the parent. `width: auto`. i.e 100%
```
<div class="grid">
  <!-- 100% wide -->
</div>
```

2. Columns
HTML
```
<div class="grid">
  <div class="col-2-3">
     Main Content
  </div>
  <div class="col-1-3">
     Sidebar
  </div>
</div>
```

CSS
```
[class*='col-'] {
  float: left;
}
.col-2-3 {
  width: 66.66%;
}
.col-1-3 {
  width: 33.33%;
}
```

3. Clearing Context
- The parent element will collapse to zero height since it has only floated children
- Fix that by clearing it
```
.grid:after {
  content: "";
  display: table;
  clear: both;
```

4. Gutters
-  Apply a fixed padding to the right side of all columns except the last one
```
*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  [class*='col-'] {
    padding-right: 20px;
  }

  [class*='col-']:last-of-type {
    padding-right: 0;
  }
}
```
-----------------

## CSS media queries
- A block of CSS properties that is included only if certain condition is true
- Syntax: `@media .. {}`

### Add a Breakpoint
```
@media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
        width: 100%;
    }
}
```

### Always Design for Mobile First
- Start with smaller screens and grow bigger
```
/* For mobile phones */
[class*="col-"] {
  width: 100%;
}

/* For desktop: */
@media only screen and (min-width: 768px) {
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  ...
}
```

### Multiple breakpoints
- You can add multiple breakpoints
```
/* For mobile phones: */
[class*="col-"] {
    width: 100%;
}

@media only screen and (min-width: 600px) {
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  ...
}

@media only screen and (min-width: 768px) {
  .col-1 {width: 8.33%;}
  .col-2 {width: 16.66%;}
  ...
}
```

### Orientation: Portrait / Landscape
- Conditional CSS based on orientation of the browser
```
@media only screen and (orientation: landscape) {
  body {
    background-color: lightblue;
  }
}
```
-----------------

## Media Queries
Media queries do two things:
1. They find out how big a screen is
2. They apply CSS for the size of the screen found

### Anatomy
```
@media(min-width:900px){p{color:red;}}
```
1. `@media`: Media query announcement
2. (min-width:900px){}: When should it be turned
3. p{color:red;}: What to do if circumstance happens

CSS Architectures: Refactor Your CSS

## An Introduction to Mobile-First Media Queries

### Shades of Mobile-First
1. Mobile-first design: Designs that focus on essentials due to device screen constraints. Enhance user experience through GPS, accelerometer etc.
2. Mobile-first implementation: Start by designing at the smallest viewport possible then progressively add styles as viewport increases

### Creating Mobile-First Media Queries

1. Top-down approach
[Codepen.io Media Query Top Down](https://codepen.io/andrewgurung/pen/zdqGbV)
- Start at large viewports and go down by the presence of `max-width` in media queries
- It forces us to undo our styles. Instead we should be adding styles
- The original float styles go against the natural flow of HTML elements
```
.sidebar {
  float: left;
  width: 25%;
}

.content {
  float: left;
  width: 75%;
}

@media (max-width:60rem) {
  .sidebar, .content {
    float: none;
    width: auto;
  }
}
```

2. Bottom-up approach: Best Practice
[Codepen.io Media Query Bottom-up](https://codepen.io/andrewgurung/pen/WEwQQg)
- Start at smallest viewport and go up by the presence of `min-width` in media queries
- Reduces a lot of unnecessary CSS
```
@media (min-width: 60rem) {
  .sidebar {
    float: left;
    width: 25%;
  }
  .content {
    float: left;
    width: 75%;
  }
}
```

### Source Ordering
- When media query kicks in, the page is rendered with stacked elements in the order of the DOM structure

### Manage Your Media Queries with Sass
```
@mixin mquery($size) {
 if $size == small {
  @media (min-width: 30rem) {
    @content;
  }
 }

 else if $size == medium {
  @media (min-width: 40rem) {
    @content;
  }
 }
}
```
Then can be referenced in this way:
```
.sidebar, .content {
  @include mquery(medium) {
    float: left; 
  }  
}
```
-----------------

## CSS Architectures: Refactor Your CSS

### The MetaCoax Process
- CSS refactoring process, designed to "de-bloatify" thousands of lines of redundant CSS—improving the readability, simplicity and extensibility
- Measure twice, cut once css → mtco css → meta coa css → MetaCoax

### MetaCoax Phase 1: Shorten Selectors and Leverage + Layer Rulesets
- Phase 1 is focused on minimum work to improve a site's CSS
- No touching of current HTML
- Optimize selectors and reduce redundancy

#### Shorten Selectors
- Goal is to use shallow instead of deep/long selector chain
1. Kill qualifiers:
  - ID has one of the highest specificity weight
  - Selectors such as  
  `div#widget-nav div#widget-nav-slider` => `#widget-nav #widget-nav-slider` =>  `#widget-nav-slider`
  - `li.chapter` ==> `.chapter`. Or even better change class name to `.list-chapter`
  
2. Drop descendants:
  - Descendent selector (a b) is one of the most expensive combinatory selectors to use
  - Other expensive CSS selector include universal (`*`) and the child selector (a > b)
  - The longer the selector the more checks required which leads to longer render time
  - Solution 1: Use child selector instead of descendent selector. Child selector only includes direct children instead of including grandchild and great-grandchild
  - Solution 2: If descendent selector is a must, eliminate the superfluous elements. `.widget li a` => `.widget a`

3. Make the selector chain three or less
  - A combinator selector should have no more than three steps to get to the key selector
  - `div#blog-footer div#col2.column div.bestright p.besttitle` => `#col2.column .besttitle`

#### Leverage + Layer Rulesets
- The next step is to focus on the style declarations themselves
- There are many properties that get inherited by descendent elements. 
  - Eg `color font-family font-size font-weightline-height list-style-type list-style text-align`
- Try to reduce the use of `!important`
- New rules should not undo an earlier style. Instead it should add style known as layering style rulesets
- Dry CSS: Group reusable css properties together and add your selector to various CSS groups

### MetaCoax Phase 2: Restructure, Adjust, and Modularize
- Phase 2 involves altering both CSS and HTML
- Goal is to give structure by removing excessive selectors and creating modules

#### Restructure to refactor
- Moving away from creating styles that are based on page components and page hierarchy, and moving toward portable, reusable and modular styles
- Categorize CSS Rules in the Stylesheet: Based on the type of styles
  ```
  /* Table of Contents

  - Base
  - Layout: page sections
  - Module
  - State: how a module or layout looks in a particular state
  - Theme

  */
  …

  (later in the document…)

  /* =Layout */ (etc.)
  ```
- Restructure Styles That Rely on Qualifiers High in the DOM  
- Use Class Names as Key Selector:
  - IDs are highly specific. Avoid using them. Instead use classes
  - Review child selectors and replace them with specific classes when possible

#### Begin instituting modules
- Frequently used styles can be abstracted into a module with base set of styles that every module would share
- Module can be extended or skinned to change text, color, float etc
- Extend Substyles with `--`
  - Visual indication that new style is based on previous one
  ```
  .button-search{
    width: 29px;
    height: 29px;
    border: 0;
    cursor: pointer;
    margin: 4px 0 0 4px;
    background: transparent url("/images/go.jpg") 0 0 no-repeat;
  }

  .button-search--pm{
    margin: 2px 0 0 3px;
    background: transparent url("/images/go.jpg") no-repeat center top;
  }
  ```

#### Create portable helper styles
- A pre-defined clas for layout helpers and typographical styles
```
.margin-top {margin-top: 5px;}
.margin-bottom {margin-bottom: .5em;}
.h-slug {font-size: .8em;}
.h-title {font-size: 1.5em;}
.h-author {font-size: 1em;}
```

#### Adjust the HTML
- If inline element like `<span>` needs to be displayed as block, opt for `<p>` tags
- Remove inline styles

