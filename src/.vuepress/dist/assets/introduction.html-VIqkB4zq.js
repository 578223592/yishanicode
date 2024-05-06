import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as r,c,a as e,b as n,d as l,w as o,f as v,e as d}from"./app-3gkKKKro.js";const u={},m={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"友情提示",-1),b=e("li",null,[e("strong",null,"内容建设："),n(" 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。")],-1),h=e("strong",null,"转载说明：",-1),g=d(`<h2 id="手写lru" tabindex="-1"><a class="header-anchor" href="#手写lru"><span>手写LRU</span></a></h2><p>在一些公司的手撕算法环节可能会考察LRU。</p><p>这里先简单介绍下LRU的含义，但由于是手撕，因此主要还是从写法上讲解。</p><h3 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念：</span></a></h3><p>LRU是Least Recently Used的缩写，即最近最少使用，越近使用的数据，越不会被淘汰，越久未使用，越容易被淘汰。</p><h3 id="手撕" tabindex="-1"><a class="header-anchor" href="#手撕"><span>手撕：</span></a></h3><p>本质上是一个链表，用于存储数据，当数据被访问时，将其移到链表头部，当链表满了（达到指定最大容量），淘汰末尾的元素。</p><p>关键组件：</p><ul><li><strong>一个链表</strong> ，存放节点。</li><li><strong>一个hashmap</strong> ，存放：key：对应的key；value：对应在链表中的迭代器。由于在数据访问的时候需要移动节点，因此使用hashmap来快速定位节点（达到O(1)的时间复杂度）。</li></ul><div class="language-C++ line-numbers-mode" data-ext="C++" data-title="C++"><pre class="language-C++"><code>
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
        dummpyHead-&gt;next = dummpyTail;
        dummpyTail-&gt;pre = dummpyHead;
    }
    // 删除节点
    void removeNode(Node* nodeAddress){
        nodeAddress-&gt;pre-&gt;next = nodeAddress-&gt;next;
        nodeAddress-&gt;next-&gt;pre = nodeAddress-&gt;pre;
        delete nodeAddress;
    };
    //队尾是最近才使用的节点
    Node* addNewNodeBack(int key,int val){
        Node* newNode = new Node();
        newNode-&gt;key = key;
        newNode-&gt;val = val;
        Node* left = dummpyTail-&gt;pre;
        left-&gt;next = newNode;
        newNode-&gt;pre = left;

        newNode-&gt;next = dummpyTail;
        dummpyTail-&gt;pre = newNode;
        return newNode;
    };
};
class LRUCache {
public:
    int capacity = 0;
    int size = 0;
    DoubleList doubleList;
    unordered_map&lt;int,Node*&gt; umap;
    // 初始化函数：只需要维护一个容量就可以了
    LRUCache(int capacity) {
        this-&gt;capacity = capacity;
    }
    // get的获取逻辑：
      // 1.map里面没有就没有 
      // 2.map有：获取结果，调整链表（删除这个节点，再头插或者尾插进去就行）
    int get(int key) {
        if(umap.find(key) == umap.end()){
            return -1;
        }
        Node* thisNode = umap[key];
        int res = thisNode-&gt;val;
        put(key,res);
        return res;
    }
    void showList(){
        auto node = doubleList.dummpyHead;
        node = node-&gt;next;
        while(node != doubleList.dummpyTail){
            cout&lt;&lt;node-&gt;val&lt;&lt;&quot; &quot;;
            node = node-&gt;next;
        }cout&lt;&lt;endl;
    }
    // 新增节点：1.map有就将链表中对应节点调整到队头；
    // 2.map中没有就插入map和链表，然后判断size如果达到capacity，就删除要过期的节点（map和DoubleList中都要删除）
    void put(int key, int value) {
        // cout&lt;&lt;&quot;put,key: &quot;&lt;&lt;key&lt;&lt;&quot; val: &quot;&lt;&lt;value&lt;&lt;endl;
        if(umap.find(key) == umap.end()){
            //插入
            if(size == capacity){ 
                umap.erase(doubleList.dummpyHead-&gt;next-&gt;key); 
                doubleList.removeNode(doubleList.dummpyHead-&gt;next);
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
 * int param_1 = obj-&gt;get(key);
 * obj-&gt;put(key,value);
 */

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),y={href:"https://leetcode.cn/problems/lru-cache/description/",target:"_blank",rel:"noopener noreferrer"},N=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"提示"),e("ul",null,[e("li",null,"对于LFU，一般来说面试不会手撕，但是推荐掌握其概念和手撕，如果需要可以留言。"),e("li",null,"对于其他常见的缓存淘汰算法，我总结了常见的缓存淘汰算法及其特点，后续应该会更新上来。"),e("li",null,"对于LRU with TTL （带过期时间的LRU），一般来说不会考察，不过也可以提一下。"),e("li",null,"对于C++的写webserver的同学，我使用LRU、LFU、ARC等缓存淘汰算法改进了webserver，如果需要的话可以留言。")])],-1),_=d(`<p>代码块测试：</p><div class="language-c++ line-numbers-mode" data-ext="c++" data-title="c++"><pre class="language-c++"><code>const
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="测试搜索1" tabindex="-1"><a class="header-anchor" href="#测试搜索1"><span>测试搜索1</span></a></h2><h3 id="测试搜索2" tabindex="-1"><a class="header-anchor" href="#测试搜索2"><span>测试搜索2</span></a></h3><h4 id="测试搜索3" tabindex="-1"><a class="header-anchor" href="#测试搜索3"><span>测试搜索3</span></a></h4><h5 id="测试搜索4" tabindex="-1"><a class="header-anchor" href="#测试搜索4"><span>测试搜索4</span></a></h5>`,6);function L(k,f){const s=i("RouteLink"),t=i("ExternalLinkIcon");return r(),c("div",null,[e("div",m,[p,e("ul",null,[b,e("li",null,[h,n(" 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见"),l(s,{to:"/more_about/context.html"},{default:o(()=>[n("版权说明")]),_:1}),n("，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。")])])]),g,e("p",null,[n("本题LeetCode上有原题："),e("a",y,[n("LRU-LeetCode链接"),l(t)])]),N,v(" TODO ： 缓存淘汰算法的总结 "),_])}const R=a(u,[["render",L],["__file","introduction.html.vue"]]),U=JSON.parse('{"path":"/notes/scenario_question/introduction.html","title":"其他题目-1","lang":"zh-CN","frontmatter":{"title":"其他题目-1","icon":"file","order":1,"date":"2024-05-03T00:00:00.000Z","category":["八股"],"tag":["其他"],"description":"友情提示 内容建设： 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。 转载说明： 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。 手写LRU 在一些公司的手撕算法环节可能会考察LRU。 这里...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/notes/scenario_question/introduction.html"}],["meta",{"property":"og:site_name","content":"一山的学习笔记"}],["meta",{"property":"og:title","content":"其他题目-1"}],["meta",{"property":"og:description","content":"友情提示 内容建设： 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。 转载说明： 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。 手写LRU 在一些公司的手撕算法环节可能会考察LRU。 这里..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-04T08:42:56.000Z"}],["meta",{"property":"article:author","content":"一山"}],["meta",{"property":"article:tag","content":"其他"}],["meta",{"property":"article:published_time","content":"2024-05-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-04T08:42:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"其他题目-1\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-05-03T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-04T08:42:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"一山\\",\\"url\\":\\"http://yishanicode.top\\"}]}"]]},"headers":[{"level":2,"title":"手写LRU","slug":"手写lru","link":"#手写lru","children":[{"level":3,"title":"概念：","slug":"概念","link":"#概念","children":[]},{"level":3,"title":"手撕：","slug":"手撕","link":"#手撕","children":[]}]},{"level":2,"title":"测试搜索1","slug":"测试搜索1","link":"#测试搜索1","children":[{"level":3,"title":"测试搜索2","slug":"测试搜索2","link":"#测试搜索2","children":[]}]}],"git":{"createdTime":1714726547000,"updatedTime":1714812176000,"contributors":[{"name":"奔狼\\\\Administrator","email":"123@","commits":2}]},"readingTime":{"minutes":3.58,"words":1073},"filePathRelative":"notes/scenario_question/introduction.md","localizedDate":"2024年5月3日","excerpt":"<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">友情提示</p>\\n<ul>\\n<li><strong>内容建设：</strong> 内容正在不断的完善中，如果对内容有疑问或者希望添加内容，请留言，欢迎提出建议。</li>\\n<li><strong>转载说明：</strong> 本站文章在创作过程中，部分内容整合了许多大佬的观点，在这里表示感谢，详见<a href=\\"/more_about/context.html\\" target=\\"_blank\\">版权说明</a>，如有侵权或者不希望转载，请联系我添加出处或者删除相关内容。同时，如需转载本站文章，转载请在文首注明出处。</li>\\n</ul>\\n</div>","autoDesc":true}');export{R as comp,U as data};
