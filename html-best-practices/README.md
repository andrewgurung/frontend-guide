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
- [x] [OOCSS, ACSS, BEM, SMACSS](http://clubmate.fi/oocss-acss-bem-smacss-what-are-they-what-should-i-use/)
- [X] [Medium’s CSS is actually pretty f***ing good](https://medium.com/@fat/mediums-css-is-actually-pretty-fucking-good-b8e2a6c78b06#.ef81j61eg)
- [x] [MeyerWeb CSS Reset](http://meyerweb.com/eric/tools/css/reset/index.html)
- [x] [Create Your Own Simple Reset.css File](http://code.tutsplus.com/tutorials/weekend-quick-tip-create-your-own-resetcss-file--net-206)
- [x] [CSS Vendor Prefixes](https://www.thoughtco.com/css-vendor-prefixes-3466867)
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

-----------------
## OOCSS, ACSS, BEM, SMACSS
### Object Oriented CSS (OOCSS)
- Keep the structure and skin separate
  - Eg: Button and gradient should be separate
- Separate container and content by going straight into the object
  - Eg: Use `.list-item` instead of `ul li.list-item`

### Atomic CSS (ACSS)
- Just one declaration per class to make it reusable
- Styling goes into markup
- Hard for responsive media queries to affect layout as the styling is inside the markup
- Instead of styling `p` in CSS, we put the style `di` inside of the markup of `p`
```
<p>
    Paragraphs are by default block elements.
</p>
<a href="#">
    More→
</a>
```
```
CSS:
.di {
    display: inline;
}

HTML:
<p class="di">
    Paragraphs are by default block elements.
</p>
<a href="#">
    More→
</a>
```

### Block, Element, Modifier (BEM)
- Easier for everyone to understand because of strict naming rules
- `.block {}`: This is the Block
- `.block__element {}`: This is an element, that helps to form the block as a whole
- `.block--modifier {}`: This modifies the element or a block

```
<!-- Block -->
<header class="col-header">

    <!-- Block element -->
    <h1 class="col-header__heading">
        <a class="col-header__link" href="/">clubmate.fi</a>
    </h1>

    <!-- Block element -->
    <span class="col-header__beta">(beta)</span>

    <!-- New Block / Not related to parent block-->
    <nav class="nav">

        <!-- Block element -->
        <a class="nav__item" href="/">Home</a>

        <!-- Block element -->
        <a class="nav__item" href="/archives">Archives</a>

        <!-- Element and a modifier -->
        <a class="nav__item nav__item--uplink" href="#header">&uarr;</a>

    </nav>
</header>
```

### SMACSS—Scalable and Modular Architecture for CSS
- More of a style guide than rigid framework
- Pronounced as smacks
- [SMACSS official site](https://smacss.com/)

-----------------

## Medium's CSS is actually pretty f***ing good
- Icon font reduced 97% of the img folder
- Use LESS to manage z-index
```
@zIndex-1:   100;

@zIndex-1--screenForeground:        @zIndex-1;
```
- .js- prefixed class names for elements being relied upon for javascript selectors. No styling on .js classes
- .u- prefixed class name for single purpose utility classes like .u-underline, .u-capitalize,
- Components: `<componentName>[--modifierName|-descendantName]`
  - Modifier: `btn--default`
  - Descendant: `tweet-avatar`
- Variables: `<property>-<value>[--componentName]`
```
@color-grayLight--highlightMenu: rgb(51, 51, 50);
```
- Colors: Use rgb, rgba instead of hex-value or hsl
- Use quotes
```
Correct:
background-image: url("/img/you.jpg");

Wrong:
background-image: url(/img/you.jpg);
```
- Specificity for performance
```
Correct:
.user-list > a:hover {
  color: red;
}

Wrong:
ul.user-list li span a:hover { color: red; }
```
-----------------

## MeyerWeb CSS Reset
- The goal of a reset stylesheet is to reduce browser inconsistencies in things like default line heights, margins and font sizes of headings, and so on
- MeyerWeb CSS is recommended to be overridden with our custom styles
- This is a starting point, not a self-contained black box of no-touchiness
```
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
```
-----------------

## CSS Vendor Prefixes
- A way for browser vendors to add support for new CSS features before they are fully supported in all browsers
- Webkit-powered browsers: Safari and Chrome
- Vendor Prefixes aren't hacks
- [Can I use.com](http://caniuse.com/)

### CSS browser prefixes:
- `-webkit-`: Android, Chrome, iOS, Safari
- `-moz-`: Firefox
- `-ms-`: Internet Explorer
- `-o-`: Opera

CSS prefix for transition property:
```
-webkit-transition: all 4s ease;
-moz-transition: all 4s ease;
-ms-transition: all 4s ease;
-o-transition: all 4s ease;
transition: all 4s ease;
```
