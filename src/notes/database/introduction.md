---
# This is the title of the article
title: 数据库-MySQL
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
  - 数据库
  - MySQL
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


## 如果要建立联合索引，字段的顺序有什么需要注意吗？

**回答要点：**

- 最左匹配原则
- 区分度高的字段放在前面


**具体：**

**最左匹配原则：** 联合索引遵循最左匹配原则，即在查询时，只有按照索引字段的顺序从最左边开始连续使用索引字段，索引才会被使用。因此，根据最常用作查询条件的字段放在联合索引的最左边，可以提高索引的利用率。

**区分度高的字段放在前面：** 将区分度高的字段放在联合索引的前面，可以减少索引的扫描范围，提高查询效率。

::: tip 拓展
1. 常见的误区：最左匹配原则匹配的是索引字段的顺序，而与SQL语句中使用联合索引的顺序无关。举个例子：如果联合索引是a、b、c字段，那么如果SQL语句是`select * from table where a=1 and b=2 and c=3`和`select * from table where c=3 and b=2 and a=1`是一样的。
:::



## 怎么确定语句是否走了索引？

**回答要点：**

- explain命令查看执行计划，关注key（实际使用到的索引）字段。


**具体：**

可以通过 explian查看执行计划来确认。

对于执行计划，参数有：

`possible_keys` 字段表示可能用到的索引；

`key` 字段表示实际用的索引，如果这一项为 NULL，说明没有使用索引；

`key_len` 表示索引的长度；

`rows` 表示扫描的数据行数。

`type` 表示数据扫描类型，我们需要重点看这个。

如果 `typy=all`，代表没有走索引，进行了全表扫描。如果 key 不为 null，说明用到了索引。


::: tip 拓展
相关问题：
1. 有一个命令特别慢，如何排查？ 一般从：explian查看执行计划分析；慢日志查询分析 两个角度出发
:::


## 一般是建立哪些字段的索引呢？

**回答要点：**

- `WHERE` 查询条件的字段
- 用于 `GROUP BY` 和 `ORDER BY` 的字段
- 区分度大的字段




**具体：**

索引最大的好处是提高查询速度，我经常针对下面场景来建立索引：

字段有唯一性限制的，比如商品编码；

经常用于 `WHERE` 查询条件的字段，这样能够提高整个表的查询速度，如果查询条件不是一个字段，可以建立联合索引。

经常用于 `GROUP BY` 和 `ORDER BY` 的字段，这样在查询的时候就不需要再去做一次排序了，因为我们都已经知道了建立索引之后在 B+Tree 中的记录都是排序好的。


::: tip 拓展

相关问题：
1. 有一个命令特别慢，如何排查？ 一般从：explian查看执行计划分析；慢日志查询分析 两个角度出发
2. 如果字段区分度过小，那么MySQL可能会认为这个字段没有索引，直接走全表扫描。 解决方案：思路都是增加区分度，具体做法类似于身份证建立索引的方法：1.使用hash建立索引；2.先倒序再建立索引
:::




[本站版权说明]: /more_about/context.md