(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{197:function(t,e,n){"use strict";n.r(e);var o=n(471),r=n(467),c=n(465),l=n(72),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e(o.a,[e(r.a,{attrs:{app:""}},[e(c.a),t._v(" "),e("span",{staticClass:"mr-8"},[t._v("Version: 22.04.24.0596")]),t._v(" "),e("span",[t._v("CopyRight © "+t._s((new Date).getFullYear())+" Nexis Africa Group")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},202:function(t,e,n){"use strict";var o=n(1),r=n(95);o.a.use(r.a),e.a=function(t){var e=new r.a({customVariables:["~/assets/variables.scss"],theme:{dark:!1,themes:{dark:{primary:"#06065e",accent:"#0000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#9D0000",default:"#354141",milky:"#01242F",deposit:"#14c416"},light:{primary:"#4c4c4c",accent:"#000000",secondary:"#f49123",success:"#f49123",info:"#2196F3",warning:"#FB8C00",error:"#FF0000",default:"#FFFFFF",milky:"#FDFFF5",teal:"#51883a",whitish:"F5F5F5",deposit:"#14c416",button:"#02532b"}}}});t.app.vuetify=e,t.$vuetify=e.framework}},203:function(t,e,n){"use strict";n(3),n(42),n(44);var o={components:{"skeleton-table-loader":function(){return Promise.all([n.e(4),n.e(2)]).then(n.bind(null,453))},"skeleton-datepicker-loader":function(){return n.e(0).then(n.bind(null,451))},"skeleton-summary-card":function(){return Promise.all([n.e(3),n.e(1)]).then(n.bind(null,452))}},data:function(){return{}},methods:{},computed:{msisdn:function(){return localStorage.getItem("msisdn")}}};n(1).a.mixin(o)},204:function(t,e,n){"use strict";var o=n(289),r=n(290),c=new(n.n(r).a)({isCompression:!1});e.a=function(t){var e=t.store;window.onNuxtReady((function(){Object(o.a)({paths:["banks","groups"],storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})(e)}))}},205:function(t,e,n){"use strict";e.a=function(t,e){var n=t.$axios;t.redirect,t.store;n.setHeader("Content-Type","application/json");var o=n.create({headers:{common:{Accept:"*/*","Content-Type":"application/json"}}});o.onRequest((function(t){t.withCredentials=!1;localStorage.getItem("accessToken");o.setHeader("Content-Type","application/json"),o.setHeader("Accept","*/*"),t.url})),o.onError((function(t){t.response.data.defaultUserMessage,parseInt(t.response&&t.response.status)})),o.setBaseURL("http://localhost:8080/api/v1"),e("api",o)}},265:function(t,e,n){var content=n(352);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("6cd9a3d1",content,!0,{sourceMap:!1})},292:function(t,e,n){"use strict";var o=n(464),r=n(469),c=n(470),l=n(450),f=n(471),d=n(448),m=n(467),h=n(133),v=n(166),_=n(195),y=n(132),k=n(196),w=n(198),x=n(45),S=n(114),R=n(466),E=n(468),C=n(465),F=(n(116),{name:"DefaultLayout",components:{"footer-component":n(197).default},data:function(){return{clipped:!1,drawer:!1,fixed:!1,messages:8,adv:7,notifications:1,menuitems:[{title:"System",icon:"cog-transfer-outline",menus:[{title:"Users",icon:"account-cog"},{title:"Settings",icon:"cog"}]},{title:"Archive",icon:"bookshelf",menus:[{title:"Power Grid",icon:"sitemap-outline"},{title:"Meter",icon:"gauge"},{title:"Customer",icon:"account-group"},{title:"POC",icon:"map-marker-path"},{title:"DCU",icon:"access-point"},{title:"QES",icon:"dots-circle"},{title:"Line Loss Rule",icon:"source-branch"},{title:"VEE Work Group",icon:"widgets"},{title:"Install Survey",icon:"magnify"},{title:"Install Plan",icon:"crosshairs"},{title:"Install Order",icon:"stack-overflow"},{title:"Help Desk",icon:"information"}]},{title:"Prepaid",icon:"domain",menus:[]},{title:"Service Request",icon:"cloud-download",menus:[]},{title:"Analytics",icon:"chart-line"},{title:"Report",icon:"file-key",menus:[]},{title:"Workflow",icon:"arrow-decision",menus:[]}],menus:[{title:"Home",icon:"view-dashboard",to:"/"},{title:"Groups",icon:"account-group",to:"/groups"},{title:"Banks",icon:"bank",to:"/banks"},{title:"DCU",icon:"access-point"},{title:"QES",icon:"dots-circle"},{title:"Line Loss Rule",icon:"source-branch"},{title:"VEE Work Group",icon:"widgets"},{title:"Install Survey",icon:"magnify"},{title:"Install Plan",icon:"crosshairs"},{title:"Install Order",icon:"stack-overflow"},{title:"Help Desk",icon:"information"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js",url:"logo.png",miniUrl:"logo.png"}},created:function(){localStorage.setItem("msisdn","255754710521")}}),G=n(72),component=Object(G.a)(F,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[e(E.a,{staticStyle:{"max-height":"97.6%"},attrs:{"mini-variant":t.miniVariant,clipped:!1,permanent:"",color:"primary",dark:"",app:"",height:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(_.a,[t.miniVariant?e(y.a,{staticClass:"px-2"},[e(w.a,{attrs:{color:"whitish"}},[e(v.a,{staticClass:"vuetify-logo",attrs:{src:t.miniUrl}})],1)],1):e(y.a,{attrs:{link:""}},[e(w.a,{attrs:{color:"whitish"}},[e(v.a,{staticClass:"vuetify-logo",attrs:{src:t.miniUrl}})],1),t._v(" "),e(x.a,[e(x.c,{staticClass:"text-h6"},[t._v("\n            NgaziTech Platform\n          ")]),t._v(" "),e(x.b,[t._v("Transactions management")])],1)],1)],1),t._v(" "),e(d.a),t._v(" "),t._l(t.menus,(function(n){return e(y.a,{key:n.title,staticClass:"pl-4",attrs:{to:n.to,color:"success"}},[e(S.a,[e(h.a,[t._v(t._s("mdi-"+n.icon))])],1),t._v(" "),e(x.a,[e(x.c,[e("span",{staticClass:"font-weight-light"},[t._v(t._s(n.title))])])],1)],1)}))],2),t._v(" "),e(r.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:"",color:"primary",flat:""}},[e(l.a,{attrs:{icon:"",dark:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e(h.a,[t._v("mdi-"+t._s("menu".concat(t.miniVariant?"":"-open")))])],1),t._v(" "),e(l.a,{attrs:{icon:"",dark:""}},[e(h.a,[t._v("mdi-selection")])],1),t._v(" "),e(l.a,{attrs:{icon:"",dark:""}},[e(h.a,[t._v("mdi-home")])],1),t._v(" "),e(C.a),t._v(" "),e(c.a,{staticClass:"ml-6",attrs:{content:t.notifications,value:t.notifications,color:"secondary",overlap:""}},[e(h.a,{attrs:{dark:""}},[t._v("\n        mdi-bell\n      ")])],1)],1),t._v(" "),e(R.a,[e(f.a,{staticClass:"ma-2",attrs:{height:"100%",fluid:""}},[e("nuxt")],1)],1),t._v(" "),e(E.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[e(_.a,[e(y.a,{nativeOn:{click:function(e){t.right=!t.right}}},[e(k.a,[e(h.a,{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),e(x.c,[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e(m.a,{attrs:{absolute:!t.fixed,app:""}},[e("footer-component")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{FooterComponent:n(197).default})},302:function(t,e,n){n(303),t.exports=n(304)},351:function(t,e,n){"use strict";n(265)},352:function(t,e,n){var o=n(18)((function(i){return i[1]}));o.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),o.locals={},t.exports=o},355:function(t,e,n){var content=n(356);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("2a082f94",content,!0,{sourceMap:!1})},356:function(t,e,n){var o=n(18),r=n(357),c=n(358),l=n(359),f=n(360),d=n(361),m=n(362),h=n(363),v=n(364),_=o((function(i){return i[1]})),y=r(c),k=r(l),w=r(f),x=r(d),S=r(m),R=r(h),E=r(v);_.push([t.i,'@font-face{font-family:"Oxygen";src:local("Oxygen"),url('+y+') format("truetype")}@font-face{font-family:"FiraSans";font-style:normal;font-weight:400;src:local("Fira Sans"),url('+k+') format("truetype")}@font-face{font-family:"ProductSans";font-style:normal;font-weight:400;src:local("Product Sans"),url('+w+') format("truetype")}@font-face{font-family:"MontSerrat";font-style:normal;font-weight:400;src:local("MontSerrat"),url('+x+') format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;src:local("Roboto"),url('+S+') format("truetype")}@font-face{font-family:"SofiaPro";font-style:normal;font-weight:400;src:local("Sofia Pro"),url('+R+') format("truetype")}@font-face{font-family:"Mulish";font-style:normal;src:url('+E+')}#__nuxt .app{font-family:"FiraSans",sans-serif}body #app,html{background:#e5e5e5!important;margin:0;overflow-x:hidden;color:#2c2b2e}a,body #app,div,h1,h2,h3,h4,h5,h6,html,p,p.primary--text.text-h6,span{-webkit-font-smoothing:antialiased;font-style:normal!important;font-family:"Mulish",sans-serif!important;font-size:12px!important;font-weight:100}main{background-color:#f4f4f4;background-attachment:fixed;background-position:50%;background-repeat:no-repeat;background-size:cover;box-shadow:inset 0 0 0 1000px rgba(63,203,98,0);zoom:90%}main.v-main.default{zoom:0}main.v-main.login{background:transparent;background-image:url(https://vicsguide.com/wp-content/uploads/2021/07/Best-loan-apps.jpg);height:70%;background-repeat:no-repeat;background-size:cover}@media screen and (-webkit-min-device-pixel-ratio:0){::i-block-chrome,main{zoom:80%}}.v-application--wrap{background:transparent;height:70%;background-repeat:no-repeat;background-size:cover}.v-application--wrap footer.v-footer{background-color:#fff!important;opacity:.65;text-decoration-color:#000}header,nav{zoom:90%}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.badge{z-index:10!important}.apexcharts-toolbar{z-index:0!important}.vuetify-logo{height:180px;width:180px;transform:rotateY(560deg);animation:turn 3.5s ease-out 1s forwards}@keyframes turn{to{transform:rotateY(0deg)}}',""]),_.locals={},t.exports=_},358:function(t,e,n){t.exports=n.p+"fonts/Oxygen-Regular.9d375dd.ttf"},359:function(t,e,n){t.exports=n.p+"fonts/FiraSans-Regular.1c0bf07.ttf"},360:function(t,e,n){t.exports=n.p+"fonts/ProductSans-Regular.2765c69.ttf"},361:function(t,e,n){t.exports=n.p+"fonts/Montserrat-Regular.3cd7866.ttf"},362:function(t,e,n){t.exports=n.p+"fonts/Roboto-Regular.03523cf.ttf"},363:function(t,e,n){t.exports=n.p+"fonts/Sofia-Pro-Medium.5b20abb.otf"},364:function(t,e,n){t.exports=n.p+"fonts/Mulish-Regular.18a0df4.ttf"},425:function(t,e,n){"use strict";n.r(e);e.default={namespaced:!1,state:function(){return{count:0}},mutations:{},actions:{},getters:{}}},426:function(t,e,n){"use strict";n.r(e);var o=n(24),r=(n(91),{_fetchbanks:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(r=t.commit)("GET_BANKS"),o.next=4,n.$api.$post("/banks",e).then((function(t){r("GET_BANKS_SUCCESS",t)})).catch((function(){r("GET_BANKS_ERROR")}));case 4:case"end":return o.stop()}}),o)})))()}});e.default={namespaced:!1,state:function(){return{banks:null}},mutations:{GET_BANKS:function(t){t.showLoader=!0},GET_BANKS_FAILED:function(t){t.showLoader=!1},GET_BANKS_ERROR:function(t){t.showLoader=!1},GET_BANKS_SUCCESS:function(t,e){t.showLoader=!1,t.banks=e}},actions:r,getters:{banks:function(t){return t.banks}}}},427:function(t,e,n){"use strict";n.r(e);var o=n(24),r=(n(91),{_fetchgroups:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function o(){var r;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return(r=t.commit)("GET_GROUPS"),o.next=4,n.$api.$post("/groups",e).then((function(t){r("GET_GROUPS_SUCCESS",t)})).catch((function(){r("GET_GROUPS_ERROR")}));case 4:case"end":return o.stop()}}),o)})))()}});e.default={namespaced:!1,state:function(){return{groups:null}},mutations:{GET_GROUPS:function(t){t.showLoader=!0},GET_GROUPS_FAILED:function(t){t.showLoader=!1},GET_GROUPS_ERROR:function(t){t.showLoader=!1},GET_GROUPS_SUCCESS:function(t,e){t.showLoader=!1,t.groups=e}},actions:r,getters:{groups:function(t){return t.groups}}}},83:function(t,e,n){"use strict";var o=n(464),r={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(351),n(72)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[302,17,8,18]]]);