### Web performance Checklist
https://frontendchecklist.io/

### Reference for performance
* 《[High Performance Web Sites](http://book.douban.com/subject/2084131/)》（[高性能网站建设指南](http://book.douban.com/subject/3132277/)）
* 《[Even Faster Web Sites](http://book.douban.com/subject/3686503/)》（[高性能网站建设进阶指南](http://book.douban.com/subject/4719162/)）
* 《[High Performance Browser Networking](http://book.douban.com/subject/21866396/)》（[Web性能权威指南](http://book.douban.com/subject/25856314/)）
* Optimizing the Critical Rendering Path for Instant Mobile Websites [[slides](https://docs.google.com/presentation/d/1IRHyU7_crIiCjl0Gvue0WY3eY_eYvFQvSfwQouW9368/present?slide=id.p19),[video](https://www.youtube.com/watch?v=YV1nKLWoARQ)]
* Instant Mobile Websites: Techniques and Best Practices [[slides](http://storage.googleapis.com/io-2013/presentations/239-%20Instant%20Mobile%20Websites-%20Techniques%20and%20Best%20Practices.pdf), [video](https://www.youtube.com/watch?v=Bzw8-ZLpwtw)]
* [Critical Rendering Path（关键呈现路径）](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/)
* [Optimizing Content Efficienc（优化内容效率）](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/?hl=zh-cn)
* [Rendering（渲染性能）](https://developers.google.com/web/fundamentals/performance/rendering/?hl=zh-cn)
* [How browsers work](http://taligarsiel.com/Projects/howbrowserswork1.htm)

### Best Practices for Speeding Up Your Web Site
https://developer.yahoo.com/performance/rules.html

### Mobile Analysis in PageSpeed Insights
https://developers.google.com/speed/docs/insights/mobile

`we must deliver and render the above the fold (ATF) content in under one second, which allows the user to begin interacting with the page as soon as possible` 


!['1stimeline'](https://developers.google.com/static/speed/docs/insights/images/1stimeline.png)

1. Server must render the response (< 200 ms)
2. Number of redirects should be minimized \.
3. Number of roundtrips to first render should be minimized
    Due to how TCP estimates the capacity of a connection (i.e. TCP Slow Start), a new TCP connection cannot immediately use the full available bandwidth between the client and the server. Because of this, the server can send up to 10 TCP packets on a new connection (~14KB) in first roundtrip, and then it must wait for client to acknowledge this data before it can grow its congestion window and proceed to deliver more data.

    Also, it is important to note that the 10 packet (IW10) limit is a recent update to the TCP standard: you should ensure that your server is upgraded to latest version to take advantage of this change. Otherwise, the limit will likely be 3-4 packets!

    Due to this TCP behavior, it is important to optimize your content to minimize the number of roundtrips required to deliver the necessary data to perform the first render of the page. Ideally, the ATF content should fit under 98KB - this allows the browser to paint the page after just three roundtrips to have plenty time budget for server response latency and client rendering.
4. Avoid external blocking JavaScript and CSS in above-the-fold content
5. Reserve time for browser layout and rendering (200 ms)
6. Optimize JavaScript execution and rendering time