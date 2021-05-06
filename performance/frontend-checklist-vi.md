<h1 align="center">
<br>
  <a href="https://github.com/thedaviddias/Front-End-Performance-Checklist"><img src="https://raw.githubusercontent.com/thedaviddias/Front-End-Performance-Checklist/master/images/logo-front-end-performance-checklist.jpg" alt="Front-End Performance Checklist" width="170"></a>
  <br>
    <br>
  Front-End Performance Checklist
  <br>
</h1>

<h4 align="center">🎮 Front-End Performance Checklist giúp trang web bạn chạy nhanh hơn.</h4>
<p align="center">Một quy tắc đơn giản: "Luôn nghĩ về hiệu suất khi thiết kế và viết code"</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://discord.gg/btHQRkm">
    <img src="https://img.shields.io/badge/chat-on_discord-4837E2.svg?style=flat-square" alt="Discord">
  </a>
    <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="Licence MIT">
  </a>
</p>

<p align="center">
  <a href="#how-to-use">Cách sử dụng</a> • <a href="#contributing">Đóng góp</a> • <a href="http://feedback.frontendchecklist.io/">Lộ trình</a> • <a href="https://www.producthunt.com/posts/front-end-performance-checklist">Tìm sản phẩm</a>
</p>

<p align="center">
  <a href="https://github.com/JohnsenZhou/Front-End-Performance-Checklist">🇨🇳</a>
  <a href="https://github.com/WilliamDASILVA/Front-End-Performance-Checklist">🇫🇷</a>
  <a href="https://github.com/ParkSB/Front-End-Performance-Checklist">🇰🇷</a>  
  <a href="https://github.com/fernandofawkes/Front-End-Performance-Checklist">🇵🇹</a>
  <a href="https://github.com/lex111/Front-End-Performance-Checklist">🇷🇺</a>
</p>

<p align="center">
    <span>Checklists khác:</span>
    <br>
  🗂 <a href="https://github.com/thedaviddias/Front-End-Checklist#---------front-end-checklist-">Front-End Checklist</a> • 💎 <a href="https://github.com/thedaviddias/Front-End-Design-Checklist#front-end-design-checklist">Front-End Design Checklist</a>
</p>

## Mục lục

1. **[HTML](#html)**
2. **[CSS](#css)**
3. **[Fonts](#fonts)**
4. **[Images](#images)**
5. **[JavaScript](#javascript)**
6. **[Server](#server) (in progress)**
7. **[JS Frameworks](#performances-and-js-frameworks) (in progress)**

## Giới thiệu

Hiệu suất là một chủ đề lớn, nhưng nó không phải lúc nào cũng là chủ đề liên quan "back-end" hoặc "admin": mà nó cũng là trách nhiệm của Front-End. Danh sách kiểm tra hiệu suất Front-End là một danh sách đầy đủ các yếu tố bạn nên kiểm tra hoặc ít nhất là bạn biết về nó, như một Front-End developer và áp dụng cho dự án của bạn (cá nhân và chuyên nghiệp).

### Cách sử dụng?

Đối với mỗi quy tắc, bạn sẽ có một đoạn giải thích *tại sao* và *cách* bạn có thể sửa nó quy tắc này là quan trọng . Để biết thêm thông tin chi tiết, bạn nên tìm các liên kết trỏ tới 🛠 công cụ, 📖 bài viết hoặc 📹 phương tiện có thể hoàn thành danh sách kiểm tra.

Tất cả các mục trong **Danh sách kiểm tra hiệu suất Front-End** là yếu tố cần thiết để đạt được điểm số hiệu suất cao nhất nhưng bạn sẽ tìm thấy chỉ dẫn để giúp bạn biết được mức độ ưu tiên các quy tắc khác nhau. Có 3 mức độ ưu tiên:

* ![Low][low] có nghĩa là mục này có mức độ ưu tiên **thấp**.
* ![Medium][medium] có nghĩa là mục này có độ ưu tiên **trung bình**. Bạn nên giải quyết vấn đề của mục đó.
* ![High][high] có nghĩa là mục này có độ ưu tiên **cao**. Bạn không thể tránh tuân theo quy tắc đó và giải quyết theo cách được khuyến nghị.
### Công cụ đánh giá hiệu suất

Danh sách các công cụ bạn có thể sử dụng để kiểm tra hoặc theo dõi trang web hoặc ứng dụng của bạn:

 * 🛠 [WebPagetest - Kiểm tra việc tối ưu hóa và hiệu suất trang web](https://www.webpagetest.org/)
 * 🛠 ☆ [Dareboost: Kiểm tra tốc độ trang web và phân tích trang web](https://www.dareboost.com/) (use the coupon WPCDD20 for -20%)
 * 🛠 [Treo: Theo dõi tốc độ trang web](https://treo.sh/?ref=perfchecklist)
 * 🛠 [GTmetrix | Tốc độ trang web và tối ưu hóa hiệu suất](https://gtmetrix.com/)
 * 🛠 [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/)
 * 🛠 [Pingdom Kiểm tra tốc độ trang web](https://tools.pingdom.com)
 * 📖 [Làm cho trang web nhanh | Google Developers](https://developers.google.com/speed/)
 * 🛠 [Sitespeed.io - Chào mừng bạn đến với thế giới web tuyệt vời](https://www.sitespeed.io/)
 * 🛠 [Calibre](https://calibreapp.com/)
 * 🛠 [Website Speed Test | Kiểm tra Hiệu suất Web &raquo; Dotcom-Tools](https://www.dotcom-tools.com/website-speed-test.aspx)
 * 🛠 [Giám sát thời gian hoạt động của máy chủ và trang web - Pingdom](https://www.pingdom.com/product/uptime-monitoring/) ([Free Signup Link](https://www.pingdom.com/free))
 * 🛠 [Uptime Robot](https://uptimerobot.com)
 * 🛠 [SpeedCurve: Giám sát hiệu suất front-end](https://speedcurve.com)
 * 🛠 [PWMetrics - Công cụ CLI và lib để thu thập số liệu về hiệu suất](https://github.com/paulirish/pwmetrics)
 * 🛠 [Varvy - Tối ưu hóa tốc độ trang]( https://varvy.com/pagespeed/)
 * 🛠 [Lighthouse - Google]( https://developers.google.com/web/tools/lighthouse/#devtools)
 * 🛠 [Checkbot browser extension - Các phương pháp hay nhất để kiểm tra hiệu suất web](https://www.checkbot.io/)
 * 🛠 [Yellow Lab Tools | Kiểm tra online để giúp tăng tốc các trang web nặng](https://yellowlab.tools/)

### Tài liệu tham khảo

 * 📹 [The Cost Of JavaScript - YouTube](https://www.youtube.com/watch?v=_bzqF05xsC4) ([text version](https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4))
 * [AddyOsmani.com - Start Performance Budgeting](https://addyosmani.com/blog/performance-budgets/)
 * 📖 [Get Started With Analyzing Runtime Performance  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/evaluate-performance/)
 * 📖 [State of the Web | 2018_01_01](https://httparchive.org/reports/state-of-the-web?start=2018_01_01)
 * 📖 [Page Weight Doesn't Matter](https://www.speedshop.co/2015/11/05/page-weight-doesnt-matter.html)
 * 📖 [Front-End Performance Checklist 2018 [PDF, Apple Pages]](https://www.smashingmagazine.com/2018/01/front-end-performance-checklist-2018-pdf-pages/)
 * 📖 [Designing for Performance Weighing Aesthetics and Speed - By Lara Callender Hogan [eBook, Print]](http://designingforperformance.com/index.html)
 * 📖 [Varvy - Web performance glossary](https://varvy.com/performance/)
 * 📖 [fabkrum/web-performance-resources: Up to date collection of valuable web performance resources](https://github.com/fabkrum/web-performance-resources)
 * 📖 [Checkbot - Web Speed Best Practices](https://www.checkbot.io/guide/speed/)
 * 🛠 [Progressive Tooling - A list of community-built, third-party tools that can be used to improve page performance](https://progressivetooling.com/)

---

## HTML

![html]

- [ ] **Minified HTML:** ![medium] Mã HTML được rút gọn, các chú thích, các khoảng trống và các dòng mới được xóa khỏi các file trên bản product.

    *Tại sao:*
    > Xóa tất cả các khoảng trống, nhận xét và ngắt dòng không cần thiết sẽ giảm kích thước HTML của bạn và tăng tốc thời gian tải trang của trang web của bạn và rõ ràng làm giảm thời gian tải xuống cho người dùng của bạn.

    *Cách làm:*
    > Hầu hết các framework đều có các plugin để giúp tối giản hóa các trang web. Bạn có thể sử dụng một loạt các mô-đun NPM có thể thực hiện công việc cho bạn một cách tự động.

    * 🛠 [HTML minifier | Minify Code](http://minifycode.com/html-minifier/)
    * 🛠 [Online HTML Compressor](http://refresh-sf.com)
    * 📖 [Experimenting with HTML minifier — Perfection Kills](http://perfectionkills.com/experimenting-with-html-minifier/#use_short_doctype)

- [ ] **Xóa nhận xét không cần thiết:** ![low] Đảm bảo rằng các nhận xét được xóa khỏi các trang của bạn.

    *Tại sao:*
    > Comments are not really useful for the user and should be removed from production files. One case where you want to keep comments could be if you need to keep the origin for a library.

    *Cách làm:*
    > ⁃ Phần lớn các nhận xét có thể được xóa bằng cách sử dụng plugin rút gọn HTML.

 * 🛠 [remove-html-comments - npm](https://www.npmjs.com/package/remove-html-comments)

- [ ] **Loại bỏ các thuộc tính không cần thiết:** ![low] Các thuộc tính type như `type="text/javascript"` hoặc `type="text/css"` không cần thiết nữa và sẽ bị xóa.
    ```html
    <!-- Before HTML5 -->
    <script type="text/javascript">
        // JavaScript code
    </script>

    <!-- Today -->
    <script>
        // JavaScript code
    </script>
    ```

    *Tại sao:*
    > Các thuộc tính type không cần thiết vì HTML5 ngụ ý text/css và text/javascript là các giá trị mặc định. Code không sử dụng sẽ bị xóa khi không được trang web hoặc ứng dụng của bạn vì sử dụng chúng thì sẽ các trang của bạn nặng thêm.
    *Cách làm:*
    > ⁃ Đảm bảo rằng tất cả các thẻ  `<link>` và `<script>` không có bất kỳ thuộc tính type nào

    * 📖 [The Script Tag | CSS-Tricks](https://css-tricks.com/the-script-tag/)
   
- [ ] **Luôn đặt thẻ CSS trước thẻ JavaScript:** ![high] Đảm bảo rằng CSS của bạn luôn được tải trước khi có mã JavaScript.

    ```html
    <!-- Không nên làm -->
    <script src="jquery.js"></script>
    <script src="foo.js"></script>
    <link rel="stylesheet" href="foo.css"/>

    <!-- Nên làm -->
    <link rel="stylesheet" href="foo.css"/>
    <script src="jquery.js"></script>
    <script src="foo.js"></script>
    ```

    *Tại sao:*
    > Thẻ CSS của bạn ở trước khi bất kỳ thẻ JavaScript nào giúp cho việc tải xuống song song tốt hơn, giúp tăng tốc thời gian hiển thị của trình duyệt.

    *Cách làm:*
    > ⁃ Đảm bảo rằng các thẻ `<link>`  và `<style>` ở trong `<head>` của bạn luôn ở trước thẻ `<script>`.

    * 📖 [Ordering your styles and scripts for pagespeed](https://varvy.com/pagespeed/style-script-order.html)

- [ ] **Giảm số lượng các iframe:** ![high] Chỉ sử dụng iframe nếu bạn không có bất kỳ cách nào khác để thay thế. Cố gắng tránh iframe nhiều nhất có thể
**[⬆ back to top](#table-of-contents)**

## CSS

![css]

- [ ] **Minification:** ![high] Tất cả các tệp CSS được rút gọn, nhận xét, khoảng trắng và các dòng mới được xóa khỏi tệp product

    *Tại sao:*
    > Khi các tệp CSS được rút gọn, nội dung được tải nhanh hơn và ít dữ liệu hơn được gửi đến máy khách. Điều quan trọng là luôn luôn giảm thiểu các tệp CSS trong quá trình làm sản phẩm. Nó có lợi cho người dùng vì nó là dành cho bất kỳ doanh nghiệp nào muốn giảm chi phí băng thông và sử dụng tài nguyên thấp hơn.

    *Cách làm:*
    > ⁃ Sử dụng các công cụ để tự động rút gọn các tệp của bạn trước hoặc trong quá trình build hoặc deploy.

    * 🛠 [cssnano: A modular minifier based on the PostCSS ecosystem. - cssnano](https://cssnano.co/)
    * 🛠 [@neutrinojs/style-minify - npm](https://www.npmjs.com/package/@neutrinojs/style-minify)
    * 🛠 [Online CSS Compressor](http://refresh-sf.com)


- [ ] **Concatenation:** ![medium] Các tệp CSS được nối vào một tệp *(Not always valid for HTTP/2)*.

    ```html

    <!-- Không nên -->
    <link rel="stylesheet" href="foo.css"/>
    <link rel="stylesheet" href="bar.css"/>

    <!-- Nên -->
    <link rel="stylesheet" href="foobar.css"/>
    ```

    *Tại sao:*
    > Nếu bạn vẫn đang sử dụng HTTP/1, bạn có thể vẫn cần ghép nối các tệp của mình, nó sẽ không đúng nếu máy chủ của bạn sử dụng HTTP/2 (các thử nghiệm nên được thực hiện)

    *Cách làm:*
    > ⁃ Sử dụng công cụ trực tuyến hoặc bất kỳ plugin nào trước hoặc trong quá trình build hoặc deploy của bạn để ghép nối các tệp của bạn. <br>
    ⁃ Đảm bảo và chắc chắn rằng việc ghép nối không phá vỡ dự án của bạn.

    * 📖 [HTTP: Optimizing Application Delivery - High Performance Browser Networking (O'Reilly)](https://hpbn.co/optimizing-application-delivery/#optimizing-for-http2)
    * 📖 [Performance Best Practices in the HTTP/2 Era](https://deliciousbrains.com/performance-best-practices-http2/)

- [ ] **Non-blocking:** ![high] Tệp CSS cần phải không bị chặn để ngăn DOM mất thời gian tải.

    ```html
    <link rel="preload" href="global.min.css" as="style" onload="this.rel='stylesheet'">
    <noscript><link rel="stylesheet" href="global.min.css"></noscript>
    ```

    *Tại sao:*
    > Tệp CSS có thể chặn tải trang và trì hoãn hiển thị trang của bạn. Sử dụng `preload` thực sự có thể giúp tải các tệp CSS trước khi trình duyệt bắt đầu hiển thị nội dung của trang.
    *Cách làm:*
    > ⁃ Bạn cần thêm thuộc tính `rel` với giá trị` preload` và thêm `as =" style "` vào phần tử `<link>`.

    * 🛠 [loadCSS by filament group](https://github.com/filamentgroup/loadCSS)
    * 📖 [Example of preload CSS using loadCSS](https://gist.github.com/thedaviddias/c24763b82b9991e53928e66a0bafc9bf)
    * 📖 [Preloading content with rel="preload"](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content)
    * 📖 [Preload: What Is It Good For? — Smashing Magazine](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)

- [ ] **Độ dài của các class CSS:** ![low] Độ dài của các class của bạn có thể có tác động (nhẹ) trên các tệp HTML và CSS của bạn.
    *Tại sao:*
    > Ngay cả các tác động hiệu suất có thể bị tranh chấp, đưa ra quyết định về việc đặt tên liên quan đến dự án của bạn có thể có tác động đáng kể đến khả năng bảo trì của stylesheets của bạn. Nếu bạn đang sử dụng BEM, trong một số trường hợp, bạn có thể kết thúc với các class có nhiều ký tự hơn mức cần thiết. Việc chọn một tên và không gian tên phù hợp của bạn luôn là điều quan trọng.

    *Cách làm:*
    > Đặt giới hạn về số lượng ký tự có thể thú vị đối với một số người, nhưng đảm bảo rằng bạn đã phá vỡ trang web của bạn trong các component có thể giúp giảm số lượng lớp (và khai báo) và độ dài của các class.

    * 🛠 [long vs short class · jsPerf](https://jsperf.com/long-vs-short-class)

- [ ] **CSS không sử dụng:** ![medium] Xóa các selector CSS không sử dụng

    *Tại sao:*
    > Việc xóa selector CSS không được sử dụng có thể giảm kích thước tệp của bạn và sau đó tăng tốc việc tải nội dung của bạn.
    
    *Cách làm:*
    > ⁃ ⚠️ Hãy luôn luôn kiểm tra nếu framework CSS bạn muốn sử dụng không chứa code chuẩn hóa/reset. Thỉnh thoảng bạn không cần mọi thứ đặt ở trong file reset/chuẩn hóa.

    * 🛠 [UnCSS Online](https://uncss-online.com/)
    * 🛠 [PurifyCSS](https://github.com/purifycss/purifycss)
    * 🛠 [PurgeCSS](https://github.com/FullHuman/purgecss)
    * 🛠 [Chrome DevTools Coverage](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage)

* [ ] **CSS quan trọng:** ![high] CSS quan trọng (hoặc "trong màn hình đầu tiên") bao gồm tất cả CSS được sử dụng để hiển thị phần hiển thị của trang. Nó được nhúng trước lời gọi CSS chính của bạn và giữa `<style> </ style>` trong một dòng đơn (được rút gọn nếu có thể).

    *Tại sao:*
    > Inlining CSS quan trọng giúp tăng tốc độ hiển thị của các trang web làm giảm số lượng yêu cầu đến máy chủ

    *Cách làm:*
    > Tạo CSS quan trọng với các công cụ trực tuyến hoặc sử dụng một plugin giống như plugin mà Addy Osmani đã phát triển.

    * 📖 [Tìm hiểu về Critical CSS](https://www.smashingmagazine.com/2015/08/understanding-critical-css/)
    * 🛠 [Critical by Addy Osmani on GitHub](https://github.com/addyosmani/critical) automates this.
    * 📖 [Inlining critical CSS for better web performance | Go Make Things](https://gomakethings.com/inlining-critical-css-for-better-web-performance/)
     * 🛠 [Critical Path CSS Generator - Prioritize above the fold content :: SiteLocity](https://www.sitelocity.com/critical-path-css-generator)
     * 📖 [Reduce the size of the above-the-fold content
](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent)

- [ ] **CSS được nhúng hoặc nội tuyến:** ![high] được nhúng hoặc nội tuyếnbên trong `<body>` *(Không hợp lệ cho HTTP/2)*

    *Tại sao:*
    > Một trong những lý do đầu tiên bởi vì đó là một cách hay để **phân tách nội dung từ thiết kế**. Nó cũng giúp bạn có code dễ bảo trì hơn và giữ cho trang web của bạn có thể truy cập được. Nhưng liên quan đến hiệu suất, nó đơn giản chỉ vì nó làm giảm kích thước tập tin của các trang HTML của bạn và thời gian tải.
    *Cách làm:*
    > Luôn sử dụng stylesheets bên ngoài hoặc nhúng CSS vào trong thẻ `<head>`của bạn (và thực hiện theo các quy tắc hiệu suất CSS khác)

    * 📖 [Observe CSS Best Practices: Tránh CSS nội tuyến](https://www.lifewire.com/avoid-inline-styles-for-css-3466846)

- [ ] **Phân tích các stylesheet phức tạp:** ![high] Phân tích stylesheets của bạn có thể giúp bạn gắn cờ các vấn đề, dư thừa và selector CSS trùng lặp.

    *Tại sao:*
    > Đôi khi bạn có thể có lỗi thừa hoặc lỗi xác thực trong CSS, phân tích các tệp CSS của bạn và xóa những phức tạp này có thể giúp bạn tăng tốc các tệp CSS của mình (vì trình duyệt của bạn sẽ đọc nhanh hơn)
    
    *Cách làm:*
    > CSS của bạn nên được tổ chức, bằng cách sử dụng một bộ tiền xử lý CSS có thể giúp bạn làm điều đó. Một số công cụ trực tuyến được liệt kê bên dưới cũng có thể giúp bạn phân tích và sửa code của bạn.
    
    * 🛠 [TestMyCSS | Optimize and Check CSS Performance](http://www.testmycss.com/)
    * 🛠 [CSS Stats](https://cssstats.com/)
    * 🛠 [macbre/analyze-css: CSS selectors complexity and performance analyzer](https://github.com/macbre/analyze-css)
    * 🛠 [Project Wallace](https://www.projectwallace.com/) is like CSS Stats but stores stats over time so you can track your changes

**[⬆ back to top](#table-of-contents)**

## Fonts

![fonts]

* 📖 [A Book Apart, Webfont Handbook](https://abookapart.com/products/webfont-handbook)

- [ ] **Định dạng Webfont:** ![medium] Bạn đang sử dụng WOFF2 trên dự án hoặc ứng dụng web của bạn.

    *Tại sao:*
    > Theo Google, định dạng nén WOFF 2.0 Web Font cung cấp mức tăng trung bình 30% so với WOFF 1.0. Thật tuyệt khi sử dụng WOFF 2.0, WOFF 1.0 làm dự phòng và TTF.
    
    *Cách làm:*
    > Kiểm tra trước khi mua phông chữ mới của bạn mà nhà cung cấp cung cấp cho bạn định dạng WOFF2. Nếu bạn đang sử dụng phông chữ miễn phí, bạn luôn có thể sử dụng Font Squirrel để tạo tất cả các định dạng bạn cần.

    * 📖 [WOFF 2.0 – Learn more about the next generation Web Font Format and convert TTF to WOFF2](https://gist.github.com/sergejmueller/cf6b4f2133bcb3e2f64a)
    * 🛠 [Create Your Own @font-face Kits » Font Squirrel](https://www.fontsquirrel.com/tools/webfont-generator)
    * 🛠 [IcoMoon App - Icon Font, SVG, PDF & PNG Generator](https://icomoon.io/app/)
    * 📖 [Using @font-face | CSS-Tricks](https://css-tricks.com/snippets/css/using-font-face/?ref=frontendchecklist)
    * 📖 [Can I use... WOFF2](https://caniuse.com/#feat=woff2)

- [ ] **Sử dụng `preconnect` để tải font của bạn nhanh hơn:** ![medium]

    ```html
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    ```

    *Tại sao:*
    > Khi bạn tới một trang web, thiết bị của bạn cần tìm hiểu nơi mà trang web của bạn đang hoạt động và nó cần kết nối tới server nào. Trình duyệt của bạn phải liên lạc với DNS server và chờ nó tìm xong trước khi tìm và tải tài nguyên (font, file CSS,...) Việc tìm nạp và kết nối trước cho phép trình duyệt tìm kiếm các thông tin về DNS và bắt đầu thiết lập kết nối TCP tới server lưu trữ file font. Điều này giúp hiệu suất tăng lên bởi vì khi trình duyệt phân tích file css với thông tin về font và phát hiện nó cần yêu cầu file font từ server, nó sẽ có sẵn thông tin về DNS và có kết nối mở đến server sẵn trong pool.

    *Cách làm:*
    > ⁃ Trước khi tìm nạp trước các webfont của bạn, hãy sử dụng webpagetest để đánh giá trang web của bạn <br>
    ⁃ Tìm kiếm, tra cứu DNS và lưu máy chủ đang được yêu cầu  <br>
    ⁃ Tìm nạp trước các webfont của bạn trong `<head>` và thêm các tên máy chủ mà bạn đã tìm nạp trước đó vào cuối cùng.

    * 📖 [Faster Google Fonts with Preconnect - CDN Planet](https://www.cdnplanet.com/blog/faster-google-webfonts-preconnect/)
    * 📖 [Make Your Site Faster with Preconnect Hints | Viget](https://www.viget.com/articles/make-your-site-faster-with-preconnect-hints/)
    * 📖 [Ultimate Guide to Browser Hints: Preload, Prefetch, and Preconnect - MachMetrics Speed Blog](https://www.machmetrics.com/speed-blog/guide-to-browser-hints-preload-preconnect-prefetch/)
    * 📖 [A Comprehensive Guide to Font Loading Strategies—zachleat.com](https://www.zachleat.com/web/comprehensive-webfonts/#font-face)
    * 🛠 [typekit/webfontloader: Web Font Loader gives you added control when using linked fonts via @font-face.](https://github.com/typekit/webfontloader)

- [ ] **Kích thước Webfont:** ![medium] Kích thước webfont không vượt quá 300kb (bao gồm tất cả các biến thể)

 * 📖 [Font Bytes - Page Weight](https://httparchive.org/reports/page-weight#bytesFont)

- [ ] **Ngăn chặn Flash hoặc text ẩn:** ![medium] Tránh các loại text màu trong suốt đến khi Webfont được tải.

 * 📖 [`font-display` for the Masses](https://css-tricks.com/font-display-masses/)
 * 📖 [CSS font-display: The Future of Font Rendering on the Web](https://www.sitepoint.com/css-font-display-future-font-rendering-web/)

**[⬆ back to top](#table-of-contents)**

## Hình Ảnh

![images]

 * 📖 [Image Bytes in 2018](https://httparchive.org/reports/page-weight#bytesImg)

* [ ] **Tối ưu hóa hình ảnh:** ![high] Hình ảnh của bạn được tối ưu hóa, được nén mà không ảnh hưởng trực tiếp đến người dùng cuối.

    *Tại sao:*
    > Hình ảnh được tối ưu hóa tải nhanh hơn trong trình duyệt của bạn và tiêu thụ ít dữ liệu hơn.

    *Cách làm:*
    > ⁃ Hãy thử sử dụng hiệu ứng CSS3 khi có thể (thay vì một hình ảnh nhỏ) <br>
    ⁃ Khi có thể, hãy sử dụng phông chữ thay vì văn bản được mã hóa trong hình ảnh của bạn <br>
    ⁃ Sử dụng SVG <br>
    ⁃ Sử dụng công cụ và chỉ định mức nén dưới 85.

    * 📖 [Image Optimization | Web Fundamentals | Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization)
    * 📖 [Essential Image Optimization - An eBook by Addy Osmani](https://images.guide/)
    * 🛠 [TinyJPG – Compress JPEG images intelligently](https://tinyjpg.com/)
    * 🛠 [Kraken.io - Online Image Optimizer](https://kraken.io/web-interface)
    * 🛠 [Compressor.io - optimize and compress JPEG photos and PNG images](https://compressor.io/compress)
    * 🛠 [Cloudinary - Image Analysis Tool](https://webspeedtest.cloudinary.com)
    * 🛠 [SVGOMG - Optimize SVG vector graphics files](https://jakearchibald.github.io/svgomg/)


* [ ] **Định dạng hình ảnh:** ![high] Chọn định dạng hình ảnh của bạn một cách thích hợp.

    *Tại sao:*
    > Để đảm bảo rằng hình ảnh của bạn không làm chậm trang web của bạn, hãy chọn định dạng tương ứng với hình ảnh của bạn. Nếu đó là ảnh, JPEG hầu hết sẽ phù hợp hơn PNG hoặc GIF. Nhưng đừng quên tìm kiếm các định dạng thế hệ tiếp theo có thể giảm kích thước tệp của bạn. ỗi định dạng hình ảnh đều có ưu và khuyết điểm, điều quan trọng là phải biết những điều này để đưa ra lựa chọn tốt nhất có thể.

    *Cách làm:*
    > ⁃ Sử dụng [Lighthouse](https://developers.google.com/web/tools/lighthouse/) để xác định hình ảnh nào cuối cùng có thể sử dụng **định dạng ở thế hệ tiếp theo** (like JPEG 2000m JPEG XR or WebP) <br>
    ⁃ So sánh các định dạng khác nhau, đôi khi việc sử dụng PNG8 tốt hơn PNG16, đôi khi không phải vậy.

    * 📖 [Serve Images in Next-Gen Formats  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/lighthouse/audits/webp)
    * 📖 [What Is the Right Image Format for Your Website? — SitePoint](https://www.sitepoint.com/what-is-the-right-image-format-for-your-website/)
    * 📖 [PNG8 - The Clear Winner — SitePoint](https://www.sitepoint.com/png8-the-clear-winner/)
    * 📖 [8-bit vs 16-bit - What Color Depth You Should Use And Why It Matters - DIY Photography](https://www.diyphotography.net/8-bit-vs-16-bit-color-depth-use-matters/)

- [ ] **Sử dụng các hình ảnh vector thay cho raster/bitmap:** ![medium] Nên sử dụng hình ảnh vector thay vì hình ảnh bitmap (nếu có thể).

    *Tại sao:*
    > Hình ảnh vector (SVG) có xu hướng nhỏ hơn hình ảnh và SVG có độ nhạy và tỷ lệ hoàn hảo. Những hình ảnh này có thể được tạo và chỉnh sửa bởi CSS.

* [ ] **Kích thước hình ảnh:** ![medium] Đặt thuộc tính `width` và` height` trên `<img>` nếu kích thước hình ảnh được hiển thị cuối cùng được xác định.

    *Tại sao:*
    >Nếu chiều cao và chiều rộng được đặt, không gian cần thiết cho hình ảnh được đặt trước khi trang được tải. Tuy nhiên, không có các thuộc tính này, trình duyệt không biết kích thước của hình ảnh và không thể đặt trước khoảng trống thích hợp cho nó. Hiệu ứng sẽ làm bố cục trang sẽ thay đổi trong khi tải (trong khi tải hình ảnh).

* [ ] **Tránh sử dụng hình ảnh Base64:** ![medium] Cuối cùng, bạn có thể chuyển đổi những hình ảnh nhỏ thành base64 nhưng nó thực sự không phải là cách tốt nhất.

    * 📖 [Base64 Encoding & Performance, Part 1 and 2 by Harry Roberts](https://csswizardry.com/2017/02/base64-encoding-and-performance/)
    * 📖 [A closer look at Base64 image performance – The Page Not Found Blog](http://www.andygup.net/a-closer-look-at-base64-image-performance/)
    * 📖 [When to base64 encode images (and when not to) | David Calhoun](https://www.davidbcalhoun.com/2011/when-to-base64-encode-images-and-when-not-to/)
   * 📖 [Base64 encoding images for faster pages | Performance and seo factors](https://varvy.com/pagespeed/base64-images.html)

* [ ] **Lazy loading:** ![medium] Hình ảnh offscreen được tải lazily (Một dự phòng noscript luôn luôn được cung cấp)

    *Tại sao:*
    > Nó sẽ cải thiện thời gian phản hồi của trang hiện tại và sau đó tránh tải các hình ảnh không cần thiết mà người dùng có thể không cần.

    *Cách làm:*
    > ⁃ Sử dụng [Lighthouse](https://developers.google.com/web/tools/lighthouse/) để xác định có bao nhiêu **hình ảnh cho offscreen**. <br>
    ⁃ Sử dụng plugin JavaScript như sau để tải hình ảnh của bạn xuống. Đảm bảo bạn chỉ cần những hình ảnh đó. <br>
    ⁃ Ngoài ra, hãy đảm bảo tải xuống các hình ảnh thay thế được hiển thị khi di chuột qua hoặc các hành động của người dùng khác.

    * 🛠 [verlok/lazyload: GitHub](https://github.com/verlok/lazyload)
    * 🛠 [aFarkas/lazysizes: GitHub](https://github.com/aFarkas/lazysizes/)
    * 📖 [Lazy Loading Images and Video  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/lazy-loading-guidance/images-and-video/)
    * 📖 [5 Brilliant Ways to Lazy Load Images For Faster Page Loads - Dynamic Drive Blog](http://blog.dynamicdrive.com/5-brilliant-ways-to-lazy-load-images-for-faster-page-loads/)

* [ ] **Responsive images:** ![medium] Đảm bảo rằng hình ảnh phù hợp với kích thước hiển thị của bạn.

    *Tại sao:*
    >Các thiết bị nhỏ không cần hình ảnh lớn so với kích thước của chúng. Bạn nên có nhiều phiên bản của một hình ảnh trên các kích thước khác nhau.
    
    *Cách làm:*
    > ⁃ Tạo các kích thước hình ảnh khác nhau cho các thiết bị bạn muốn nhắm đến. <br>
    ⁃ Sử dụng `srcset` và `picture` để phân phối nhiều biến thể của mỗi hình ảnh.

     * 📖 [Responsive images - Learn web development | MDN](https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)

**[⬆ back to top](#table-of-contents)**

## JavaScript

![javascript]

- [ ] **Giảm thiểu JS:** ![high] ất cả các tệp JavaScript được rút gọn, nhận xét, khoảng trắng và dòng mới sẽ bị xóa khỏi tệp product *(vẫn hợp lệ nếu sử dụng HTTP/2)*.

    *Tại sao:*
    > Xóa tất cả khoảng trắng, nhận xét và ngắt dòng  không cần thiết sẽ giảm kích thước tệp JavaScript của bạn và tăng tốc thời gian tải trang của trang web của bạn và rõ ràng làm giảm thời gian tải xuống cho người dùng của bạn.

    *Cách làm:*
    > ⁃ Sử dụng các công cụ được đề xuất bên dưới để tự động giảm thiểu các tệp của bạn trước hoặc trong quá trình build hoặc deploy.

    * 🛠 [uglify-js - npm](https://www.npmjs.com/package/uglify-js)
    * 🛠 [Online JavaScript Compressor](http://refresh-sf.com)
    * 📖 [Short read: How is HTTP/2 different? Should we still minify and concatenate?](https://scaleyourcode.com/blog/article/28)

* [ ] **Không JavaScript bên trong:** ![medium] *(Chỉ hợp lệ cho trang web)* Tránh có nhiều mã JavaScript được nhúng ở giữa phần body của bạn. Tập hợp lại mã JavaScript của bạn bên trong các tệp bên ngoài hoặc ở cuối cùng trong thẻ `<head>` hoặc ở cuối trang của bạn (trước thẻ `</ body>`).

    *Tại sao:*
    > Đặt mã nhúng JavaScript trực tiếp vào `<body>` có thể làm chậm trang của bạn vì nó tải trong khi DOM đang được xây dựng. Cách tốt nhất là sử dụng các tệp bên ngoài với `async` hoặc` defer` để tránh chặn DOM. Một cách khác là đặt một số tập lệnh bên trong `<head>` của bạn. Hầu hết mã phân tích thời gian hoặc tập lệnh nhỏ cần tải trước khi DOM được xử lý chính.

    *Cách làm:*
    > Đảm bảo rằng tất cả các tệp của bạn được tải bằng cách sử dụng `async` hoặc` defer` và tìm cách tốt nhất để thêm code vào thẻ `<head>`.

     * 📖 [11 Tips to Optimize JavaScript and Improve Website Loading Speeds](https://www.upwork.com/hiring/development/11-tips-to-optimize-javascript-and-improve-website-loading-speeds/)

* [ ] **Không chặn JavaScript:** ![high] Các tệp JavaScript được tải không đồng bộ bằng cách sử dụng 'async` hoặc được hoãn lại bằng thuộc tính `defer`

    ```html
    <!-- Defer Attribute -->
    <script defer src="foo.js"></script>

    <!-- Async Attribute -->
    <script async src="foo.js"></script>
    ```

    *Tại sao:*
    > avaScript chặn phân tích cú pháp bình thường của tài liệu HTML, vì vậy khi trình phân tích cú pháp tiếp cận một thẻ `<script>` (đặc biệt là bên trong `<head>`), nó dừng lại để tìm nạp và chạy nó. Việc thêm `async` hoặc` defer` được khuyến khích cao nếu các tập lệnh của bạn được đặt ở đầu trang nhưng ít có giá trị hơn nếu chỉ trước thẻ `</ body>` của bạn. Nhưng tốt hơn là luôn sử dụng các thuộc tính này để tránh bất kỳ vấn đề về hiệu suất nào.

    *Cách làm:*
    > ⁃ Thêm `async` (nếu script này không dựa vào các script khác) hoặc `defer` (nếu script này dựa vào một script không đồng bộ) như một thuộc tính cho thẻ script của bạn. <br>
    ⁃ Nếu bạn có những đoạn script nhỏ, có thể sử dụng script dạng inline được đặt ở trên các script bất đồng bộ.

    * 📖 [Remove Render-Blocking JavaScript](https://developers.google.com/speed/docs/insights/BlockingJS)
    * 📖 [Defer loading JavaScript](https://varvy.com/pagespeed/defer-loading-javascript.html)

* [ ] **Tối ưu và cập nhật thư viện JS:** ![medium] Tất cả các thư viện JavaScript được sử dụng trong dự án của bạn là cần thiết (chọn JavaScript của Vanilla cho các chức năng đơn giản), được cập nhật lên phiên bản mới nhất của chúng và không áp đảo JavaScript của bạn với các phương thức không cần thiết

    *Tại sao:*
    > ầu hết thời gian, các phiên bản mới đều được tối ưu hơn và sửa các lỗi bảo mật. Bạn nên sử dụng hầu hết phần code đã được tối ưu cho tốc độ tăng lên vào project của bạn và đảm bảo bạn sẽ không làm website hay ứng dụng bị chậm đi bởi các plugin quá hạn.

    *Cách làm:*
    > Nếu dự án của bạn sử dụng các gói NPM, [npm-check](https://www.npmjs.com/package/npm-check) là một thư viện khá thú vị để nâng cấp / cập nhật thư viện của bạn.
    > [Greenkeeper](https://greenkeeper.io/) có thể tự động tìm kiếm các phụ thuộc của bạn và đề xuất thời gian cập nhật mọi phiên bản mới

    * 📖 [You may not need jQuery](http://youmightnotneedjquery.com/)
    * 📖 [Vanilla JavaScript for building powerful web applications](https://plainjs.com/)

- [ ] **Kiểm tra giới hạn kích thước của các phụ thuộc:** ![low] Đảm bảo sử dụng các thư viện bên ngoài một cách hợp lý, bạn có thể sử dụng thư viện nhẹ hơn cho cùng một chức năng

    *Tại sao:*
    > Bạn có thể bị cám dỗ khi sử dụng một trong số 745 000 gói mà bạn có thể tìm thấy trên [npm] (https://www.npmjs.com/), nhưng bạn cần phải chọn gói tốt nhất cho nhu cầu của mình. Ví dụ, MomentJS là một thư viện tuyệt vời nhưng với rất nhiều phương pháp bạn không bao giờ có thể sử dụng, đó là lý do tại sao Day.js được tạo ra. Nó chỉ là 2kB so với 16.4kB gz cho Moment.

    *Cách làm:*
    > Luôn so sánh và chọn thư viện tốt nhất và nhẹ hơn cho nhu cầu của bạn. Bạn cũng có thể sử dụng các công cụ như [npm trends](http://www.npmtrends.com/) để so sánh số lượt tải xuống gói NPM hoặc [Bundlephobia](https://bundlephobia.com/) để biết kích thước của các phụ thuộc của bạn.
    
    * 🛠 [ai/size-limit: Ngăn chặn các thư viện JS phình lên. Nếu bạn vô tình thêm một phụ thuộc lớn, Size Limit sẽ ném ra một lỗi.](https://github.com/ai/size-limit)
    * 🛠 [webpack-bundle-analyzer - npm](https://www.npmjs.com/package/webpack-bundle-analyzer)
    * 📖 [Size Limit: Make the Web lighter — Martian Chronicles, Evil Martians’ team blog](https://evilmartians.com/chronicles/size-limit-make-the-web-lighter)

- [ ] **JavaScript Profiling:** ![medium] iểm tra các vấn đề hiệu suất trong các tệp JavaScript của bạn (và CSS cũng vậy).

    *Tại sao:*
    > Sự phức tạp của JavaScript có thể làm chậm hiệu năng thời gian chạy. Việc xác định các vấn đề có thể có này là điều cần thiết để cung cấp trải nghiệm người dùng mượt mà nhất.

    *Cách làm:*
    > Sử dụng công cụ Timeline bên trong Chrome Developer Tool để đánh giá các sự kiện tập lệnh và tìm thấy sự kiện có thể mất quá nhiều thời gian.

     * 📖 [Speed Up JavaScript Execution  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution)
    * 📖 [JavaScript Profiling With The Chrome Developer Tools — Smashing Magazine](https://www.smashingmagazine.com/2012/06/javascript-profiling-chrome-developer-tools/)
    * 📖 [How to Record Heap Snapshots  |  Tools for Web Developers  |  Google Developers](https://developers.google.com/web/tools/chrome-devtools/memory-problems/heap-snapshots)
    * 📖 [Chapter 22 - Profiling the Frontend - Blackfire](https://blackfire.io/docs/book/22-frontend-profiling)
    * 📖 [30 Tips To Improve Javascript Performance](http://www.monitis.com/blog/30-tips-to-improve-javascript-performance/)

- [ ] **Sử dụng Service Workers:** ![medium] Bạn đang Service Workers trong PWA của bạn để lưu trữ dữ liệu hoặc thực hiện các tác vụ nặng có thể mà không ảnh hưởng đến trải nghiệm người dùng của ứng dụng của bạn.
   
    * 📖 [Service Workers: an Introduction  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/primers/service-workers/)
    * 📖 [Measuring the Real-world Performance Impact of Service Workers  |  Web  |  Google Developers](https://developers.google.com/web/showcase/2016/service-worker-perf)
    * 📖 [What Are Service Workers and How They Help Improve Performance](https://www.keycdn.com/blog/service-workers/)
    * 📹 [How does a service worker work? - YouTube](https://www.youtube.com/watch?v=__xAtWgfzvc)

**[⬆ back to top](#table-of-contents)**

## Server

![server-side]

- [ ] **Trang web của bạn sử dụng HTTPS:** ![high] 

    *Tại sao:*
    > HTTPS không chỉ dành cho các trang web thương mại điện tử mà còn cho tất cả các trang web đang trao đổi dữ liệu. Dữ liệu được chia sẻ bởi người dùng hoặc dữ liệu được chia sẻ với một thực thể bên ngoài. Các trình duyệt hiện đại giới hạn chức năng cho các trang web không an toàn. . Ví dụ như: vị trí địa lý, đẩy các thông báo và các service worker không hoạt động nếu sản phẩm của bạn không sử dụng HTTPS. Và ngày nay đã rất dễ dành để cài đặt một project với xác thực SSL so với trước kia (và nó còn miễn phí, cảm ơn [Let's Encrypt](https://letsencrypt.org/)).

 * 📖 [Why Use HTTPS? | Cloudflare](https://www.cloudflare.com/learning/security/why-use-https/)
 * 📖 [Enabling HTTPS Without Sacrificing Your Web Performance - Moz](https://moz.com/blog/enabling-https-without-sacrificing-web-performance)
 * 📖 [How HTTPS Affects Website Performance](https://wp-rocket.me/blog/https-affects-website-performance/)
 * 📖 [HTTP versus HTTPS versus HTTP2 - The real story | Tune The Web](https://www.tunetheweb.com/blog/http-versus-https-versus-http2/)
 * 📖 [HTTP vs HTTPS — Test them both yourself](https://www.httpvshttps.com/)

- [ ] **Dung lượng trang < 1500 KB (lý tưởng < 500 KB):** ![high] Giảm kích thước của trang + tài nguyên của bạn nhiều nhất có thể

    *Tại sao:*
    > Lý tưởng nhất là bạn nên cố gắng nhắm mục tiêu <500 KB nhưng trạng thái web cho thấy trung bình của Kilobyte là khoảng 1500 KB (ngay cả trên thiết bị di động). Tùy thuộc vào người dùng cuối của bạn, kết nối mạng, thiết bị, điều quan trọng là phải giảm càng nhiều càng tốt Kilobyte của bạn để có trải nghiệm người dùng tốt nhất có thể

    *Cách làm:*
    > ⁃ Tất cả các quy tắc trong Front-End Performance Checklist sẽ giúp bạn giảm nhiều nhất có thể tài nguyên và code của bạn.

    * 📖 [Page Weight](https://httparchive.org/reports/page-weight#bytesTotal)
    * 🛠 [What Does My Site Cost?](https://whatdoesmysitecost.com/)
    * 🛠 [web - Measure full page size in Chrome DevTools - Stack Overflow](https://stackoverflow.com/questions/38239980/measure-full-page-size-in-chrome-devtools)

- [ ] **Thời gian tải trang < 3 giây:** ![high] Giảm thời gian tải trang càng nhiều càng tốt để phân phối nội dung của bạn nhanh chóng tới người dùng của bạn.

    *Tại sao:*
    > Trang web hoặc ứng dụng của bạn nhanh hơn, bạn càng ít có khả năng tăng việc bị phản hồi, nói cách khác, bạn có ít cơ hội mất người dùng hoặc khách hàng trong tương lai. Có đủ các nghiên cứu về chủ đề này đã chứng mình điều đó.

    *Cách làm:*
    > Sử dụng các công cụ trực tuyến như [Page Speed Insight](https://developers.google.com/speed/pagespeed/insights/) hoặc [WebPageTest](https://www.webpagetest.org/) để phân tích những gì có thể làm chậm trang của bạn xuống và sử dụng Front-End Performance Checklist để cải thiện thời gian tải của bạn.

    * 🛠 [So sánh tốc độ trang web di động của bạn](https://www.thinkwithgoogle.com/feature/mobile/)
    * 🛠 [Kiểm tra tốc độ và hiệu suất trang web trên điện thoại di động của bạn - Think With Google](https://testmysite.thinkwithgoogle.com/intl/en-us)
    * 📖 [Thời gian tải trang trung bình cho năm 2018 - So sánh trang của bạn như thế nào? - MachMetrics Speed Blog](https://www.machmetrics.com/speed-blog/average-page-load-times-websites-2018/)

- [ ] **Thời gian cho byte đầu tiên < 1.3 giây:** ![high] Giảm thiểu thời gian mà trình duyệt của bạn đợi trước khi nhận dữ liệu.

    * 📖 [What is Waiting (TTFB) in DevTools, and what to do about it](https://scaleyourcode.com/blog/article/27)
    * 📖 [Monitoring your servers with free tools is easy](https://scaleyourcode.com/blog/article/7)
    * 📖 [Time to First Byte (TTFB)](https://varvy.com/pagespeed/ttfb.html)
    * 🛠 [Global latency testing tool](https://latency.apex.sh)

* [ ] **Kích thước Cookie:** ![medium] ếu bạn đang sử dụng cookie, hãy đảm bảo rằng mỗi cookie không vượt quá 4096 byte và tên miền của bạn không có nhiều hơn 20 cookie.

    *Tại sao:*
    > Cookie được trao đổi trong phần header HTTP giữa các máy chủ web và trình duyệt. Điều quan trọng là phải giữ kích thước cookie càng thấp càng tốt để giảm thiểu tác động đến thời gian phản hồi của người dùng.

    *Cách làm:*
    > Loại bỏ các cookie không cần thiết.

    * 📖 [Cookie specification: RFC 6265](https://tools.ietf.org/html/rfc6265)
    * 📖 [Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
    * 🛠 [Browser Cookie Limits](http://browsercookielimits.squawky.net/)
    * 📖 [Website Performance: Cookies Don't Taste So Good - Monitis Blog](http://www.monitis.com/blog/website-performance-cookies-dont-taste-so-good/)
    * 📖 [Google's Web Performance Best Practices #3: Minimize Request Overhead - GlobalDots Blog](https://www.globaldots.com/googles-web-performance-best-practices-3-minimize-request-overhead/)

- [ ] **Giảm thiểu các request HTTP:** ![high] Luôn đảm bảo rằng mọi tệp được yêu cầu đều cần thiết cho trang web hoặc ứng dụng của bạn.
 * 📖 [Combine external CSS](https://varvy.com/pagespeed/combine-external-css.html)
 * 📖 [Combine external JavaScript](https://varvy.com/pagespeed/combine-external-javascript.html)

- [ ] **Sử dụng CDN để phân phối nội dung của bạn:** ![medium] Sử dụng CDN để phân phối nội dung của bạn nhanh hơn trên toàn thế giới.

 * 📖 [10 Tips to Optimize CDN Performance - CDN Planet](https://www.cdnplanet.com/blog/10-tips-optimize-cdn-performance/)
 * 📖 [HTTP Caching  |  Web Fundamentals  |  Google Developers](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)

- [ ] **Phân phối tệp từ cùng một giao thức:** ![high] Tránh để trang web của bạn phân phát tệp đến từ nguồn bằng cách sử dụng HTTP trên trang web của bạn đang sử dụng HTTPS chẳng hạn. Nếu trang web của bạn đang sử dụng HTTPS, các tệp bên ngoài phải đến từ cùng một giao thức.
- [ ] **Serve reachable files:** ![high] Tránh yêu cầu các tệp không thể truy cập (404).
 * 📖 [How to avoid bad requests](https://varvy.com/pagespeed/avoid-bad-requests.html)

- [ ] **Đặt tiêu đề bộ nhớ cache HTTP đúng cách:** ![high] Đặt tiêu đề HTTP để tránh số lượng vòng lặp cao giữa trình duyệt và máy chủ của bạn.
 * 📖 [Using cache-control for browser caching](https://varvy.com/pagespeed/cache-control.html)

- [ ] ** Bật nén GZIP / Brotli:** ![high] Sử dụng phương pháp nén như Gzip hoặc Brotli để giảm kích thước tệp JavaScript của bạn. Với tệp kích thước nhỏ hơn, người dùng sẽ có thể tải xuống nội dung nhanh hơn, dẫn đến hiệu suất được cải thiện.

 * 🛠 [Check GZIP compression](https://checkgzipcompression.com/)
 * 🛠 [Check Brotli Compression](https://tools.keycdn.com/brotli-test)
 * 📖 [Can I use... Brotli](https://caniuse.com/#feat=brotli)

**[⬆ back to top](#table-of-contents)**

---
## Performances và JS Frameworks

### Angular
 * 📖 [Angular Performance Checklist](https://github.com/mgechev/angular-performance-checklist)

### React

 * 📖 [Optimizing Performance - React](https://reactjs.org/docs/optimizing-performance.html)
 * 📖 [React image manipulation | Cloudinary](https://cloudinary.com/documentation/react_image_manipulation)
 * 📖 [Debugging React performance with React 16 and Chrome Devtools.](https://building.calibreapp.com/debugging-react-performance-with-react-16-and-chrome-devtools-c90698a522ad)

### Vue

## Performances and CMS

### WordPress

* 🛠 [Test Your Website Speed | WordPress Hosting by @WPEngine](https://wpengine.com/speed-tool/)

#### Các bài viết

 * 📖 [19 Tips to Speed Up WordPress Performance (Updated)](https://www.wpbeginner.com/wordpress-performance-speed/)
 * 📖 [Speed Up Your WordPress - How to Save Images Optimized for Web](https://www.wpbeginner.com/beginners-guide/speed-wordpress-save-images-optimized-web/)

#### Plugins đươc đề xuất

* 🛠 [Caching Plugin for WordPress - Speed up your website with WP Rocket](https://wp-rocket.me/)
* 🛠 [WP-Sweep | WordPress.org](https://wordpress.org/plugins/wp-sweep/)
* 🛠 [Imagify Image Optimizer | WordPress.org](https://wordpress.org/plugins/imagify/)

---

## Bản dịch

Front-End Performance Checklist cũng muốn có các bản dịch bằng các ngôn ngữ khác! Đừng ngần ngại gửi đóng góp của bạn!

* 🇵🇹 Portuguese: [fernandofawkes/Front-End-Performance-Checklist](https://github.com/fernandofawkes/Front-End-Performance-Checklist)
* 🇨🇳 Chinese: [JohnsenZhou/Front-End-Performance-Checklist](https://github.com/JohnsenZhou/Front-End-Performance-Checklist)
* 🇷🇺 Russian: [lex111/Front-End-Performance-Checklist](https://github.com/lex111/Front-End-Performance-Checklist)
* 🇫🇷 French: [WilliamDASILVA/Front-End-Performance-Checklist](https://github.com/WilliamDASILVA/Front-End-Performance-Checklist)
* 🇰🇷 Korean: [ParkSB/Front-End-Performance-Checklist](https://github.com/ParkSB/Front-End-Performance-Checklist)
* 🇪🇸 Spanish: [dagerzuga/Front-End-Performance-Checklist](https://github.com/dagerzuga/Front-End-Performance-Checklist)

## Đóng góp

**Mở một issue hoặc một pull request để đề xuất thay đổi hoặc bổ sung.**

## Hỗ trợ

Nếu bạn có bất kỳ câu hỏi hoặc gợi ý nào, đừng ngại kết nối với tôi qua Discord hoặc Twitter:

* [Chat on Discord](https://discord.gg/btHQRkm)
* [Facebook](https://www.facebook.com/frontendchecklist/)
* [Twitter](https://twitter.com/thedaviddias)

## Tác giả

**Được xây dựng bởi ❤️ [David Dias](https://github.com/thedaviddias) at [@influitive](https://influitive.com/) 🇨🇦**

## Cộng tác viên

Dự án này tồn tại nhờ tất cả những người đóng góp. [[Contribute]](.github/CONTRIBUTING.md).
<a href="https://github.com/thedaviddias/Front-End-Performance-Checklist/graphs/contributors">
    <img src="https://opencollective.com/front-end-checklist/contributors.svg?width=890" />
</a>


## Người ủng hộ

Cảm ơn tất cả những người ủng hộ chúng tôi! 🙏 [[Become a backer](https://opencollective.com/front-end-checklist#backer)]

<a href="https://opencollective.com/front-end-checklist#backers" target="_blank"><img src="https://opencollective.com/front-end-checklist/backers.svg?width=890"></a>


## Nhà tài trợ

Hỗ trợ dự án này bằng cách trở thành nhà tài trợ. Logo của bạn sẽ hiển thị ở đây với một liên kết đến trang web của bạn. [[Become a sponsor](https://opencollective.com/front-end-checklist#sponsor)]

<a href="https://opencollective.com/front-end-checklist/sponsor/0/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/1/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/2/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/3/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/4/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/5/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/6/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/7/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/8/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/front-end-checklist/sponsor/9/website" target="_blank"><img src="https://opencollective.com/front-end-checklist/sponsor/9/avatar.svg"></a>

## License

[MIT](LICENSE)

All icons are provided by [Icons8](https://icons8.com/)

**[⬆ back to top](#table-of-contents)**

[logo]: images/logo-front-end-performance-checklist.jpg
[html]: images/html.png
[css]: images/css.png
[fonts]: images/fonts.png
[images]: images/images.png
[javascript]: images/javascript.png
[server-side]: images/server-side.png

[low]: https://front-end-checklist.now.sh/low.svg
[medium]: https://front-end-checklist.now.sh/medium.svg
[high]: https://front-end-checklist.now.sh/high.svg
