### HTML Tables


Các bảng HTML cho phép các nhà phát triển web sắp xếp dữ liệu thành các hàng và cột.


#### Define an HTML Table
Thẻ <table> xác định bảng HTML.

Mỗi dòng trong bảng được xác định bằng thẻ <tr>. Mỗi tiêu đề bảng được xác định bằng thẻ <th>. Mỗi cột / ô của bảng được xác định bằng thẻ <td>.

Theo mặc định, văn bản trong các phần tử <th> được in đậm và căn giữa.

Theo mặc định, văn bản trong các phần tử <td> là thông thường và được căn trái.

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

> Lưu ý: Các phần tử <td> là nơi chứa dữ liệu của bảng.
> Chúng có thể chứa tất cả các loại phần tử HTML; văn bản, hình ảnh, danh sách, bảng khác, vv

#### HTML Table - Add a Border
Để thêm đường viền vào bảng, hãy sử dụng thuộc tính viền CSS:

```css
table, th, td {
  border: 1px solid black;
}
```

> Nhớ xác định viền cho cả bảng và các ô của bảng.

#### HTML Table - Collapsed Borders

Để cho các đường viền thu gọn thành một đường viền, hãy thêm thuộc tính thu gọn đường viền CSS:

```css
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
```

#### HTML Table - Add a Caption

Để thêm chú thích vào bảng, hãy sử dụng thẻ <caption>:

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
> Lưu ý: Thẻ <caption> phải được chèn ngay sau thẻ <table>.

#### A Special Style for One Table

Để xác định kiểu đặc biệt cho một bảng cụ thể, hãy thêm thuộc tính id vào bảng:

`` `css
#tId tr: nth-child (chẵn) {
  màu nền: #eee;
}
#tId tr: nth-child (lẻ) {
  màu nền: #fff;
}
#tId {
  màu trắng;
  màu nền: đen;
}
`` `