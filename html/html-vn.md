HTML Introduction
=================

When I first entered the front-end field, the first term I heard was estimated to be HTML. Write a few lines of HTML and open the browser to see the effect immediately. What you see is what you get at the front end. This is also its charm. What? What are its rules and what role does it play?


### [](#an5ygw)What is HTML

Tên đầy đủ của HTML là HyperText Markup Language, đây không phải là ngôn ngữ lập trình mà là ngôn ngữ đánh dấu. HTML sử dụng các thẻ để mô tả các trang web, mở notepad của máy tính, viết một phần của HTML, lưu nó dưới dạng tệp .html, nhấp đúp để mở bằng trình duyệt và bạn có thể thấy ngay trang web được hiển thị. HTML là bộ xương của giao diện người dùng. Nếu bạn so sánh nó với một ngôi nhà, HTML là gạch ngói, bê tông cốt thép. Nó chứa các yếu tố như tiêu đề, đoạn văn, hình ảnh và video của các trang web. Nhấp chuột phải vào bất kỳ trang web nào chúng tôi duyệt trong Chrome. Trong cột Các yếu tố, chúng ta có thể thấy nhiều loại thẻ HTML khác nhau, là nền tảng của các trang web chúng ta duyệt.

### [](#3ugyoa)Composition of HTML elements

Các phần tử HTML bao gồm nội dung lồng nhau của các thẻ và các phần tử HTML có thể được lồng vào nhau. Chúng ta hãy xem phần tử HTML đơn giản tiếp theo:

```html
<p> I am a paragraph </p>
```

Ở đây và </ p> là các nhãn. Thẻ bao gồm dấu ngoặc nhọn (<>) chứa từ khóa (p). Thẻ bao gồm thẻ bắt đầu và thẻ kết thúc. Trong ví dụ trên,
là thẻ bắt đầu, </ p> là thẻ kết thúc, là một cặp, vì vậy các nhãn thường xuất hiện theo cặp.

Trong một số thành phần HTML, chúng không cần chứa nội dung, "Tôi là một đoạn" ở trên là phần nội dung của thẻ p. Một phần tử HTML không cần chứa nội dung được gọi là phần tử trống. Một phần tử trống chỉ có thẻ bắt đầu và không có thẻ kết thúc, chẳng hạn như thẻ <img>, được sử dụng để chèn ảnh và liên kết đến ảnh được đặt trên thuộc tính; một ví dụ khác là thẻ <br>, Nó được sử dụng để thêm ngắt dòng, do đó không cần thêm nội dung.

Các phần tử HTML có thể được lồng nhau. Ví dụ, tôi muốn in nghiêng một đoạn văn. Tôi có thể làm điều này:

```html
<p> Tôi là một đoạn văn, <i> Tôi là phần in nghiêng của đoạn </ i> </ p>
```

Thẻ HTML có thể có các thuộc tính, được đặt trong thẻ mở, với khoảng trắng giữa các thuộc tính và từ khóa và giữa các thuộc tính và thuộc tính. Dấu bằng thuộc tính "=" được theo sau bởi giá trị thuộc tính. Giá trị thuộc tính được đặt trong dấu ngoặc kép "". Hãy xem xét một ví dụ.

```html
<img alt="image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2664816/profile/profile-512.jpg?1544158617">
```

Thuộc tính src chỉ định địa chỉ url của hình ảnh và thuộc tính alt xác định văn bản thay thế. Khi trình duyệt không thể tải hình ảnh, trình duyệt sẽ hiển thị văn bản thay thế. Bạn có thể nhấp vào [ở đây để] (https://codepen.io/zouguanghua/pen/wQVOKY) để xem hiệu ứng.

### [](#a7e4gi)Block-level elements and inline elements

Các phần tử HTML có một số tính năng khiến chúng hoạt động khác nhau trong các trình duyệt. Chúng tôi chia các phần tử HTML thành các phần tử mức khối và phần tử trong dòng. Hiệu suất của chúng trong các trình duyệt như sau:

* Các yếu tố cấp khối được hiển thị dưới dạng các khối. Họ luôn chiếm một dòng duy nhất và ép các yếu tố sau vào một dòng mới;
    
* Các thành phần trong dòng được hiển thị cạnh nhau và sẽ không tự động ngắt. Các phần tử trong dòng thường được lồng và hiển thị bởi các phần tử mức khối.

```html
<p> Tôi là một đoạn </ p> <p> Tôi là một đoạn </ p> <p> Tôi là một đoạn văn, <i> Tôi là phần in nghiêng của đoạn </ i> </ p> < span> Tôi là một đoạn văn bản </ span> <span> Tôi là một đoạn văn bản </ span> <span> Tôi là một đoạn văn bản </ span>
`` `


Trong ví dụ trên, phần tử p luôn được hiển thị trên một dòng duy nhất, nó là phần tử mức khối và các phần tử i và span không phải là ngắt dòng, mà là các phần tử trong dòng. Bạn có thể nhấp vào [ở đây để] (https://codepen.io/zouguanghua/pen/WYVWJR) để xem hiệu ứng.

### [](#ku0npb)A simple HTML example

Mở các trang web khác nhau, chúng tôi sẽ thấy rằng chúng có cấu trúc tương tự nhau. Dưới đây là một ví dụ đơn giản, chúng ta hãy xem những gì tạo thành một trang HTML hoàn chỉnh.


```html
<!DOCTYPE html> <html> <head> <meta charset="utf-8">
 <title> HTML example </title> 
 <link rel="stylesheet" type="text/css" href="xxx.css"> 
 <script src="xxx.js"></script> 
 </head> 
 <body> 
    <h1> I am the headline </h1> 
    <p> I am a paragraph </p> 
    </body>
</html>
```

#### [](#y5m5rt)DOCTYPE

<! DOCTYPE> is a document type declaration, which is used to tell the browser what rules to use to parse HTML elements. In HTML 4.01, the document type declaration needs to refer to [DTD] (Document Type Definition) because HTML 4.01 is based on (Standard Generalized Markup Language). There are two concepts here, related to the history of HTML development. DTD stipulates the rules of markup language so that the browser can display the content correctly.

####
Mỗi tài liệu HTML phải bắt đầu bằng một khai báo cơ bản xác định loại của nó. Đây là một biện pháp rất hữu ích để thông báo trước cho các trình duyệt, loại tài liệu họ sắp xử lý, cho phép họ điều chỉnh các cơ chế xử lý của mình cho phù hợp.
Ví dụ:
** HTML 4.01 **
* NGHIÊM KHẮC
```html
<! DOCTYPE html CÔNG CỘNG "- // W3C // DTD HTML 4.01 // EN" "http://www.w3.org/TR/html4/strict.dtd">
```
* CHUYỂN ĐỘNG
```html
<! DOCTYPE html PUBLIC "- // W3C // DTD HTML 4.01 Chuyển tiếp // EN" "http://www.w3.org/TR/html4/loose.dtd">
```
* TÊN
```html
<! DOCTYPE html PUBLIC "- // W3C // DTD HTML 4.01 Khung hình // EN" "http://www.w3.org/TR/html4/frameset.dtd">
```

HTML5 không dựa trên SGML, vì vậy không cần phải giới thiệu DTD, chỉ có `<! DOCTYPE html>` chúng nằm trên khai báo loại tài liệu. Khai báo loại tài liệu phải được đặt trên dòng đầu tiên của tài liệu HTML.

#### #### UTF-8 character encode là gì,  tại sao phải biết nó

Để hiển thị một trang HTML đúng quy cách, trình duyệt web cần phải biết sử dụng bộ kí tự nào (mã hóa kí tự).

**Mã hóa kí tự là gì?** 

ASCII là chuẩn mã hóa kí tự (character encoding) đầu tiên (còn được gọi là bộ kí tự - character set). ASCII định nghĩa 128 kí tự kiểu chữ số: các số từ 0 đến 9, các chữ cái tiếng Anh từ A tới Z và một số kí tự đặc biệt như ! $ + - ( ) @ < >.

ANSI (Windows-1252) là bộ kí tự Windows đầu tiên hỗ trợ 256 kí tự khác nhau. ISO-8859-1 là bộ kí tự mặc định cho HTML 4, cũng hỗ trợ 256 kí tự.

Do ANSI và ISO-8859-1 rất giới hạn, nên HTML 4 còn hỗ trợ cả UTF-8. UTF-8 (Unicode) gồm hầu hết tất cả các kí tự và biểu tượng trên thế giới. HTML5 mặc định dùng bộ kí tự UTF-8.

> UTF-8 giống ASCII ở các giá trị từ 0 tới 127, không dùng các giá trị từ 128 tới 159, giống cả ANSI và 8859-1 ở các giá trị từ 160 tới 255, tiếp nối các giá trị từ 256 với hơn 10.000 kí tự khác.

#### HTML Entities
Các ký tự dành riêng trong HTML phải được thay thế bằng các character entities.

```text
&entity_name;

OR

&#entity_number;
```
Để hiển thị một dấu nhỏ hơn (<) chúng ta phải viết: &lt; or &#60;

>Ưu điểm của việc sử dụng tên: Tên rất dễ nhớ.
>Nhược điểm của việc sử dụng tên: Trình duyệt có thể không hỗ trợ tất cả các tên, nhưng hỗ trợ cho các số là tốt.


#### [](#html)html

Như bạn có thể thấy, phần tử html nằm ở cấp độ ngoài cùng của toàn bộ tài liệu HTML. Nó là thành phần gốc và bao bọc một trang hoàn chỉnh, và bên cạnh hoạt động như một thùng chứa, nó cung cấp một cơ hội tốt để xác định ngôn ngữ mặc định được sử dụng bởi tài liệu, thông qua thuộc tính toàn cầu `lang`.

> Khai báo ngôn ngữ được sử dụng trong tài liệu đặc biệt quan trọng đối với người dùng dựa vào bộ tổng hợp giọng nói, vì nó cung cấp thông tin chính để xác định cách phát âm chính xác.

#### [](#8lnbep)head

```html
<head>

  <title>Buoi 3</title>

  <meta name="keywords" content="IMIC, FE, Basic">

  <meta name="description" content="This document approaches briefly the works of Front-end Buoi 3...">

  <meta name="Author" content="Quan Tran">

  <style>

    table {

      width: 100%;

      border-color: black;

    }

  </style>

  <script>

    result = 0;

    function increment(amount) {

      result += amount;

    }

  </script>

  <link rel="index" href="../index.html">

</head>
```

Phần tử head là phần tử head và nội dung mà nó chứa sẽ không được hiển thị trên trang. Phần tử head có thể chứa thông tin tiêu đề, thông tin meta, biểu định kiểu và tập lệnh. Trong ví dụ trên, chúng tôi đã thêm một số phần tử khác vào phần tử head, hãy xem chúng làm gì.

* Thẻ <meta> cung cấp dữ liệu thông tin trang, trong ví dụ `<meta charset =" utf-8 ">` được xác định bằng cách sử dụng mã hóa ký tự utf-8 của tài liệu. Đồng thời, bạn cũng có thể đặt mô tả trang, từ khóa và thông tin khác thông qua thẻ <meta>, điều này có lợi cho SEO (Tối ưu hóa công cụ tìm kiếm, tối ưu hóa công cụ tìm kiếm), đó là sử dụng các quy tắc của công cụ tìm kiếm để cải thiện thứ hạng tự nhiên của trang web trong công cụ tìm kiếm có liên quan. Bình dân học vụ, khi người dùng tìm kiếm trang, trang web của bạn sẽ được nâng cao hơn.
    
    
```html
<meta  name = "description"  content = "descriptive information of the site" \> 
<meta  name = "keywords"  content = "Web site keywords" \>
```


* Thẻ `<title>` xác định tiêu đề của trang. Chúng tôi mở một trang trong trình duyệt và tiêu đề trên thanh tab của trình duyệt được xác định bởi nó.
    
* Thẻ `<link>` thường được sử dụng để liên kết một số tài nguyên bên ngoài liên quan đến trang, chẳng hạn như các tệp css. Chúng tôi cũng có thể đặt biểu tượng trên thanh tab của trình duyệt thông qua thẻ `<link>`.
    
```html    
<link rel\="icon" href\="xxx.ico"\>
```

*   In addition to using the `<link>` tag to import external css files, we can also directly define style information through the `<style>` tag.

```html
<style type\="text/css"\>  
    h1  { color: #FFB5BF; }
    p { font-size: 16px; }
 </style>
```
* Thẻ `<script>` giới thiệu tệp tập lệnh cho trang. Chúng ta có thể trực tiếp sử dụng thuộc tính src của nó để giới thiệu địa chỉ `of` tệp script hoặc chúng ta có thể chèn trực tiếp JavaScript` code` vào trang.

```html
<script type="text/javascript">  document.write('Hello World!') </script>
```

> In HTML5, the type values ​​of the `style` tag and the `script` tag are no longer necessary, and the default values ​​are "text/css" and "text/javascript", respectively.

#### body

`body` `element` xác định` body` của tài liệu và chứa tất cả `content` được hiển thị trên trang, chẳng hạn như văn bản, hình ảnh, bảng, danh sách, siêu liên kết, âm thanh, video, v.v.

#### HTML Headings
HTML Headings là tiêu đề hoặc phụ đề mà bạn muốn hiển thị trên trang web.

HTML Headings được xác định bằng các thẻ <h1> đến <h6>.

<h1> xác định tiêu đề quan trọng nhất. <h6> xác định tiêu đề ít quan trọng nhất.

Các công cụ tìm kiếm sử dụng các tiêu đề để lập chỉ mục cấu trúc và nội dung của các trang web của bạn.

Người dùng thường lướt qua một trang bởi các tiêu đề của nó. Điều quan trọng là sử dụng các tiêu đề để hiển thị cấu trúc tài liệu.

Các tiêu đề <h1> nên được sử dụng cho các tiêu đề chính, tiếp theo là các tiêu đề <h2>, sau đó các tiêu đề <h3> ít quan trọng hơn, v.v.

>Chỉ sử dụng các tiêu đề HTML cho các tiêu đề. Đừng sử dụng các tiêu đề để làm cho văn bản `LỚN` hoặc `in đậm`.

#### HTML Paragraphs

HTML Paragraphs luôn bắt đầu trên một dòng mới và thường là một khối văn bản.
```html
<p></p>
```

#### HTML Horizontal Rules
Thẻ <hr> xác định ngắt theo chủ đề trong trang HTML và thường được hiển thị dưới dạng quy tắc ngang.

Phần tử <hr> được sử dụng để phân tách nội dung (hoặc xác định thay đổi) trong trang HTML:


```html
<h1>This is heading 1</h1>
<p>This is some text.</p>
<hr>
<h2>This is heading 2</h2>
<p>This is some other text.</p>
<hr>
```

#### HTML Line Breaks

xác định ngắt dòng.

Sử dụng <br> nếu bạn muốn ngắt dòng (một dòng mới) mà không bắt đầu một đoạn mới:

####

#### Vấn đề bài thơ
 **<pre>**

Văn bản bên trong phần tử <pre> được hiển thị bằng phông chữ có chiều rộng cố định và nó giữ nguyên cả dấu cách và dấu ngắt dòng:
