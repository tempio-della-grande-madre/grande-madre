webpackJsonp([0xd2a57dc1d883],{59:function(e,n,t){"use strict";function o(e,n,t){var o=a.map(function(t){if(t.plugin[e]){var o=t.plugin[e](n,t.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:t?[t]:[]}function r(e,n,t){return a.reduce(function(t,o){return o.plugin[e]?t.then(function(){return o.plugin[e](n,o.options)}):t},Promise.resolve())}n.__esModule=!0,n.apiRunner=o,n.apiRunnerAsync=r;var a=[{plugin:t(266),options:{plugins:[]}},{plugin:t(265),options:{plugins:[]}},{plugin:t(146),options:{plugins:[]}}]},139:function(e,n,t){"use strict";var o;n.components={"component---src-templates-article-js":t(245),"component---src-pages-index-js":t(244)},n.json=(o={"layout-index.json":t(4),"home.json":t(257)},o["layout-index.json"]=t(4),o["cosa-facciamo.json"]=t(253),o["layout-index.json"]=t(4),o["chi-siamo.json"]=t(246),o["layout-index.json"]=t(4),o["progetto.json"]=t(259),o["layout-index.json"]=t(4),o["ruota-dell-anno.json"]=t(261),o["layout-index.json"]=t(4),o["fiamma-delle-dolomiti.json"]=t(256),o["layout-index.json"]=t(4),o["come-avere-la-fiamma.json"]=t(248),o["layout-index.json"]=t(4),o["realta-acceso-fiamma.json"]=t(260),o["layout-index.json"]=t(4),o["collaborazioni.json"]=t(247),o["layout-index.json"]=t(4),o["corsi-annuali.json"]=t(250),o["layout-index.json"]=t(4),o["corso-ruota-dell-anno.json"]=t(251),o["layout-index.json"]=t(4),o["corso-seconda-spirale.json"]=t(252),o["layout-index.json"]=t(4),o["eventi.json"]=t(255),o["layout-index.json"]=t(4),o["statuto.json"]=t(263),o["layout-index.json"]=t(4),o["donazioni.json"]=t(254),o["layout-index.json"]=t(4),o["spiritualita-e-denaro.json"]=t(262),o["layout-index.json"]=t(4),o["contatti.json"]=t(249),o["layout-index.json"]=t(4),o["index.json"]=t(258),o),n.layouts={"layout---index":t(243)}},140:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function a(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}function u(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}n.__esModule=!0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},c=t(1),s=o(c),l=t(3),f=o(l),p=t(95),d=o(p),m=t(44),h=o(m),g=t(59),y=function(e){var n=e.children;return s.default.createElement("div",null,n())},j=function(e){function n(t){r(this,n);var o=a(this,e.call(this)),u=t.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(n,e),n.prototype.componentWillReceiveProps=function(e){var n=this;if(this.state.location.pathname!==e.location.pathname){var t=d.default.getResourcesForPathname(e.location.pathname);if(t)this.setState({location:e.location,pageResources:t});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){n.setState({location:o,pageResources:e})})}}},n.prototype.componentDidMount=function(){var e=this;h.default.on("onPostLoadPageResources",function(n){d.default.getPage(e.state.location.pathname)&&n.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:n.pageResources})})},n.prototype.shouldComponentUpdate=function(e,n){return!n.pageResources||(!(this.state.pageResources||!n.pageResources)||(this.state.pageResources.component!==n.pageResources.component||(this.state.pageResources.json!==n.pageResources.json||!(this.state.location.key===n.location.key||!n.pageResources.page||!n.pageResources.page.matchPath&&!n.pageResources.page.path))))},n.prototype.render=function(){var e=(0,g.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),n=e[0];return this.props.page?this.state.pageResources?n||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?n||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:y,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},n}(s.default.Component);j.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},n.default=j,e.exports=n.default},44:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(295),a=o(r),u=(0,a.default)();e.exports=u},141:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(58),a=t(96),u=o(a),i={};e.exports=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),a=(0,u.default)(o,n);if(a.split("#").length>1&&(a=a.split("#").slice(0,-1).join("")),a.split("?").length>1&&(a=a.split("?").slice(0,-1).join("")),i[a])return i[a];var c=void 0;return e.some(function(e){if(e.matchPath){if((0,r.matchPath)(a,{path:e.path})||(0,r.matchPath)(a,{path:e.matchPath}))return c=e,i[a]=e,!0}else{if((0,r.matchPath)(a,{path:e.path,exact:!0}))return c=e,i[a]=e,!0;if((0,r.matchPath)(a,{path:e.path+"index.html"}))return c=e,i[a]=e,!0}return!1}),c}}},142:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(89),a=o(r),u=t(59),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},246:function(e,n,t){t(2),e.exports=function(e){return t.e(0x6a6307402911,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(274)})})}},247:function(e,n,t){t(2),e.exports=function(e){return t.e(62074936436630,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(275)})})}},248:function(e,n,t){t(2),e.exports=function(e){return t.e(0xdae0af7b67ab,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(276)})})}},249:function(e,n,t){t(2),e.exports=function(e){return t.e(28896511891418,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(277)})})}},250:function(e,n,t){t(2),e.exports=function(e){return t.e(0x7c1486506ed8,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(278)})})}},251:function(e,n,t){t(2),e.exports=function(e){return t.e(0xaf01f6db7841,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(279)})})}},252:function(e,n,t){t(2),e.exports=function(e){return t.e(0xfd0419ba3f23,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(280)})})}},253:function(e,n,t){t(2),e.exports=function(e){return t.e(0x67da009516e1,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(281)})})}},254:function(e,n,t){t(2),e.exports=function(e){return t.e(0xf455b8404e8f,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(282)})})}},255:function(e,n,t){t(2),e.exports=function(e){return t.e(0x6976d6f9783c,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(283)})})}},256:function(e,n,t){t(2),e.exports=function(e){return t.e(0xe04f939be23b,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(284)})})}},257:function(e,n,t){t(2),e.exports=function(e){return t.e(0x66a4600063f3,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(285)})})}},258:function(e,n,t){t(2),e.exports=function(e){return t.e(0x81b8806e4260,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(286)})})}},4:function(e,n,t){t(2),e.exports=function(e){return t.e(60335399758886,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(91)})})}},259:function(e,n,t){t(2),e.exports=function(e){return t.e(0x893062c45f0f,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(287)})})}},260:function(e,n,t){t(2),e.exports=function(e){return t.e(81381972371557,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(288)})})}},261:function(e,n,t){t(2),e.exports=function(e){return t.e(0xecb33053236e,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(289)})})}},262:function(e,n,t){t(2),e.exports=function(e){return t.e(0xfe1c7534ce6d,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(290)})})}},263:function(e,n,t){t(2),e.exports=function(e){return t.e(20526502250847,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(291)})})}},243:function(e,n,t){t(2),e.exports=function(e){return t.e(0x67ef26645b2a,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(143)})})}},95:function(e,n,t){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}n.__esModule=!0,n.publicLoader=void 0;var r=t(1),a=(o(r),t(141)),u=o(a),i=t(44),c=o(i),s=t(96),l=o(s),f=void 0,p={},d={},m={},h={},g={},y=[],j=[],v={},x="",R=[],b={},w=function(e){return e&&e.default||e},N=void 0,C=!0,P=[],_={},k={},O=5;N=t(144)({getNextQueuedResources:function(){return R.slice(-1)[0]},createResourceDownload:function(e){L(e,function(){R=R.filter(function(n){return n!==e}),N.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){N.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){N.onPostLoadPageResources(e)});var E=function(e,n){return b[e]>b[n]?1:b[e]<b[n]?-1:0},T=function(e,n){return v[e]>v[n]?1:v[e]<v[n]?-1:0},L=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[n])e.nextTick(function(){t(null,h[n])});else{var o=void 0;o="component---"===n.slice(0,12)?d.components[n]:"layout---"===n.slice(0,9)?d.layouts[n]:d.json[n],o(function(e,o){h[n]=o,P.push({resource:n,succeeded:!e}),k[n]||(k[n]=e),P=P.slice(-O),t(e,o)})}},S=function(n,t){g[n]?e.nextTick(function(){t(null,g[n])}):k[n]?e.nextTick(function(){t(k[n])}):L(n,function(e,o){if(e)t(e);else{var r=w(o());g[n]=r,t(e,r)}})},A=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var n=P.find(function(e){return e.succeeded});return!!n},D=function(e,n){console.log(n),_[e]||(_[e]=n),A()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},U=1,M={empty:function(){j=[],v={},b={},R=[],y=[],x=""},addPagesArray:function(e){y=e,f=(0,u.default)(e,x)},addDevRequires:function(e){p=e},addProdRequires:function(e){d=e},dequeue:function(){return j.pop()},enqueue:function(e){var n=(0,l.default)(e,x);if(!y.some(function(e){return e.path===n}))return!1;var t=1/U;U+=1,v[n]?v[n]+=1:v[n]=1,M.has(n)||j.unshift(n),j.sort(T);var o=f(n);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+t:b[o.jsonName]=1+t,R.indexOf(o.jsonName)!==-1||h[o.jsonName]||R.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+t:b[o.componentChunkName]=1+t,R.indexOf(o.componentChunkName)!==-1||h[o.jsonName]||R.unshift(o.componentChunkName)),R.sort(E),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:R,resourcesCount:b}},getPages:function(){return{pathArray:j,pathCount:v}},getPage:function(e){return f(e)},has:function(e){return j.some(function(n){return n===e})},getResourcesForPathname:function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};C&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(n)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var n=e,t=Array.isArray(n),o=0,n=t?n:n[Symbol.iterator]();;){var r;if(t){if(o>=n.length)break;r=n[o++]}else{if(o=n.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),C=!1;if(_[n])return D(n,'Previously detected load failure for "'+n+'"'),t();var o=f(n);if(!o)return D(n,"A page wasn't found for \""+n+'"'),t();if(n=o.path,m[n])return e.nextTick(function(){t(m[n]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:m[n]})}),m[n];c.default.emit("onPreLoadPageResources",{path:n});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){m[n]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};t(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return S(o.componentChunkName,function(e,n){e&&D(o.path,"Loading the component for "+o.path+" failed"),r=n,i()}),S(o.jsonName,function(e,n){e&&D(o.path,"Loading the JSON for "+o.path+" failed"),a=n,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(e,n){e&&D(o.path,"Loading the Layout for "+o.path+" failed"),u=n,i()}))},peek:function(e){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(e){return j.length-j.indexOf(e)-1}};n.publicLoader={getResourcesForPathname:M.getResourcesForPathname};n.default=M}).call(n,t(297))},292:function(e,n){e.exports=[{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"home.json",path:"/home"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"cosa-facciamo.json",path:"/cosa-facciamo"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"chi-siamo.json",path:"/chi-siamo"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"progetto.json",path:"/progetto"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"ruota-dell-anno.json",path:"/ruota-dell-anno"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"fiamma-delle-dolomiti.json",path:"/fiamma-delle-dolomiti"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"come-avere-la-fiamma.json",path:"/come-avere-la-fiamma"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"realta-acceso-fiamma.json",path:"/realtà-acceso-fiamma"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"collaborazioni.json",path:"/collaborazioni"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"corsi-annuali.json",path:"/corsi-annuali"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"corso-ruota-dell-anno.json",path:"/corso-ruota-dell-anno"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"corso-seconda-spirale.json",path:"/corso-seconda-spirale"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"eventi.json",path:"/eventi"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"statuto.json",path:"/statuto"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"donazioni.json",path:"/donazioni"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"spiritualita-e-denaro.json",path:"/spiritualità-e-denaro"},{componentChunkName:"component---src-templates-article-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"contatti.json",path:"/contatti"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"}]},144:function(e,n){"use strict";e.exports=function(e){var n=e.getNextQueuedResources,t=e.createResourceDownload,o=[],r=[],a=function(){var e=n();e&&(r.push(e),t(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(n){return n!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(n){return n!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a=t(59),u=t(1),i=o(u),c=t(130),s=o(c),l=t(58),f=t(272),p=t(231),d=o(p),m=t(142),h=o(m),g=t(44),y=o(g),j=t(292),v=o(j),x=t(293),R=o(x),b=t(140),w=o(b),N=t(139),C=o(N),P=t(95),_=o(P);t(224),window.___history=h.default,window.___emitter=y.default,_.default.addPagesArray(v.default),_.default.addProdRequires(C.default),window.asyncRequires=C.default,window.___loader=_.default,window.matchPath=l.matchPath;var k=R.default.reduce(function(e,n){return e[n.fromPath]=n,e},{}),O=function(e){var n=k[e];return null!=n&&(h.default.replace(n.toPath),!0)};O(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history&&c!==!1||(window.___history=e,c=!0,e.listen(function(e,n){O(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:n})}))}function n(e,n){var t=n.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:t});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===t)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&t(145);var o=function(e){function n(t){t.page.path===_.default.getPage(e).path&&(y.default.off("onPostLoadPageResources",n),clearTimeout(o),window.___history.push(e))}var t=k[e];if(t&&(e=t.toPath),window.location.pathname!==e){var o=setTimeout(function(){y.default.off("onPostLoadPageResources",n),y.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);_.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):y.default.on("onPostLoadPageResources",n)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var c=!1,p=(0,a.apiRunner)("replaceRouterComponent",{history:h.default})[0],m=function(e){var n=e.children;return i.default.createElement(l.Router,{history:h.default},n)},g=(0,l.withRouter)(w.default);_.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,u.createElement)(p?p:m,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:n},(0,u.createElement)(g,{layout:!0,children:function(n){return(0,u.createElement)(l.Route,{render:function(t){e(t.history);var o=n?n:t;return _.default.getPage(o.location.pathname)?(0,u.createElement)(w.default,r({page:!0},o)):(0,u.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},293:function(e,n){e.exports=[]},145:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(44),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var n=e.installing;console.log("installingWorker",n),n.addEventListener("statechange",function(){switch(n.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},96:function(e,n){"use strict";n.__esModule=!0,n.default=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.substr(0,n.length)===n?e.slice(n.length):e},e.exports=n.default},146:function(e,n){"use strict";n.onRouteUpdate=function(){var e=document.querySelector("#main");e&&e.scrollTo(0,0)},n.shouldUpdateScroll=function(e){return!1}},231:function(e,n,t){!function(n,t){e.exports=t()}("domready",function(){var e,n=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return a||t.addEventListener(r,e=function(){for(t.removeEventListener(r,e),a=1;e=n.shift();)e()}),function(e){a?setTimeout(e,0):n.push(e)}})},2:function(e,n,t){"use strict";function o(){function e(e){var n=o.lastChild;return"SCRIPT"!==n.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",n)):void(n.onload=n.onerror=function(){n.onload=n.onerror=null,setTimeout(e,0)})}var n,o=document.querySelector("head"),r=t.e,a=t.s;t.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(t,e),u=null)};return!a&&n&&n[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(n||(n={}),n[o]=!0),s(!0))}))))}}o()},264:function(e,n){"use strict";e.exports=function(e,n){e.addEventListener("click",function(e){if(0!==e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||e.defaultPrevented)return!0;for(var t=null,o=e.target;o.parentNode;o=o.parentNode)if("A"===o.nodeName){t=o;break}if(!t)return!0;if(t.target&&"_self"!==t.target.toLowerCase())return!0;if(t.pathname===window.location.pathname&&""!==t.hash)return!0;if(""===t.pathname)return!0;if(t.pathname.search(/^.*\.((?!htm)[a-z0-9]{1,5})$/i)!==-1)return!0;var r=document.createElement("a");r.href=t.href;var a=document.createElement("a");return a.href=window.location.href,r.host!==a.host||(e.preventDefault(),n(t.getAttribute("href")),!1)})}},265:function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=t(56),a=t(264),u=o(a);(0,u.default)(window,function(e){(0,r.navigateTo)(e)})},266:function(e,n,t){"use strict";t(162),t(163)},135:function(e,n){"use strict";var t={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=function e(n,l,f){if("string"!=typeof l){if(s){var p=c(l);p&&p!==s&&e(n,p,f)}var d=a(l);u&&(d=d.concat(u(l)));for(var m=0;m<d.length;++m){var h=d[m];if(!(t[h]||o[h]||f&&f[h])){var g=i(l,h);try{r(n,h,g)}catch(e){}}}return n}return n}},295:function(e,n){function t(e){return e=e||Object.create(null),{on:function(n,t){(e[n]||(e[n]=[])).push(t)},off:function(n,t){e[n]&&e[n].splice(e[n].indexOf(t)>>>0,1)},emit:function(n,t){(e[n]||[]).slice().map(function(e){e(t)}),(e["*"]||[]).slice().map(function(e){e(n,t)})}}}e.exports=t},17:function(e,n){"use strict";function t(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var n={},t=0;t<10;t++)n["_"+String.fromCharCode(t)]=t;var o=Object.getOwnPropertyNames(n).map(function(e){return n[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,n){for(var o,i,c=t(e),s=1;s<arguments.length;s++){o=Object(arguments[s]);for(var l in o)a.call(o,l)&&(c[l]=o[l]);if(r){i=r(o);for(var f=0;f<i.length;f++)u.call(o,i[f])&&(c[i[f]]=o[i[f]])}}return c}},297:function(e,n){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(n){try{return l.call(null,e,0)}catch(n){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(n){try{return f.call(null,e)}catch(n){return f.call(this,e)}}}function u(){h&&d&&(h=!1,d.length?m=d.concat(m):g=-1,m.length&&i())}function i(){if(!h){var e=r(u);h=!0;for(var n=m.length;n;){for(d=m,m=[];++g<n;)d&&d[g].run();g=-1,n=m.length}d=null,h=!1,a(e)}}function c(e,n){this.fun=e,this.array=n}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(e){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,m=[],h=!1,g=-1;p.nextTick=function(e){var n=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)n[t-1]=arguments[t];m.push(new c(e,n)),1!==m.length||h||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},244:function(e,n,t){t(2),e.exports=function(e){return t.e(35783957827783,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(151)})})}},245:function(e,n,t){t(2),e.exports=function(e){return t.e(0x77c411a55ba3,function(n,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return t(152)})})}}});
//# sourceMappingURL=app-9a00b1a76bf769a8607c.js.map