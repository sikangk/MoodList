(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8e3:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.AmpStateContext=void 0;var o=(0,n(2648).Z)(n(7294)).default.createContext({});t.AmpStateContext=o},9470:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isInAmpMode=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=e.hybrid,o=e.hasQuery;return void 0!==t&&t||void 0!==n&&n&&void 0!==o&&o}},2717:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=s,t.default=void 0;var o=n(6495).Z,i=n(2648).Z,r=(0,n(1598).Z)(n(7294)),a=i(n(1585)),u=n(8e3),c=n(5850),d=n(9470);function s(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function l(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"==typeof t||"number"==typeof t?e:e.concat(t)},[])):e.concat(t)}n(9475);var p=["name","httpEquiv","charSet","itemProp"];function $(e,t){var n,i,a,u,c=t.inAmpMode;return e.reduce(l,[]).reverse().concat(s(c).reverse()).filter((n=new Set,i=new Set,a=new Set,u={},function(e){var t=!0,o=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){o=!0;var r=e.key.slice(e.key.indexOf("$")+1);n.has(r)?t=!1:n.add(r)}switch(e.type){case"title":case"base":i.has(e.type)?t=!1:i.add(e.type);break;case"meta":for(var c=0,d=p.length;c<d;c++){var s=p[c];if(e.props.hasOwnProperty(s)){if("charSet"===s)a.has(s)?t=!1:a.add(s);else{var l=e.props[s],$=u[s]||new Set;("name"!==s||!o)&&$.has(l)?t=!1:($.add(l),u[s]=$)}}}}return t})).reverse().map(function(e,t){var n=e.key||t;if(!c&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(function(t){return e.props.href.startsWith(t)})){var i=o({},e.props||{});return i["data-href"]=i.href,i.href=void 0,i["data-optimized-fonts"]=!0,r.default.cloneElement(e,i)}return r.default.cloneElement(e,{key:n})})}var f=function(e){var t=e.children,n=r.useContext(u.AmpStateContext),o=r.useContext(c.HeadManagerContext);return r.default.createElement(a.default,{reduceComponentsToState:$,headManager:o,inAmpMode:d.isInAmpMode(n)},t)};t.default=f,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1585:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t,n=e.headManager,u=e.reduceComponentsToState;function c(){if(n&&n.mountedInstances){var t=o.Children.toArray(Array.from(n.mountedInstances).filter(Boolean));n.updateHead(u(t,e))}}return i&&(null==n||null==(t=n.mountedInstances)||t.add(e.children),c()),r(function(){var t;return null==n||null==(t=n.mountedInstances)||t.add(e.children),function(){var t;null==n||null==(t=n.mountedInstances)||t.delete(e.children)}}),r(function(){return n&&(n._pendingUpdate=c),function(){n&&(n._pendingUpdate=c)}}),a(function(){return n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null),function(){n&&n._pendingUpdate&&(n._pendingUpdate(),n._pendingUpdate=null)}}),null};var o=(0,n(1598).Z)(n(7294)),i=!1,r=i?function(){}:o.useLayoutEffect,a=i?function(){}:o.useEffect},2119:function(e,t,n){"use strict";n.r(t);var o=n(9008),i=n.n(o),r=n(214),a=n.n(r),u=n(4790),c=n(5893),d="y"===n(3454).env.REACT_APP_IS_PRODUCTION,s=function(){return d&&(console.log=function(){},console.error=function(){},console.debug=function(){}),(0,c.jsxs)("div",{className:a().container,children:[(0,c.jsxs)(i(),{children:[(0,c.jsx)("title",{children:"Mood List"}),(0,c.jsx)("meta",{name:"당신의 감정에 따라",content:"당신의 감정에 맞는 음악을 감상해보세요."}),(0,c.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,c.jsx)(u.default,{})]})};t.default=s},4790:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return m}});var o,i=n(29),r=n(7794),a=n.n(r),u=n(7294),c=n(9521),d={search:"https://www.googleapis.com/youtube/v3/search"},s=n(9669),l=n.n(s),p=(o=(0,i.Z)(a().mark(function e(t){var n;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}},e)})),function(e){return o.apply(this,arguments)}),$=n(3191),f=n(5893),h="y"===n(3454).env.REACT_APP_IS_PRODUCTION?"https://sikangk.github.io/MoodList":"",m=function(){var e=(0,u.useState)(""),t=e[0],n=e[1],o=(0,u.useState)(null),r=o[0],c=o[1],s=(0,u.useState)(!1),l=s[0],m=s[1],v=(0,u.useState)(null),g=v[0],E=v[1],b=(0,u.useMemo)(function(){return[{id:1,mood:"행복",value:"행복한 음악",img:"".concat(h,"/styles/image/행복.png"),color:"#F4E3DC"},{id:2,mood:"슬픔",value:"슬픈 음악",img:"".concat(h,"/styles/image/슬픔.png"),color:"#0067A3"},{id:3,mood:"고독",value:"고독한 음악",img:"".concat(h,"/styles/image/고독함.png"),color:"#808080"},{id:4,mood:"쾌활",value:"쾌활한 음악",img:"".concat(h,"/styles/image/쾌활함.png"),color:"#FFFF00"},{id:5,mood:"사랑",value:"사랑 음악",img:"".concat(h,"/styles/image/사랑.png"),color:"#A83F39"},{id:6,mood:"힘듦",value:"힘들때 듣는 음악",img:"".concat(h,"/styles/image/힘듦.png"),color:"#8B00FF"}]},[]);(0,u.useEffect)(function(){I()},[]),(0,u.useEffect)(function(){return window.addEventListener("resize",I),function(){return window.removeEventListener("resize",I)}},[r]);var A,I=function(){setTimeout(function(){n("".concat(window.innerHeight,"px"))},1e3)},P=(A=(0,i.Z)(a().mark(function e(t){var n,o,i,r,u;return a().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return m(!1),setTimeout(function(){m(!0)},3e3),e.prev=2,e.next=5,p(d.search+"?part=snippet&q=".concat(t,"&maxResults=10&order=viewCount&key=AIzaSyCZtze9Mpjl7KnNA7RiXJYmg5LJVBu5nqo"));case 5:c(null===(n=(u=(r=(i=e.sent).data).items)[Math.floor(9*Math.random())])||void 0===n?void 0:null===(o=n.id)||void 0===o?void 0:o.videoId),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(2),console.error(e.t0);case 15:case"end":return e.stop()}},e,null,[[2,12]])})),function(e){return A.apply(this,arguments)});return(0,f.jsxs)(y,{children:[r&&(0,f.jsx)(C,{children:(0,f.jsx)($.Z,{videoId:r,opts:{width:"100%",height:t,playerVars:{autoplay:1,rel:0,modestbranding:1,controls:0}}})}),(0,f.jsx)(_,{children:(0,f.jsx)(x,{opacityValue:l,children:b.map(function(e,t){return(0,f.jsxs)(w,{onClick:function(){P(e.value),E(e.id)},color:null==e?void 0:e.color,playing:g===e.id,children:[(0,f.jsx)(k,{src:e.img}),(0,f.jsx)("div",{})]},e.id)})})})]})},v=(0,c.F4)(["from{opacity:1;}to{opacity:0.3;}"]),g=(0,c.F4)(["from{opacity:0.3;}to{opacity:1;}"]),y=c.ZP.div.withConfig({displayName:"main__Background",componentId:"sc-1kyg5ad-0"})(["width:100%;height:100vh;position:relative;display:flex;justify-content:center;align-items:center;"]),_=c.ZP.div.withConfig({displayName:"main__Container",componentId:"sc-1kyg5ad-1"})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;position:absolute;"]),C=c.ZP.div.withConfig({displayName:"main__VideoWrap",componentId:"sc-1kyg5ad-2"})(["position:absolute;z-Index:-99;width:100%;height:100vh;"]),x=c.ZP.div.withConfig({displayName:"main__MoodWrap",componentId:"sc-1kyg5ad-3"})(["width:80%;height:50vh;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;cursor:pointer;opacity:",";animation:"," 3s;&:hover{opacity:1;}"],function(e){return e.opacityValue?.3:1},function(e){return e.opacityValue?v:g}),w=c.ZP.div.withConfig({displayName:"main__MoodBox",componentId:"sc-1kyg5ad-4"})(["position:relative;width:30%;height:25vh;display:flex;justify-content:center;align-items:center;background-color:",";box-shadow:5px 5px 5px 0;div{display:",";position:absolute;width:100%;height:25vh;background-color:rgba(0,0,0,0.5);}&:hover{div{display:flex;}}"],function(e){return e.color},function(e){return e.playing?"block":"none"}),k=c.ZP.img.attrs({alt:"감정 이미지"}).withConfig({displayName:"main__MoodImg",componentId:"sc-1kyg5ad-5"})(["width:50px;height:50px;"])},8312:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2119)}])},214:function(){},9008:function(e,t,n){e.exports=n(2717)}},function(e){e.O(0,[333,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);