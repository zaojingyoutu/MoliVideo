(function(e){function t(t){for(var n,r,a=t[0],u=t[1],i=t[2],s=0,d=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(l,r)&&l[r]&&d.push(l[r][0]),l[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,i||[]),o()}function o(){for(var e,t=0;t<c.length;t++){for(var o=c[t],n=!0,r=1;r<o.length;r++){var u=o[r];0!==l[u]&&(n=!1)}n&&(c.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},l={app:0},c=[];function r(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"c327cee4"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],o=l[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=l[e]=[t,n]}));t.push(o[2]=n);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=r(e);var i=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(s);var o=l[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",i.name="ChunkLoadError",i.type=n,i.request=c,o[1](i)}l[e]=void 0}};var s=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=i;c.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},3722:function(e,t,o){},9658:function(e,t,o){"use strict";o("3722")},cd49:function(e,t,o){"use strict";o.r(t);var n=o("7a23");function l(e,t,o,l,c,r){const a=Object(n["N"])("router-view");return l.isRouterAlive?(Object(n["H"])(),Object(n["k"])(a,{key:0})):Object(n["l"])("",!0)}var c={name:"App",components:{},setup(){const e=Object(n["K"])(!0),t=()=>{e.value=!1,Object(n["x"])(()=>{e.value=!0})};return Object(n["I"])("reload",t),{isRouterAlive:e}}},r=(o("eb91"),o("6b0d")),a=o.n(r);const u=a()(c,[["render",l]]);var i=u,s=o("6605");function b(e,t,o,l,c,r){const a=Object(n["N"])("a-card"),u=Object(n["N"])("a-list-item"),i=Object(n["N"])("a-list");return Object(n["H"])(),Object(n["k"])(i,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3,xxxl:2},"data-source":e.data},{renderItem:Object(n["Z"])(({item:e})=>[Object(n["p"])(u,null,{default:Object(n["Z"])(()=>[Object(n["p"])(a,{title:e.title},{default:Object(n["Z"])(()=>[Object(n["o"])("Card content")]),_:2},1032,["title"])]),_:2},1024)]),_:1},8,["data-source"])}const d=[{title:"Title 1"},{title:"Title 2"},{title:"Title 3"},{title:"Title 4"},{title:"Title 5"},{title:"Title 6"}];var p=Object(n["q"])({setup(){return{data:d}}});const j=a()(p,[["render",b]]);var O=j;const f=Object(n["n"])("div",{class:"logo"},null,-1),m={class:"search",style:{float:"left",height:"68px"}},h={style:{background:"#fff",padding:"24px",minHeight:"100%"}};function v(e,t,o,l,c,r){const a=Object(n["N"])("a-input"),u=Object(n["N"])("a-button"),i=Object(n["N"])("a-menu-item"),s=Object(n["N"])("a-menu"),b=Object(n["N"])("a-layout-header"),d=Object(n["N"])("router-view"),p=Object(n["N"])("a-layout-content"),j=Object(n["N"])("a-layout-footer"),O=Object(n["N"])("a-layout");return Object(n["H"])(),Object(n["k"])(O,{style:{height:"950px"}},{default:Object(n["Z"])(()=>[Object(n["p"])(b,{style:{position:"fixed",zIndex:1,width:"100%"}},{default:Object(n["Z"])(()=>[f,Object(n["n"])("div",m,[Object(n["p"])(a,{value:e.value,"onUpdate:value":t[0]||(t[0]=t=>e.value=t),placeholder:"搜索",style:{width:"200px"}},null,8,["value"]),Object(n["p"])(u,{onClick:e.query},{default:Object(n["Z"])(()=>[Object(n["o"])("搜索")]),_:1},8,["onClick"])]),Object(n["p"])(s,{selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=t=>e.selectedKeys=t),theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},{default:Object(n["Z"])(()=>[Object(n["p"])(i,{key:"1"},{default:Object(n["Z"])(()=>[Object(n["o"])("电视")]),_:1}),Object(n["p"])(i,{key:"2"},{default:Object(n["Z"])(()=>[Object(n["o"])("电影")]),_:1}),Object(n["p"])(i,{key:"3"},{default:Object(n["Z"])(()=>[Object(n["o"])("动漫")]),_:1})]),_:1},8,["selectedKeys"])]),_:1}),Object(n["p"])(p,{style:{padding:"0 25px",marginTop:"64px",height:"100%"}},{default:Object(n["Z"])(()=>[Object(n["n"])("div",h,[Object(n["p"])(d)])]),_:1}),Object(n["p"])(j,{style:{textAlign:"center"}}),Object(n["o"])(" 本站所有内容均来自互联网，如果本站部分内容侵犯您的版权请告知，在必要证明文件下我们第一时间撤除 ")]),_:1})}var y=Object(n["q"])({setup(){const e=Object(n["K"])(""),t=()=>{window.location.href="/MoliVideo/#/movue?wd="+e.value};return{selectedKeys:Object(n["K"])([]),value:e,query:t}}});o("9658");const g=a()(y,[["render",v]]);var w=g;const _={style:{height:"40%"}},x=["src"];function k(e,t,o,l,c,r){const a=Object(n["N"])("a-button"),u=Object(n["N"])("a-list");return Object(n["H"])(),Object(n["m"])(n["b"],null,[Object(n["n"])("div",_,[Object(n["n"])("iframe",{src:e.play_url.url,marginwidth:"0",marginheight:"0",border:"0",scrolling:"no",frameborder:"0",topmargin:"0",width:"100%",height:"100%",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:" msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"},null,8,x)]),Object(n["n"])("div",null,[Object(n["p"])(u,{"data-source":e.modelRef.movue.vod_play_url},{renderItem:Object(n["Z"])(({item:t})=>[Object(n["p"])(a,{onClick:o=>e.play(t)},{default:Object(n["Z"])(()=>[Object(n["o"])(Object(n["Q"])(t.name),1)]),_:2},1032,["onClick"])]),_:1},8,["data-source"])])],64)}o("14d9");var Z=o("84d4"),N=Object(n["q"])({setup(){const e=Object(s["c"])().currentRoute.value.query.id,t=Object(n["J"])({movue:Z["a"]});let o;o="https://www.zaojingyoutu.top:8000/api/";fetch(o+"movie/?id="+e,{mode:"cors",method:"GET"}).then(e=>e.json()).then(e=>{let o=e.data.list[0],n=o.vod_play_url.split("#"),l=[];for(let t=0;t<n.length;t++){let e=n[t].split("$");l.push({name:e[0],url:"https://vip.zykbf.com/?url="+e[1]})}o.vod_play_url=l,t.movue=o});const l=Object(n["J"])({url:"https://vip.zykbf.com/?url="}),c=e=>{l.url=e.url,console.log(e.url)};return{modelRef:t,play:c,play_url:l}}});const q=a()(N,[["render",k]]);var T=q;const z={style:{width:"40",height:"60"}},H=["src"],K={key:1,width:"120",alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"};function P(e,t,o,l,c,r){const a=Object(n["N"])("router-link"),u=Object(n["N"])("a-list-item"),i=Object(n["N"])("a-list");return Object(n["H"])(),Object(n["k"])(i,{grid:{gutter:16,xs:2,sm:2,md:4,lg:4,xl:6,xxl:3,xxxl:2},size:"small","data-source":e.listData},{footer:Object(n["Z"])(()=>[]),renderItem:Object(n["Z"])(({item:e})=>[Object(n["p"])(u,{key:"item.title"},{extra:Object(n["Z"])(()=>[]),default:Object(n["Z"])(()=>[Object(n["n"])("div",z,[Object(n["n"])("div",null,[e.vod_pic?(Object(n["H"])(),Object(n["m"])("img",{key:0,width:"120",alt:"logo",src:e.vod_pic},null,8,H)):(Object(n["H"])(),Object(n["m"])("img",K))]),Object(n["n"])("div",null,[Object(n["p"])(a,{to:{path:"/play",query:{id:e.vod_id}}},{default:Object(n["Z"])(()=>[Object(n["o"])(Object(n["Q"])(e.vod_name),1)]),_:2},1032,["to"])])])]),_:2},1024)]),_:1},8,["data-source"])}var C=Object(n["q"])({inject:["reload"],setup(){let e=Object(s["c"])().currentRoute.value.query.wd;""!=e&&null!=e&&void 0!=e||(e="all");let t,o=Object(n["K"])();t="https://www.zaojingyoutu.top:8000/api/";fetch(t+"movie/?name="+e,{mode:"cors",method:"get"}).then(e=>e.json()).then(e=>{o.value=e.data.list});const l={onChange:e=>{console.log(e)},pageSize:3};return{listData:o,pagination:l,kw:e}},watch:{$route(e,t){e.query.wd!=t.query.wd&&location.reload()}}});const S=a()(C,[["render",P]]);var A=S;const R=[{path:"/",name:"Home",component:w,children:[{path:"/home",name:"Home",component:O},{path:"/play",name:"Play",component:T},{path:"/movue",name:"movue",component:A}]},{path:"/about",name:"About",component:()=>o.e("about").then(o.bind(null,"f820"))}],E=Object(s["a"])({history:Object(s["b"])(""),routes:R});var I=E,M=o("f23d");o("202f");const D=Object(n["j"])(i);D.use(I).use(M["a"]).component("layout",w).mount("#app")},eb91:function(e,t,o){"use strict";o("f285")},f285:function(e,t,o){}});
//# sourceMappingURL=app.c32f2f0c.js.map