(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{212:function(t,e,n){"use strict";var r=n(43),c=n.n(r);e.a=c.a.create({baseURL:"http://localhost:8000/api/"})},237:function(t,e,n){"use strict";n.r(e);n(33);var r=n(6),c=n(212),l={asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,e.next=3,c.a.get("/areas/"+n.detail);case 3:return r=e.sent,data=r.data,e.abrupt("return",{area:data,origin:n.origin,prevData:n.data,keyword:n.kw});case 6:case"end":return e.stop()}}),e)})))()},data:function(){return{area:{},origin:"",prevData:{},keyword:""}},created:function(){console.log("keyword",this.keyword)},mounted:function(){console.log(this.prevData)},methods:{back:function(){this.$router.push({name:this.origin,params:{kw:this.keyword,data:this.prevData}})}}},o=n(25),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-8 col-md-6 justify-content-center"},[n("div",{staticClass:"modal-content mx-auto mt-3",attrs:{"max-width":"800"}},[n("div",{staticClass:"card"},[n("h3",{staticClass:"card-header"},[t._v("\n          Area Detail\n        ")]),t._v(" "),n("div",{staticClass:"card-body"},[n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label"},[t._v("\n              ID Area:\n            ")]),t._v(" "),n("label",{staticClass:"form-label"},[n("b",[t._v(t._s(t.area.id))])])]),t._v(" "),n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label"},[t._v("\n              Sequence ID:\n            ")]),t._v(" "),n("label",{staticClass:"form-label"},[n("b",[t._v(t._s(t.area.sequence))])])]),t._v(" "),n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label"},[t._v("\n              Name:\n            ")]),t._v(" "),n("label",{staticClass:"form-label"},[n("b",[t._v(t._s(t.area.name))])])]),t._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:t.back}},[t._v("\n            Back\n          ")])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);