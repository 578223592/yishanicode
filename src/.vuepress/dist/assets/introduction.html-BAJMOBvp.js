import{_ as o}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as a,c as r,a as t,b as e,d as p,w as c,e as l}from"./app-3gkKKKro.js";const s={},d={class:"hint-container tip"},h=t("p",{class:"hint-container-title"},"友情提示",-1),m=t("li",null,[t("strong",null,"内容建设："),e(" 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。")],-1),u=t("strong",null,"转载说明：",-1),_=l('<h2 id="tcp拆包沾包原因" tabindex="-1"><a class="header-anchor" href="#tcp拆包沾包原因"><span>TCP拆包沾包原因</span></a></h2><p><strong>回答要点：</strong></p><p>本问题回答最好沿着下面的思路：</p><ol><li>什么是TCP拆包沾包？</li><li>如何解决TCP拆包沾包？</li></ol><p><strong>具体：</strong></p><p>TCP拆包和沾包现象是由于TCP协议的特性以及网络传输过程中的各种因素所导致的：</p><p>TCP协议是基于字节流的传输层协议，没有固定的分包边界。发送方将数据分成多个小的数据包进行传输，接收方再将这些数据包组合成完整的数据。在这个过程中，可能会出现拆包和沾包现象。</p><p>网络传输中的延迟和拥塞会影响数据包发送的速度和到达接收方的顺序。这可能导致数据包的拆分和组合不规律，从而出现拆包和沾包现象。</p><p>接收方的缓冲区大小限制。当接收方的缓冲区不足以容纳一个完整的数据包时，可能会将数据包拆分成多个部分，导致拆包现象。</p><p>为了解决TCP拆包和沾包的问题，可以采用以下方法：</p><p>在应用层实现数据包的边界识别，例如通过添加包头，包头中包含数据包长度等信息，使得接收方能够准确地将数据包进行拼接。</p><p>使用固定长度的数据包或者特殊的分隔符，以便于接收方识别数据包的边界。</p><p>使用更高级的传输层协议，如：WebSocket，它在TCP基础上增加了数据帧的概念，可以更好地解决拆包和沾包问题；http的做法是添加包头和特殊信息，即<code>\\r\\n</code>换行符来区别请求头和请求行，然后使用请求行中的content-length来获取请求体的长度；</p><div class="hint-container tip"><p class="hint-container-title">拓展</p><p>TCP拆包沾包可以追溯到TCP协议的三大特点：1.面向连接；2.基于字节流；3.可靠。</p><p>因此考虑拓展：</p><ol><li>TCP协议的三大特点；</li><li>TCP协议与UDP协议的区别；</li></ol></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>这是一个提示</p></div><div class="hint-container warning"><p class="hint-container-title">注意</p><p>这是一个警告</p></div><div class="hint-container caution"><p class="hint-container-title">警告</p><p>这是一个危险警告</p></div><details class="hint-container details"><summary>详情</summary><p>这是一个 details 标签11</p></details>',18);function g(T,C){const n=i("RouteLink");return a(),r("div",null,[t("div",d,[h,t("ul",null,[m,t("li",null,[u,e(" 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见"),p(n,{to:"/more_about/context.html"},{default:c(()=>[e("版权说明")]),_:1}),e("，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。")])])]),_])}const v=o(s,[["render",g],["__file","introduction.html.vue"]]),f=JSON.parse('{"path":"/notes/network/introduction.html","title":"计算机网络-TCP","lang":"zh-CN","frontmatter":{"title":"计算机网络-TCP","icon":"file","date":"2024-05-04T00:00:00.000Z","category":["八股"],"tag":["计算机网络"],"description":"友情提示 内容建设： 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。 转载说明： 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。 TCP拆包沾包原因 回答要点： 本问题回答最好沿着下面的思路...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/notes/network/introduction.html"}],["meta",{"property":"og:site_name","content":"一山的学习笔记"}],["meta",{"property":"og:title","content":"计算机网络-TCP"}],["meta",{"property":"og:description","content":"友情提示 内容建设： 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。 转载说明： 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。 TCP拆包沾包原因 回答要点： 本问题回答最好沿着下面的思路..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T08:42:56.000Z"}],["meta",{"property":"article:author","content":"一山"}],["meta",{"property":"article:tag","content":"计算机网络"}],["meta",{"property":"article:published_time","content":"2024-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-04T08:42:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"计算机网络-TCP\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-04T08:42:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"一山\\",\\"url\\":\\"http://yishanicode.top\\"}]}"]]},"headers":[{"level":2,"title":"TCP拆包沾包原因","slug":"tcp拆包沾包原因","link":"#tcp拆包沾包原因","children":[]}],"git":{"createdTime":1714557672000,"updatedTime":1714812176000,"contributors":[{"name":"奔狼\\\\Administrator","email":"123@","commits":2}]},"readingTime":{"minutes":2.68,"words":805},"filePathRelative":"notes/network/introduction.md","localizedDate":"2024年5月4日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">友情提示</p>\\n<ul>\\n<li><strong>内容建设：</strong> 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。</li>\\n<li><strong>转载说明：</strong> 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见<a href=\\"/more_about/context.html\\" target=\\"_blank\\">版权说明</a>，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。</li>\\n</ul>\\n</div>","autoDesc":true}');export{v as comp,f as data};