### Tags

 Thẻ là phần bắt đầu và kết thúc của phần tử HTML. Chúng bắt đầu bằng biểu tượng \<và kết thúc bằng\>. Bất cứ điều gì được viết bên trong \<và\> đều được gọi là thẻ.

```html
<p> </p>
```

### Elements
HTML elements được xác định bởi thẻ bắt đầu, một số nội dung và thẻ kết thúc:

```html
<tagname> Nội dung ở đây ... </tagname>
```
Ví dụ:

```html
<h1> Tiêu đề đầu tiên của tôi </h1>
<p> Đoạn đầu tiên của tôi. </p>
```

| Thẻ bắt đầu | Nội dung element | Thẻ kết thúc |
| ----------- | ---------------------- | --------- |
| \<h1\> | Tiêu đề đầu tiên của tôi | </h1> |
| \<p> | Đoạn đầu tiên của tôi \. | \<p> |
| \<br\> | không có | không có |


#### Các phần tử HTML lồng nhau

Các phần tử HTML có thể được lồng nhau (điều này có nghĩa là các phần tử có thể chứa các phần tử khác).

Tất cả các tài liệu HTML bao gồm các phần tử HTML lồng nhau.

```html
<! DOCTYPE html>
<html>
<body>

<h1> Tiêu đề đầu tiên của tôi </h1>
<p> Đoạn đầu tiên của tôi. </p>

</body>
</html>
```

#### Các phần tử HTML trống
Các phần tử trống (còn được gọi là phần tử tự đóng hoặc phần tử trống) không phải là thẻ chứa - điều đó có nghĩa là, bạn không thể viết \<hr\> một số nội dung \</hr\> hoặc \<br\> một số nội dung \</br\>.

Một ví dụ điển hình của một phần tử trống, là phần tử \<br\>, đại diện cho ngắt dòng. Một số thành phần trống phổ biến khác là \<img\>, \<input\>, \<link\>, \<meta\>, \<hr\>, v.v ...

```html
<p>This paragraph contains <br> a line break.</p>
<img src="images/sky.jpg" alt="Cloudy Sky">
<input type="text" name="username">
```
>Tài liệu HTML chứa các thẻ, nhưng không chứa các thành phần. Các element chỉ được tạo sau bước phân tích cú pháp, từ các thẻ này.

### Attribute

Thuộc tính HTML cung cấp thông tin bổ sung về các elements HTML.


. Tất cả các elements HTML có thể có các thuộc tính
. Các thuộc tính cung cấp thêm thông tin về các elements
. Các thuộc tính luôn được chỉ định trong thẻ bắt đầu
. Các thuộc tính thường có các cặp tên / giá trị như: name = "value"

#### Thuộc tính href
Thẻ \<a\> xác định siêu liên kết. Thuộc tính href chỉ định URL của trang mà liên kết đến:

```html
<a href="https://tuoitre.vn"> tuoi tre </a>
```

#### Thẻ cơ bản

* Tiêu đề văn bản, được biểu thị bằng các thẻ \<h1\>, \<h2\>, \<h3\>, \<h4\>, \<h5\>, \<h6\>.
* Một đoạn văn, được ký hiệu bằng thẻ \<p\>.
* Thước kẻ ngang, được biểu thị bằng thẻ \<hr\>.
* Một liên kết, được ký hiệu bằng cách sử dụng thẻ \<a\> (neo).
* Danh sách, được biểu thị bằng các thẻ \<ul\> (danh sách không có thứ tự), \<ol\> (danh sách được sắp xếp) và \<li\> (phần tử danh sách).
. Một hình ảnh, được biểu thị bằng thẻ \<img\>
* Một bộ chia, được biểu thị bằng thẻ \<div\>
* Một khoảng văn bản, được biểu thị bằng thẻ \<span\>

### HTML List

HTML cung cấp một cách để tạo cả danh sách theo thứ tự (với các element đếm lên, 1, 2, 3 ...) và danh sách không có thứ tự với dấu đầu dòng thay vì số. Danh sách là một cách tốt để chính thức hóa danh sách các mục và để kiểu dáng HTML thực hiện công việc cho bạn.

#### Danh sách được xắp sếp
Dưới đây là một ví dụ về cách tạo danh sách theo thứ tự:

```html
<p> Đây là danh sách các mục được xắp sếp: </p>
<ol>
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ol>
```

Danh sách được sắp xếp có "type" attribute" xác định quy ước đánh số sẽ sử dụng.

Để đếm số sử dụng, use type="1":

```html
<p> Đây là danh sách các mục được xắp sếp: </p>
<ol type = "1">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ol>
```

Để đếm bằng chữ in hoa, use type="A":

```html
<p> Đây là danh sách các mục được xắp sếp: </p>
<ol type = "A">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ol>
```

Để đếm bằng chữ thường, use type= "a":

```html
<p> Đây là danh sách các mục được xắp sếp: </p>
<ol type = "a">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ol>
```

Để đếm bằng chữ số La Mã viết hoa, use type = "I":

```html
<p> Đây là danh sách các mục được xắp sếp: </p>
<ol type = "I">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ol>
```

Để đếm bằng chữ số La Mã viết thường, use type = "i":

```html
<p> Đây là danh sách các mục được xắp sếp: </p>
<ol type = "i">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ol>
```
Danh sách không theo thứ tự
Dưới đây là một ví dụ về cách tạo danh sách không theo thứ tự:

```
<p> Đây là danh sách các mục không có thứ tự: </p>
<ul>
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ul>
```
Để thay đổi các thuộc tính kiểu danh sách, chúng ta có thể sử dụng thuộc tính CSS được gọi là kiểu kiểu danh sách. Các loại có sẵn là:

disc
circle
square
không ai
Dưới đây là một ví dụ về kiểu kiểu danh sách disc:

```html
<p> Đây là danh sách các mục không có thứ tự: </p>
<ul style = "list-style-type: disc">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ul>
```

Dưới đây là một ví dụ về kiểu kiểu danh sách circle:

```html
<p> Đây là danh sách các mục không có thứ tự: </p>
<ul style = "list-style-type: circle">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ul>
```
Dưới đây là một ví dụ về kiểu kiểu danh sách square:

```html
<p> Đây là danh sách các mục không có thứ tự: </p>
<ul style = "list-style-type: square">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ul>
```

Dưới đây là một ví dụ về kiểu không có danh sách:

```html
<p> Đây là danh sách các mục không có thứ tự: </p>
<ul style = "list-style-type: none">
    <li> Mục đầu tiên </li>
    <li> Mục thứ hai </li>
    <li> Mục thứ ba </li>
</ul>
```

#### Các elements cấp khối

Các elements khối là những phần tử được định dạng trực quan dưới dạng các khối (tức là chiếm toàn bộ chiều rộng có sẵn), với một ngắt dòng trước và sau phần tử. Ví dụ: phần tử đoạn (\<p\>), tiêu đề (\<h1\> đến\<h6\>), phân chia (\<div\>), v.v.

Nói chung, các phần tử cấp khối có thể chứa các inline elements và block-level elements.

#### Inline-level Elements 
Inline-level Elements là các phần tử của tài liệu nguồn không tạo thành  new blocks of content; nội dung được phân phối theo dòng. Ví dụ: các đoạn văn bản được nhấn mạnh trong một đoạn (\<em\>), khoảng cách (\<span\>), phần tử mạnh (\<strong\>), v.v.

Các phần tử nội tuyến thường chỉ có thể chứa văn bản và các phần tử nội tuyến khác.


### loại CSS

Có ba loại CSS được đưa ra dưới đây:

* Inline CSS
* Internal or Embedded CSS
* External CSS

#### Inline CSS:
CSS nội tuyến chứa thuộc tính CSS trong phần thân được đính kèm với elements được gọi là Inline CSS. Kiểu này được chỉ định trong thẻ HTML bằng attribute style.

```html
 <p style = "color:#009900; font-size:50px; 
                font-style:italic; text-align:center;"> 
            Buoi 4 
 </p> 
```

#### Internal or Embedded CSS:
 Điều này có thể được sử dụng khi một tài liệu HTML duy nhất phải được tạo kiểu duy nhất. Bộ quy tắc CSS phải nằm trong tệp HTML trong phần đầu, tức là CSS được nhúng trong tệp HTML.

```html
<! DOCTYPE html>
<html>
    <head>
        <title> Internal or Embedded CSS</title>
        <style>
            p {
                color: # 009900;
                font-size: 50px;
                font-weight: bold;
            }
        </style>
    </head>
    <body>
            <p> Bồi 4 </p>
    </body>
</html>
```

#### External CSS:
 External CSS chứa tệp CSS riêng chỉ chứa thuộc tính kiểu với sự trợ giúp của các thuộc tính thẻ (Ví dụ: For example class, id, heading, … etc). Thuộc tính CSS được viết trong một tệp riêng biệt có phần mở rộng .css và phải được liên kết với tài liệu HTML bằng thẻ liên kết. Điều này có nghĩa là đối với mỗi thành phần, kiểu chỉ có thể được đặt một lần và sẽ được áp dụng trên các trang web.

Ví dụ: Tệp được cung cấp dưới đây chứa thuộc tính CSS. Tập tin này lưu với phần mở rộng .css.
```css
body {
    background-color:powderblue;
}
```

Dưới đây là  HTML đang sử dụng biểu định kiểu ngoài được tạo

*  link tag được sử dụng để liên kết biểu định kiểu ngoài với trang web html.
* atribute href được sử dụng để chỉ định vị trí của tệp css bên ngoài.

```html
<! DOCTYPE html>
<html>
   <head>
  <link rel="stylesheet" href="styles.css">
        </head>
  
    <body>
    </body>
</html>
```

Properties of CSS: CSS nội tuyến có mức ưu tiên cao nhất, sau đó đến Internal / Embedded theo sau là External CSS có mức độ ưu tiên ít nhất. Nhiều tờ phong cách có thể được xác định trên style sheets. Nếu đối với thẻ HTML, các kiểu được xác định trong nhiều style sheets thì thứ tự bên dưới sẽ được tuân theo.

Vì Inline có mức ưu tiên cao nhất, mọi kiểu được xác định trong style sheets bên trong và bên ngoài sẽ bị ghi đè bởi kiểu Inline.
Internal hoặc Embedded đứng thứ hai trong danh sách ưu tiên và ghi đè các kiểu trong bảng kiểu bên ngoài.
External style sheets có mức độ ưu tiên ít nhất. Nếu không có kiểu nào được định nghĩa trong style sheets nội tuyến hoặc nội bộ thì quy tắc style sheets ngoài được áp dụng cho các thẻ HTML.


### CSS Multi columns

Bố cục nhiều cột CSS cho phép dễ dàng định nghĩa nhiều cột văn bản - giống như trên báo:



* count-column: thuộc tính chỉ định số lượng cột mà một phần tử nên được chia thành
* column-gap: thuộc tính chỉ định khoảng cách giữa các column
* column-rule-style: property chỉ định kiểu của quy tắc giữa các column
* column-rule-width: property chỉ định độ rộng của quy tắc giữa các column
* column-rule-color: property chỉ định màu của quy tắc giữa các column:
* quy tắc column: thuộc tính là thuộc tính tốc ký để đặt tất cả các thuộc tính quy tắc column- * ở trên.

* column-span: thuộc tính chỉ định có bao nhiêu column mà một phần tử sẽ trải dài.
* column-width: thuộc tính chỉ định chiều rộng tối ưu được đề xuất cho các column.

### Hệ thống phông chữ CSS
#### Font Family
font family của một văn bản được đặt với  font-family property.

 font-family property phải giữ một số tên phông chữ như một hệ thống "dự phòng". Nếu trình duyệt không hỗ trợ phông chữ đầu tiên, nó sẽ thử phông chữ tiếp theo, v.v.

Bắt đầu với phông chữ bạn muốn và kết thúc bằng một họ chung, để cho phép trình duyệt chọn một phông chữ tương tự trong họ chung, nếu không có phông chữ nào khác.

for mac-os: -apple-system, BlinkMacSystemFont

>Lưu ý: Nếu tên của một font-family có nhiều hơn một từ, thì nó phải nằm trong dấu ngoặc kép, như: "Times New Roman".

#### Font Style
Thuộc tính kiểu phông chữ chủ yếu được sử dụng để chỉ định văn bản in nghiêng.

This property has 2 values:

normal - Văn bản được hiển thị bình thường
italic - Văn bản được in nghiêng

#### Font Weight
Thuộc tính trọng lượng phông chữ chỉ định trọng lượng của phông chữ:

```css
p {
  font-weight: bình thường;
}

p.thick {
  font-weight: in đậm;
}
```

#### CSS Font Size
Thuộc tính font-size  đặt kích thước của văn bản.

Giá trị font-size  có thể là một kích thước tuyệt đối hoặc tương đối.

Kích thước tuyệt đối:

Đặt văn bản thành một kích thước được chỉ định
Không cho phép người dùng thay đổi kích thước văn bản trong tất cả các trình duyệt (xấu vì lý do truy cập)
Kích thước tuyệt đối hữu ích khi biết kích thước vật lý của đầu ra
Kích thước tương đối:

Đặt kích thước tương ứng với các element xung quanh
Cho phép người dùng thay đổi kích thước văn bản trong trình duyệt

** Đặt cỡ chữ bằng pixel **
Đặt kích thước văn bản bằng pixel cung cấp cho bạn toàn quyền kiểm soát kích thước văn bản:

```css
h1 {
  cỡ chữ: 40px;
}

h2 {
  cỡ chữ: 30px;
}

p {
  cỡ chữ: 14px;
```

**Đặt cỡ chữ với Em**
Để cho phép người dùng thay đổi kích thước văn bản (in the browser menu), nhiều nhà phát triển sử dụng em thay vì pixel.

Đơn vị kích thước em được đề xuất bởi W3C.

1em bằng với kích thước phông chữ hiện tại. Kích thước văn bản mặc định trong trình duyệt là 16px. Vì vậy, kích thước mặc định của 1em là 16px.

Kích thước có thể được tính từ pixel đến em bằng công thức này: pixel / 16 = em

```css
h1 {
  cỡ chữ: 2,5em; / * 40px / 16 = 2.5em * /
}

h2 {
  cỡ chữ: 1.875em; / * 30px / 16 = 1.875em * /
}

p {
  cỡ chữ: 0.875em; / * 14px / 16 = 0.875em * /
}
```

#### Font Google

```html
<! DOCTYPE html>
<html>
<head>
<link href='https://fonts.googleapis.com/css?family=Yeon Sung' rel='stylesheet'>
<style>
body {
    font-family: 'Yeon Sung';
     font-size: 22px;
}
</style>
</head>
<body>

<h1> Yeon Sung </h1>
<p> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. </p>
<p> 123456790 </p>
<p> ABCDEFGHIJKLMNOPQRSTUVWXYZ </p>
<p> abcdefghijklmnopqrstuvwxyz </p>

</body>
</html>
https://fonts.google.com/
```

#### navigation bar

```HTML
<!DOCTYPE html>
<html>
<head>
<style>
</style>
</head>
<body>

<h2>Navigation Menu</h2>
<p>In this example, we use CSS to style the list horizontally, to create a navigation menu:</p>

<ul>
  <li><a href="#home">Home</a></li>
  <li><a href="#news">News</a></li>
  <li><a href="#contact">Contact</a></li>
  <li><a href="#about">About</a></li>
</ul>

</body>
</html>

```

#### Pseudo-classes

HTML cung cấp các Pseudo-classes, các lớp được xác định theo mặc định và cho phép chúng ta áp dụng một kiểu trên một trong hai:

Một element trong một trạng thái cụ thể.
Một tập hợp các element cụ thể theo phân cấp của chúng, được giải thích chi tiết trong phần Bộ chọn nâng cao.

style một element khi người dùng di chuyển qua nó
style truy cập và liên kết không mong muốn khác nhau
style một element khi nó được tập trung

#### Liên kết
Một liên kết có thể ở trạng thái chưa truy cập hoặc trạng thái truy cập. Một liên kết chưa truy cập là một liên kết chưa được nhấp vào. Một liên kết truy cập là một liên kết đã được nhấp vào.

```html
<style>
a.special:link {
    color: green;
}

a.special:visited {
    color: red;
}
</style>

<p>
    <a href="#">This is a standard link, it will become purple when clicked
    </a>
</p>
<p>
    <a class="special" href="#">This is a special colored link and become red when clicked
    </a>
</p>
```

```css
/* unvisited link */
a:link {
  color: #FF0000;
}

/* visited link */
a:visited {
  color: #00FF00;
}

/* mouse over link */
a:hover {
  color: #FF00FF;
}

/* selected link */
a:active {
  color: #0000FF;
}
```