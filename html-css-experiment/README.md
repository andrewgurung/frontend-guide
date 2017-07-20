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
