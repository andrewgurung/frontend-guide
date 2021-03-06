# Front-End Development Learning Guide
From Zero to Front-end Hero

Author Info
-----------
Author: Andrew Gurung <br>
URL: http://www.andrewgurung.com/

Context
-----------------
## HTML Basics from Mozilla Developer Network <br/>
https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics

[Assessment 1](assessment1)

[Assessment 2](assessment2)

[Assessment 3](assessment3)

[Assessment 4](assessment4)

Notes
-----
### HTML Basics
#### Whitespaces
- Whitespaces in HTML are ignored
```
<p>Whitespaces
       does       not mean

                 anything.
</p>
```

#### Entity References
- Special Characters: `< > & " '`
- Each character reference is started with an ampersand (`&`), and ended by a semi-colon (`;`)

#### Inline Vs Block elements
- Block level elements form a visible block on a page. Eg: paragraphs, lists, menus, footers
- Inline elements are contained within a block element. Eg: a, em, strong
`<em>First</em><em>Second</em><em>Third</em>`

#### Empty elements
- Elements without closing tags. Eg: img tag
```
<img src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png" alt="Firefox logo">
```
#### Boolean attribute
- Attributes without values. Eg: disabled
```
<input type="text" disabled="disabled">
<input type="text" disabled>
```

#### HTML Head

- `head` element is not displayed but is used to store metadata about the document
- `title` element is also used in search result page and bookmark title
- `meta charset="utf-8"` is a universal character set
- Nepalese example: `नेपाली`
- `meta name="author" content="Andrew Gurung"`
- `meta name="description" content="HTML Basics"`: helps in Search Engine Optimization

#### Other types of metadata
- Facebook and Twitter has their own proprietary creations
- meta property="og:image" content="https://developer.cdn.mozilla.net/static/img/opengraph-logo.dc4e08e2f6af.png" : will display an image when you link to MDN on facebook

#### Adding custom icons to your site
- link rel="shortcut icon" href="favicon.png": add png or jpg as favicon
- link rel="shortcut icon" href="favicon.ico" type="image/x-icon": add .ico as favicon
- link rel="apple-touch-icon-precomposed" sizes="114x114" href="icon.png": favicon for specific devices. Eg: High-resolution Iphone

#### Adding CSS and JavaScript
1. Adding CSS: link rel="stylesheet" href="my-css-file.css"
2. Adding JavaScript: <script src="my-js-file.js"></script>. It is often better to put 'script' element is better at the end of the document before closing 'body' tag

#### Setting the primary language of the document CSS and JavaScript
- `html lang="en-US"`
- Helps page to be indexed effectively by search engines
- Useful for visal impairments using screen readers

#### HTML text fundamentals
- `h1` element: Gives both appearance and semantic value. Used by search engines and screen readers
- `span style="font-size: 32px; margin: 21px 0;"` may be used to achieve the same appearance as 'h1' element but doesn't provide any semantic value
- `em` element: Used to emphasis words putting them in italics. Spoken in different tone of voice by screen readers
- Presentational elements: `i`, `b`, `u` elements should no longer be used. Opt for semantic elements like `em`, `strong`
- **Warning** about underline: People strongly associate underlining with hyperlinks


#### Hyperlinks
```
<a href="http://www.andrewgurung.com" title="Hover over tooltip text">AndrewGurung.com</a>
```
- Moving down into subdirectories: children/index.html
- Moving back into parent directory: ../home/index.html
- Document fragments: index.html#html_head. Eg: HTML Head

#### Best Practice:
- Don't repeat the link text
- Don't say 'link' or 'link to'. It's just noise
- Keep link text short for screen readers
- Multiple copies of same text like 'click here' which points to different places is confusing for screenreader users
- Use relative paths as absolute paths are less efficient. Browser will query domain with DNS
- Leave clear signpost for non-HTML resources. Eg: Download sales report (PDF, 10MB), Play car game (requires Flash)
- Use download="firefox-39-installer.exe" attribute to provide a default save filename

#### Email links
` href="mailto:nowhere@gmail.com?cc=no@gmail.com&bcc=name3@rapidtables.com&subject=The%20subject&body=The%20body"` Eg. Send email with `cc`, `bcc`, `subject` and `body`

#### Advanced text formatting
- Description Lists
```
<dl>
  <dt>Description Title</dt>
  <dd>'dt' (description term) element</dd>
  <dt>Description Description</dt>
  <dd>'dd' (description term) element</dd>
</dl>
```

- Blockquotes: Section of content quoted from somewhere else. Include a url in 'cite' attribute
```
<blockquote cite="http://www.google.com">
  <p>The <strong>HTML</strong> blockquote</p>
</blockquote>
```

- Inline quotation: Displays content surrounded by quotes
```
<p>The inline <q cite="http://google.com">quotation don't require paragraph breaks</q></p>
```

- Citations: cite element vs cite attribute. If you want to make the source of the quotation available on the page, a better way to mark it up is put the cite element next to the quote element.
```
<p>According to the <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
<cite>MDN blockquote page</cite></a>:
</p>
<blockquote cite="http://www.google.com">
  <p>The <strong>HTML</strong> blockquote</p>
</blockquote>
```

- Abbreviations: `abbr` element with title attribute shown when hovered over
```
<p>We use <abbr title="Hypertext Markup Language">HTML</abbr></p>
```

- Address: `address` element used for marking up contact details
```
<address>
  <p>Bethesda, Maryland, USA</p>
  <p>Page written by <a href="../authors/andrew/">Andrew</a></p>
</address>
```

- Superscript and subscript: `sup` and `sub` for date, chemical, mathematical equations
```
<p>22<sup>nd</sup> August</p>
<p>H<sub>2</sub>0</p>
```

- Time and Date
```
<!-- Standard simple date -->
<time datetime="2017-06-19">19 June 2017</time>
<br>
<!-- Just year and month -->
<time datetime="2017-06">June 2017</time>
```

#### Representing computer code
[JSFiddle Practice](https://jsfiddle.net/dxa2thnh/)
1. code: Generic code
2. pre: Retains whitespace and multilines
3. var: Mark variable names
4. kbd: Keyboard input
5. samp: Output
```
<pre>
 <code>
   var para = 'Test para';
   function display() {
     console.log(para);
   }
 </code>
</pre>
<p><var>para</var> is a sample textarea</p>

<p>Select all text with <kbd>Cmd</kbd>+<kbd>A</kbd></p>
<samp>$ ping google.com</samp>
<hr>
```
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

### Video and audio content

#### Video element
- `video` element with `src` that points to video source and `controls` boolean attribute to show or hide controls
- Best Practice: Provide a fallback content if browser doesn't support HTML5 video

```
<video src="resources/rabbit320.webm" controls>
  <p>Here is the link to the <a href="resources/rabbit320.webm">video</a> if it doesn't play.</p>
</video>
```

#### Supporting multiple formats
- Not all browser support every video format so list multiple video sources
- `source` element with `src` and `type` attributes
- Best practice: Include `type` attribute so that browser skips an unknown format
- Eg: Safari doesn't support `webm` but supports `mp4` format

```
<video controls>
  <source src="resources/rabbit320.mp4" type="video/mp4">
  <source src="resources/rabbit320.webm" type="video/webm">
  <p>Here is the link to the <a href="resources/rabbit320.webm">video</a> if it doesn't play.</p>
</video>
```

#### Other `<video>` features
```
<video controls width="400" height="400" muted autoplay loop poster="images/bird.jpg">
```

#### Audio element
- `audio` element similar to `video` but doesn't support width, height and poster properties
```
<audio controls>
  <source src="resources/viper.mp3" type="audio/mp3">
  <source src="resources/viper.ogg" type="audio/ogg">
  <p>Here is the link to the <a href="resources/viper.mp3">audio</a> if it doesn't play.</p>
</audio>
```

#### Displaying video text tracks
- HTML5 supports subtitle with `track` element and WebVTT format
- `.vtt` file format
```
<track label="English" kind="subtitles" src="resources/subtitle.vtt" srclang="en">
```
-----------------------------------------

### Embedding Technologies

#### `<iframe>` element
- `iframe` element allows user to embed other web documents into the current document such as youtube, google maps, discuss etc.
- Always use the `sandbox` attribute
- `iframe` is a common target for hackers
- Only embed when necessary
- Never embed third-party content with HTTP
- HTTPS prevents embedded content from accessing content in your parent document, and vice versa
```
<iframe src="https://developer.mozilla.org/en-US/docs/Glossary" width="100%" height="500" frameborder="0" allowfullscreen sandbox>
  <p> <a href="https://developer.mozilla.org/en-US/docs/Glossary">
      Fallback link for browsers that don't support iframes
      </a>
  </p>
</iframe>
```

#### `<embed>` and `<object>` element
- General purpose embedding tools
- Not popular these days

```
<object data="mypdf.pdf" type="application/pdf"
        width="800" height="1200" typemustmatch>
  <p>You don't have a PDF plugin, but you can <a href="myfile.pdf">download the PDF file.</a></p>
</object>

<embed src="whoosh.swf" quality="medium"
  bgcolor="#ffffff" width="550" height="400"
  name="whoosh" align="middle" allowScriptAccess="sameDomain"
  allowFullScreen="false" type="application/x-shockwave-flash"
  pluginspage="http://www.macromedia.com/go/getflashplayer">
```

#### Best Practice
- Use HTML5 video element for media
- Use SVG for vector graphics
- Use Canvas for complex image and animations
-----------------------------------------

### Vector graphics
- On the web, we work with two types of images
1. Raster images: Defined using a grid of pixels. jpg, png, gif
2. Vector images: Defined using algorithms. SVG

- Vector images doesn't pixellate when zoomed in
- Vector images are much lighter in size

#### SVG
- SVG is an XML based language for describing vector images
- Most people use a vector graphic editor like Inkscape or Illustrator

#### How to include SVG code inside your HTML
- Use <svg></svg> element
- Pros: Can assign `classes` and `ids` to SVG elements for styling
- Drawback 1: Hard for reuse
- Drawback 2: Browsers cannot cache inline SVG

```
<svg width="300" height="200">
  <rect width="100%" height="100%" fill="black"/>
  <circle cx="150" cy="100" r="90" fill="blue"/>
</svg>
```

#### Drawbacks of SVG
- Complex SVG can take significant processing time in browser
- Harder to create than raster images
- Not supported in older browser

#### Adding SVG to your pages
- Embed SVG via an `<img>` element
- Drawback 1: Cannot manipulate the image with JavaScript
- Drawback 2: Must use include inline CSS styles in your SVG code to control styling
```
<img src="resources/sample.svg" alt="SVG sample" width="300" height="300">
<hr>
```

#### Supporting older browser
- Use `src` for fallback content and use `srcset` to list svg content
```
<img alt="triangle with equal sides" srcset="equilateral.svg" src="equilateral.png">
```

#### Embed an SVG with an `<iframe>`
```
<iframe src="resources/sample.svg" width="300" height="400" frameborder="0" sandbox>
  <img src="fallback.png" alt="Pen" />
</iframe>
```
-----------------------------------------

### Responsive Images
- Responsive image technologies are implemented in two ways
a. Resolution switching: Having same image with different number of pixels
b. Art direction: Different images that may be cropped for different devices
- Responsive image cannot be implemented with CSS or JavaScript as images are preloaded by browser

#### Resolution switching
- Serve smaller image files to narrow screen devices
- Serve different resolution images to high density/low density screens
- Solved using vector graphics (SVG images), and the `srcset` and `sizes` attributes
- srcset: Which image to display? Base on browser window. Eg: If browser window is less than 320px, display elva-fairy-320w.jpg.
- sizes: After deciding which image to display from `srcset`, use `sizes` attribute to determine how big you want to render the image as?

```
<img srcset="elva-fairy-320w.jpg 320w,
             elva-fairy-480w.jpg 480w,
             elva-fairy-800w.jpg 800w"
     sizes="(max-width: 320px) 280px,
            (max-width: 480px) 440px,
            800px"
     src="elva-fairy-800w.jpg" alt="Elva dressed as a fairy">
```

A simpler syntax using `srcset` with x-descriptors and without `sizes`
```
<img srcset="elva-fairy-320w.jpg,
             elva-fairy-480w.jpg 1.5x,
             elva-fairy-640w.jpg 2x"
     src="elva-fairy-640w.jpg" alt="Elva dressed as a fairy">
```

#### Art direction
- Serve cropped images for different layouts
- Serve full landscape image in desktop mode and a cropped portrait image in mobile mode
- Solved using `<picture>` element
- `<source>` elements include `source` attribute
- Do not use the media attribute, unless you also need art direction
```
<picture>
  <source media="(max-width: 799px)" srcset="elva-480w-close-portrait.jpg">
  <source media="(min-width: 800px)" srcset="elva-800w.jpg">
  <img src="elva-800w.jpg" alt="Chris standing up holding his daughter Elva">
</picture>
```
-----------------------------------------

### HTML table basics

#### Tables
- HTML tables should be used for tabular data
- **Warning:** Do not use tables to layout webpages

#### Syntax
- `<table>`: Start and end element
- `<td>`: table data or cell
- `<tr>`: table row
- `<th>`: table headers which comes with default styling -- they are bold
- `colspan="2"`: Spans across two columns. Used with `th` and `td` elements
- `rowspan="2"`: Spans across two rows. Used with `th` and `td` elements

#### Styling table using col and colgroup
- Without using `<col>` and `<colgroup>` elements, we have to repeat our CSS in every `td` or `th` element or use complex CSS
- HTML provides `<col>` and `<colgroup>` elements to easily style individual columns

Eg:
First column: No CSS
Second column: Yellow background-color

```
<table>
  <colgroup>
    <col>
    <col style="background-color: yellow !important">
  </colgroup>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
</table>
```

#### Adding caption to a table
- Add `<caption>` element after `<table>`

#### Adding table structure
- Useful to give table structure when it gets complex
- Used for styling and layout
- `<thead>`: Wrap the top header section except `<colgroup>`
- `<tbody>`: Wrap the main content
- `<tfoot>`: Will render the content at the bottom row

#### Nesting tables
- Achieved by including a complete `<table>` structure

#### Tables for visually impaired users
- Visually impaired people often use a screenreader that reads out information on web pages to them
- Using `<th>`: Combination of column and row headers will identify and interpret the data in each cell
- Using `scope` attribute: Screenreader will allow their users to read out the entire column or row at once
  - scope="row": If `<th>` is used for row header
  - scope="col": If `<th>` is used for column header
  - scope="colgroup": If `<th>` is used for col header in a nested header spanning multiple cols
  - scope="rowgroup": If `<th>` is used for row header in a nested header spanning multiple rows
- Using `id` and `headers` attributes:
  - `id`: Define all `<th>` elements with unique `id` attribute
  - `headers`: Define all `<td>` elements with headers attribute listing both the row and column header ids

#### Active Learning Links
- [Playing with id and headers](table/itemSold/items-sold-using-id-header.html)
- [Playing with scope](table/itemSold/items-sold-using-scope.html)
