# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung
URL: http://www.andrewgurung.com/

Context
-----------------
## Learn CSS Layout
http://learnlayout.com/

Notes
-----------------
## The "display" property
- CSS's most important property for controlling layout
- The default for most elements is usually `block` or `inline`

### block
- Starts on a new line and stretches out to the left and right as far as it can
- `display: block`
- div, footer, header, p, form

### inline
- Can wrap text without disrupting the flow
- `display: inline`
- span

### none
- Will render the page as though the element does not exist
- `display: none`
- Better than `visibility: hidden` which will take space even if it is hidden
- `script` use this as their default

## margin: auto
- `width`: Set the width of `block` elements so that it doesn't stretch out to the edges of its container from left to right
- `margin`: Set left and right margins to `auto` to center the element
- Problem: If browser window is smaller than the width of your element
```
#main {
  width: 600px;
  margin: 0 auto;
}
```

## max-width
- Better than using `width`
- Improves the browser handling of small windows
```
#main {
  max-width: 600px;
  margin: 0 auto;
}
```

## The box model
- `width:500px` doesn't guarantee a total box width of 500px
- The element's border and padding will stretch out the element beyond the specified width
- In the following case, even though both elements have the same `width` of 500px, the `fancy div` will end up being bigger than `simple div`
```
.simple {
  width: 500px;
  margin: 20px auto;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
}
```

## box-sizing
- `box-sizing: border-box;` -- the padding and border of that element no longer increase its width
- `-webkit-` and `-moz-` prefixes needs to be added as box-sizing is an experimental feature
```
.simple {
  width: 500px;
  margin: 20px auto;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}

.fancy {
  width: 500px;
  margin: 20px auto;
  padding: 50px;
  border: solid blue 10px;
  -webkit-box-sizing: border-box;
     -moz-box-sizing: border-box;
          box-sizing: border-box;
}
```

## position
[JSBin: Position practical example](http://jsbin.com/nepaju/5/edit?css,output)
1. static
- Not positioned in any special way
- A `static` element is said to be not positioned
```
.static {
  position: static;
}
```

2. relative
- `relative` behaves the same as static unless you add some extra properties
- Setting the `top`, `right`, `bottom`, and `left` properties of a relatively-positioned element will cause it to be adjusted away from its normal position
```
.relative2 {
  position: relative;
  top: -20px;
  left: 20px;
}
```

3. fixed
- Is positioned relative to the viewport/browser, which means it always stays in the same place even if the page is scrolled
- `top`, `right`, `bottom`, and `left` properties can be set
- A fixed element does not leave a gap in the page where it would normally have been located
```
.fixed {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 200px;
  background-color: white;
}
```

4. absolute
- `absolute` behaves like `fixed` except relative to the `nearest positioned ancestor` instead of relative to the viewport
-  If an absolutely-positioned element has no positioned ancestors, it uses the document body and moves along with page scrolling
-  A `positioned` element is one whose position is anything except static
```
.relative {
  position: relative;
  width: 600px;
  height: 400px;
}
.absolute {
  position: absolute;
  top: 120px;
  right: 0;
  width: 300px;
  height: 200px;
}
```

## float
- Float is intended for wrapping text around images
```
img {
  float: right;
  margin: 0 0 1em 1em;
}
```

## clear
- Is important for controlling the behavior of floats mainly to avoid overlapping problem
- clear: left, right, both
- Used to reset a previous floating layer
```
.box {
  float: left;
  width: 200px;
  height: 100px;
  margin: 1em;
}
.after-box {
  clear: left;
}
```

## clear-fix hack
- Sometimes an image is taller than the element containing it. So the image overflows the parent container
- clear-fix solution:
```
overflow: auto;
```

## float layout example
- first div: Set width:200px and float left
- second div: Set left margin equal to 200px
```
nav {
  float: left;
  width: 200px;
}
section {
  margin-left: 200px;
}
```

## percent width
- Percent is a measurement unit relative to the `containing` block

## media queries
- Used for responsive design
```
@media screen and (min-width:600px) {
  ..
}
@media screen and (max-width:599px) {
  ..
}
```
