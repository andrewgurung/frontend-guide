# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
HTML Basics from Mozilla Developer Network <br/>
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics

[Assessment 1](assessment1)

Notes
-----
### Document and website structure

#### Basics of a document
 HTML code can be marked up as sections of content based on their functionality to remove ambiguity. It also helps screen readers recognize those elements.

```js
header: <header>
navigation bar: <nav>
main content: <main> with various subsection as <article>, <section> and <div> elements
sidebar: <aside> often placed inside of <main>
footer: <footer>
```

#### Sidenotes
- `<main>`: Use only once per page
- `<article>`: Independent block of content. Eg. a single blog post
- `<section>`: A generic document or application section generally with a heading
- `<aside>`: Additional information indirectly related to main content


#### Non-semantic wrappers
Non-semantic wrappers like `<div>` and `<span>` should only be used if you can't find a better semantic element

-----------------------------------------

### Debugging HTML

#### HTML and Debugging
HTML is not as complicated as other languages as HTML is not compiled into a different form before the browser parses it and shows the result (it is interpreted, not compiled).

##### Permissive code
Browser lets HTML code to run it permissively even if there are syntax errors. Browsers have built-in rules to interpret incorrectly written markups too.

#### HTML validation
The best strategy to check if your HTML is well-formed is by running it through a Validation Service.
- [Markup Validation Service](https://validator.w3.org)

-----------------------------------------

### Images in HTML

#### Adding Images
- Image: `<img src="images/bird.jpg">`
- Alternative text: `<img src="images/bird.jpg" alt="A green bird on a tree branch">`
- Dimensions: `width="400" height="200"`
- Title: Used to display as tooltip -- `title="Canary"`
- SEO Tip 1: Filenames are counted towards SEO
- SEO Tip 2: Google recommends image to be in the same directory as the HTML page
- Warning: Never point your `src` to someone else's website without permission. Also known as `hotlinking` stealing someone's bandwidth is illegal

#### Annotating an image with figure and figure caption
- Semantically links an image to its caption
- `figure` can be used for code snippet, audio, video or something else
```
<figure>
  <img src="images/bird.jpg"
        alt="A green bird on a tree branch"
        title="Canary">
  <figcaption>A Canary on tree</figcaption>
</figure>
```

#### CSS background images
- CSS images are used for decoration without any semantic meaning
- HTML images have meaning
```
p {
  background-image: url("images/bird.jpg");
}
```



-----------------------------------------
