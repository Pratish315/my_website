(this.webpackJsonpmy_website=this.webpackJsonpmy_website||[]).push([[0],{36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},49:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),i=n(25),r=n.n(i),s=(n(36),n(7)),o=n(8),l=n(10),u=n(9),d=n(12),j=n(20),b=(n(37),n(38),n(26)),p=n(16),O=n(3),h=function(e){var t=e.isSideBarOpened?p.b:p.a;return Object(O.jsx)("button",{onClick:e.clicked,className:"hamburger",children:Object(O.jsx)(b.a,{icon:t,size:"1x",color:"black",className:"button-style"})})},m=(n(45),n.p+"static/media/profilePic.55232cab.jpg"),f=function(){return Object(O.jsx)("div",{className:"profile",children:Object(O.jsx)("img",{alt:"profile_pic",src:m})})},x=(n(46),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={menu:[{id:1,name:"Home",path:"/"},{id:2,name:"About",path:"/about"},{id:3,name:"Resume",path:"/resume"},{id:4,name:"Projects",path:"/projects"},{id:5,name:"Contact",path:"/contact"}]},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(O.jsx)("ul",{className:"list",children:this.state.menu.map((function(t){return Object(O.jsx)("li",{children:Object(O.jsx)(d.b,{onClick:e.props.clicked,exact:!0,to:t.path,activeClassName:"active",children:t.name})},t.id)}))})}}]),n}(a.Component)),v=(n(49),n(19)),g=function(e){return Object(O.jsxs)("div",{className:"bg",children:[Object(O.jsx)(v.a,{className:"input-colour",initialValue:"#5e72e4",onChange:e.setColor}),Object(O.jsx)(v.a,{className:"input-colour",initialValue:"#5e72e4",onChange:e.setColor})]})},k=function(e){var t=e.isSideBarOpened?"Opensidebar":"Closesidebar",n=c.a.useState({}),a=Object(j.a)(n,2),i=a[0],r=a[1],s=c.a.useState({}),o=Object(j.a)(s,2);o[0],o[1];return Object(O.jsxs)("nav",{className:"sidebar "+t,style:{background:"linear-gradient(to right, "+i.rgba+", yellow)"},children:[Object(O.jsx)(h,{isSideBarOpened:e.isSideBarOpened,clicked:e.clicked}),Object(O.jsx)(f,{}),Object(O.jsx)(x,{clicked:e.clicked}),Object(O.jsx)(g,{setColor:r})]})},C=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).openSideBar=function(){e.setState({isSideBarOpened:!e.state.isSideBarOpened})},e.state={isSideBarOpened:!1},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(k,{isSideBarOpened:this.state.isSideBarOpened,clicked:this.openSideBar})}}]),n}(a.Component),S=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(O.jsx)(d.a,{children:Object(O.jsx)(C,{})})}}]),n}(a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,59)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};n(57);r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),y()}},[[58,1,2]]]);
//# sourceMappingURL=main.6cdc0e26.chunk.js.map