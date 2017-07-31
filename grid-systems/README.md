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
- [ ] [An Introduction to Mobile-First Media Queries](https://www.sitepoint.com/introduction-mobile-first-media-queries/)
- [ ] [CSS Architectures: Refactor Your CSS](https://www.sitepoint.com/css-architectures-refactor-your-css/)
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

-----------------

## An Introduction to Mobile-First Media Queries

### Shades of Mobile-First
1. Mobile-first design: Designs that focus on essentials due to device screen constraints. Enhance user experience through GPS, accelerometer etc.
2. Mobile-first implementation: Start by designing at the smallest viewport possible then progressively add styles as viewport increases

