# Flex Layout

In the traditional way, we usually set the display, position, float and other attributes of the box model for layout, which is not very convenient for some special layouts, such as vertical center and horizontal center, if the floating feature is applied, it is necessary to clear the floating, which is not only troublesome, but also may cause unexpected layout accidentally, and the final result is often unsatisfactory.

`Flexbox` (full name: Flexible Box) layout, also known as Flex layout, means "Flexible layout". As the name implies, elements in Flex layout have scalability. Yes, by setting the display attribute of the parent element display: `flex | inline-flex`; Its child elements have scalability. Even if the width and height of the child elements are uncertain, the alignment, proportion, and spatial distribution of the child elements can be determined by setting relevant css attributes.

### Some Concepts

Before learning Flex layout, let's get familiar with several concepts about Flex layout, which can help us understand the following.

![Alt text](/images/flex1.png)

<p align="center">Preview the basic concept, the picture is from the network</p>

The above figure shows the general architecture of a Flex layout. There are several concepts included in the figure:

- The Flex layout is a whole module, in which the parent element is called flex container, which means container; The child element is called flex item, which means item.

- There are two invisible axes in the Flex layout: main axis and cross axis. The default spindle is parallel, and the cross axis is perpendicular to the spindle.

- The starting position of the main axis is called main start, and the ending position is called main end; The starting position of the cross axis is called cross start, and the ending position is called cross end.

- The size of the child element in the principal axis direction is called the main size, and the size in the cross axis direction is called the cross size.

Among the above related concepts, the main axis, cross axis, and their starting and ending positions are more important. The child elements in the parent element are arranged from main start to main end along the principal axis and from cross start to cross end along the cross axis. In the conventional layout, the browser is arranged from left to right. If it cannot be squeezed, it will wrap. In this case, the main axis is horizontal and the cross axis is vertical, the main axis is from left to right, and the cross axis is from top to bottom.

In the Flex layout, the default principal axis direction is also horizontal, and the cross axis is vertical, by changing flex-direction And flex-wrap The attribute value of can change the direction of the two axes, their starting position and starting position respectively, which makes the layout more flexible and changeable.

After understanding the abstract concepts related to Flex layout, let's take a look at the attributes of Flex layout. Here, it is introduced in two parts. One is that it acts on the parent element (container), the second is acting on the child element (project).

### Container properties (parent elements)

The display property is used to define the parent element as the container of the Flex layout. Set the display value `display: flex`; The container is externally represented as a block-level element; `display: inline-flex`; The container is externally represented as an in-line element, and the internal expression is the same.

```html
<div class="container"></div>
```

```CSS
.container {
    display: flex | inline-flex;
}
```

The above code defines a container with a Flex layout. We have the following six attributes to set on the container:

- flex-direction
- flex-wrap
- flex-flow
- justify-content
- align-items
- align-content

#### flex-direction

flex-direction defines the direction of the spindle, that is, the arrangement direction of the project.

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

```css
.container {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

- row (default): The spindle is in the horizontal direction and the starting point is on the left, which is commonly seen from left to right.

- row-reverse: the main axis is in the horizontal direction and the starting point is on the right.

- column: The main axis is in the vertical direction, and the starting point is in the upper edge.

- column-reverse: the main axis is in the vertical direction and the starting point is in the lower edge.

![Alt text](/images/flex2.png)

<p align="center">flex-direction is row</p>

![Alt text](/images/flex3.png)

<p align="center">flex-direction is row-reverse</p>

![Alt text](/images/flex4.png)

<p align="center">flex-direction is column</p>

![Alt text](/images/flex5.png)

<p align="center">flex-direction is column-reverse</p>

#### flex-wrap

By default, items are displayed in a row. flex-wrap is used to define how to wrap a line when a row cannot be placed.

```CSS
.container {
    flex-wrap: nowrap | wrap | wrap-reverse;
}
```

Assume that the principal axis is horizontal from left to right at this time:

- nowrap (default): no line breaks.

- wrap: wrap, the first line is on it.

- wrap-reverse: wrap, the first line is below.

![Alt text](/images/flex6.png)

<p align="center">By default, flex-wrap is nowrap and does not wrap. Even if the width of the project is set, the project will be compressed according to the size of the screen</p>

![Alt text](/images/flex7.png)

<p align="center">flex-wrap is wrap</p>

![Alt text](/images/flex.8.png)

<p align="center">flex-wrap is wrap-reverse</p>

Setting flex-wrap to wrap-reverse can be seen as changing the cross start and cross end of the cross axis.

#### flex-flow

`flex-flow` is the abbreviation of `flex-direction` and `flex-wrap`. The default value is row no-wrap.

```css
.container {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

#### justify-content
This attribute defines how the elements are arranged on the main axis.
This attribute will help allocate the remaining empty space after the flex element cannot be enlarged or has reached the maximum value.

```css
.container {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```

- flex-start (default): align with the starting point of the spindle.

- flex-end: align with the end of the spindle.

- center: The project is in the middle.

- space-between: both ends are aligned, and the distances between projects are equal.

- space-around: The interval between the two sides of each project is equal, so the interval between projects is twice that between projects and borders.

![Alt text](/images/flex9.png)

<p align="center">justify-content is flex-start</p>

![Alt text](/images/flex10.png)

<p align="center">justify-content is flex-end</p>

![Alt text](/images/flex11.png)

<p align="center">justify-content is center</p>

![Alt text](/images/flex12.png)

<p align="center">justify-content is space-between</p>

![Alt text](/images/flex13.png)

<p align="center">justify-content is space-around</p>

#### align-items

align-items defines how items are aligned on the cross axis.

```css
.container {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

- flex-start: align with the starting point of the cross axis.

- flex-end: align with the end of the cross axis.

- center: center alignment.

- baseline: the baseline alignment of the first line of the project.

- stretch (default): If the project does not set height or is auto, the project will occupy the height of the entire container.

Assuming that the cross axis is vertical from top to bottom, the following shows the renderings of different attribute values.

![Alt text](/images/flex-start.png)

<p align="center">(align-items is flex-start)</p>

![Alt text](/images/flex-end.png)

<p align="center">(align-items is flex-end)</p>

![Alt text](/images/flex-center.png)

<p align="center">(align-items is center)</p>

![Alt text](/images/flex-baseline.png)

<p align="center">(align-items is baseline)</p>

![Alt text](/images/flex-stretch.png)

<p align="center">(align-items is stretch)</p>

#### align-content

`align-content` defines the alignment of multiple axes. If the principal axis is in the horizontal direction and the cross axis is in the vertical direction, align-content can be understood as the alignment of multiple lines in the vertical direction. **This property does not work when the item arrangement has only one row**.

```css
.container {
  align-content: flex-start | flex-end | center | space-between | space-around |
    stretch;
}
```

- flex-start: align with the starting point of the cross axis.

- flex-end: align with the end of the cross axis;
- center: center alignment.

- space-between: Align with both ends of the cross axis, and the distances between the axes are equal.

- space-around: The interval between the two sides of each axis is equal, so the interval between the axis and the axis is twice that between the axis and the frame.

- stretch (default): If the project does not set height or is auto, the project will occupy the height of the entire container.

![Alt text](/images/align-content-start.png)

<p align="center">(align-content is flex-start)</p>

![Alt text](/images/align-content-end.png)

<p align="center">(align-content is flex-end)</p>

![Alt text](/images/align-content-center.png)

<p align="center">(align-content is center)</p>

![Alt text](/images/align-content-space-between.png)

<p align="center">(align-content is space-between)</p>

![Alt text](/images/align-content-space-around.png)

<p align="center">(align-content is space-around)</p>

![Alt text](/images/align-content-stretch.png)

<p align="center">(align-content is stretch)</p>

### Project properties

Setting properties for a project **(child elements)** allows you to control the Flex layout more flexibly. The following six attributes can be set on the project:

- Order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

We will use this html as above:

```html
<div class="container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
</div>
```

#### Order

order defines the order of the items. The default value is 0. The smaller the value, the higher the order.

```css
.item {
  order: <integer>;
}
```

![Alt text](/images/order.png)

<p align="center">(Set order for the third project: -1; After that, the project is ranked in the front)</p>

#### flex-grow

flex-grow defines the scale-up of the project. The default value is 0, which means that the project will not be enlarged even if there is space left.

```css
.item {
  flex-grow: <number>;
}
```

![Alt text](/images/flex-grow1.png)

<p align="center">(flex-grow for all projects is 1, dividing the remaining space equally)</p>

![Alt text](/images/flex-grow2.png)

<p align="center">(The larger the flex-grow attribute value is, the larger the remaining space is)</p>

#### flex-shrink

flex-shrink defines the project shrinkage ratio. The default value is 1, that is, when there is not enough space, the project will automatically shrink.

If the flex-shrink of all projects is 1, when there is not enough space, all projects will shrink proportionally; If the flex-shrink of one project is 0, the rest are 1, when there is not enough space, the flex-shrink to 0 does not shrink.

**The negative value is invalid for this property**.

```css
.item {
  flex-shrink: <number>；;
}
```

![Alt text](/images/flex-shrink1.png)

<p align="center">(Default proportional reduction when space is insufficient)</p>

![Alt text](/images/flex-shrink2.png)

<p align="center">(flex-shrink to 0 does not shrink)</p>

#### flex-basis

flex-basis defines the principal axis space occupied by the project before allocating extra space. The default value is auto, which is the original size of the project. The browser calculates whether the spindle has extra space based on this attribute.

The setting of flex-basis is the same as width or height. It can be pixels or percentages. After flex-basis is set, its priority is higher than width or height.

```css
.item {
  flex-basis: <length> | auto;
}
```

![Alt text](/images/flex-basix.png)

<p align="center">(Display of different flex-basis values)</p>

#### flex

The flex attribute is the abbreviation of `flex-grow`, `flex-shrink`, and `flex-basis`. The default value is 0 1 auto. The latter two attributes are optional.

This property has two shortcut values: `auto(1 1 auto)` and none `(0 0 auto)`. `auto` means that it can be stretched or contracted when needed, and `none` means that it cannot be stretched or contracted.

```css
.item {
  flex: auto | none | [ < "flex-grow" > < "flex-shrink" >? || < "flex-basis" > ];
}
```

#### align-self

align-self is used to define the alignment of a single item that is different from other items. You can override the align-items property. The default property value is `auto`, which inherits the align-items property value of the parent element. When there is no parent element, its performance is equivalent to stretch.

The six possible attribute values of align-self are the same as those of align-items except auto.

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

![Alt text](/images/align-self.png)

<p align="center">(The alignment of the third item is different from others)</p>

### Simple instance

#### Three-column layout

Do you still remember the implementation of the `three-column layout` in the previous section? If `Flex layout` is used, how should it be implemented? Let's try with the above knowledge. First, give the basic code:

```html
<div class="container">
  <div class="center">center</div>
  <div class="left">left</div>
  <div class="right">right</div>
</div>
```

```css
.center {
  height: 150px;
  background-color: #94e8ff;
}

.left {
  width: 100px;
  height: 150px;
  background-color: #ffb5bf;
}
.right {
  width: 200px;
  height: 150px;
  background-color: #8990d5;
}
```

We first set the container to the Flex layout:

```css
.container {
  display: flex;
}
```

The next problems to be solved are how to arrange **.left** on the leftmost and how to fill up the remaining space of **.center**. In the study of Project attributes, the order attribute can change the order of projects, and `flex-grow` can define the amplification ratio of projects. Yes, using these two attributes can solve our problem.

```css
.left {
  order: -1;
}

.center {
  flex-grow: 1; /* flex: 1; we can also use this method as well*/
}
```

Is it very simple? Compared with the traditional layout, `Flex layout` is more flexible and easy to use. The above is just a method, and more methods are expected to be explored by everyone.

#### Center problem

When the height of the child element is uncertain, it is troublesome to handle vertical center. However, using the container alignment attribute in the Flex layout can quickly solve the problem, the following code child elements are horizontally and vertically centered in the parent element.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

There are various ways to realize the layout. It is the best way to realize it by doing more works, practicing more frequently, comprehensively considering various factors and finding the most suitable way according to needs. Teacher Ruan Yifeng has given some examples of `Flex layout`, which are very useful for actual scenarios. It is recommended to read: [Flex Layout tutorial: Examples](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html).

However, I prefer this tutorial in English version.
[Read here](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

### Browser compatibility and others

**After the `Flex layout` is set, the float, clear, and vertical-align attributes of the child elements are invalid.**

For historical reasons, W3C has made many updates to flex, which leads to uneven support of browsers. So far, there are several ways to write Flex layout:

```css
display: box; /* 2009 version old syntax */
display: flexbox; /* 2011 version transition syntax */
display: flex | inline-flex; /* 2012 version new syntax */
```

From [Can I Use](https://caniuse.com/#search=flex) The current Flex layout supports browsers. From this we can summarize the current support for the new version:

- Chrome 29+
- Firefox 28+
- Safari 9+
- iOS Safari 9+
- Android 4.4+
- IE Mobile 11+

Earlier versions need to be prefixed. Different versions may have different attribute values due to different periods. Here is a recommended method for compatibility:

```css
.page-wrap {
  display: -webkit-box; /* old syntax iOS 6-, Safari 3.1-6 */
  display: -moz-box; /* old syntax Firefox 19- (buggy but mostly works) */
  display: -ms-flexbox; /* transition syntax IE 10 */
  display: -webkit-flex; /* new syntax Chrome */
  display: flex; /* new syntax, Spec - Opera 12.1, Firefox 20+ */
}
```

### Summary

This section mainly introduces the syntax of Flex layout. Flex layout is a popular layout method at present. Compared with traditional layout, Flex layout is more flexible and easy to understand, and can solve many complex scenarios. However, it also has **disadvantages**. **Due to historical reasons, W3C has revised this attribute value many times**, resulting in various writing methods. In addition, it is a rising star, so the compatibility of browsers is not as good as that of traditional layouts, but it doesn't matter, these are gradually improving, and the development of everything is bringing forth the old and bringing forth the new. In this section, you need to master:

- The meaning of containers, projects, main axes, cross axes and their starting and ending positions in Flex layout.

- The six attributes of the container and the meaning and usage of their attribute values.

- The six attributes of the project and the meaning and usage of their attribute values.

- Compatibility issues of Flex layouts in different versions of browsers.
