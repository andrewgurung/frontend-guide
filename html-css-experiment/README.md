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
