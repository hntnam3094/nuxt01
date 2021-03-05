exports.ids = [3];
exports.modules = {

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/04/add.vue?vue&type=template&id=dc2bfdc2&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-center"},[_vm._ssrNode("<div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><div max-width=\"800\" class=\"modal-content mx-auto mt-3\"><div class=\"card\"><h3 class=\"card-header\">\n          Create Area\n        </h3> <div class=\"card-body\"><form><div class=\"mb-3\"><label for=\"nameInput\" class=\"form-label\">\n                Name\n              </label> <input id=\"nameInput\" required=\"required\""+(_vm._ssrAttr("value",(_vm.name)))+" class=\"form-control\" style=\"min-width: 400px\"></div> <div class=\"mb-3\"><label for=\"sequenceInput\" class=\"form-label\">\n                Sequence\n              </label> <input type=\"number\" id=\"sequenceInput\" required=\"required\""+(_vm._ssrAttr("value",(_vm.sequence)))+" class=\"form-control\" style=\"min-width: 400px\"></div> <button type=\"button\" class=\"btn btn-danger\">\n              Back\n            </button> <button type=\"submit\" class=\"btn btn-primary\">\n              Save\n            </button></form></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/04/add.vue?vue&type=template&id=dc2bfdc2&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/04/add.vue?vue&type=script&lang=js&
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
/* harmony default export */ var addvue_type_script_lang_js_ = ({
  head() {
    return {
      title: 'Add Area'
    };
  },

  data() {
    return {
      name: '',
      sequence: ''
    };
  },

  methods: {
    goBack: function () {
      this.$router.push('/04');
    },
    addArea: async function () {
      await this.$store.dispatch('area/addArea', {
        name: this.name,
        sequence: this.sequence
      });
      this.goBack();
    }
  }
});
// CONCATENATED MODULE: ./pages/04/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var _04_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/04/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _04_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "4d91d85c"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map