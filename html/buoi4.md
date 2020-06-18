### Tags

 Tags are the starting and ending parts of an HTML element. They begin with < symbol and end with > symbol. Whatever written inside < and > are called tags.

```html
<p></p>
```

### Element
An HTML element is defined by a start tag, some content, and an end tag:

```html
<tagname>Content goes here...</tagname>
```
ex:

```html
<h1>My First Heading</h1>
<p>My first paragraph.</p>
```

| Start tag | Element content      | End tag |
|-----------|----------------------|---------|
| \<h1\>      | My First Heading     | \<h1\>   |
| \<p\>       | My first paragraph\. | \<p\>    |
| \<br\>      | none                 | none    |


#### Nested HTML Elements

HTML elements can be nested (this means that elements can contain other elements).

All HTML documents consist of nested HTML elements.

```html
<!DOCTYPE html>
<html>
<body>

<h1>My First Heading</h1>
<p>My first paragraph.</p>

</body>
</html>
```

#### Empty HTML Elements
Empty elements (also called self-closing or void elements) are not container tags — that means, you can not write \<hr\>some content\</hr\> or \<br\>some content\</br\>.

A typical example of an empty element, is the \<br\> element, which represents a line break. Some other common empty elements are \<img\>, \<input\>, \<link\>, \<meta\>, \<hr\>, etc...

```html
<p>This paragraph contains <br> a line break.</p>
<img src="images/sky.jpg" alt="Cloudy Sky">
<input type="text" name="username">
```
>HTML documents contain tags, but do not contain the elements. The elements are only generated after the parsing step, from these tags.

### Attribute

HTML attributes provide additional information about HTML elements.


* All HTML elements can have attributes
* Attributes provide additional information about elements
* Attributes are always specified in the start tag
* Attributes usually come in name/value pairs like: name="value"

#### The href Attribute
The \<a\> tag defines a hyperlink. The href attribute specifies the URL of the page the link goes to:

```html
<a href="https://tuoitre.vn">tuoi tre</a>
```

#### Basic tag 

* A text header, denoted using the \<h1\>, \<h2\>, \<h3\>, \<h4\>, \<h5\>, \<h6\> tags.
* A paragraph, denoted using the \<p\> tag.
* A horizontal ruler, denoted using the \<hr\> tag.
* A link, denoted using the \<a\> (anchor) tag.
* A list, denoted using the \<ul\> (unordered list), \<ol\> (ordered list) and \<li\> (list element) tags.
. An image, denoted using the \<img\> tag
* A divider, denoted using the \<div\> tag
* A text span, denoted using the \<span\> tag

### HTML List

HTML provides a way to create both an ordered list (with elements counting up, 1, 2, 3...) and an unordered list with bullets instead of numbers. Lists are a good way to formalize a list of items and let the HTML styling do the work for you.

#### Ordered lists
Here is an example of how to create an ordered list:

``` html
<p>Here is a list of ordered items:</p>
<ol>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

Ordered lists have a "type" attribute which defines the numbering convention to use.

To count using numbers, use type="1":

```html
<p>Here is a list of ordered items:</p>
<ol type="1">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

To count using uppercase letters, use type="A":

```html
<p>Here is a list of ordered items:</p>
<ol type="A">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

To count using lowercase letters, use type="a":

```html
<p>Here is a list of ordered items:</p>
<ol type="a">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

To count using uppercase roman numerals, use type="I":

```html
<p>Here is a list of ordered items:</p>
<ol type="I">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```

To count using lowercase roman numerals, use type="i":

```html
<p>Here is a list of ordered items:</p>
<ol type="i">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ol>
```
Unordered lists
Here is an example of how to create an unordered list:

```
<p>Here is a list of unordered items:</p>    
<ul>
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```
To change the list style attributes, we can use the CSS attribute called list-style-type. The available types are:

disc
circle
square
none
Here is an example of the disc list style type:

``` html
<p>Here is a list of unordered items:</p>    
<ul style="list-style-type: disc">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

Here is an example of the circle list style type:

```html
<p>Here is a list of unordered items:</p>    
<ul style="list-style-type: circle">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```
Here is an example of the square list style type:

```html
<p>Here is a list of unordered items:</p>    
<ul style="list-style-type: square">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

Here is an example of the none list style type:

```html
<p>Here is a list of unordered items:</p>    
<ul style="list-style-type: none">
    <li>First item</li>
    <li>Second item</li>
    <li>Third item</li>
</ul>
```

#### Block-level Elements and Block Boxes

Block-level elements are those elements that are formatted visually as blocks (i.e. takes up the full width available), with a line break before and after the element. For example, paragraph element (\<p\>), headings (\<h1\> to \<h6\>), divisions (\<div\>) etc.

Generally, block-level elements may contain inline elements and other block-level elements.

#### Inline-level Elements and Inline Boxes
Inline-level elements are those elements of the source document that do not form new blocks of content; the content is distributed in lines. For example, emphasized pieces of text within a paragraph (\<em\>), spans (\<span\>), strong element (\<strong\>) etc.

Inline elements typically may only contain text and other inline elements.


### CSS type

There are three types of CSS which are given below:

#### Inline CSS
Internal or Embedded CSS
External CSS
Inline CSS: Inline CSS contains the CSS property in the body section attached with element is known as inline CSS. This kind of style is specified within an HTML tag using style attribute.

```html
 <p style = "color:#009900; font-size:50px; 
                font-style:italic; text-align:center;"> 
            Buoi 4 
 </p> 
```

#### Internal or Embedded CSS:
 This can be used when a single HTML document must be styled uniquely. The CSS rule set should be within the HTML file in the head section i.e the CSS is embedded within the HTML file.

```html
<!DOCTYPE html> 
<html> 
    <head> 
        <title>Internal CSS</title> 
        <style> 
            .buoi-4 { 
                color:#009900; 
                font-size:50px; 
                font-weight:bold; 
            } 
        </style> 
    </head> 
    <body> 
            <p class ="buoi-4">Buoi 4</p> 
    </body> 
</html>    
```

#### External CSS:
 External CSS contains separate CSS file which contains only style property with the help of tag attributes (For example class, id, heading, … etc). CSS property written in a separate file with .css extension and should be linked to the HTML document using link tag. This means that for each element, style can be set only once and that will be applied across web pages.

Example: The file given below contains CSS property. This file save with .css extension.

```css
body {
    background-color:powderblue;
}
```

Below is the HTML file that is making use of the created external style sheet

. link tag is used to link the external style sheet with the html webpage.
. href attribute is used to specify the location of the external style sheet file.

```html
<!DOCTYPE html> 
<html> 
    <head> 
        <link rel="stylesheet" href="geeks.css"/> 
    </head> 
  
    <body> 
    </body> 
</html> 
```

Properties of CSS: Inline CSS has the highest priority, then comes Internal/Embedded followed by External CSS which has the least priority. Multiple style sheets can be defined on one page. If for an HTML tag, styles are defined in multiple style sheets then the below order will be followed.

As Inline has the highest priority, any styles that are defined in the internal and external style sheets are overridden by Inline styles.
Internal or Embedded stands second in the priority list and overrides the styles in the external style sheet.
External style sheets have the least priority. If there are no styles defined either in inline or internal style sheet then external style sheet rules are applied for the HTML tags.


### CSS Multi columns

The CSS multi-column layout allows easy definition of multiple columns of text - just like in newspapers:

In this chapter you will learn about the following multi-column properties:

. column-count: property specifies the number of columns an element should be divided into
. column-gap: property specifies the gap between the columns
. column-rule-style: property specifies the style of the rule between columns
. column-rule-width: property specifies the width of the rule between columns
. column-rule-color: property specifies the color of the rule between columns:
. column-rule: property is a shorthand property for setting all the column-rule-* properties above.

. column-span: property specifies how many columns an element should span across.
. column-width: property specifies a suggested, optimal width for the columns.

### CSS Font-system
#### Font Family
The font family of a text is set with the font-family property.

The font-family property should hold several font names as a "fallback" system. If the browser does not support the first font, it tries the next font, and so on.

Start with the font you want, and end with a generic family, to let the browser pick a similar font in the generic family, if no other fonts are available.

>Note: If the name of a font family is more than one word, it must be in quotation marks, like: "Times New Roman".

#### Font Style
The font-style property is mostly used to specify italic text.

This property has three values:

normal - The text is shown normally
italic - The text is shown in italics

#### Font Weight
The font-weight property specifies the weight of a font:

```css
p.normal {
  font-weight: normal;
}

p.thick {
  font-weight: bold;
}
```

#### CSS Font Size
The font-size property sets the size of the text.

The font-size value can be an absolute, or relative size.

Absolute size:

Sets the text to a specified size
Does not allow a user to change the text size in all browsers (bad for accessibility reasons)
Absolute size is useful when the physical size of the output is known
Relative size:

Sets the size relative to surrounding elements
Allows a user to change the text size in browsers

**Set Font Size With Pixels**
Setting the text size with pixels gives you full control over the text size:

```css
h1 {
  font-size: 40px;
}

h2 {
  font-size: 30px;
}

p {
  font-size: 14px;
```

**Set Font Size With Em**
To allow users to resize the text (in the browser menu), many developers use em instead of pixels.

The em size unit is recommended by the W3C.

1em is equal to the current font size. The default text size in browsers is 16px. So, the default size of 1em is 16px.

The size can be calculated from pixels to em using this formula: pixels/16=em

```css
h1 {
  font-size: 2.5em; /* 40px/16=2.5em */
}

h2 {
  font-size: 1.875em; /* 30px/16=1.875em */
}

p {
  font-size: 0.875em; /* 14px/16=0.875em */
}
```

#### Google Font

```html
<!DOCTYPE html>
<html>
<head>
<link href='https://fonts.googleapis.com/css?family=Yeon Sung' rel='stylesheet'>
<style>
body {
    font-family: 'Yeon Sung';font-size: 22px;
}
</style>
</head>
<body>

<h1>Yeon Sung</h1>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
<p>123456790</p>
<p>ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
<p>abcdefghijklmnopqrstuvwxyz</p>

</body>
</html>
https://fonts.google.com/
```

#### Pseudo-classes

HTML provides pseudo-classes, classes that are defined by default and allow us to apply a style on either:

An element which is in a specific state.
A specific set of elements by their hierarchy, explained in detail in the Advanced Selectors section.

Style an element when a user mouses over it
Style visited and unvisited links differently
Style an element when it gets focus

#### Links
A link can either be in an unvisited state or a visited state. An unvisited link is a link that was not clicked on. A visited link is a link that was clicked on.

```html
<style>
a.special:link {
    color: green;
}

a.special:visited {
    color: red;
}
</style>

<p>
    <a href="#">This is a standard link, it will become purple when clicked
    </a>
</p>
<p>
    <a class="special" href="#">This is a special colored link and become red when clicked
    </a>
</p>
```

```css
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```