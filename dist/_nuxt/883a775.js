(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{215:function(e,t,n){"use strict";var r=n(12),c=n(2),o=n(61),l=n(17),f=n(15),m=n(28),d=n(145),v=n(60),h=n(5),N=n(92),I=n(89).f,_=n(46).f,C=n(16).f,w=n(216).trim,A="Number",x=c.Number,E=x.prototype,y=m(N(E))==A,S=function(e){var t,n,r,c,o,l,f,code,m=v(e,!1);if("string"==typeof m&&m.length>2)if(43===(t=(m=w(m)).charCodeAt(0))||45===t){if(88===(n=m.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(m.charCodeAt(1)){case 66:case 98:r=2,c=49;break;case 79:case 111:r=8,c=55;break;default:return+m}for(l=(o=m.slice(2)).length,f=0;f<l;f++)if((code=o.charCodeAt(f))<48||code>c)return NaN;return parseInt(o,r)}return+m};if(o(A,!x(" 0o1")||!x("0b1")||x("+0x1"))){for(var k,R=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof R&&(y?h((function(){E.valueOf.call(n)})):m(n)!=A)?d(new x(S(t)),n,R):S(t)},D=r?I(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),F=0;D.length>F;F++)f(x,k=D[F])&&!f(R,k)&&C(R,k,_(x,k));R.prototype=E,E.constructor=R,l(c,A,R)}},216:function(e,t,n){var r=n(14),c="["+n(217)+"]",o=RegExp("^"+c+c+"*"),l=RegExp(c+c+"*$"),f=function(e){return function(t){var n=String(r(t));return 1&e&&(n=n.replace(o,"")),2&e&&(n=n.replace(l,"")),n}};e.exports={start:f(1),end:f(2),trim:f(3)}},217:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},218:function(e,t,n){n(4)({target:"Number",stat:!0},{isInteger:n(219)})},219:function(e,t,n){var r=n(10),c=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&c(e)===e}},238:function(e,t,n){"use strict";n.r(t);n(27),n(215),n(218),n(34);var r=n(6),c={head:function(){return{title:"Add Area"}},asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,t.abrupt("return",{prevData:n.data});case 2:case"end":return t.stop()}}),t)})))()},data:function(){return{name:"",sequence:"",nameRules:[function(e){return!!e||"Name is required"}],sequenceRules:[function(e){return!!e||"Sequence is required"},function(e){return Number.isInteger(Number(e))||"The value must be an integer number"}],prevData:{}}},created:function(){console.log(this.prevData)},methods:{backArea:function(){this.$router.push({name:"07",params:{data:this.prevData}}),this.$emit("pop",this.prevData)},addNew:function(){var e=this;this.$axios.$post("/areas",{sequence:this.sequence,name:this.name}).then((function(){e.backArea()})).catch((function(e){console.log(e)}))}}},o=n(26),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col-12 col-sm-8 col-md-6 justify-content-center"},[n("div",{staticClass:"modal-content mx-auto mt-3",attrs:{"max-width":"800"}},[n("div",{staticClass:"card"},[n("h3",{staticClass:"card-header"},[e._v("\n          Create Area\n        ")]),e._v(" "),n("div",{staticClass:"card-body"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.addNew(t)}}},[n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label",attrs:{for:"nameInput"}},[e._v("\n                Name\n              ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],staticClass:"form-control",staticStyle:{"min-width":"400px"},attrs:{id:"nameInput",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),n("div",{staticClass:"mb-3"},[n("label",{staticClass:"form-label",attrs:{for:"sequenceInput"}},[e._v("\n                Sequence\n              ")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.sequence,expression:"sequence"}],staticClass:"form-control",staticStyle:{"min-width":"400px"},attrs:{type:"number",id:"sequenceInput",required:""},domProps:{value:e.sequence},on:{input:function(t){t.target.composing||(e.sequence=t.target.value)}}})]),e._v(" "),n("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:e.backArea}},[e._v("\n              Back\n            ")]),e._v(" "),n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[e._v("\n              Save\n            ")])])])])])])])}),[],!1,null,null,null);t.default=component.exports}}]);