# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
## HTML and CSS Best Practices

Table of Contents
-----------------

- [x] [A Look Into Proper HTML5 Semantics](http://www.hongkiat.com/blog/html-5-semantics/)
- [x] [What Makes For a Semantic Class Name](https://css-tricks.com/semantic-class-names/)
- [ ] [OOCSS, ACSS, BEM, SMACSS](http://clubmate.fi/oocss-acss-bem-smacss-what-are-they-what-should-i-use/)
- [ ] [Medium’s CSS is actually pretty f***ing good](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.ef81j61eg)
- [ ] [MeyerWeb CSS Reset](http://meyerweb.com/eric/tools/css/reset/index.html)
- [ ] [Create Your Own Simple Reset.css File](http://code.tutsplus.com/tutorials/weekend-quick-tip-create-your-own-resetcss-file--net-206)
- [ ] [CSS Vendor Prefixes](https://www.thoughtco.com/css-vendor-prefixes-3466867)
- [ ] [SCSS](https://www.sitepoint.com/whats-difference-sass-scss/)
- [ ] [PostCSS](https://github.com/postcss/postcss)

-----------------

## A Look Into Proper HTML5 Semantics
- Semantics is the study of meaning not mere structures/syntax
- Proper semantics lead to better SEO and accessibility to screen readers

### Semantic Elements Before HTML5
- `form`, `img`, `table`, `ul`, `h1`, `h2` etc
- Nobody puts a table inside an `img` tag
- But `table` was widely misused to structure webpage instead of representing data

### Non-Semantic Elements
- `div` and `span` are the most common non-semantic tags

### Text Semantics in HTML5
- `em`, `strong`, `time` for human readable date times, `mark` for highlighted text

### Document Outline in HTML5
In HTML5 the document can be outlined by new sectioning elements,
- `<section>` for sections grouped around a specific theme
- `<article>` for complete or self-contained compositions such as a blog post or a widget
- `<nav>` for navigation blocks
- `<aside>` for complementary content such as sidebars
-  Each section (body, section, article, aside, nav) can have their own `<header>` and `<footer>` tags

NOTES:
- OLD Sectioning element: `<body>`
- `<nav>` and`<aside>` tags don't belong to the main outline of the HTML document. Usually not rendered initially by assistive technologies
- Each section has its own heading hierarchy. Each of them (even the innermost nested section) can have an h1 tag
- A Semantic Outline example:
![A Semantic Outline](http://media02.hongkiat.com/html-5-semantics/document-outline-example.jpg)

-----------------

## What Makes For a Semantic Class Name
### Unsemantic
- `div`
- `<div class="article_title">`
- `<div class="darkbold">`
- `<div class="column_1">` class widely used and avoidable in grid systems. Used for specifing rather than describing the content
- `<div class="largeText">`. Opt for 'standOut' or 'callout_text' because in future you may use color to standout rather than font size
- <p class="introp"> to style the first paragraph of a page. Semantic solution: `article p:first-of-type` or `h1 + p`
- `<div class="clearfix">`: Used for fixing float. Nothing to do with meaning of the content
- `<div class="left">`
- `<div class="plain-jane">`: Do not specify CSS for plain, normal or regular scenario. CSS should automatically cascade
- `<a class="link" href="#">` class="link" is redundant. To separate from other links use specific class `book-link` etc

### Semantic
- `article`
- `<h1>`
- `<strong>`
- `class="priority-2"`: Can be used to describe the color and size of buttons. Similar to h1,h2...
-  `class="success"`: Can be used with other class to represent success and style it differently
- `<article class="movie-review">` is more flexible and semantic. Easier to change the background to green
- Unsemantic version: `<article class="blueBg">`. Problem arises when the movie background or blueBg has to be changed to green?
