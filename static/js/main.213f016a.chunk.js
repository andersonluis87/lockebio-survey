(this["webpackJsonplockebio-survey"]=this["webpackJsonplockebio-survey"]||[]).push([[0],{125:function(e,t,n){},129:function(e,t,n){},132:function(e,t,n){},138:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(30),r=n.n(i),l=(n(125),n(188)),o=n(201),s=n(200),j=n(202),d=n(199),u=n(198),b=n(103),h=n(197),x=n(99),O=n(16),m=n(18),f=n(13),v=n(59),p=function(){return Object(v.b)()},y=v.c,g=(n(129),n(71)),k=Object(g.b)({name:"survey",initialState:[],reducers:{save:function(e,t){e.push(t.payload)},saveSurvey:function(e,t){console.log("payload: ",t.payload)}}}),w=k.actions,C=w.save,S=w.saveSurvey,F=function(e){return e.survey},q=k.reducer,_=n(207),T=n(190),N=n(203),W=n(208),z=n(192),A=n(189),I=n(147),L=n(205),Q=n(194),R=n(2),B=function(){var e=p(),t=y(F),n=Object(c.useRef)(null),a=Object(c.useState)([]),i=Object(f.a)(a,2),r=i[0],l=i[1],o=Object(c.useState)(!0),j=Object(f.a)(o,2),d=j[0],b=j[1],h=Object(c.useState)(!1),x=Object(f.a)(h,2),O=x[0],v=x[1],g=function(){return v(!0)},k=function(){return v(!1)},w={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:600,bgcolor:"background.paper",border:"2px solid #000",boxShadow:24,p:4},C=function(){l(t),b(!1)},q=function(e,t,n){var c=e.target.value,a=t,i=!(!r||!r.length)&&r.find((function(e){return e.title===t.title})),o="checkbox"===t.typeField;if(!i&&!o)return a.answer=c,void l([].concat(Object(m.a)(r),[a]));a.answer=c;var s=r.filter((function(e){return e.title===a.title&&(e.answer=c),e}));s&&l(s)},B=function(e,t){var c=e.name,a=e.title,i=e.typeField,o=e.children,s=e.answer,j={text:function(){return Object(R.jsx)("div",{children:Object(R.jsx)(A.a,{id:"answer_".concat(t),fullWidth:!0,margin:"normal",variant:"filled",name:"question_".concat(t),label:a,value:s,onChange:function(e){return q(e,{name:c,title:a,typeField:i,children:o,answer:s})}})},t)},file:function(){var e;return Object(R.jsxs)("div",{children:[Object(R.jsx)(W.a,{htmlFor:"answer_".concat(t),children:a}),Object(R.jsxs)(_.a,{variant:"outlined",component:"label",children:["Upload File",Object(R.jsx)("input",{hidden:!0,ref:n,id:"answer_".concat(t),type:i,name:"question_".concat(t),value:s,onChange:function(e){return q(e,{name:c,title:a,typeField:i,children:o,answer:s})}})]}),n&&n.current&&(null===(e=n.current)||void 0===e?void 0:e.value)]},t)},checkbox:function(){return Object(R.jsxs)("div",{children:[Object(R.jsx)(W.a,{htmlFor:"answer_".concat(t),children:a}),o&&o.map((function(e,n){var j=e.title;return Object(R.jsx)(I.a,{children:Object(R.jsx)(L.a,{control:Object(R.jsx)(Q.a,{id:"answer_".concat(t,"-").concat(n),onChange:function(e){return function(e,t,n){var c=e.target.checked,a=r.findIndex((function(e){return e.title===t.title})),i=r;i[a].children[n].checked=c,l(Object(m.a)(i))}(e,{name:c,title:a,typeField:i,children:o,answer:s},n)}}),label:j})},n)}))]},t)}};return i&&j[i]&&j[i]()};return Object(c.useEffect)((function(){C()}),[C]),d?Object(R.jsx)("div",{children:"Loading..."}):Object(R.jsxs)("div",{className:"survey",children:[Object(R.jsx)(u.a,{component:"h1",variant:"h4",align:"center",children:"Lockebio Survey"}),Object(R.jsx)(s.a,{sx:{mb:4,mt:4}}),O?function(){if(r)return Object(R.jsxs)("div",{children:[Object(R.jsx)(_.a,{onClick:g,children:"Open modal"}),Object(R.jsx)(T.a,{open:O,onClose:k,"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",children:Object(R.jsxs)(N.a,{sx:w,children:[Object(R.jsx)(u.a,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Thanks for answering!"}),Object(R.jsxs)(u.a,{id:"modal-modal-description",sx:{mt:2},children:["This is your summary:",Object(R.jsx)("ul",{children:r.map((function(e,t){return"checkbox"===e.typeField?Object(R.jsxs)("li",{children:[Object(R.jsx)("span",{children:Object(R.jsx)("strong",{children:e.title})}),Object(R.jsx)("ul",{className:"sublist",children:e.children.map((function(e,t){return Object(R.jsxs)("li",{children:[e.title,": ",!0===e.checked?"Yes":"No"]},t)}))})]},t):Object(R.jsxs)("li",{children:[Object(R.jsx)("span",{children:Object(R.jsxs)("strong",{children:[e.title,"\xa0"]})}),Object(R.jsx)("span",{children:e.answer})]},t)}))})]})]})})]})}():null,Object(R.jsx)("div",{className:"survey__list",children:function(){if(r&&(!r||r.length))return r.map((function(e,t){return B(e,t)}))}()}),r&&r.length?Object(R.jsx)(_.a,{variant:"contained",onClick:function(){e(S(r)),setTimeout((function(){g()}),2e3)},children:"Resume Survey"}):Object(R.jsx)(z.a,{severity:"info",children:"Sorry, there are no surveys available yet!"})]})},E=n(47),J=n(209),P=n(195),U=n(210),D=n(193),M=n(187),V=n(204),Y=n(185),G=n(206),H=n(97),K=n.n(H),X=n(98),Z=n.n(X),$=n(186),ee=(n(132),function(){var e=Object(c.useState)(""),t=Object(f.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(""),r=Object(f.a)(i,2),l=r[0],o=r[1],j=Object(c.useState)({title:"",name:"",typeField:"",children:[],answer:""}),d=Object(f.a)(j,2),b=d[0],h=d[1],x=p(),O=y(F),v=function(){return Object(R.jsx)(G.a,{"aria-label":"Add",size:"small",onClick:function(){return S("checkbox",n)},children:Object(R.jsx)(K.a,{fontSize:"small"})})},g=function(e){var t=e.target,n=t.name,c=t.value,a={};a[n]=c,h(Object(E.a)(Object(E.a)({},b),a))},k=function(e){var t=e.target,n=t.name,c=t.value;n&&(h({title:"",name:n,answer:"",typeField:c,children:[]}),o(c))},w=function(e,t){if(b&&(!b||b.children)){var n=b.children.filter((function(e){return e!=t}));h(Object(E.a)(Object(E.a)({},b),{},{children:n}))}},S=function(e,t){h(Object(E.a)(Object(E.a)({},b),{},{children:[].concat(Object(m.a)(b.children),[{title:"".concat(t),checked:!1}])}))};return Object(R.jsxs)("div",{className:"admin",children:[Object(R.jsx)(u.a,{component:"h1",variant:"h4",align:"center",children:"Admin"}),Object(R.jsx)(u.a,{component:"h5",align:"center",children:"Create your survey"}),Object(R.jsxs)(s.a,{sx:{mb:4,mt:4},children:[Object(R.jsxs)(V.a,{component:"fieldset",children:[Object(R.jsx)(Y.a,{component:"legend",children:"Choose the type of your question"}),Object(R.jsxs)(M.a,{"aria-label":"gender",defaultValue:"female",name:"radio-buttons-group",children:[Object(R.jsx)(L.a,{id:"text",control:Object(R.jsx)(D.a,{name:"typequestion",value:"text",onChange:k}),label:"Text"}),Object(R.jsx)(L.a,{id:"upload",control:Object(R.jsx)(D.a,{name:"typequestion",value:"file",onChange:k}),label:"Upload"}),Object(R.jsx)(L.a,{id:"checkbox",control:Object(R.jsx)(D.a,{name:"typequestion",value:"checkbox",onChange:k}),label:"Checkbox"})]})]}),Object.keys(b).length?function(e){var t=e.title,n=e.children,c={text:function(){return Object(R.jsx)(A.a,{fullWidth:!0,margin:"normal",variant:"outlined",name:"title",label:"Type the question here for text",value:t,onChange:g})},file:function(){return Object(R.jsx)(A.a,{fullWidth:!0,margin:"normal",variant:"outlined",name:"title",label:"Type the question here for upload",value:t,onChange:g})},checkbox:function(){return Object(R.jsxs)("div",{className:"question question--checkbox",children:[Object(R.jsx)(A.a,{fullWidth:!0,margin:"normal",variant:"outlined",name:"title",label:"Type the question here for checkbox",value:t,onChange:g}),n&&n.map((function(e,t){return Object(R.jsx)(I.a,{children:Object(R.jsx)(L.a,{control:Object(R.jsx)(Q.a,{value:e.title,onChange:k}),label:Object(R.jsxs)(R.Fragment,{children:[e.title,Object(R.jsx)(G.a,{"aria-label":"Remove",size:"small",onClick:function(){return w("checkbox",e)},children:Object(R.jsx)(Z.a,{sx:{color:$.a[500]},fontSize:"small"})})]})})},t)})),Object(R.jsx)("div",{className:"question__childadd",children:Object(R.jsx)(A.a,{margin:"dense",size:"small",variant:"outlined",name:"title",label:"Type the option label",InputProps:{endAdornment:Object(R.jsx)(v,{})},onChange:function(e){return a(e.target.value)}})})]})}};return l?c[l]&&c[l]():null}(b):Object(R.jsx)("div",{children:"No Question Selected."}),Object(R.jsx)(N.a,{sx:{mb:2,mt:2},children:Object(R.jsx)(_.a,{variant:"contained",onClick:function(){b&&x(C(b))},children:"Save"})})]}),O.length?Object(R.jsxs)(s.a,{children:[Object(R.jsx)("hr",{}),Object(R.jsx)(u.a,{component:"h2",variant:"h5",align:"center",children:"Questions saved"}),Object(R.jsx)(J.a,{disablePadding:!0,children:O.map((function(e,t){var n=e.title,c=e.typeField,a=e.children;return Object(R.jsxs)(P.a,{sx:{py:1,px:0,flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start"},children:[Object(R.jsx)(U.a,{primary:"Question ".concat(t+1,": ").concat(n),secondary:"Answer type: ".concat(c)}),Object(R.jsx)("ul",{children:a&&(null===a||void 0===a?void 0:a.map((function(e,t){var n=e.title;return Object(R.jsx)("li",{children:"option ".concat(t+1,": ").concat(n)},t)})))})]},t)}))})]}):null]})});var te=function(){var e=Object(b.a)();return Object(R.jsxs)(h.a,{theme:e,children:[Object(R.jsx)(l.a,{}),Object(R.jsx)(o.a,{position:"absolute",color:"default",elevation:0,sx:{position:"relative",borderBottom:function(e){return"1px solid ".concat(e.palette.divider)}},children:Object(R.jsx)(j.a,{children:Object(R.jsx)(u.a,{variant:"h6",color:"inherit",noWrap:!0,children:"Lockebio Assessment"})})}),Object(R.jsx)(s.a,{component:"main",maxWidth:"sm",sx:{mb:4},children:Object(R.jsx)(d.a,{variant:"outlined",sx:{my:{xs:3,md:6},p:{xs:2,md:3}},children:Object(R.jsx)(x.a,{basename:"/survey",children:Object(R.jsxs)(O.c,{children:[Object(R.jsx)(O.a,{path:"/",exact:!0,component:B}),Object(R.jsx)(O.a,{path:"/admin",exact:!0,component:ee})]})})})})]})},ne=n(70),ce=n(22),ae=n(101),ie=n.n(ae),re=n(57),le=n(17);Object(le.f)(!1);var oe={key:"root",storage:ie.a},se=Object(ce.b)({survey:q}),je=Object(ne.a)(oe,se),de=Object(g.a)({reducer:je,devTools:!1,middleware:[re.a]}),ue=n(102),be=Object(ne.b)(de);r.a.render(Object(R.jsx)(a.a.StrictMode,{children:Object(R.jsx)(v.a,{store:de,children:Object(R.jsx)(ue.a,{loading:null,persistor:be,children:Object(R.jsx)(te,{})})})}),document.getElementById("root"))}},[[138,1,2]]]);
//# sourceMappingURL=main.213f016a.chunk.js.map