(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{22:function(t,e,n){t.exports={item:"item_item__1X0id"}},23:function(t,e,n){t.exports={list:"list_list__3xShV"}},30:function(t,e,n){},31:function(t,e,n){},4:function(t,e,n){t.exports={navbar:"navbar_navbar__3BC5F",logo:"navbar_logo__1f0ea",title:"navbar_title__29bHH",form:"navbar_form__1MkKW",button:"navbar_button__3ugph",input:"navbar_input__3LIJ6",count:"navbar_count__L7ovF",habits:"navbar_habits__2JLn0","add-input":"navbar_add-input__2xuBX","add-button":"navbar_add-button__j62EJ"}},56:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n(3),c=n.n(r),o=n(8),i=n.n(o),s=(n(30),n(20)),u=n(21),l=n(25),d=n(24),p=(n(31),n(32),n(22)),b=n.n(p),h=function(t){return Object(a.jsxs)(a.Fragment,{children:[console.log("item",t.id),Object(a.jsxs)("div",{id:t.id,className:b.a.item,onClick:function(e){t.onPlayVideo(e.target.parentNode.id)},children:[Object(a.jsx)("img",{src:t.thumbnail}),Object(a.jsx)("span",{children:t.title})]})]})},f=n(23),v=n.n(f),j=function(t){var e=function(e){t.onPlayVideo(e)};return Object(a.jsxs)(a.Fragment,{children:[console.log("list",t.items),Object(a.jsx)("div",{className:v.a.list,children:t.items.map((function(t){var n="object"===typeof t.id?t.id.videoId:t.id,r=t.snippet.title,c=t.snippet.thumbnails.high.url;return Object(a.jsx)(h,{id:n,title:r,thumbnail:c,onPlayVideo:e},n)}))})]})},m=n(4),x=n.n(m),_=function(t){var e=Object(r.useRef)(),n=Object(r.useRef)();return Object(a.jsx)("header",{className:x.a.navbar,children:Object(a.jsx)("form",{ref:n,onSubmit:function(n){n.preventDefault();var a=e.current.value;console.log(a),t.onSearch(a)},children:Object(a.jsxs)("div",{className:x.a.form,children:[Object(a.jsx)("img",{className:x.a.logo,src:"/biryangtube/images/logo.png"}),Object(a.jsx)("span",{className:x.a.title,children:"BiryangTube\u2122"}),Object(a.jsx)("input",{type:"text",className:x.a.input,placeholder:"Search",ref:e}),Object(a.jsx)("button",{className:x.a.button,children:Object(a.jsx)("i",{className:"fas fa-search"})})]})})})},g=n(2),O=n.n(g),y=n(5),w=n(9),S=n.n(w),k="https://www.googleapis.com/youtube/v3",N="&key=".concat("AIzaSyA-MyjhsOLuYHMgSN6dr-D__31sbMJ-g4U"),I={method:"get",headers:{}},L=function(){var t=Object(y.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I.url="".concat(k).concat("/videos?part=snippet&chart=mostPopular&maxResults=25").concat(N),t.next=3,S()(I).then(function(){var t=Object(y.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("response Popular",e.data.items),t.abrupt("return",e.data.items);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(y.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("error"),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),P=function(){var t=Object(y.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return I.url="".concat(k).concat("/search?part=snippet&maxResults=25&type=video&q=").concat(e).concat(N),t.next=3,S()(I).then(function(){var t=Object(y.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("response Search",e.data.items),t.abrupt("return",e.data.items);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()).catch(function(){var t=Object(y.a)(O.a.mark((function t(e){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("error"),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:return t.abrupt("return",t.sent);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),F=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(t=e.call.apply(e,[this].concat(r))).state={videoList:[],videoId:""},t.onSearch=function(e){console.log("onSearch",e),P(e).then((function(e){var n=e;t.setState({videoList:n,videoId:""})}))},t.onPlayVideo=function(e){t.setState({videoId:e})},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=this;L().then((function(e){var n=e;t.setState({videoList:n})}))}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(_,{onSearch:this.onSearch}),Object(a.jsx)("div",{className:"video-container",children:this.state.videoId?Object(a.jsx)("iframe",{id:"ytplayer",type:"text/html",width:"720",height:"405",src:"https://www.youtube.com/embed/".concat(this.state.videoId),frameborder:"0",allowfullscreen:!0}):""}),Object(a.jsx)(j,{items:this.state.videoList,onPlayVideo:this.onPlayVideo})]})}}]),n}(r.Component),V=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,o=e.getTTFB;n(t),a(t),r(t),c(t),o(t)}))};n(53);i.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(F,{})}),document.getElementById("root")),V()}},[[56,1,2]]]);
//# sourceMappingURL=main.a5bad358.chunk.js.map