(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{198:function(t,e,n){"use strict";n.r(e);var r=n(480),o=n(477),c=n(475),l=n(72),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e(r.a,[e(o.a,{attrs:{app:""}},[e(c.a),t._v(" "),e("span",{staticClass:"mr-8"},[t._v("Version: 22.04.24.0596")]),t._v(" "),e("span",[t._v("CopyRight © "+t._s((new Date).getFullYear())+" Nexis Africa Group")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},203:function(t,e,n){"use strict";var r=n(0),o=n(204);r.a.use(o.a),e.a=function(t){t.app.i18n=new o.a({locale:"en",fallbackLocale:"en",messages:{en:n(454),sw:n(455)}})}},205:function(t,e,n){"use strict";var r=n(0),o=n(95);r.a.use(o.a),e.a=function(t){var e=new o.a({customVariables:["~/assets/variables.scss"],theme:{dark:!1,themes:{dark:{primary:"#06065e",accent:"#0000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#9D0000",default:"#354141",milky:"#01242F",deposit:"#14c416"},light:{primary:"#4c4c4c",accent:"#000000",secondary:"#f49123",success:"#f49123",info:"#2196F3",warning:"#FB8C00",error:"#FF0000",default:"#FFFFFF",milky:"#FDFFF5",teal:"#51883a",whitish:"F5F5F5",deposit:"#14c416",button:"#02532b"}}}});t.app.vuetify=e,t.$vuetify=e.framework}},206:function(t,e,n){"use strict";n(4),n(46),n(47);var r={components:{"skeleton-table-loader":function(){return Promise.all([n.e(8),n.e(6)]).then(n.bind(null,463))},"skeleton-datepicker-loader":function(){return n.e(4).then(n.bind(null,461))},"skeleton-summary-card":function(){return Promise.all([n.e(7),n.e(5)]).then(n.bind(null,462))}},data:function(){return{delay:3e3}},methods:{},computed:{msisdn:function(){return localStorage.getItem("msisdn")}}};n(0).a.mixin(r)},207:function(t,e,n){"use strict";var r=n(295),o=n(296),c=new(n.n(o).a)({isCompression:!1});e.a=function(t){var e=t.store;window.onNuxtReady((function(){Object(r.a)({paths:["banks","groups"],storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})(e)}))}},208:function(t,e,n){"use strict";e.a=function(t){var e=t.$axios,n=t.store,r=t.redirect;e.onRequest((function(t){e.setHeader("Content-Type","application/json; charset=utf8"),e.setHeader("crossorigin","true"),e.setHeader("Access-Control-Allow-Origin","*"),e.setHeader("Access-Control-Allow-Credentials","true"),e.setHeader("Access-Control-Allow-Headers","Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token, Authorization, accept, origin, Cache-Control, X-Requested-With"),e.setHeader("Cache-Control: no-cache, no-store, must-revalidate"),e.setHeader("Pragma: no-cache"),e.setHeader("Expires: 0")})),e.onError((function(t){var code=parseInt(t.response&&t.response.status);400===code&&r("/400"),401===code&&n.dispatch("_logoutsession")}))}},271:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6cd9a3d1",content,!0,{sourceMap:!1})},298:function(t,e,n){"use strict";var r=n(473),o=n(478),c=n(479),l=n(460),f=n(480),d=n(458),m=n(477),h=n(133),v=n(167),w=n(196),_=n(132),y=n(197),x=n(199),k=n(41),S=n(114),R=n(476),E=n(474),C=n(475),O=(n(116),{name:"DefaultLayout",components:{"footer-component":n(198).default},data:function(){return{clipped:!1,drawer:!1,fixed:!1,messages:8,adv:7,notifications:1,menuitems:[{title:"System",icon:"cog-transfer-outline",menus:[{title:"Users",icon:"account-cog"},{title:"Settings",icon:"cog"}]},{title:"Archive",icon:"bookshelf",menus:[{title:"Power Grid",icon:"sitemap-outline"},{title:"Meter",icon:"gauge"},{title:"Customer",icon:"account-group"},{title:"POC",icon:"map-marker-path"},{title:"DCU",icon:"access-point"},{title:"QES",icon:"dots-circle"},{title:"Line Loss Rule",icon:"source-branch"},{title:"VEE Work Group",icon:"widgets"},{title:"Install Survey",icon:"magnify"},{title:"Install Plan",icon:"crosshairs"},{title:"Install Order",icon:"stack-overflow"},{title:"Help Desk",icon:"information"}]},{title:"Prepaid",icon:"domain",menus:[]},{title:"Service Request",icon:"cloud-download",menus:[]},{title:"Analytics",icon:"chart-line"},{title:"Report",icon:"file-key",menus:[]},{title:"Workflow",icon:"arrow-decision",menus:[]}],menus:[{title:"Home",icon:"view-dashboard",to:"/"},{title:"Organizations",icon:"account-group",to:"/groups"},{title:"Banks",icon:"bank",to:"/banks"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js",url:"logo.png",miniUrl:"logo.png"}},created:function(){localStorage.setItem("msisdn","255754710521")}}),F=n(72),component=Object(F.a)(O,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[e(E.a,{staticStyle:{"max-height":"97.6%"},attrs:{"mini-variant":t.miniVariant,clipped:!1,permanent:"",color:"primary",dark:"",app:"",height:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(w.a,[t.miniVariant?e(_.a,{staticClass:"px-2"},[e(x.a,{attrs:{color:"whitish"}},[e(v.a,{staticClass:"vuetify-logo",attrs:{src:t.miniUrl}})],1)],1):e(_.a,{attrs:{link:""}},[e(x.a,{attrs:{color:"whitish"}},[e(v.a,{staticClass:"vuetify-logo",attrs:{src:t.miniUrl}})],1),t._v(" "),e(k.b,[e(k.d,{staticClass:"text-h6"},[t._v("\n            NgaziTech Platform\n          ")]),t._v(" "),e(k.c,[t._v("Transactions management")])],1)],1)],1),t._v(" "),e(d.a),t._v(" "),t._l(t.menus,(function(n){return e(_.a,{key:n.title,staticClass:"pl-4",attrs:{to:n.to,color:"success"}},[e(S.a,[e(h.a,[t._v(t._s("mdi-"+n.icon))])],1),t._v(" "),e(k.b,[e(k.d,[e("span",{staticClass:"font-weight-light"},[t._v(t._s(n.title))])])],1)],1)}))],2),t._v(" "),e(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:"",color:"primary",flat:""}},[e(l.a,{attrs:{icon:"",dark:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e(h.a,[t._v("mdi-"+t._s("menu".concat(t.miniVariant?"":"-open")))])],1),t._v(" "),e(l.a,{attrs:{icon:"",dark:""}},[e(h.a,[t._v("mdi-selection")])],1),t._v(" "),e(l.a,{attrs:{icon:"",dark:""}},[e(h.a,[t._v("mdi-home")])],1),t._v(" "),e(C.a),t._v(" "),e(c.a,{staticClass:"ml-6",attrs:{content:t.notifications,value:t.notifications,color:"secondary",overlap:""}},[e(h.a,{attrs:{dark:""}},[t._v("\n        mdi-bell\n      ")])],1)],1),t._v(" "),e(R.a,[e(f.a,{staticClass:"ma-2",attrs:{height:"100%",fluid:""}},[e("nuxt")],1)],1),t._v(" "),e(E.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[e(w.a,[e(_.a,{nativeOn:{click:function(e){t.right=!t.right}}},[e(y.a,[e(h.a,{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),e(k.d,[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e(m.a,{attrs:{absolute:!t.fixed,app:""}},[e("footer-component")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{FooterComponent:n(198).default})},309:function(t,e,n){n(310),t.exports=n(311)},358:function(t,e,n){"use strict";n(271)},359:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),r.locals={},t.exports=r},362:function(t,e,n){var content=n(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2a082f94",content,!0,{sourceMap:!1})},363:function(t,e,n){var r=n(19),o=n(364),c=n(365),l=n(366),f=n(367),d=n(368),m=n(369),h=n(370),v=n(371),w=r((function(i){return i[1]})),_=o(c),y=o(l),x=o(f),k=o(d),S=o(m),R=o(h),E=o(v);w.push([t.i,'@font-face{font-family:"Oxygen";src:local("Oxygen"),url('+_+') format("truetype")}@font-face{font-family:"FiraSans";font-style:normal;font-weight:400;src:local("Fira Sans"),url('+y+') format("truetype")}@font-face{font-family:"ProductSans";font-style:normal;font-weight:400;src:local("Product Sans"),url('+x+') format("truetype")}@font-face{font-family:"MontSerrat";font-style:normal;font-weight:400;src:local("MontSerrat"),url('+k+') format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;src:local("Roboto"),url('+S+') format("truetype")}@font-face{font-family:"SofiaPro";font-style:normal;font-weight:400;src:local("Sofia Pro"),url('+R+') format("truetype")}@font-face{font-family:"Mulish";font-style:normal;src:url('+E+')}#__nuxt .app{font-family:"FiraSans",sans-serif}body #app,html{background:#e5e5e5!important;margin:0;overflow-x:hidden;color:#2c2b2e}a,body #app,div,h1,h2,h3,h4,h5,h6,html,p,p.primary--text.text-h6,span{-webkit-font-smoothing:antialiased;font-style:normal!important;font-family:"Mulish",sans-serif!important;font-size:12px!important;font-weight:100}main{background-color:#f4f4f4;background-attachment:fixed;background-position:50%;background-repeat:no-repeat;background-size:cover;box-shadow:inset 0 0 0 1000px rgba(63,203,98,0);zoom:90%}main.v-main.default{zoom:0}main.v-main.login{background:transparent;background-image:url(https://vicsguide.com/wp-content/uploads/2021/07/Best-loan-apps.jpg);height:70%;background-repeat:no-repeat;background-size:cover}@media screen and (-webkit-min-device-pixel-ratio:0){::i-block-chrome,main{zoom:80%}}.v-application--wrap{background:transparent;height:70%;background-repeat:no-repeat;background-size:cover}.v-application--wrap footer.v-footer{background-color:#fff!important;opacity:.65;text-decoration-color:#000}header,nav{zoom:90%}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.badge{z-index:10!important}.apexcharts-toolbar{z-index:0!important}.vuetify-logo{height:180px;width:180px;transform:rotateY(560deg);animation:turn 3.5s ease-out 1s forwards}@keyframes turn{to{transform:rotateY(0deg)}}',""]),w.locals={},t.exports=w},365:function(t,e,n){t.exports=n.p+"fonts/Oxygen-Regular.9d375dd.ttf"},366:function(t,e,n){t.exports=n.p+"fonts/FiraSans-Regular.1c0bf07.ttf"},367:function(t,e,n){t.exports=n.p+"fonts/ProductSans-Regular.2765c69.ttf"},368:function(t,e,n){t.exports=n.p+"fonts/Montserrat-Regular.3cd7866.ttf"},369:function(t,e,n){t.exports=n.p+"fonts/Roboto-Regular.03523cf.ttf"},370:function(t,e,n){t.exports=n.p+"fonts/Sofia-Pro-Medium.5b20abb.otf"},371:function(t,e,n){t.exports=n.p+"fonts/Mulish-Regular.18a0df4.ttf"},431:function(t,e,n){"use strict";n.r(e);e.default={namespaced:!1,state:function(){return{count:0}},mutations:{},actions:{},getters:{}}},432:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(78),{_fetchbanks:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=t.commit)("GET_BANKS"),r.next=4,n.$axios.$post("/api/banks",e).then((function(t){o("GET_BANKS_SUCCESS",t)})).catch((function(){o("GET_BANKS_ERROR")}));case 4:case"end":return r.stop()}}),r)})))()}});e.default={namespaced:!1,state:function(){return{banks:null}},mutations:{GET_BANKS:function(t){t.showLoader=!0},GET_BANKS_FAILED:function(t){t.showLoader=!1},GET_BANKS_ERROR:function(t){t.showLoader=!1},GET_BANKS_SUCCESS:function(t,e){t.showLoader=!1,t.banks=e}},actions:o,getters:{banks:function(t){return t.banks}}}},433:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(78),{_fetchgroups:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=t.commit)("GET_GROUPS"),r.next=4,n.$axios.$post("/api/groups",e).then((function(t){o("GET_GROUPS_SUCCESS",t)})).catch((function(){o("GET_GROUPS_ERROR")}));case 4:case"end":return r.stop()}}),r)})))()},_addgroupservicename:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,n.$axios.$post("/api/group/service",e).then((function(t){})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()},_editgroupservicename:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,n.$axios.$put("/api/group/service",e).then((function(t){})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()},_addbankaccount:function(t,body){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.comit,n.next=3,e.$axios.$post("/api/group/account",body).then((function(t){})).catch((function(){}));case 3:case"end":return n.stop()}}),n)})))()},_addgroupleader:function(t,body){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.comit,n.next=3,e.$axios.$post("/api/group/leader",body).then((function(t){})).catch((function(){}));case 3:case"end":return n.stop()}}),n)})))()},_deletegroupleader:function(t,body){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.dispatch,n.next=3,e.$axios.$delete("/api/group/leader",body).then((function(t){})).catch((function(){}));case 3:case"end":return n.stop()}}),n)})))()},_updatepaymentreference:function(t,body){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.dispatch,n.next=3,e.$axios.$put("/api/group/ref",body).then((function(t){})).catch((function(){}));case 3:return n.next=5,n.sent;case 5:case"end":return n.stop()}}),n)})))()}});e.default={namespaced:!1,state:function(){return{groups:null}},mutations:{GET_GROUPS:function(t){t.showLoader=!0},GET_GROUPS_FAILED:function(t){t.showLoader=!1},GET_GROUPS_ERROR:function(t){t.showLoader=!1},GET_GROUPS_SUCCESS:function(t,e){t.showLoader=!1,t.groups=e}},actions:o,getters:{groups:function(t){return t.groups}}}},434:function(t,e,n){"use strict";n.r(e);var r=n(14),o=(n(78),{_fetchgroupusers:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=t.commit)("GET_USERS"),r.next=4,n.$axios.$post("/api/users",e).then((function(t){o("GET_USERS_SUCCESS",t)})).catch((function(){o("GET_USERS_ERROR")}));case 4:case"end":return r.stop()}}),r)})))()},_addgroupuser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dispatch,r.next=3,n.$axios.$post("/api/users",e).then((function(t){o("_fetchgroupusers",null,{root:!0})})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()},_editgroupuser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dispatch,r.next=3,n.$axios.$put("/api/users",e).then((function(t){o("_fetchgroupusers",null,{root:!0})})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()},_deletegroupuser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dispatch,r.next=3,n.$axios.$post("/api/users",e).then((function(t){o("_fetchgroupusers",null,{root:!0})})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()}});e.default={namespaced:!1,state:function(){return{users:null}},mutations:{GET_USERS:function(t){t.showLoader=!0},GET_USERS_FAILED:function(t){t.showLoader=!1},GET_USERS_ERROR:function(t){t.showLoader=!1},GET_USERS_SUCCESS:function(t,e){t.showLoader=!1,t.users=e}},actions:o,getters:{users:function(t){return t.users}}}},454:function(t){t.exports=JSON.parse('{"label":{"heading":{"applicationname":"Ospic HMIS","applicationsettings":"Ospic Settings"},"button":{"btncontactus":"Contact Us","btnaddservicename":"Add Service Name","btnaddbankaccount":"Add bank account","addgroupleader":"Add group leader","btncancel":"Cancel","btnsave":"Save","btnyessure":"Yes I\'m Sure","btnnotsure":"No I\'m not","adduser":"Add user"},"menu":{"home":"Home"},"message":{"nodataavailable":"No Data available ...","aboutusmessage":"Nbs Administrator Dashboard Application is a Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","thanksmessage":"Thank you for developing with {{app_name}} and I look forward to bringing more exciting features in the future.","motto":"Making awesome stuffs","saveschedule":"By Clicking save this repayment schedule will be saved and can be re-calculated later. \\n\\n Are you sure you want to save this ? \\n\\n If yes Provide the Name below and click save button to save ","profileupdate":"By clicking *I Agree* you are agreeing to the Terms and Conditions and your profile informattions will be updated with a newly data you provide and your login infomations will also be updated. So you will be requested to re-login with new username if any. \\n\\n Do you agree ?"},"contacts":{"community":"Community"},"dialogs":{"deleteconfirmdialog":"Are you sure you want to delete this item ?"},"tooltip":{"tooltiphello":"Hello there"},"title":{"groupservices":"Group Services"},"tab":{"appointments":"Appointments"},"search":{"searchreportbynameanddescription":"Search report by name/desc"},"breadcrumb":{"dashboard":"Dashboard"}}}')},455:function(t){t.exports=JSON.parse('{"label":{"heading":{"applicationname":"Ospic HMIS","applicationsettings":"Ospic Settings"},"button":{"btncontactus":"Contact Us"},"menu":{"dashboard":"Dashibodi"},"message":{"nodataavailable":"No Data available ..."},"contacts":{"community":"Community"},"dialogs":{"deleteconfirmdialog":"Are you sure you want to delete this item ?"},"tooltip":{"tooltiphello":"Hello there"},"titles":{"settings":"Mipangilio"}}}')},84:function(t,e,n){"use strict";var r=n(473),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(358),n(72)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[309,27,10,28]]]);