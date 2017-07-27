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
- [ ] [What Makes For a Semantic Class Name](https://css-tricks.com/semantic-class-names/)
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
