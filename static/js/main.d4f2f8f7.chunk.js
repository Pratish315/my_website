(this.webpackJsonpmy_website=this.webpackJsonpmy_website||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},38:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),i=n(18),r=n.n(i),s=(n(25),n(4)),o=n(5),u=n(7),l=n(6),d=n(8),j=n(16),b=(n(26),n(27),n(19)),p=n(13),O=n(2),h=function(e){var t=e.isSideBarOpened?p.b:p.a;return Object(O.jsx)("button",{onClick:e.clicked,className:"hamburger",children:Object(O.jsx)(b.a,{icon:t,size:"1x",color:"black",className:"button-style"})})},f=(n(34),n.p+"static/media/profilePic.55232cab.jpg"),m=function(){return Object(O.jsx)("div",{className:"profile",children:Object(O.jsx)("img",{alt:"profile_pic",src:f})})},v=(n(35),function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={menu:[{id:1,name:"Home",path:"/"},{id:2,name:"About",path:"/about"},{id:3,name:"Resume",path:"/resume"},{id:4,name:"Projects",path:"/projects"},{id:5,name:"Contact",path:"/contact"}]},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)("ul",{className:"list",children:this.state.menu.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsx)(d.b,{onClick:e.props.clicked,exact:!0,to:t.path,activeClassName:"active",children:t.name})},t.id)}))})}}]),n}(c.Component)),x=(n(38),function(e){return Object(O.jsxs)("div",{className:"bg",children:[Object(O.jsx)("input",{className:"input-colour",type:"color",value:e.color,onChange:function(t){return e.setColor(t.target.value)}}),Object(O.jsx)("input",{className:"input-colour",type:"color",value:e.color2,onChange:function(t){return e.setColor2(t.target.value)}})]})}),C=function(e){var t=e.isSideBarOpened?"Opensidebar":"Closesidebar",n=a.a.useState("#C5C1C1"),c=Object(j.a)(n,2),i=c[0],r=c[1],s=a.a.useState("#111111"),o=Object(j.a)(s,2),u=o[0],l=o[1];return Object(O.jsxs)("nav",{className:"sidebar "+t,style:{background:"linear-gradient(to right, "+i+", "+u+")"},children:[Object(O.jsx)(h,{isSideBarOpened:e.isSideBarOpened,clicked:e.clicked}),Object(O.jsx)(m,{}),Object(O.jsx)(v,{clicked:e.clicked}),Object(O.jsx)(x,{color:i,color2:u,setColor:r,setColor2:l})]})},g=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(s.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).openSideBar=function(){e.setState({isSideBarOpened:!e.state.isSideBarOpened})},e.state={isSideBarOpened:!1},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(C,{isSideBarOpened:this.state.isSideBarOpened,clicked:this.openSideBar})}}]),n}(c.Component),k=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(d.a,{children:Object(O.jsx)(g,{})})}}]),n}(c.Component),S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),i(e),r(e)}))};n(39);r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(k,{})}),document.getElementById("root")),S()}},[[40,1,2]]]);
//# sourceMappingURL=main.d4f2f8f7.chunk.js.map