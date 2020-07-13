# Box Model

## Related attributes

Trước khi giới thiệu box model, hãy làm quen với các thuộc tính CSS liên quan đến box model.

#### Width and height specify the width and height of an element, respectively.

Chúng tôi đặt width và high 100px cho thẻ div tương ứng và hiệu ứng của nó trong trình duyệt như sau:

```html
<div class="box"></div>
```

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #ffb5bf;
}
```

![Alt text](/images/box.png "box")

<p align="center">(div with width and height of 100px)<p>

#### Border refers to the border of an element

border is **_`border-width`_**, **_`border-style`_** , **_`border-color`_** . The abbreviation of, which is used to set the width, style (solid line, double line, etc.) and color of the border.

```css
.box {
  width: 100px;
  height: 100px;
  border: 5px solid #94e8ff;
  background-color: #ffb5bf;
}
```

![Alt text](/images/border.png "border")

<p align="center">(The blue part is border)<p>

#### Padding refers to the inner margin, which is the part between the element content and the border.

padding is **_`padding-top`_** , **_`padding-right`_** , **_`padding-bottom`_** , **_`padding-left`_** The abbreviation of, respectively refers to the upper inner margin, the right inner margin, the lower inner margin and the left inner margin.

```css
padding: 10px; /* top, right, bottom, left are 10px*/
padding: 10px 20px; /* top, bottom padding are 10px, left and right padding are 20px*/
padding: 10px 20px 30px; /* top padding is 10px, left and right padding are 20px, bottom padding is 30px*/
padding: 10px 20px 30px 40px; /* top padding is 10px, right padding is 20px, bottom padding is 30px, left padding is 40px*/
```

```css
.box {
  width: 100px;
  height: 100px;
  border: 5px solid #94e8ff;
  background-color: #ffb5bf;
  padding: 10px 20px 30px;
}
```

The running results in the browser are as follows:

![Alt text](/images/padding.png "padding")

<p align="center">(The green part is padding)<p>

Open "developer tool" in the browser, use the leftmost arrow icon to select the div element on the right, and view "Computed" under "Elements", you can view all kinds of attributes of the selected elements at a glance.

![Alt text](/images/paddingDetail.png)

<p align="center">(The green part is padding, and the corresponding padding values are displayed on the top, bottom, left, and right)<p>

#### Margin refers to the outer margin, which is used to define the space around the element.

margin is **_`margin-top`_** , **_`margin-right`_** , **_`margin-bottom`_** , **_`margin-left`_** Like padding, margin values can be set in multiple ways. For values in different ways, see padding.

```css
.box {
  width: 100px;
  height: 100px;
  background-color: #ffb5bf;
  border: 5px solid #94e8ff;
  padding: 10px 20px 30px;
  margin: 10px;
}
```

![Alt text](/images/margin.png)

<p align="center">(The colored part is margin)<p>

### Classification of Box Models

Due to the differences in browsers, box models are divided into standard box models and IE box models. Their presentation methods are slightly different from the calculation of box sizes. Let's first experience the differences through code examples.

```html
<div class="box_1"></div>
<div class="box_2"></div>
```

```css
.box_1 {
  width: 100px;
  height: 100px;
  background-color: #ffb5bf;
  border: 5px solid #94e8ff;
  padding: 10px 20px 30px;
  margin: 10px;
}
.box_2 {
  width: 100px;
  height: 100px;
  background-color: #ffb5bf;
  border: 5px solid #94e8ff;
  padding: 10px 20px 30px;
  margin: 10px;
  box-sizing: border-box; /* Newly added attributes that box_1 does not have */
}
```

![Alt text](/images/box1-withoutBoxSizing.png)

<p align="center">(.box_1 renderings)<p>

![Alt text](/images/box2-boxsizing.png)

<p align="center">(.box_2 renderings)<p>

The above two figures show the differences between the two box models. box\*1 is the standard box model and the specification of W3C; .box_2 is the old IE browser [Weird mode](https://zh.wikipedia.org/wiki/%E6%80%AA%E5%BC%82%E6%A8%A1%E5%BC%8F) Use your own non-standard model, also known as IE box model. In the standard box model by setting **`box-sizing: border-box`**; Can be converted to IE box model.

#### Standard box model

- The width and height of an element only contain content, `not border and padding values`.

- `The size of the box` is determined by `the width and height of the element, the border and the inner margin`.

> _We use the width and height of the box to measure the size of the box, which can be regarded as the total element width and height. It is not the same concept as the width and height set by the element itself_.

The width of the box = **_`width`_** + **_`border-width`_** \* 2 + **_`padding-left`_** + **_`padding-right`_**

The height of the box = **_`height`_** + **_`border-width`_** \* 2 + **_`padding-top`_** + **_`padding-bottom`_**

In. box_1, the width of the box is 150, which is calculated by `100+5*2+20+20`; The height is 150, which is calculated by `100+5*2+10+30`.

#### IE box model

- The width and height of the element include not only content, but also border and padding.

- The size of the box depends on the width and height. Modifying the border and padding values cannot change the size of the box.

In the effect diagram of. box_2, we can see that the size of the box is equal to the width and height of the element. In the IE box model, the space of border and padding will squeeze the space of content, making the width and height of the element content smaller than the value (100px) set by width and height.

[To Know More box-sizing attribute](BoxSizing.md)

### Browser compatibility and others

- As long as the appropriate DTDs are set, most browsers will display according to the standard box model, but IE5.X and 6 will display according to the IE box model in weird mode.

- The default value of the box-sizing attribute (IE8 +) of an element in the standard box model is content-box, which can be converted to the IE box model by setting border-box. In actual application scenarios, this setting is useful if you want to keep the total width and height of the control element fixed.

- The width, height, border, padding and margin of elements are all important components of the box model, however, the size of the box model is only related to the width and height, frame and inner spacing of the elements, while the outer margin only affects the size of the peripheral space occupied by the box.

### Summary

This section describes some attributes, standard box models, and IE box models related to box models. You need to master:

- The use of width, height, border, padding, and margin.

- The difference between standard box model and IE box model.
