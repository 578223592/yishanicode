---
# This is the title of the article
title: 操作系统
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
  - 操作系统
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


## 内核态和用户态区别？内核态的底层操作有什么？为什么要分两个不同的态？

**回答要点：**

本问题回答最好沿着下面的思路：

1.  划分成用户态和内核态的主要原因：安全性。只有在内核态在能执行部分特权指令，用户态则不能。


**具体：**



内核态和用户态是操作系统中的两种运行模式。它们的主要区别在于**权限和可执行的操作**：

内核态（Kernel Mode）：在内核态下，CPU可以执行所有的指令和访问所有的硬件资源。这种模式下的操作具有更高的权限，主要用于操作系统内核的运行。

用户态（User Mode）：在用户态下，CPU只能执行部分指令集，无法直接访问硬件资源。这种模式下的操作权限较低，主要用于运行用户程序。

内核态的底层操作主要包括：内存管理、进程管理、设备驱动程序控制、系统调用等。这些操作涉及到操作系统的核心功能，需要较高的权限来执行。


分为内核态和用户态的原因主要有以下几点：

安全性：通过对权限的划分，用户程序无法直接访问硬件资源，从而避免了恶意程序对系统资源的破坏。

稳定性：用户态程序出现问题时，不会影响到整个系统，避免了程序故障导致系统崩溃的风险。

隔离性：内核态和用户态的划分使得操作系统内核与用户程序之间有了明确的边界，有利于系统的模块化和维护。

内核态和用户态的划分有助于保证操作系统的安全性、稳定性和易维护性。



::: tip 拓展
1. 一次系统调用的过程（其中涉及用户态和内核态的切换）
:::




[本站版权说明]: /more_about/context.md