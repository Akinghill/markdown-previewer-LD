(this["webpackJsonpmarkdown-previewer"]=this["webpackJsonpmarkdown-previewer"]||[]).push([[0],{27:function(e,a,t){e.exports=t(43)},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},43:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(22),c=t.n(o),i=(t(32),t(5)),l=t(6),s=t(13),u=t(10),m=t(9),d=(t(33),t(23)),h=t(25),v=(t(34),function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){return Object(i.a)(this,t),a.apply(this,arguments)}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"top-bar"},r.a.createElement("p",null,"Markdown Previewer"),r.a.createElement("span",{id:"toggle-icon"},r.a.createElement("i",{className:"my-sun"})))}}]),t}(n.Component)),p=t(26),f=Object(n.createContext)(),b=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=a.call.apply(a,[this].concat(r))).state={isLightTheme:!0,light:{primaryColor:"#ff5c5c",primaryVariant:"#ff2d2d",secondaryColor:"#1b9999",onPrimary:"rgb(250, 250, 250)",onBackground:"rgb(66, 66, 66)"},dark:{primaryColor:"#9641ff",primaryVariant:"#6c63ff",secondaryColor:"#03dac5",onPrimary:"#000",onBackground:"rgba(255, 255, 255, 0.9)"}},e}return Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(f.Provider,{value:Object(p.a)({},this.state)})}}]),t}(n.Component),g=t(35),y=function(e){Object(u.a)(t,e);var a=Object(m.a)(t);function t(e){var n;return Object(i.a)(this,t),(n=a.call(this,e)).state={markdown:""},n.handleChange=n.handleChange.bind(Object(s.a)(n)),n}return Object(l.a)(t,[{key:"handleChange",value:function(e){this.setState({markdown:e.target.value})}},{key:"render",value:function(){var e=this.state.markdown;return r.a.createElement("div",{className:"App"},r.a.createElement(b,null,r.a.createElement(v,null),r.a.createElement("div",{className:"io-container"},r.a.createElement("div",{className:"section"},r.a.createElement(d.a,{controlId:"formControlsTextarea"},r.a.createElement(h.a,{as:"textarea",placeholder:"Enter Markdown",value:e,onChange:this.handleChange,style:{height:"90vh",borderRadius:"10px",border:"1px solid #1b9999"}}))),r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"output",dangerouslySetInnerHTML:{__html:g(e)}})))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[27,1,2]]]);
//# sourceMappingURL=main.7210521b.chunk.js.map