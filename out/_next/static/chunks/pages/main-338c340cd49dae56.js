(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[671],{4790:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return m}});var i,o=e(29),a=e(7794),r=e.n(a),c=e(7294),s=e(9521),u={search:"https://www.googleapis.com/youtube/v3/search"},d=e(9669),$=e.n(d),l=(i=(0,o.Z)(r().mark(function t(n){var e;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,$().get(n);case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}},t)})),function(t){return i.apply(this,arguments)}),p=e(3191),h=e(5893),g="y"===e(3454).env.REACT_APP_IS_PRODUCTION?"https://sikangk.github.io/MoodList":"",m=function(){var t=(0,c.useState)(""),n=t[0],e=t[1],i=(0,c.useState)(null),a=i[0],s=i[1],d=(0,c.useState)(!1),$=d[0],m=d[1],f=(0,c.useState)(null),v=f[0],b=f[1],j=(0,c.useMemo)(function(){return[{id:1,mood:"행복",value:"행복한 음악",img:"".concat(g,"/styles/image/행복.png"),color:"#F4E3DC"},{id:2,mood:"슬픔",value:"슬픈 음악",img:"".concat(g,"/styles/image/슬픔.png"),color:"#0067A3"},{id:3,mood:"고독",value:"고독한 음악",img:"".concat(g,"/styles/image/고독함.png"),color:"#808080"},{id:4,mood:"쾌활",value:"쾌활한 음악",img:"".concat(g,"/styles/image/쾌활함.png"),color:"#FFFF00"},{id:5,mood:"사랑",value:"사랑 음악",img:"".concat(g,"/styles/image/사랑.png"),color:"#A83F39"},{id:6,mood:"힘듦",value:"힘들때 듣는 음악",img:"".concat(g,"/styles/image/힘듦.png"),color:"#8B00FF"}]},[]);(0,c.useEffect)(function(){E()},[]),(0,c.useEffect)(function(){return window.addEventListener("resize",E),function(){return window.removeEventListener("resize",E)}},[a]);var I,E=function(){setTimeout(function(){e("".concat(window.innerHeight,"px"))},1e3)},F=(I=(0,o.Z)(r().mark(function t(n){var e,i,o,a,c;return r().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return m(!1),setTimeout(function(){m(!0)},3e3),t.prev=2,t.next=5,l(u.search+"?part=snippet&q=".concat(n,"&maxResults=10&order=viewCount&key=AIzaSyCZtze9Mpjl7KnNA7RiXJYmg5LJVBu5nqo"));case 5:s(null===(e=(c=(a=(o=t.sent).data).items)[Math.floor(9*Math.random())])||void 0===e?void 0:null===(i=e.id)||void 0===i?void 0:i.videoId),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(2),console.error(t.t0);case 15:case"end":return t.stop()}},t,null,[[2,12]])})),function(t){return I.apply(this,arguments)});return(0,h.jsxs)(y,{children:[a&&(0,h.jsx)(x,{children:(0,h.jsx)(p.Z,{videoId:a,opts:{width:"100%",height:n,playerVars:{autoplay:1,rel:0,modestbranding:1,controls:0}}})}),(0,h.jsx)(_,{children:(0,h.jsx)(w,{opacityValue:$,children:j.map(function(t,n){return(0,h.jsxs)(C,{onClick:function(){F(t.value),b(t.id)},color:null==t?void 0:t.color,playing:v===t.id,children:[(0,h.jsx)(k,{src:t.img}),(0,h.jsx)("div",{})]},t.id)})})})]})},f=(0,s.F4)(["from{opacity:1;}to{opacity:0.3;}"]),v=(0,s.F4)(["from{opacity:0.3;}to{opacity:1;}"]),y=s.ZP.div.withConfig({displayName:"main__Background",componentId:"sc-1kyg5ad-0"})(["width:100%;height:100vh;position:relative;display:flex;justify-content:center;align-items:center;"]),_=s.ZP.div.withConfig({displayName:"main__Container",componentId:"sc-1kyg5ad-1"})(["width:100%;height:100vh;display:flex;justify-content:center;align-items:center;position:absolute;"]),x=s.ZP.div.withConfig({displayName:"main__VideoWrap",componentId:"sc-1kyg5ad-2"})(["position:absolute;z-Index:-99;width:100%;height:100vh;"]),w=s.ZP.div.withConfig({displayName:"main__MoodWrap",componentId:"sc-1kyg5ad-3"})(["width:80%;height:50vh;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;cursor:pointer;opacity:",";animation:"," 3s;&:hover{opacity:1;}"],function(t){return t.opacityValue?.3:1},function(t){return t.opacityValue?f:v}),C=s.ZP.div.withConfig({displayName:"main__MoodBox",componentId:"sc-1kyg5ad-4"})(["position:relative;width:30%;height:25vh;display:flex;justify-content:center;align-items:center;background-color:",";box-shadow:5px 5px 5px 0;div{display:",";position:absolute;width:100%;height:25vh;background-color:rgba(0,0,0,0.5);}&:hover{div{display:flex;}}"],function(t){return t.color},function(t){return t.playing?"block":"none"}),k=s.ZP.img.attrs({alt:"감정 이미지"}).withConfig({displayName:"main__MoodImg",componentId:"sc-1kyg5ad-5"})(["width:50px;height:50px;"])},6059:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/main",function(){return e(4790)}])}},function(t){t.O(0,[333,774,888,179],function(){return t(t.s=6059)}),_N_E=t.O()}]);