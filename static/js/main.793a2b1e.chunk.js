(this["webpackJsonpcar-wash-web"]=this["webpackJsonpcar-wash-web"]||[]).push([[0],{30:function(e,a,t){},36:function(e,a,t){e.exports=t(50)},50:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(19),o=t.n(c),l=t(16),s=t(32),i=t(10),u=t(26),m=t(33),d=t.n(m),h=t(34),p=t(18),E={id:"0",username:"",token:"",loggedIn:!1};var b={address:""};var f=Object(i.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"LOGIN_SUCCESS":return Object(p.a)({},e,{id:a.payload.id,username:a.payload.username,token:a.payload.token,loggedIn:a.payload.loggedIn});case"LOGOUT":return Object(p.a)({},E);default:return e}},estimate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ESTIMATE_SUCCESS":return Object(p.a)({},e,{address:a.payload});default:return e}}}),v={key:"main",storage:d.a,blacklist:["estimate"]},O=Object(u.a)(v,f),g=Object(i.a)(h.a),y=Object(i.d)(O,g),j=Object(u.b)(y),S=t(11),w=t(12),C=t(13),_=t(14),k=t(22),N=t(5),T=t(56),A=t(57),L=t(58),I=t(59),R=t(60),P=t(51),D=t(52),W=t(53),K=t(54),U=t(55),x=t(35),G=t.n(x),B=function(e){var a=e.onChange,t=e.setRef;return r.a.createElement(G.a,{ref:t&&t,placeholder:"Write an address here",className:"form-control-lg form-control",options:{appId:Object({NODE_ENV:"production",PUBLIC_URL:"/car-wash-web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).ALGOLIA_APP_ID,apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/car-wash-web",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).ALGOLIA_APP_KEY,language:"en",countries:["us"],aroundLatLng:"29.5652,-98.3364",aroundLatLngViaIP:!1,type:"address"},onChange:function(e){var t=e.suggestion;return a(t.value)},onLimit:function(){return console.log("Fired when you reached your current rate limit.")},onError:function(){return console.log("Fired when we could not make the request to Algolia Places servers for any reason but reaching your rate limit.")}})},H=function(e){Object(_.a)(t,e);var a=Object(C.a)(t);function t(){var e;Object(S.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=a.call.apply(a,[this].concat(c))).inputRef=Object(n.createRef)(),e.onAddressChanged=function(a){e.props.estimateSuccess(a),e.props.history.push("/Estimate/"+a)},e.setRef=function(a){e.inputRef=a},e}return Object(w.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.match.params.search;e&&(this.props.estimateSuccess(e),this.inputRef.autocomplete.setVal(e))}},{key:"render",value:function(){return r.a.createElement(B,{setRef:this.setRef,onChange:this.onAddressChanged})}}]),t}(r.a.Component),M={estimateSuccess:function(e){return{type:"ESTIMATE_SUCCESS",payload:e}}},V=Object(l.b)((function(e){return{address:e.estimate.address}}),M)(H),F=Object(N.f)(V),J=function(e){Object(_.a)(t,e);var a=Object(C.a)(t);function t(){return Object(S.a)(this,t),a.apply(this,arguments)}return Object(w.a)(t,[{key:"render",value:function(){var e=this.props,a=e.fixed,t=e.showSearch;return r.a.createElement("div",{className:"header-container"},r.a.createElement(P.a,{color:"dark",dark:!0,expand:"md",fixed:a},r.a.createElement(D.a,{href:"/"},"Car Wash"),t&&r.a.createElement("div",{className:"navbar-search desktop-only"},r.a.createElement(F,null)),r.a.createElement("div",{className:"navbar-right"},r.a.createElement(W.a,{navbar:!0},r.a.createElement(K.a,null,r.a.createElement(U.a,{to:"/Estimate/sdadsa",className:"nav-link"},"Sign In"))))),t&&r.a.createElement("div",{className:"navbar-search-mobile mobile-only"},r.a.createElement(F,null)))}}]),t}(r.a.Component),q=function(e){Object(_.a)(t,e);var a=Object(C.a)(t);function t(){return Object(S.a)(this,t),a.apply(this,arguments)}return Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,{fixed:"top",showSearch:!1}),r.a.createElement("main",{className:"landing-background"},r.a.createElement("div",{className:"overlay"}),r.a.createElement(T.a,null,r.a.createElement(A.a,null,r.a.createElement(L.a,null,r.a.createElement("h1",{className:"mb-5 text-white"},"Get a car wash estimate"))),r.a.createElement(I.a,null,r.a.createElement(A.a,null,r.a.createElement(L.a,{sm:"12",md:"9",className:"mb-4"},r.a.createElement(F,null)),r.a.createElement(L.a,{sm:"12",md:"3"},r.a.createElement(R.a,{color:"primary",size:"lg",block:!0},"Get Estimate")))))))}}]),t}(r.a.Component),z=function(e){Object(_.a)(t,e);var a=Object(C.a)(t);function t(){return Object(S.a)(this,t),a.apply(this,arguments)}return Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(J,{showSearch:!0}),r.a.createElement(T.a,null,r.a.createElement(A.a,null,r.a.createElement(L.a,null,r.a.createElement("h1",{className:"mb-5"},"Local Results: ")))))}}]),t}(r.a.Component),Y=Object(l.b)((function(e){return{address:e.estimate.address}}),void 0)(z),$=function(e){Object(_.a)(t,e);var a=Object(C.a)(t);function t(){return Object(S.a)(this,t),a.apply(this,arguments)}return Object(w.a)(t,[{key:"render",value:function(){return r.a.createElement(k.a,null,r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/",component:q}),r.a.createElement(N.a,{path:"/estimate/:search",component:Y})))}}]),t}(r.a.Component);t(48),t(30);var Q=function(){return r.a.createElement(l.a,{store:y},r.a.createElement(s.a,{loading:null,persistor:j},r.a.createElement($,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(49);o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.793a2b1e.chunk.js.map