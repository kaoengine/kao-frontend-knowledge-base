A "Layout Draft"
It can be wise to draw a layout draft of the page design before creating a website:


First Step - Basic HTML Page
HTML is the standard markup language for creating websites and CSS is the language that describes the style of an HTML document. We will combine HTML and CSS to create a basic web page.

# Example Explained
The <!DOCTYPE html> declaration defines this document to be HTML5
The <html> element is the root element of an HTML page
The <head> element contains meta information about the document
The <title> element specifies a title for the document
The <meta> element should define the character set to be UTF-8
The <meta> element with name="viewport" makes the website look good on all devices and screen resolutions
The <style> element contains the styles for the website (layout/design)
The <body> element contains the visible page content
The <h1> element defines a large heading
The <p> element defines a paragraph


# Creating Page Content
Inside the <body> element of our website, we will use our "Layout Draft" and create:

A header
A navigation bar
Main content
Side content
A footer

# Header
A header is usually located at the top of the website (or right below a top navigation menu). It often contains a logo or the website name:

```html
<div class="header">
  <h1>My Website</h1>
  <p>A website created by me.</p>
</div>
```
Then we use CSS to style the header:

```css
.header {
  padding: 80px; /* some padding */
  text-align: center; /* center the text */
  background: #1abc9c; /* green background */
  color: white; /* white text color */
}

/* Increase the font size of the <h1> element */
.header h1 {
  font-size: 40px;
}
```

# Navigation Bar
A navigation bar contains a list of links to help visitors navigating through your website:

<div class="navbar">
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#">Link</a>
  <a href="#" class="right">Link</a>
</div>
Use CSS to style the navigation bar:

/* Style the top navigation bar */
.navbar {
  overflow: hidden; /* Hide overflow */
  background-color: #333; /* Dark background color */
}

/* Style the navigation bar links */
.navbar a {
  float: left; /* Make sure that the links stay side-by-side */
  display: block; /* Change the display to block, for responsive reasons (see below) */
  color: white; /* White text color */
  text-align: center; /* Center the text */
  padding: 14px 20px; /* Add some padding */
  text-decoration: none; /* Remove underline */
}

/* Right-aligned link */
.navbar a.right {
  float: right; /* Float a link to the right */
}

/* Change color on hover/mouse-over */
.navbar a:hover {
  background-color: #ddd; /* Grey background color */
  color: black; /* Black text color */
}


Content
Create a 2-column layout, divided into a "side content" and a "main content".

<div class="row">
  <div class="side">...</div>
  <div class="main">...</div>
</div>
We use CSS Flexbox to handle the layout:

/* Ensure proper sizing */
* {
  box-sizing: border-box;
}

/* Column container */
.row {
  display: flex;
  flex-wrap: wrap;
}

/* Create two unequal columns that sits next to each other */
/* Sidebar/left column */
.side {
  flex: 30%; /* Set the width of the sidebar */
  background-color: #f1f1f1; /* Grey background color */
  padding: 20px; /* Some padding */
}

/* Main column */
.main {
  flex: 70%; /* Set the width of the main content */
  background-color: white; /* White background color */
  padding: 20px; /* Some padding */
}

Then add media queries to make the layout responsive. This will make sure that your website looks good on all devices (desktops, laptops, tablets and phones). Resize the browser window to see the result.

/* Responsive layout - when the screen is less than 700px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 700px) {
  .row {
    flex-direction: column;
  }
}

/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */

```css
@media screen and (max-width: 400px) {
  .navbar a {
    float: none;
    width: 100%;
  }
}
```


Tip: To create a different kind of layout, just change the flex width (but make sure that it adds up to 100%).

Tip: Do you wonder how the @media rule works? Read more about it in our CSS Media Queries chapter.

Tip: To learn more about the Flexible Box Layout Module, read our CSS Flexbox chapter.

What is box-sizing?

You can easily create three floating boxes side by side. However, when you add something that enlarges the width of each box (e.g. padding or borders), the box will break. The box-sizing property allows us to include the padding and border in the box's total width (and height), making sure that the padding stays inside of the box and that it does not break.

You can read more about the box-sizing property in our CSS Box Sizing Tutorial.


# Footer
At last, we will add a footer.

<div class="footer">
  <h2>Footer</h2>
</div>
And style it:

.footer {
  padding: 20px; /* Some padding */
  text-align: center; /* Center text*/
  background: #ddd; /* Grey background */
}

Congratulations! You have built a responsive website from scratch.
