(this.webpackJsonpunsplash_search=this.webpackJsonpunsplash_search||[]).push([[0],{42:function(e,t,a){e.exports=a(77)},52:function(e,t,a){},77:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(10),l=a.n(o),c=(a(20),a(9)),s=a(11),u=a(34),i=a(18),m=a(12),d={savedPhotos:[],savedQueries:[],noQuery:!1,noResults:!1,loading:!1},p=Object(s.c)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_QUERY":return Object(m.a)({},e,{savedQueries:[].concat(Object(i.a)(e.savedQueries),[t.payload])});case"FETCH_PHOTOS":return Object(m.a)({},e,{savedPhotos:Object(i.a)(t.payload)});case"TOGGLE_QUERY_MODAL":return Object(m.a)({},e,{noQuery:t.payload});case"TOGGLE_RESULTS_MODAL":return Object(m.a)({},e,{noResults:t.payload});case"QUERY_LOADING":return Object(m.a)({},e,{loading:t.payload});default:return e}}}),h=Object(s.e)(p,Object(s.d)(Object(s.a)(u.a),null)),E=(a(52),a(35)),f=a(36),v=a(39),y=a(37),b=a(40),O=a(78),g=a(79),Q=a(80),N=a(81),_=a(38),j=a.n(_),S=function(e){return function(t){var a=e.replace(/ /g,"+");t({type:"QUERY_LOADING",payload:!0}),j.a.get("https://api.unsplash.com/search/photos?page=1&query=".concat(a,"&client_id=").concat("uRU96I-MPCH7zD9FZbhdg8TlfK84gmdS6JMoKonTvoU","&per_page=30")).then((function(e){t({type:"FETCH_PHOTOS",payload:e.data.results}),console.log(e.data.results),0===e.data.results.length&&t({type:"TOGGLE_RESULTS_MODAL",payload:!0}),t({type:"QUERY_LOADING",payload:!1})}))}},R=function(e){return function(t){t({type:"TOGGLE_QUERY_MODAL",payload:e})}},x=function(e){function t(e){var a;return Object(E.a)(this,t),(a=Object(v.a)(this,Object(y.a)(t).call(this,e))).onChange=function(e){a.setState({textInput:e.target.value})},a.onSubmit=function(e){e.preventDefault(),""===a.state.textInput?a.props.toggleNoQuery(!0):a.props.fetchPhotos(a.state.textInput)},a.state={textInput:""},a}return Object(b.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this,t=this.props.loading,a=this.state.textInput;return r.a.createElement(O.a,{className:"row",onSubmit:function(t){return e.onSubmit(t)}},r.a.createElement("div",{className:"col-md-8 col-12"},r.a.createElement(g.a,{name:"searchTerm",onChange:function(t){return e.onChange(t)},value:a,className:"mb-3"})),r.a.createElement("div",{className:"text-center px-auto col-md-4 col-12"},r.a.createElement(Q.a,{type:"button",color:"warning",className:"px-auto submitBtn",onClick:function(t){return e.onSubmit(t)}},t?r.a.createElement("span",null,r.a.createElement(N.a,{size:"sm",className:"spinner-border spinner-border-sm"})):"Search"),r.a.createElement(Q.a,{color:"success",className:"ml-3 px-auto saveBTn",onClick:function(){return e.props.saveQuery(a)}},"Save")))}}]),t}(n.Component),L=Object(c.b)((function(e){return{savedPhotos:e.data.savedPhotos,loading:e.data.loading}}),{fetchPhotos:S,saveQuery:function(e){return function(t){t({type:"SAVE_QUERY",payload:e})}},toggleNoQuery:R})(x),P=a(84),T=a(82),w=a(83);var G=function(e){return r.a.createElement(P.a,{isOpen:e.isOpen},r.a.createElement(T.a,null,e.text),r.a.createElement(w.a,null,r.a.createElement(Q.a,{color:"primary",onClick:function(){return e.close()}},"OK")))};var U=Object(c.b)((function(e){return{savedPhotos:e.data.savedPhotos}}))((function(e){return r.a.createElement("tr",null,e.savedPhotos.map((function(e){return r.a.createElement("td",{key:e.id},r.a.createElement("img",{src:e.urls.thumb,className:"m-3",alt:"unsplash"}))})))}));var k=function(){return r.a.createElement("table",{className:"table col-md-8 col-12 text-center order-last order-md-first"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Photos"))),r.a.createElement("tbody",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(U,null))))};var C=Object(c.b)((function(e){return{savedQueries:e.data.savedQueries}}),{fetchPhotos:S})((function(e){return r.a.createElement("table",{className:"table ml-md-5 col-md-3 col-12 text-center order-first order-md-last"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Saved queries:"))),r.a.createElement("tbody",null,e.savedQueries.map((function(t){return r.a.createElement("tr",{key:e.savedQueries.indexOf(t)+Math.random()},r.a.createElement("td",{onClick:function(){return e.fetchPhotos(t)},className:"savedQuery"},t))}))))}));var A=Object(c.b)((function(e){return{noQuery:e.data.noQuery,noResults:e.data.noResults}}),{toggleNoQuery:R,toggleNoResults:function(e){return function(t){t({type:"TOGGLE_RESULTS_MODAL",payload:e})}}})((function(e){return r.a.createElement("div",{className:"p-4"},r.a.createElement(G,{isOpen:e.noQuery,text:"Please enter a search query",close:function(){return e.toggleNoQuery(!1)}}),r.a.createElement(G,{isOpen:e.noResults,text:"Unfortunately, no photos were found",close:function(){return e.toggleNoResults(!1)}}),r.a.createElement(L,null),r.a.createElement("div",{className:"row mt-5 pl-0 pl-md-3"},r.a.createElement(k,null),r.a.createElement(C,null)))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(c.a,{store:h},r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.67f41164.chunk.js.map