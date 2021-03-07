(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{235:function(t,e,r){"use strict";r.r(e);r(33);var c=r(6),n={head:function(){return{title:"05-Demo"}},asyncData:function(t){return Object(c.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,e.abrupt("return",{prevData:r.data});case 2:case"end":return e.stop()}}),e)})))()},data:function(){return{keyword:"",orderByAsc:!0,orderByAscText:"ASC",result:[],prevData:{}}},watch:{orderByAsc:function(){this.orderByAscText=this.orderByAsc?"ASC":"DESC",this.fetchData()}},created:function(){this.orderByAsc&&this.fetchData()},mounted:function(){this.prevData&&(this.keyword=this.prevData.keyword,this.orderByAsc=this.prevData.orderby)},methods:{addArea:function(){this.prevData={keyword:this.keyword,orderby:this.orderByAsc},this.$router.push({name:"07-add",params:{data:this.prevData}})},searchArea:function(){this.fetchData()},fetchData:function(){var t=this;this.$axios.$get("/areas",{params:{keyword:this.keyword,orderBy:this.orderByAscText}}).then((function(e){t.result=e})).catch((function(t){console.log(t)}))},viewDetail:function(t){this.prevData={keyword:this.keyword,orderby:this.orderByAsc},this.$router.push({name:"07-detail",params:{detail:t,data:this.prevData}})}}},o=r(26),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("NuxtLink",{attrs:{to:"/07/ListCustomer"}},[t._v("List Customer")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-8 col-md-6 justify-content-center"},[r("div",{staticClass:"row mt-3"},[r("div",{staticClass:"col"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.keyword,expression:"keyword"}],staticClass:"form-control",staticStyle:{"min-width":"500px"},attrs:{type:"text","aria-label":"Username",placeholder:"Search..."},domProps:{value:t.keyword},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.searchArea(e)},input:function(e){e.target.composing||(t.keyword=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"col"},[r("button",{staticClass:"btn btn-primary",on:{click:t.fetchData}},[r("i",{staticClass:"mdi mdi-magnify"})])])]),t._v(" "),r("div",{staticClass:"row mt-3 align-items-center"},[r("div",{staticClass:"col-3"},[r("button",{staticClass:"btn btn-success mx-2 d-flex justify-en",attrs:{type:"button"},on:{click:t.addArea}},[r("i",{staticClass:"mdi mdi-plus"})])]),t._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"form-check form-switch"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.orderByAsc,expression:"orderByAsc"}],staticClass:"form-check-input",attrs:{type:"checkbox",id:"flexSwitchCheckChecked",checked:""},domProps:{checked:Array.isArray(t.orderByAsc)?t._i(t.orderByAsc,null)>-1:t.orderByAsc},on:{change:function(e){var r=t.orderByAsc,c=e.target,n=!!c.checked;if(Array.isArray(r)){var o=t._i(r,null);c.checked?o<0&&(t.orderByAsc=r.concat([null])):o>-1&&(t.orderByAsc=r.slice(0,o).concat(r.slice(o+1)))}else t.orderByAsc=n}}}),t._v(" "),r("label",{attrs:{for:"flexSwitchCheckChecked"}},[t._v("Order by "+t._s(t.orderByAscText))])])]),t._v(" "),r("div",{staticClass:"col-6"})]),t._v(" "),r("div",{staticClass:"row mt-2"},[r("div",{staticClass:"col"},[[r("table",{staticClass:"table"},[t._m(1),t._v(" "),r("tbody",[t._l(t.result,(function(area){return[r("tr",{key:area.id},[r("th",[r("button",{staticClass:"btn btn-warning",on:{click:function(e){return t.viewDetail(area.id)}}},[t._v("View")])]),t._v(" "),r("th",{attrs:{scope:"row"}},[t._v(t._s(area.id))]),t._v(" "),r("th",[t._v(t._s(area.sequence))]),t._v(" "),r("td",[t._v(t._s(area.name))]),t._v(" "),r("td",[t._v(t._s(area.updated_at))])])]}))],2)])]],2)])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row justify-content-center"},[r("div",{staticClass:"col-12 col-sm-8 col-md-6 justify-content-center"},[r("h4",[t._v("09-Demo div tag")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",[r("tr",{staticStyle:{"text-align":"center"}},[r("th",[t._v("Action")]),t._v(" "),r("th",[t._v("ID Area")]),t._v(" "),r("th",[t._v("Display Sequence")]),t._v(" "),r("th",[t._v("Name")]),t._v(" "),r("th",[t._v("Updated At")])])])}],!1,null,null,null);e.default=component.exports}}]);