(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(57)},31:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(21),o=n.n(r),l=(n(31),n(6)),i=n(7),u=n(9),s=n(8),m=n(10),p=n(60),b=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"App"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(p.a,{exact:!0,activeClassName:"selected",to:"/"},"home")),c.a.createElement("li",null,c.a.createElement(p.a,{activeClassName:"selected",to:"/login"},"login"))))}}]),t}(a.Component),f=n(59),d=n(58),h=n(23),j=n.n(h),E=n(24),v=n.n(E),O=j.a.create({baseURL:"http://myweibo.37bigboom.cn",headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return e=v.a.stringify(e)}]});O.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),O.interceptors.response.use(function(e){return e.data},function(e){return Promise.reject(e)});var w=O;var y=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(c)))).newslistclick=function(){w({url:"/homepage",method:"get"}).then(function(e){console.log(e)})},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("div",null,c.a.createElement("button",{onClick:this.newslistclick.bind()},"456")))}}]),t}(a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"Home"},c.a.createElement("div",null,"789"))}}]),t}(a.Component);o.a.render(c.a.createElement(f.a,null,c.a.createElement("div",null,c.a.createElement(b,null),c.a.createElement(d.a,{exact:!0,path:"/",component:y}),c.a.createElement(d.a,{path:"/login",component:g}))),document.getElementById("root"))}},[[26,2,1]]]);
//# sourceMappingURL=main.8fb49cfc.chunk.js.map