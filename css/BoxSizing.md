# CSS Box-Sizing

## The CSS box-sizing sets the way the total width and height of HTML elements should be calculated.

- CSS box-sizing property makes sure that `padding and borders` **do not increase** `the width and height of elements`.

- Set box-sizing to CSS border-box to `guarantee that the element size includes borders and padding`.

# Without the box-sizing

### `The box model` follows these **principles**:

- CSS calculates the `width` of elements by **adding** the `width`, `padding left and padding right`, and `right border and left border` together.

- CSS calculates the `height` of elements by **adding** the `height`, `padding top and padding bottom`, and `top border and bottom border` together.
  As a result, developers need to adjust values when setting width and height to leave space for borders and padding.

For an example, there are two `<div>` elements:

The first one has `height`, `width`, and a `CSS border`.
The second one has the same parameters assigned but it also has the CSS `padding`.

As a result, the second element will appear bigger than the first one.

```css
.div1 {
  width: 300px;
  height: 100px;
  border: 1px solid blue;
}

.div2 {
  width: 300px;
  height: 100px;
  padding: 50px;
  border: 1px solid red;
}
```

[Try it Live](https://www.bitdegree.org/learn/best-code-editor/css3-box-sizing-example-1)

# With the box-sizing

Since the box model created **many issues** for developers, the CSS3 introduced the `box-sizing`.

CSS box-sizing makes sure that the `total width and height` of elements `include padding and borders`. As a result, elements do not appear bigger than they should be.

## Theory is great, but we recommend digging deeper!

### Border-box

CSS `border-box` is the most popular choice for setting `box-sizing`. It guarantees that the content **box shrinks** to make space for the `padding and borders`.

Therefore, if you set your element width to 200 pixels, `border-box` makes sure that `the content, padding, and borders` fit in this number.

In this example, `box-sizing: border-box;` is added to both `<div>` elements:

```css
.div1 {
  width: 400px;
  height: 200px;
  border: 2px solid red;
  box-sizing: border-box;
}

.div2 {
  width: 400px;
  height: 200px;
  padding: 30px;
  border: 2px solid green;
  box-sizing: border-box;
}
```

[Try it Live](https://www.bitdegree.org/learn/best-code-editor/css3-box-sizing-example-2)

> **Tip**: `border-box` is the best choice for `designing layouts and managing the sizes of HTML elements`.

You do **not need** to set this property for each element **individually**. Instead, use the `asterisk (*)` selector to select all elements.

In this example, we apply the `box-sizing: border-box`; to **all** elements in an HTML document:

```css
* {
  box-sizing: border-box;
}
```

### content-box

`content-box` sets the **regular behavior** of adding padding and borders to elements **separately**.

If you set the width of the element to 200 pixels, the item will appear **bigger** once you add padding and borders.

# Note:

- `padding-box` used to apply the width and height of elements to their padding and content.
  **Browsers no longer support this property**.

- Most of the modern browsers support the `box-sizing` property.
