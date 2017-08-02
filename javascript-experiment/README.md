# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
##  Experiments

Table of Contents
-----------------

- [x] [Experiment 1: Airbnb]()
- [ ] [Experiment 2: Mood Color Generator]()
- [ ] [Experiment 3: Flipboard Clone](https://www.codecademy.com/skills/make-an-interactive-website)
- [ ] [Experiment 4:JS Clock]()
- [ ] [Experiment 5: ToDo App using vanilla JS](http://todomvc.com/examples/vanillajs/)
- [ ] [Experiment 6: Etsy Clone using AngularJS](https://scotch.io/tutorials/build-an-etsy-clone-with-angular-and-stamplay-part-1)
- [ ] [Experiment 7: ToDo App using ReactJS + Flux](https://www.sitepoint.com/how-to-build-a-todo-app-using-react-redux-and-immutable-js/)
-----------------

## Experiment 1: AirBnB Live Manipulation
- [HTML DOM Style Object Properties](https://www.w3schools.com/jsref/dom_obj_style.asp)
1. Select a header tag with a unique class name and change the text
```
var header = document.querySelector('.rowHeader_u7v45o')
header.innerText = 'My destinations'
```

2. Select any element on the page and remove it
```
var header = document.querySelector('.rowHeader_u7v45o')
header.remove();
```

3. Select any element and change one of its CSS properties
```
var header = document.querySelector('.rowHeader_u7v45o')
header.style.backgroundColor = "orange";
```

4. Select a specific section tag and move it down 250 pixels
```
var section = document.querySelector('section');
section.style.marginTop = "250px";
```

5. Select any component, like a panel, and adjust its visibility
```
document.querySelector('.pageContainer_pheyz5').style.visibility = "hidden";
```

6. Define a function named doSomething that alerts “Hello world” and then execute it
```
function doSomething() {
  alert('Hello Airbnb');
}
doSomething();
```
7. Select a specific paragraph/span tag, add a click event listener to it, and run doSomething every time the event is fired
```
function doSomething() {
  alert('Hello Airbnb');
}

document.querySelector('.textHeaderTitle_153t78d-o_O-textHeader_rausch_hp6jb4').addEventListener("click", doSomething);
```

-----------------

## Experiment 2: Mood Color Generator
