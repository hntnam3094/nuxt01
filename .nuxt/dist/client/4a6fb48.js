(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{237:function(t,e,n){"use strict";n.r(e);var r={head:function(){return{title:"06-Customer Demo"}},asyncData:function(t){return{keyword:t.params.kw}},data:function(){return{result:[],keyword:""}},created:function(){console.log(this.keyword),this.fetchData()},methods:{searchData:function(){this.fetchData()},fetchData:function(){var t=this;this.$axios.$get("/customer",{params:{keyword:this.keyword}}).then((function(e){t.result=e})).catch((function(t){console.log(t)}))},viewDetail:function(t){this.$router.push({name:"07-detail",params:{detail:t,origin:"07-ListCustomer",kw:this.keyword}})}}},o=n(25),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("NuxtLink",{attrs:{to:"/07"}},[t._v("List Area")]),t._v(" "),t._m(0),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-8 col-md-6 justify-content-center"},[n("div",{staticClass:"row mt-3"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"form-control",staticStyle:{"min-width":"500px"},attrs:{type:"text","aria-label":"Username",placeholder:"Search..."},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchData(e)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-primary",on:{click:t.fetchData}},[n("i",{staticClass:"mdi mdi-magnify"})])])]),t._v(" "),n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col"},[[n("table",{staticClass:"table table-hover",attrs:{id:"customerTable"}},[t._m(1),t._v(" "),n("tbody",[t._l(t.result,(function(e){return[n("tr",{key:e.id},[n("th",[n("button",{staticClass:"btn btn-warning",on:{click:function(n){return t.viewDetail(e.id)}}},[t._v("Ref Area")])]),t._v(" "),n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.area_id))]),t._v(" "),n("td",[t._v(t._s(e.updated_at))])])]}))],2)])]],2)])])])],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-8 col-md-6 justify-content-center"},[n("h4",[t._v("07-Demo List Customer")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticStyle:{"text-align":"center"}},[n("th",[t._v("Action")]),t._v(" "),n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("Customer Name")]),t._v(" "),n("th",[t._v("Area ID")]),t._v(" "),n("th",[t._v("Updated At")])])])}],!1,null,null,null);e.default=component.exports}}]);