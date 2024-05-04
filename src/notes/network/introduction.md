---
# This is the title of the article
title: 计算机网络-TCP
# This is the icon of the page
icon: file
# This control sidebar order
# order: 1
# Set author
# author: Ms.Hope
# Set writing time
date: 2024-05-04
# A page can have multiple categories
category:
  - 八股
# A page can have multiple tags
tag:
  - 计算机网络
# this page is sticky in article list
# sticky: true
# this page will appear in starred articles
# star: true
# You can customize footer content
# footer: Footer content for test
# You can customize copyright content
# copyright: No Copyright
---
::: tip 友情提示

- **内容建设：** 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。
- **转载说明：** 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见[版权说明][本站版权说明]，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。

:::
## TCP拆包沾包原因

**回答要点：**

本问题回答最好沿着下面的思路：

1. 什么是TCP拆包沾包？
2. 如何解决TCP拆包沾包？


**具体：**

TCP拆包和沾包现象是由于TCP协议的特性以及网络传输过程中的各种因素所导致的：

TCP协议是基于字节流的传输层协议，没有固定的分包边界。发送方将数据分成多个小的数据包进行传输，接收方再将这些数据包组合成完整的数据。在这个过程中，可能会出现拆包和沾包现象。

网络传输中的延迟和拥塞会影响数据包发送的速度和到达接收方的顺序。这可能导致数据包的拆分和组合不规律，从而出现拆包和沾包现象。

接收方的缓冲区大小限制。当接收方的缓冲区不足以容纳一个完整的数据包时，可能会将数据包拆分成多个部分，导致拆包现象。

为了解决TCP拆包和沾包的问题，可以采用以下方法：

在应用层实现数据包的边界识别，例如通过添加包头，包头中包含数据包长度等信息，使得接收方能够准确地将数据包进行拼接。

使用固定长度的数据包或者特殊的分隔符，以便于接收方识别数据包的边界。

使用更高级的传输层协议，如：WebSocket，它在TCP基础上增加了数据帧的概念，可以更好地解决拆包和沾包问题；http的做法是添加包头和特殊信息，即`\r\n`换行符来区别请求头和请求行，然后使用请求行中的content-length来获取请求体的长度；



::: tip 拓展
TCP拆包沾包可以追溯到TCP协议的三大特点：1.面向连接；2.基于字节流；3.可靠。

因此考虑拓展：
1. TCP协议的三大特点；
2. TCP协议与UDP协议的区别；
:::




::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签11
:::



[本站版权说明]: /more_about/context.md