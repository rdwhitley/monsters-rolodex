(this["webpackJsonpmonsters-rolodex"]=this["webpackJsonpmonsters-rolodex"]||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(18)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(2),c=n.n(o),s=(n(12),n(3)),i=n(4),l=n(6),u=n(5),m=(n(13),function(e){return a.a.createElement("div",{className:"card-container"},a.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&size=180x180")}),a.a.createElement("h2",null,e.monster.name),a.a.createElement("p",null,e.monster.email))}),h=(n(14),function(e){return a.a.createElement("div",{className:"card-list"},e.monsters.map((function(e){return a.a.createElement(m,{key:e.id,monster:e})})))}),d=(n(15),n(16),n(17),function(e){var t=e.placeholder,n=e.handleChange;return a.a.createElement("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(s.a)(this,n),(e=t.call(this)).state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.monsters,r=t.searchField,o=n.filter((function(e){return e.name.toLowerCase().includes(r.toLowerCase())}));return a.a.createElement("div",{className:"App"},a.a.createElement(d,{placeholder:"search monsters",onChange:function(t){return e.setState({searchField:t.target.value})}}),a.a.createElement(h,{monsters:o}))}}]),n}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4aaa0654.chunk.js.map