(function(e){function t(t){for(var n,r,a=t[0],u=t[1],i=t[2],s=0,b=[];s<a.length;s++)r=a[s],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&b.push(c[r][0]),c[r]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);d&&d(t);while(b.length)b.shift()();return l.push.apply(l,i||[]),o()}function o(){for(var e,t=0;t<l.length;t++){for(var o=l[t],n=!0,r=1;r<o.length;r++){var u=o[r];0!==c[u]&&(n=!1)}n&&(l.splice(t--,1),e=a(a.s=o[0]))}return e}var n={},c={app:0},l=[];function r(e){return a.p+"js/"+({about:"about"}[e]||e)+"."+{about:"173e5307"}[e]+".js"}function a(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.e=function(e){var t=[],o=c[e];if(0!==o)if(o)t.push(o[2]);else{var n=new Promise((function(t,n){o=c[e]=[t,n]}));t.push(o[2]=n);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.src=r(e);var i=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(s);var o=c[e];if(0!==o){if(o){var n=t&&("load"===t.type?"missing":t.type),l=t&&t.target&&t.target.src;i.message="Loading chunk "+e+" failed.\n("+n+": "+l+")",i.name="ChunkLoadError",i.type=n,i.request=l,o[1](i)}c[e]=void 0}};var s=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},a.m=e,a.c=n,a.d=function(e,t,o){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(o,n,function(t){return e[t]}.bind(null,n));return o},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var d=i;l.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("cd49")},4494:function(e,t,o){"use strict";o("ddbd")},cd49:function(e,t,o){"use strict";o.r(t);var n=o("7a23");function c(e,t,o,c,l,r){const a=Object(n["N"])("router-view");return c.isRouterAlive?(Object(n["H"])(),Object(n["k"])(a,{key:0})):Object(n["l"])("",!0)}var l={name:"App",components:{},setup(){const e=Object(n["K"])(!0),t=()=>{e.value=!1,Object(n["x"])(()=>{e.value=!0})};return Object(n["I"])("reload",t),{isRouterAlive:e}}},r=(o("eb91"),o("6b0d")),a=o.n(r);const u=a()(l,[["render",c]]);var i=u,s=o("6605");function d(e,t,o,c,l,r){const a=Object(n["N"])("a-card"),u=Object(n["N"])("a-list-item"),i=Object(n["N"])("a-list");return Object(n["H"])(),Object(n["k"])(i,{grid:{gutter:16,xs:1,sm:2,md:4,lg:4,xl:6,xxl:3,xxxl:2},"data-source":e.data},{renderItem:Object(n["Z"])(({item:e})=>[Object(n["p"])(u,null,{default:Object(n["Z"])(()=>[Object(n["p"])(a,{title:e.title},{default:Object(n["Z"])(()=>[Object(n["o"])("Card content")]),_:2},1032,["title"])]),_:2},1024)]),_:1},8,["data-source"])}const b=[{title:"Title 1"},{title:"Title 2"},{title:"Title 3"},{title:"Title 4"},{title:"Title 5"},{title:"Title 6"}];var p=Object(n["q"])({setup(){return{data:b}}});const j=a()(p,[["render",d]]);var O=j;const f=Object(n["n"])("div",{class:"logo"},null,-1),m={class:"search",style:{float:"left",height:"68px"}},h={style:{background:"#fff",padding:"24px",minHeight:"380px"}};function v(e,t,o,c,l,r){const a=Object(n["N"])("a-input"),u=Object(n["N"])("a-button"),i=Object(n["N"])("a-menu-item"),s=Object(n["N"])("a-menu"),d=Object(n["N"])("a-layout-header"),b=Object(n["N"])("router-view"),p=Object(n["N"])("a-layout-content"),j=Object(n["N"])("a-layout-footer"),O=Object(n["N"])("a-layout");return Object(n["H"])(),Object(n["k"])(O,{style:{height:"950px"}},{default:Object(n["Z"])(()=>[Object(n["p"])(d,{style:{position:"fixed",zIndex:1,width:"100%"}},{default:Object(n["Z"])(()=>[f,Object(n["n"])("div",m,[Object(n["p"])(a,{value:e.value,"onUpdate:value":t[0]||(t[0]=t=>e.value=t),placeholder:"搜索",style:{width:"200px"}},null,8,["value"]),Object(n["p"])(u,{onClick:e.query},{default:Object(n["Z"])(()=>[Object(n["o"])("搜索")]),_:1},8,["onClick"])]),Object(n["p"])(s,{selectedKeys:e.selectedKeys,"onUpdate:selectedKeys":t[1]||(t[1]=t=>e.selectedKeys=t),theme:"dark",mode:"horizontal",style:{lineHeight:"64px"}},{default:Object(n["Z"])(()=>[Object(n["p"])(i,{key:"1"},{default:Object(n["Z"])(()=>[Object(n["o"])("电视")]),_:1}),Object(n["p"])(i,{key:"2"},{default:Object(n["Z"])(()=>[Object(n["o"])("电影")]),_:1}),Object(n["p"])(i,{key:"3"},{default:Object(n["Z"])(()=>[Object(n["o"])("动漫")]),_:1})]),_:1},8,["selectedKeys"])]),_:1}),Object(n["p"])(p,{style:{padding:"0 25px",marginTop:"64px",height:"100%"}},{default:Object(n["Z"])(()=>[Object(n["n"])("div",h,[Object(n["p"])(b)])]),_:1}),Object(n["p"])(j,{style:{textAlign:"center",height:"100%"}}),Object(n["o"])(" 本站所有内容均来自互联网，如果本站部分内容侵犯您的版权请告知，在必要证明文件下我们第一时间撤除 ")]),_:1})}var y=Object(n["q"])({setup(){const e=Object(n["K"])(""),t=()=>{window.location.href="/MoliVideo/#/movue?wd="+e.value};return{selectedKeys:Object(n["K"])([]),value:e,query:t}}});o("4494");const g=a()(y,[["render",v]]);var w=g;const _={style:{height:"40%"}},x=["src"];function k(e,t,o,c,l,r){const a=Object(n["N"])("a-button"),u=Object(n["N"])("a-list");return Object(n["H"])(),Object(n["m"])(n["b"],null,[Object(n["n"])("div",_,[Object(n["n"])("iframe",{src:e.play_url.url,marginwidth:"0",marginheight:"0",border:"0",scrolling:"no",frameborder:"0",topmargin:"0",width:"100%",height:"100%",allowfullscreen:"allowfullscreen",mozallowfullscreen:"mozallowfullscreen",msallowfullscreen:" msallowfullscreen",oallowfullscreen:"oallowfullscreen",webkitallowfullscreen:"webkitallowfullscreen"},null,8,x)]),Object(n["n"])("div",null,[Object(n["p"])(u,{"data-source":e.modelRef.movue.vod_play_url},{renderItem:Object(n["Z"])(({item:t})=>[Object(n["p"])(a,{onClick:o=>e.play(t)},{default:Object(n["Z"])(()=>[Object(n["o"])(Object(n["Q"])(t.name),1)]),_:2},1032,["onClick"])]),_:1},8,["data-source"])])],64)}o("14d9");var N=o("84d4"),E=Object(n["q"])({setup(){const e=Object(s["c"])().currentRoute.value.query.id,t=Object(n["J"])({movue:N["a"]});let o;o="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8000/api/";fetch(o+"movie/?id="+e,{mode:"cors",method:"GET"}).then(e=>e.json()).then(e=>{let o=e.data.list[0],n=o.vod_play_url.split("#"),c=[];for(let t=0;t<n.length;t++){let e=n[t].split("$");c.push({name:e[0],url:"https://vip.zykbf.com/?url="+e[1]})}o.vod_play_url=c,t.movue=o});const c=Object(n["J"])({url:"https://vip.zykbf.com/?url="}),l=e=>{c.url=e.url,console.log(e.url)};return{modelRef:t,play:l,play_url:c}}});const Z=a()(E,[["render",k]]);var A=Z;const P={style:{width:"40",height:"60"}},q=["src"],S={key:1,width:"120",alt:"logo",src:"https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"};function R(e,t,o,c,l,r){const a=Object(n["N"])("router-link"),u=Object(n["N"])("a-list-item"),i=Object(n["N"])("a-list");return Object(n["H"])(),Object(n["k"])(i,{grid:{gutter:16,xs:2,sm:2,md:4,lg:4,xl:6,xxl:3,xxxl:2},size:"small","data-source":e.listData},{footer:Object(n["Z"])(()=>[]),renderItem:Object(n["Z"])(({item:e})=>[Object(n["p"])(u,{key:"item.title"},{extra:Object(n["Z"])(()=>[]),default:Object(n["Z"])(()=>[Object(n["n"])("div",P,[Object(n["n"])("div",null,[e.vod_pic?(Object(n["H"])(),Object(n["m"])("img",{key:0,width:"120",alt:"logo",src:e.vod_pic},null,8,q)):(Object(n["H"])(),Object(n["m"])("img",S))]),Object(n["n"])("div",null,[Object(n["p"])(a,{to:{path:"/play",query:{id:e.vod_id}}},{default:Object(n["Z"])(()=>[Object(n["o"])(Object(n["Q"])(e.vod_name),1)]),_:2},1032,["to"])])])]),_:2},1024)]),_:1},8,["data-source"])}var T=Object(n["q"])({inject:["reload"],setup(){let e=Object(s["c"])().currentRoute.value.query.wd;""!=e&&null!=e&&void 0!=e||(e="all");let t,o=Object(n["K"])();t="dev"==Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_FLAG?Object({NODE_ENV:"production",BASE_URL:""}).VUE_APP_BASEURL:"https://www.zaojingyoutu.top:8000/api/";fetch(t+"movie/?name="+e,{mode:"cors",method:"get"}).then(e=>e.json()).then(e=>{o.value=e.data.list});const c={onChange:e=>{console.log(e)},pageSize:3};return{listData:o,pagination:c,kw:e}},watch:{$route(e,t){e.query.wd!=t.query.wd&&location.reload()}}});const U=a()(T,[["render",R]]);var z=U;const H=[{path:"/",name:"Home",component:w,children:[{path:"/home",name:"Home",component:O},{path:"/play",name:"Play",component:A},{path:"/movue",name:"movue",component:z}]},{path:"/about",name:"About",component:()=>o.e("about").then(o.bind(null,"f820"))}],K=Object(s["a"])({history:Object(s["b"])(""),routes:H});var L=K,V=o("f23d");o("202f");const C=Object(n["j"])(i);C.use(L).use(V["a"]).component("layout",w).mount("#app")},ddbd:function(e,t,o){},eb91:function(e,t,o){"use strict";o("f285")},f285:function(e,t,o){}});
//# sourceMappingURL=app.93cc2d7d.js.map