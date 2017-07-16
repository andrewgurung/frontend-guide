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
