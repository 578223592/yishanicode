import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as p,c,f as s,a as e,F as f,h as k,d as o,u as _,w as y,b as t,n as v,g as b,e as w,t as C,i as x,j as P,k as n}from"./app-3gkKKKro.js";const T=e("p",null,[t("Content before "),e("code",null,"more"),t(" comment is regarded as page excerpt.")],-1),M=w(`<h2 id="page-title" tabindex="-1"><a class="header-anchor" href="#page-title"><span>Page Title</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>You can also set title in Markdown&#39;s Frontmatter:</p><div class="language-markdown line-numbers-mode" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="token front-matter-block"><span class="token punctuation">---</span>
<span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> Page Title</span>
<span class="token punctuation">---</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="page-information" tabindex="-1"><a class="header-anchor" href="#page-information"><span>Page Information</span></a></h2><p>You can set page information in Markdown&#39;s Frontmatter.</p><ul><li>The author is Ms.Hope.</li><li>The writing date is January 1, 2020</li><li>Category is &quot;Guide&quot;</li><li>Tags are &quot;Page Config&quot; and &quot;Guide&quot;</li></ul><h2 id="page-content" tabindex="-1"><a class="header-anchor" href="#page-content"><span>Page Content</span></a></h2><p>You are free to write your Markdown here.</p><div class="hint-container tip"><p class="hint-container-title">Assets</p><ul><li>You can place images besides your Markdown files nd use <strong>relative links</strong>.</li><li>For images in <code>.vuepress/public</code> directory, please use absolute links (i.e.: starting with <code>/</code>).</li></ul></div><h2 id="components" tabindex="-1"><a class="header-anchor" href="#components"><span>Components</span></a></h2><p>Each markdown page is converted into a Vue component, which means you can use Vue syntax in Markdown:</p><p>2</p>`,13),N=e("p",null,"You can also create and import your own components.",-1),V=e("h2",{id:"markdown跳转测试",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#markdown跳转测试"},[e("span",null,"markdown跳转测试")])],-1),H=e("p",null,[e("a",{href:"#page-content"},"跳到本页面的二级标题"),t(" ： 测试可以成功")],-1),q=e("hr",null,null,-1),B=e("p",null,"The theme contains some useful components. Here are some examples:",-1),D=e("p",null,"A card:",-1),F={__name:"page.html",setup(Z){const d=x({setup(){const a=P("Hello world!"),l=r=>{a.value=r.target.value};return()=>[n("p",[n("span","Input: "),n("input",{value:a.value,onInput:l})]),n("p",[n("span","Output: "),a.value])]}});return(a,l)=>{const r=i("RouteLink"),m=i("Badge"),u=i("VPCard");return p(),c("div",null,[T,s(" more "),M,s(" markdownlint-disable MD033 "),e("ul",null,[(p(),c(f,null,k(3,g=>e("li",null,C(g),1)),64))]),s(" markdownlint-enable MD033 "),N,o(_(d)),V,H,e("p",null,[o(r,{to:"/demo/markdown.md/#markdown-config"},{default:y(()=>[t("跳到其他页面的二级标题")]),_:1}),t(" ； 2024-5-4：测试不成功，待优化TODO")]),q,B,e("ul",null,[e("li",null,[e("p",null,[t("A dark blue badge text badge at the end of line. "),o(m,{text:"Badge text",color:"#242378"})])]),e("li",null,[D,o(u,v(b({title:"Mr.Hope",desc:"Where there is light, there is hope123",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])])])}}},Y=h(F,[["__file","page.html.vue"]]),z=JSON.parse('{"path":"/demo/page.html","title":"Page Config汇总","lang":"zh-CN","frontmatter":{"title":"Page Config汇总","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["Guide"],"tag":["Page config","Guide"],"sticky":true,"star":true,"footer":"Footer content for test","copyright":"No Copyright","description":"Content before more comment is regarded as page excerpt.","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/demo/page.html"}],["meta",{"property":"og:site_name","content":"一山的学习笔记"}],["meta",{"property":"og:title","content":"Page Config汇总"}],["meta",{"property":"og:description","content":"Content before more comment is regarded as page excerpt."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-05-06T09:42:26.000Z"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"Page config"}],["meta",{"property":"article:tag","content":"Guide"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-05-06T09:42:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Page Config汇总\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-05-06T09:42:26.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.Hope\\"}]}"]]},"headers":[{"level":2,"title":"Page Title","slug":"page-title","link":"#page-title","children":[]},{"level":2,"title":"Page Information","slug":"page-information","link":"#page-information","children":[]},{"level":2,"title":"Page Content","slug":"page-content","link":"#page-content","children":[]},{"level":2,"title":"Components","slug":"components","link":"#components","children":[]},{"level":2,"title":"markdown跳转测试","slug":"markdown跳转测试","link":"#markdown跳转测试","children":[]}],"git":{"createdTime":1714557672000,"updatedTime":1714988546000,"contributors":[{"name":"奔狼\\\\Administrator","email":"123@","commits":5}]},"readingTime":{"minutes":1.31,"words":392},"filePathRelative":"demo/page.md","localizedDate":"2020年1月1日","excerpt":"<p>Content before <code>more</code> comment is regarded as page excerpt.</p>\\n","autoDesc":true}');export{Y as comp,z as data};
