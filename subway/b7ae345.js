(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{200:function(t,e,n){"use strict";n.r(e);var r=n(485),o=n(483),c=n(481),l=n(59),component=Object(l.a)({},(function(){var t=this,e=t._self._c;return e(r.a,[e(o.a,{attrs:{app:""}},[e(c.a),t._v(" "),e("span",{staticClass:"mr-8"},[t._v("Version: 22.04.24.0596")]),t._v(" "),e("span",[t._v("CopyRight © "+t._s((new Date).getFullYear())+" Nexis Africa Group")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},205:function(t,e,n){"use strict";var r=n(0),o=n(206);r.a.use(o.a),e.a=function(t){t.app.i18n=new o.a({locale:"en",fallbackLocale:"en",messages:{en:n(462),sw:n(463)}})}},207:function(t,e,n){"use strict";var r=n(0),o=n(94);r.a.use(o.a),e.a=function(t){var e=new o.a({customVariables:["~/assets/variables.scss"],theme:{dark:!1,themes:{dark:{primary:"#06065e",accent:"#0000",secondary:"#ffffff",success:"#4CAF50",info:"#2196F3",warning:"#FB8C00",error:"#9D0000",default:"#354141",milky:"#01242F",deposit:"#14c416"},light:{primary:"#4c4c4c",accent:"#000000",secondary:"#f49123",success:"#f49123",info:"#2196F3",warning:"#FB8C00",error:"#FF0000",default:"#FFFFFF",milky:"#FDFFF5",teal:"#51883a",whitish:"F5F5F5",deposit:"#14c416",button:"#02532b"}}}});t.app.vuetify=e,t.$vuetify=e.framework}},208:function(t,e,n){"use strict";n(4),n(46),n(47);var r={components:{"skeleton-table-loader":function(){return Promise.all([n.e(8),n.e(6)]).then(n.bind(null,471))},"skeleton-datepicker-loader":function(){return n.e(4).then(n.bind(null,469))},"skeleton-summary-card":function(){return Promise.all([n.e(7),n.e(5)]).then(n.bind(null,470))}},data:function(){return{delay:3e3}},methods:{},computed:{msisdn:function(){return localStorage.getItem("msisdn")}}};n(0).a.mixin(r)},209:function(t,e,n){"use strict";var r=n(300),o=n(301),c=new(n.n(o).a)({isCompression:!1});e.a=function(t){var e=t.store;window.onNuxtReady((function(){Object(r.a)({paths:["banks","groups"],storage:{getItem:function(t){return c.get(t)},setItem:function(t,e){return c.set(t,e)},removeItem:function(t){return c.remove(t)}}})(e)}))}},210:function(t,e,n){"use strict";(function(t){e.a=function(e,n){var r=e.$axios,o=(e.redirect,e.store);r.setHeader("Content-Type","application/json"),r.defaults.withCredentials=!0;var c=r.create({headers:{common:{Accept:"*/*","Content-Type":"application/json"}}});c.onRequest((function(t){})),c.onError((function(t){t.response.data.defaultUserMessage,parseInt(t.response&&t.response.status)})),c.onResponseError((function(t){var code=parseInt(t.response&&t.response.status);if(404===code){var e=t.response.data.defaultUserMessage;Vue.toasted.error("".concat(e),{icon:"close-circle",position:"top-center",keepOnHover:!0,type:"error",theme:"bubble",duration:5e3})}if(401===code){t.response.data.error;o.dispatch("_logoutsession")}}));var l="dev"===t.env.DEPLOY_ENV?"http://localhost:8082/api/v1":"https://eppg.ngazi.co.tz/paymentGW/portal";c.setBaseURL(l),n("api",c)}}).call(this,n(155))},278:function(t,e,n){var content=n(366);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6cd9a3d1",content,!0,{sourceMap:!1})},286:function(t,e,n){var content=n(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1bfbe452",content,!0,{sourceMap:!1})},303:function(t,e,n){"use strict";var r=n(479),o=n(484),c=n(468),l=n(485),f=n(467),d=n(483),m=n(198),h=n(168),v=n(197),w=n(130),_=n(199),S=n(201),y=n(40),R=n(112),x=n(482),k=n(480),E=n(481),O=(n(115),{name:"DefaultLayout",components:{"footer-component":n(200).default},data:function(){return{clipped:!1,drawer:!1,fixed:!1,messages:8,adv:7,notifications:1,menus:[{title:"Home",icon:"home-outline",to:"/"},{title:"Organizations",icon:"account-group-outline",to:"/groups"},{title:"Banks",icon:"bank-outline",to:"/banks"}],miniVariant:!1,right:!0,rightDrawer:!1,title:"Vuetify.js",url:"logo.png",miniUrl:"logo.png"}},created:function(){localStorage.setItem("msisdn","255754710521")}}),C=n(59),component=Object(C.a)(O,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[e(k.a,{staticStyle:{"max-height":"97.6%"},attrs:{"mini-variant":t.miniVariant,clipped:!1,permanent:"",color:"primary",dark:"",app:"",height:"100%"},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[e(v.a,[t.miniVariant?e(w.a,{staticClass:"px-2"},[e(S.a,{attrs:{color:"whitish"}},[e(h.a,{staticClass:"vuetify-logo",attrs:{src:t.miniUrl}})],1)],1):e(w.a,{attrs:{link:""}},[e(S.a,{attrs:{color:"whitish"}},[e(h.a,{staticClass:"vuetify-logo",attrs:{src:t.miniUrl}})],1),t._v(" "),e(y.b,[e(y.d,{staticClass:"text-h6"},[t._v("\n            NgaziTech Platform\n          ")]),t._v(" "),e(y.c,[t._v("Transactions management")])],1)],1)],1),t._v(" "),e(f.a),t._v(" "),t._l(t.menus,(function(n){return e(w.a,{key:n.title,staticClass:"pl-4",attrs:{to:n.to,color:"success"}},[e(R.a,[e(m.a,[t._v(t._s("mdi-"+n.icon))])],1),t._v(" "),e(y.b,[e(y.d,[e("span",{staticClass:"font-weight-light"},[t._v(t._s(n.title))])])],1)],1)}))],2),t._v(" "),e(o.a,{attrs:{"clipped-left":t.clipped,fixed:"",app:"",color:"primary",flat:""}},[e(c.a,{attrs:{icon:"",dark:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[e(m.a,[t._v("mdi-"+t._s("menu".concat(t.miniVariant?"":"-open")))])],1),t._v(" "),e(E.a),t._v(" "),e(c.a,{attrs:{fab:"",small:"",color:"red"},on:{click:function(e){return t.$store.dispatch("_logoutsession")}}},[e(m.a,[t._v("mdi-power")])],1)],1),t._v(" "),e(x.a,[e(l.a,{staticClass:"ma-2",attrs:{height:"100%",fluid:""}},[e("nuxt")],1)],1),t._v(" "),e(k.a,{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[e(v.a,[e(w.a,{nativeOn:{click:function(e){t.right=!t.right}}},[e(_.a,[e(m.a,{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),e(y.d,[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),e(d.a,{attrs:{absolute:!t.fixed,app:""}},[e("footer-component")],1)],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{FooterComponent:n(200).default})},304:function(t,e,n){"use strict";var r=n(479),o=n(482),c={data:function(){return{locales:["English","Kiswahili"],socials:[{icon:"mdi-twitter",link:"https://twitter.com/MarketGrid_?ref_src=twsrc%5Etfw"},{icon:"mdi-facebook",link:null},{icon:"mdi-linkedin",link:null},{icon:"mdi-instagram",link:null}]}},head:function(){return{title:"Home Page"}}},l=(n(436),n(59)),component=Object(l.a)(c,(function(){var t=this._self._c;return t(r.a,{staticClass:"app login"},[t(o.a,{staticClass:"transparent"},[t("nuxt")],1)],1)}),[],!1,null,"750a0052",null);e.a=component.exports},314:function(t,e,n){n(315),t.exports=n(316)},353:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.app,n=(t.route,t.from,t.store);t.redirect;e.router.beforeEach((function(t,e,r){n.getters.isAuthenticated||"/signin"===t.path?r():n.dispatch("_logoutsession")})),e.router.afterEach((function(t,e){}))}},365:function(t,e,n){"use strict";n(278)},366:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,"h1[data-v-35e10596]{font-size:20px}",""]),r.locals={},t.exports=r},369:function(t,e,n){var content=n(370);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("2a082f94",content,!0,{sourceMap:!1})},370:function(t,e,n){var r=n(19),o=n(371),c=n(372),l=n(373),f=n(374),d=n(375),m=n(376),h=n(377),v=n(378),w=r((function(i){return i[1]})),_=o(c),S=o(l),y=o(f),R=o(d),x=o(m),k=o(h),E=o(v);w.push([t.i,'@font-face{font-family:"Oxygen";src:local("Oxygen"),url('+_+') format("truetype")}@font-face{font-family:"FiraSans";font-style:normal;font-weight:400;src:local("Fira Sans"),url('+S+') format("truetype")}@font-face{font-family:"ProductSans";font-style:normal;font-weight:400;src:local("Product Sans"),url('+y+') format("truetype")}@font-face{font-family:"MontSerrat";font-style:normal;font-weight:400;src:local("MontSerrat"),url('+R+') format("truetype")}@font-face{font-family:"Roboto";font-style:normal;font-weight:400;src:local("Roboto"),url('+x+') format("truetype")}@font-face{font-family:"SofiaPro";font-style:normal;font-weight:400;src:local("Sofia Pro"),url('+k+') format("truetype")}@font-face{font-family:"Mulish";font-style:normal;src:url('+E+')}#__nuxt .app{font-family:"FiraSans",sans-serif}body #app,html{-webkit-font-smoothing:antialiased;background:#e5e5e5!important;color:#2c2b2e;font-weight:100;margin:0;overflow-x:hidden}a,body #app,div,h1,h2,h3,h4,h5,h6,html,p,span{font-family:"Mulish",sans-serif!important;font-size:12px!important;font-style:normal!important}a,div,h1,h2,h3,h4,h5,h6,p,span{-webkit-font-smoothing:antialiased;font-weight:100}p.primary--text.text-h6{-webkit-font-smoothing:antialiased;font-family:"Mulish",sans-serif!important;font-size:12px!important;font-style:normal!important;font-weight:100}main{zoom:90%;background-attachment:fixed;background-color:#f4f4f4;background-position:50%;background-repeat:no-repeat;background-size:cover;box-shadow:inset 0 0 0 1000px rgba(63,203,98,0)}main.v-main.default{zoom:0}main.v-main.login{background:transparent;background-image:url(https://vicsguide.com/wp-content/uploads/2021/07/Best-loan-apps.jpg);background-repeat:no-repeat;background-size:cover;height:70%}@media screen and (-webkit-min-device-pixel-ratio:0){::i-block-chrome,main{zoom:80%}}.v-application--wrap{background:transparent;background-repeat:no-repeat;background-size:cover;height:70%}.v-application--wrap footer.v-footer{background-color:#fff!important;opacity:.65;text-decoration-color:#000}header,nav{zoom:90%}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}.badge{z-index:10!important}.apexcharts-toolbar{z-index:0!important}.vuetify-logo{animation:turn 3.5s ease-out 1s forwards;height:180px;transform:rotateY(560deg);width:180px}@keyframes turn{to{transform:rotateY(0deg)}}',""]),w.locals={},t.exports=w},372:function(t,e,n){t.exports=n.p+"fonts/Oxygen-Regular.9d375dd.ttf"},373:function(t,e,n){t.exports=n.p+"fonts/FiraSans-Regular.1c0bf07.ttf"},374:function(t,e,n){t.exports=n.p+"fonts/ProductSans-Regular.2765c69.ttf"},375:function(t,e,n){t.exports=n.p+"fonts/Montserrat-Regular.3cd7866.ttf"},376:function(t,e,n){t.exports=n.p+"fonts/Roboto-Regular.03523cf.ttf"},377:function(t,e,n){t.exports=n.p+"fonts/Sofia-Pro-Medium.5b20abb.otf"},378:function(t,e,n){t.exports=n.p+"fonts/Mulish-Regular.18a0df4.ttf"},436:function(t,e,n){"use strict";n(286)},437:function(t,e,n){var r=n(19)((function(i){return i[1]}));r.push([t.i,"#layout[data-v-750a0052],#nuxt[data-v-750a0052]{background-color:brown}",""]),r.locals={},t.exports=r},438:function(t,e,n){"use strict";n.r(e);e.default={namespaced:!1,state:function(){return{count:0}},mutations:{},actions:{},getters:{}}},439:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(70),{AUTHENTICATE:function(t,e){t.showLoader=!0,t.password=e,localStorage.setItem("password",e)},AUTHENTICATE_FAILED:function(t){t.showLoader=!1},AUTHENTICATE_ERROR:function(t){t.showLoader=!1},AUTHENTICATE_SUCCESS:function(t,e){t.showLoader=!1,0===e.responseCode&&(t.msisdn=e.msisdn,t.account=e,localStorage.setItem("msisdn",e.msisdn),"INACTIVE"===e.status?this.$router.push("/password"):(t.authenticated=!0,this.$router.push("/")))},LOGOUT_SESSION:function(t){window.localStorage.clear(),sessionStorage.clear(),this.$router.push("/signin"),t.msisdn=null,t.authenticated=!1},UPDATPASSWORD:function(t,e){t.showLoader=!0,t.password=e,localStorage.setItem("password",e)},UPDATPASSWORD_SUCCESS:function(t,e){t.showLoader=!1,t.authenticated=!0,0===e.responseCode&&this.$router.push("/")},UPDATPASSWORD_ERROR:function(t){t.showLoader=!1}}),c={_authenticate:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=t.commit)("AUTHENTICATE",e.password),r.next=4,n.$api.$post("/auth",e).then((function(t){o("AUTHENTICATE_SUCCESS",t)})).catch((function(){o("AUTHENTICATE_ERROR")}));case 4:case"end":return r.stop()}}),r)})))()},_updatepassword:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=t.commit)("UPDATPASSWORD",e.newPassword),r.next=4,n.$api.$put("/auth",e).then((function(t){o("UPDATPASSWORD_SUCCESS",t)})).catch((function(){o("UPDATPASSWORD_ERROR")}));case 4:case"end":return r.stop()}}),r)})))()},_logoutsession:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,n("LOGOUT_SESSION");case 3:case"end":return e.stop()}}),e)})))()}};e.default={namespaced:!1,state:function(){return{showLoader:Boolean,msisdn:null,account:null,password:null,authenticated:!1}},mutations:o,actions:c,getters:{msisdn:function(t){return t.msisdn},password:function(t){return t.password},isAuthenticated:function(t){return null!==t.password}}}},440:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(70),{_fetchbanks:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=t.commit)("GET_BANKS"),r.next=4,n.$api.$post("/banks",e).then((function(t){o("GET_BANKS_SUCCESS",t)})).catch((function(){o("GET_BANKS_ERROR")}));case 4:case"end":return r.stop()}}),r)})))()}});e.default={namespaced:!1,state:function(){return{banks:null}},mutations:{GET_BANKS:function(t){t.showLoader=!0},GET_BANKS_FAILED:function(t){t.showLoader=!1},GET_BANKS_ERROR:function(t){t.showLoader=!1},GET_BANKS_SUCCESS:function(t,e){t.showLoader=!1,t.banks=null==e.banks?[]:e.banks}},actions:o,getters:{banks:function(t){return t.banks}}}},441:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(70),{_fetchgroups:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=t.commit)("GET_GROUPS"),r.next=4,n.$api.$post("/groups",e).then((function(t){o("GET_GROUPS_SUCCESS",t)})).catch((function(){o("GET_GROUPS_ERROR")}));case 4:case"end":return r.stop()}}),r)})))()},_addgroupservicename:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,n.$api.$post("/group/service",e).then((function(t){})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()},_editgroupservicename:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t.commit,r.next=3,n.$api.$put("/group/service",e).then((function(t){})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()},_addbankaccount:function(t,body){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.comit,n.next=3,e.$api.$post("/group/account",body).then((function(t){})).catch((function(){}));case 3:case"end":return n.stop()}}),n)})))()},_addgroupleader:function(t,body){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.comit,n.next=3,e.$api.$post("/group/leader",body).then((function(t){})).catch((function(){}));case 3:case"end":return n.stop()}}),n)})))()},_deletegroupleader:function(t,body){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.dispatch,n.next=3,e.$api.$delete("/group/leader",body).then((function(t){})).catch((function(){}));case 3:case"end":return n.stop()}}),n)})))()},_updatepaymentreference:function(t,body){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.dispatch,n.next=3,e.$api.$put("/group/ref",body).then((function(t){})).catch((function(){}));case 3:return n.next=5,n.sent;case 5:case"end":return n.stop()}}),n)})))()}});e.default={namespaced:!1,state:function(){return{groups:null}},mutations:{GET_GROUPS:function(t){t.showLoader=!0},GET_GROUPS_FAILED:function(t){t.showLoader=!1},GET_GROUPS_ERROR:function(t){t.showLoader=!1},GET_GROUPS_SUCCESS:function(t,e){t.showLoader=!1,t.groups=null==e.groups?[]:e.groups}},actions:o,getters:{groups:function(t){return t.groups}}}},442:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(70),{_fetchgroupusers:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return(o=t.commit)("GET_USERS"),r.next=4,n.$api.$post("/users",e).then((function(t){o("GET_USERS_SUCCESS",t)})).catch((function(){o("GET_USERS_ERROR")}));case 4:case"end":return r.stop()}}),r)})))()},_addgroupuser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dispatch,r.next=3,n.$api.$post("/user",e).then((function(t){o("_fetchgroupusers",{groupId:parseInt(e.groupId)},{root:!0})})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()},_editgroupuser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dispatch,r.next=3,n.$api.$put("/users",e).then((function(t){o("_fetchgroupusers",{groupId:parseInt(e.groupId)},{root:!0})})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()},_deletegroupuser:function(t,e){var n=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.dispatch,r.next=3,n.$api.$post("/users",e).then((function(t){o("_fetchgroupusers",{groupId:parseInt(e.groupId)},{root:!0})})).catch((function(){}));case 3:case"end":return r.stop()}}),r)})))()}});e.default={namespaced:!1,state:function(){return{users:null}},mutations:{GET_USERS:function(t){t.showLoader=!0},GET_USERS_FAILED:function(t){t.showLoader=!1},GET_USERS_ERROR:function(t){t.showLoader=!1},GET_USERS_SUCCESS:function(t,e){t.showLoader=!1,t.users=e.users}},actions:o,getters:{users:function(t){return t.users}}}},462:function(t){t.exports=JSON.parse('{"label":{"heading":{"applicationname":"Ospic HMIS","applicationsettings":"Ospic Settings"},"button":{"btncontactus":"Contact Us","btnaddservicename":"Add Service Name","btnaddbankaccount":"Add bank account","addgroupleader":"Add organization leader","btncancel":"Cancel","btnsave":"Save","btnyessure":"Yes I\'m Sure","btnnotsure":"No I\'m not","adduser":"Add user"},"menu":{"home":"Home"},"message":{"nodataavailable":"No Data available ...","aboutusmessage":"Nbs Administrator Dashboard Application is a Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum","thanksmessage":"Thank you for developing with {{app_name}} and I look forward to bringing more exciting features in the future.","motto":"Making awesome stuffs","saveschedule":"By Clicking save this repayment schedule will be saved and can be re-calculated later. \\n\\n Are you sure you want to save this ? \\n\\n If yes Provide the Name below and click save button to save ","profileupdate":"By clicking *I Agree* you are agreeing to the Terms and Conditions and your profile informattions will be updated with a newly data you provide and your login infomations will also be updated. So you will be requested to re-login with new username if any. \\n\\n Do you agree ?"},"contacts":{"community":"Community"},"dialogs":{"deleteconfirmdialog":"Are you sure you want to delete this item ?"},"tooltip":{"tooltiphello":"Hello there"},"title":{"groupservices":"organization Services"},"tab":{"appointments":"Appointments"},"search":{"searchreportbynameanddescription":"Search report by name/desc"},"breadcrumb":{"dashboard":"Dashboard"}}}')},463:function(t){t.exports=JSON.parse('{"label":{"heading":{"applicationname":"Ospic HMIS","applicationsettings":"Ospic Settings"},"button":{"btncontactus":"Contact Us"},"menu":{"dashboard":"Dashibodi"},"message":{"nodataavailable":"No Data available ..."},"contacts":{"community":"Community"},"dialogs":{"deleteconfirmdialog":"Are you sure you want to delete this item ?"},"tooltip":{"tooltiphello":"Hello there"},"titles":{"settings":"Mipangilio"}}}')},84:function(t,e,n){"use strict";var r=n(479),o={name:"EmptyLayout",layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},c=(n(365),n(59)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e(r.a,{attrs:{dark:""}},[404===t.error.statusCode?e("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):e("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),e("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"35e10596",null);e.a=component.exports}},[[314,30,10,31]]]);