(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{181:function(e,t,n){},199:function(e,t,n){"use strict";n.r(t);var a=n(9),c=n(10),i=n(12),r=n(11),l=n(13),o=n(1),s=n.n(o),u=n(76),m=n.n(u),d=function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e={height:"300px"};return s.a.createElement("div",null,s.a.createElement(m.a,{className:"carousel",swipeOptions:{startSlide:2,speed:400,auto:3e3,continuous:!0,disableScroll:!1,stopPropagation:!1,callback:function(e,t){},transitionEnd:function(e,t){}}},s.a.createElement("div",null,s.a.createElement("img",{src:"http://pic35.nipic.com/20131110/1338599_221817467119_2.jpg",alt:"",width:"100%",style:e})),s.a.createElement("div",null,s.a.createElement("img",{src:"http://pic18.nipic.com/20111220/9115077_235418798000_2.jpg",alt:"",width:"100%",style:e})),s.a.createElement("div",null,s.a.createElement("img",{src:"http://img2.imgtn.bdimg.com/it/u=3766486347,3877961197&fm=214&gp=0.jpg",alt:"",width:"100%",style:e}))))}}]),t}(o.Component),p=n(103),f=n(66);var h=n(196),b=function(e){function t(){var e;return Object(a.a)(this,t),(e=Object(i.a)(this,Object(r.a)(t).call(this))).state={dataListArr:[]},e}return Object(l.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getList()}},{key:"getList",value:function(){var e=this;Object(f.a)({url:"/index/user/get",method:"get"}).then(function(t){e.setState({dataListArr:t})}).catch(function(e){alert(e)})}},{key:"render",value:function(){var e=this.state.dataListArr.map(function(e,t){return s.a.createElement(p.a,{to:{pathname:"detail/".concat(e.id)},key:t},s.a.createElement("div",{className:"indexMyList"},s.a.createElement(h.a,{bsStyle:"info"},s.a.createElement(h.a.Heading,null,s.a.createElement(h.a.Title,{componentClass:"h3"},e.title,"-",e.name)),s.a.createElement(h.a.Body,null,s.a.createElement("img",{width:"150px",src:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1545654495208&di=c4fa8cce2c2f3bc5d70f7f676df262d5&imgtype=0&src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20180317%2Ffffc2cf4d5314b29ba68c92006a1919e_th.jpg",alt:""}))),s.a.createElement("p",null),s.a.createElement("p",null)))});return s.a.createElement("div",{className:"indexContent contentClass"},e)}}]),t}(o.Component),g=(n(181),function(e){function t(){return Object(a.a)(this,t),Object(i.a)(this,Object(r.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement("div",{className:"Home content"},s.a.createElement(d,null),s.a.createElement(b,null))}}]),t}(o.Component));t.default=g},66:function(e,t,n){"use strict";var a=n(77),c=n.n(a),i=n(83),r=n.n(i),l="";l="http://myweibo.37bigboom.cn";var o=c.a.create({baseURL:l,headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:[function(e){return e=r.a.stringify(e)}]});o.interceptors.request.use(function(e){return e},function(e){return Promise.reject(e)}),o.interceptors.response.use(function(e){return console.log(e),200===e.data.code?e.data.data:Promise.reject(e.data.message)},function(e){return Promise.reject(e)}),t.a=o}}]);
//# sourceMappingURL=4.2f49e411.chunk.js.map