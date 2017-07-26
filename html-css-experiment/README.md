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
<svg viewBox="0 0 1000 1000" role="presentation" aria-hidden="true" focusable="false" style="display: inline-block; fill: rgb(118, 118, 118); height: 1.5em; width: 1.5em;"><path d="M499.3 736.7c-51-64-81-120.1-91-168.1-10-39-6-70 11-93 18-27 45-40 80-40s62 13 80 40c17 23 21 54 11 93-11 49-41 105-91 168.1zm362.2 43c-7 47-39 86-83 105-85 37-169.1-22-241.1-102 119.1-149.1 141.1-265.1 90-340.2-30-43-73-64-128.1-64-111 0-172.1 94-148.1 203.1 14 59 51 126.1 110 201.1-37 41-72 70-103 88-24 13-47 21-69 23-101 15-180.1-83-144.1-184.1 5-13 15-37 32-74l1-2c55-120.1 122.1-256.1 199.1-407.2l2-5 22-42c17-31 24-45 51-62 13-8 29-12 47-12 36 0 64 21 76 38 6 9 13 21 22 36l21 41 3 6c77 151.1 144.1 287.1 199.1 407.2l1 1 20 46 12 29c9.2 23.1 11.2 46.1 8.2 70.1zm46-90.1c-7-22-19-48-34-79v-1c-71-151.1-137.1-287.1-200.1-409.2l-4-6c-45-92-77-147.1-170.1-147.1-92 0-131.1 64-171.1 147.1l-3 6c-63 122.1-129.1 258.1-200.1 409.2v2l-21 46c-8 19-12 29-13 32-51 140.1 54 263.1 181.1 263.1 1 0 5 0 10-1h14c66-8 134.1-50 203.1-125.1 69 75 137.1 117.1 203.1 125.1h14c5 1 9 1 10 1 127.1.1 232.1-123 181.1-263.1z"></path></svg>
```
