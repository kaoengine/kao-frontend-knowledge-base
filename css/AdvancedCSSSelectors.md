## WARNING for those Fresher or Intern:

### I suggest you would study carefully and watch more other materials for basic understandings of CSS SELECTORS. Because this Topic is the Advanced Selectors. And I am telling you, you will feel outrages.

#### Reminding:

1. The `:first-child` CSS pseudo-class represents the first element among a group of sibling elements

```HTML
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

```CSS
ul li {
  color: blue;
}

ul li:first-child {
  color: red;
  font-weight: bold;
}
```

Result:
![Alt text](/images/first-child.png)

2. The `:last-child` CSS pseudo-class represents the last element among a group of sibling elements.

```Html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3
    <ul>
      <li>Item 3.1</li>
      <li>Item 3.2</li>
      <li>Item 3.3</li>
    </ul>
  </li>
</ul>
```

```CSS
ul li {
  color: blue;
}

ul li:last-child {
  border: 1px solid red;
  color: red;
}
```

Result:
![Alt text](/images/last-child.png)

3. The `:nth-child()` CSS pseudo-class matches elements based on their position in a group of siblings.

```CSS
/* Selects the second <li> element in a list */
li:nth-child(2) {
  color: lime;
}

/* Selects every fourth element
   among any group of siblings */
:nth-child(4n) {
  color: lime;
}
```

## Syntax

The `nth-child` pseudo-class is specified with a single argument that describes a pattern for matching element indices in a list of sibblings. Element indices are 1-based.

## Keyword Values

- odd - Represents elements whose numeric position in a series of siblings is odd: 1, 3, 5, etc.

- even - Represents elements whose numeric position in a series of siblings is even: 2, 4, 6, etc.

## Functional Notation

#### <An+B>

Represents elements in a list whose indices match those found in a custom pattern of numbers, defined by `An+B`, where:

- A is an integer step size,
- B is an integer offset,
- n is all positive integers, starting from 0.
- It can be read as the An+Bth element of a list.

### Examples

#### Example selectors

- `tr:nth-child(odd) or tr:nth-child(2n+1)`
  Represents the odd rows of an HTML table: 1, 3, 5, etc.

- `tr:nth-child(even) or tr:nth-child(2n)`Represents the even rows of an HTML table: 2, 4, 6, etc.

- `:nth-child(7)`Represents the seventh element.

- `:nth-child(5n)` Represents elements **5 [=5×1], 10 [=5×2], 15 [=5×3], etc**. The first one to be returned as a result of the formula is 0 [=5x0], `resulting in a no-match, since the elements are indexed from 1, whereas n starts from 0`. This may seem weird at first, but it makes more sense when the B part of the formula is >0, like in the next example.
- `:nth-child(n+7)` Represents the seventh and all following elements: **7 [=0+7], 8 [=1+7], 9 [=2+7]**, etc.

- `:nth-child(3n+4)` Represents elements **4 [=(3×0)+4], 7 [=(3×1)+4], 10 [=(3×2)+4], 13 [=(3×3)+4]**, etc.
- `:nth-child(-n+3)` Represents the first three elements. **[=-0+3, -1+3, -2+3]**

- `p:nth-child(n)` Represents every `<p>` element in a group of siblings. This selects the same elements as a simple `<p>` selector (although with a higher specificity).

- `p:nth-child(1) or p:nth-child(0n+1)` Represents every `<p>` that is the first element in a group of siblings. This is the same as the `:first-child` selector (and has the same specificity).

- `p:nth-child(n+8):nth-child(-n+15)` Represents the eighth through the fifteenth `<p>` elements of a group of siblings.

### Real Examples:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      html {
        font-family: sans-serif;
      }

      span,
      div em {
        padding: 5px;
        border: 1px solid green;
        display: inline-block;
        margin-bottom: 3px;
      }

      .first span:nth-child(2n + 1),
      .second span:nth-child(2n + 1),
      .third span:nth-of-type(2n + 1) {
        background-color: lime;
      }
    </style>
  </head>
  <body>
    <h3>
      <code>span:nth-child(2n+1)</code>
      , WITHOUT an <code>&lt;em&gt;</code> among the child elements.
    </h3>
    <p>Children 1, 3, 5, and 7 are selected.</p>
    <div class="first">
      <span>Span 1!</span>
      <span>Span 2</span>
      <span>Span 3!</span>
      <span>Span 4</span>
      <span>Span 5!</span>
      <span>Span 6</span>
      <span>Span 7!</span>
    </div>

    <br />

    <h3>
      <code>span:nth-child(2n+1)</code>
      , WITH an <code>&lt;em&gt;</code> among the child elements.
    </h3>
    <p>
      Children 1, 5, and 7 are selected.<br />
      3 is used in the counting because it is a child, but it isn't selected
      because it isn't a <code>&lt;span&gt;</code>.
    </p>
    <div class="second">
      <span>Span1</span>
      <span>Span2</span>
      <em>This is an `em` 3.</em>
      <span>Span4</span>
      <span>Span5</span>
      <span>Span6</span>
      <span>Span7</span>
      <span>Span8</span>
    </div>

    <br />

    <h3>
      <code>span:nth-of-type(2n+1)</code>
      , WITH an <code>&lt;em&gt;</code> among the child elements.
    </h3>
    <p>
      Children 1, 4, 6, and 8 are selected.<br />
      3 isn't used in the counting or selected because it is an
      <code>&lt;em&gt;</code>, not a <code>&lt;span&gt;</code>, and
      <code>nth-of-type</code> only selects children of that type. The
      <code>&lt;em&gt;</code> is completely skipped over and ignored.

      <!-- for this part- in my opinion. It started counting again -->
    </p>
    <div class="third">
      <span>Span1</span>
      <span>Span2</span>
      <em>This is an `em` 3.</em>
      <span>Span4</span>
      <span>Span5</span>
      <span>Span6</span>
      <span>Span7</span>
      <span>Span8</span>
    </div>
  </body>
</html>
```

```CSS
html {
  font-family: sans-serif;
}

span,
div em {
  padding: 5px;
  border: 1px solid green;
  display: inline-block;
  margin-bottom: 3px;
}

.first span:nth-child(2n+1),
.second span:nth-child(2n+1),
.third span:nth-of-type(2n+1) {
  background-color: lime;
}
```

Result:
![Alt text](/images/nth-child.png)

4. The `:nth-of-type()` CSS pseudo-class matches elements of a given type, based on their position among a group of siblings.

# Syntax

The `nth-of-type` pseudo-class is specified with a single argument, which represents the pattern for matching elements.

### Formal syntax

`:nth-of-type`( <nth> )
where
`<nth>` = `<an-plus-b>` | even | odd

```HTML
<div>
  <div>This element isn't counted.</div>
  <p>1st paragraph.</p>
  <p>2nd paragraph.</p>
  <div>This element isn't counted.</div>
  <p>3rd paragraph.</p>
  <p>4th paragraph.</p>
</div>
```

```CSS
/* Odd paragraphs */
p:nth-of-type(2n+1) {
  color: red;
}

/* Even paragraphs */
p:nth-of-type(2n) {
  color: blue;
}

/* First paragraph */
p:nth-of-type(1) {
  font-weight: bold;
}
```

![ALt text](/images/nth-of-type.png)

5. The `:nth-last-child()` CSS pseudo-class matches elements based on their position among a group of siblings, counting from the end.

# Syntax

The `nth-last-child` pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.

### KeyWord Values

- odd - Represents elements whose numeric position in a series of siblings is odd: 1, 3, 5, etc., counting from the end.
- even -Represents elements whose numeric position in a series of siblings is even: 2, 4, 6, etc., counting from the end.

### Functional Notation

`<An+B>` - Represents elements whose numeric position in a series of siblings matches the pattern An+B, for every positive integer or zero value of n. The index of the first element, counting from the end, is 1. The values A and B must both be `<integer>`s.

## Examples

### Example Selectors

- `tr:nth-last-child(odd) or tr:nth-last-child(2n+1)`- Represents the odd rows of an HTML table: 1, 3, 5, etc., counting from the end.

- `tr:nth-last-child(even) or tr:nth-last-child(2n)`- Represents the even rows of an HTML table: 2, 4, 6, etc., counting from the end.

- `:nth-last-child(7)` - Represents the seventh element, counting from the end.

- `:nth-last-child(5n)` - Represents elements 5, 10, 15, etc., counting from the end.

- `:nth-last-child(3n+4)` - Represents elements 4, 7, 10, 13, etc., counting from the end.

- `:nth-last-child(-n+3)` - Represents the last three elements among a group of siblings.

- `p:nth-last-child(n) or p:nth-last-child(n+1)` - Represents every `<p>` element among a group of siblings. This is the same as a simple `p` selector. (Since `n` starts at zero, while the last element begins at one, `n` and `n+1` will both select the same elements.)

- `p:nth-last-child(1) or p:nth-last-child(0n+1)` - Represents every `<p>` that is the first element among a group of siblings, counting from the end. This is the same as the `:last-child` selector.

```html
<table>
  <tbody>
    <tr>
      <td>First line</td>
    </tr>
    <tr>
      <td>Second line</td>
    </tr>
    <tr>
      <td>Third line</td>
    </tr>
    <tr>
      <td>Fourth line</td>
    </tr>
    <tr>
      <td>Fifth line</td>
    </tr>
  </tbody>
</table>
```

```CSS
table {
  border: 1px solid blue;
}

/* Selects the last three elements */
tr:nth-last-child(-n+3) {
  background-color: pink;
}

/* Selects every element starting from the second to last item */
tr:nth-last-child(n+2) {
  color: blue;
}

/* Select only the last second element */
tr:nth-last-child(2) {
  font-weight: 600;
}
```

Result:

![Alt text](/images/nth-last-child.png)

### Quantity query

A quantity query styles elements depending on how many of them there are. In this example, list items turn red when there are at least three of them in a given list. This is accomplished by combining the capabilities of the `nth-last-child` pseudo-class and the general sibling combinator.

```html
<h4>A list of four items (styled):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
  <li>Three</li>
  <li>Four</li>
</ol>

<h4>A list of two items (unstyled):</h4>
<ol>
  <li>One</li>
  <li>Two</li>
</ol>
```

```CSS
/* If there are at least three list items,
   style them all */
li:nth-last-child(n+3),
li:nth-last-child(n+3) ~ li {
  color: red;
}
```

![Alt text](/images/nth-last-child2.png)

6. The `:nth-last-of-type()` CSS pseudo-class matches elements of a given type, based on their position among a group of siblings, counting from the end.

# Syntax

The `nth-last-of-type` pseudo-class is specified with a single argument, which represents the pattern for matching elements, counting from the end.

```html
<div>
  <span>This is a span.</span>
  <span>This is another span.</span>
  <em>This is emphasized.</em>
  <span>Wow, this span gets limed!!!</span>
  <strike>This is struck through.</strike>
  <span>Here is one last span.</span>
</div>
```

```CSS
span:nth-last-of-type(2) {
  background-color: lime;
}
```

![Alt text](/images/nth-last-of-type.png)

7. The `:first-of-type` CSS pseudo-class represents the first element of its type among a group of sibling elements.

#### Nested elements

This example shows how nested elements can also be targeted. Note that the universal selector (\*) is implied when no simple selector is written.

```html
<article>
  <div>This `div` is first!</div>
  <div>This <span>nested `span` is first</span>!</div>
  <div>
    This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!
  </div>
  <div>This <span>nested `span` gets styled</span>!</div>
  <b>This `b` qualifies!</b>
  <div>This is the final `div`.</div>
</article>
```

```CSS
article :first-of-type {
  background-color: pink;
}
```

![Alt text](/images/first-of-type.png)

8. The `:last-of-type` CSS pseudo-class represents the last element of its type among a group of sibling elements.

### Nested elements

This example shows how nested elements can also be targeted. Note that the universal selector (\*) is implied when no simple selector is written.

```HTML
<article>
  <div>This `div` is first.</div>
  <div>This <span>nested `span` is last</span>!</div>
  <div>This <em>nested `em` is first</em>, but this <em>nested `em` is last</em>!</div>
  <b>This `b` qualifies!</b>
  <div>This is the final `div`!</div>
</article>
```

```CSS
article :last-of-type {
  background-color: pink;
}
```

![Alt text](/images/last-of-type.png)

SUMMARY:

# Useful n values:

- odd or 2n+1 -- every odd child or element.

- even or 2n -- every even child or element.

- n -- every nth child or element.

- 3n -- every third child or element (3, 6, 9, ...).

- 3n+1 -- every third child or element starting with 1 (1, 4, 7, ...).

- n+6 -- all but first five children or elements (6, 7, 8, ...).

- -n+5 -- only first five children or elements (1, 2, ..., 5).
