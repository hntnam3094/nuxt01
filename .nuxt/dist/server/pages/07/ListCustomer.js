exports.ids = [10];
exports.modules = {

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/07/ListCustomer.vue?vue&type=template&id=36dc42a3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('NuxtLink',{attrs:{"to":"/07"}},[_vm._v("List Area")]),_vm._ssrNode(" <div class=\"row justify-content-center\"><div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><h4>07-Demo List Customer</h4></div></div> <div class=\"row justify-content-center\"><div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><div class=\"row mt-3\"><div class=\"col\"><input type=\"text\" aria-label=\"Username\" placeholder=\"Search...\""+(_vm._ssrAttr("value",(_vm.keyword)))+" class=\"form-control\" style=\"min-width: 500px\"></div> <div class=\"col\"><button class=\"btn btn-primary\"><i class=\"mdi mdi-magnify\"></i></button></div></div> <div class=\"row mt-2\"><div class=\"col\"><table id=\"customerTable\" class=\"table table-hover\"><thead><tr style=\"text-align:center\"><th>Action</th> <th>ID</th> <th>Customer Name</th> <th>Area ID</th> <th>Updated At</th></tr></thead> <tbody>"+(_vm._ssrList((_vm.result),function(cus){return ("<tr><th><button class=\"btn btn-warning\">Ref Area</button></th> <th scope=\"row\">"+_vm._ssrEscape(_vm._s(cus.id))+"</th> <td>"+_vm._ssrEscape(_vm._s(cus.name))+"</td> <td>"+_vm._ssrEscape(_vm._s(cus.area_id))+"</td> <td>"+_vm._ssrEscape(_vm._s(cus.updated_at))+"</td></tr>")}))+"</tbody></table></div></div></div></div>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/07/ListCustomer.vue?vue&type=template&id=36dc42a3&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/07/ListCustomer.vue?vue&type=script&lang=js&
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
/* harmony default export */ var ListCustomervue_type_script_lang_js_ = ({
  head() {
    return {
      title: '06-Customer Demo'
    };
  },

  asyncData({
    params
  }) {
    return {
      keyword: params.kw
    };
  },

  data() {
    return {
      result: [],
      keyword: ''
    };
  },

  created() {
    console.log(this.keyword);
    this.fetchData();
  },

  methods: {
    searchData() {
      this.fetchData();
    },

    fetchData() {
      this.$axios.$get('/customer', {
        params: {
          keyword: this.keyword
        }
      }).then(res => {
        this.result = res;
      }).catch(error => {
        console.log(error);
      });
    },

    viewDetail(id) {
      this.$router.push({
        name: '07-detail',
        params: {
          detail: id,
          origin: '07-ListCustomer',
          kw: this.keyword
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/07/ListCustomer.vue?vue&type=script&lang=js&
 /* harmony default export */ var _07_ListCustomervue_type_script_lang_js_ = (ListCustomervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/07/ListCustomer.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _07_ListCustomervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "97abde90"
  
)

/* harmony default export */ var ListCustomer = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ListCustomer.js.map