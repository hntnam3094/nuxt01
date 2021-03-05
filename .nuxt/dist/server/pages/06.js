exports.ids = [9];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/06.vue?vue&type=template&id=e84f9188&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div class=\"row justify-content-center\"><div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><h4>06-Demo List Customer</h4></div></div> <div class=\"row justify-content-center\"><div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><div class=\"row mt-2\"><div class=\"col\"><table id=\"customerTable\" class=\"table table-hover\"><thead><tr style=\"text-align:center\"><th>Action</th> <th>ID</th> <th>Customer Name</th> <th>Area ID</th> <th>Updated At</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.result),function(cus){return ("<tr><th><button class=\"btn btn-warning\">Ref Area</button></th> <th scope=\"row\">"+_vm._ssrEscape(_vm._s(cus.id))+"</th> <td>"+_vm._ssrEscape(_vm._s(cus.name))+"</td> <td>"+_vm._ssrEscape(_vm._s(cus.area_id))+"</td> <td>"+_vm._ssrEscape(_vm._s(cus.updated_at))+"</td></tr>")}))+"</tbody></table></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/06.vue?vue&type=template&id=e84f9188&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/06.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _06vue_type_script_lang_js_ = ({
  head() {
    return {
      title: '06-Customer Demo'
    };
  },

  data() {
    return {
      result: []
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      this.$axios.$get('/customer').then(res => {
        this.result = res;
      }).catch(error => {
        console.log(error);
      });
    },

    viewDetail(id) {
      this.$router.push({
        name: '05-detail',
        params: {
          detail: id,
          flat: true
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/06.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_06vue_type_script_lang_js_ = (_06vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/06.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_06vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "53ada50f"
  
)

/* harmony default export */ var _06 = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=06.js.map