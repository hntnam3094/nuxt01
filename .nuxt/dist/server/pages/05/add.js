exports.ids = [7];
exports.modules = {

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/05/add.vue?vue&type=template&id=7fb2d0a1&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"row justify-content-center"},[_vm._ssrNode("<div class=\"col-12 col-sm-8 col-md-6 justify-content-center\"><div max-width=\"800\" class=\"modal-content mx-auto mt-3\"><div class=\"card\"><h3 class=\"card-header\">\n          Create Area\n        </h3> <div class=\"card-body\"><form><div class=\"mb-3\"><label for=\"nameInput\" class=\"form-label\">\n                Name\n              </label> <input id=\"nameInput\" required=\"required\""+(_vm._ssrAttr("value",(_vm.name)))+" class=\"form-control\" style=\"min-width: 400px\"></div> <div class=\"mb-3\"><label for=\"sequenceInput\" class=\"form-label\">\n                Sequence\n              </label> <input type=\"number\" id=\"sequenceInput\" required=\"required\""+(_vm._ssrAttr("value",(_vm.sequence)))+" class=\"form-control\" style=\"min-width: 400px\"></div> <button type=\"button\" class=\"btn btn-danger\">\n              Back\n            </button> <button type=\"submit\" class=\"btn btn-primary\">\n              Save\n            </button></form></div></div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/05/add.vue?vue&type=template&id=7fb2d0a1&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/05/add.vue?vue&type=script&lang=js&
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

  props: {
    prevData: {}
  },

  data() {
    return {
      name: '',
      sequence: '',
      nameRules: [v => !!v || 'Name is required'],
      sequenceRules: [v => !!v || 'Sequence is required', v => Number.isInteger(Number(v)) || 'The value must be an integer number']
    };
  },

  methods: {
    backArea() {
      this.$router.push('/05');
      this.$emit('pop', this.prevData);
    },

    addNew() {
      this.$axios.$post('/areas', {
        sequence: this.sequence,
        name: this.name
      }).then(() => {
        this.backArea();
      }).catch(error => {
        console.log(error);
      });
    }

  }
});
// CONCATENATED MODULE: ./pages/05/add.vue?vue&type=script&lang=js&
 /* harmony default export */ var _05_addvue_type_script_lang_js_ = (addvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/05/add.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _05_addvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6d7b82d3"
  
)

/* harmony default export */ var add = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=add.js.map