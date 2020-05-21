Regular expression
===================

### Quantity qualifier

| Quantity qualifier|  Explanation |
|---|---|
| x+ |  1 or more |
| x* |  0 or more |
| x? |  0 or 1 |
| x{n} |  n |
| x{n,} |  atleast n |
| x{n,m} |  n to m, following the greedy principle, will match as many as possible; if you add a? (Such as x{n,m}?), follow the non-greedy principle |

>Greed can be understood as traversing from back to front, non-greedy can be understood as traversing from front to back

### Character qualifier

|Character qualifier|Explanation|
|---|---|
|\d| matches a numberic charactor [0-9]|
|\D| matches a non-numberic character[^0-9]|
|\w| match word character (including numberic underscores),[0-9A-za-z_]|
|\W| match none word character (including numberic underscores),[^0-9A-za-z_]|
|\s|match blank characters (space, carrieage return, tabs)|
|\S|match non-whitespace characters|
|.| matches any single characer ( excluding whitespace characters)|

According to the method of use, it can be classified as follows:

|use| Explanation|
|---|---|
|[0-9a-zA-Z]| Range character|
|[abcd]| Any character|
|[^a-z]| Range character|

### Locator


|Locator| Explanation|
|---|---|
|^| Opening sign|
|$| End Mark|
|\b| word boundary|
|\B| non-word boundary|

### Escapes
`\`: Used to match certain special characters


### Select match

`|`: Can match multiple rules


### Special usage
|Special usage| Explanation|
|---|---|
|`?-` Positive preview| match a string ending with the specified content|
|`?!` Negative preview| Matching is not a string that ends with the specified content (there is no negative preview in JS)|
|`?` Negative preview| Don't put the content of the selection match in the buffer|


### How to use regular expressions in JavaScript

There are two ways to use regular expressions in JavaScript:
The first method: using `RegExp` class
The methods provided are: (regular expression in front)


* test(str): Whether there is a string matching the pattern in the string match, return `true/false`
* exec: If subexpressions, using regular expression `exec` method, returns result[0] = 匹配结果, result[1] = 子表达式 1 的匹配结果 ……
the second method are: the use of `String` class 
methods are provided: (regex later)
* `search` Returns the position where the string matching the pattern appears, if not, returns -1;
* `match` Returns the string matched by the matching pattern, if any, returns an array, none, returns null;
* `replace` Replace the string matched by the matching pattern;
* `split` Separate the string with the matching pattern of the string as the delimiter and return the array;