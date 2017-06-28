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

#### Other <video> features
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

#### <iframe> element
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

#### <embed> and <object> element
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

#### Embed an SVG with an <iframe>
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
-----------------------------------------
