(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{232:function(t,e,n){"use strict";n.r(e);var c={head:function(){return{title:"06-Customer Demo"}},data:function(){return{result:[]}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;this.$axios.$get("/customer").then((function(e){t.result=e})).catch((function(t){console.log(t)}))},viewDetail:function(t){this.$router.push({name:"05-detail",params:{detail:t,flat:!0}})}}},r=n(25),component=Object(r.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._m(0),t._v(" "),n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-8 col-md-6 justify-content-center"},[n("div",{staticClass:"row mt-2"},[n("div",{staticClass:"col"},[[n("table",{staticClass:"table table-hover",attrs:{id:"customerTable"}},[t._m(1),t._v(" "),n("tbody",[t._l(t.result,(function(e){return[n("tr",{key:e.id},[n("th",[n("button",{staticClass:"btn btn-warning",on:{click:function(n){return t.viewDetail(e.id)}}},[t._v("Ref Area")])]),t._v(" "),n("th",{attrs:{scope:"row"}},[t._v(t._s(e.id))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.area_id))]),t._v(" "),n("td",[t._v(t._s(e.updated_at))])])]}))],2)])]],2)])])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-8 col-md-6 justify-content-center"},[n("h4",[t._v("06-Demo List Customer")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",{staticStyle:{"text-align":"center"}},[n("th",[t._v("Action")]),t._v(" "),n("th",[t._v("ID")]),t._v(" "),n("th",[t._v("Customer Name")]),t._v(" "),n("th",[t._v("Area ID")]),t._v(" "),n("th",[t._v("Updated At")])])])}],!1,null,null,null);e.default=component.exports}}]);