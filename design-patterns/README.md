# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
##  Design Patterns

Table of Contents
-----------------

- [x] [MVC Architecture](https://developer.chrome.com/apps/app_frameworks)
- [x] [model-view-viewmodel](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93viewmodel)
- [x] [model–view–presenter](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93presenter)
- [x] [Separation of concerns](https://en.wikipedia.org/wiki/Separation_of_concerns)
- [x] [Understanding MVC And MVP](https://addyosmani.com/blog/understanding-mvc-and-mvp-for-javascript-and-backbone-developers/)
- [x] [Understanding MVVM](https://addyosmani.com/blog/understanding-mvvm-a-guide-for-javascript-developers/)
- [ ] [GUI Architectures](http://martinfowler.com/eaaDev/uiArchs.html)
- [x] [JavaScript MV* Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#detailmvcmvp)
- [ ] [Learning JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)
- [ ] [Decorator](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#decoratorpatternjavascript)
- [ ] [Factory](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)
- [ ] [Singleton](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#singletonpatternjavascript)
- [ ] [Revealing module](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#revealingmodulepatternjavascript)
- [ ] [Facade](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#facadepatternjavascript)
- [ ] [Observer](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#observerpatternjavascript)

-----------------

## MVC Architecture
### Model
- Model is where the application’s data objects are stored.
- When a model changes, typically it will notify its observers that a change has occurred

### View
- View is what's presented to the users and how users interact with the app
- The view is made with HTML, CSS, JavaScript and often templates

### Controller
- The controller is the decision maker and the glue between the model and view
- The controller updates the view when the model changes
- It also adds event listeners to the view and updates the model when the user manipulates the view

### Benefits of MVC
- Reusable and extendable code
- Separation of view logic from business logic
- Allow simultaneous work between developers who are responsible for different components
- Easier to maintain

### MVC persistence patterns
1. Model does its own persistence - ActiveRecord pattern
- Responsibility for persistence on the model is on itself and is typically implemented via JSON API
- Different approach: Have separate concept of Store and Adapter API
  - Store: Holds the loaded models, and it also provides functions such as creating, querying and filtering the model
  - Adapter API: Adapter, or a proxy that takes requests from a store and connects to persistent data layer (such as JSON API)

2. Controller does persistence
- Holds a reference to both the model and a datastore and is responsible for keeping the model persisted

3. AppController does persistence
- In some patterns, there is a supervising controller responsible for navigating between one MVC and another
- The AppController decides, for example, that a 'Back' button moves the client from an editing screen (which contains MVC widgets/formats), to a settings screen

### Notes
- Although built for desktop application, MVC has been widely adopted as an architecture for World Wide Web
- Thin-client MVC is a variation of MVC where almost the entire model, view and controller logic on the server. Client sends a hyperlink request that returns a complete and updated webpage

-----------------

## Separation of concerns

-----------------

## Understanding MVC And MVP

-----------------

## Understanding MVVM

-----------------

## GUI Architectures

-----------------

## JavaScript MV* Patterns

-----------------

## Learning JavaScript Design Patterns

-----------------

## Decorator

-----------------

## Factory

-----------------

## Singleton

-----------------

## Revealing module

-----------------

## Facade

-----------------

## Observer

-----------------
