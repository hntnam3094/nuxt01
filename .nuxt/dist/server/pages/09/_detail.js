exports.ids = [14];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["a"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'http://localhost:8000/api/'
}));

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/09/_detail.vue?vue&type=template&id=3bd3712c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-center"},[_vm._ssrNode("<div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><div max-width=\"800\" class=\"modal-content mx-auto mt-3\"><div class=\"card\"><h3 class=\"card-header\">\n          Area Detail\n        </h3> <div class=\"card-body\"><div class=\"mb-3\"><label class=\"form-label\">\n              ID Area:\n            </label> <label class=\"form-label\"><b>"+_vm._ssrEscape(_vm._s(_vm.area.id))+"</b></label></div> <div class=\"mb-3\"><label class=\"form-label\">\n              Sequence ID:\n            </label> <label class=\"form-label\"><b>"+_vm._ssrEscape(_vm._s(_vm.area.sequence))+"</b></label></div> <div class=\"mb-3\"><label class=\"form-label\">\n              Name:\n            </label> <label class=\"form-label\"><b>"+_vm._ssrEscape(_vm._s(_vm.area.name))+"</b></label></div> <button type=\"button\" class=\"btn btn-danger\">\n            Back\n          </button></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/09/_detail.vue?vue&type=template&id=3bd3712c&

// EXTERNAL MODULE: ./plugins/axios.js
var axios = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/09/_detail.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _detailvue_type_script_lang_js_ = ({
  async asyncData({
    params
  }) {
    const {
      data
    } = await axios["a" /* default */].get('/areas/' + params.detail);
    return {
      area: data,
      flat: params.flat,
      prevData: params.data
    };
  },

  data() {
    return {
      area: {},
      flat: false,
      prevData: {}
    };
  },

  mounted() {
    console.log(this.prevData);
  },

  methods: {
    back() {
      if (this.flat === true) this.$router.push({
        name: '07-ListCustomer'
      });else this.$router.push({
        name: '07',
        params: {
          data: this.prevData
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/09/_detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var _09_detailvue_type_script_lang_js_ = (_detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/09/_detail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _09_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "e684c5b4"
  
)

/* harmony default export */ var _detail = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_detail.js.map