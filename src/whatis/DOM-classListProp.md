# Definition and Usage
The classList property returns the class name(s) of an element, as a DOMTokenList object.

This property is useful to add, remove and toggle CSS classes on an element.

The classList property is read-only, however, you can modify it by using the add() and remove() methods.

Cross-browser solution: The classList property is not supported in IE9 and earlier. However, you can use the className property or regular expressions for a cross-browser solution (see "More Examples" on the bottom of this page).

classList: 
    field:
        lenght
        item <Iterable>
    methods:
        add()
        remove() : remove a class | mutlyClass from Element
        toggle() : Toggle between two classes for a element
        contains() : Find out if an element has a "mystyle" class
        replace():
        
         
 