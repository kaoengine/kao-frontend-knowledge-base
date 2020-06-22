# CSS SELECTORS

### Selectors là các mẫu được sử dụng để chọn (các) phần tử bạn muốn tạo kiểu.

#### Chúng ta sẽ chia ra 5 loại cho CSS Selectors :

- Simple selectors (chọn các yếu tố dựa trên tên, id, lớp).
- Combinator selectors (chọn các yếu tố dựa trên mối quan hệ cụ thể giữa chúng).
- Pseudo-class selectors (chọn các yếu tố dựa trên một trạng thái nhất định).
- Pseudo-elements selectors (chọn và định kiểu một phần của phần tử).
- Attribute selectors (chọn các yếu tố dựa trên một thuộc tính hoặc giá trị thuộc tính).

# The CSS element Selector - Simple Selectors

Element selector chọn các phần tử HTML dựa trên tên phần tử.

### Example:

Tại đây, tất cả các phần tử `<p>` trên trang sẽ được **center-aligned**, với màu văn bản **red text color**:

```CSS
p {
  text-align: center;
  color: red;
}
```

### The CSS id Selector

Id selector sử dụng thuộc tính id của một phần tử HTML để chọn một phần tử cụ thể.

_`id của một phần tử là duy nhất trong một trang, vì vậy id được sử dụng để chọn một phần tử duy nhất!`_

Để chọn một phần tử có id cụ thể, hãy viết ký tự `(#)`.

### Example:

Quy tắc CSS dưới đây sẽ được áp dụng cho phần tử HTML với `id="para"`:

```CSS
#para {
  text-align: center;
  color: red;
}
```

### The CSS class Selector

Class selector chọn các thành phần HTML với thuộc tính lớp cụ thể. Và có **3 trường hợp phổ biến** mà chúng ta có thể sử dụng như dưới đây:

1. Để chọn các phần tử với một lớp cụ thể, hãy viết bằng ký tự `(.)`

### Example

Trong ví dụ này tất cả các phần tử `class="center"` sẽ được màu **red** and **center-aligned** canh giữa:

```CSS
.center {
  text-align: center;
  color: red;
}
```

2. Bạn cũng có thể chỉ định các phần tử HTML (tags) cụ thể sẽ bị ảnh hưởng bởi một lớp.

### Example

Trong ví dụ này, chúng ta có thẻ `<p>` với `class="center"` sẽ được canh giữa `center-aligned`:

```CSS
p.center {
  text-align: center;
  color: red;
}
```

3. Các phần tử HTML cũng có thể tham chiếu đến nhiều hơn một lớp.

### Example

Trong ví dụ này thẻ `<p>` với 2 lớp là `center` với `large`:

```CSS
<p class="center large">This paragraph refers to two classes.</p>
```

#### Thử ví dụ dưới đây để xem đoạn code dưới này hoạt động như thế nào nhé

```HTML
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Class Selectors</title>
    <style>
        p.center {
            text-align: center;
            color: red;
        }

        p.large {
            font-size: 300%;
        }
    </style>
    </head>
    <body>
        <h1 class="center">
            This heading will not be affected
        </h1>
        <p class="center">
            This paragraph will be red and center-aligned.
        </p>
        <p class="center large">
            This paragraph will be red, center-aligned, and in a large font-size.
        </p>
    </body>
</html>
```

### The CSS Universal Selector

The universal selector `(*)` chọn tất cả các thành phần trên trang HTML.

### Example

Quy tắc CSS dưới đây sẽ ảnh hưởng đến mọi thành phần trên trang HTML:

```CSS
* {
  text-align: center;
  color: blue;
}
```

### The CSS Grouping Selector

The grouping selector chọn tất cả các thành phần HTML có cùng chung kiểu styles.

Quan sát đoạn CSS code bên dưới (thẻ `<h1>`, `<h2>`, và `<p>` có chung Attributes `text-align`, `color` và chung giá trị là `center` và `red` ):

```CSS
h1 {
  text-align: center;
  color: red;
}

h2 {
  text-align: center;
  color: red;
}

p {
  text-align: center;
  color: red;
}
```

Sẽ tốt hơn để nhóm các thẻ lại. Chúng ta chú ý _Syntax_ kỹ thuật này: tách từng bộ chọn bằng dấu phẩy

```CSS
h1, h2, p {
  text-align: center;
  color: red;
}
```

# Combinator Selectors

## 1. Descendant:

Được biểu thị bằng một ký tự `()` một dấu cách - kết hợp hai selectors sao cho các phần tử khớp với selector thứ hai được chọn nếu chúng có phần tử parent (parent's parent, parent's parent's parent,vv...) khớp với Selector thứ nhất. Selector sử dụng bộ kết hợp được gọi là `descendant selectors`.

Cụ thể là:
`element element` selector được sử dụng để chọn các phần tử bên trong các phần tử.

### Example 1: Based on HTML Tag

```htmL
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>

    <style>
        li {
            list-style-type: upper-roman;
            }

        li li {
            list-style-type: circle;
        }

    </style>

    </head>
    <body>

    <ul>

        <li><!-- it will be styled as upper-roman -->
            <div>Item 1</div>
            <ul>
                <li>Element A</li> <!-- it will be styled as circle -->
                <li>Element B</li><!-- it will be styled as circle -->
            </ul>
        </li>

        <li><!-- it will be styled as upper-roman -->
            <div>Item 2</div>
            <ul>
                <li>Element A</li><!-- it will be styled as circle -->
                <li>Element B</li><!-- it will be styled as circle -->
            </ul>
        </li>
    </ul>
    </body>
</html>
```

### Example 2: Based on ID selector `id="main-content"` và HTML tag `<p>`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #main-content p {
        background-color: #111;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <!-- All the <p> tags inside of the parent id="main-content" are styled -->
    <div id="main-content">
      <p>Hello There <strong>ninjas!</strong>Contact us below</p>
      <p>Ain't paragraph cool?</p>
      <p>Hey Hey!</p>
      <div id="sub-content">
        <p>More Content</p>
      </div>
    </div>
    <!--  -->

    <p>Is This Styled?</p>
    <!-- this won't be styled -->
  </body>
</html>
```

## 2. Adjacent sibling:

Adjacent sibling combinator `(+)` chỉ khớp với phần tử thứ hai nếu nó đứng ngay sau phần tử thứ nhất và cả hai đều là children của cùng một phần tử parent.

> Điều này chặt chẽ hơn so với `descendant combinator`

### Example 1:

Tạo style cho phần tử `<p>` được đặt ngay sau các phần tử `<div>`:

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      div + p {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <div>
      <h2>Oh No! I am not Colored!</h2>
      <p>Hey Div! I am your children, let me be colored.</p>
    </div>

    <!-- This <p> is styled -->
    <p><strong>Yes! I am going to be colored.<strong></p>
    <!--  -->

    <p>I will not be colored, won't I?</p>
  </body>
</html>
```

### Example 2:

```CSS
li:first-of-type + li {
  color: red;
}
```

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
</ul>
```

> Lưu ý: Như ví dụ ở trên, chúng ta có thể thấy `'li:first-of-type'` nghĩa là thẻ `<li>` đầu tiên được chọn và nó nhắm mục tiêu phần tử anh chị tiếp theo là `<li>2</li>`.

> Tuy nhiên, nếu chúng ta **_xóa_** `'first-of-type'`. Nó nhắm mục tiêu cả `<li>2</li>` và `<li>3</li>`

## 3. Child

The child combinator `(>)`. Đầu tiên, nó tìm kiếm tất cả các phần tử phù hợp với Selector 1 và nhận được kết quả 1, sau đó nó tìm kiếm các phần tử là con trực tiếp của các phần tử trong kết quả 1 và phù hợp với Selector 2 và nhận được kết quả 2. Kết quả 2 chính là thứ được trông đợi.

### Example 1:

```CSS
div > span {
  background-color: DodgerBlue;
}
```

```html
<div>
  <!-- all the span tag inside of div will be styled -->
  <span
    >Span #1, in the div.
    <span>Span #2, in the span that's in the div.</span>
  </span>
  <!--  -->
</div>
<span>Span #3, not in the div at all.</span>
```

### Example 2:

> Thử ví dụ dưới đây , chúng ta sẽ thêm 1 thẻ `<section>`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #main-content > p {
        color: red;
      }
    </style>
  </head>
  <body>
    <div id="main-content">
      <p>Hello There <strong>ninjas!</strong>Contact us below</p>
      <p>Ain't paragraph cool?</p>

      <!-- the p tag inside the parent of Section won't be styled -->
      <section>
        <p>hey hey!</p>
      </section>
      <!--  -->

      <!-- all the p in id="sub-content" won't be styled -->
      <div id="sub-content">
        <p>More Content</p>
      </div>
      <!--  -->
    </div>

    <p>Is This Styled?</p>
    <!-- this won't be styled -->
  </body>
</html>
```

## 4. General sibling

The general sibling combinator `(~)` chỉ khớp với phần tử thứ hai nếu nó tuân theo phần tử thứ nhất và cả hai đều là con của cùng một phần tử cha.

### Example 1:

```CSS
p ~ span {
  color: red;
}
```

```html
<span>This is not red.</span>
<p>Here is a paragraph.</p>
<code>Here is some code.</code>

<!-- this span is styled! -->
<span>And here is a red span!</span>

<code>More code...</code>

<!-- this span is styled! -->
<span>And this is a red span!</span>
```

### Example 2: Try to guess what happened to this example?

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      p ~ ul {
        background-color: red;
      }
    </style>
  </head>
  <body>
    <div>A div element.</div>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>

    <!-- start from p tag , all the children <li> of contained ul tag will be styled -->
    <p>The first paragraph.</p>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>

    <h2>Another list</h2>
    <ul>
      <li>Coffee</li>
      <li>Tea</li>
      <li>Milk</li>
    </ul>
  </body>
</html>
```

# Pseudo-class selectors

#### Syntax

```CSS
elements:pseudo-class {
  property: value;
}
```

## I. Pseudo-class selectors for link and user states

A pseudo-class được sử dụng để xác định trạng thái đặc biệt của một phần tử.

Ví dụ, nó có thể được sử dụng để:

- Style một yếu tố khi người dùng di chuyển qua nó.
- Style link truy cập và link chưa truy cập.
- Style một yếu tố khi nó được focus.

Một vài thẻ đơn giản như sau:

- `:link` đại diện cho một phần tử chưa được truy cập. Nó phù hợp với mọi phần tử `<a>`, `<area>` hoặc `<link>` có thuộc tính href.

- `:active` đại diện cho một phần tử (chẳng hạn như button) được user kích hoạt. chúng ta sẽ thấy khi chúng ta nhấn chuột.

- `:visited`: đã truy cập đại diện cho các liên kết mà người dùng đã truy cập. Vì lý do riêng tư, kiểu này hạn chế được sử dụng

- `:focus` đại diện cho một phần tử (thẻ `<input/>`). Nó thường được kích hoạt khi người dùng nhấp hoặc chạm vào một yếu tố hoặc chọn nó bằng phím "tab" của bàn phím.

- `:hover` phù hợp khi người dùng tương tác với một phần tử với thiết bị trỏ, nhưng không nhất thiết phải kích hoạt nó.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      a:link {
        color: blue;
      } /* Unvisited links */
      a:visited {
        color: purple;
      } /* Visited links */
      a:hover {
        background: yellow;
      } /* Hovered links */
      a:active {
        color: red;
      } /* Active links */

      p:active {
        background: #eee;
      } /* Active paragraphs */

      input:focus {
        background-color: yellow;
      }
    </style>
  </head>
  <body>
    <p>
      This paragraph contains a link:
      <a href="#">This link will turn red while you click on it.</a>
      The paragraph will get a gray background while you click on it or the
      link.
    </p>
    <input type="text" />
  </body>
</html>
```

## II. Pseudo-class selectors that apply to siblings

1. The `:first-child` CSS pseudo-class represents the first element among a group of sibling elements.

```CSS
p:first-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

```html
<div>
  <p>This text is selected!</p>
  <p>This text isn't selected.</p>
</div>

<div>
  <h2>This text isn't selected: it's not a `p`.</h2>
  <p>This text isn't selected.</p>
</div>
```

2. The `:last-child` CSS pseudo-class represents the last element among a group of sibling elements.

```CSS
p:last-child {
  color: lime;
  background-color: black;
  padding: 5px;
}
```

```html
<div>
  <p>This text isn't selected.</p>
  <p>This text is selected!</p>
</div>

<div>
  <p>This text isn't selected.</p>
  <h2>This text isn't selected: it's not a `p`.</h2>
</div>
```

3. The `:only-child` CSS pseudo-class represents an element without any siblings. This is the same as `:first-child`, `:last-child` or `:nth-child(1)`, `:nth-last-child(1)`, but with a lower specificity.

```CSS
div:only-child {
  color: red;
}

div {
  display: inline-block;
  margin: 6px;
  outline: 1px solid;
}
```

```html
<div>
  <div>I am an only child.</div>
</div>

<div>
  <div>I am the 1st sibling.</div>
  <div>I am the 2nd sibling.</div>
  <div>
    I am the 3rd sibling,
    <div>but this is an only child.</div>
  </div>
</div>
```

4. The `:first-of-type` CSS pseudo-class represents the first element of its type among a group of sibling elements.

```CSS
p:first-of-type {
  color: red;
  font-style: italic;
}
```

```html
<h2>Heading</h2>
<p>This Paragraph 1 will be styled</p>
<p>Paragraph 2</p>
```

5. The `:last-of-type` CSS pseudo-class represents the last element of its type among a group of sibling elements.

```css
p:last-of-type {
  color: red;
  font-style: italic;
}
```

```html
<h2>Heading</h2>
<p>Paragraph 1</p>
<p>This Paragraph 2 will be styled</p>
```

6. The `:only-of-type` CSS pseudo-class represents an element that has no siblings of the same type.

```CSS
main :only-of-type {
  color: red;
}
```

```html
<main>
  <div>I am `div` #1.</div>
  <p>I am the only `p` among my siblings.</p>
  <div>I am `div` #2.</div>
  <div>
    I am `div` #3.
    <i>I am the only `i` child.</i>
    <em>I am `em` #1.</em>
    <em>I am `em` #2.</em>
  </div>
</main>
```

7. The `:nth-child()` CSS pseudo-class matches elements based on their position in a group of siblings.

```CSS
p:nth-child(2) {
  background: red;
}
```

```html
<p>The first paragraph.</p>
<p>The second paragraph is styled.</p>
<p>The third paragraph.</p>
<p>The fourth paragraph.</p>
```

8. The `:nth-last-child()` CSS pseudo-class matches elements based on their position among a group of siblings, counting from the end.

```CSS
p:nth-last-child(2) {
  background: red;
}
```

```html
<p>The first paragraph.</p>
<p>The second paragraph.</p>
<p>The third paragraph is styled.</p>
<p>The fourth paragraph.</p>
```

9. The `:nth-of-type()` CSS pseudo-class matches elements of a given type, based on their position among a group of siblings.

```CSS
p:nth-of-type(2) {
  background: red;
}
```

```html
<p>The first paragraph.</p>
<p>The second paragraph is styled.</p>
<p>The third paragraph.</p>
<p>The fourth paragraph.</p>
```

10. The `:nth-last-of-type()` CSS pseudo-class matches elements of a given type, based on their position among a group of siblings, counting from the end.

```CSS
p:nth-last-of-type(2) {
  background: red;
}
```

```html
<p>The first paragraph.</p>
<p>The second paragraph.</p>
<p>The third paragraph.</p>
<p>The fourth paragraph is styled.</p>

<p>I am here to make you confused</p>
```

# Pseudo-element selectors

1. The `::first-letter` CSS pseudo-element Chọn và style chữ cái đầu tiên của mọi phần tử.

```css
p::first-letter {
  font-size: 200%;
  color: #8a2be2;
}
```

```html
<h1>Welcome to My Homepage</h1>

<p>My name is Donald.</p>
<p>I live in Duckburg.</p>
<p>My best friend is Mickey.</p>
```

2. The `::first-line` CSS pseudo-element Chọn và style dòng đầu tiên của mọi phần tử. chú ý Block-level Element.

```CSS
p::first-line {
  background-color: yellow;
  /* what if we add font-size? */
  /* font-size: 48px; */
}
```

```html
<h1>WWF's Mission Statement</h1>
<p>
  To stop the degradation of the planet's natural environment and to build a
  future in which humans live in harmony with nature, by; conserving the world's
  biological diversity, ensuring that the use of renewable natural resources is
  sustainable, and promoting the reduction of pollution and wasteful
  consumption.
</p>

<p>
  <b>Note:</b> For this selector to work in IE 5.5-8, you must specify the old,
  single-colon CSS2 syntax (:first-line instead of ::first-line).
</p>
```

3. `::before` Chèn một số văn bản trước nội dung của từng phần tử

4. `::after` Chèn một số văn bản sau nội dung của từng phần tử

```CSS
q::before {
  content: "«";
  color: blue;
}

q::after {
  content: "»";
  color: red;
}
```

```html
<p>My name is Donald</p>
<p>I live in Ducksburg</p>
```

# Attribute selectors: Welcome to Advanced Topic :)

## 1. Presence and value selectors:

| Seletor        | Example                       | Example description                                                                                                              |
| -------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------- |
| [attr]         | a[title]                      | Matches elements with an attr attribute (whose name is the value in square brackets).                                            |
| [attr=value]   | a[href="https://example.com"] | Matches elements with an attr attribute whose value is exactly value — the string inside the quotes.                             |
| [attr~=value]  | p[class~="special"]           | Matches elements with an attr attribute whose value is exactly value, or contains value in its (space separated) list of values. |
| [attr\|=value] | div[lang\|="zh"]              | Matches elements with an attr attribute whose value is exactly value or begins with value immediately followed by a hyphen.      |

> Giờ chúng ta sẽ xem ví dụ dưới đây:

- `li[class]` we can match any selector with a class attribute. This matches all of the list items except the first one.

- `li[class="a"]` matches the selector with class of a, but not the selector with class of b with another space-separated class as part of the value(`class="b"`). It selects the second list item.

- `li[class~="a"]` will match a class of a but also a value that contains the class of a as part of a whitespace-separated list. It selects the second and third list items.

```CSS
/* this style is going to look through all <li> tag */
/* if there is any <li> with class. The font-size will be activated */
li[class] {
    font-size: 200%;
}

/* this style causes the second line which is item 2 to be yellow */
/* it matched class a  */
/* the third line which is item 3 won't be yellow, because there is another class="b" */
li[class="a"] {
    background-color: yellow;
}

/* it matched with all class="a" but also matched with class="b" */
/* which are item 2 and item 3 */
li[class~="a"] {
    color: red;
}
```

```html
<h1>Attribute presence and value selectors</h1>
<ul>
  <li>Item 1</li>
  <li class="a">Item 2</li>
  <li class="a b">Item 3</li>
  <li class="ab">Item 4</li>
</ul>
```

## 2 .Substring matching selectors

These selectors allow for more advanced matching of substrings inside the value of your attribute. For example, if you had classes of `box-warning` and `box-error` and wanted to match everything that started with the string `"box-"`, you could use `[class^="box-"]` to select them both (or `[class|="box"]` as described in section above).

| Seletor       | Example           | Example description                                                                                                  |
| ------------- | ----------------- | -------------------------------------------------------------------------------------------------------------------- |
| [attr^=value] | li[class^="box-"] | Matches elements with an attr attribute (whose name is the value in square brackets), whose value begins with value. |
| [attr$=value] | li[class$="-box"] | Matches elements with an attr attribute whose value ends with value.                                                 |
| [attr*=value] | li[class*="box"]  | Matches elements with an attr attribute whose value contains value anywhere within the string.                       |

The below example shows usage of these selectors:

- `li[class^="a"]` matches any attribute value which starts with a, so matches the first two list items.

- `li[class$="a"]` matches any attribute value that ends with a, so matches the first and third list item.

- `li[class*="a"]` matches any attribute value where a appears anywhere in the string, so it matches all of our list items.

```CSS
/* start with "a" */
li[class^="a"] {
    font-size: 200%;
}

/* end with "a" */
li[class$="a"] {
    background-color: yellow;
}

/* match all */
li[class*="a"] {
    color: red;
}

```

```html
<h1>Attribute substring matching selectors</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="ab">Item 2</li>
  <li class="bca">Item 3</li>
  <li class="bcabc">Item 4</li>
</ul>
```

## 3. Case-sensitivity

If you want to match attribute values `case-insensitively` you can use the value `i` before the closing bracket. This flag tells the browser to match `ASCII characters` case-insensitively. Without the flag the values will be matched according to the case-sensitivity of the document language — in HTML's case it will be case sensitive.

> Give it a try! :)

```css
li[class^="a"] {
  background-color: yellow;
}

li[class^="a" i] {
  color: red;
}
```

```html
<h1>Case-insensitivity</h1>
<ul>
  <li class="a">Item 1</li>
  <li class="A">Item 2</li>
  <li class="Ab">Item 3</li>
</ul>
```

## 4. Misc selectors

There are some other selectors you can use as well. Look at some as below:

- `:not(selector)`

```CSS
.box {
      width: 100px;
      height: 100px;
      border: 1px solid steelblue;
      margin: 10px;
    }

/* it means whatever element in the body, it will add background-color: red */
/* but with class="special", hell no! */
body :not(.special) {
  background-color: red;
}
```

```html
<h1>:not() pseudo-class - CSS3 -</h1>
<div class="box"></div>
<div class="box special"></div>
<div class="box"></div>
```

Interesting! but What if I just want 2 boxes without `"special"` being colored background?

```CSS
/* it means whatever the boxes are going to be colored */
/* but with class="special", No! */
/* pay attention to .box:not() it does not seperate the space */
.box:not(.special) {
            background-color: red;
          }
```

2. The `:root` selector matches the document's root element.

> In HTML, the root element is always the html element.

```CSS
:root {
  background: yellow;
}
```

> **Wait.....! what are the differences among `:root`, `html` and `*` ?**

Here is the advanced topic for you guys! Discuss about it! The answer is below :

One technical difference between them is that `:root` - being a `pseudo class` has a greater specificity than `html` (a type selector).

and the `*` means that will select all elements only.

```CSS
/* this will override the html tag */
:root {
        background: green;
      }

/* not a chance to display, because :root takes over */
html {
  background: blue;
}

/* it will display within the pages of all elements */
*{
  background: tomato;
}
```

3. The `:empty` selector matches every element that has no children (including text nodes).

```CSS
p:empty {
  width: 100px;
  height: 20px;
  background: #ff0000;
}
```

```html
<!-- this empty text P will be styled -->
<p></p>
<p>A paragraph.</p>
<p>Another paragraph.</p>
```

4. `in-range` and `out-of-range`

The `:in-range` selector selects all elements with a value that is within a specified range.

The `:out-of-range` selector selects all elements with a value that is outside a specified range.

Note: The `:in-range` and `:out-of-range` selector only works for `input` elements with min and/or max attributes!

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      li {
        list-style: none;
        margin-bottom: 1em;
      }

      input {
        border: 1px solid black;
      }

      input:in-range {
        background-color: rgba(0, 255, 0, 0.25);
      }

      input:out-of-range {
        background-color: rgba(255, 0, 0, 0.25);
        border: 2px solid red;
      }

      input:in-range + label::after {
        content: "okay.";
      }

      input:out-of-range + label::after {
        content: "out of range!";
      }
    </style>
  </head>
  <body>
    <form action="" id="form1">
      <p>Values between 1 and 10 are valid.</p>
      <ul>
        <li>
          <input
            id="value1"
            name="value1"
            type="number"
            placeholder="1 to 10"
            min="1"
            max="10"
            value="12"
          />
          <label for="value1">Your value is </label>
        </li>
      </ul>
    </form>
  </body>
</html>
```
