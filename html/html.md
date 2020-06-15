HTML Introduction
=================

When I first entered the front-end field, the first term I heard was estimated to be HTML. Write a few lines of HTML and open the browser to see the effect immediately. What you see is what you get at the front end. This is also its charm. What? What are its rules and what role does it play?


### [](#an5ygw)What is HTML

The full name of HTML is HyperText Markup Language, which is not a programming language but a markup language. HTML uses tags to describe web pages, open the computer's notepad, write a section of HTML, save it as a .html file, double-click to open with a browser, and you can immediately see the rendered web page. HTML is the skeleton of the front end. If you compare it to a house, HTML is brick and tile, reinforced concrete. It contains elements such as titles, paragraphs, pictures, and videos of web pages. Right-click on any website we browse in Chrome. Under the Elements column, we can see a variety of HTML tags, which are the cornerstones of the web pages we browse.

### [](#3ugyoa)Composition of HTML elements

HTML elements consist of nested content of tags, and HTML elements can be nested. Let's take a look at the next simple HTML element:

```html
<p> I am a paragraph </p>
```

Here, and </p> are the labels. The tag consists of angle brackets (<>) containing the keyword (p). The tag includes a start tag and an end tag. In the above example,
is the start tag, </p> is the end tag, which is a pair , So labels usually appear in pairs.

In some HTML elements, they do not need to contain content, the above "I am a paragraph" is the content part of the p tag. An HTML element that does not need to contain content is called an empty element. An empty element only has a start tag and no end tag, such as the <img> tag, which is used to insert a picture, and the link to the picture is placed on the attribute; another example is the <br> tag , It is used to add a line break, so there is no need to add content.

HTML elements can be nested. For example, I want to italicize a paragraph. I can do this:


```html
<p> I am a paragraph, <i> I am the italic part of the paragraph </i> </p>
```

The effect in the browser can be viewed [here](https://codepen.io/zouguanghua/pen/QJeYVV) .

HTML tags can have attributes, which are placed in the opening tag, with spaces between attributes and keywords, and between attributes and attributes. The attribute equal sign "=" is followed by the attribute value. The attribute value is enclosed in quotation marks "". Let's look at an example.

```html
<img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2664816/profile/profile-512.jpg?1544158617">
```

The attribute src specifies the url address of the image, and the alt attribute defines the alternative text. When the browser cannot load the image, the browser will display the alternative text. You can click [here to](https://codepen.io/zouguanghua/pen/wQVOKY) see the effect.


### [](#a7e4gi)Block-level elements and inline elements

HTML elements have some features that make them behave differently in browsers. We divide HTML elements into block-level elements and inline elements. Their performance in browsers is as follows:

*   Block-level elements are displayed in the form of blocks. They always occupy a single line and squeeze the following elements into a new line;
    
*   The elements in the line are displayed next to each other, and will not wrap automatically. The elements in the line are usually nested and displayed by block-level elements.

```html
<p> I am a paragraph </p> <p> I am a paragraph </p> <p> I am a paragraph, <i> I am the italic part of the paragraph </i> </p>  <span> I am a piece of text </span> <span> I am a piece of text </span> <span> I am a piece of text </span>
```


In the above example, the p element is always displayed on a single line, it is a block-level element, and the i and span elements are not line breaks, but are inline elements. You can click [here to](https://codepen.io/zouguanghua/pen/WYVWJR) see the effect.

### [](#ku0npb)A simple HTML example

Opening different websites, we will find that they have a similar structure. Below is a simple example, let's take a look at what constitutes a complete HTML page.


```html
<!DOCTYPE html> <html> <head> <meta charset="utf-8">
 <title> HTML example </title> 
 <link rel="stylesheet" type="text/css" href="xxx.css"> 
 <script src="xxx.js"></script> 
 </head> 
 <body> 
    <h1> I am the headline </h1> 
    <p> I am a paragraph </p> 
    </body>
</html>
```

#### [](#y5m5rt)DOCTYPE

<! DOCTYPE> is a document type declaration, which is used to tell the browser what rules to use to parse HTML elements. In HTML 4.01, the document type declaration needs to refer to [DTD](https://zh.wikipedia.org/wiki/%E6%96%87%E6%A1%A3%E7%B1%BB%E5%9E%8B%E5%AE%9A%E4%B9%89) (Document Type Definition) because HTML 4.01 is based on [SGML](https://zh.wikipedia.org/wiki/SGML) (Standard Generalized Markup Language). There are two concepts here, related to the history of HTML development, you can simply familiarize yourself. DTD stipulates the rules of markup language so that the browser can display the content correctly.

##### THE !DOCTYPE DECLARATION
Every HTML document must begin with a basic declaration that identifies its type. This is a very useful measure that inform browsers beforehand, what type of document they are about to process, allowing them to adjust their processing mechanisms accordingly.
ex:
**HTML 4.01**
* STRICT
 ```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
```
* TRANSITIONAL
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
```
* FRAMESET
```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

HTML5 is not based on SGML, so no need to introduce DTD, only `<!DOCTYPE html>`they were on the document type declaration. The document type declaration must be placed on the first line of the HTML document.

#### [](#html)html

  

As you can see, the html element is at the outermost level of the entire HTML document. It is the root element and wraps a complete page, and besides acting as a container, it provides a good chance to define the default language used by the document, through the global attribute `lang`.

> Declaring the language used in a document is particularly important for users relying on speech synthesizers, as it provides key information for determining the correct pronunciation.

#### [](#8lnbep)head

```html
<head>

  <title>Buoi 3</title>

  <meta name="keywords" content="IMIC, FE, Basic">

  <meta name="description" content="This document approaches briefly the works of Front-end Buoi 3...">

  <meta name="Author" content="Quan Tran">

  <style>

    table {

      width: 100%;

      border-color: black;

    }

  </style>

  <script>

    result = 0;

    function increment(amount) {

      result += amount;

    }

  </script>

  <link rel="index" href="../index.html">

</head>
```

The head element is the head element, and the content it contains will not be displayed on the page. The head element can contain header information, meta information, style sheets, and scripts. In the above example, we added some other elements to the head element, let's see what they do.

*   <meta> tags provide page information data, in the example `<meta charset="utf-8">`is defined using the document utf-8 character encoding. At the same time, you can also set the page description, keywords and other information through the <meta> tag, which is conducive to SEO (Search Engine Optimization, search engine optimization), which is to use the rules of the search engine to improve the natural ranking of the website in the relevant search engine . In layman's terms, when users search the page, your website will be more advanced.
    
    
```html
<meta  name = "description"  content = "descriptive information of the site" \> 
<meta  name = "keywords"  content = "Web site keywords" \>
```


*   The `<title>` tag defines the title of the page. We open a page in the browser, and the title on the browser's tab bar is defined by it.
    
*   The `<link>` tag is usually used to link some external resources related to the page, such as css files. We can also set the icon on the tab bar of the browser through the `<link>` tag.
    
```html    
<link rel\="icon" href\="xxx.ico"\>
```

*   In addition to using the `<link>` tag to import external css files, we can also directly define style information through the `<style>` tag.

```html
<style type\="text/css"\>  
    h1  { color: #FFB5BF; }
    p { font-size: 16px; }
 </style>
```
*   The `<script>` tag introduces a script file for the page. We can directly use its src attribute to introduce the address `of` the script file, or we can directly insert JavaScript `code` in the page.

```html
<script type="text/javascript">  document.write('Hello World!') </script>
```

> In HTML5, the type values ​​of the `style` tag and the `script` tag are no longer necessary, and the default values ​​are "text/css" and "text/javascript", respectively.

#### body

The `body` `element` defines the `body` of the document and contains all the `content` displayed on the page, such as text, pictures, tables, lists, hyperlinks, audio, video, etc.

The above is a simple HTML page composition module, HTML tags are rich in variety, master their use, you can write a list, a form, or a submission form, it is recommended to read the w3school [HTML tutorial](http://www.w3school.com.cn/html/index.asp) , it is recommended to master It will be much easier to read the following chapters after HTML.


### [](#r98fow)HTML semantics

HTML semantics means that the general structure of the page can be seen only from the HTML elements. For example, the content that needs to be emphasized can be placed in the `<strong>` tag, rather than by setting the `<span>` tag. Different browsers may parse HTML elements differently. HTML semantics means that after setting aside style, the page can have a friendly display effect. We strive to make the page have a good structure, make the elements of the page meaningful, and at the same time help to be parsed by search engines and SEO. HTML semantic suggestions:

*   Use meaningless `<div>` and `<span>` tags;
    
*   Set the for attribute in the <label> tag and associate it with the corresponding <input>;
    
*   Set the alt attribute of the <img> tag and set the title attribute of the <a> tag, which is good for SEO;
    
*   Use <h1> ~ <h6> tags in the title part of the page, you do n’t need to add extra style to them;
    
*   Do not use labels related to forms, ordered lists, and unordered lists separately.

HTML5 also added some semantic elements, we can judge the content of the label by the label name. The structure of a page using semantic elements is as follows:
    
 ![](https://cdn.nlark.com/yuque/0/2018/png/199663/1544180720457-6e1c631d-4a2e-4c29-9afa-c6668256a369.png) 
(Example of use of semantic elements)

The names of semantic elements are actually very easy to understand. The following are their functions and usages:
*   The `<header>` tag is usually placed on the top of the page or a certain area of ​​the page to set the header;
    
*   The `<nav>` tag can be used to define a collection of navigation links, click on the link to jump to other pages;

*   The content in the `<article>` tag is relatively independent, it can be a news report, a blog, it can be read independently of other content on the page;
    
*   The `<section>` tag represents an area on the page. Usually, the page is divided into blocks or the content is segmented. The `<section>` tag and the `<article>` tag can be nested with each other;
    
*   The `<aside>` tag is used to represent content other than the main content of the page, such as the sidebar;
    
*   The `<footer>` tag is located at the bottom of the page or a certain area of ​​the page and is used to set the footer. It usually contains copyright information and contact information.

### [](#lcvawb)summary


This article briefly introduces the role of HTML and the components of HTML elements, and how to better use HTML, which is semantic. In this section, you need to master:

*   HTML elements are composed of parts;
*   Distinguish between block-level elements and inline elements;
*   Understand the general structure of HTML documents;
*   HTML semantics;
*   Read HTML tutorials and master the usage of HTML elements.

This article comes from

#### [Nine Frontends-Beginner's Manual 2019](/fe9/basic)

#### [Nine Department Knowledge Base-Selected Collection](/fe9/select)

https://github.com/frontend9/fe9-library


#### [Nine Departments-Interview Questions Collection](/fe9/interview)

*   [What is HTML](#an5ygw "What is HTML")
*   [Composition of HTML elements](#3ugyoa "Composition of HTML elements")
*   [Block-level elements and inline elements](#a7e4gi "Block-level elements and inline elements")
*   [A simple HTML example](#ku0npb "A simple HTML example")
*   [DOCTYPE](#y5m5rt "DOCTYPE")
*   [html](#html "html")
*   [head](#8lnbep "head")
*   [body](#gfxnpv "body")
*   [HTML semantics](#r98fow "HTML semantics")
*   [summary](#lcvawb "summary")

# HTML

1. `<script>`, `<script defer = "defer">`, `<script async = "async">` What is the difference between load the script they are?
The answer: javascript script loaded in three ways, namely `<script>`, `<script defer = "defer">`, `<script async = "async">`.
