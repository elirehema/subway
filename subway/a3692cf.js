(window.webpackJsonp=window.webpackJsonp||[]).push([[23,16],{556:function(t,e,n){"use strict";n.r(e);var r=n(606),o=n(478),c=n(63),l=n(487),v={props:{transactions:{type:Array,default:null}},data:function(){return{headers:[{text:"Service",align:"start",sortable:!1,value:"serviceName"},{text:"MSISDN",value:"msisdn"},{text:"Receipt #",value:"receipt"},{text:"Balance Before",value:"balanceBefore"},{text:"Balance After",value:"balanceAfter"},{text:"Pay Number",value:"payNumber"},{text:"Bank Account",value:"bankAccount"},{text:"Payment Ref",value:"paymentReference"}]}}},d=n(59),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return t.transactions?e(r.a,{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.transactions,"sort-by":"calories"},scopedSlots:t._u([{key:"top",fn:function(){return[e(c.a,{attrs:{flat:""}},[e(l.a,{staticClass:"font-weight-bold text-h4"},[t._v("\n        Organization transactions\n      ")]),t._v(" "),e(o.a)],1)]},proxy:!0},{key:"no-data",fn:function(){return[e("p",[t._v("No data")])]},proxy:!0}],null,!1,571151203)}):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=component.exports},557:function(t,e,n){"use strict";n.r(e);var r=n(488),o=n(483),c=n(130),l=n(41),v={props:{serviceno:{type:Object,default:null}},data:function(){return{}}},d=n(59),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return t.serviceno?e(r.a,{staticClass:"my-5 ml-5",attrs:{"max-width":"500"}},[e(o.b,[e(c.a,{attrs:{"three-line":""}},[e(l.b,[e(l.d,[e("span",{staticClass:"font-weight-bold text-h5"},[t._v("Payment Number :   ")]),t._v(" "),e("span",[t._v(t._s(t.serviceno.paymentNumber))])]),t._v(" "),e(l.c,{staticClass:"py-2"},[e("span",{staticClass:"font-weight-bold text-h5"},[t._v("MSISDN :   ")]),t._v(" "),e("span",[t._v(t._s(t.serviceno.msisdn))])]),t._v(" "),e(l.c,[e("span",{staticClass:"font-weight-bold text-h5"},[t._v("Organization ID :   ")]),t._v(" "),e("span",[t._v(t._s(t.serviceno.groupId))])])],1)],1)],1)],1):e("skeleton-summary-card")}),[],!1,null,null,null);e.default=component.exports},558:function(t,e,n){"use strict";n.r(e);var r=n(488),o=n(482),c=n(464),l=n(196),v=n(130),d=n(198),f=n(41),m={props:{service:{type:Object,default:null}}},_=n(59),component=Object(_.a)(m,(function(){var t=this,e=t._self._c;return e(o.a,{attrs:{fluid:""}},[e(r.a,{staticClass:"ma-5 pa-2",attrs:{light:"","max-width":"30%",outlined:"",flat:""}},[e(l.a,{attrs:{dense:""}},[e(v.a,[e(f.b,[e(f.d,[t._v("Service Name (sw) ")])],1),t._v(" "),e(d.a,[e(f.a,[t._v(t._s(t.service.swServiceName))])],1)],1),t._v(" "),e(c.a),t._v(" "),e(v.a,[e(f.b,[e(f.d,[t._v("Service Name (en) ")])],1),t._v(" "),e(d.a,[e(f.a,[t._v(t._s(t.service.enServiceName))])],1)],1),t._v(" "),e(c.a),t._v(" "),e(v.a,[e(f.b,[e(f.d,[t._v("Bank Name ")])],1),t._v(" "),e(d.a,[e(f.a,[t._v(t._s(t.service.bankName))])],1)],1),t._v(" "),e(c.a),t._v(" "),e(v.a,[e(f.b,[e(f.d,[t._v("Bank Account ")])],1),t._v(" "),e(d.a,[e(f.a,[t._v(t._s(t.service.bankAccount))])],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports},613:function(t,e,n){"use strict";n.r(e);var r=n(481),o=n(488),c=n(483),l=n(514),v=n(197),d=n(513),f=n(478),m=n(596),_=n(601),h=n(600),x=n(541),y=n(536),k=n(487),I=n(7),w=(n(69),n(556)),N=n(557),S=n(558),C={components:{"tab-group-transactions":w.default,"tab-group-service-no":N.default,"tab-service-details":S.default},data:function(){return{group:null,service:null,dialog:!1,bankdialog:!1,transactions:null,tab:null,editedIndex:-1,editedItem:{},defaultItem:{},serviceno:null,items:["Details","Transactions","Payment Number"]}},computed:{formtitle:function(){return-1===this.editedIndex?"Add new service name":"Edit Service Name"}},mounted:function(){this._getgroupServiceById()},created:function(){this._getgroupServiceById(),this._getGroupTransactions(),this._getServicePaymentNumber()},methods:{_getgroupServiceById:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("/group/getservice",{groupId:parseInt(t.$route.params.id),serviceId:parseInt(t.$route.params.sid),msisdn:t.msisdn}).then((function(e){t.group=e,t.service=e.services[0]})).catch((function(){}));case 2:return e.next=4,e.sent;case 4:case"end":return e.stop()}}),e)})))()},_getGroupTransactions:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("/transactions",{groupId:parseInt(t.$route.params.id),msisdn:parseInt(t.msisdn),serviceName:parseInt(t.$route.params.sid),startDate:"2000-01-01 02:02:00",endDate:"2022-12-10 02:12:00"}).then((function(e){t.transactions=null===e.transactions?[]:e.transactions})).catch((function(){}));case 2:return e.next=4,e.sent;case 4:case"end":return e.stop()}}),e)})))()},_getServicePaymentNumber:function(){var t=this;return Object(I.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$api.$post("/group/service/no",{groupId:parseInt(t.$route.params.id),serviceId:parseInt(t.$route.params.sid),msisdn:parseInt(t.msisdn)}).then((function(e){t.group=e,t.serviceno=e})).catch((function(){}));case 2:return e.next=4,e.sent;case 4:case"end":return e.stop()}}),e)})))()},_closebakdialog:function(){this.bankdialog=!1}}},O=n(59),component=Object(O.a)(C,(function(){var t=this,e=t._self._c;return t.group?e(o.a,[e(r.a,{attrs:{color:"primary",dark:"","shrink-on-scroll":"",prominent:"","fade-img-on-scroll":"","scroll-threshold":"500"},scopedSlots:t._u([{key:"extension",fn:function(){return[e(h.a,{attrs:{"align-with-title":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(y.a,{attrs:{color:"yellow"}}),t._v(" "),t._l(t.items,(function(n){return e(m.a,{key:n},[t._v("\n          "+t._s(n)+"\n        ")])}))],2)]},proxy:!0}],null,!1,1798312079)},[e(v.a,{staticClass:"mt-4",attrs:{"x-large":""}},[t._v("\n      mdi-account-group\n    ")]),t._v(" "),e(k.a,[e(d.a,{staticClass:"d-flex justify-center align-center"},[e(l.a,{staticClass:"text-h4 font-weight-bold",attrs:{cols:"12"}},[t._v("\n          Service Name:  "+t._s(t.service.enServiceName)+"\n        ")]),t._v(" "),e(l.a,{staticClass:"text-h5 font-weight-bold",attrs:{cols:"12"}},[t._v("\n          Organization ID:  "+t._s(t.group.groupId)+"\n        ")])],1)],1),t._v(" "),e(f.a)],1),t._v(" "),e(x.a,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(t){return e(_.a,{key:t},[e(o.a,{attrs:{flat:""}},[e(c.b)],1)],1)})),1),t._v(" "),e(x.a,{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[e(_.a,[e("tab-service-details",{attrs:{service:t.service}})],1),t._v(" "),e(_.a,[e("tab-group-transactions",{attrs:{transactions:t.transactions}})],1),t._v(" "),e(_.a,[e("tab-group-service-no",{attrs:{serviceno:t.serviceno}})],1)],1)],1):e("skeleton-table-loader")}),[],!1,null,null,null);e.default=component.exports}}]);