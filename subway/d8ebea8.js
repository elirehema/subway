(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{486:function(t,e,r){"use strict";r.d(e,"a",(function(){return c})),r.d(e,"b",(function(){return d})),r.d(e,"c",(function(){return f}));var n=r(491),o=r(1),c=Object(o.i)("v-card__actions"),l=Object(o.i)("v-card__subtitle"),d=Object(o.i)("v-card__text"),f=Object(o.i)("v-card__title");n.a},491:function(t,e,r){"use strict";r(12),r(13),r(11),r(4),r(15),r(10),r(16);var n=r(2),o=(r(25),r(210),r(211),r(506),r(213)),c=r(508),l=r(88),d=r(9);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(c.a,l.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return v(v({"v-card":!0},l.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=v({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=c.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},506:function(t,e,r){var content=r(507);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("61d1dd60",content,!0,{sourceMap:!1})},507:function(t,e,r){var n=r(18)((function(i){return i[1]}));n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card>.v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card>.v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{word-wrap:break-word;border-width:thin;display:block;max-width:100%;outline:none;position:relative;-webkit-text-decoration:none;text-decoration:none;transition-property:box-shadow,opacity;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip):not(.v-avatar),.v-card>:first-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip):not(.v-avatar){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{left:0;overflow:hidden;right:0;top:0}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;letter-spacing:.0071428571em;line-height:1.375rem}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),n.locals={},t.exports=n},515:function(t,e,r){"use strict";r(13),r(11),r(15),r(16);var n=r(2),o=(r(4),r(57),r(74),r(37),r(12),r(26),r(58),r(492),r(46),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(47),r(10),r(303),r(0)),c=r(87),l=r(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=["start","end","center"];function m(t,e){return v.reduce((function(r,n){return r[t+Object(l.D)(n)]=e(),r}),{})}var O=function(t){return[].concat(h,["baseline","stretch"]).includes(t)},y=m("align",(function(){return{type:String,default:null,validator:O}})),j=function(t){return[].concat(h,["space-between","space-around"]).includes(t)},_=m("justify",(function(){return{type:String,default:null,validator:j}})),w=function(t){return[].concat(h,["space-between","space-around","stretch"]).includes(t)},x=m("alignContent",(function(){return{type:String,default:null,validator:w}})),P={align:Object.keys(y),justify:Object.keys(_),alignContent:Object.keys(x)},k={align:"align",justify:"justify",alignContent:"align-content"};function C(t,e,r){var n=k[t];if(null!=r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return(n+="-".concat(r)).toLowerCase()}}var S=new Map;e.a=o.a.extend({name:"v-row",functional:!0,props:f(f(f({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:O}},y),{},{justify:{type:String,default:null,validator:j}},_),{},{alignContent:{type:String,default:null,validator:w}},x),render:function(t,e){var r=e.props,data=e.data,o=e.children,l="";for(var d in r)l+=String(r[d]);var f=S.get(l);if(!f){var v,h;for(h in f=[],P)P[h].forEach((function(t){var e=r[t],n=C(h,t,e);n&&f.push(n)}));f.push((v={"no-gutters":r.noGutters,"row--dense":r.dense},Object(n.a)(v,"align-".concat(r.align),r.align),Object(n.a)(v,"justify-".concat(r.justify),r.justify),Object(n.a)(v,"align-content-".concat(r.alignContent),r.alignContent),v)),S.set(l,f)}return t(r.tag,Object(c.a)(data,{staticClass:"row",class:f}),o)}})},516:function(t,e,r){"use strict";r(13),r(11),r(15),r(16);var n=r(2),o=(r(4),r(25),r(12),r(26),r(58),r(492),r(46),r(493),r(494),r(495),r(496),r(497),r(498),r(499),r(500),r(501),r(502),r(503),r(504),r(505),r(47),r(57),r(10),r(66),r(303),r(0)),c=r(87),l=r(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=v.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),O=v.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(h),offset:Object.keys(m),order:Object.keys(O)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var _=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},O),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in r)l+=String(r[d]);var f=_.get(l);if(!f){var v,h;for(h in f=[],y)y[h].forEach((function(t){var e=r[t],n=j(h,t,e);n&&f.push(n)}));var m=f.some((function(t){return t.startsWith("col-")}));f.push((v={col:!m||!r.cols},Object(n.a)(v,"col-".concat(r.cols),r.cols),Object(n.a)(v,"offset-".concat(r.offset),r.offset),Object(n.a)(v,"order-".concat(r.order),r.order),Object(n.a)(v,"align-self-".concat(r.alignSelf),r.alignSelf),v)),_.set(l,f)}return t(r.tag,Object(c.a)(data,{class:f}),o)}})},531:function(t,e,r){"use strict";var n=r(2),o=(r(57),r(74),r(218),r(11),r(4),r(10),r(65),r(172),r(12),r(13),r(15),r(16),r(9)),c=r(97),l=r(140);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},r={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?r.shouldValidate=input.$watch("shouldValidate",(function(n){n&&(t.errorBag.hasOwnProperty(input._uid)||(r.valid=e(input)))})):r.valid=e(input),r},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},612:function(t,e,r){"use strict";r.r(e);var n=r(466),o=r(491),c=r(486),l=r(516),d=r(485),f=r(531),v=r(133),h=r(197),m=r(132),O=r(41),y=r(515),j=r(480),_=r(601),w=(r(12),r(13),r(11),r(4),r(15),r(10),r(16),r(2)),x=r(116);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function k(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var C={layout:"login",data:function(){return{form:{userId:"",password:""},title:"Market Grid : Login"}},computed:k({},Object(x.c)({account:"account"})),created:function(){this.form.userId=this.account.msisdn},methods:k(k({},Object(x.b)(["login"])),{},{formSubmit:function(){this.$store.dispatch("_updatepassword",this.form)}})},S=r(60),component=Object(S.a)(C,(function(){var t=this,e=t._self._c;return e(f.a,{staticClass:"form-box",on:{submit:function(e){return e.preventDefault(),t.formSubmit.apply(null,arguments)}}},[e(d.a,{attrs:{height:"100%"}},[e(y.a,{staticClass:"mt-0"},[e(l.a,{attrs:{cols:"12",sm:"12",md:"2"}},[e("img",{staticClass:"ml-2 dark-logo",attrs:{src:"/logo.png",alt:"homepage",width:"160"}})])],1),t._v(" "),e("div",{staticClass:"d-flex align-center justify-center mt-15"},[e(y.a,{staticClass:"mt-0",attrs:{"no-gutters":""}},[e(l.a,{staticClass:"d-flex justify-center align-center",attrs:{cols:"12",md:"5"}},[e(h.a,{attrs:{color:"transparent"}},[e(m.a,{attrs:{"three-line":""}},[e(O.b,[e(O.d,{staticClass:"text-sm-h4 text-md-h3 text-lg-h2 primary--text text-sm-center text-md-left"},[t._v("\n                  Ngazi Technologies\n                ")]),t._v(" "),e(O.c,{staticClass:"mt-10 text-sm-h5 text-md-h4 text-lg-h4 black--text text-sm-center text-md-left"},[t._v("\n                  Lorem Ipsum dolor sit de amet cons\n                ")])],1)],1)],1)],1),t._v(" "),e(j.a),t._v(" "),e(l.a,{staticClass:"mt-5 d-flex justify-center",attrs:{cols:"12",md:"5",lg:"4"}},[e(o.a,{staticClass:"py-12"},[e(c.c,{staticClass:"d-flex justify-center"},[e("span",{staticClass:"font-weight-bold text-h5"},[t._v("Change Password")])]),t._v(" "),e(c.b,[e(y.a,{staticClass:"mt-5",attrs:{"no-gutters":""}},[e(l.a,{staticClass:"mt-3",attrs:{cols:"12"}},[e(_.a,{staticClass:"text-h4 px-3 form-input",attrs:{color:"black",outlined:"",placeholder:"e.g 255716000000",label:"Phone Number",required:""},model:{value:t.form.userId,callback:function(e){t.$set(t.form,"userId",e)},expression:"form.userId"}})],1),t._v(" "),e(l.a,{staticClass:"mt-3",attrs:{cols:"12"}},[e(_.a,{staticClass:"text-h4 px-3",attrs:{autocomplete:"off",color:"black",placeholder:"*********",type:"password",outlined:"",label:"Current Password",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),e(l.a,{staticClass:"mt-3",attrs:{cols:"12"}},[e(_.a,{staticClass:"text-h4 px-3",attrs:{autocomplete:"off",color:"black",placeholder:"*********",type:"password",outlined:"",label:"New Password",required:""},model:{value:t.form.newPassword,callback:function(e){t.$set(t.form,"newPassword",e)},expression:"form.newPassword"}})],1),t._v(" "),e(l.a,{staticClass:"mt-5 d-flex justify-center",attrs:{cols:"12"}},[e(n.a,{attrs:{block:"",type:"submit",color:"button",dark:""}},[t._v("\n                    Continue\n                    "),e(v.a,{attrs:{right:""}},[t._v("\n                      mdi-arrow-right-bold\n                    ")])],1)],1),t._v(" "),e(l.a,{attrs:{cols:"12"}})],1)],1)],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports}}]);