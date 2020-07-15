JQuery 
====
### Basic selector
#### id
Match an element based on ID
$("#id");
#### class
Match elements based on class name
$(".class");
#### element
Match elements based on element name
$("element");
#### *
Match all elements
$("*");
selector1 , selector2
#### Matching selector1 element under selector2 can pass multiple parameter rules and so on
$("selector1","selector2");

### Level selector

#### Match all descendant elements under the given ancestor element

$("selector selector");

#### selector1,selector2
Match the selector1 element first and then the selector2 element
$("selector1,selector2");
#### parent > parent
Matching parent of the parent of the child element directly
$("parent > child");
#### prve + next
Matches the next sibling element immediately after the prev element
$("prve + next");
#### first ~ sliblings
Match all siblings elements after the prev element
$("prve ~ sliblings");
### Basic filter
#### :first
Get the first element of selector
$("selector:first");
#### :not()
Remove all elements matching the given selector
$(":not(selector)");
#### :even
Match all elements with an even index, counting from 0
$(":even");
#### :odd
Match all elements with an odd index, counting from 0
$(":odd");
#### :eq(index)
Match an element with a given index value
$(":eq(index)");
#### :last
Get the last element
$(":last");

### Content selector
#### :contains()
Match elements containing given text
$(":contains(text)");
#### :empty
Match all empty elements that do not contain child elements or text
$(":empty");
#### :has()
Match elements that contain elements matched by the selector
$(":has(selector)");
#### :parent
Match the parent element of the element that contains the child element or text
$(":parent");

### Visibility selector
#### :hidden
Match all invisible elements or elements of type hidden
$(":hidden");
#### :visible
Match all visible elements
$(":visible");

### Attribute selector
#### [attr]
Match elements containing the given attribute
#### $("[attr]");
[attr=value]
Elements that match a given attribute are a specific value
#### $("[attr=value]");
[attr!=value]
Match all elements that do not contain the specified attribute, or whose attribute is not equal to a specific value
$("[attr!=value]");
#### [attr^=value]
Match elements whose given attributes start with certain values
$("[attr^=value]");
#### [attr$=value]
Matches a given attribute is an element that ends with certain values
$("[attr$=value]");

### Child element selector
#### :first-child
Match the first child element of the given selector
$("selector:first-child");
#### :last-child
Match the last child element of selector
$("selector:last-child");
#### :first-of-type
Match the first element of this type ( selector ) in the parent element
$("selector:first-of-type");
#### :last-of-type
Match the last element of this type ( selector ) in the parent element
$("selector:last-of-type");
#### :nth-child(index)
Match the Nth child or parity element under its parent element
$(":nth-child(index)");

### Form selector
#### :input
Match all input , textarea , select and button elements
$(":input");
#### :text
Match all single-line text boxes
$(":text");
#### :checkbox
Match all checkboxes
$(":checkbox");
#### :enabled
Match all available elements
$(":enabled");
#### :disabled
Match all unavailable elements
$(":disabled");
#### :checked
Is selected to match all selected elements (checkboxes, radio buttons, etc., SELECT in Option )
$(":checked");
#### :selected
Match all selected option elements
$(":selected");