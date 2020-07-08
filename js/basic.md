### Javascript là gì?


Javascript là một ngôn ngữ lập trình kịch bản dựa vào đối tượng phát triển có sẵn hoặc tự định nghĩa ra, javascript được sử dụng rộng rãi trong các ứng dụng Website. Javascript được hỗ trợ hầu như trên tất cả các trình duyệt như Firefox, Chrome, ... thậm chí các trình duyệt trên thiết bị di động cũng có hỗ trợ

### Các thư viện Javascript đình đám hiện nay


* AngularJS: Một thư viện dùng để xây dựng ứng dụng Single Page
* NodeJS: Một thư viện được phát triển phía Server dùng để xây dựng ứng dụng realtime
* jQuery: Một thư viện rất mạnh về hiểu ứng
* ReactJS: Một thư viện viết ứng dụng mobie
Và còn nhiều thư viện khác


### Viết chương trình javascript đầu tiên 

Qua khái niệm javascript là gì? thì bạn thấy tất cả các trình duyệt đều hỗ trợ nên ta không cần phải download thư viện gì cả mà thông qua những đoạn mã `script` giúp trình duyệt nhận diện được đó là Javascript.

#### Cặp thẻ mở và thẻ đóng
<script language="javascript">
    alert("Hello World!");
</script>

#### Đặt thẻ script ở đâu?


**Cách 1: Internal - viết trong file html hiện tại**

Thông thường chúng ta sẽ viết những đoạn mã javascript trên phần head, tuy nhiên đó không phải là điều kiện bắt buộc, nghĩa là bạn có thể đặt ở đâu tùy thích miễn là những đoạn mã đó phải được bao lại bằng thẻ script

```html
<html>
    <head>
        <title></title>
        <script language="javascript">
            alert("Hello World!");
        </script>
    </head>
    <body>
         
    </body>
</html>
```


```html
<html>
    <head>
        <title></title>
    </head>
    <body>
        <input type="button" id="clickme" value="Click Me"/>
        <script language="javascript">
         
        // Lấy element có id=clickme lưu vào biến button
        var button = document.getElementById('clickme');
         
        // Khi click vào element chứa trong button thì thực hiện một function, 
        // bên trong function thông báo lên Hello World!
        button.addEventListener('click', function(){
            alert('Hello World!');
        });
        </script>
    </body>
</html>
```

### Khai báo biến trong javascript

Để khai báo một biến ta sử dụng từ khóa  var tenbien.


Khai báo biến trong javascript

```js
var username;
```

Tuy nhiên không phải muốn đặt tên gì cho biến cũng được mà phải tuân theo quy tắc sau đây:

* Tên biến phải là các chữ không dấu viết  hoa hoặc viết thường, các chữ số từ 0-9 và dấu gạch dưới (_).
* Tên biến bắt đầu phải là chữ hoặc dấu gạch dưới (_), nếu bắt đầu bằng số là sai 
* Tên biến có thể đặt dài hay ngắn tùy vào lập trình viên.


```js
// Đúng
var username;
 
// Đúng
var _username;
 
// Đúng
var __username;
 
// Đúng
var username90;
 
// SAI
var 90thehalfheart;

```

### Gán giá trị cho biến trong javascript

Để gán giá trị cho biến ta dùng dấu bằng \(=\) để gán vế phải vào vế trái, ví dụ gán giá trị thehalfheart vào biến username thì ta viết là username = 'thehalfheart'. 

Có hai cách gán thông dụng đó là vừa khai báo biến vừa gán giá trị và khai báo rồi mới gán giá trị:

```js
var username = 'thehalfheart';
```

### In giá trị của biến ra trình duyệt

```js
<html>
    <head>
        <title></title>
    </head>
    <body>
        <script language="javascript">
            var website = 'imic';
            document.write(website);
        </script>
    </body>
</html>
```

### hàm alert(), confirm() prompt(),

```js
<html>
  <head>
  </head>
  <body>
    <input type="button" onclick="alert('Xin chào các bạn')" value="Click Me"/>
  </body>
</html>
```

### 2. Hàm confirm() trong javascript

Hàm confirm() cũng sẽ xuất hiện một thông báo popup nhưng nó có thêm hai sự lựa chọn là Yes và No, nếu người dùng chọn Yes thì nó trả về TRUE và ngược lại nếu chọn NO thì nó sẽ trả về FALSE. Nó cũng có một tham số truyền vào và tham số này chính là nội dung thông báo.

```js
<html>
    <head>
        <title></title>
        <script language="javascript">
            confirm("Do you like IMIC");
        </script>
    </head>
    <body>
         
    </body>
</html>
```

### Hàm prompt() trong javascript

Hàm prompt() dùng  để lấy thông tin từ người dùng, gồm có hai tham số truyền vào là nội dung thông báo và giá trị ban đầu. Nếu người dùng không nhập vào thì giá trị nó sẽ trả về là NULL

```html
<html>
    <head>
        <title></title>
        <script language="javascript">
            var t = prompt("Nhập tên của bạn", '');
            alert(t);
        </script>
    </head>
    <body>
         
    </body>
</html>
```

### Các toán tử trong Javascript

(https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)[toan tu toan hoc]

### Lệnh if trong javascript
