### HTML Tables


HTML tables allow web developers to arrange data into rows and columns.


#### Define an HTML Table
The <table> tag defines an HTML table.

Each table row is defined with a \<tr\> tag. Each table header is defined with a \<th\> tag. Each table data/cell is defined with a \<td\> tag.

By default, the text in \<th\> elements are bold and centered.

By default, the text in \<td\> elements are regular and left-aligned.

```html
<table style="width:100%">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
</table>
```

> Note: The \<td\> elements are the data containers of the table.
>They can contain all sorts of HTML elements; text, images, lists, other tables, etc.

#### HTML Table - Add a Border
To add a border to a table, use the CSS border property:

```css
table, th, td {
  border: 1px solid black;
}
```

> Remember to define borders for both the table and the table cells.

#### HTML Table - Collapsed Borders

To let the borders collapse into one border, add the CSS border-collapse property:

```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
```

### HTML Table - Add a Caption

To add a caption to a table, use the \<caption\> tag:

```html
<table style="width:100%">
  <caption>Monthly savings</caption>
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
  <tr>
    <td>February</td>
    <td>$50</td>
  </tr>
</table>
```
> Note: The \<caption\> tag must be inserted immediately after the \<table\> tag.

### A Special Style for One Table

To define a special style for one particular table, add an id attribute to the table:

```css
#tId tr:nth-child(even) {
  background-color: #eee;
}
#tId tr:nth-child(odd) {
  background-color: #fff;
}
#tId th {
  color: white;
  background-color: black;
}
```