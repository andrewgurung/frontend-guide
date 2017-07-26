# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
## Experiment 1: Dribble Examples

### [Mobile Blog App Interface](https://codepen.io/andrewgurung/full/rwEOaP/)
- Used `flexbox` to create equal sized columns
- Used [Cloudinary](cloudinary.com) to host images
- Used `align-items: center; justify-content: center; ` to align an element both horizontally and vertically
- Used [Google Fonts](https://fonts.google.com/)
- Used pseudo class name `::first-letter` to stretch the first letter


### [Task List App Interface](https://codepen.io/andrewgurung/pen/yXdRjP)
- Halo effect `box-shadow: 0 0 4rem #a8aeb7`
- Transparent background color `background-color: rgba(100,80,131,0.6)`
- Add composite background with `linear-gradient(to right, rgba(100,80,131,0.5), rgba(71, 67, 114,0.8)),` and `url(http://res.cloudinary.com/ddylgzvo9/image/upload/c_scale,w_500/v1500511449/pexels-photo_dtx3ub.jpg) no-repeat`
- Nested flexbox
- Add HTML Content using CSS
```
.star-checked::before {
  content: '★';
  font-size: 2.5rem;
}
```
- Add .svg `<img>` and changed color using `filter` CSS property
- Hide checkbox but keep the space intact `visibility: hidden`. Note: `display: hidden` will remove space
- Style checked and unchecked checkbox
```
input[type="checkbox"] {
  width: 2rem;
  height: 2rem;
  opacity: 0.4;
}

input:checked {
  opacity: 0.8;
}
```

### [Location Card Interface](https://codepen.io/andrewgurung/pen/jwgGwM)
- Nested div that floats in middle
```
main {
  width: 80rem;
  height: 60rem;
  margin: 0 auto;
}

.card {
  margin: auto;
  position:relative;
  top: 3rem;
  width: 63rem;
  height: 52rem;
}
```
- Use `word-spacing` to space hashtags
- Use `filter:brightness(0.4)` to darken thumbnail when not selected
- Display thumbnails as links: hover effect + hand when mouse over
```
/* Darken image when not selected*/
.cardDescFooter img {
  height: 7rem;
  width: 7rem;
  filter:brightness(0.4);
}

/* Display full brightness when hovered*/
.cardDescFooter img:hover{
  filter:brightness(1);
  cursor: pointer;
}
```

- Background image opacity hack. There is no such thing as background-opacity but can fake it by inserting a pseudo element with regular opacity the exact size of the element behind it.

```
.cardDescSection {
  position: relative;
}

.cardDescSection::after {
  content: "";
  background-image: url('http://res.cloudinary.com/ddylgzvo9/image/upload/v1500601554/newyorkskyline_zqredc.png');
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: 10;
}
```

### [Confirm Reservation Interface](https://codepen.io/andrewgurung/full/LjPyVO)
- Use `⚲` for search icon and rotate using `transform: rotate(305deg)`
- Cast shadow downwards vertically using `box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.6)`
  Syntax: position of horizontal-shadow, position of vertical-shadow, blur, color

-----------------------------------

## Experiment 2: Clone sections from popular sites

### [Dropbox Hero Section](https://codepen.io/andrewgurung/full/vJYRGM/)
Challenge: Responsive square background image. Would have been easier if the background image size would cover the whole width/container
- Make the parent div `position: relative` so that the inner child can be `absolute`
```
.hero {
  background: #e3eefc;
  position: relative;
  padding: 0;
  width: 100%;
}
```
- Solution 1: Set background to center and offset towards left which looks good even when the window is resized
```
position: absolute;
top: 0;
left: 50%;
margin-left: -28rem;
width: 100rem;
```
- Solution 2: Use media queries in ascending order
  - Base: No Image
  - Small window: `background-size: cover` to zoom
  - Bigger window: `background: contain` to scale and fit
```
.hero-background-container {
}

@media (min-width: 381px) {
  .hero-background-container {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    background-image: url(https://cfl.dropboxstatic.com/static/images/business/homepage/background--db-vfl4SbjZf.jpg);
    background-repeat: no-repeat;
    background-position: right center;
    background-size: cover;
    z-index: 1;
  }
}

@media (min-width: 801px) {
  .hero-background-container {
    background-size: contain;
  }
}
```
-----------------------------------

### [Airbnb Footer](https://codepen.io/andrewgurung/full/KvwaKV/)
- Replace default select arrow with font-awesome arrow
HTML:
```
<select name="lang" id="lang" class="customArrow">
  <option value="English">English</option>
  ...
</select>
<i class="fa fa-chevron-down"></i>
```
CSS:
```
/* remove the original arrow */
select.customArrow {
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
}

select + i.fa {
  float: left;
  margin-top: -5rem;
  margin-left: 62%;
  pointer-events: none;
}
```
- Offset logo vertically lower
```
#footer_logo {
  float: left;
  margin-top: -3px;
}
```
- Use SVG for Airbnb logo
```
<svg viewBox="0 0 1000 1000" role="presentation"
aria-hidden="true" focusable="false"
style="display: inline-block; fill: rgb(118, 118, 118); height: 1.5em; width: 1.5em;">
<path d="M499.3 ........">
</path>
</svg>
```

------------------------------

### [Paypal Navigation](https://codepen.io/andrewgurung/full/GvgwXK/)
- Paypal logo is displayed using empty anchor tag. Height and width cannot be applied to inline element, hence need to set it as `inline-block`
HTML:
```
```
<a href="#" class="logo-icon-nav"></a>
```

CSS:
```
.logo-icon-nav {
  display: inline-block;
  background: url("https://www.paypalobjects.com/webstatic/i/logo/rebrand/ppcom-white.svg") no-repeat top center;
  background-size: contain;
  width: 136px;
  height: 43px;
}
```
- Align text inside button vertically
```
height: 4rem;
line-height: 3.5rem;
```
- Offset buttons to line up with navigation menu. By default the button is pushed a bit lower than regular navigation menu text
```
transform: translateY(-20%);
```
- Cool trick: Drop down arrow with pure CSS
  - Have a square border
  - Rotate 45deg
  - Hide top right and left borders
  - Results in lower right and left borders --> Displayed as a downward arrow
```
.submenu:after {
  content: "";
  display: inline-block;
  width: 1rem;
  height: 1rem;
  position: relative;
  top: -0.4rem;
  left: 1rem;
  border: 1px solid #FFFFFF;
  border-top: 1px solid transparent;
  border-left: 1px solid transparent;
  transform: rotate(45deg);
}
```
