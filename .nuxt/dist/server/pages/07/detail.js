exports.ids = [12];
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

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/07/detail.vue?vue&type=template&id=3fd5c184&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-center"},[_vm._ssrNode("<div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><div max-width=\"800\" class=\"modal-content mx-auto mt-3\"><div class=\"card\"><h3 class=\"card-header\">\n          Area Detail\n        </h3> <div class=\"card-body\"><div class=\"mb-3\"><label class=\"form-label\">\n              ID Area:\n            </label> <label class=\"form-label\"><b>"+_vm._ssrEscape(_vm._s(_vm.area.id))+"</b></label></div> <div class=\"mb-3\"><label class=\"form-label\">\n              Sequence ID:\n            </label> <label class=\"form-label\"><b>"+_vm._ssrEscape(_vm._s(_vm.area.sequence))+"</b></label></div> <div class=\"mb-3\"><label class=\"form-label\">\n              Name:\n            </label> <label class=\"form-label\"><b>"+_vm._ssrEscape(_vm._s(_vm.area.name))+"</b></label></div> <button type=\"button\" class=\"btn btn-danger\">\n            Back\n          </button></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/07/detail.vue?vue&type=template&id=3fd5c184&

// EXTERNAL MODULE: ./plugins/axios.js
var axios = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/07/detail.vue?vue&type=script&lang=js&
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

/* harmony default export */ var detailvue_type_script_lang_js_ = ({
  async asyncData({
    params
  }) {
    const {
      data
    } = await axios["a" /* default */].get('/areas/' + params.detail);
    return {
      area: data,
      origin: params.origin,
      prevData: params.data,
      keyword: params.kw
    };
  },

  data() {
    return {
      area: {},
      origin: '',
      prevData: {},
      keyword: ''
    };
  },

  created() {
    console.log('keyword', this.keyword);
  },

  mounted() {
    console.log(this.prevData);
  },

  methods: {
    back() {
      this.$router.push({
        name: this.origin,
        params: {
          kw: this.keyword,
          data: this.prevData
        }
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/07/detail.vue?vue&type=script&lang=js&
 /* harmony default export */ var _07_detailvue_type_script_lang_js_ = (detailvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/07/detail.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _07_detailvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "09ccc6cd"
  
)

/* harmony default export */ var detail = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=detail.js.map