---
# This is the title of the article
title: 其他题目-1
# This is the icon of the page
icon: file
# This control sidebar order
order: 1
# Set author
# author: Ms.Hope
# Set writing time
date: 2024-05-03
# A page can have multiple categories
category:
  - 八股
# A page can have multiple tags
tag:
  - 其他
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


## 手写LRU

在一些公司的手撕算法环节可能会考察LRU。

这里先简单介绍下LRU的含义，但由于是手撕，因此主要还是从写法上讲解。

### 概念：

LRU是Least Recently Used的缩写，即最近最少使用，越近使用的数据，越不会被淘汰，越久未使用，越容易被淘汰。

### 手撕：

本质上是一个链表，用于存储数据，当数据被访问时，将其移到链表头部，当链表满了（达到指定最大容量），淘汰末尾的元素。

关键组件：

- **一个链表** ，存放节点。
- **一个hashmap** ，存放：key：对应的key；value：对应在链表中的迭代器。由于在数据访问的时候需要移动节点，因此使用hashmap来快速定位节点（达到O(1)的时间复杂度）。

```C++

/**
手写的组件：1.Node：双链表的Node
2.DoubleList：双链表，维系Node的连接、插入、删除等等
3.LRUCache：对外提供接口
*/
struct Node{
    int key = 0;int val = 0;
    Node* pre = nullptr;
    Node* next = nullptr;
};
class DoubleList{
public:
    Node* dummpyHead ;
    Node* dummpyTail ;
    // 为了方便头插尾插，使用虚拟头/尾节点避免特判
    DoubleList(){
        dummpyHead = new Node();
        dummpyTail = new Node();
        dummpyHead->next = dummpyTail;
        dummpyTail->pre = dummpyHead;
    }
    // 删除节点
    void removeNode(Node* nodeAddress){
        nodeAddress->pre->next = nodeAddress->next;
        nodeAddress->next->pre = nodeAddress->pre;
        delete nodeAddress;
    };
    //队尾是最近才使用的节点
    Node* addNewNodeBack(int key,int val){
        Node* newNode = new Node();
        newNode->key = key;
        newNode->val = val;
        Node* left = dummpyTail->pre;
        left->next = newNode;
        newNode->pre = left;

        newNode->next = dummpyTail;
        dummpyTail->pre = newNode;
        return newNode;
    };
};
class LRUCache {
public:
    int capacity = 0;
    int size = 0;
    DoubleList doubleList;
    unordered_map<int,Node*> umap;
    // 初始化函数：只需要维护一个容量就可以了
    LRUCache(int capacity) {
        this->capacity = capacity;
    }
    // get的获取逻辑：
      // 1.map里面没有就没有 
      // 2.map有：获取结果，调整链表（删除这个节点，再头插或者尾插进去就行）
    int get(int key) {
        if(umap.find(key) == umap.end()){
            return -1;
        }
        Node* thisNode = umap[key];
        int res = thisNode->val;
        put(key,res);
        return res;
    }
    void showList(){
        auto node = doubleList.dummpyHead;
        node = node->next;
        while(node != doubleList.dummpyTail){
            cout<<node->val<<" ";
            node = node->next;
        }cout<<endl;
    }
    // 新增节点：1.map有就将链表中对应节点调整到队头；
    // 2.map中没有就插入map和链表，然后判断size如果达到capacity，就删除要过期的节点（map和DoubleList中都要删除）
    void put(int key, int value) {
        // cout<<"put,key: "<<key<<" val: "<<value<<endl;
        if(umap.find(key) == umap.end()){
            //插入
            if(size == capacity){ 
                umap.erase(doubleList.dummpyHead->next->key); 
                doubleList.removeNode(doubleList.dummpyHead->next);
                size--;
            }
            Node* tmp = doubleList.addNewNodeBack(key,value);
            umap.insert({key,tmp});
            size++;
        }else{
            //修改
            Node* thisNode = umap[key];
            doubleList.removeNode(thisNode);
            auto tmp = doubleList.addNewNodeBack(key,value);
            umap[key] = tmp;
        }
        // showList();
    }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache* obj = new LRUCache(capacity);
 * int param_1 = obj->get(key);
 * obj->put(key,value);
 */

```
本题LeetCode上有原题：[LRU-LeetCode链接](https://leetcode.cn/problems/lru-cache/description/)

::: tip 

- 对于LFU，一般来说面试不会手撕，但是推荐掌握其概念和手撕，如果需要可以留言。
- 对于其他常见的缓存淘汰算法，我总结了常见的缓存淘汰算法及其特点，后续应该会更新上来。
- 对于LRU with TTL （带过期时间的LRU），一般来说不会考察，不过也可以提一下。
- 对于C++的写webserver的同学，我使用LRU、LFU、ARC等缓存淘汰算法改进了webserver，如果需要的话可以留言。

:::



<!-- TODO ： 缓存淘汰算法的总结 -->

代码块测试：
```c++
const
```

## 测试搜索1


### 测试搜索2
#### 测试搜索3
##### 测试搜索4




[本站版权说明]: /more_about/context.md