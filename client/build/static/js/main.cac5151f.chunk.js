(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{230:function(e,t,n){},232:function(e,t,n){},381:function(e,t,n){},382:function(e,t,n){},383:function(e,t,n){},384:function(e,t,n){},385:function(e,t,n){},386:function(e,t,n){},390:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t);var s,c=n(0),a=n.n(c),r=n(70),i=n.n(r),o=n(72),j=n(6),l=n(189),u=n(30),m=n(173),O=n.n(m),b=n(174),d=n.n(b),h=n(26),x="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAGCAYAAADgzO9IAAAAAXNSR0IArs4c6QAAAExJREFUCB1jbPh/le3lx5tNDIwMcQwg8J9hkTi/eh0LWJCBoRwoAAPlQDEGJrhKmDCIBupmQuYjs5lAZiILgNlAMRaQRSAz4UZCLQcAIwYaiAejKoYAAAAASUVORK5CYII=",A=(n(230),n(1)),p=function(e){var t=e.room;return Object(A.jsxs)("div",{className:"infoBar",children:[Object(A.jsxs)("div",{className:"leftInnerContainer",children:[Object(A.jsx)("img",{className:"onlineIcon",src:x,alt:"online icon"}),Object(A.jsx)("h3",{children:t})]}),Object(A.jsx)("div",{className:"rightInnerContainer",children:Object(A.jsx)("a",{href:"/",children:Object(A.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAAXNSR0IArs4c6QAAAHBJREFUGBmNkAEKwCAMA2VfGP2mrx3sOV2us6IymIXQGlNTW9zdhCqcZQm4dmelFUp+CZZa6sYpeUVIFyIixMqjCO51Wy5unQExuYSbSF5JASLqPsqRM21lOoWc89tagr3PSMgOiWlwnUeXWA/E78IfuAX270S3ydAAAAAASUVORK5CYII=",alt:"close icon"})})})]})},f=(n(232),function(e){var t=e.setMessage,n=e.sendMessage,s=e.message;return Object(A.jsxs)("form",{className:"form",children:[Object(A.jsx)("input",{className:"input",type:"text",placeholder:"Type a message...",value:s,onChange:function(e){var n=e.target.value;return t(n)},onKeyPress:function(e){return"Enter"===e.key?n(e):null}}),Object(A.jsx)("button",{className:"sendButton",onClick:function(e){return n(e)},children:"Send"})]})}),g=n(188),v=n(108),N=n.n(v),C=(n(381),function(e){var t=e.message,n=t.user,s=t.text,c=!1,a=e.name.trim().toLowerCase();return n===a&&(c=!0),c?Object(A.jsxs)("div",{className:"messageContainer justifyEnd",children:[Object(A.jsx)("p",{className:"sentText pr-10",children:a}),Object(A.jsx)("div",{className:"messageBox backgroundBlue",children:Object(A.jsx)("p",{className:"messageText colorWhite",children:N.a.emojify(s)})})]}):Object(A.jsxs)("div",{className:"messageContainer justifyStart",children:[Object(A.jsx)("div",{className:"messageBox backgroundLight",children:Object(A.jsx)("p",{className:"messageText colorDark",children:N.a.emojify(s)})}),Object(A.jsx)("p",{className:"sentText pl-10 ",children:n})]})}),I=(n(382),function(e){var t=e.messages,n=e.name;return Object(A.jsx)(g.a,{className:"messages",children:t.length>0&&t.map((function(e,t){return Object(A.jsx)("div",{children:Object(A.jsx)(C,{message:e,name:n})},t)}))})}),S=(n(383),function(){return Object(A.jsx)("span",{className:"companyName",children:"Chatinger"})}),y=(n(384),function(e){var t=e.users;return Object(A.jsxs)("div",{className:"textContainer",children:[Object(A.jsxs)("div",{children:[Object(A.jsxs)("p",{id:"para",children:["\ud83d\udc49Realtime Chat with ",Object(A.jsx)(S,{})," ",Object(A.jsx)("span",{role:"img","aria-label":"emoji",children:"\ud83d\udcac"})]}),Object(A.jsx)("p",{id:"para",children:"\ud83d\udc49Auto Text-To-Emoji :) -> \ud83d\ude42 "})]}),t?Object(A.jsxs)("div",{children:[Object(A.jsx)("h1",{children:"People currently Chatting:"}),Object(A.jsx)("div",{className:"activeContainer",children:Object(A.jsx)("h2",{children:t.map((function(e){var t=e.name;return Object(A.jsxs)("div",{className:"activeItem",children:[t,Object(A.jsx)("img",{alt:"Online Icon",src:x})]},t)}))})})]}):null]})}),R=(n(385),function(e){var t=e.location,n=Object(c.useState)(""),a=Object(u.a)(n,2),r=a[0],i=a[1],o=Object(c.useState)(""),j=Object(u.a)(o,2),m=j[0],b=j[1],x=Object(c.useState)(""),g=Object(u.a)(x,2),v=g[0],N=g[1],C=Object(c.useState)([]),S=Object(u.a)(C,2),R=S[0],T=S[1],E=Object(c.useState)([]),P=Object(u.a)(E,2),w=P[0],B=P[1],M="https://chatinger-chat-app.herokuapp.com/";Object(c.useEffect)((function(){var e=O.a.parse(t.search),n=e.room,c=e.name;return s=d()(M,{transports:["websocket"]}),i(n),b(c),s.emit("join",{name:c,room:n},(function(e){e&&h.b.error(e,{position:h.b.POSITION.TOP_RIGHT,pauseOnHover:!0,autoClose:2e3})})),function(){s.emit("disconnect"),s.off()}}),[M,t.search]),Object(c.useEffect)((function(){s.on("message",(function(e){T([].concat(Object(l.a)(R),[e]))})),s.on("roomData",(function(e){var t=e.users;B(t)}))}),[R,w]);return Object(A.jsxs)("div",{className:"outerContainer",children:[Object(A.jsxs)("div",{className:"container",children:[Object(A.jsx)(p,{room:r}),Object(A.jsx)(I,{messages:R,name:m}),Object(A.jsx)(f,{message:v,setMessage:N,sendMessage:function(e){e.preventDefault(),v&&s.emit("sendMessage",v,(function(){return N("")}))}})]}),Object(A.jsx)(y,{users:w})]})}),T=(n(386),function(){var e=Object(c.useState)(""),t=Object(u.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(""),r=Object(u.a)(a,2),i=r[0],j=r[1];return Object(A.jsxs)("div",{className:"joinOuterContainer",children:[Object(A.jsx)("div",{className:"mainHeader",children:Object(A.jsxs)("p",{className:"mainHeader__para",children:["Welcome to ",Object(A.jsx)(S,{})," \ud83d\udcac. Connect to your favorite ones \ud83d\ude0d with ",Object(A.jsx)(S,{}),"."]})}),Object(A.jsxs)("div",{className:"joinInnerContainer",children:[Object(A.jsx)("h1",{className:"heading",children:"Join"}),Object(A.jsxs)("form",{autoComplete:"false",children:[Object(A.jsx)("input",{type:"text",placeholder:"Enter Your username",className:"joinInput",value:n,onChange:function(e){return s(e.target.value)}}),Object(A.jsx)("input",{type:"text",placeholder:"Enter Room Name",className:"joinInput",value:i,onChange:function(e){return j(e.target.value)}}),Object(A.jsx)(o.b,{onClick:function(e){"admin"!==n&&"Admin"!==n||(e.preventDefault(),h.b.error("Please choose a different Username!",{autoClose:2e3,pauseOnHover:!0,position:h.b.POSITION.TOP_RIGHT})),""!==n&&""!==i||(e.preventDefault(),h.b.error("Please fill all the fields!",{autoClose:2e3,pauseOnHover:!0,position:h.b.POSITION.TOP_RIGHT}))},to:"/chat?name=".concat(n,"&room=").concat(i),children:Object(A.jsxs)("button",{type:"submit",className:"joinBtn",children:["Join Room",Object(A.jsx)("span",{children:"\ud83d\udc49"})]})})]})]})]})}),E=(n(389),function(){return Object(A.jsxs)(o.a,{children:[Object(A.jsx)(h.a,{}),Object(A.jsxs)(j.c,{children:[Object(A.jsx)(j.a,{path:"/",exact:!0,component:T}),Object(A.jsx)(j.a,{path:"/chat",component:R})]})]})});n(390);i.a.render(Object(A.jsx)(a.a.StrictMode,{children:Object(A.jsx)(E,{})}),document.getElementById("root"))}},[[391,1,2]]]);
//# sourceMappingURL=main.cac5151f.chunk.js.map