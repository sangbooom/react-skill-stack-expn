(this["webpackJsonptypescript-practice"]=this["webpackJsonptypescript-practice"]||[]).push([[0],{19:function(t,e,o){t.exports=o(32)},24:function(t,e,o){},31:function(t,e,o){},32:function(t,e,o){"use strict";o.r(e);var n=o(1),r=o.n(n),c=o(16),a=o.n(c),i=(o(24),o(25),o(3)),b=o(8),u=o(18),d=o(2),l=o(0),s=r.a.memo((function(t){var e=t.todos,o=t.onDeleteHandler,c=t.onCheckToggleHandler,a=t.onEditHandler,b=Object(n.useState)(!0),u=Object(i.a)(b,2),s=u[0],j=u[1],h=Object(n.useState)(e.text),p=Object(i.a)(h,2),k=p[0],x=p[1],m=Object(d.f)(),v=Object(l.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:20,marginTop:10,marginBottom:10,border:"0.3px solid #e6e6e6",borderRadius:10,"& div":{display:"flex",flexDirection:"row"},"&:nth-child(2n)":{backgroundColor:"".concat(m.nthBg)}}),C=Object(l.a)({color:"".concat(m.inputText),border:"1px solid ".concat(m.inputBorder),backgroundColor:"".concat(m.inputBackgroundColor)}),B=Object(l.a)({width:20,height:20,boxSizing:"border-box",border:"1px solid ".concat(m.inputBorder),backgroundColor:"".concat(m.background),marginRight:10});return Object(l.b)("div",{css:v},Object(l.b)("div",{onClick:function(){s&&c(e.id)}},e.checked&&s?Object(l.b)(r.a.Fragment,null,Object(l.b)("div",{css:g}),Object(l.b)("div",{css:f},e.text)):s?Object(l.b)(r.a.Fragment,null,Object(l.b)("div",{css:B}),e.text):Object(l.b)("input",{css:C,onChange:function(t){x(t.target.value)},value:k})),Object(l.b)("div",{css:O},Object(l.b)("div",{onClick:function(){return t=e.id,s||e.text===k||a(t,k),void j(!s);var t}},s?"\uc218\uc815":"\uc801\uc6a9"),Object(l.b)("div",{onClick:function(){return o(e.id)}},"\uc0ad\uc81c")))})),g=Object(l.a)({width:20,height:20,backgroundColor:"#03DAC5"}),f=Object(l.a)({textDecoration:"line-through",marginLeft:10}),O=Object(l.a)({"& div":{marginRight:20}}),j=function(t){var e=t.todo,o=t.onDeleteHandler,n=t.onCheckToggleHandler,c=t.onEditHandler;return Object(l.b)(r.a.Fragment,null,e.map((function(t){return Object(l.b)(s,{key:t.id,todos:t,onDeleteHandler:o,onCheckToggleHandler:n,onEditHandler:c})})))},h=function(t){var e=t.onSubmitHandler,o=t.todoInput,n=t.onChangeInput,r=Object(d.f)(),c=Object(l.a)({width:70,backgroundColor:"".concat(r.buttonBg),color:"".concat(r.text),border:"1px solid ".concat(r.buttonBorder),borderRadius:4,transitionDuration:"0.2s",transitionProperty:"color, background-color",cursor:"pointer","&:hover":{backgroundColor:"".concat(r.buttonBgHover),color:"".concat(r.buttonTextHover)}}),a=Object(l.a)({display:"flex",marginBottom:20}),i=Object(l.a)({color:"".concat(r.inputText),border:"1px solid ".concat(r.inputBorder),backgroundColor:"".concat(r.inputBackgroundColor),width:500,height:40,paddingLeft:10,fontSize:20});return Object(l.b)("form",{onSubmit:e,css:a},Object(l.b)("input",{css:i,onChange:n,value:o}),Object(l.b)("button",{css:c},"\ucd94\uac00"))},p=function(t){var e=t.todo,o=t.onSearchHandler,n=e.filter((function(t){return!t.checked})),r=new Date,c=r.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),a=r.toLocaleDateString("ko-KR",{weekday:"long"}),i=Object(d.f)(),b=Object(l.a)({color:"".concat(i.headerMainTitleText),fontSize:50,textAlign:"center"}),u=Object(l.a)({color:"".concat(i.headerSubTitleText),transitionDuration:"0.2s",transitionProperty:"color"}),s=Object(l.a)({color:"#CF6679",transitionDuration:"0.2s",transitionProperty:"color"}),g=Object(l.a)({fontSize:20,width:500,height:40,paddingLeft:10,marginBottom:"0.5rem",color:"".concat(i.inputText),border:"1px solid ".concat(i.inputBorder),backgroundColor:"".concat(i.inputBackgroundColor)});return Object(l.b)("div",null,Object(l.b)("div",{css:b},"TO-DO-LIST"),Object(l.b)("h1",{css:u},c," ",a),Object(l.b)("input",{css:g,onChange:o,placeholder:"\ud560\uc77c \uac80\uc0c9\ud558\uae30"}),Object(l.b)("h2",{css:s},"\ud560 \uc77c ",n.length,"\uac1c \ub0a8\uc74c"))},k=o(17),x=function(t){var e=t.isDark,o=t.setDark,r=Object(n.useState)(""),c=Object(i.a)(r,2),a=c[0],s=c[1],g=Object(n.useState)(JSON.parse(localStorage.getItem("todo"))||[]),f=Object(i.a)(g,2),O=f[0],x=f[1],m=Object(n.useState)(""),v=Object(i.a)(m,2),C=v[0],B=v[1],T=Object(n.useRef)(Math.max.apply(Math,Object(u.a)(JSON.parse(localStorage.getItem("todo")).map((function(t){return t.id}))))+1|1),S=Object(n.useCallback)((function(t){if(t.preventDefault(),a){var e={id:T.current++,text:a,checked:!1};x(O.concat(e)),localStorage.setItem("todo",JSON.stringify(O.concat(e))),s("")}else alert("\ud560 \uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694")}),[O,a]),H=Object(n.useCallback)((function(t){x(O.filter((function(e){return e.id!==t}))),localStorage.setItem("todo",JSON.stringify(O.filter((function(e){return e.id!==t}))))}),[O]),D=Object(n.useCallback)((function(t){x(O.map((function(e){return e.id===t?Object(b.a)(Object(b.a)({},e),{},{checked:!e.checked}):e}))),console.log(O)}),[O]),w=Object(n.useCallback)((function(t,e){x(O.map((function(o){return o.id===t?Object(b.a)(Object(b.a)({},o),{},{text:e}):o}))),s("")}),[O]),y=Object(k.debounce)((function(t){B(t)}),500),I=Object(d.f)(),E=Object(l.a)({maxWidth:540,margin:"auto"}),R=Object(l.a)({overflowY:"auto",height:520,marginBottom:40}),F=Object(l.a)({backgroundColor:"".concat(I.background),color:"".concat(I.text),textAlign:"center",height:"100vh",transitionDuration:"0.2s",transitionProperty:"color, background-color"}),J=Object(l.a)({padding:5,width:90,backgroundColor:"".concat(I.buttonBg),color:"".concat(I.text),border:"1px solid ".concat(I.buttonBorder),borderRadius:4,transitionDuration:"0.2s",transitionProperty:"color, background-color",cursor:"pointer","&:hover":{backgroundColor:"".concat(I.buttonBgHover),color:"".concat(I.buttonTextHover)}});return Object(l.b)("div",{css:F},Object(l.b)("div",{css:E},Object(l.b)(p,{todo:O,onSearchHandler:function(t){y(t.target.value)}}),Object(l.b)(h,{onSubmitHandler:S,onChangeInput:function(t){s(t.target.value)},todoInput:a}),Object(l.b)("div",{css:R},Object(l.b)(j,{todo:O.filter((function(t){return t.text.indexOf(C)>-1})),onDeleteHandler:H,onCheckToggleHandler:D,onEditHandler:w})),Object(l.b)("button",{css:J,onClick:function(){o(!e)}},e?"light mode":"dark mode")))},m=(o(31),{text:"#000",inputText:"#000",inputBorder:"#000",inputBackgroundColor:"#fff",background:"#fff",buttonText:"000",buttonTextHover:"#fff",buttonBorder:"#000",buttonBg:"rgba(0, 0, 0, 0)",buttonBgHover:"rgba(0, 0, 0, 0.7)",nthBg:"#f2f2f2",headerMainTitleText:"#6200EE",headerSubTitleText:"#018786",headerContentText:"B00020"}),v={text:"#fff",inputText:"#fff",inputBorder:"#fff",inputBackgroundColor:"#000",background:"#121212",buttonText:"fff",buttonTextHover:"#000",buttonBorder:"#fff",buttonBg:"rgba(48, 48, 47, 1)",buttonBgHover:"rgba(255, 255, 255, 1)",nthBg:"#30302f",headerMainTitleText:"#BB86FC",headerSubTitleText:"#03DAC6",headerContentText:"CF6679"},C=function(){var t=Object(n.useState)(!1),e=Object(i.a)(t,2),o=e[0],r=e[1];return Object(l.b)(d.c,{theme:o?v:m},Object(l.b)(x,{isDark:o,setDark:r}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.bd5dcf2c.chunk.js.map