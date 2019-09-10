(window.webpackJsonpScribeAR=window.webpackJsonpScribeAR||[]).push([[0],{17:function(e,t,n){e.exports=n(32)},22:function(e,t,n){},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(6),c=n.n(r),l=(n(22),n(7)),s=n(8),o=n(10),m=n(9),u=n(11),d=n(1),E=function(){return{type:"INCREMENT_TEXTSIZE"}},p=function(){return{type:"DECREMENT_TEXTSIZE"}},N=function(){return{type:"INCREMENT_LINEWIDTH"}},v=function(){return{type:"DECREMENT_LINEWIDTH"}},h=function(){return{type:"INCREMENT_NUMLINES"}},f=function(){return{type:"DECREMENT_NUMLINES"}},b=function(){return{type:"FLIP_LOCKSCREEN"}},g=function(){return{type:"FLIP_INVERTCOLORS"}};n(28);function C(){return i.a.createElement("div",{className:"grid-item",id:"out"},i.a.createElement("div",{className:"element"},"This is a temporary build of ClassTranscribe's ScribeAR platform, which is not yet operational."),i.a.createElement("div",{className:"element"},"In the future, this site will be able to capture everyday speech and transcribe it into live captions."),i.a.createElement("div",{className:"element"},"These captions will be optimized for use with an Android phone to be projected onto augmented reality glasses."),i.a.createElement("div",{className:"element"},"Designed for deaf and hard of hearing students in a lecture-style classroom."))}var I=n(5);n(29);function w(e){var t=Object(d.c)(e.setting),n=Object(d.b)();return console.log(t),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-8"},i.a.createElement("p",null,e.item)),i.a.createElement("div",{className:"col-2 align-items-center"},i.a.createElement("button",{className:t?"btn btn-danger":"btn btn-success",onClick:function(){return n(e.action())}},t?"OFF":"ON")))}function y(e){var t=Object(d.c)(e.setting),n=Object(d.b)();return console.log(t),i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-2 align-items-center"},i.a.createElement("button",{className:"btn btn-default",onClick:function(){return n(e.decrement())}},"-")),i.a.createElement("div",{className:"col-5"},i.a.createElement("p",null,e.item)),i.a.createElement("div",{className:"col-1"},i.a.createElement("p",{style:{textAlign:"right"}},t)),i.a.createElement("div",{className:"col-2 align-items-center"},i.a.createElement("button",{className:"btn btn-default",onClick:function(){return n(e.increment())}},"+")))}n(30);function T(){return i.a.createElement("div",{className:"Options",id:"options-space"},i.a.createElement("h1",null,"Options"),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(y,{item:"Text size",setting:function(e){return e.textSize},increment:E,decrement:p})),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(y,{item:"Line width",setting:function(e){return e.lineWidth},increment:N,decrement:v})),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(y,{item:"Number of lines",setting:function(e){return e.numLines},increment:h,decrement:f})),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(w,{item:"Lock screen",setting:function(e){return e.lockScreen},action:b})),i.a.createElement("div",{className:"item-wrapper"},i.a.createElement(w,{item:"Invert colors",setting:function(e){return e.invertColors},action:g})))}var O=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={optsHidden:!1},n.updateCss=n.updateCss.bind(Object(I.a)(n)),n.toggle=n.toggle.bind(Object(I.a)(n)),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"updateCss",value:function(){return this.state.optsHidden?"none":"block"}},{key:"hide",value:function(){this.setState({optsHidden:!0})}},{key:"toggle",value:function(){this.state.optsHidden&&this.setState({optsHidden:!1})}},{key:"render",value:function(){return i.a.createElement("div",{className:"container-fluid",onClick:this.toggle},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-1"}),i.a.createElement("div",{className:"col-5",id:"options-region"},i.a.createElement(T,{hidden:this.state.optsHidden,toggle:this.props.toggle})),i.a.createElement("div",{className:"col-6",id:"hide-region",style:{display:this.updateCss()},onClick:this.hide.bind(this)},i.a.createElement("p",null,"Hide"))))}}]),t}(i.a.Component),R=(n(31),function(e){function t(){return Object(l.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"row-8"},i.a.createElement(O,null)),i.a.createElement("div",{className:"row-4"},i.a.createElement(C,null)))}}]),t}(i.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var S=n(4),L=Object(S.b)({textSize:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:48,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_TEXTSIZE":return e+1;case"DECREMENT_TEXTSIZE":return Math.max(1,e-1);default:return e}},lineWidth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_LINEWIDTH":return e+1;case"DECREMENT_LINEWIDTH":return Math.max(1,e-1);default:return e}},numLines:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:4,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENT_NUMLINES":return e+1;case"DECREMENT_NUMLINES":return Math.max(1,e-1);default:return e}},lockScreen:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FLIP_LOCKSCREEN"==t.type?!e:e},invertColors:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;return"FLIP_INVERTCOLORS"==t.type?!e:e}}),j=Object(S.c)(L);c.a.render(i.a.createElement(d.a,{store:j},i.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.fc7ea7aa.chunk.js.map