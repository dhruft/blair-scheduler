(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,a){},105:function(e,t){},112:function(e,t,a){"use strict";a.r(t);var c=a(0),r=a.n(c),n=a(86),s=a.n(n),i=a(87),j=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,116)).then((function(t){var a=t.getCLS,c=t.getFID,r=t.getFCP,n=t.getLCP,s=t.getTTFB;a(e),c(e),r(e),n(e),s(e)}))},o=(a(111),a(4));s.a.createRoot(document.getElementById("root")).render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(i.a,{})})),j()},51:function(e,t,a){"use strict";var c=a(88),r=a(24),n=Object(c.a)({apiKey:"AIzaSyAOAtNR_D5ajCNa6uX75NPMicwMnM0ahiQ",authDomain:"blairschedules-f673d.firebaseapp.com",projectId:"blairschedules-f673d",storageBucket:"blairschedules-f673d.appspot.com",messagingSenderId:"255213167242",appId:"1:255213167242:web:56d6af39d8275dc68c4373",measurementId:"G-1TWM9WEQGV"}),s=Object(r.c)(n);t.a=s},87:function(e,t,a){"use strict";(function(e){var c=a(1),r=a(6),n=a(12),s=a(0),i=(a(102),a(90)),j=a(113),o=a(91),b=a(59),u=a(52),d=a(81),l=a(114),O=a(92),h=a(51),p=a(24),x=a(80),m=a(4),f="users2",v="classes2";t.a=function(){var t=Object(s.useState)([]),g=Object(n.a)(t,2),y=g[0],k=g[1],w=Object(s.useState)(!1),S=Object(n.a)(w,2),N=S[0],I=S[1],B=Object(s.useState)(!0),P=Object(n.a)(B,2),C=P[0],D=P[1],M=Object(s.useState)(""),z=Object(n.a)(M,2),L=z[0],A=z[1],F=Object(s.useState)({0:"Homeroom",1:"Period 1",2:"Period 2",3:"Period 3",4:"Period 4",6:"Period 6",7:"Period 7",8:"Period 8",9:"Period 9"}),T=Object(n.a)(F,2),U=T[0],E=T[1],Q=Object(s.useState)(0),R=Object(n.a)(Q,2),H=R[0],G=(R[1],Object(s.useState)(["0","1","2","3","4","6","7","8","9"])),W=Object(n.a)(G,2),J=W[0],V=W[1],Y=function(){var e=Object(r.a)(Object(c.a)().mark((function e(t,a){var n,s,i,j;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(p.a)(h.a,f,a),e.next=3,Object(p.b)(n);case 3:if(s=e.sent,i=s.exists(),j=[],i){e.next=12;break}return J.map(function(){var e=Object(r.a)(Object(c.a)().mark((function e(a){var r,n,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(p.a)(h.a,v,t.sch[a]),e.next=3,Object(p.b)(r);case 3:if(!(n=e.sent).exists()){e.next=12;break}return(s=n.data().value).push(t.name),e.next=9,Object(p.e)(r,{value:s});case 9:j.push(s),e.next=15;break;case 12:return e.next=14,Object(p.d)(Object(p.a)(h.a,v,t.sch[a]),{value:[t.name]});case 14:j.push([t.name]);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),e.next=10,Object(p.d)(Object(p.a)(h.a,f,a),{});case 10:e.next=13;break;case 12:J.map(function(){var e=Object(r.a)(Object(c.a)().mark((function e(a){var r,n,s;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Object(p.a)(h.a,v,t.sch[a]),e.next=3,Object(p.b)(r);case 3:n=e.sent,s=n.data().value,j.push(s);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 13:A(t.name),E(t.titles),setTimeout((function(){return k(j)}),1e3);case 16:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),K=function(t){var c=a(104),r=a(106).encodeBase64,n=c.randomBytes(24),s=e.from("Ys3y7rkaBIfezo8UVjQQcCARZU6xWRDr","utf8"),i=e.from(t,"utf8"),j=c.secretbox(i,n,s);return"".concat(r(n),":").concat(r(j))},X=function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){var a,n,s,i;return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=t.target[0].value,n=t.target[1].value,s=K(a),i=K(n),fetch("/getData?username="+s+"&password="+i).then((function(e){if(500===e.status)throw t.target.reset(),I(!0),"Invalid Login";return e.json()})).then(function(){var e=Object(r.a)(Object(c.a)().mark((function e(t){return Object(c.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("Montgomery Blair High"!==t.school){e.next=7;break}return V(t.periods),e.next=4,Y(t,a);case 4:D(!1),e.next=8;break;case 7:I(!0);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsxs)("div",{children:[Object(m.jsx)(i.a,{bg:"dark",variant:"dark",children:Object(m.jsxs)(j.a,{children:[Object(m.jsx)(i.a.Brand,{children:"Montgomery Blair Scheduler "}),Object(m.jsx)(o.a,{children:Object(m.jsx)(o.a.Link,{children:0!==L&&Object(m.jsx)("div",{children:L})})})]})}),Object(m.jsxs)(b.a,{show:C,size:"lg",backdrop:"static",keyboard:!1,centered:!0,children:[Object(m.jsx)(b.a.Header,{children:Object(m.jsxs)(b.a.Title,{style:{margin:"auto"},children:["Montgomery Blair HS Scheduler Sign In ",Object(m.jsx)("br",{})," ",Object(m.jsx)("p",{className:"label",children:"by Dhruva Arun"}),"  ",Object(m.jsxs)("p",{className:"label",children:["User Count: ",H]})," "]})}),Object(m.jsx)(b.a.Body,{children:Object(m.jsxs)(u.a,{onSubmit:X,children:[N&&Object(m.jsx)("p",{className:"error",children:"Invalid Username or Password!"}),Object(m.jsxs)(u.a.Group,{className:"mb-4",children:[Object(m.jsxs)(u.a.Label,{children:[" ",Object(m.jsx)("b",{children:"Username"})," "]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(u.a.Control,{type:"username",placeholder:"Enter Username",isInvalid:N}),Object(m.jsx)(d.a.Text,{id:"basic-addon1",children:"@mcpsmd.net"})]}),Object(m.jsx)("br",{}),Object(m.jsxs)(u.a.Label,{children:[" ",Object(m.jsx)("b",{children:"Password"})," "]}),Object(m.jsx)(d.a,{children:Object(m.jsx)(u.a.Control,{type:"password",placeholder:"Enter Password",isInvalid:N})})]}),Object(m.jsx)(l.a,{className:"modalSubmit",variant:"primary",type:"submit",size:"lg",style:{width:"100%"},children:"Submit"}),Object(m.jsx)(b.a.Footer,{children:Object(m.jsxs)("div",{className:"safety",children:[Object(m.jsxs)("div",{className:"segment",children:[Object(m.jsx)(x.a,{className:"check",size:90}),Object(m.jsx)("p",{children:"All Data Encrypted"})]}),Object(m.jsxs)("div",{className:"segment",children:[Object(m.jsx)(x.a,{className:"check",size:90}),Object(m.jsx)("p",{children:"No Login Information Stored"})]})]})}),Object(m.jsxs)("footer",{className:"footer",children:["Compare Your Schedule with Other Blair Students! ",Object(m.jsx)("br",{})," Contact QuickMathzs#0600 on Discord to Report Bugs "]})]})})]}),Object(m.jsx)("div",{className:"periods",children:0!==y.length&&y.map((function(e,t){return Object(m.jsxs)(O.a,{className:"pd",children:[Object(m.jsx)("h4",{children:J[t]+": "+U[J[t]]}),e.map((function(e){return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(O.a.Item,{children:e},t+10)})}))]},t)}))})]})}}).call(this,a(84).Buffer)}},[[112,1,2]]]);
//# sourceMappingURL=main.e0260370.chunk.js.map