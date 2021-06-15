(this["webpackJsonptypescript-practice"]=this["webpackJsonptypescript-practice"]||[]).push([[0],{40:function(t,e,o){t.exports=o(62)},45:function(t,e,o){},61:function(t,e,o){},62:function(t,e,o){"use strict";o.r(e);var n=o(1),c=o.n(n),r=o(15),i=o.n(r),a=(o(45),o(46),o(14)),d=o(11),u=o(3),b=c.a.memo((function(t){var e=t.todos,o=t.onDeleteHandler,r=t.onCheckToggleHandler,i=t.onEditHandler,b=t.style,f=Object(n.useState)(!0),O=Object(a.a)(f,2),h=O[0],j=O[1],p=Object(n.useState)(e.text),m=Object(a.a)(p,2),x=m[0],v=m[1],k=Object(d.f)(),S=Object(u.a)({display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",padding:20,border:"0.3px solid #e6e6e6",borderRadius:10,"& div":{display:"flex",flexDirection:"row"},"&:nth-of-type(2n)":{backgroundColor:"".concat(k.nthBg)}}),T=Object(u.a)({color:"".concat(k.inputText),border:"1px solid ".concat(k.inputBorder),backgroundColor:"".concat(k.inputBackgroundColor)}),C=Object(u.a)({width:20,height:20,boxSizing:"border-box",border:"1px solid ".concat(k.inputBorder),backgroundColor:"".concat(k.background),marginRight:10});return Object(u.b)("div",{css:S,style:b},Object(u.b)("div",{onClick:function(){h&&r(e.id)}},e.checked&&h?Object(u.b)(c.a.Fragment,null,Object(u.b)("div",{css:l}),Object(u.b)("div",{css:s},e.text)):h?Object(u.b)(c.a.Fragment,null,Object(u.b)("div",{css:C}),e.text):Object(u.b)("input",{css:T,onChange:function(t){v(t.target.value)},value:x})),Object(u.b)("div",{css:g},Object(u.b)("div",{onClick:function(){return t=e.id,h||e.text===x||i(t,x),void j(!h);var t}},h?"\uc218\uc815":"\uc801\uc6a9"),Object(u.b)("div",{onClick:function(){return o(e.id)}},"\uc0ad\uc81c")))})),l=Object(u.a)({width:20,height:20,backgroundColor:"#03DAC5"}),s=Object(u.a)({textDecoration:"line-through",marginLeft:10}),g=Object(u.a)({"& div":{marginRight:20}}),f=o(39),O=c.a.memo((function(t){var e=t.todo,o=t.onDeleteHandler,c=t.onCheckToggleHandler,r=t.onEditHandler,i=Object(n.useCallback)((function(t){var n=t.index,i=t.key,a=t.style,d=e[n];return Object(u.b)(b,{key:i,todos:d,onDeleteHandler:o,onCheckToggleHandler:c,onEditHandler:r,style:a})}),[e,o,c,r]);return Object(u.b)(f.a,{width:520,height:520,rowCount:e.length,rowHeight:65,rowRenderer:i,list:e,style:{outline:"none"}})})),h=c.a.memo((function(t){var e=t.onSubmitHandler,o=t.todoInput,n=t.onChangeInput,c=Object(d.f)(),r=Object(u.a)({width:70,backgroundColor:"".concat(c.buttonBg),color:"".concat(c.text),border:"1px solid ".concat(c.buttonBorder),borderRadius:4,transitionDuration:"0.2s",transitionProperty:"color, background-color",cursor:"pointer","&:hover":{backgroundColor:"".concat(c.buttonBgHover),color:"".concat(c.buttonTextHover)}}),i=Object(u.a)({display:"flex",marginBottom:20}),a=Object(u.a)({color:"".concat(c.inputText),border:"1px solid ".concat(c.inputBorder),backgroundColor:"".concat(c.inputBackgroundColor),width:"100%",height:40,paddingLeft:10,fontSize:20});return Object(u.b)("form",{onSubmit:e,css:i},Object(u.b)("input",{css:a,onChange:n,value:o}),Object(u.b)("button",{css:r},"\ucd94\uac00"))})),j=c.a.memo((function(t){var e=t.todo,o=t.onSearchHandler,n=e.filter((function(t){return!t.checked})),c=new Date,r=c.toLocaleDateString("ko-KR",{year:"numeric",month:"long",day:"numeric"}),i=c.toLocaleDateString("ko-KR",{weekday:"long"}),a=Object(d.f)(),b=Object(u.a)({color:"".concat(a.headerMainTitleText),fontSize:50,textAlign:"center","@media(min-width: 280px)":{fontSize:30},"@media(min-width: 480px)":{fontSize:40},"@media(min-width: 768px)":{fontSize:50}}),l=Object(u.a)({color:"".concat(a.headerSubTitleText),transitionDuration:"0.2s",transitionProperty:"color","@media(min-width: 280px)":{fontSize:18},"@media(min-width: 480px)":{fontSize:24},"@media(min-width: 768px)":{fontSize:28}}),s=Object(u.a)({color:"#CF6679",transitionDuration:"0.2s",transitionProperty:"color"}),g=Object(u.a)({fontSize:20,width:"100%",height:40,paddingLeft:10,marginBottom:"0.5rem",color:"".concat(a.inputText),border:"1px solid ".concat(a.inputBorder),backgroundColor:"".concat(a.inputBackgroundColor)});return Object(u.b)("div",null,Object(u.b)("div",{css:b},"TO-DO-LIST"),Object(u.b)("h1",{css:l},r," ",i),Object(u.b)("input",{css:g,onChange:o,placeholder:"\ud560\uc77c \uac80\uc0c9\ud558\uae30"}),Object(u.b)("h2",{css:s},"\ud560 \uc77c ",n.length,"\uac1c \ub0a8\uc74c"))})),p=o(37);var m=o(22),x=o(12),v=o(20),k=o(23);Object(x.c)({todos:I});var S={list:function(){for(var t=[],e=0;e<1e3;e++)t.push({id:"".concat(e),text:"".concat(e),checked:!1});return t}()},T=Object(v.a)("".concat("TODOS","/add")),C=Object(v.a)("".concat("TODOS","/toggle")),w=Object(v.a)("".concat("TODOS","/remove")),B=Object(v.a)("".concat("TODOS","/edit")),y=Object(v.b)({name:"TODOS",initialState:S,reducers:{add:function(t,e){var o=t.list,n=e.payload.text,c={id:Math.random().toString(36).substring(2,13),text:n.toString().trim(),checked:!1};o.unshift(c),localStorage.setItem("todo",JSON.stringify(o))},toggle:function(t,e){var o=t.list,n=e.payload.id,c=o.findIndex((function(t){return t.id===n}));o[c].checked=!o[c].checked,localStorage.setItem("todo",JSON.stringify(o))},remove:function(t,e){var o=t.list,n=e.payload.id;o.splice(o.findIndex((function(t){return t.id===n})),1),localStorage.setItem("todo",JSON.stringify(o.filter((function(t){return t.id!==n}))))},edit:function(t,e){var o=t.list,n=e.payload,c=n.id,r=n.text,i=o.findIndex((function(t){return t.id===c}));o[i].text=r,localStorage.setItem("todo",JSON.stringify(o))}}}),D=Object(k.a)((function(t){return t.list}),(function(t){return t})),H={addTodos:T,toggleTodos:C,removeTodos:w,editTodos:B},E=Object(x.c)({todos:y.reducer});console.log(y);var I=function(t){var e=t.isDark,o=t.setDark,c=Object(m.b)(),r=Object(m.c)((function(t){return D(t.todos)})),i=Object(n.useState)(""),b=Object(a.a)(i,2),l=b[0],s=b[1],g=Object(n.useState)([]),f=Object(a.a)(g,2),x=f[0],v=f[1],k=Object(n.useState)(""),S=Object(a.a)(k,2),T=S[0],C=S[1],w=Object(n.useState)(0),B=Object(a.a)(w,2),y=B[0],E=B[1],I=Object(d.f)(),z=function(){var t=Object(n.useState)({width:0,height:0}),e=Object(a.a)(t,2),o=e[0],c=e[1];return Object(n.useEffect)((function(){function t(){c({width:window.innerWidth,height:window.innerHeight})}return window.addEventListener("resize",t),t(),function(){return window.removeEventListener("resize",t)}}),[]),o}();Object(n.useEffect)((function(){v(r)}),[r]),Object(n.useEffect)((function(){var t,e=null===(t=document.getElementById("container"))||void 0===t?void 0:t.clientHeight;E(e)}),[]);var L=Object(n.useCallback)((function(t){t.preventDefault(),l?(c(H.addTodos({text:l,checked:!1})),s("")):alert("\ud560 \uc77c\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694")}),[c,l]),R=Object(n.useCallback)((function(t){c(H.removeTodos({id:t}))}),[c]),_=Object(n.useCallback)((function(t){c(H.toggleTodos({id:t}))}),[c]),N=Object(n.useCallback)((function(t,e){c(H.editTodos({id:t,text:e})),s("")}),[c]),J=Object(p.debounce)((function(t){C(t)}),500),F=Object(u.a)({height:"100%",backgroundColor:"".concat(I.background),color:"".concat(I.text),textAlign:"center",transitionDuration:"0.2s",transitionProperty:"color, background-color"}),M=Object(u.a)({maxWidth:540,marginLeft:"auto",marginRight:"auto","@media(min-width: 280px)":{paddingLeft:10,paddingRight:10}}),P=Object(u.a)({overflowY:"auto",height:520,marginBottom:40}),A=Object(u.a)({padding:5,width:90,backgroundColor:"".concat(I.buttonBg),color:"".concat(I.text),border:"1px solid ".concat(I.buttonBorder),borderRadius:4,transitionDuration:"0.2s",transitionProperty:"color, background-color",cursor:"pointer","&:hover":{backgroundColor:"".concat(I.buttonBgHover),color:"".concat(I.buttonTextHover)},"@media(min-width: 280px)":{marginBottom:40},"@media(min-width: 768px)":{marginBottom:z.height-y}});return Object(u.b)("div",{id:"container",css:F},Object(u.b)("div",{css:M},Object(u.b)(j,{todo:x,onSearchHandler:function(t){J(t.target.value)}}),Object(u.b)(h,{onSubmitHandler:L,onChangeInput:function(t){s(t.target.value)},todoInput:l}),Object(u.b)("div",{css:P},Object(u.b)(O,{todo:x.filter((function(t){return t.text.indexOf(T)>-1})),onDeleteHandler:R,onCheckToggleHandler:_,onEditHandler:N})),Object(u.b)("button",{css:A,onClick:function(){o(!e)}},e?"light mode":"dark mode")))},z=(o(61),{text:"#000",inputText:"#000",inputBorder:"#000",inputBackgroundColor:"#fff",background:"#fff",buttonText:"000",buttonTextHover:"#fff",buttonBorder:"#000",buttonBg:"rgba(0, 0, 0, 0)",buttonBgHover:"rgba(0, 0, 0, 0.7)",nthBg:"#f2f2f2",headerMainTitleText:"#6200EE",headerSubTitleText:"#018786",headerContentText:"B00020"}),L={text:"#fff",inputText:"#fff",inputBorder:"#fff",inputBackgroundColor:"#000",background:"#121212",buttonText:"fff",buttonTextHover:"#000",buttonBorder:"#fff",buttonBg:"rgba(48, 48, 47, 1)",buttonBgHover:"rgba(255, 255, 255, 1)",nthBg:"#30302f",headerMainTitleText:"#BB86FC",headerSubTitleText:"#03DAC6",headerContentText:"CF6679"},R=function(){var t=Object(n.useState)(!1),e=Object(a.a)(t,2),o=e[0],c=e[1];return Object(u.b)(d.c,{theme:o?L:z},Object(u.b)(I,{isDark:o,setDark:c}))},_=Object(x.e)(E,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(m.a,{store:_},c.a.createElement(R,null))),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.cb12b772.chunk.js.map